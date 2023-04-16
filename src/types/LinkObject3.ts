import type { WithExtensions } from './WithExtensions';
import type { ServerObject3 } from './ServerObject3';

/* Spec: https://spec.openapis.org/oas/v3.0.3#linkObject */
export interface LinkObject3 extends WithExtensions {
  // A relative or absolute URI reference to an OAS operation.
  // This field is mutually exclusive of the operationId field, and MUST point to an Operation Object
  operationRef?: string;

  // The name of an existing, resolvable OAS operation, as defined with a unique operationId.
  operationId?: string;

  // A map representing parameters to pass to an operation
  // as specified with operationId or identified via operationRef.
  parameters?: Record<string, any>;

  // A literal value or {expression} to use as a request body when calling the target operation.
  requestBody?: any;

  // [markdown]
  description?: string;

  // A server object to be used by the target operation.
  server?: ServerObject3;
}
