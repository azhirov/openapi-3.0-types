import type { SchemaObject3 } from './SchemaObject3';
import type { ReferenceObject3 } from './ReferenceObject3';
import type { ResponseObject3 } from './ResponseObject3';
import type { ParameterObject3 } from './ParameterObject3';
import type { ExampleObject3 } from './ExampleObject3';
import type { RequestBodyObject3 } from './RequestBodyObject3';
import type { HeaderObject3 } from './HeaderObject3';
import type { SecuritySchemeObject3 } from './SecuritySchemeObject3';
import type { LinkObject3 } from './LinkObject3';
import type { CallbackObject3 } from './CallbackObject3';
import type { WithExtensions } from './WithExtensions';

export interface ComponentsObject3 extends WithExtensions {
  // An object to hold reusable Schema Objects.
  schemas?: Record<string, SchemaObject3 | ReferenceObject3>;

  // An object to hold reusable Response Objects
  responses?: Record<string, ResponseObject3 | ReferenceObject3>;

  // An object to hold reusable Parameter Objects.
  parameters?: Record<string, ParameterObject3 | ReferenceObject3>;

  // An object to hold reusable Example Objects.
  examples?: Record<string, ExampleObject3 | ReferenceObject3>;

  // An object to hold reusable Request Body Objects.
  requestBodies?: Record<string, RequestBodyObject3 | ReferenceObject3>;

  // An object to hold reusable Header Objects.
  headers?: Record<string, HeaderObject3 | ReferenceObject3>;

  // An object to hold reusable Security Scheme Objects.
  securitySchemes?: Record<string, SecuritySchemeObject3 | ReferenceObject3>;

  // An object to hold reusable Link Objects.
  links?: Record<string, LinkObject3 | ReferenceObject3>;

  // An object to hold reusable Callback Objects.
  callbacks?: Record<string, CallbackObject3 | ReferenceObject3>;
}
