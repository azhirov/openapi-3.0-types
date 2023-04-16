import type { WithExtensions } from './WithExtensions';
import type { ServerVariable3 } from './ServerVariable3';

export interface ServerObject3 extends WithExtensions {
  // A URL to the target host
  url: string;

  // [markdown]
  description?: string;

  // A map between a variable name and its value.
  variables?: Record<string, ServerVariable3>
}
