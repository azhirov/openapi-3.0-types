import type { WithExtensions } from './WithExtensions';
import type { SchemaObject3 } from './SchemaObject3';
import type { ReferenceObject3 } from './ReferenceObject3';
import type { ExampleObject3 } from './ExampleObject3';
import type { EncodingObject3 } from './EncodingObject3';

/* Spec: https://spec.openapis.org/oas/v3.0.3#mediaTypeObject */
export interface MediaTypeObject3 extends WithExtensions {
  // The schema defining the content of the request, response, or parameter.
  schema?: SchemaObject3 | ReferenceObject3;

  // if referencing a schema which contains an example,
  // the example value SHALL override the example provided by the schema
  example?: any;

  //  if referencing a schema which contains an example,
  //  the examples value SHALL override the example provided by the schema.
  examples?: Record<string, ExampleObject3 | ReferenceObject3>

  // A map between a property name and its encoding information.
  // The key, being the property name, MUST exist in the schema as a property.
  // The encoding object SHALL only apply to requestBody objects
  // when the media type is multipart or application/x-www-form-urlencoded.
  encoding?: Record<string, EncodingObject3>;
}
