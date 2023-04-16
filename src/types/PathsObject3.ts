import type { PathItemObject3 } from './PathItemObject3';
import type { WithExtensions } from './WithExtensions';

/* Spec: https://spec.openapis.org/oas/v3.0.3#pathsObject */
export interface PathsObject3 extends WithExtensions {
  [key: `/${string}`]: PathItemObject3 | undefined;
}
