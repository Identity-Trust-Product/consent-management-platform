openapi: 3.0.0
info:
  title: Open Bharat Digital Consent API
  description: API specifications for the Notices routes in the Consent Management Platform.
  version: 1.0.0
servers:
  - url: /cms/api/v1
    description: v1 API Server
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      description: Provide your API key as a Bearer token.
  schemas:
    NoticeMetadata:
      type: object
      required:
        - key
        - value
      properties:
        key:
          type: string
          description: Metadata key (minimum 1 character)
        value:
          type: string
          description: Metadata value (minimum 1 character)
    CreateGrantNoticeRequest:
      type: object
      required:
        - reference_id
        - data_principal_id
        - notice_settings
        - consent_settings
        - business_process
      properties:
        reference_id:
          type: string
          minLength: 3
          maxLength: 255
          description: Reference ID. Can only contain alphanumeric characters and ( ) . _ - /
        data_principal_id:
          type: string
          minLength: 3
          maxLength: 255
          description: Data Principal ID. Can only contain alphanumeric characters and ( ) . _ - /
        notice_settings:
          type: object
          required:
            - expires_in_hours
            - view_mode
          properties:
            expires_in_hours:
              type: number
              minimum: 0.5
              description: Notice expiration in hours (must be at least 0.5)
            redirection_type:
              type: string
              enum: [redirect]
              description: Type of redirection
            redirection_url:
              type: string
              format: uri
              description: Valid URL to redirect to
            default_language:
              type: string
              default: en
              description: Default language for the notice
            view_mode:
              type: string
              enum:
                - purpose_of_processing
                - purpose_of_consent
                - user_attributes
              description: View mode for the notice
        consent_settings:
          type: object
          properties:
            expires_in_hours:
              type: integer
              minimum: 1
              description: Consent expiration in hours (must be at least 1)
        business_process:
          type: object
          required:
            - code
            - version
          properties:
            code:
              type: string
              minLength: 1
              description: Business process code
            version:
              type: integer
              minimum: 1
              description: Business process version
        metadata:
          type: array
          items:
            $ref: '#/components/schemas/NoticeMetadata'
          description: Metadata array. Required fields `major_dataprincipal_id` and `relationship_with_minor` if `for_minor` is true.
        for_minor:
          type: boolean
          default: false
          description: Whether the notice is for a minor.
    CreateGrantNoticeResponse:
      type: object
      properties:
        success:
          type: boolean
          example: true
        data:
          type: object
          properties:
            notice_id:
              type: string
            data_principal_id:
              type: string
            reference_id:
              type: string
            business_process_name:
              type: string
            business_process_code:
              type: string
            status:
              type: string
              example: pending
            selected_language:
              type: string
              nullable: true
            resource_type:
              type: string
              example: grant_notice
            inserted_at:
              type: string
              format: date-time
            updated_at:
              type: string
              format: date-time
            link_details:
              type: object
              properties:
                link:
                  type: string
                embed_link:
                  type: string
                expires_at:
                  type: string
                  format: date-time
            for_minor:
              type: boolean
    GetGrantNoticeResponse:
      type: object
      properties:
        business_process_code:
          type: string
        consent_status:
          type: string
          nullable: true
        data_principal_id:
          type: string
        data_principal_submitted_data:
          type: object
          nullable: true
        for_minor:
          type: boolean
        inserted_at:
          type: string
          format: date-time
        notice_id:
          type: string
        notice_link:
          type: string
        reference_id:
          type: string
        status:
          type: string
        updated_at:
          type: string
          format: date-time
security:
  - bearerAuth: []
paths:
  /notices/grant:
    post:
      summary: Create Grant Notice
      description: Creates a new grant notice.
      operationId: createGrantNotice
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateGrantNoticeRequest'
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/CreateGrantNoticeResponse'
        '400':
          description: Validation error
        '404':
          description: Business process not found
        '500':
          description: Internal server error
  /notices/grant/{notice_id}:
    get:
      summary: Get Grant Notice
      description: Retrieves a grant notice using its public ID.
      operationId: getGrantNotice
      parameters:
        - name: notice_id
          in: path
          required: true
          schema:
            type: string
          description: Public ID of the notice
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/GetGrantNoticeResponse'
        '400':
          description: Validation error
        '404':
          description: Notice not found
        '500':
          description: Internal server error
