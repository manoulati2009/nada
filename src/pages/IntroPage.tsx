import React from 'react';
import { Link } from 'react-router-dom';
import { Package, BarChart3, Users, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const IntroPage: React.FC = () => {
  const features = [
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Track stock levels, manage products, and get low-stock alerts in real-time.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      description: 'Comprehensive reporting with charts and insights to drive business decisions.'
    },
    {
      icon: Users,
      title: 'Role-Based Access',
      description: 'Secure access control with Admin, Assistant, and Cashier roles.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with data backup and recovery features.'
    }
  ];

  const benefits = [
    'Real-time stock tracking',
    'Automated low-stock alerts',
    'Sales and purchase management',
    'Comprehensive reporting',
    'Multi-user support',
    'Dark mode interface'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-primary-600" />
            <span className="text-2xl font-bold text-primary-600">StockManager</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-secondary-600 hover:text-primary-600 font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary-900 dark:text-white mb-6 animate-fade-in">
            Streamline Your
            <span className="text-primary-600 block animate-bounce-gentle">
              Stock Management
            </span>
          </h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-2xl mx-auto animate-slide-up">
            Powerful inventory management system designed for modern businesses. 
            Track stock, manage sales, and generate insights with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              to="/register"
              className="btn-primary text-lg px-8 py-3 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/login"
              className="btn-secondary text-lg px-8 py-3"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Comprehensive tools to manage your inventory efficiently and grow your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-16 w-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white dark:bg-secondary-800 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
                Why Choose StockManager?
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
                Built for businesses of all sizes, our platform provides the tools you need 
                to manage inventory efficiently and make data-driven decisions.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-primary-100">Total Products</span>
                    <span className="text-2xl font-bold">1,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-100">Low Stock Items</span>
                    <span className="text-2xl font-bold text-yellow-300">23</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-100">Monthly Sales</span>
                    <span className="text-2xl font-bold text-green-300">$45,678</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            Join thousands of businesses already using StockManager to streamline their operations.
          </p>
          <Link
            to="/register"
            className="btn-primary text-lg px-8 py-3 inline-flex items-center"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 dark:bg-black text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Package className="h-6 w-6 text-primary-400" />
            <span className="text-xl font-bold">StockManager</span>
          </div>
          <p className="text-secondary-400">
            © 2024 StockManager. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default IntroPage;