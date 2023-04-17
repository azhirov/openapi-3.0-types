import type { WithExtensions } from './WithExtensions';
import type { ServerObject3 } from './ServerObject3';
import type { ParameterObject3 } from './ParameterObject3';
import type { ReferenceObject3 } from './ReferenceObject3';
import type { OperationObject3 } from './OperationObject3';

type OperationType = 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch' | 'trace';
type Operations = {
  [key in OperationType]?: OperationObject3;
};

/* Describes the operations available on a single path.
  A Path Item MAY be empty, due to ACL constraints.
  The path itself is still exposed to the documentation viewer, but
  they will not know which operations and parameters are available.
  Spec: https://spec.openapis.org/oas/v3.0.3#path-item-object
*/
export interface PathItemObject3 extends WithExtensions, Operations {
  // Ref to PathItemObject3
  // In case a field appears both in the defined object and the referenced object, the behavior is undefined.
  $ref?: string;

  // apply to all operations in this path
  summary?: string;

  // [markdown]
  description?: string;

  // An alternative server array to service all operations in this path.
  servers?: ServerObject3[];

  // A list of parameters that are applicable for all the operations described under this path
  parameters?: Array<ParameterObject3 | ReferenceObject3>;
}
