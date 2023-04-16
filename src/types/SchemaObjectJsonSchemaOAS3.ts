import type { ReferenceObject3 } from './ReferenceObject3';
import type { SchemaObject3 } from './SchemaObject3';
import type { DataType3 } from './DataType3';

/*
* The following properties are taken from the JSON Schema definition
* but their definitions were adjusted to the OpenAPI Specification
*/
export interface SchemaObjectJsonSchemaOAS3 {
  // Value MUST be a string. Multiple types via an array are not supported.
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.21
  type?: DataType3;

  // Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema.
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.22
  allOf?: Array<ReferenceObject3 | SchemaObject3>;

  // Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema.
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.23
  anyOf?: Array<ReferenceObject3 | SchemaObject3>;

  // Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema.
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.24
  oneOf?: Array<ReferenceObject3 | SchemaObject3>;

  // Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema.
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.25
  not?: ReferenceObject3 | SchemaObject3;

  // Value MUST be an object and not an array.
  // Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema.
  // items MUST be present if the type is array.
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.9
  items?: ReferenceObject3 | SchemaObject3;

  // Value can be boolean or object.
  // Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema.
  // Consistent with JSON Schema, additionalProperties defaults to true.
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.9
  additionalProperties?: boolean | ReferenceObject3 | SchemaObject3;

  // Property definitions MUST be a Schema Object and not a standard JSON Schema (inline or referenced).
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.16
  properties?: Record<string, ReferenceObject3 | SchemaObject3>;

  // CommonMark syntax MAY be used for rich text representation.
  // [markdown]
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-6.1
  description?: string;

  // While relying on JSON Schema’s defined formats, the OAS offers a few additional predefined formats.
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-7.3
  format?: string;

  // Unlike JSON Schema, the value MUST conform to the defined type for the Schema Object defined at the same level.
  // For example, if type is string, then default can be "foo" but cannot be 1.
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-6.2
  default?: any;
}
