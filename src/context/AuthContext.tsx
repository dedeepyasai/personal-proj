import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, UserRole } from '../types';
import { auth } from '../lib/supabase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, role: UserRole, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize auth state
    const initAuth = async () => {
      try {
        const { data: { user: authUser } } = await auth.getUser();
        if (authUser) {
          const mockUser: User = {
            id: authUser.id,
            email: authUser.email || '',
            role: (authUser.user_metadata?.role as UserRole) || 'applicant',
            full_name: authUser.user_metadata?.full_name || 'User',
            created_at: authUser.created_at || new Date().toISOString(),
          };
          setUser(mockUser);
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();

    // Listen for auth changes
    const { data: { subscription } } = auth.onAuthChange(async (_event, session) => {
      if (session?.user) {
        const mockUser: User = {
          id: session.user.id,
          email: session.user.email || '',
          role: (session.user.user_metadata?.role as UserRole) || 'applicant',
          full_name: session.user.user_metadata?.full_name || 'User',
          created_at: session.user.created_at || new Date().toISOString(),
        };
        setUser(mockUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await auth.signIn(email, password);
      if (error) throw error;
      
      // The user should be set automatically by the auth state change listener
      // but let's ensure it's set immediately for better UX
      if (data?.user) {
        const mockUser: User = {
          id: data.user.id,
          email: data.user.email || '',
          role: (data.user.user_metadata?.role as UserRole) || 'applicant',
          full_name: data.user.user_metadata?.full_name || 'User',
          created_at: data.user.created_at || new Date().toISOString(),
        };
        setUser(mockUser);
      }
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  };

  const signUp = async (email: string, password: string, role: UserRole, fullName: string) => {
    try {
      const { error } = await auth.signUp(email, password, {
        role,
        full_name: fullName,
      });
      if (error) throw error;
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      const { error } = await auth.signOut();
      if (error) throw error;
      // Force page reload to clear all state
      window.location.reload();
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};