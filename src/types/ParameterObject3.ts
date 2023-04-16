import type { WithExtensions } from './WithExtensions';
import type { ParameterIn3 } from './ParameterIn3';
import type { ParameterStyle3 } from './ParameterStyle3';
import type { ExampleObject3 } from './ExampleObject3';
import type { ReferenceObject3 } from './ReferenceObject3';
import type { SchemaObject3 } from './SchemaObject3';
import type { MediaTypeObject3 } from './MediaTypeObject3';

/*
* Describes a single operation parameter.
* A unique parameter is defined by a combination of a name and location.
* Spec: https://spec.openapis.org/oas/v3.0.3#parameter-object
*/
export interface ParameterObject3 extends WithExtensions {
  // If `in` is "header" and the `name` is "Accept", "Content-Type" or "Authorization",
  // the parameter definition SHALL be ignored.
  name: string;

  // The location of the parameter
  in: ParameterIn3;

  // A brief description of the parameter. [markdown]
  description?: string;

  // Determines whether this parameter is mandatory.
  // If the parameter location is "path", this property is REQUIRED and its value MUST be true.
  required?: boolean;

  deprecated?: boolean;

  // valid only for query parameters and allows sending a parameter with an empty value. Default value is false.
  // If style is used, and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored.
  allowEmptyValue?: boolean;

  style?: ParameterStyle3;

  // When style is form, the default value is true. For all other styles, the default value is false.
  explode?: boolean;

  // Only for query params
  allowReserved?: boolean;

  // The schema defining the type used for the parameter.
  schema?: SchemaObject3 | ReferenceObject3;

  // SHALL override the example provided by the schema
  example?: any;

  // Examples of the parameter's potential value.
  // examples value SHALL override the example provided by the schema.
  examples?: Record<string, ExampleObject3 | ReferenceObject3>;

  // A map containing the representations for the parameter.
  // The key is the media type and the value describes it.
  // The map MUST only contain one entry.
  content?: Record<string, MediaTypeObject3>
}
