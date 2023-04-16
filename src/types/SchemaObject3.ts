import type { DiscriminatorObject3 } from './DiscriminatorObject3';
import type { XMLObject3 } from './XMLObject3';
import type { ExternalDocObject3 } from './ExternalDocObject3';
import type { SchemaObjectJsonSchema3 } from './SchemaObjectJsonSchema3';
import type { SchemaObjectJsonSchemaOAS3 } from './SchemaObjectJsonSchemaOAS3';
import type { WithExtensions } from './WithExtensions';

/* Spec: https://spec.openapis.org/oas/v3.0.3#schema-object */
export interface SchemaObject3 extends SchemaObjectJsonSchema3, SchemaObjectJsonSchemaOAS3, WithExtensions {
  // A true value adds "null" to the allowed type specified by the type keyword,
  // only if type is explicitly defined within the same Schema Object.
  // Default: false
  nullable?: boolean;

  // The discriminator is an object name that is used to differentiate
  // between other schemas which may satisfy the payload description.
  discriminator?: DiscriminatorObject3;

  // Relevant only for Schema "properties" definitions.
  // MAY be sent as part of a response but SHOULD NOT be sent as part of the request.
  // The `required` will take effect on the response only
  readOnly?: boolean;

  // Relevant only for Schema "properties" definitions.
  // MAY be sent as part of a request but SHOULD NOT be sent as part of the response.
  // The `required` will take effect on the request only
  writeOnly?: boolean;

  // This MAY be used only on properties schemas. It has no effect on root schemas.
  xml?: XMLObject3;

  // Additional external documentation for this schema.
  externalDocs?: ExternalDocObject3;

  // A free-form property to include an example of an instance for this schema.
  example?: any;

  // Default value is false.
  deprecated?: boolean;
}
