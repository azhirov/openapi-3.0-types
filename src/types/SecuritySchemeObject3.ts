import type { WithExtensions } from './WithExtensions';
import type { OAuthFlowsObject3 } from './OAuthFlowsObject3';

/* Spec: https://spec.openapis.org/oas/v3.0.3#securitySchemeObject */
interface SecuritySchemeBase3 extends WithExtensions {
  // [markdown]
  description?: string;
}

export interface SecuritySchemeObjectApiKey3 extends SecuritySchemeBase3 {
  type: 'apiKey';

  // The name of the header, query or cookie parameter to be used.
  name: string;

  // The location of the API key.
  in: 'query' | 'header' | 'cookie';
}

export interface SecuritySchemeObjectHttp3 extends SecuritySchemeBase3 {
  type: 'http';

  // The name of the HTTP Authorization scheme to be used
  // in the Authorization header as defined in [RFC7235].
  scheme: string;

  // A hint to the client to identify how the bearer token is formatted.
  bearerFormat?: string;
}

export interface SecuritySchemeObjectOauth23 extends SecuritySchemeBase3 {
  type: 'oauth2';

  // An object containing configuration information for the flow types supported.
  flows: OAuthFlowsObject3;
}

export interface SecuritySchemeObjectOpenIdConnect3 extends SecuritySchemeBase3 {
  type: 'openIdConnect';

  // OpenId Connect URL to discover OAuth2 configuration values.
  openIdConnectUrl: string;
}

export type SecuritySchemeObject3 = SecuritySchemeObjectApiKey3 |
  SecuritySchemeObjectHttp3 |
  SecuritySchemeObjectOauth23 |
  SecuritySchemeObjectOpenIdConnect3;
