import type { ExternalDocObject3 } from './ExternalDocObject3';
import type { ParameterObject3 } from './ParameterObject3';
import type { ReferenceObject3 } from './ReferenceObject3';
import type { RequestBodyObject3 } from './RequestBodyObject3';
import type { ResponsesObject3 } from './ResponsesObject3';
import type { CallbackObject3 } from './CallbackObject3';
import type { ServerObject3 } from './ServerObject3';
import type { WithExtensions } from './WithExtensions';
import type { SecurityRequirementObject3 } from './SecurityRequirementObject3';

/* Spec: https://spec.openapis.org/oas/v3.0.3#operationObject */
export interface OperationObject3 extends WithExtensions {
  // A list of tags for API documentation control.
  tags?: string[];

  // A short summary of what the operation does.
  summary?: string;

  // [markdown]
  description?: string;

  // Additional external documentation for this operation.
  externalDocs?: ExternalDocObject3;

  // Unique string used to identify the operation.
  operationId?: string;

  // A list of parameters that are applicable for this operation.
  parameters?: Array<ParameterObject3 | ReferenceObject3>;

  // The request body applicable for this operation.
  requestBody?: RequestBodyObject3 | ReferenceObject3;

  // The list of possible responses as they are returned from executing this operation.
  responses: ResponsesObject3;

  // A map of possible out-of band callbacks related to the parent operation.
  // The key is a unique identifier for the Callback Object.
  callbacks?: Record<string, CallbackObject3 | ReferenceObject3>;

  // Default value is false.
  deprecated?: boolean;

  // A declaration of which security mechanisms can be used for this operation.
  // To make security optional, an empty security requirement ({}) can be included in the array.
  // To remove a top-level security declaration, an empty array can be used.
  security?: Array<SecurityRequirementObject3>;

  // An alternative server array to service this operation.
  servers?: Array<ServerObject3>;
}
