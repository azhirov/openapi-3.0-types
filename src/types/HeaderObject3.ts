import type { ParameterObject3 } from './ParameterObject3';

/* Spec */
export type HeaderObject3 = Omit<ParameterObject3, 'name' | 'in'>;
