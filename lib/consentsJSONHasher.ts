/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */

import { generateHash } from "./utils";

export class ConsentsJSONHasher {
  /**
   * Processes the consent data, generates hashes for each action, and converts to sorted JSON.
   * Matches Elixir: build_consent_records_with_hash
   */
  static buildConsentRecordsWithHash(data: any) {
    try {
      const { history, taxonomy_version } = data;
      const allConsentsWithHash: any[] = [];

      // Map through history items (Business Processes)
      const historyJson = history.map((item: any) => {
        const { json, events } = this.processHistoryItemToJson(
          item,
          taxonomy_version
        );
        allConsentsWithHash.push(...events);
        return json;
      });

      // Elixir logic assumes single root if array, extracting [history_json]
      const creatorData =
        historyJson.length === 1 ? historyJson[0] : historyJson;

      return {
        creator_data: creatorData,
        artifact_hash: generateHash(creatorData),
        consents_with_artifact_hash: allConsentsWithHash,
      };
    } catch (e) {
      console.error("JSON conversion failed", e);
      throw new Error("JSON conversion failed");
    }
  }

  private static processHistoryItemToJson(item: any, taxonomyVersion: any) {
    const { purposesJson, consentsWithHash } = this.processPurposesToJson(
      item.processing_purposes,
      item,
      taxonomyVersion
    );

    const json: any = {
      business_process: {
        business_process_code: item.business_process_code,
        business_process_version: String(item.business_process_version),
        policy_code: item.policy_code,
        policy_name: item.policy_name,
        policy_version: String(item.policy_version),
        processing_purposes: purposesJson,
      },
    };

    if (taxonomyVersion != null) {
      json.data_fiduciary_id = item.data_fiduciary_id;
    }

    return { json, events: consentsWithHash };
  }

  private static processPurposesToJson(
    purposes: any[],
    historyItem: any,
    taxonomyVersion: any
  ) {
    const allEvents: any[] = [];
    const purposesJson = purposes.map((purpose) => {
      const { purposeJson, purposeEvents } = this.processPurposeToJson(
        purpose,
        historyItem,
        taxonomyVersion
      );
      allEvents.push(...purposeEvents);
      return purposeJson;
    });

    return { purposesJson, consentsWithHash: allEvents };
  }

  private static processPurposeToJson(
    purpose: any,
    historyItem: any,
    taxonomyVersion: any
  ) {
    const { entitiesJson, consentsWithHash } = this.processEntitiesToJson(
      purpose.history_logs,
      historyItem,
      purpose,
      taxonomyVersion
    );

    const json: any = {
      processing_purpose_code: purpose.processing_purpose_code,
      consent_purpose_code: purpose.consent_purpose_code,
      consent_purpose_version: String(purpose.consent_purpose_version),
    };

    if (taxonomyVersion == null) {
      json.user_attributes = entitiesJson;
    } else {
      json.history_logs = entitiesJson;
    }

    return { purposeJson: json, purposeEvents: consentsWithHash };
  }

  private static processEntitiesToJson(
    entities: any[],
    historyItem: any,
    purpose: any,
    taxonomyVersion: any
  ) {
    const allEvents: any[] = [];
    const entitiesJson = entities.map((entity) => {
      const { entityJson, entityEvents } = this.processEntityToJson(
        entity,
        historyItem,
        purpose,
        taxonomyVersion
      );
      allEvents.push(...entityEvents);
      return entityJson;
    });

    return { entitiesJson, consentsWithHash: allEvents };
  }

  private static processEntityToJson(
    entity: any,
    historyItem: any,
    purpose: any,
    taxonomyVersion: any
  ) {
    const { actionsJson, consentsWithHash } = this.processActionsToJson(
      entity.actions,
      historyItem,
      purpose,
      entity,
      taxonomyVersion
    );

    const json: any = {
      reference_id: entity.reference_id,
      language: entity.language,
      status: entity.status,
      data_principal_id: entity.data_principal_id,
      minor_data_principal_id: entity.minor_data_principal_id,
      inserted_at: entity.inserted_at,
      updated_at: entity.updated_at,
      expires_at: entity.expires_at,
      actions: actionsJson,
    };

    if (taxonomyVersion == null) {
      // Legacy logic: when taxonomy_version is nil, user_attributes only has one entry
      const [userAttributeName] = entity.user_attributes || [];
      json.data_fiduciary_id = entity.data_fiduciary_id;
      json.user_attribute_name = userAttributeName;
    } else {
      json.user_attributes = entity.user_attributes;
    }

    return { entityJson: json, entityEvents: consentsWithHash };
  }

  private static processActionsToJson(
    actions: any[],
    historyItem: any,
    purpose: any,
    entity: any,
    taxonomyVersion: any
  ) {
    const allEvents: any[] = [];
    const actionsJson = actions.map((action) => {
      const { json, event } = this.processActionToJson(
        action,
        historyItem,
        purpose,
        entity,
        taxonomyVersion
      );
      allEvents.push(event);
      return json;
    });

    return { actionsJson, consentsWithHash: allEvents };
  }

  private static processActionToJson(
    action: any,
    historyItem: any,
    purpose: any,
    entity: any,
    taxonomyVersion: any
  ) {
    // Generate the specific payload for the hash
    const consents = this.createActionEvent(
      historyItem,
      purpose,
      entity,
      action,
      taxonomyVersion
    );
    const hash = generateHash(consents);

    // Needed for insertion in immudb (from Elixir context)
    const consentsWithHash = { ...consents, hash };

    const json = {
      type: action.action,
      consent_id: action.consent_id,
      performed_at: action.performed_at,
      performed_by: action.performed_by,
      data_integrity: {
        hash: hash,
      },
    };

    return { json, event: consentsWithHash };
  }

  private static createActionEvent(
    historyItem: any,
    purpose: any,
    entity: any,
    action: any,
    taxonomyVersion: any
  ) {
    const json: any = {
      action: action.action,
      business_process_code: historyItem.business_process_code,
      business_process_version: historyItem.business_process_version,
      consent_id: action.consent_id,
      consent_purpose_code: purpose.consent_purpose_code,
      consent_purpose_version: purpose.consent_purpose_version,
      data_principal_id: entity.data_principal_id,
      language: entity.language,
      minor_data_principal_id: entity.minor_data_principal_id,
      performed_at: action.performed_at,
      performed_by: action.performed_by,
      policy_code: historyItem.policy_code,
      policy_version: historyItem.policy_version,
      processing_purpose_code: purpose.processing_purpose_code,
      reference_id: entity.reference_id,
    };

    if (taxonomyVersion == null) {
      const [userAttributeName] = entity.user_attributes || [];
      json.user_attribute_name = userAttributeName;
      json.data_fiduciary_id = entity.data_fiduciary_id;
    } else {
      json.user_attributes = entity.user_attributes;
    }

    return json;
  }
}
