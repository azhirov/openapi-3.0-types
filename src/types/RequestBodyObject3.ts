import type { WithExtensions } from './WithExtensions';
import type { MediaTypeObject3 } from './MediaTypeObject3';

/* Spec: https://spec.openapis.org/oas/v3.0.3#requestBodyObject */
export interface RequestBodyObject3 extends WithExtensions {
  // [markdown]
  description?: string;

  // The content of the request body.
  content: Record<string, MediaTypeObject3>;

  // Determines if the request body is required in the request
  required?: boolean;
}
