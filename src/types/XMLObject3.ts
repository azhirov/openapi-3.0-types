import type { WithExtensions } from './WithExtensions';

/* Spec: https://spec.openapis.org/oas/v3.0.3#xml-object */
export interface XMLObject3 extends WithExtensions {
  // Replaces the name of the element/attribute used for the described schema property.
  name?: string;

  // The URI of the namespace definition.
  namespace?: string;

  // The prefix to be used for the name.
  prefix?: string;

  // Declares whether the property definition translates to an attribute instead of an element.
  // Default value is false.
  attribute?: boolean;

  // MAY be used only for an array definition.
  // Signifies whether the array is wrapped (<books><book/><book/></books>) or unwrapped (<book/><book/>).
  // Default value is false.
  wrapped?: boolean;
}
