import type { ClassKey } from 'keycloakify/login';

// Semantic kc* class names remain available when default CSS is disabled.
export const classes = {} satisfies Partial<Record<ClassKey, string>>;
