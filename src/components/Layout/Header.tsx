import React from 'react';
import { 
  Award, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  DollarSign,
  FileText,
  Clock
} from 'lucide-react';

interface LandingPageProps {
  onShowAuth: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onShowAuth }) => {
  const stats = [
    { label: 'Patents Evaluated', value: '2,500+', icon: FileText },
    { label: 'Years of Experience', value: '10+', icon: Clock },
    { label: 'Success Rate', value: '95%', icon: TrendingUp },
    { label: 'Expert Evaluators', value: '150+', icon: Users },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Elite Expert Evaluation',
      description: 'Your innovations are evaluated by top-tier industry experts, professors, and research scholars with decades of experience.'
    },
    {
      icon: Zap,
      title: 'Comprehensive Assessment',
      description: 'Thorough evaluation process designed to demonstrate extraordinary ability and innovation excellence.'
    },
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'Connect with our worldwide network of industry leaders, mentors, and innovation partners.'
    },
    {
      icon: Award,
      title: '10 Years of Excellence',
      description: 'A decade of helping exceptional innovators achieve recognition and advance their careers through our proven process.'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Quantum Computing Researcher',
      company: 'MIT',
      quote: 'PatentGrant\'s elite evaluation process provided the credibility I needed for my visa application. The expert review from top professors was invaluable.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Clean Energy Inventor',
      company: 'GreenTech Solutions',
      quote: 'The comprehensive evaluation by industry leaders helped establish my extraordinary ability. The process was thorough and professional.',
      rating: 5
    },
    {
      name: 'Dr. Lisa Wang',
      role: 'Biotech Entrepreneur',
      company: 'BioInnovate',
      quote: 'Outstanding platform for demonstrating innovation excellence. The expert evaluation and incubator program exceeded expectations.',
      rating: 5
    }
  ];

  const winners = [
    {
      title: 'Revolutionary AI Drug Discovery Platform',
      inventor: 'Dr. James Liu',
      recognition: 'Elite Recognition',
      category: 'Healthcare Innovation Leader',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Breakthrough Energy Storage Technology',
      inventor: 'Maria Santos',
      recognition: 'Elite Recognition',
      category: 'Clean Technology Pioneer',
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Revolutionary Biodegradable Materials',
      inventor: 'Dr. Robert Kim',
      recognition: 'Elite Recognition',
      category: 'Environmental Innovation',
      image: 'https://images.pexels.com/photos/3735165/pexels-photo-3735165.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Award className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">PatentGrant</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#winners" className="text-gray-600 hover:text-blue-600 transition-colors">Success Stories</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Reviews</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            </div>

            <button
              onClick={onShowAuth}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Elite Patent Evaluation for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"> Exceptional Innovators</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join the top 5% of innovators evaluated by industry-leading experts, professors, and research scholars. 
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={onShowAuth}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Apply for Evaluation
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all font-semibold text-lg">
                  Learn More
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-blue-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Elite expert evaluation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Visa application support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>10+ years experience</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Innovation and Patents"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Success Rate</p>
                    <p className="text-2xl font-bold text-gray-900">95%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Elite Patent Evaluation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 10 years, we've provided comprehensive patent evaluation services to help exceptional 
              innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Winners Section */}
      <section id="winners" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Top 5% Innovators
            </h2>
            <p className="text-xl text-gray-600">
              Celebrating exceptional innovators who've achieved recognition through our elite evaluation process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {winners.map((winner, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={winner.image}
                  alt={winner.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      <Award className="w-4 h-4 mr-1" />
                      Elite Recognition
                    </span>
                    <span className="text-sm text-gray-500">{winner.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{winner.title}</h3>
                  <p className="text-gray-600">by {winner.inventor}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={onShowAuth}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Apply for Elite Evaluation
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Elite Innovators Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from top-tier innovators who've achieved recognition through our evaluation process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Evaluation Services
            </h2>
            <p className="text-xl text-gray-600">
              Our complete package designed for exceptional innovators seeking recognition and career advancement
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-blue-500">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Elite Innovation Evaluation</h3>
                <p className="text-xl text-gray-600">Comprehensive assessment for exceptional innovators</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Expert Evaluation Panel</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>7+ Top-Tier Industry Experts</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>University Professors & Research Scholars</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Industry Leaders with 20+ Years Experience</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Comprehensive Technical Assessment</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Complete Support Package</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Detailed Innovation Analysis Report</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Multiple Expert Mentor Sessions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Incubator Program Access</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Commercialization Guidance</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Why Choose Our Elite Evaluation?</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-blue-600 mr-2" />
                    <span>Top 5% Innovator Recognition</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-600 mr-2" />
                    <span>Expert Network Access</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-blue-600 mr-2" />
                    <span>Global Industry Recognition</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                    <span>Career Advancement Support</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  onClick={onShowAuth}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-lg shadow-lg"
                >
                  Start Your Elite Evaluation
                </button>
                <p className="text-sm text-gray-600 mt-3">Join the top 5% of recognized innovators worldwide</p>
              </div>
            </div>
          </div>
          
          {/* Additional Services */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation Incubator</h3>
              <p className="text-gray-600">
                Access our exclusive incubator program for future entrepreneurs, connecting you with industry leaders and growth opportunities.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Mentorship</h3>
              <p className="text-gray-600">
                One-on-one guidance from top professors and industry experts to help advance your innovation and career goals.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Network</h3>
              <p className="text-gray-600">
                Connect with our worldwide network of innovators, researchers, and industry leaders across multiple sectors.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">A Decade of Innovation Excellence</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              For over 10 years, we've been the trusted partner for exceptional innovators, 
              helping them achieve recognition and advance their careers through rigorous expert evaluation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
                <div className="text-blue-100">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">2,500+</div>
                <div className="text-blue-100">Innovations Evaluated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, transparent process from submission to elite recognition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Submit</h3>
              <p className="text-gray-600">Submit your innovation portfolio and patent documents through our secure platform.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Elite Review</h3>
              <p className="text-gray-600">Top-tier experts, professors, and research scholars evaluate your innovation across multiple criteria.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Recognition</h3>
              <p className="text-gray-600">Receive comprehensive evaluation report and recognition as a top 5% innovator.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Advance</h3>
              <p className="text-gray-600">Leverage your elite status for career advancement and access our incubator program.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join the Elite 5%?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join exceptional innovators who have achieved elite recognition and advanced their careers through our proven evaluation process.
          </p>
          <button
            onClick={onShowAuth}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
          >
            Apply for Elite Evaluation
            <ArrowRight className="w-5 h-5 inline ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">PatentGrant</span>
              </div>
              <p className="text-gray-400">
                Empowering exceptional innovators worldwide with elite recognition and expert guidance for over a decade.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Incubator Program</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PatentGrant. All rights reserved. Empowering exceptional innovators worldwide for over 10 years.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;