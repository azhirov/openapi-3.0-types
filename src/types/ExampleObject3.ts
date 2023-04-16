import type { WithExtensions } from './WithExtensions';

/* Spec: https://spec.openapis.org/oas/v3.0.3#example-object */
export interface ExampleObject3 extends WithExtensions {
  // Short description for the example.
  summary?: string

  // [markdown]
  description?: string

  // Embedded literal example.
  value?: any;

  // A URL that points to the literal example.
  externalValue?: string;
}
