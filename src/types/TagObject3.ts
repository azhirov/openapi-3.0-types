import type { WithExtensions } from './WithExtensions';
import type { ExternalDocObject3 } from './ExternalDocObject3';

/* Spec: https://spec.openapis.org/oas/v3.0.3#tagObject */
export interface TagObject3 extends WithExtensions {
  // The name of the tag.
  name: string;

  // [markdown]
  description?: string

  // Additional external documentation for this tag.
  externalDocs?: ExternalDocObject3;
}
