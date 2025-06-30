import React from 'react';
import { TrendingUp, BarChart3, PieChart, Activity } from 'lucide-react';

export const AnalyticsModule: React.FC = () => {
  const metrics = [
    { title: 'Total Revenue', value: '$125,430', change: '+12.5%', trend: 'up' },
    { title: 'New Leads', value: '1,234', change: '+8.2%', trend: 'up' },
    { title: 'Conversion Rate', value: '24.8%', change: '-2.1%', trend: 'down' },
    { title: 'Active Deals', value: '89', change: '+15.3%', trend: 'up' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <TrendingUp className="h-8 w-8 mr-3 text-blue-600" />
          Analytics
        </h1>
        <p className="text-gray-600 mt-1">Track your business performance and insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
              <div className={`flex items-center text-sm ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendingUp className={`h-4 w-4 mr-1 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                {metric.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Sales Performance</h2>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart visualization would go here</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <PieChart className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Lead Sources</h2>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Pie chart visualization would go here</p>
          </div>
        </div>
      </div>
    </div>
  );
};