import React from 'react';
import { BarChart3, FileText, Download, Calendar } from 'lucide-react';

const Reports: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900 dark:text-white">Reports</h1>
          <p className="text-secondary-600 dark:text-secondary-400 mt-1">
            Generate and view detailed business reports
          </p>
        </div>
        <button className="btn-primary flex items-center">
          <FileText className="h-5 w-5 mr-2" />
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <BarChart3 className="h-8 w-8 text-blue-600" />
            <Download className="h-5 w-5 text-secondary-400" />
          </div>
          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
            Sales Report
          </h3>
          <p className="text-secondary-600 dark:text-secondary-400 text-sm">
            Detailed analysis of sales performance and trends
          </p>
        </div>
        
        <div className="card hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <FileText className="h-8 w-8 text-green-600" />
            <Download className="h-5 w-5 text-secondary-400" />
          </div>
          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
            Inventory Report
          </h3>
          <p className="text-secondary-600 dark:text-secondary-400 text-sm">
            Current stock levels and inventory valuation
          </p>
        </div>
        
        <div className="card hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="h-8 w-8 text-purple-600" />
            <Download className="h-5 w-5 text-secondary-400" />
          </div>
          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
            Monthly Summary
          </h3>
          <p className="text-secondary-600 dark:text-secondary-400 text-sm">
            Comprehensive monthly business overview
          </p>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
          Report History
        </h3>
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-secondary-400 mx-auto mb-4" />
          <p className="text-secondary-600 dark:text-secondary-400">
            Advanced reporting features coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reports;