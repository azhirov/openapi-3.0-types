import type { WithExtensions } from './WithExtensions';
import type { OAuthFlowObject3 } from './OAuthFlowObject3';

type WithRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;

/* Spec: https://spec.openapis.org/oas/v3.0.3#oauthFlowsObject */
export interface OAuthFlowsObject3 extends WithExtensions {
  // Configuration for the OAuth Implicit flow
  implicit?: WithRequired<OAuthFlowObject3, 'authorizationUrl'>;

  // Configuration for the OAuth Resource Owner Password flow
  password?: WithRequired<OAuthFlowObject3, 'tokenUrl'>;

  // Configuration for the OAuth Client Credentials flow.
  // Previously called application in OpenAPI 2.0.
  clientCredentials?: WithRequired<OAuthFlowObject3, 'tokenUrl'>;

  // Configuration for the OAuth Authorization Code flow.
  // Previously called accessCode in OpenAPI 2.0.
  authorizationCode?: WithRequired<OAuthFlowObject3, 'tokenUrl' | 'authorizationUrl'>;
}
