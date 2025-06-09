import React from 'react';
import { TrendingDown, Package, Truck, Calendar } from 'lucide-react';

const Purchases: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900 dark:text-white">Purchases</h1>
          <p className="text-secondary-600 dark:text-secondary-400 mt-1">
            Manage purchase orders and supplier relationships
          </p>
        </div>
        <button className="btn-primary flex items-center">
          <Package className="h-5 w-5 mr-2" />
          New Purchase Order
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600 dark:text-secondary-400">This Month</p>
              <p className="text-2xl font-bold text-secondary-900 dark:text-white">$12,847</p>
            </div>
            <TrendingDown className="h-8 w-8 text-red-600" />
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600 dark:text-secondary-400">Pending Orders</p>
              <p className="text-2xl font-bold text-secondary-900 dark:text-white">8</p>
            </div>
            <Package className="h-8 w-8 text-orange-600" />
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600 dark:text-secondary-400">Delivered</p>
              <p className="text-2xl font-bold text-secondary-900 dark:text-white">45</p>
            </div>
            <Truck className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600 dark:text-secondary-400">Suppliers</p>
              <p className="text-2xl font-bold text-secondary-900 dark:text-white">12</p>
            </div>
            <Calendar className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
          Purchase Orders
        </h3>
        <div className="text-center py-12">
          <Package className="h-12 w-12 text-secondary-400 mx-auto mb-4" />
          <p className="text-secondary-600 dark:text-secondary-400">
            Purchase management features coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Purchases;