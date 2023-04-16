import type { WithExtensions } from './WithExtensions';

export interface ContactObject3 extends WithExtensions {
  // name of the contact person/organization
  name?: string
  url?: string
  email?: string
}
