export type UserRole = 'admin' | 'user' | 'guest'

export interface AuthUser {
  role: UserRole;
  displayName?: string;
}
