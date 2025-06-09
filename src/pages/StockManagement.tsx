import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, AlertTriangle, Package } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  quantity: number;
  minStock: number;
  price: number;
  supplier: string;
  lastUpdated: string;
}

const StockManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data
  const products: Product[] = [
    {
      id: '1',
      name: 'iPhone 15 Pro',
      category: 'Electronics',
      quantity: 45,
      minStock: 10,
      price: 999.99,
      supplier: 'Apple Inc.',
      lastUpdated: '2024-01-15',
    },
    {
      id: '2',
      name: 'Samsung Galaxy S24',
      category: 'Electronics',
      quantity: 5,
      minStock: 15,
      price: 899.99,
      supplier: 'Samsung',
      lastUpdated: '2024-01-14',
    },
    {
      id: '3',
      name: 'MacBook Air M2',
      category: 'Electronics',
      quantity: 23,
      minStock: 5,
      price: 1199.99,
      supplier: 'Apple Inc.',
      lastUpdated: '2024-01-13',
    },
    {
      id: '4',
      name: 'Dell XPS 13',
      category: 'Electronics',
      quantity: 18,
      minStock: 8,
      price: 1099.99,
      supplier: 'Dell Technologies',
      lastUpdated: '2024-01-12',
    },
  ];

  const categories = ['all', 'Electronics', 'Clothing', 'Books', 'Home & Garden'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const lowStockProducts = products.filter(product => product.quantity <= product.minStock);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900 dark:text-white">Stock Management</h1>
          <p className="text-secondary-600 dark:text-secondary-400 mt-1">
            Manage your inventory and track stock levels
          </p>
        </div>
        <button className="btn-primary flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Add Product
        </button>
      </div>

      {/* Low Stock Alert */}
      {lowStockProducts.length > 0 && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-2" />
            <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
              Low Stock Alert
            </h3>
          </div>
          <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
            {lowStockProducts.length} product(s) are running low on stock and need restocking.
          </p>
        </div>
      )}

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
              <input
                type="text"
                placeholder="Search products or suppliers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>
          </div>
          <div className="sm:w-48">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input-field"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-secondary-200 dark:divide-secondary-700">
            <thead className="bg-secondary-50 dark:bg-secondary-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider">
                  Supplier
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-secondary-800 divide-y divide-secondary-200 dark:divide-secondary-700">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mr-3">
                        <Package className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-secondary-900 dark:text-white">
                          {product.name}
                        </div>
                        <div className="text-sm text-secondary-500 dark:text-secondary-400">
                          Updated: {product.lastUpdated}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-200">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className={`text-sm font-medium ${
                        product.quantity <= product.minStock 
                          ? 'text-red-600 dark:text-red-400' 
                          : 'text-secondary-900 dark:text-white'
                      }`}>
                        {product.quantity}
                      </span>
                      {product.quantity <= product.minStock && (
                        <AlertTriangle className="h-4 w-4 text-red-500 ml-2" />
                      )}
                    </div>
                    <div className="text-xs text-secondary-500 dark:text-secondary-400">
                      Min: {product.minStock}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-900 dark:text-white">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500 dark:text-secondary-400">
                    {product.supplier}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600 dark:text-secondary-400">
                Total Products
              </p>
              <p className="text-2xl font-bold text-secondary-900 dark:text-white">
                {products.length}
              </p>
            </div>
            <Package className="h-8 w-8 text-primary-600 dark:text-primary-400" />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600 dark:text-secondary-400">
                Low Stock Items
              </p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                {lowStockProducts.length}
              </p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600 dark:text-secondary-400">
                Total Value
              </p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                ${products.reduce((sum, product) => sum + (product.price * product.quantity), 0).toLocaleString()}
              </p>
            </div>
            <div className="h-8 w-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
              <span className="text-green-600 dark:text-green-400 font-bold">$</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockManagement;