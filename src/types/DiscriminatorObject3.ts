/*
* The discriminator is a specific object in a schema which is used to inform the consumer of the specification
* of an alternative schema based on the value associated with it.
* When using the discriminator, inline schemas will not be considered.
* Spec: https://spec.openapis.org/oas/v3.0.3#discriminator-object */
export interface DiscriminatorObject3 {
  // The name of the property in the payload that will hold the discriminator value
  propertyName: string;

  // An object to hold mappings between payload values and schema names or references.
  mapping: Record<string, string>;
}
