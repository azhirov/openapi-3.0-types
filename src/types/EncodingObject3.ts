/* Spec: https://spec.openapis.org/oas/v3.0.3#encodingObject */
import type { WithExtensions } from './WithExtensions';
import type { ParameterStyle3 } from './ParameterStyle3';
import type { HeaderObject3 } from './HeaderObject3';
import type { ReferenceObject3 } from './ReferenceObject3';

/* Spec: https://spec.openapis.org/oas/v3.0.3#encoding-object */
export interface EncodingObject3 extends WithExtensions {
  contentType?: string;

  // This property SHALL be ignored
  // if the request body media type is not a multipart.
  headers?: Record<string, HeaderObject3 | ReferenceObject3>;

  // This property SHALL be ignored
  // if the request body media type is not `application/x-www-form-urlencoded`.
  style?: ParameterStyle3;

  // This property SHALL be ignored
  // if the request body media type is not `application/x-www-form-urlencoded`.
  explode?: boolean;

  // This property SHALL be ignored
  // if the request body media type is not `application/x-www-form-urlencoded`.
  allowReserved?: boolean;
}
