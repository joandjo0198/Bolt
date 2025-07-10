import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Users, Shield, Settings, BarChart3, FileText, Calendar, Package, Plus } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const getWelcomeMessage = () => {
    switch (user?.role) {
      case 'admin':
        return 'Welcome to the Admin Dashboard';
      case 'moderator':
        return 'Welcome to the Moderator Panel';
      default:
        return 'Welcome to your Dashboard';
    }
  };

  const getAvailableFeatures = () => {
    const baseFeatures = [
      { icon: Package, title: 'Module Builder', description: 'Create custom modules with drag-and-drop builder' },
      { icon: FileText, title: 'My Documents', description: 'View and manage your documents' },
      { icon: Calendar, title: 'Schedule', description: 'Manage your calendar and appointments' },
    ];

    const moderatorFeatures = [
      { icon: Users, title: 'User Management', description: 'Moderate user accounts and content' },
      { icon: Settings, title: 'Content Settings', description: 'Configure content moderation rules' },
    ];

    const adminFeatures = [
      { icon: Shield, title: 'System Administration', description: 'Full system control and configuration' },
      { icon: BarChart3, title: 'Analytics', description: 'View system analytics and reports' },
      { icon: Users, title: 'User Management', description: 'Manage all user accounts and permissions' },
      { icon: Settings, title: 'System Settings', description: 'Configure system-wide settings' },
    ];

    switch (user?.role) {
      case 'admin':
        return [...baseFeatures, ...adminFeatures];
      case 'moderator':
        return [...baseFeatures, ...moderatorFeatures];
      default:
        return baseFeatures;
    }
  };

  const features = getAvailableFeatures();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {getWelcomeMessage()}
        </h1>
        <p className="text-gray-600">
          Hello, {user?.name}! Here's what you can access with your {user?.role} role.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Role Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">Current Role</h3>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              user?.role === 'admin' ? 'bg-red-100 text-red-800' :
              user?.role === 'moderator' ? 'bg-yellow-100 text-yellow-800' :
              'bg-blue-100 text-blue-800'
            }`}>
              {user?.role === 'admin' && <Shield className="h-4 w-4 mr-1" />}
              {user?.role === 'moderator' && <Settings className="h-4 w-4 mr-1" />}
              {user?.role === 'user' && <Users className="h-4 w-4 mr-1" />}
              {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
            </span>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">Member Since</h3>
            <p className="text-gray-600">
              {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">Access Level</h3>
            <p className="text-gray-600">
              {user?.role === 'admin' ? 'Full Access' :
               user?.role === 'moderator' ? 'Moderate Access' :
               'Standard Access'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};