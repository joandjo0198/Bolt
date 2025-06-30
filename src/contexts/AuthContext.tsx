import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { User, AuthState, LoginCredentials, RegisterCredentials } from '../types/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'LOGOUT' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

// Mock users for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'admin',
    createdAt: new Date(),
  },
  {
    id: '2',
    email: 'user@example.com',
    name: 'Regular User',
    role: 'user',
    createdAt: new Date(),
  },
  {
    id: '3',
    email: 'moderator@example.com',
    name: 'Moderator User',
    role: 'moderator',
    createdAt: new Date(),
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        dispatch({ type: 'SET_USER', payload: user });
      } catch (error) {
        localStorage.removeItem('user');
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    } else {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  const login = async (credentials: LoginCredentials): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = mockUsers.find(u => u.email === credentials.email);
    
    if (user && credentials.password === 'password') {
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: 'SET_USER', payload: user });
    } else {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('Invalid credentials');
    }
  };

  const register = async (credentials: RegisterCredentials): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (credentials.password !== credentials.confirmPassword) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('Passwords do not match');
    }
    
    const existingUser = mockUsers.find(u => u.email === credentials.email);
    if (existingUser) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('User already exists');
    }
    
    const newUser: User = {
      id: Date.now().toString(),
      email: credentials.email,
      name: credentials.name,
      role: 'user',
      createdAt: new Date(),
    };
    
    mockUsers.push(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    dispatch({ type: 'SET_USER', payload: newUser });
  };

  const logout = (): void => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  const updateProfile = (updates: Partial<User>): void => {
    if (state.user) {
      const updatedUser = { ...state.user, ...updates };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      dispatch({ type: 'SET_USER', payload: updatedUser });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};