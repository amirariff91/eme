import { BellIcon, ChartBarIcon, NewspaperIcon, GlobeAltIcon, UserGroupIcon, RssIcon, CodeBracketIcon, MapIcon, ClockIcon, TableCellsIcon, ChartPieIcon, DocumentTextIcon, BookOpenIcon, DocumentIcon } from '@heroicons/react/24/outline';

export default function SydneyTravelGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="container">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-purple-600">STG</span>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Traffic Growth Strategy</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-purple-600 transition-colors">
                <ChartBarIcon className="h-5 w-5" />
              </button>
              <button className="text-gray-600 hover:text-purple-600 transition-colors">
                <BellIcon className="h-5 w-5" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center mb-8 bg-purple-100 text-purple-600 px-6 py-2 rounded-full text-sm font-medium shadow-sm">
                <GlobeAltIcon className="h-4 w-4 mr-2" />
                Sydney Travel Guide Optimization Strategy
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Sydney Travel Guide's Growth Strategy
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                A comprehensive approach to boost Sydney Travel Guide's authority, visibility, and revenue through strategic optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Strategy Sections */}
        <div className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* 1. Domain Authority & Link Building */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <ChartBarIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Foundation</span>
                    <h2 className="text-2xl font-bold text-gray-900 mt-1">Domain Authority & Link Building</h2>
                  </div>
                </div>
                <div className="space-y-8">
                  {/* Current Status */}
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="font-semibold text-blue-800 mb-6 flex items-center">
                      <ChartPieIcon className="h-5 w-5 mr-2" />
                      Current Status & Strategy
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                          <TableCellsIcon className="h-5 w-5 mr-2 text-blue-600" />
                          Domain Metrics
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-3">
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <div>
                              <span className="font-medium">Low domain rating/authority</span>
                              <p className="text-gray-500 mt-1">Current DR: 7 (+6), Target: 25+</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <div>
                              <span className="font-medium">Limited quality backlinks</span>
                              <p className="text-gray-500 mt-1">Current: 7.3K (+65), Target: 10K+</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <div>
                              <span className="font-medium">Poor referring domains diversity</span>
                              <p className="text-gray-500 mt-1">Current: 69, Target: 200+</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <div>
                              <span className="font-medium">Low URL rating</span>
                              <p className="text-gray-500 mt-1">Current UR: 2.6 (+1.4), Target: 15+</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                          <UserGroupIcon className="h-5 w-5 mr-2 text-blue-600" />
                          Link Building Strategy
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-3">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <div>
                              <span className="font-medium">Submit to quality travel directories</span>
                              <p className="text-gray-500 mt-1">Target: 50+ directories</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <div>
                              <span className="font-medium">Local business partnerships</span>
                              <p className="text-gray-500 mt-1">Target: 30+ partnerships</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <div>
                              <span className="font-medium">Guest posting on travel blogs</span>
                              <p className="text-gray-500 mt-1">Target: 20+ guest posts</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <div>
                              <span className="font-medium">HARO responses for travel topics</span>
                              <p className="text-gray-500 mt-1">Target: 15+ mentions</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Implementation Plan */}
                  <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                    <h3 className="font-semibold text-indigo-800 mb-6 flex items-center">
                      <MapIcon className="h-5 w-5 mr-2" />
                      Implementation Plan
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                          <GlobeAltIcon className="h-5 w-5 mr-2 text-indigo-600" />
                          Directory Submissions
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-2">Target Directories:</h5>
                            <ul className="space-y-2">
                              {[
                                { name: 'TripAdvisor for Business', url: 'https://www.tripadvisor.com/Owners', da: '85+' },
                                { name: 'Australian Tourism Data Warehouse', url: 'https://atdw-online.com.au/', da: '75+' },
                                { name: 'Destination NSW Get Connected', url: 'https://www.destinationnsw.com.au/destination-nsw-business-support/get-connected', da: '80+' },
                                { name: 'Tourism Australia ATDW', url: 'https://www.tourismaustralia.com/marketing/ATDW', da: '85+' },
                                { name: 'Sydney Visitor', url: 'https://www.sydneyvisitor.com/add-listing', da: '55+' },
                                { name: 'Business Australia Directory', url: 'https://www.businessaustralia.com/how-we-help/grow-your-business/directory', da: '65+' },
                                { name: 'Australasian Leisure Management', url: 'https://www.ausleisure.com.au/directory/add-listing/', da: '50+' },
                                { name: 'Yellow Pages Australia', url: 'https://www.yellowpages.com.au/list-your-business', da: '75+' }
                              ].map((dir, index) => (
                                <li key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                                  <a href={dir.url} className="text-sm text-blue-600 hover:underline flex-1">{dir.name}</a>
                                  <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">DA {dir.da}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-4">
                            <h5 className="text-sm font-medium text-gray-700 mb-2">Benefits:</h5>
                            <ul className="grid grid-cols-2 gap-2">
                              <li className="flex items-center text-sm text-gray-600">
                                <span className="text-green-500 mr-2">✓</span>
                                Enhanced local visibility
                              </li>
                              <li className="flex items-center text-sm text-gray-600">
                                <span className="text-green-500 mr-2">✓</span>
                                Quality backlinks
                              </li>
                              <li className="flex items-center text-sm text-gray-600">
                                <span className="text-green-500 mr-2">✓</span>
                                Improved local SEO
                              </li>
                              <li className="flex items-center text-sm text-gray-600">
                                <span className="text-green-500 mr-2">✓</span>
                                Increased referral traffic
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-lg border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                          <UserGroupIcon className="h-5 w-5 mr-2 text-indigo-600" />
                          Outreach Campaign
                        </h4>
                        <div className="space-y-4">
                          {[
                            {
                              title: 'Strategic Partnerships',
                              items: ['Local tour operators', 'Sydney-based travel bloggers', 'Tourism organizations', 'Event organizers']
                            },
                            {
                              title: 'Content Collaboration',
                              items: ['Co-create event guides with venues', 'Develop neighborhood guides with local experts', 'Create food & drink guides with restaurants', 'Partner on seasonal content']
                            },
                            {
                              title: 'Local Authority Building',
                              items: ['Contribute to City of Sydney blog', 'Partner with Destination NSW', 'Collaborate with Tourism Australia', 'Work with local tourism boards']
                            },
                            {
                              title: 'Industry Engagement',
                              items: ['Join Sydney Tourism Alliance', 'Participate in tourism conferences', 'Network with hotel associations', 'Engage with restaurant groups']
                            },
                            {
                              title: 'Content Distribution',
                              items: ['Submit to travel aggregators', 'Share with tourism directories', 'Distribute to local media', 'Partner with travel platforms']
                            }
                          ].map((section, index) => (
                            <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                              <h5 className="text-sm font-medium text-gray-700 mb-2">{section.title}:</h5>
                              <ul className="grid grid-cols-2 gap-2">
                                {section.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                                    <span className="text-indigo-500 mr-2">•</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. E-E-A-T & Technical Foundation */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <CodeBracketIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">Core</span>
                    <h2 className="text-2xl font-bold text-gray-900 mt-1">E-E-A-T & Technical Foundation</h2>
                  </div>
                </div>
                <div className="space-y-8">
                  {/* E-E-A-T Enhancement */}
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <h3 className="font-semibold text-purple-800 mb-6 flex items-center">
                      <NewspaperIcon className="h-5 w-5 mr-2" />
                      E-E-A-T Enhancement
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                          <UserGroupIcon className="h-5 w-5 mr-2 text-purple-600" />
                          Author Expertise
                        </h4>
                        <div className="space-y-4">
                          {[
                            {
                              title: 'Detailed Author Bios',
                              description: 'Comprehensive background and credentials',
                              icon: '👤'
                            },
                            {
                              title: 'Credentials Display',
                              description: 'Professional qualifications and experience',
                              icon: '🎓'
                            },
                            {
                              title: 'Social Proof Integration',
                              description: 'Testimonials and recognition',
                              icon: '⭐'
                            },
                            {
                              title: 'Expert Contributions',
                              description: 'Industry publications and speaking engagements',
                              icon: '📚'
                            }
                          ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                              <span className="text-2xl">{item.icon}</span>
                              <div>
                                <h5 className="font-medium text-gray-900">{item.title}</h5>
                                <p className="text-sm text-gray-500">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-lg border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                          <ChartBarIcon className="h-5 w-5 mr-2 text-purple-600" />
                          Content Authority
                        </h4>
                        <div className="space-y-4">
                          {[
                            {
                              title: 'First-hand Experience',
                              description: 'Personal visits and authentic reviews',
                              icon: '✈️'
                            },
                            {
                              title: 'Local Expert Citations',
                              description: 'Quotes from industry professionals',
                              icon: '🗣️'
                            },
                            {
                              title: 'Fact Verification',
                              description: 'Regular content updates and checks',
                              icon: '✅'
                            },
                            {
                              title: 'Regular Updates',
                              description: 'Monthly content refresh schedule',
                              icon: '🔄'
                            }
                          ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                              <span className="text-2xl">{item.icon}</span>
                              <div>
                                <h5 className="font-medium text-gray-900">{item.title}</h5>
                                <p className="text-sm text-gray-500">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technical Optimization */}
                  <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                    <h3 className="font-semibold text-indigo-800 mb-6 flex items-center">
                      <CodeBracketIcon className="h-5 w-5 mr-2" />
                      Technical Foundation
                    </h3>
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-lg border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                          <RssIcon className="h-5 w-5 mr-2 text-indigo-600" />
                          Schema Implementation
                        </h4>
                        <div className="space-y-6">
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-3">Priority Schemas:</h5>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {[
                                {
                                  title: 'Event Coverage',
                                  items: ['Event schema for festivals', 'EventSeries for recurring events', 'PerformingGroup for artists', 'Place schema for venues']
                                },
                                {
                                  title: 'Travel Content',
                                  items: ['TravelGuide for area guides', 'TouristAttraction for landmarks', 'TouristDestination for regions', 'Trip for itineraries']
                                },
                                {
                                  title: 'Food & Dining',
                                  items: ['Restaurant for venue listings', 'FoodEvent for festivals', 'Review for restaurant reviews', 'Menu for special offerings']
                                }
                              ].map((category, index) => (
                                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                  <h6 className="font-medium text-gray-900 mb-2">{category.title}</h6>
                                  <ul className="space-y-2">
                                    {category.items.map((item, itemIndex) => (
                                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                                        <span className="text-indigo-500 mr-2">•</span>
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-3">Implementation Approaches:</h5>
                            <div className="space-y-4">
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h6 className="font-medium text-gray-900 mb-2">Manual Implementation</h6>
                                <pre className="text-xs bg-gray-100 p-3 rounded overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Sydney Food & Wine Festival 2024",
  "description": "Annual celebration of Sydney's food scene",
  "startDate": "2024-05-15T10:00",
  "endDate": "2024-05-19T22:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "The Rocks",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "The Rocks",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "postalCode": "2000",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.8599,
      "longitude": 151.2090
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "City of Sydney",
    "url": "https://www.cityofsydney.nsw.gov.au/"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.sydneyfoodandwine.com.au/tickets",
    "price": "25",
    "priceCurrency": "AUD",
    "availability": "https://schema.org/InStock",
    "validFrom": "2024-03-01T00:00"
  },
  "image": [
    "https://www.sydneytravelguide.com.au/images/food-festival-2024.jpg"
  ]
}`}
                                </pre>
                              </div>
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h6 className="font-medium text-gray-900 mb-2">Automated Implementation (Events Calendar Plugin)</h6>
                                <div className="space-y-3">
                                  <div className="flex items-center text-sm text-gray-600">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Install and configure Events Calendar plugin
                                  </div>
                                  <div className="flex items-center text-sm text-gray-600">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Configure automatic schema generation
                                  </div>
                                  <div className="flex items-center text-sm text-gray-600">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Set up event categories and taxonomies
                                  </div>
                                  <div className="flex items-center text-sm text-gray-600">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Enable venue and organizer management
                                  </div>
                                  <div className="flex items-center text-sm text-gray-600">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Configure recurring event support
                                  </div>
                                  <div className="flex items-center text-sm text-gray-600">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Set up ticket integration
                                  </div>
                                </div>
                                <div className="mt-4 p-3 bg-gray-100 rounded">
                                  <p className="text-sm font-medium text-gray-700 mb-2">Example: Weekend Events Article</p>
                                  <p className="text-xs text-gray-500">Each event in the article automatically generates its own schema markup:</p>
                                  <ul className="mt-2 space-y-1">
                                    {['Annie the Musical', 'Dua Lipa Concert', 'Sail on Duyfken', 'Sydney Streets—Redfern St', 'Bloom Theatre Show', 'Lakemba Nights'].map((event, index) => (
                                      <li key={index} className="flex items-center text-xs text-gray-600">
                                        <span className="text-indigo-500 mr-2">•</span>
                                        {event}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                          <ChartBarIcon className="h-5 w-5 mr-2 text-indigo-600" />
                          Core Web Vitals & Technical Issues
                        </h4>
                        <div className="space-y-6">
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-3">Current Status:</h5>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="bg-green-50 p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm font-medium text-green-800">Core Web Vitals</span>
                                  <span className="text-green-500">✓</span>
                                </div>
                                <p className="text-sm text-gray-600">Good scores in Search Console</p>
                              </div>
                              <div className="bg-yellow-50 p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm font-medium text-yellow-800">Speed Index</span>
                                  <span className="text-yellow-500">⚠️</span>
                                </div>
                                <p className="text-sm text-gray-600">Needs optimization</p>
                              </div>
                              <div className="bg-blue-50 p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm font-medium text-blue-800">Mobile Performance</span>
                                  <span className="text-blue-500">85</span>
                                </div>
                                <p className="text-sm text-gray-600">Score out of 100</p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-3">Speed Index Optimization:</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {[
                                'Optimize critical rendering path',
                                'Implement resource prioritization',
                                'Enhance server response time',
                                'Optimize image delivery'
                              ].map((item, index) => (
                                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                  <span className="text-blue-500 mr-2">⚡</span>
                                  <span className="text-sm text-gray-600">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-3">Technical Issues:</h5>
                            <div className="bg-red-50 p-4 rounded-lg">
                              <h6 className="font-medium text-red-800 mb-2">Robots.txt Configuration</h6>
                              <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600">
                                  <span className="text-red-500 mr-2">✗</span>
                                  <span>Remove overly restrictive "Disallow: */?*" rule</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                  <span className="text-green-500 mr-2">✓</span>
                                  Allow pagination parameters
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                  <span className="text-green-500 mr-2">✓</span>
                                  Allow legitimate URL parameters
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                  <span className="text-green-500 mr-2">✓</span>
                                  Update to more specific disallow rules
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. Content Strategy */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <NewspaperIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">Phase 2</span>
                    <h2 className="text-2xl font-bold text-gray-900 mt-1">Content Strategy</h2>
                  </div>
                </div>
                <div className="space-y-8">
                  {/* Content Structure */}
                  <div className="bg-violet-50 p-6 rounded-xl border border-violet-100">
                    <h3 className="font-semibold text-violet-800 mb-6 flex items-center">
                      <TableCellsIcon className="h-5 w-5 mr-2" />
                      Content Organization
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg border border-violet-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                          <MapIcon className="h-5 w-5 mr-2 text-violet-600" />
                          Primary Categories
                        </h4>
                        <div className="space-y-4">
                          {[
                            {
                              title: 'News & Events',
                              items: ['Festival coverage', 'Event announcements', 'Local news', 'Entertainment updates'],
                              icon: '📰'
                            },
                            {
                              title: 'Food & Drink',
                              items: ['Restaurant reviews', 'Food festivals', 'Bar guides', 'Culinary events'],
                              icon: '🍽️'
                            },
                            {
                              title: 'Entertainment',
                              items: ['Shows & performances', 'Live music', 'Theater & arts', 'Nightlife'],
                              icon: '🎭'
                            }
                          ].map((category, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                              <div className="flex items-center mb-3">
                                <span className="text-2xl mr-3">{category.icon}</span>
                                <h5 className="font-medium text-gray-900">{category.title}</h5>
                              </div>
                              <ul className="space-y-2">
                                {category.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                                    <span className="text-violet-500 mr-2">•</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-lg border border-violet-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                          <DocumentTextIcon className="h-5 w-5 mr-2 text-violet-600" />
                          Content Types
                        </h4>
                        <div className="space-y-4">
                          {[
                            {
                              title: 'Event Coverage',
                              items: ['Live updates', 'Photo galleries', 'Video content', 'Social media integration'],
                              icon: '📸'
                            },
                            {
                              title: 'Travel Guides',
                              items: ['Area guides', 'Itineraries', 'Tips & tricks', 'Local insights'],
                              icon: '🗺️'
                            },
                            {
                              title: 'Reviews',
                              items: ['Venue reviews', 'Experience ratings', 'User testimonials', 'Expert opinions'],
                              icon: '⭐'
                            }
                          ].map((type, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                              <div className="flex items-center mb-3">
                                <span className="text-2xl mr-3">{type.icon}</span>
                                <h5 className="font-medium text-gray-900">{type.title}</h5>
                              </div>
                              <ul className="space-y-2">
                                {type.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                                    <span className="text-violet-500 mr-2">•</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Quality */}
                  <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                    <h3 className="font-semibold text-emerald-800 mb-6 flex items-center">
                      <ChartBarIcon className="h-5 w-5 mr-2" />
                      Content Quality Enhancement
                    </h3>
                    <div className="space-y-6">
                      {/* Case Study */}
                      <div className="bg-white p-6 rounded-lg border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                          <DocumentIcon className="h-5 w-5 mr-2 text-emerald-600" />
                          Case Study: Event Coverage Analysis
                        </h4>
                        <div className="space-y-6">
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-4">Billie Eilish Concert Coverage Comparison</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                <div className="flex items-center mb-3">
                                  <span className="text-red-500 mr-2">⚠️</span>
                                  <p className="text-sm font-medium text-red-800">STG Areas for Improvement</p>
                                </div>
                                <div className="space-y-4">
                                  <div>
                                    <h6 className="text-sm font-medium text-red-700 mb-2">Limited practical information</h6>
                                    <ul className="space-y-2">
                                      <li className="flex items-start text-sm text-gray-600">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Missing venue rules and restrictions</span>
                                      </li>
                                      <li className="flex items-start text-sm text-gray-600">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Incomplete transportation details</span>
                                      </li>
                                      <li className="flex items-start text-sm text-gray-600">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>No bag policy information</span>
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <h6 className="text-sm font-medium text-red-700 mb-2">Basic event coverage</h6>
                                    <ul className="space-y-2">
                                      <li className="flex items-start text-sm text-gray-600">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Missing support act details</span>
                                      </li>
                                      <li className="flex items-start text-sm text-gray-600">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Limited venue-specific guidance</span>
                                      </li>
                                      <li className="flex items-start text-sm text-gray-600">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>No crowd management tips</span>
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <h6 className="text-sm font-medium text-red-700 mb-2">User experience gaps</h6>
                                    <ul className="space-y-2">
                                      <li className="flex items-start text-sm text-gray-600">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>No clear section navigation</span>
                                      </li>
                                      <li className="flex items-start text-sm text-gray-600">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Missing visual aids/maps</span>
                                      </li>
                                      <li className="flex items-start text-sm text-gray-600">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Limited social sharing options</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                <div className="flex items-center mb-3">
                                  <span className="text-green-500 mr-2">✓</span>
                                  <p className="text-sm font-medium text-green-800">Time Out Best Practices</p>
                                </div>
                                <div className="space-y-4">
                                  <div>
                                    <h6 className="text-sm font-medium text-green-700 mb-2">Comprehensive event details</h6>
                                    <ul className="space-y-2">
                                      <li className="flex items-start text-sm text-gray-600">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Complete venue guidelines</span>
                                      </li>
                                      <li className="flex items-start text-sm text-gray-600">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Detailed transport options</span>
                                      </li>
                                      <li className="flex items-start text-sm text-gray-600">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Clear bag policy</span>
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <h6 className="text-sm font-medium text-green-700 mb-2">Enhanced user value</h6>
                                    <ul className="space-y-2">
                                      <li className="flex items-start text-sm text-gray-600">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Support act background</span>
                                      </li>
                                      <li className="flex items-start text-sm text-gray-600">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Full setlist information</span>
                                      </li>
                                      <li className="flex items-start text-sm text-gray-600">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Practical tips (timing, arrival)</span>
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <h6 className="text-sm font-medium text-green-700 mb-2">Better content structure</h6>
                                    <ul className="space-y-2">
                                      <li className="flex items-start text-sm text-gray-600">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Clear section headings</span>
                                      </li>
                                      <li className="flex items-start text-sm text-gray-600">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Easy navigation</span>
                                      </li>
                                      <li className="flex items-start text-sm text-gray-600">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Mobile-optimized layout</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-6">
                            <h5 className="text-sm font-medium text-gray-700 mb-3">Article References:</h5>
                            <div className="flex space-x-4">
                              <a href="https://www.sydneytravelguide.com.au/billie-eilish-in-sydney-guide/" 
                                 className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                <DocumentTextIcon className="h-4 w-4 mr-2" />
                                Sydney Travel Guide Coverage
                              </a>
                              <a href="https://www.timeout.com/sydney/news/heres-all-the-info-you-need-for-billie-eilishs-sydney-shows-set-list-travel-more-022325" 
                                 className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                <NewspaperIcon className="h-4 w-4 mr-2" />
                                Time Out Sydney Coverage
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* News and Evergreen Content */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                            <ClockIcon className="h-5 w-5 mr-2 text-emerald-600" />
                            News Content
                          </h4>
                          <div className="space-y-4">
                            <div>
                              <h5 className="text-sm font-medium text-gray-700 mb-2">Current Issues:</h5>
                              <ul className="space-y-2">
                                {[
                                  'Not following Google News guidelines',
                                  'Poor headline optimization',
                                  'Missing news-specific metadata',
                                  'Inconsistent publishing schedule'
                                ].map((issue, index) => (
                                  <li key={index} className="flex items-center text-sm text-gray-600">
                                    <span className="text-red-500 mr-2">✗</span>
                                    {issue}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h5 className="text-sm font-medium text-gray-700 mb-2">Required Improvements:</h5>
                              <ul className="space-y-2">
                                {[
                                  'Implement NewsArticle schema',
                                  'Optimize for news search',
                                  'Add news-specific meta tags',
                                  'Regular news updates'
                                ].map((improvement, index) => (
                                  <li key={index} className="flex items-center text-sm text-gray-600">
                                    <span className="text-green-500 mr-2">✓</span>
                                    {improvement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                            <BookOpenIcon className="h-5 w-5 mr-2 text-emerald-600" />
                            Evergreen Content
                          </h4>
                          <div className="space-y-4">
                            <div>
                              <h5 className="text-sm font-medium text-gray-700 mb-2">Current Issues:</h5>
                              <ul className="space-y-2">
                                {[
                                  'Outdated information',
                                  'Poor internal linking',
                                  'Missing user intent optimization',
                                  'Insufficient content depth'
                                ].map((issue, index) => (
                                  <li key={index} className="flex items-center text-sm text-gray-600">
                                    <span className="text-red-500 mr-2">✗</span>
                                    {issue}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h5 className="text-sm font-medium text-gray-700 mb-2">Improvement Areas:</h5>
                              <ul className="space-y-2">
                                {[
                                  'Regular content updates',
                                  'Enhanced topic clusters',
                                  'Better user journey mapping',
                                  'Comprehensive guides'
                                ].map((improvement, index) => (
                                  <li key={index} className="flex items-center text-sm text-gray-600">
                                    <span className="text-green-500 mr-2">✓</span>
                                    {improvement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. Monetization Strategy */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center space-x-2 mb-6">
                  <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm font-medium">Phase 3</span>
                  <h2 className="text-2xl font-bold text-gray-900">Monetization Strategy</h2>
                </div>
                <div className="space-y-6">
                  {/* Ad Optimization */}
                  <div className="bg-amber-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-amber-800 mb-2">Ad Placement Optimization</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-amber-100">
                        <h4 className="font-medium text-gray-900 mb-2">Current Issues & Analysis</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="text-sm font-medium text-gray-700">Ad Placement Problems</h5>
                            <ul className="text-sm text-gray-600 space-y-1 mt-2">
                              <li>Layout Issues:
                                <ul className="list-disc list-inside ml-4 mt-1">
                                  <li>MREC placement above the fold violating guidelines</li>
                                  <li>Inconsistent ad sizes across devices</li>
                                  <li>Poor ad viewability metrics</li>
                                  <li>High ad density impacting UX</li>
                                </ul>
                              </li>
                              <li className="mt-2">Technical Issues:
                                <ul className="list-disc list-inside ml-4 mt-1">
                                  <li>No lazy loading implementation</li>
                                  <li>Synchronous ad loading slowing page speed</li>
                                  <li>Missing responsive ad configurations</li>
                                  <li>Limited ad slot flexibility</li>
                                </ul>
                              </li>
                              <li className="mt-2">Performance Impact:
                                <ul className="list-disc list-inside ml-4 mt-1">
                                  <li>Increased page load time</li>
                                  <li>Higher bounce rates on mobile</li>
                                  <li>Poor Core Web Vitals scores</li>
                                  <li>Reduced user engagement</li>
                                </ul>
                              </li>
                              <li className="mt-2">Revenue Impact:
                                <ul className="list-disc list-inside ml-4 mt-1">
                                  <li>Lower viewability rates</li>
                                  <li>Decreased CPM values</li>
                                  <li>Reduced click-through rates</li>
                                  <li>Suboptimal fill rates</li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-amber-100">
                        <h4 className="font-medium text-gray-900 mb-2">Implementation Guide</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="text-sm font-medium text-gray-700">1. Lazy Loading Setup</h5>
                            <pre className="text-xs text-gray-600 bg-gray-50 p-2 rounded mt-2 overflow-x-auto">
{`// Intersection Observer setup
const adObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadAd(entry.target);
      adObserver.unobserve(entry.target);
    }
  });
}, {
  rootMargin: '50px 0px',
  threshold: 0
});`}
                            </pre>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium text-gray-700">2. Layout Pattern</h5>
                            <div className="bg-gray-50 p-2 rounded mt-2">
                              <div className="space-y-1">
                                <div className="border border-gray-300 p-1 rounded text-xs text-gray-900">Header</div>
                                <div className="border border-gray-300 p-1 rounded text-xs text-gray-900">Content P1-P2</div>
                                <div className="grid grid-cols-4 gap-1">
                                  <div className="col-span-3 border border-gray-300 p-1 rounded text-xs text-gray-900">Content P3</div>
                                  <div className="border border-gray-300 p-1 rounded text-xs bg-blue-50 text-gray-900">Sidebar Ad</div>
                                </div>
                                <div className="border border-gray-300 p-1 rounded text-xs bg-blue-50 text-gray-900">MREC (Below fold)</div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h5 className="text-sm font-medium text-gray-700">3. Responsive Config</h5>
                            <pre className="text-xs text-gray-600 bg-gray-50 p-2 rounded mt-2 overflow-x-auto">
{`const adConfig = {
  mobile: {
    sizes: [[300, 250], [320, 50]],
    maxAds: 3,
    spacing: '500px'
  },
  desktop: {
    sizes: [[300, 250], [728, 90]],
    maxAds: 5,
    spacing: '900px'
  }
};`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Best Practices */}
                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-emerald-800 mb-2">Implementation Best Practices</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-emerald-100">
                        <h4 className="font-medium text-gray-900 mb-2">Layout Guidelines</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Content-to-Ad Ratio:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Maximum 30% ad density per viewport</li>
                              <li>Minimum 500px spacing between ads</li>
                              <li>Clear visual separation from content</li>
                              <li>No ad stacking or clustering</li>
                            </ul>
                          </li>
                          <li>Placement Rules:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>MREC below first viewport</li>
                              <li>Sticky ads limited to sidebar</li>
                              <li>In-content ads after 3rd paragraph</li>
                              <li>No overlay ads on images</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-emerald-100">
                        <h4 className="font-medium text-gray-900 mb-2">Mobile Optimization</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Device-Specific Rules:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Reduced ad count on mobile</li>
                              <li>Anchor ads for mobile only</li>
                              <li>No expandable ads on mobile</li>
                              <li>Touch-safe placement zones</li>
                            </ul>
                          </li>
                          <li>Performance Targets:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Max 2.5s ad load time</li>
                              <li>No layout shift from ad loading</li>
                              <li>Viewability greater than 70%</li>
                              <li>Bounce rate less than 40%</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Revenue Diversification */}
                  <div className="bg-rose-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-rose-800 mb-2">Revenue Diversification</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-rose-100">
                        <h4 className="font-medium text-gray-900 mb-2">New Revenue Streams</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Premium Content:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Exclusive guides</li>
                              <li>VIP event access</li>
                              <li>Expert insights</li>
                              <li>Early access content</li>
                            </ul>
                          </li>
                          <li>Sponsored Content:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Branded articles</li>
                              <li>Event coverage</li>
                              <li>Venue features</li>
                              <li>Product reviews</li>
                            </ul>
                          </li>
                          <li>Affiliate Marketing:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Hotel bookings</li>
                              <li>Tour packages</li>
                              <li>Restaurant reservations</li>
                              <li>Event tickets</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-rose-100">
                        <h4 className="font-medium text-gray-900 mb-2">Implementation Strategy</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Content Development:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Create premium guides</li>
                              <li>Develop sponsored sections</li>
                              <li>Build affiliate program</li>
                              <li>Partner with local businesses</li>
                            </ul>
                          </li>
                          <li>Marketing Approach:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Email marketing</li>
                              <li>Social media promotion</li>
                              <li>Local partnerships</li>
                              <li>Community engagement</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container">
          <div className="text-center">
            <p className="text-gray-600">Sydney Travel Guide - Traffic Growth Strategy 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 