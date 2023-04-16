import type { WithExtensions } from './WithExtensions';

export interface ServerVariable3 extends WithExtensions {
  // An enumeration of string values to be used if the substitution options are from a limited set.
  // The array SHOULD NOT be empty.
  enum?: string[];

  // The default value to use for substitution, which SHALL be sent if an alternate value is not supplied.
  default: string;

  // [markdown]
  description: string;
}
