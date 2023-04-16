import type { HeaderObject3 } from './HeaderObject3';
import type { ReferenceObject3 } from './ReferenceObject3';
import type { MediaTypeObject3 } from './MediaTypeObject3';
import type { LinkObject3 } from './LinkObject3';
import type { WithExtensions } from './WithExtensions';

/* Spec: https://spec.openapis.org/oas/v3.0.3#response-object */
export interface ResponseObject3 extends WithExtensions {
  // [markdown]
  description: string;

  // Maps a header name to its definition.
  // If a response header is defined with the name "Content-Type", it SHALL be ignored.
  headers?: Record<string, HeaderObject3 | ReferenceObject3>;

  // A map containing descriptions of potential response payloads.
  content?: Record<string, MediaTypeObject3>;

  links?: Record<string, LinkObject3 | ReferenceObject3>;
}
