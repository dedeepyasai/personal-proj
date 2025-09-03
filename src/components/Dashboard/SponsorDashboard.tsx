import React from 'react';
import { Eye, TrendingUp, Award, Users, DollarSign, BarChart3 } from 'lucide-react';

interface SponsorDashboardProps {
  user: any;
}

const SponsorDashboard: React.FC<SponsorDashboardProps> = ({ user }) => {
  const sponsorStats = {
    totalInvestment: 50000,
    submissionsSupported: 12,
    winnersSupported: 3,
    impressions: 15420,
  };

  const fundedSubmissions = [
    {
      id: '1',
      title: 'AI-Powered Energy Storage System',
      status: 'winner',
      amount: 10000,
      impressions: 2340,
    },
    {
      id: '2',
      title: 'Quantum Computing Algorithm',
      status: 'finalist',
      amount: 10000,
      impressions: 1890,
    },
    {
      id: '3',
      title: 'Nano-material Water Filtration',
      status: 'under_review',
      amount: 10000,
      impressions: 1560,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Sponsor Dashboard</h1>
        <p className="text-gray-600 mt-2">Track your investment impact and discover innovation</p>
      </div>

      {/* Sponsor Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Investment</p>
              <p className="text-2xl font-semibold text-gray-900">${sponsorStats.totalInvestment.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Submissions Supported</p>
              <p className="text-2xl font-semibold text-gray-900">{sponsorStats.submissionsSupported}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-gold-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-gold-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Winners Supported</p>
              <p className="text-2xl font-semibold text-gray-900">{sponsorStats.winnersSupported}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Brand Impressions</p>
              <p className="text-2xl font-semibold text-gray-900">{sponsorStats.impressions.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Current Sponsorships */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Your Sponsored Grants</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {fundedSubmissions.map((submission) => (
                <div key={submission.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{submission.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          submission.status === 'winner' ? 'bg-green-100 text-green-800' :
                          submission.status === 'finalist' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {submission.status}
                        </span>
                        <span>${submission.amount.toLocaleString()} funded</span>
                        <span>{submission.impressions} impressions</span>
                      </div>
                    </div>
                    <button className="px-3 py-1 text-sm text-blue-600 border border-blue-300 rounded-md hover:bg-blue-50 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors">
              + Fund New Grant
            </button>
          </div>
        </div>

        {/* Current Cycle Info */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Current Cycle</h2>
          </div>
          <div className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{currentCycle.quarter}</h3>
              <p className="text-gray-600">Grant Cycle</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Status</span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {currentCycle.status}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Submissions</span>
                <span className="font-semibold">{currentCycle.submissions}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Grants Available</span>
                <span className="font-semibold">{currentCycle.grantsAvailable}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Grant Amount</span>
                <span className="font-semibold">${currentCycle.grantAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Deadline</span>
                <span className="font-semibold">{currentCycle.deadline}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <BarChart3 className="w-4 h-4 inline mr-2" />
                View Analytics Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorDashboard;