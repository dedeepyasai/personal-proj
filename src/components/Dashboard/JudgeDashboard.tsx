import React from 'react';
import { Clock, FileText, Star, CheckCircle2, AlertTriangle } from 'lucide-react';

interface JudgeDashboardProps {
  user: any;
}

const JudgeDashboard: React.FC<JudgeDashboardProps> = ({ user }) => {
  // Mock data - in real app, fetch from API
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
        <h1 className="text-3xl font-bold text-gray-900">Judge Dashboard</h1>
        <p className="text-gray-600 mt-2">Review submissions and provide expert evaluation</p>
      </div>

      {/* Judge Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Assigned Reviews</p>
              <p className="text-2xl font-semibold text-gray-900">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Pending Reviews</p>
              <p className="text-2xl font-semibold text-gray-900">2</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-semibold text-gray-900">1</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Average Score Given</p>
              <p className="text-2xl font-semibold text-gray-900">7.8</p>
            </div>
          </div>
        </div>
      </div>

      {/* Review Queue */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Review Queue</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {assignedReviews.map((review) => (
              <div key={review.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-medium text-gray-900">{review.submissionTitle}</h3>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {review.tier}
                      </span>
                      {review.conflicted && (
                        <div className="flex items-center space-x-1 text-red-600">
                          <AlertTriangle className="w-4 h-4" />
                          <span className="text-xs">Conflict Reported</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(review.status)}`}>
                        {review.status}
                      </span>
                      <span className={getDueDateColor(review.dueDate)}>
                        Due {review.dueDate}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {review.conflicted ? (
                      <button className="px-4 py-2 text-sm text-red-600 border border-red-300 rounded-md hover:bg-red-50 transition-colors">
                        Report Conflict
                      </button>
                    ) : review.status === 'pending' ? (
                      <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                        Start Review
                      </button>
                    ) : (
                      <button className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                        View Review
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

export default JudgeDashboard;