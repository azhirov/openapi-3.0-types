import type { ContactObject3 } from './ContactObject3';
import type { LicenseObject3 } from './LicenseObject3';
import type { WithExtensions } from './WithExtensions';

export interface InfoObject3 extends WithExtensions {
  // The title of the API
  title: string;

  // A short description of the API [Markdown]
  description?: string;

  // A URL to the Terms of Service for the API
  termsOfService?: string;

  // The contact information
  contact?: ContactObject3;

  // License information
  license?: LicenseObject3;

  // The version of DOCUMENT
  version: string;
}
