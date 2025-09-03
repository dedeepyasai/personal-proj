// Mock Supabase client for standalone demo
interface MockUser {
  id: string;
  email: string;
  user_metadata: Record<string, any>;
  created_at: string;
}

interface SignUpOptions {
  email: string;
  password: string;
  options?: {
    data?: Record<string, any>;
  };
}

interface SignInOptions {
  email: string;
  password: string;
}

const mockSupabaseClient = {
  auth: {
    signUp: async ({ email, password, options }: SignUpOptions) => {
      // Add small delay to simulate network request
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock successful signup
      const mockUser: MockUser = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        user_metadata: options?.data || {},
        created_at: new Date().toISOString(),
      };
      
      // Store in localStorage for demo
      localStorage.setItem('mockUser', JSON.stringify(mockUser));
      
      return {
        data: { user: mockUser },
        error: null,
      };
    },
    
    signInWithPassword: async ({ email, password }: SignInOptions) => {
      // Add small delay to simulate network request
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Simple validation for demo
      if (!email || !password) {
        return {
          data: { user: null },
          error: { message: 'Email and password are required' },
        };
      }
      
      // Mock successful signin
      const mockUser: MockUser = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        user_metadata: {
          role: email.includes('admin') ? 'admin' : 
                email.includes('judge') ? 'judge' : 
                email.includes('sponsor') ? 'sponsor' : 'applicant',
          full_name: email.includes('admin') ? 'Admin User' :
                    email.includes('judge') ? 'Judge User' :
                    email.includes('sponsor') ? 'Sponsor User' : 'Applicant User',
        },
        created_at: new Date().toISOString(),
      };
      
      // Store in localStorage for demo
      localStorage.setItem('mockUser', JSON.stringify(mockUser));
      localStorage.setItem('mockSession', JSON.stringify({ user: mockUser }));
      
      return {
        data: { user: mockUser, session: { user: mockUser } },
        error: null,
      };
    },
    
    signOut: async () => {
      localStorage.removeItem('mockUser');
      localStorage.removeItem('mockSession');
      return { error: null };
    },
    
    getUser: async () => {
      const mockUser = localStorage.getItem('mockUser');
      return {
        data: { user: mockUser ? JSON.parse(mockUser) : null },
        error: null,
      };
    },
    
    onAuthStateChange: (callback: (event: string, session: any) => void) => {
      // Mock auth state change listener
      const mockUser = localStorage.getItem('mockUser');
      const mockSession = localStorage.getItem('mockSession');
      
      if (mockUser && mockSession) {
        setTimeout(() => {
          callback('SIGNED_IN', JSON.parse(mockSession));
        }, 100);
      } else {
        setTimeout(() => {
          callback('SIGNED_OUT', null);
        }, 100);
      }
      
      // Return mock subscription
      return {
        data: {
          subscription: {
            unsubscribe: () => {},
          },
        },
      };
    },
  },
};

export const supabase = mockSupabaseClient;

// Auth helpers using mock client
export const auth = {
  signUp: (email: string, password: string, metadata?: Record<string, any>) =>
    mockSupabaseClient.auth.signUp({ email, password, options: { data: metadata } }),
  
  signIn: (email: string, password: string) =>
    mockSupabaseClient.auth.signInWithPassword({ email, password }),
  
  signOut: () => mockSupabaseClient.auth.signOut(),
  
  getUser: () => mockSupabaseClient.auth.getUser(),
  
  onAuthChange: (callback: (event: string, session: any) => void) =>
    mockSupabaseClient.auth.onAuthStateChange(callback),
};