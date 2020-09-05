import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
}

interface AuthState {
  user: User;
  token: string;
}

interface SignInProps {
  email: string;
  password: string;
}

interface SignUpProps {
  name: string;
  email: string;
  password: string;
}

interface AuthContextDATA {
  user: User | null;
  signIn({ email, password }: SignInProps): Promise<void>;
  signUp({ name, email, password }: SignUpProps): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextDATA>({} as AuthContextDATA);

export const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) return { token, user: JSON.parse(user) };
    return {} as AuthState;
  });

  const signIn = useCallback(
    async ({ email, password }: SignInProps) => {
      const response = await api.post('sessions', {
        email,
        password,
      });

      const { user, token } = response.data;
      setAuth({ user, token });
      localStorage.setItem('@GoBarber:token', auth.token);
      localStorage.setItem('@GoBarber:user', JSON.stringify(auth.user));
    },
    [auth.token, auth.user],
  );

  const signUp = useCallback(
    async ({ name, email, password }: SignUpProps) => {
      await api.post('users', {
        name,
        email,
        password,
      });

      await signIn({ email, password });
    },
    [signIn],
  );

  const signOut = useCallback(() => {
    setAuth({} as AuthState);
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');
  }, []);

  return (
    <AuthContext.Provider value={{ user: auth.user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextDATA {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
