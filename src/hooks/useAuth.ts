import { useState, useEffect } from 'react';
import { User } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate auth check
    const checkAuth = () => {
      const savedUser = localStorage.getItem('currentUser');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const signIn = async (email: string, password: string) => {
    // Mock sign in - in real app, integrate with Supabase
    const mockUser: User = {
      id: '1',
      email,
      role: email.includes('admin') ? 'admin' : 
            email.includes('judge') ? 'judge' : 
            email.includes('sponsor') ? 'sponsor' : 'applicant',
      full_name: 'Demo User',
      created_at: new Date().toISOString(),
    };
    
    localStorage.setItem('currentUser', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const signUp = async (email: string, password: string, role: string, fullName: string) => {
    // Mock sign up
    const mockUser: User = {
      id: '1',
      email,
      role: role as any,
      full_name: fullName,
      created_at: new Date().toISOString(),
    };
    
    localStorage.setItem('currentUser', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const signOut = async () => {
    localStorage.removeItem('currentUser');
    setUser(null);
  };

  return { user, loading, signIn, signUp, signOut };
};