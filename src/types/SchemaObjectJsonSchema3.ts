/* The following properties are taken directly from the JSON Schema definition and follow the same specifications */
export interface SchemaObjectJsonSchema3 {
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-6.1
  title?: string;

  // MUST be strictly greater than 0.
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.1
  multipleOf?: number;

  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.2
  maximum?: number;

  // Default false
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.3
  exclusiveMaximum?: boolean;

  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.4
  minimum?: number;

  // Default false
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.5
  exclusiveMinimum?: boolean;

  // >= 0
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.6
  maxLength?: number;

  // >= 0
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.7
  minLength?: number;

  // SHOULD be a valid regular expression, according to the ECMA 262 regular expression dialect
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.8
  pattern?: string;

  // >= 0
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.10
  maxItems?: number;

  // >= 0
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.11
  minItems?: number;

  // Default false
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.12
  uniqueItems?: boolean;

  // >= 0
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.13
  maxProperties?: number;

  // >= 0
  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.14
  minProperties?: number;

  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.15
  required: string[];

  // https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-5.20
  enum?: any[]
}
