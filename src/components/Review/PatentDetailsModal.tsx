import React from 'react';
import { X, FileText, Calendar, User, Globe, Award, Download } from 'lucide-react';

interface PatentDetailsModalProps {
  submission: {
    id: string;
    title: string;
    submittedDate: string;
    dueDate: string;
    category: string;
    status: string;
    priority: string;
    abstract: string;
  };
  onClose: () => void;
}

const PatentDetailsModal: React.FC<PatentDetailsModalProps> = ({ submission, onClose }) => {
  // Mock detailed patent data
  const patentDetails = {
    patentNumber: 'US11,234,567 B2',
    inventors: ['Dr. Sarah Johnson', 'Michael Chen', 'Lisa Rodriguez'],
    assignee: 'TechInnovate Corp',
    filingDate: '2023-03-15',
    publicationDate: '2024-01-10',
    country: 'United States',
    claims: 15,
    description: `This patent describes a revolutionary approach to energy storage using advanced AI algorithms to optimize battery performance. The innovation combines machine learning techniques with electrochemical processes to achieve unprecedented efficiency gains.

The system monitors battery conditions in real-time, adjusting charging and discharging patterns to maximize lifespan while maintaining optimal performance. Key innovations include:

1. Predictive battery health monitoring using neural networks
2. Dynamic load balancing across battery cells
3. Temperature-aware charging optimization
4. Self-healing battery management protocols

The technology has applications in electric vehicles, grid storage, and portable electronics, offering significant improvements over existing battery management systems.`,
    technicalField: 'Energy Storage Systems, Battery Management, Artificial Intelligence',
    backgroundArt: 'Current battery management systems rely on static algorithms that cannot adapt to changing conditions or predict battery degradation patterns effectively.',
    claims: [
      'A battery management system comprising an AI-powered control unit configured to monitor battery parameters in real-time',
      'The system of claim 1, wherein the AI control unit uses machine learning algorithms to predict battery degradation',
      'The system of claim 2, further comprising temperature sensors and adaptive charging circuits',
      'A method for optimizing battery performance using predictive analytics and dynamic load balancing'
    ]
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Patent Details</h2>
            <p className="text-gray-600">Submission ID: {submission.id}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {/* Patent Header Info */}
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{submission.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <FileText className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-gray-600">Patent Number:</span>
                <span className="ml-2 font-medium">{patentDetails.patentNumber}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-gray-600">Filing Date:</span>
                <span className="ml-2 font-medium">{patentDetails.filingDate}</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-gray-600">Country:</span>
                <span className="ml-2 font-medium">{patentDetails.country}</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-gray-600">Category:</span>
                <span className="ml-2 font-medium">{submission.category}</span>
              </div>
            </div>
          </div>

          {/* Inventors */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Inventors</h4>
            <div className="flex flex-wrap gap-2">
              {patentDetails.inventors.map((inventor, index) => (
                <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                  <User className="w-4 h-4 mr-1" />
                  {inventor}
                </span>
              ))}
            </div>
          </div>

          {/* Abstract */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Abstract</h4>
            <p className="text-gray-700 leading-relaxed">{submission.abstract}</p>
          </div>

          {/* Technical Field */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Technical Field</h4>
            <p className="text-gray-700">{patentDetails.technicalField}</p>
          </div>

          {/* Detailed Description */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Detailed Description</h4>
            <div className="prose prose-gray max-w-none">
              {patentDetails.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Claims */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Claims</h4>
            <div className="space-y-3">
              {patentDetails.claims.map((claim, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <p className="text-gray-700">
                    <span className="font-medium">Claim {index + 1}:</span> {claim}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Review Assignment Info */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Review Assignment</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Submitted:</span>
                <span className="ml-2 font-medium">{submission.submittedDate}</span>
              </div>
              <div>
                <span className="text-gray-600">Due Date:</span>
                <span className="ml-2 font-medium">{submission.dueDate}</span>
              </div>
              <div>
                <span className="text-gray-600">Priority:</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                  submission.priority === 'high' ? 'bg-red-100 text-red-800' :
                  submission.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {submission.priority}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Patent document and supporting materials available for review
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center space-x-1 px-4 py-2 text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors">
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatentDetailsModal;