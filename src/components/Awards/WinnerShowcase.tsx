import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, DollarSign, Users } from 'lucide-react';
import WinnerDetails from './WinnerDetails';

const WinnerShowcase: React.FC = () => {
  const [selectedWinner, setSelectedWinner] = useState<any>(null);

  // Mock winners data
  const winners = [
    {
      id: '1',
      title: 'Quantum Computing Algorithm for Drug Discovery',
      abstract: 'Revolutionary quantum algorithm that accelerates drug discovery by 1000x through novel molecular simulation techniques.',
      awardAmount: 10000,
      quarter: 'Q4 2024',
      team: 'Dr. Jane Smith, Prof. Michael Chen',
      sponsor: 'TechVentures Corp',
      country: 'US',
      patentStatus: 'granted',
      socialImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '2',
      title: 'AI-Powered Renewable Energy Grid',
      abstract: 'Machine learning system that optimizes renewable energy distribution across smart grids, reducing waste by 40%.',
      awardAmount: 10000,
      quarter: 'Q4 2024',
      team: 'Sarah Johnson, David Kim, Lisa Zhang',
      sponsor: 'GreenTech Foundation',
      country: 'CA',
      patentStatus: 'pending',
      socialImage: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '3',
      title: 'Biodegradable Plastic Alternative',
      abstract: 'Novel biomaterial derived from agricultural waste that replaces traditional plastics while maintaining durability.',
      awardAmount: 10000,
      quarter: 'Q3 2024',
      team: 'Dr. Robert Martinez, Elena Rodriguez',
      sponsor: 'EcoInnovate LLC',
      country: 'DE',
      patentStatus: 'granted',
      socialImage: 'https://images.pexels.com/photos/3735165/pexels-photo-3735165.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-12 h-12 text-gold-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Grant Winners</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Celebrating groundbreaking innovations and the brilliant minds behind them
          </p>
        </div>
      </div>

      {/* Winners Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {winners.map((winner) => (
            <div key={winner.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={winner.socialImage}
                  alt={winner.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-90 text-blue-900">
                    <Award className="w-4 h-4 mr-1" />
                    Winner
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-600 text-white">
                    {winner.patentStatus}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {winner.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {winner.abstract}
                </p>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{winner.team}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{winner.quarter}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>${winner.awardAmount.toLocaleString()} Grant</span>
                    <button 
                      onClick={() => setSelectedWinner(winner)}
                      className="flex items-center space-x-1 px-3 py-1 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <span className="text-sm font-medium">View Details</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    Sponsored by <span className="font-medium text-blue-600">{winner.sponsor}</span>
                  </div>
                  <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Winners?</h2>
            <p className="text-gray-600 mb-6">
              Submit your patent or innovative project idea and get expert review with potential funding up to $10,000.
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Submit Your Innovation
            </button>
          </div>
        </div>
      </div>

      {/* Winner Details Modal */}
      {selectedWinner && (
        <WinnerDetails
          winner={selectedWinner}
          onClose={() => setSelectedWinner(null)}
        />
      )}
    </div>
  );
};

export default WinnerShowcase;