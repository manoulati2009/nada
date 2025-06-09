import React from 'react';
import { Settings as SettingsIcon, User, Bell, Shield, Database } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-white">Settings</h1>
        <p className="text-secondary-600 dark:text-secondary-400 mt-1">
          Manage your application settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center mb-4">
            <User className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                User Management
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                Manage user accounts and permissions
              </p>
            </div>
          </div>
        </div>
        
        <div className="card hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center mb-4">
            <Bell className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                Notifications
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                Configure alert and notification settings
              </p>
            </div>
          </div>
        </div>
        
        <div className="card hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center mb-4">
            <Shield className="h-8 w-8 text-purple-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                Security
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                Security settings and access control
              </p>
            </div>
          </div>
        </div>
        
        <div className="card hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center mb-4">
            <Database className="h-8 w-8 text-orange-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                Data Management
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                Backup and data management options
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
          System Configuration
        </h3>
        <div className="text-center py-12">
          <SettingsIcon className="h-12 w-12 text-secondary-400 mx-auto mb-4" />
          <p className="text-secondary-600 dark:text-secondary-400">
            Advanced settings panel coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;