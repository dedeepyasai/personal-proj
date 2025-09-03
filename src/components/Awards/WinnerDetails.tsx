import React from 'react';
import { X, Award, Calendar, DollarSign, Users, ExternalLink, FileText, Globe } from 'lucide-react';

interface WinnerDetailsProps {
  winner: {
    id: string;
    title: string;
    abstract: string;
    awardAmount: number;
    quarter: string;
    team: string;
    sponsor: string;
    country: string;
    patentStatus: string;
    socialImage: string;
  };
  onClose: () => void;
}

const WinnerDetails: React.FC<WinnerDetailsProps> = ({ winner, onClose }) => {
  const fullAbstract = `${winner.abstract} This groundbreaking innovation represents a significant advancement in the field, with potential applications across multiple industries. The research methodology employed cutting-edge techniques and rigorous testing protocols to validate the effectiveness of the proposed solution.

The project demonstrates exceptional technical merit, commercial viability, and potential for societal impact. The team's expertise and track record in the field, combined with strong intellectual property protection, positions this innovation for successful market adoption and scaling.

Key achievements include proof-of-concept validation, preliminary market research, and establishment of strategic partnerships. The grant funding will enable further development, prototype refinement, and preparation for commercial deployment.`;

  const projectDetails = {
    sector: 'Clean Technology',
    stage: 'Prototype Development',
    marketSize: '$2.5B globally',
    timeline: '18 months to market',
    patents: '3 pending applications',
    publications: '2 peer-reviewed papers',
  };

  const teamMembers = winner.team.split(', ').map((name, index) => ({
    name: name.trim(),
    role: index === 0 ? 'Principal Investigator' : 'Co-Investigator',
    expertise: index === 0 ? 'Energy Systems Engineering' : 'Materials Science',
  }));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="relative">
          <img
            src={winner.socialImage}
            alt={winner.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="p-2 bg-white bg-opacity-90 rounded-full text-gray-600 hover:text-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center space-x-3 mb-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-90 text-blue-900">
                <Award className="w-4 h-4 mr-1" />
                Grant Winner
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-600 text-white">
                {winner.patentStatus}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">{winner.title}</h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Award Info */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-1" />
              <p className="text-sm text-gray-600">Award Amount</p>
              <p className="font-semibold">${winner.awardAmount.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-1" />
              <p className="text-sm text-gray-600">Grant Cycle</p>
              <p className="font-semibold">{winner.quarter}</p>
            </div>
            <div className="text-center">
              <Globe className="w-6 h-6 text-purple-600 mx-auto mb-1" />
              <p className="text-sm text-gray-600">Country</p>
              <p className="font-semibold">{winner.country}</p>
            </div>
            <div className="text-center">
              <Award className="w-6 h-6 text-gold-600 mx-auto mb-1" />
              <p className="text-sm text-gray-600">Sponsor</p>
              <p className="font-semibold">{winner.sponsor}</p>
            </div>
          </div>

          {/* Abstract */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Abstract</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">{fullAbstract}</p>
            </div>
          </div>

          {/* Project Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(projectDetails).map(([key, value]) => (
                <div key={key} className="border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                  <p className="font-semibold text-gray-900">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Research Team</h2>
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                    <p className="text-sm text-blue-600">{member.expertise}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact & Future Plans */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Impact & Future Plans</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Expected Impact</h3>
              <p className="text-blue-800 mb-4">
                This innovation has the potential to reduce energy storage costs by 40% while improving efficiency by 25%, 
                contributing significantly to renewable energy adoption and carbon emission reduction goals.
              </p>
              <h3 className="font-semibold text-blue-900 mb-2">Next Steps</h3>
              <ul className="text-blue-800 space-y-1">
                <li>• Complete prototype development and testing</li>
                <li>• Secure additional funding for scaling</li>
                <li>• Establish manufacturing partnerships</li>
                <li>• File additional patent applications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Sponsored by <span className="font-medium text-blue-600">{winner.sponsor}</span>
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center space-x-1 px-4 py-2 text-blue-600 border border-blue-300 rounded-md hover:bg-blue-50 transition-colors">
                <FileText className="w-4 h-4" />
                <span>Download Summary</span>
              </button>
              <button className="flex items-center space-x-1 px-4 py-2 text-blue-600 border border-blue-300 rounded-md hover:bg-blue-50 transition-colors">
                <ExternalLink className="w-4 h-4" />
                <span>Share Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerDetails;