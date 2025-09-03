import React, { useState } from 'react';
import { Clock, FileText, Users, Award, Download, MessageCircle } from 'lucide-react';
import SubmissionWizard from '../Submission/SubmissionWizard';

interface ApplicantDashboardProps {
  user: any;
}

const ApplicantDashboard: React.FC<ApplicantDashboardProps> = ({ user }) => {
  const [showSubmissionWizard, setShowSubmissionWizard] = useState(false);

  // Mock data - in real app, fetch from API
  const submissions = [
    {
      id: '1',
      title: 'AI-Powered Energy Storage System',
      status: 'under_review',
      tier: 'premium',
      averageScore: null,
      reviewCount: 2,
      submittedAt: '2024-12-15',
    },
    {
      id: '2',
      title: 'Quantum Computing Algorithm for Drug Discovery',
      status: 'awarded',
      tier: 'priority',
      averageScore: 8.7,
      reviewCount: 5,
      submittedAt: '2024-11-20',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'awarded': return 'text-green-600 bg-green-50';
      case 'under_review': return 'text-yellow-600 bg-yellow-50';
      case 'rejected': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'premium': return 'bg-gold-100 text-gold-800 border-gold-200';
      case 'priority': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.full_name}</h1>
        <p className="text-gray-600 mt-2">Track your submissions and connect with mentors</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Submissions</p>
              <p className="text-2xl font-semibold text-gray-900">2</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Under Review</p>
              <p className="text-2xl font-semibold text-gray-900">1</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Awards Won</p>
              <p className="text-2xl font-semibold text-gray-900">1</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Mentor Sessions</p>
              <p className="text-2xl font-semibold text-gray-900">3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Submissions */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Your Submissions</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {submissions.map((submission) => (
              <div key={submission.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-medium text-gray-900">{submission.title}</h3>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getTierBadge(submission.tier)}`}>
                        {submission.tier}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                        {submission.status.replace('_', ' ')}
                      </span>
                      <span>{submission.reviewCount} reviews</span>
                      {submission.averageScore && (
                        <span>Score: {submission.averageScore}/10</span>
                      )}
                      <span>Submitted {submission.submittedAt}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {submission.status === 'awarded' && (
                      <button className="flex items-center space-x-1 px-3 py-1 text-sm text-blue-600 hover:text-blue-700 transition-colors">
                        <Download className="w-4 h-4" />
                        <span>Certificate</span>
                      </button>
                    )}
                    <button className="flex items-center space-x-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-700 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span>Messages</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button 
              onClick={() => setShowSubmissionWizard(true)}
              className="w-full py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              + Submit New Application
            </button>
          </div>
        </div>
      </div>

      {/* Submission Wizard Modal */}
      {showSubmissionWizard && (
        <SubmissionWizard
          onComplete={(submission) => {
            console.log('Submission completed:', submission);
            setShowSubmissionWizard(false);
            alert('Submission completed successfully!');
          }}
          onClose={() => setShowSubmissionWizard(false)}
        />
      )}
    </div>
  );
};

export default ApplicantDashboard;