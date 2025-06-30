import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Home, Shield, Users, Settings } from 'lucide-react';

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onViewChange }) => {
  const { user } = useAuth();

  const getNavigationItems = () => {
    const baseItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
    ];

    if (user?.role === 'admin') {
      baseItems.push(
        { id: 'admin', label: 'Admin Panel', icon: Shield },
        { id: 'users', label: 'User Management', icon: Users },
      );
    }

    if (user?.role === 'moderator' || user?.role === 'admin') {
      baseItems.push(
        { id: 'moderation', label: 'Moderation', icon: Settings },
      );
    }

    return baseItems;
  };

  const navigationItems = getNavigationItems();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex items-center px-3 py-4 text-sm font-medium border-b-2 transition-colors ${
                  isActive
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};