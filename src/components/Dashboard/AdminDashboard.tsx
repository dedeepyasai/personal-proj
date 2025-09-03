import React from 'react';
import { TrendingUp, Users, FileText, DollarSign, Settings, Calendar } from 'lucide-react';

interface AdminDashboardProps {
  user: any;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user }) => {
  // Mock data for admin overview
  const stats = {
    totalSubmissions: 45,
    activeReviews: 12,
    totalAwarded: 156000,
    pendingPayouts: 3,
  };

  const currentCycle = {
    id: '1',
    quarter: 'Q1 2025',
    status: 'open',
    submissions: 23,
    deadline: '2025-01-31',
    grantsAvailable: 3,
    grantAmount: 10000,
  };

  const assignedReviews = [
    {
      id: '1',
      submissionTitle: 'AI-Powered Energy Storage System',
      applicantName: 'Anonymous',
      tier: 'premium',
      dueDate: '2024-12-25',
      status: 'pending',
      conflicted: false,
    },
    {
      id: '2',
      submissionTitle: 'Blockchain-based Supply Chain Tracking',
      applicantName: 'Anonymous',
      tier: 'standard',
      dueDate: '2024-12-23',
      status: 'completed',
      conflicted: false,
    },
    {
      id: '3',
      submissionTitle: 'Nano-material Water Filtration System',
      applicantName: 'Anonymous',
      tier: 'priority',
      dueDate: '2024-12-28',
      status: 'pending',
      conflicted: true,
    },
  ];

  const recentActivity = [
    { action: 'New submission', details: 'AI-Powered Energy Storage System', time: '2 hours ago' },
    { action: 'Review completed', details: 'Quantum Computing Algorithm', time: '4 hours ago' },
    { action: 'Payment processed', details: 'Premium tier submission', time: '1 day ago' },
    { action: 'New judge registered', details: 'Dr. Sarah Chen', time: '2 days ago' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50';
      case 'pending': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getDueDateColor = (dueDate: string) => {
    const days = Math.ceil((new Date(dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    if (days < 2) return 'text-red-600';
    if (days < 5) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage grant cycles, review submissions, and oversee platform operations</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Submissions</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.totalSubmissions}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Users className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Active Reviews</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.activeReviews}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Awarded</p>
              <p className="text-2xl font-semibold text-gray-900">${stats.totalAwarded.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Pending Payouts</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.pendingPayouts}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Cycle */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Current Grant Cycle</h2>
            <button className="flex items-center space-x-1 px-3 py-1 text-sm text-blue-600 hover:text-blue-700 transition-colors">
              <Settings className="w-4 h-4" />
              <span>Manage</span>
            </button>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{currentCycle.quarter}</h3>
                <p className="text-gray-600">Grant Cycle</p>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 mb-1">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Deadline: {currentCycle.deadline}</span>
                </div>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {currentCycle.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{currentCycle.submissions}</p>
                <p className="text-sm text-gray-600">Submissions</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{currentCycle.grantsAvailable}</p>
                <p className="text-sm text-gray-600">Grants Available</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gold-600">${currentCycle.grantAmount.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Per Grant</p>
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <button className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Review Submissions
              </button>
              <button className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                Generate Reports
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.details}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Review Queue Management */}
      <div className="mt-8 bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Review Management</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {assignedReviews.map((review) => (
              <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{review.submissionTitle}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(review.status)}`}>
                        {review.status}
                      </span>
                      <span className={getDueDateColor(review.dueDate)}>
                        Due {review.dueDate}
                      </span>
                      {review.conflicted && (
                        <span className="text-red-600">Conflict Reported</span>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {review.conflicted ? (
                      <button className="px-3 py-1 text-sm text-red-600 border border-red-300 rounded-md hover:bg-red-50 transition-colors">
                        Reassign
                      </button>
                    ) : (
                      <button className="px-3 py-1 text-sm text-blue-600 border border-blue-300 rounded-md hover:bg-blue-50 transition-colors">
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;