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

export class NoticeUpdates {
  /**
   * Merges business process and purpose names into timeline data.
   * Matches Elixir: modify_timeline_data/2
   */
  static buildMessageBrokerEvent(
    consentData: any,
    timelineDataWithHashes: any,
    message: any,
    metadata: any
  ) {
    const updatedTimelineData = this.modifyTimelineData(
      consentData,
      timelineDataWithHashes
    );

    return {
      data_fiduciary_id: message.data_fiduciary_id,
      eid: message.eid,
      type: message.type,
      data_principal_id: message.data_principal_id,
      reference_id: message.reference_id,
      business_process_code: message.business_process_code,
      business_process_version: message.business_process_version,
      timestamp: message.timestamp,
      metadata: metadata,
      timeline_data_with_hashes: updatedTimelineData,
      consent_ids: message.consent_ids,
      performed_by: message.performed_by,
      notice_metadata: message.notice_metadata,
      taxonomy_version: consentData.taxonomy_version,
    };
  }

  private static modifyTimelineData(
    consentData: any,
    timelineDataWithHashes: any
  ) {
    if (!consentData || !timelineDataWithHashes) return timelineDataWithHashes;

    const lookupMap = this.buildLookupMap(consentData);

    // Deep clone to avoid mutation side effects
    const updatedData = JSON.parse(JSON.stringify(timelineDataWithHashes));

    // In the hashed structure, 'business_process' is usually the root property
    if (updatedData.business_process) {
      const bpCode = updatedData.business_process.business_process_code;
      const bpData = lookupMap[bpCode] || {};
      const ppLookup = bpData.processing_purposes || {};

      // Enrich Processing Purposes
      if (updatedData.business_process.processing_purposes) {
        updatedData.business_process.processing_purposes =
          updatedData.business_process.processing_purposes.map((pp: any) => {
            const ppCode = pp.processing_purpose_code;
            const extraInfo = ppLookup[ppCode] || {};
            return { ...pp, ...extraInfo };
          });
      }

      // Enrich Business Process Name
      updatedData.business_process.business_process_name =
        bpData.business_process_name;
    }

    return updatedData;
  }

  private static buildLookupMap(consentData: any) {
    const history = consentData.history || [];
    const map: any = {};

    history.forEach((item: any) => {
      const bpCode = item.business_process_code;
      const bpName = item.business_process_name;
      const purposes = item.processing_purposes || [];

      const ppLookup: any = {};
      purposes.forEach((pp: any) => {
        ppLookup[pp.processing_purpose_code] = {
          consent_purpose_name: pp.consent_purpose_name,
          processing_purpose_name: pp.processing_purpose_name,
        };
      });

      map[bpCode] = {
        business_process_name: bpName,
        processing_purposes: ppLookup,
      };
    });

    return map;
  }
}
