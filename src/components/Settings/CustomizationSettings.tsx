import React from 'react';
import { Package, Layout, BarChart3, FileText, Palette } from 'lucide-react';

export const CustomizationSettings: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Customization</h2>
        <p className="text-gray-600">Personalize the CRM to fit your business needs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Modules and Fields */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Package className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Modules and Fields</h3>
          </div>
          <p className="text-gray-600 mb-4">Create and manage custom modules for your business</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Create New Module</p>
                <p className="text-sm text-gray-600">Use the drag-and-drop builder</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Create
              </button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Organize Modules</p>
                <p className="text-sm text-gray-600">Reorder and manage modules</p>
              </div>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Manage
              </button>
            </div>
          </div>
        </div>

        {/* Canvas Designer */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Layout className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Canvas</h3>
          </div>
          <p className="text-gray-600 mb-4">Design custom views for your records</p>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">Lead Detail View</p>
                  <p className="text-sm text-gray-600">Custom layout active</p>
                </div>
                <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">Contact Profile</p>
                  <p className="text-sm text-gray-600">Default layout</p>
                </div>
                <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Customize</button>
              </div>
            </div>
          </div>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create New Canvas
          </button>
        </div>

        {/* Home Page Customization */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Layout className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Customize Home Page</h3>
          </div>
          <p className="text-gray-600 mb-4">Choose and arrange dashboard components</p>
          <div className="space-y-3">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <label className="text-sm text-gray-700">Sales Performance Chart</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <label className="text-sm text-gray-700">Recent Activities</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-700">Lead Pipeline</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <label className="text-sm text-gray-700">Task Summary</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-700">Revenue Forecast</label>
            </div>
          </div>
        </div>

        {/* Analytics Customization */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Analytics</h3>
          </div>
          <p className="text-gray-600 mb-4">Set up reports and visual dashboards</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Sales Report</p>
                <p className="text-sm text-gray-600">Monthly performance</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Lead Conversion</p>
                <p className="text-sm text-gray-600">Funnel analysis</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
          </div>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create New Report
          </button>
        </div>

        {/* Print Templates */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <FileText className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Print Template</h3>
          </div>
          <p className="text-gray-600 mb-4">Create templates for printed documents</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Invoice Template</p>
                <p className="text-sm text-gray-600">Standard format</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Quote Template</p>
                <p className="text-sm text-gray-600">Professional layout</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
          </div>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create Template
          </button>
        </div>

        {/* Theme Customization */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Palette className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Theme & Branding</h3>
          </div>
          <p className="text-gray-600 mb-4">Customize colors and branding elements</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-gray-300"></div>
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Logo Upload</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600">Drop your logo here or click to upload</p>
              </div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-700">Use dark mode</label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Save Customization
        </button>
      </div>
    </div>
  );
};