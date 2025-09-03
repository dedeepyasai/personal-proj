import React from 'react';
import { X, Star, CheckCircle, Calendar, User } from 'lucide-react';

interface CompletedReviewModalProps {
  submission: {
    id: string;
    title: string;
    category: string;
    abstract: string;
    submittedDate: string;
  };
  onClose: () => void;
}

const CompletedReviewModal: React.FC<CompletedReviewModalProps> = ({ submission, onClose }) => {
  // Mock completed review data
  const completedReview = {
    submittedAt: '2024-12-18T10:30:00Z',
    answers: {
      1: 'This innovation represents a significant advancement in energy storage technology. The AI-powered approach to battery management is novel and addresses key limitations in current systems. The use of machine learning for predictive analytics sets it apart from existing solutions.',
      2: 'The practical applications are extensive, particularly in electric vehicles and grid storage systems. The real-time optimization capabilities would provide immediate benefits to users through extended battery life and improved performance.',
      3: 'The main limitations include the computational requirements for real-time AI processing and potential dependency on training data quality. However, the patent adequately addresses these concerns with proposed hardware optimizations and robust training methodologies.',
      4: 'The technical implementation appears highly feasible. The proposed architecture leverages existing AI frameworks and battery management hardware, making it practical for commercial deployment.',
      5: 4 // Confidence rating out of 5
    },
    comments: 'This is a well-researched patent with strong technical merit. The innovation addresses real market needs and demonstrates clear advantages over existing solutions. The inventors have provided comprehensive technical details and addressed potential limitations.',
    feedbackToApplicant: 'Excellent work on this patent application. The AI-powered battery management system shows great promise for commercial applications. Consider expanding the discussion on scalability for different battery types and sizes. The technical implementation is sound and the market potential is significant.',
    overallScore: 4.2,
    reviewCriteria: {
      innovation: 4.5,
      utility: 4.0,
      limitations: 4.0,
      feasibility: 4.5,
      confidence: 4.0
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStarDisplay = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">{rating}/5</span>
      </div>
    );
  };

  const questions = [
    'How innovative is this idea compared to existing solutions in the market?',
    'How useful and applicable is this innovation in real-world scenarios?',
    'What are the main limitations of this innovation and how well are they addressed?',
    'How technically feasible is the implementation of this innovation?',
    'How confident are you in this innovation\'s potential for success?'
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Completed Review</h2>
            </div>
            <p className="text-gray-600">{submission.title}</p>
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
          {/* Review Summary */}
          <div className="bg-green-50 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Review Summary</h3>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">
                  Completed: {formatDate(completedReview.submittedAt)}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Overall Score</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-green-600">{completedReview.overallScore}</span>
                  <span className="text-gray-500">/5.0</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Category</h4>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {submission.category}
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Scores */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Detailed Evaluation Scores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Innovation Level</h4>
                {getStarDisplay(completedReview.reviewCriteria.innovation)}
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Practical Utility</h4>
                {getStarDisplay(completedReview.reviewCriteria.utility)}
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Limitations Assessment</h4>
                {getStarDisplay(completedReview.reviewCriteria.limitations)}
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Technical Feasibility</h4>
                {getStarDisplay(completedReview.reviewCriteria.feasibility)}
              </div>
            </div>
            <div className="mt-4 border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Confidence Rating</h4>
              {getStarDisplay(completedReview.reviewCriteria.confidence)}
            </div>
          </div>

          {/* Review Answers */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Review Responses</h3>
            <div className="space-y-6">
              {questions.map((question, index) => (
                <div key={index + 1} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    {index + 1}. {question}
                  </h4>
                  {index + 1 === 5 ? (
                    // Confidence rating display
                    <div className="pl-4">
                      {getStarDisplay(completedReview.answers[5] as number)}
                    </div>
                  ) : (
                    // Text response
                    <div className="pl-4 text-gray-700 text-sm leading-relaxed">
                      {completedReview.answers[index + 1]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Internal Comments */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Internal Comments</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 text-sm leading-relaxed">{completedReview.comments}</p>
            </div>
          </div>

          {/* Feedback to Applicant */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Feedback to Applicant</h3>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-gray-700 text-sm leading-relaxed">{completedReview.feedbackToApplicant}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Review completed and submitted to the evaluation system
            </div>
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
  );
};

export default CompletedReviewModal;