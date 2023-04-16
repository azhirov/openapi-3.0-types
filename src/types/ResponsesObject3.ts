import type { WithExtensions } from './WithExtensions';
import type { ResponseObject3 } from './ResponseObject3';
import type { ReferenceObject3 } from './ReferenceObject3';

/* Spec: https://spec.openapis.org/oas/v3.0.3#responsesObject */
export interface ResponsesObject3 extends WithExtensions {
  default?: ResponseObject3 | ReferenceObject3;
  [key: string]: ResponseObject3 | ReferenceObject3 | undefined;
}
