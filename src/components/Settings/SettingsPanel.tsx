import React, { useState } from 'react';
import { GeneralSettings } from './GeneralSettings';
import { SecuritySettings } from './SecuritySettings';
import { ChannelSettings } from './ChannelSettings';
import { CustomizationSettings } from './CustomizationSettings';
import { AutomationSettings } from './AutomationSettings';
import { DataAdministration } from './DataAdministration';
import { DeveloperHub } from './DeveloperHub';
import { CPQSettings } from './CPQSettings';
import { 
  Settings, 
  Shield, 
  MessageSquare, 
  Palette, 
  Zap, 
  Database, 
  Code, 
  DollarSign 
} from 'lucide-react';

export const SettingsPanel: React.FC = () => {
  const [activeSection, setActiveSection] = useState('general');

  const settingSections = [
    { id: 'general', label: 'General', icon: Settings, component: GeneralSettings },
    { id: 'security', label: 'Security Control', icon: Shield, component: SecuritySettings },
    { id: 'channels', label: 'Channels', icon: MessageSquare, component: ChannelSettings },
    { id: 'customization', label: 'Customization', icon: Palette, component: CustomizationSettings },
    { id: 'automation', label: 'Automation', icon: Zap, component: AutomationSettings },
    { id: 'data', label: 'Data Administration', icon: Database, component: DataAdministration },
    { id: 'developer', label: 'Developer Hub', icon: Code, component: DeveloperHub },
    { id: 'cpq', label: 'CPQ', icon: DollarSign, component: CPQSettings },
  ];

  const ActiveComponent = settingSections.find(section => section.id === activeSection)?.component || GeneralSettings;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your CRM configuration and preferences</p>
      </div>

      <div className="flex space-x-6">
        {/* Sidebar Navigation */}
        <div className="w-64 bg-white rounded-lg shadow-lg p-6">
          <nav className="space-y-2">
            {settingSections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {section.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-lg shadow-lg">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
};