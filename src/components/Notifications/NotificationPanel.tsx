import React from 'react';
import { Bell, X, Clock, Award, FileText, Users, CheckCircle } from 'lucide-react';

interface NotificationPanelProps {
  onClose: () => void;
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({ onClose }) => {
  const notifications = [
    {
      id: '1',
      type: 'award',
      title: 'Congratulations! You won a grant',
      message: 'Your submission "AI-Powered Energy Storage System" has been awarded $10,000',
      time: '2 hours ago',
      read: false,
      icon: Award,
      color: 'text-green-600 bg-green-100',
    },
    {
      id: '2',
      type: 'review',
      title: 'New review assigned',
      message: 'You have been assigned to review "Quantum Computing Algorithm"',
      time: '4 hours ago',
      read: false,
      icon: FileText,
      color: 'text-blue-600 bg-blue-100',
    },
    {
      id: '3',
      type: 'submission',
      title: 'Submission under review',
      message: 'Your submission is now being reviewed by expert judges',
      time: '1 day ago',
      read: true,
      icon: Clock,
      color: 'text-yellow-600 bg-yellow-100',
    },
    {
      id: '4',
      type: 'mentor',
      title: 'Mentor session scheduled',
      message: 'Your mentorship session with Dr. Sarah Chen is scheduled for tomorrow',
      time: '2 days ago',
      read: true,
      icon: Users,
      color: 'text-purple-600 bg-purple-100',
    },
    {
      id: '5',
      type: 'payment',
      title: 'Payment confirmed',
      message: 'Your submission fee payment has been processed successfully',
      time: '3 days ago',
      read: true,
      icon: CheckCircle,
      color: 'text-green-600 bg-green-100',
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    // In a real app, this would update the notification status
    console.log('Marking notification as read:', id);
  };

  const markAllAsRead = () => {
    // In a real app, this would mark all notifications as read
    console.log('Marking all notifications as read');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 pt-16">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bell className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
              {unreadCount > 0 && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  {unreadCount} new
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-sm text-blue-600 hover:text-blue-700 mt-2"
            >
              Mark all as read
            </button>
          )}
        </div>

        {/* Notifications List */}
        <div className="overflow-y-auto max-h-[calc(80vh-100px)]">
          {notifications.length === 0 ? (
            <div className="p-8 text-center">
              <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No notifications yet</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {notifications.map((notification) => {
                const IconComponent = notification.icon;
                return (
                  <div
                    key={notification.id}
                    className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                      !notification.read ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-full ${notification.color}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className={`text-sm font-medium ${
                            !notification.read ? 'text-gray-900' : 'text-gray-700'
                          }`}>
                            {notification.title}
                          </p>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View all notifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;