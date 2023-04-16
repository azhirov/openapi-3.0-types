import type { InfoObject3 } from './InfoObject3';
import type { ServerObject3 } from './ServerObject3';
import type { PathsObject3 } from './PathsObject3';
import type { ComponentsObject3 } from './ComponentsObject3';
import type { SecurityRequirementObject3 } from './SecurityRequirementObject3';
import type { TagObject3 } from './TagObject3';
import type { ExternalDocObject3 } from './ExternalDocObject3';

/* Spec: https://spec.openapis.org/oas/v3.0.3#openapi-object */
export interface OpenApiObject3 {
  // version of OpenAPI Specification (3.0.3)
  openapi: string;

  // metadata about the API
  info: InfoObject3

  // An array of Server Objects, which provide connectivity information to a target server.
  servers?: ServerObject3[]

  // The available paths and operations for the API.
  paths: PathsObject3;

  // An element to hold various schemas for the specification.
  components?: ComponentsObject3;

  // A declaration of which security mechanisms can be used across the API.
  // To make security optional, an empty security requirement ({}) can be included in the array.
  security?: SecurityRequirementObject3[];

  // A list of tags used by the specification with additional metadata.
  // (!) Not all tags that are used by the Operation Object must be declared.
  tags?: TagObject3[];

  // Additional external documentation.
  externalDocs?: ExternalDocObject3;
}
