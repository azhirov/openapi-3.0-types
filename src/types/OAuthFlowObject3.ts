import type { WithExtensions } from './WithExtensions';

/* Spec: https://spec.openapis.org/oas/v3.0.3#oauthFlowsObject */
export interface OAuthFlowObject3 extends WithExtensions {
  // The authorization URL to be used for this flow.
  authorizationUrl?: string;

  // The token URL to be used for this flow.
  tokenUrl?: string;

  // The URL to be used for obtaining refresh tokens.
  refreshUrl?: string;

  // The available scopes for the OAuth2 security scheme.
  // A map between the scope name and a short description for it.
  // The map MAY be empty.
  scopes: Record<string, string>;
}
