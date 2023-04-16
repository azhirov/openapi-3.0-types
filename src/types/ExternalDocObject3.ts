import type { WithExtensions } from './WithExtensions';

/* Spec: https://spec.openapis.org/oas/v3.0.3#externalDocumentationObject */
export interface ExternalDocObject3 extends WithExtensions {
  // [markdown]
  description?: string;

  // The URL for the target documentation.
  url: string;
}
