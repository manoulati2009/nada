import React from 'react';
import { TrendingUp, DollarSign, ShoppingCart, Calendar } from 'lucide-react';

const Sales: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900 dark:text-white">Sales</h1>
          <p className="text-secondary-600 dark:text-secondary-400 mt-1">
            Track and manage your sales transactions
          </p>
        </div>
        <button className="btn-primary flex items-center">
          <ShoppingCart className="h-5 w-5 mr-2" />
          New Sale
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600 dark:text-secondary-400">Today's Sales</p>
              <p className="text-2xl font-bold text-secondary-900 dark:text-white">$2,847</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600 dark:text-secondary-400">This Week</p>
              <p className="text-2xl font-bold text-secondary-900 dark:text-white">$18,432</p>
            </div>
            <Calendar className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600 dark:text-secondary-400">This Month</p>
              <p className="text-2xl font-bold text-secondary-900 dark:text-white">$67,891</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600 dark:text-secondary-400">Transactions</p>
              <p className="text-2xl font-bold text-secondary-900 dark:text-white">234</p>
            </div>
            <ShoppingCart className="h-8 w-8 text-orange-600" />
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
          Recent Sales
        </h3>
        <div className="text-center py-12">
          <ShoppingCart className="h-12 w-12 text-secondary-400 mx-auto mb-4" />
          <p className="text-secondary-600 dark:text-secondary-400">
            Sales management features coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sales;