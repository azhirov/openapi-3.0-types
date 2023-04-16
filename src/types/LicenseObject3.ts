import type { WithExtensions } from './WithExtensions';

export interface LicenseObject3 extends WithExtensions {
  // The license name used for the API.
  name: string

  // A URL to the license used for the API.
  url?: string
}
