import type { WithExtensions } from './WithExtensions';
import type { PathItemObject3 } from './PathItemObject3';

/* Spec: https://spec.openapis.org/oas/v3.0.3#callbackObject */
export interface CallbackObject3 extends WithExtensions {
  [expression: string]: PathItemObject3;
}
