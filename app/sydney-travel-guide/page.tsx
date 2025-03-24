import { BellIcon, ChartBarIcon, NewspaperIcon, GlobeAltIcon, UserGroupIcon, RssIcon, CodeBracketIcon, MapIcon, ClockIcon, TableCellsIcon, ChartPieIcon } from '@heroicons/react/24/outline';

export default function SydneyTravelGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white border-b border-gray-200">
        <div className="container">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-purple-600">STG</span>
              <span className="text-sm text-gray-500">Traffic Growth Strategy</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium">
                  Sydney Travel Guide Optimization Strategy
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-8">
                Sydney Travel Guide's Growth Strategy
              </h1>
              <p className="text-xl text-gray-600 text-center mb-12">
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
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center space-x-2 mb-6">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Foundation</span>
                  <h2 className="text-2xl font-bold text-gray-900">Domain Authority & Link Building</h2>
                </div>
                <div className="space-y-6">
                  {/* Current Status */}
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-blue-800 mb-4">Current Status & Strategy</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-gray-900 mb-2">Domain Metrics</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Current Issues:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Low domain rating/authority</li>
                              <li>Limited quality backlinks</li>
                              <li>Poor referring domains diversity</li>
                              <li>Weak local citations</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-gray-900 mb-2">Link Building Strategy</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Priority Actions:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Submit to quality travel directories</li>
                              <li>Local business partnerships</li>
                              <li>Guest posting on travel blogs</li>
                              <li>HARO responses for travel topics</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Implementation Plan */}
                  <div className="bg-indigo-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-indigo-800 mb-4">Implementation Plan</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-indigo-100">
                        <h4 className="font-medium text-gray-900 mb-2">Directory Submissions</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Target Directories:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li><a href="https://www.tripadvisor.com/Owners" className="text-blue-600 hover:underline">TripAdvisor for Business</a></li>
                              <li><a href="https://atdw-online.com.au/" className="text-blue-600 hover:underline">Australian Tourism Data Warehouse</a></li>
                              <li><a href="https://www.destinationnsw.com.au/destination-nsw-business-support/get-connected" className="text-blue-600 hover:underline">Destination NSW Get Connected</a></li>
                              <li><a href="https://www.tourismaustralia.com/marketing/ATDW" className="text-blue-600 hover:underline">Tourism Australia ATDW</a></li>
                              <li><a href="https://www.sydneyvisitor.com/add-listing" className="text-blue-600 hover:underline">Sydney Visitor</a></li>
                              <li><a href="https://www.businessaustralia.com/how-we-help/grow-your-business/directory" className="text-blue-600 hover:underline">Business Australia Directory</a></li>
                              <li><a href="https://www.ausleisure.com.au/directory/add-listing/" className="text-blue-600 hover:underline">Australasian Leisure Management</a></li>
                              <li><a href="https://www.yellowpages.com.au/list-your-business" className="text-blue-600 hover:underline">Yellow Pages Australia</a></li>
                            </ul>
                          </li>
                          <li className="mt-2">Benefits:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Enhanced local visibility</li>
                              <li>Quality backlinks from DA70+ domains</li>
                              <li>Improved local SEO signals</li>
                              <li>Increased referral traffic</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-indigo-100">
                        <h4 className="font-medium text-gray-900 mb-2">Outreach Campaign</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Strategic Partnerships:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Local tour operators</li>
                              <li>Sydney-based travel bloggers</li>
                              <li>Tourism organizations</li>
                              <li>Event organizers</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. E-E-A-T & Technical Foundation */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center space-x-2 mb-6">
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">Core</span>
                  <h2 className="text-2xl font-bold text-gray-900">E-E-A-T & Technical Foundation</h2>
                </div>
                <div className="space-y-6">
                  {/* E-E-A-T Enhancement */}
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-purple-800 mb-4">E-E-A-T Enhancement</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-purple-100">
                        <h4 className="font-medium text-gray-900 mb-2">Author Expertise</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Implementation:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Detailed author bios</li>
                              <li>Credentials display</li>
                              <li>Social proof integration</li>
                              <li>Expert contributions</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-purple-100">
                        <h4 className="font-medium text-gray-900 mb-2">Content Authority</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Enhancement:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>First-hand experience emphasis</li>
                              <li>Local expert citations</li>
                              <li>Fact verification process</li>
                              <li>Regular content updates</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Technical Optimization */}
                  <div className="bg-indigo-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-indigo-800 mb-4">Technical Foundation</h3>
                    <div className="space-y-6">
                      <div className="bg-white p-4 rounded-lg border border-indigo-100">
                        <h4 className="font-medium text-gray-900 mb-2">Schema Implementation</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Priority Schemas:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Event Coverage:
                                <ul className="ml-4 mt-1 list-disc list-inside text-gray-500">
                                  <li>Event schema for festivals, concerts, exhibitions</li>
                                  <li>EventSeries for recurring events</li>
                                  <li>PerformingGroup for artists/performers</li>
                                  <li>Place schema for venues</li>
                                </ul>
                              </li>
                              <li>Travel Content:
                                <ul className="ml-4 mt-1 list-disc list-inside text-gray-500">
                                  <li>TravelGuide for area guides</li>
                                  <li>TouristAttraction for landmarks</li>
                                  <li>TouristDestination for regions</li>
                                  <li>Trip for itineraries</li>
                                </ul>
                              </li>
                              <li>Food & Dining:
                                <ul className="ml-4 mt-1 list-disc list-inside text-gray-500">
                                  <li>Restaurant for venue listings</li>
                                  <li>FoodEvent for festivals</li>
                                  <li>Review for restaurant reviews</li>
                                  <li>Menu for special offerings</li>
                                </ul>
                              </li>
                              <li>News & Articles:
                                <ul className="ml-4 mt-1 list-disc list-inside text-gray-500">
                                  <li>NewsArticle for time-sensitive content</li>
                                  <li>Article for evergreen content</li>
                                  <li>ImageGallery for photo essays</li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="mt-4">Implementation Examples:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Event Schema:
                                <pre className="text-xs bg-gray-50 p-2 rounded mt-1 overflow-x-auto">
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
                              </li>
                              <li className="mt-2">News Coverage Schema:
                                <pre className="text-xs bg-gray-50 p-2 rounded mt-1 overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Sydney Food & Wine Festival Returns with International Chefs",
  "description": "The Sydney Food & Wine Festival is back for 2024...",
  "datePublished": "2024-03-15T09:00:00+10:00",
  "dateModified": "2024-03-15T09:30:00+10:00",
  "author": {
    "@type": "Person",
    "name": "Sarah Johnson",
    "url": "https://www.sydneytravelguide.com.au/author/sarah-johnson"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Sydney Travel Guide",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.sydneytravelguide.com.au/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.sydneytravelguide.com.au/news/food-festival-2024"
  },
  "about": {
    "@type": "Event",
    "name": "Sydney Food & Wine Festival 2024"
  }
}`}
                                </pre>
                              </li>
                              <li className="mt-2">Restaurant Review Schema:
                                <pre className="text-xs bg-gray-50 p-2 rounded mt-1 overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Restaurant",
    "name": "Opera Bar",
    "servesCuisine": ["Australian", "Seafood"],
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lower Concourse Level",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "postalCode": "2000",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.8568,
      "longitude": 151.2153
    },
    "telephone": "+61292474330",
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "11:30",
      "closes": "00:00"
    }]
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Michael Chen",
    "url": "https://www.sydneytravelguide.com.au/author/michael-chen"
  },
  "datePublished": "2024-03-10T18:00:00+10:00"
}`}
                                </pre>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-indigo-100">
                        <h4 className="font-medium text-gray-900 mb-2">Core Web Vitals & Technical Issues</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Current Status:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Good Core Web Vitals scores in Search Console</li>
                              <li>Speed Index needs optimization</li>
                              <li>Mobile performance score: 85</li>
                            </ul>
                          </li>
                          <li className="mt-2">Speed Index Optimization:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Optimize critical rendering path</li>
                              <li>Implement resource prioritization</li>
                              <li>Enhance server response time</li>
                              <li>Optimize image delivery</li>
                            </ul>
                          </li>
                          <li className="mt-2">Technical Issues:
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Robots.txt Configuration:
                                <ul className="ml-4 mt-1 list-disc list-inside text-gray-500">
                                  <li>Remove overly restrictive "Disallow: */?*" rule</li>
                                  <li>Allow pagination parameters</li>
                                  <li>Allow legitimate URL parameters</li>
                                  <li>Update to more specific disallow rules</li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. Content Strategy */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center space-x-2 mb-6">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">Phase 2</span>
                  <h2 className="text-2xl font-bold text-gray-900">Content Strategy</h2>
                </div>
                <div className="space-y-6">
                  {/* Content Structure */}
                  <div className="bg-violet-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-violet-800 mb-2">Content Organization</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-violet-100">
                        <h4 className="font-medium text-gray-900 mb-2">Primary Categories</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>News & Events
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Festival coverage</li>
                              <li>Event announcements</li>
                              <li>Local news</li>
                              <li>Entertainment updates</li>
                            </ul>
                          </li>
                          <li>Food & Drink
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Restaurant reviews</li>
                              <li>Food festivals</li>
                              <li>Bar guides</li>
                              <li>Culinary events</li>
                            </ul>
                          </li>
                          <li>Entertainment
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Shows & performances</li>
                              <li>Live music</li>
                              <li>Theater & arts</li>
                              <li>Nightlife</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-violet-100">
                        <h4 className="font-medium text-gray-900 mb-2">Content Types</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Event Coverage
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Live updates</li>
                              <li>Photo galleries</li>
                              <li>Video content</li>
                              <li>Social media integration</li>
                            </ul>
                          </li>
                          <li>Travel Guides
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Area guides</li>
                              <li>Itineraries</li>
                              <li>Tips & tricks</li>
                              <li>Local insights</li>
                            </ul>
                          </li>
                          <li>Reviews
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Venue reviews</li>
                              <li>Experience ratings</li>
                              <li>User testimonials</li>
                              <li>Expert opinions</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Content Quality */}
                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-emerald-800 mb-2">Content Quality Enhancement</h3>
                    <div className="space-y-6">
                      {/* Case Study */}
                      <div className="bg-white p-4 rounded-lg border border-emerald-100">
                        <h4 className="font-medium text-gray-900 mb-2">Case Study: Event Coverage Analysis</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="text-sm font-medium text-gray-700">Billie Eilish Concert Coverage Comparison</h5>
                            <div className="mt-2">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-red-50 p-3 rounded">
                                  <p className="text-sm font-medium text-red-800 mb-2">STG Areas for Improvement:</p>
                                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                                    <li>Limited practical information
                                      <ul className="ml-4 mt-1 list-disc list-inside text-gray-500">
                                        <li>Missing venue rules and restrictions</li>
                                        <li>Incomplete transportation details</li>
                                        <li>No bag policy information</li>
                                      </ul>
                                    </li>
                                    <li>Basic event coverage
                                      <ul className="ml-4 mt-1 list-disc list-inside text-gray-500">
                                        <li>Missing support act details</li>
                                        <li>Limited venue-specific guidance</li>
                                        <li>No crowd management tips</li>
                                      </ul>
                                    </li>
                                    <li>User experience gaps
                                      <ul className="ml-4 mt-1 list-disc list-inside text-gray-500">
                                        <li>No clear section navigation</li>
                                        <li>Missing visual aids/maps</li>
                                        <li>Limited social sharing options</li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="bg-green-50 p-3 rounded">
                                  <p className="text-sm font-medium text-green-800 mb-2">Time Out Best Practices:</p>
                                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                                    <li>Comprehensive event details
                                      <ul className="ml-4 mt-1 list-disc list-inside text-gray-500">
                                        <li>Complete venue guidelines</li>
                                        <li>Detailed transport options</li>
                                        <li>Clear bag policy</li>
                                      </ul>
                                    </li>
                                    <li>Enhanced user value
                                      <ul className="ml-4 mt-1 list-disc list-inside text-gray-500">
                                        <li>Support act background</li>
                                        <li>Full setlist information</li>
                                        <li>Practical tips (timing, arrival)</li>
                                      </ul>
                                    </li>
                                    <li>Better content structure
                                      <ul className="ml-4 mt-1 list-disc list-inside text-gray-500">
                                        <li>Clear section headings</li>
                                        <li>Easy navigation</li>
                                        <li>Mobile-optimized layout</li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <h5 className="text-sm font-medium text-gray-700">Article References:</h5>
                            <ul className="list-disc list-inside mt-1 text-sm text-gray-600">
                              <li><a href="https://www.sydneytravelguide.com.au/billie-eilish-in-sydney-guide/" className="text-blue-600 hover:underline">Sydney Travel Guide Coverage</a></li>
                              <li><a href="https://www.timeout.com/sydney/news/heres-all-the-info-you-need-for-billie-eilishs-sydney-shows-set-list-travel-more-022325" className="text-blue-600 hover:underline">Time Out Sydney Coverage</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Existing News Content and Evergreen Content sections */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-emerald-100">
                          <h4 className="font-medium text-gray-900 mb-2">News Content</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>Current Issues:
                              <ul className="list-disc list-inside ml-4 mt-1">
                                <li>Not following Google News guidelines</li>
                                <li>Poor headline optimization</li>
                                <li>Missing news-specific metadata</li>
                                <li>Inconsistent publishing schedule</li>
                              </ul>
                            </li>
                            <li>Required Improvements:
                              <ul className="list-disc list-inside ml-4 mt-1">
                                <li>Implement NewsArticle schema</li>
                                <li>Optimize for news search</li>
                                <li>Add news-specific meta tags</li>
                                <li>Regular news updates</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-emerald-100">
                          <h4 className="font-medium text-gray-900 mb-2">Evergreen Content</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>Current Issues:
                              <ul className="list-disc list-inside ml-4 mt-1">
                                <li>Outdated information</li>
                                <li>Poor internal linking</li>
                                <li>Missing user intent optimization</li>
                                <li>Insufficient content depth</li>
                              </ul>
                            </li>
                            <li>Improvement Areas:
                              <ul className="list-disc list-inside ml-4 mt-1">
                                <li>Regular content updates</li>
                                <li>Enhanced topic clusters</li>
                                <li>Better user journey mapping</li>
                                <li>Comprehensive guides</li>
                              </ul>
                            </li>
                          </ul>
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