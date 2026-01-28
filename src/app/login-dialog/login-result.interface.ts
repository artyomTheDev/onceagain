type UserRole = 'admin' | 'user' | 'guest'

export interface LoginResult {
  role: UserRole;
  displayName?: string;
}
