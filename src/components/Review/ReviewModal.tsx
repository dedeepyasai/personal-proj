import React, { useState } from 'react';
import { X, Star, AlertTriangle, Send, FileText } from 'lucide-react';

interface ReviewQuestion {
  id: number;
  question: string;
  answer: string | number | null;
}

interface ReviewModalProps {
  submission: {
    id: string;
    title: string;
    category: string;
    abstract: string;
  };
  questions: ReviewQuestion[];
  onSubmit: (reviewData: any) => void;
  onReportConflict: () => void;
  onClose: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ 
  submission, 
  questions, 
  onSubmit, 
  onReportConflict,
  onClose 
}) => {
  const [answers, setAnswers] = useState<{ [key: number]: string | number }>({});
  const [comments, setComments] = useState('');
  const [feedbackToApplicant, setFeedbackToApplicant] = useState('');

  const handleAnswerChange = (questionId: number, value: string | number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    // Validate that all questions are answered
    const unansweredQuestions = questions.filter(q => !answers[q.id]);
    if (unansweredQuestions.length > 0) {
      alert('Please answer all questions before submitting.');
      return;
    }

    if (!comments.trim()) {
      alert('Please provide internal comments.');
      return;
    }

    if (!feedbackToApplicant.trim()) {
      alert('Please provide feedback for the applicant.');
      return;
    }

    const reviewData = {
      submissionId: submission.id,
      answers,
      comments,
      feedbackToApplicant,
      submittedAt: new Date().toISOString()
    };

    onSubmit(reviewData);
  };

  const getStarRating = (questionId: number) => {
    const currentRating = answers[questionId] as number || 0;
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleAnswerChange(questionId, star)}
            className={`w-8 h-8 ${
              star <= currentRating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            } hover:text-yellow-400 transition-colors`}
          >
            <Star className="w-full h-full" />
          </button>
        ))}
        <span className="ml-2 text-sm text-gray-600">
          {currentRating > 0 ? `${currentRating}/5` : 'Not rated'}
        </span>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Patent Review</h2>
            <p className="text-gray-600">{submission.title}</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={onReportConflict}
              className="flex items-center space-x-1 px-4 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition-colors"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Report Conflict</span>
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Submission Info */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{submission.title}</h3>
            <p className="text-sm text-gray-600 mb-2">Category: {submission.category}</p>
            <p className="text-gray-700">{submission.abstract}</p>
          </div>

          {/* Review Questions */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Evaluation Questions</h3>
            
            <div className="space-y-8">
              {questions.map((question, index) => (
                <div key={question.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">
                    {index + 1}. {question.question}
                  </h4>
                  
                  {question.id === 5 ? (
                    // Confidence rating question (1-5 stars)
                    <div>
                      <p className="text-sm text-gray-600 mb-3">Rate your confidence (1-5 scale):</p>
                      {getStarRating(question.id)}
                    </div>
                  ) : (
                    // Text-based questions
                    <textarea
                      value={answers[question.id] as string || ''}
                      onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Provide your detailed evaluation..."
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Internal Comments */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Internal Comments</h3>
            <p className="text-sm text-gray-600 mb-3">
              These comments are for internal use only and will not be shared with the applicant.
            </p>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add your internal notes and observations..."
            />
          </div>

          {/* Feedback to Applicant */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Feedback to Applicant</h3>
            <p className="text-sm text-gray-600 mb-3">
              This feedback will be shared with the applicant to help them improve their innovation.
            </p>
            <textarea
              value={feedbackToApplicant}
              onChange={(e) => setFeedbackToApplicant(e.target.value)}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Provide constructive feedback for the applicant..."
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">
                Please ensure all questions are answered and feedback is provided.
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Send className="w-4 h-4" />
                <span>Submit Review</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;