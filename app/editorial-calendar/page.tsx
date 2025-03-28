import { CalendarIcon, ChartBarIcon, DocumentTextIcon, ClockIcon, GlobeAltIcon, BanknotesIcon, BuildingOfficeIcon, BoltIcon, UserGroupIcon, ChartPieIcon, NewspaperIcon, RssIcon, GlobeAmericasIcon, MegaphoneIcon } from '@heroicons/react/24/outline';

export default function EditorialCalendar() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header with Growth Target */}
          <div className="text-center mb-8">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Growth Target: 30k → 1M Monthly Readers
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Editorial Calendar</h1>
            <p className="text-xl text-gray-600">April 2025 Content Strategy</p>
          </div>

          {/* Strategic Focus Areas */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MegaphoneIcon className="h-6 w-6 mr-2 text-blue-600" />
              Strategic Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-900 mb-2">Regional Leadership</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• MENA Economic Coverage</li>
                  <li>• UAE-Focused Analysis</li>
                  <li>• Cross-Border Trade</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-900 mb-2">Content Pillars</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Breaking News</li>
                  <li>• In-depth Analysis</li>
                  <li>• Data-Driven Insights</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-900 mb-2">Growth Drivers</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• SEO Optimization</li>
                  <li>• Newsletter Growth</li>
                  <li>• Social Engagement</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Audience Metrics with Enhanced Context */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <UserGroupIcon className="h-6 w-6 mr-2 text-blue-600" />
              Audience Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-900 mb-2">Core Audience</h3>
                <p className="text-3xl font-bold text-blue-600">16%</p>
                <p className="text-sm text-gray-600 mt-1">Loyal Readers</p>
                <div className="mt-3">
                  <p className="text-xs text-gray-500">Target Demographics:</p>
                  <ul className="text-xs text-gray-500 list-disc list-inside mt-1">
                    <li>Business Professionals</li>
                    <li>Policy Makers</li>
                    <li>Industry Leaders</li>
                  </ul>
                </div>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-900 mb-2">Newsletter Impact</h3>
                <p className="text-3xl font-bold text-purple-600">30%</p>
                <p className="text-sm text-gray-600 mt-1">Higher Engagement</p>
                <div className="mt-3">
                  <p className="text-xs text-gray-500">Key Metrics:</p>
                  <ul className="text-xs text-gray-500 list-disc list-inside mt-1">
                    <li>45% Open Rate</li>
                    <li>22% Click Rate</li>
                    <li>15% Conversion</li>
                  </ul>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-900 mb-2">Growth Potential</h3>
                <p className="text-3xl font-bold text-green-600">4.3x</p>
                <p className="text-sm text-gray-600 mt-1">Engagement Multiplier</p>
                <div className="mt-3">
                  <p className="text-xs text-gray-500">Focus Areas:</p>
                  <ul className="text-xs text-gray-500 list-disc list-inside mt-1">
                    <li>Mobile Optimization</li>
                    <li>Social Distribution</li>
                    <li>SEO Enhancement</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Content Distribution Strategy */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <NewspaperIcon className="h-6 w-6 mr-2 text-blue-600" />
              Content Distribution Strategy
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Breaking News</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <RssIcon className="h-4 w-4 mr-2 text-blue-600" />
                      Real-time Updates
                    </li>
                    <li className="flex items-center">
                      <GlobeAmericasIcon className="h-4 w-4 mr-2 text-blue-600" />
                      Regional Focus
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Analysis</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <ChartBarIcon className="h-4 w-4 mr-2 text-blue-600" />
                      Market Insights
                    </li>
                    <li className="flex items-center">
                      <DocumentTextIcon className="h-4 w-4 mr-2 text-blue-600" />
                      Expert Commentary
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Features</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2 text-blue-600" />
                      In-depth Reports
                    </li>
                    <li className="flex items-center">
                      <BanknotesIcon className="h-4 w-4 mr-2 text-blue-600" />
                      Industry Analysis
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Existing Priority Distribution section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center space-x-2 mb-4">
                <ChartBarIcon className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-blue-900">High Impact</h2>
              </div>
              <p className="text-2xl font-bold text-blue-600">3</p>
              <p className="text-gray-600">Core Stories</p>
              <p className="text-xs text-gray-500 mt-2">Breaking news & major developments</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="flex items-center space-x-2 mb-4">
                <DocumentTextIcon className="h-6 w-6 text-purple-600" />
                <h2 className="text-xl font-semibold text-purple-900">Analysis</h2>
              </div>
              <p className="text-2xl font-bold text-purple-600">3</p>
              <p className="text-gray-600">Deep Dives</p>
              <p className="text-xs text-gray-500 mt-2">Market insights & trends</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center space-x-2 mb-4">
                <ClockIcon className="h-6 w-6 text-green-600" />
                <h2 className="text-xl font-semibold text-green-900">Features</h2>
              </div>
              <p className="text-2xl font-bold text-green-600">5</p>
              <p className="text-gray-600">Supporting Content</p>
              <p className="text-xs text-gray-500 mt-2">Industry deep dives & analysis</p>
            </div>
          </div>

          {/* Content Calendar */}
          <div className="space-y-8">
            {/* High Priority Section */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">High Priority Topics</h2>
              <div className="space-y-6">
                {/* Business & Finance */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Business & Finance</h3>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-gray-900 mb-2">Dubai Financial Market Updates</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Combined Search Volume: 110,000+</p>
                      <p className="text-sm text-gray-600">Type: LiveBlogPosting + News Hub</p>
                      <p className="text-sm text-gray-600">Reference: DFM Market Data, Regional Financial Sources</p>
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-gray-900 mb-2">Content Brief:</h5>
                        <div className="space-y-4">
                          <div>
                            <h6 className="text-sm font-medium text-gray-800">Market Coverage Hub:</h6>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                              <li>Real-time DFM index and stock updates</li>
                              <li>Regional market integration (Saudi, Kuwait, Qatar)</li>
                              <li>Cross-market analysis and correlations</li>
                              <li>Global market impact on DFM</li>
                              <li>Sector-specific performance tracking</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="text-sm font-medium text-gray-800">Content Distribution:</h6>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                              <li>Live market updates (40% of coverage)</li>
                              <li>Daily market analysis (30% of coverage)</li>
                              <li>Weekly market outlook (20% of coverage)</li>
                              <li>Monthly sector reviews (10% of coverage)</li>
                              <li>Special event coverage</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="text-sm font-medium text-gray-800">Technical Implementation:</h6>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                              <li>Multi-schema implementation (LiveBlogPosting + NewsArticle)</li>
                              <li>Real-time data integration</li>
                              <li>Market data visualization tools</li>
                              <li>Mobile-first market updates</li>
                              <li>Push notification system for major moves</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="text-sm font-medium text-gray-800">Target Keywords:</h6>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                              <li>Dubai stock market (primary focus)</li>
                              <li>UAE financial markets</li>
                              <li>DFM index updates</li>
                              <li>Dubai market analysis</li>
                              <li>UAE stock trading</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Financial & Economic */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Financial & Economic</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-gray-900 mb-2">UAE Gold Rate Today</h4>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Search Volume: 150,000</p>
                        <p className="text-sm text-gray-600">Type: LiveBlogPosting</p>
                        <p className="text-sm text-gray-600">Reference: Dubai Gold & Jewellery Group</p>
                        <div className="mt-4">
                          <h5 className="text-sm font-medium text-gray-900 mb-2">Content Brief:</h5>
                          <div className="space-y-4">
                            <div>
                              <h6 className="text-sm font-medium text-gray-800">Price Updates:</h6>
                              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                                <li>Live 24k, 22k, 21k, 18k gold rates</li>
                                <li>Historical price trends and charts</li>
                                <li>Price alerts and notifications setup</li>
                                <li>Regional price comparisons</li>
                                <li>Currency impact analysis</li>
                              </ul>
                            </div>
                            <div>
                              <h6 className="text-sm font-medium text-gray-800">Market Analysis:</h6>
                              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                                <li>Global factors affecting gold prices</li>
                                <li>Expert predictions and forecasts</li>
                                <li>Investment implications and advice</li>
                                <li>Retail market insights</li>
                                <li>Seasonal trends and patterns</li>
                              </ul>
                            </div>
                            <div>
                              <h6 className="text-sm font-medium text-gray-800">Content Features:</h6>
                              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                                <li>Interactive gold calculator tool</li>
                                <li>Price movement notifications</li>
                                <li>Expert video commentary</li>
                                <li>Weekly market roundup</li>
                                <li>Investment guide integration</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-gray-900 mb-2">Currency Exchange (Dirham to INR)</h4>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Search Volume: 85,000</p>
                        <p className="text-sm text-gray-600">Type: Programmatic</p>
                        <p className="text-sm text-gray-600">Reference: UAE Central Bank</p>
                        <div className="mt-4">
                          <h5 className="text-sm font-medium text-gray-900 mb-2">Content Brief:</h5>
                          <div className="space-y-4">
                            <div>
                              <h6 className="text-sm font-medium text-gray-800">Exchange Updates:</h6>
                              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                                <li>Real-time AED to INR conversion rates</li>
                                <li>Bank-wise exchange rate comparison</li>
                                <li>Money transfer service rates</li>
                                <li>Historical rate analysis</li>
                                <li>Rate alerts and notifications</li>
                              </ul>
                            </div>
                            <div>
                              <h6 className="text-sm font-medium text-gray-800">Market Context:</h6>
                              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                                <li>Factors affecting exchange rates</li>
                                <li>Economic indicators impact</li>
                                <li>Remittance market trends</li>
                                <li>Policy changes and regulations</li>
                                <li>Future rate predictions</li>
                              </ul>
                            </div>
                            <div>
                              <h6 className="text-sm font-medium text-gray-800">User Tools:</h6>
                              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                                <li>Currency converter calculator</li>
                                <li>Best time to transfer guide</li>
                                <li>Rate comparison tools</li>
                                <li>Mobile app integration</li>
                                <li>Email rate alerts signup</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Market Analysis */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Market Analysis</h3>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-gray-900 mb-2">Real Estate Tokenization</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Search Volume: 45,000</p>
                      <p className="text-sm text-gray-600">Type: Analysis</p>
                      <p className="text-sm text-gray-600">Reference: Dubai Land Department</p>
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-gray-900 mb-2">Content Brief:</h5>
                        <div className="space-y-4">
                          <div>
                            <h6 className="text-sm font-medium text-gray-800">Project Coverage:</h6>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                              <li>Pilot phase milestones and updates</li>
                              <li>Technology implementation details</li>
                              <li>Participating developers and properties</li>
                              <li>Investment requirements and process</li>
                              <li>Regulatory compliance framework</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="text-sm font-medium text-gray-800">Market Impact:</h6>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                              <li>Real estate market transformation</li>
                              <li>Investment accessibility analysis</li>
                              <li>Market liquidity implications</li>
                              <li>Price discovery mechanisms</li>
                              <li>International investor perspective</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="text-sm font-medium text-gray-800">Educational Content:</h6>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                              <li>Tokenization concept explanation</li>
                              <li>Investment process guide</li>
                              <li>Risk and benefits analysis</li>
                              <li>Regulatory considerations</li>
                              <li>Future market projections</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Medium Priority Section */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Medium Priority Topics</h2>
              <div className="space-y-6">
                {/* Financial Services */}
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-3">Financial Services</h3>
                  <div className="bg-white p-4 rounded-lg border border-purple-100">
                    <h4 className="font-medium text-gray-900 mb-2">Best Credit Card in UAE</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Search Volume: 4,700</p>
                      <p className="text-sm text-gray-600">Type: Listicle</p>
                      <p className="text-sm text-gray-600">Reference: YallaCompare Credit Cards</p>
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-gray-900 mb-2">Content Brief:</h5>
                        <div className="space-y-4">
                          <div>
                            <h6 className="text-sm font-medium text-gray-800">Card Comparison:</h6>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                              <li>Comprehensive benefits analysis by category</li>
                              <li>Annual fee structures and waivers</li>
                              <li>Reward point systems comparison</li>
                              <li>Welcome bonus offerings</li>
                              <li>Interest rates and payment terms</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="text-sm font-medium text-gray-800">Application Guide:</h6>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                              <li>Eligibility criteria by bank</li>
                              <li>Required documentation checklist</li>
                              <li>Application process walkthrough</li>
                              <li>Approval timeline expectations</li>
                              <li>Common rejection reasons</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="text-sm font-medium text-gray-800">Interactive Features:</h6>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                              <li>Card comparison calculator</li>
                              <li>Reward point value estimator</li>
                              <li>Eligibility checker tool</li>
                              <li>Direct application links</li>
                              <li>User review integration</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Food & Lifestyle */}
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-3">Food & Lifestyle</h3>
                  <div className="bg-white p-4 rounded-lg border border-purple-100">
                    <h4 className="font-medium text-gray-900 mb-2">Fix Chocolate Dubai/Kunafa Chocolate</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Search Volume: 27,200</p>
                      <p className="text-sm text-gray-600">Type: Listicle</p>
                      <p className="text-sm text-gray-600">Reference: Time Out Dubai</p>
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-gray-900 mb-2">Content Brief:</h5>
                        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                          <li>Location and accessibility</li>
                          <li>Menu highlights and specialties</li>
                          <li>Price range and value for money</li>
                          <li>Customer reviews and ratings</li>
                          <li>Integration with Dubai tourism coverage</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Safety & Infrastructure */}
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-3">Safety & Infrastructure</h3>
                  <div className="bg-white p-4 rounded-lg border border-purple-100">
                    <h4 className="font-medium text-gray-900 mb-2">Safest Cities in the World</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Search Volume: 10,000</p>
                      <p className="text-sm text-gray-600">Type: Listicle</p>
                      <p className="text-sm text-gray-600">Reference: CEO World Biz</p>
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-gray-900 mb-2">Content Brief:</h5>
                        <div className="space-y-4">
                          <div>
                            <h6 className="text-sm font-medium text-gray-800">Rankings Analysis:</h6>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                              <li>Comprehensive safety metrics breakdown</li>
                              <li>Year-over-year ranking changes</li>
                              <li>Regional safety comparisons</li>
                              <li>UAE cities' performance analysis</li>
                              <li>Economic correlation studies</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="text-sm font-medium text-gray-800">Economic Impact:</h6>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                              <li>Investment attraction analysis</li>
                              <li>Tourism sector implications</li>
                              <li>Property market correlations</li>
                              <li>Business environment benefits</li>
                              <li>Economic growth indicators</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="text-sm font-medium text-gray-800">Content Features:</h6>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                              <li>Interactive safety score calculator</li>
                              <li>City comparison tool</li>
                              <li>Expert interviews and insights</li>
                              <li>Infographic visualizations</li>
                              <li>Video city showcases</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Lower Priority Section */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Lower Priority Topics</h2>
              <div className="space-y-6">
                {/* Technology & Innovation */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Technology & Innovation</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-green-100">
                      <h4 className="font-medium text-gray-900 mb-2">AI Jobs in Dubai</h4>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Search Volume: 150</p>
                        <p className="text-sm text-gray-600">Type: Listicle</p>
                        <p className="text-sm text-gray-600">Reference: Khaleej Times Lifestyle</p>
                        <div className="mt-4">
                          <h5 className="text-sm font-medium text-gray-900 mb-2">Content Brief:</h5>
                          <div className="space-y-4">
                            <div>
                              <h6 className="text-sm font-medium text-gray-800">Market Overview:</h6>
                              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                                <li>Current AI job market landscape</li>
                                <li>Industry demand analysis</li>
                                <li>Salary ranges by position</li>
                                <li>Growth projections 2024-2025</li>
                                <li>Key employers and opportunities</li>
                              </ul>
                            </div>
                            <div>
                              <h6 className="text-sm font-medium text-gray-800">Skills & Requirements:</h6>
                              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                                <li>Technical skill requirements</li>
                                <li>Certification recommendations</li>
                                <li>Experience level expectations</li>
                                <li>Industry-specific knowledge</li>
                                <li>Soft skills importance</li>
                              </ul>
                            </div>
                            <div>
                              <h6 className="text-sm font-medium text-gray-800">Career Resources:</h6>
                              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                                <li>Job application guide</li>
                                <li>Interview preparation tips</li>
                                <li>Training program directory</li>
                                <li>Networking opportunities</li>
                                <li>Career progression paths</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-green-100">
                      <h4 className="font-medium text-gray-900 mb-2">Smart Cities in UAE</h4>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Search Volume: 40</p>
                        <p className="text-sm text-gray-600">Type: Analysis</p>
                        <p className="text-sm text-gray-600">Reference: UAE Digital Cities</p>
                        <div className="mt-4">
                          <h5 className="text-sm font-medium text-gray-900 mb-2">Content Brief:</h5>
                          <div className="space-y-4">
                            <div>
                              <h6 className="text-sm font-medium text-gray-800">Initiative Coverage:</h6>
                              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                                <li>Smart city project updates</li>
                                <li>Technology implementation status</li>
                                <li>Infrastructure developments</li>
                                <li>Innovation hub progress</li>
                                <li>Sustainability initiatives</li>
                              </ul>
                            </div>
                            <div>
                              <h6 className="text-sm font-medium text-gray-800">Economic Analysis:</h6>
                              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                                <li>Investment opportunities</li>
                                <li>Economic impact assessment</li>
                                <li>Job creation potential</li>
                                <li>Business environment benefits</li>
                                <li>Global competitiveness impact</li>
                              </ul>
                            </div>
                            <div>
                              <h6 className="text-sm font-medium text-gray-800">Future Outlook:</h6>
                              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                                <li>Development roadmap analysis</li>
                                <li>Technology trend integration</li>
                                <li>Sustainability goals alignment</li>
                                <li>International benchmarking</li>
                                <li>Innovation ecosystem growth</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Affairs */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Current Affairs</h3>
                  <div className="bg-white p-4 rounded-lg border border-green-100">
                    <h4 className="font-medium text-gray-900 mb-2">Iran Israel News</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Search Volume: 12,000</p>
                      <p className="text-sm text-gray-600">Type: News</p>
                      <p className="text-sm text-gray-600">Reference: Jerusalem Post</p>
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-gray-900 mb-2">Content Brief:</h5>
                        <div className="space-y-4">
                          <div>
                            <h6 className="text-sm font-medium text-gray-800">Economic Impact Analysis:</h6>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                              <li>Regional market implications</li>
                              <li>Oil price impact assessment</li>
                              <li>Trade route disruption analysis</li>
                              <li>Sanctions effect on markets</li>
                              <li>Investment flow changes</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="text-sm font-medium text-gray-800">Regional Business Impact:</h6>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                              <li>UAE business sector analysis</li>
                              <li>Trade relationship changes</li>
                              <li>Supply chain implications</li>
                              <li>Business risk assessment</li>
                              <li>Market sentiment tracking</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="text-sm font-medium text-gray-800">Coverage Strategy:</h6>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                              <li>Real-time updates integration</li>
                              <li>Expert economic analysis</li>
                              <li>Market data visualization</li>
                              <li>Policy impact assessment</li>
                              <li>Future scenario analysis</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Utilities & Services */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Utilities & Services</h3>
                  <div className="bg-white p-4 rounded-lg border border-green-100">
                    <h4 className="font-medium text-gray-900 mb-2">Etihad Water and Electricity Bill View</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Search Volume: 1,000</p>
                      <p className="text-sm text-gray-600">Type: Service Guide</p>
                      <p className="text-sm text-gray-600">Reference: Ajman Government Services</p>
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-gray-900 mb-2">Content Brief:</h5>
                        <div className="space-y-4">
                          <div>
                            <h6 className="text-sm font-medium text-gray-800">Service Guide:</h6>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                              <li>Digital service platform overview</li>
                              <li>Account management guide</li>
                              <li>Bill payment methods</li>
                              <li>Troubleshooting common issues</li>
                              <li>Customer support channels</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="text-sm font-medium text-gray-800">Economic Analysis:</h6>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                              <li>Utility cost trends</li>
                              <li>Consumption patterns analysis</li>
                              <li>Tariff structure explanation</li>
                              <li>Cost-saving strategies</li>
                              <li>Market comparison studies</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="text-sm font-medium text-gray-800">Digital Features:</h6>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                              <li>Interactive bill calculator</li>
                              <li>Consumption tracking tools</li>
                              <li>Payment reminder setup</li>
                              <li>Service request guides</li>
                              <li>Mobile app integration</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Enhanced Weekly Distribution */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Publication Schedule</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Week 1: Markets</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <ChartBarIcon className="h-4 w-4 mr-2 text-blue-600" />
                      DFM Updates
                    </li>
                    <li className="flex items-center">
                      <GlobeAltIcon className="h-4 w-4 mr-2 text-blue-600" />
                      Gold Rates
                    </li>
                    <li className="flex items-center">
                      <BanknotesIcon className="h-4 w-4 mr-2 text-blue-600" />
                      Currency Markets
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">Focus: Financial Markets</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Week 2: Market Analysis</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <ChartBarIcon className="h-4 w-4 mr-2 text-blue-600" />
                      Credit Cards
                    </li>
                    <li className="flex items-center">
                      <GlobeAltIcon className="h-4 w-4 mr-2 text-blue-600" />
                      Market Trends
                    </li>
                    <li className="flex items-center">
                      <DocumentTextIcon className="h-4 w-4 mr-2 text-blue-600" />
                      Industry Reports
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">Focus: Financial Services</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Week 3: Tech & Innovation</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <BoltIcon className="h-4 w-4 mr-2 text-blue-600" />
                      AI Development
                    </li>
                    <li className="flex items-center">
                      <BuildingOfficeIcon className="h-4 w-4 mr-2 text-blue-600" />
                      Smart Cities
                    </li>
                    <li className="flex items-center">
                      <NewspaperIcon className="h-4 w-4 mr-2 text-blue-600" />
                      Regional News
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">Focus: Technology & Current Affairs</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Week 4: Infrastructure</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <GlobeAmericasIcon className="h-4 w-4 mr-2 text-blue-600" />
                      Global Rankings
                    </li>
                    <li className="flex items-center">
                      <RssIcon className="h-4 w-4 mr-2 text-blue-600" />
                      Utility Services
                    </li>
                    <li className="flex items-center">
                      <MegaphoneIcon className="h-4 w-4 mr-2 text-blue-600" />
                      Special Reports
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">Focus: Infrastructure & Services</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 