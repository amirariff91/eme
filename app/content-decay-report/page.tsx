import { ArrowDownIcon, ArrowUpIcon, ChartBarIcon, DocumentTextIcon, DocumentMagnifyingGlassIcon, ClockIcon, GlobeAltIcon, MagnifyingGlassIcon, PencilSquareIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export default function ContentDecayReport() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Content Performance Analysis
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Content Decay Report</h1>
            <p className="text-xl text-gray-600">January - March 2025</p>
          </div>

          {/* Performance Overview */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <ChartBarIcon className="h-6 w-6 mr-2 text-red-600" />
              Performance Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="font-semibold text-red-900 mb-2">Articles with Decay</h3>
                <p className="text-3xl font-bold text-red-600">186</p>
                <p className="text-sm text-gray-600 mt-1">Articles</p>
                <div className="mt-3">
                  <p className="text-xs text-gray-500">Key issue:</p>
                  <p className="text-xs text-gray-500">Traffic loss greater than 15%</p>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-900 mb-2">Growing Articles</h3>
                <p className="text-3xl font-bold text-green-600">74</p>
                <p className="text-sm text-gray-600 mt-1">Articles</p>
                <div className="mt-3">
                  <p className="text-xs text-gray-500">Key metric:</p>
                  <p className="text-xs text-gray-500">Traffic gain greater than 10%</p>
                </div>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-yellow-900 mb-2">Total Traffic</h3>
                <p className="text-3xl font-bold text-yellow-600">10.8K</p>
                <p className="text-sm text-gray-600 mt-1">Monthly Sessions</p>
                <div className="mt-3">
                  <p className="text-xs text-gray-500">Compared to:</p>
                  <p className="text-xs text-gray-500">14.9K previous period (-27%)</p>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-900 mb-2">Indexed Pages</h3>
                <p className="text-3xl font-bold text-blue-600">3,228</p>
                <p className="text-sm text-gray-600 mt-1">Current indexed pages</p>
                <div className="mt-3">
                  <p className="text-xs text-gray-500">Peak in Dec 2024:</p>
                  <p className="text-xs text-gray-500">4,360 pages (-26%)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Traffic Trend Chart */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <ChartBarIcon className="h-6 w-6 mr-2 text-blue-600" />
              Traffic Trends (2023-2025)
            </h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Key Traffic Milestones</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-gray-900">Traffic Peak</h4>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">May 2024</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Highest traffic recorded at 93.5K sessions on May 12, 2024</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-gray-900">Sustained Growth</h4>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Jan-May 2024</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Consistent growth period with 20K-60K monthly sessions</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-gray-900">Current Decline</h4>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Dec 2024-Present</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Gradual traffic decrease from 15K to 8.8K monthly sessions</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-700">Traffic History</h3>
                  <div className="flex space-x-2">
                    <span className="text-xs text-gray-500">Starting point: 214 (Mar 2023)</span>
                    <span className="text-xs text-gray-500">Current: 8,821 (Mar 2025)</span>
                  </div>
                </div>
                <div className="h-40 bg-white relative rounded overflow-hidden">
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full flex items-end h-full">
                      {/* Simplified chart representation */}
                      <div className="w-1 bg-blue-200 h-3 mx-px" title="Mar 2023: ~214"></div>
                      <div className="w-1 bg-blue-200 h-3 mx-px" title="Apr 2023: ~180"></div>
                      <div className="w-1 bg-blue-200 h-3 mx-px" title="May 2023: ~120"></div>
                      <div className="w-1 bg-blue-200 h-4 mx-px" title="Jun 2023: ~319"></div>
                      <div className="w-1 bg-blue-200 h-8 mx-px" title="Jul 2023: ~370"></div>
                      <div className="w-1 bg-blue-300 h-8 mx-px" title="Aug 2023: ~400"></div>
                      <div className="w-1 bg-blue-300 h-9 mx-px" title="Sep 2023: ~410"></div>
                      <div className="w-1 bg-blue-300 h-10 mx-px" title="Oct 2023: ~450"></div>
                      <div className="w-1 bg-blue-400 h-14 mx-px" title="Nov 2023: ~650"></div>
                      <div className="w-1 bg-blue-400 h-48 mx-px" title="Dec 2023: ~2500"></div>
                      <div className="w-1 bg-blue-500 h-80 mx-px" title="Jan 2024: ~9000"></div>
                      <div className="w-1 bg-blue-500 h-96 mx-px" title="Feb 2024: ~24000"></div>
                      <div className="w-1 bg-blue-600 h-100 mx-px" title="Mar 2024: ~30000"></div>
                      <div className="w-1 bg-blue-600 h-120 mx-px" title="Apr 2024: ~45000"></div>
                      <div className="w-1 bg-blue-700 h-140 mx-px" title="May 2024: ~60000"></div>
                      <div className="w-1 bg-blue-700 h-130 mx-px" title="Jun 2024: ~50000"></div>
                      <div className="w-1 bg-blue-600 h-90 mx-px" title="Jul 2024: ~40000"></div>
                      <div className="w-1 bg-blue-600 h-90 mx-px" title="Aug 2024: ~40000"></div>
                      <div className="w-1 bg-blue-500 h-60 mx-px" title="Sep 2024: ~25000"></div>
                      <div className="w-1 bg-blue-500 h-45 mx-px" title="Oct 2024: ~18000"></div>
                      <div className="w-1 bg-blue-400 h-60 mx-px" title="Nov 2024: ~25000"></div>
                      <div className="w-1 bg-blue-400 h-35 mx-px" title="Dec 2024: ~13000"></div>
                      <div className="w-1 bg-blue-300 h-27 mx-px" title="Jan 2025: ~11000"></div>
                      <div className="w-1 bg-blue-300 h-35 mx-px" title="Feb 2025: ~14000"></div>
                      <div className="w-1 bg-blue-200 h-25 mx-px" title="Mar 2025: ~10000"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="text-xs text-gray-500">Mar 2023</span>
                  <span className="text-xs text-gray-500">Mar 2024</span>
                  <span className="text-xs text-gray-500">Mar 2025</span>
                </div>
              </div>
            </div>
          </section>

          {/* Filter Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-700 mr-2">Filter by:</span>
              <select className="text-sm border border-gray-300 rounded-md px-3 py-1.5">
                <option>All Articles</option>
                <option>Articles with Decay</option>
                <option>Growing Articles</option>
                <option>High Search Volume</option>
              </select>
            </div>
            <div className="relative flex items-center">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Content Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Article
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Published
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jan Sessions
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Feb Sessions
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Change
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Top Keyword
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Search Vol.
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-start">
                        <div className="ml-0">
                          <div className="text-sm font-medium text-gray-900 line-clamp-2">15 safest countries in the world to live and visit in 2025</div>
                          <div className="text-xs text-gray-500 truncate max-w-xs mt-1">https://economymiddleeast.com/safest-countries-world/</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Feb 7, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">11,261</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">18,228</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        <ArrowUpIcon className="h-3 w-3 mr-1 self-center" />
                        +62%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">safest country in the world</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2,500</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        <DocumentMagnifyingGlassIcon className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-start">
                        <div className="ml-0">
                          <div className="text-sm font-medium text-gray-900 line-clamp-2">UAE salary check: How to do it in 2025</div>
                          <div className="text-xs text-gray-500 truncate max-w-xs mt-1">https://economymiddleeast.com/how-to-check-salary-uae/</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Feb 17, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">349</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,083</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        <ArrowUpIcon className="h-3 w-3 mr-1 self-center" />
                        +210%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">dubai salary check</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">600</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        <DocumentMagnifyingGlassIcon className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4">
                      <div className="flex items-start">
                        <div className="ml-0">
                          <div className="text-sm font-medium text-gray-900 line-clamp-2">The most visited cities in the world 2024</div>
                          <div className="text-xs text-gray-500 truncate max-w-xs mt-1">https://economymiddleeast.com/most-visited-cities-in-the-world/</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dec 23, 2024</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,313</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">664</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        <ArrowDownIcon className="h-3 w-3 mr-1 self-center" />
                        -49%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">emirates id fine check</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">200</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 px-2 py-1 rounded text-xs font-medium border border-indigo-200">
                        Refresh Content
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4">
                      <div className="flex items-start">
                        <div className="ml-0">
                          <div className="text-sm font-medium text-gray-900 line-clamp-2">Emirates ID fine check: How to check your fines? A 2025 guide</div>
                          <div className="text-xs text-gray-500 truncate max-w-xs mt-1">https://economymiddleeast.com/how-to-check-emirates-id-fines/</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Feb 17, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,138</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">554</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        <ArrowDownIcon className="h-3 w-3 mr-1 self-center" />
                        -51%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">evg traffic fine</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3,400</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 px-2 py-1 rounded text-xs font-medium border border-indigo-200">
                        Refresh Content
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4">
                      <div className="flex items-start">
                        <div className="ml-0">
                          <div className="text-sm font-medium text-gray-900 line-clamp-2">Most visited countries in the world: A global tourism ranking</div>
                          <div className="text-xs text-gray-500 truncate max-w-xs mt-1">https://economymiddleeast.com/most-visited-countries-in-the-world-a-global-tourism-ranking/</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Feb 18, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2,271</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,945</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        <ArrowDownIcon className="h-3 w-3 mr-1 self-center" />
                        -14%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">red signal crossing fine abu dhabi</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">200</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 px-2 py-1 rounded text-xs font-medium border border-indigo-200">
                        Refresh Content
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-start">
                        <div className="ml-0">
                          <div className="text-sm font-medium text-gray-900 line-clamp-2">Top e-wallets in UAE</div>
                          <div className="text-xs text-gray-500 truncate max-w-xs mt-1">https://economymiddleeast.com/top-e-wallets-in-uae/</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Feb 18, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">274</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">380</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        <ArrowUpIcon className="h-3 w-3 mr-1 self-center" />
                        +39%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">eid ul adha 2024 uae</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">150</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        <DocumentMagnifyingGlassIcon className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Showing <span className="font-medium">1-5</span> of <span className="font-medium">220</span> articles
                </div>
                <div className="flex space-x-2">
                  <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-white text-gray-700">Previous</button>
                  <button className="border border-gray-300 rounded px-4 py-1 text-sm bg-white text-gray-700 font-medium bg-blue-50 border-blue-200">1</button>
                  <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-white text-gray-700">2</button>
                  <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-white text-gray-700">3</button>
                  <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-white text-gray-700">Next</button>
                </div>
              </div>
            </div>
          </div>

          {/* Content Performance Metrics */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <ChartBarIcon className="h-6 w-6 mr-2 text-purple-600" />
              Content Performance Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-900 mb-2">Content Freshness</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Last Updated</p>
                    <p className="text-2xl font-bold text-purple-600">45%</p>
                    <p className="text-xs text-gray-500">of content updated in last 90 days</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Average Age</p>
                    <p className="text-2xl font-bold text-purple-600">127 days</p>
                    <p className="text-xs text-gray-500">since last update</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-900 mb-2">Keyword Performance</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Top Keywords</p>
                    <p className="text-2xl font-bold text-blue-600">1,245</p>
                    <p className="text-xs text-gray-500">keywords ranking in top 10</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Keyword Growth</p>
                    <p className="text-2xl font-bold text-blue-600">+18%</p>
                    <p className="text-xs text-gray-500">MoM improvement</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-900 mb-2">User Engagement</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Avg. Time on Page</p>
                    <p className="text-2xl font-bold text-green-600">3:45</p>
                    <p className="text-xs text-gray-500">minutes per session</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Bounce Rate</p>
                    <p className="text-2xl font-bold text-green-600">42%</p>
                    <p className="text-xs text-gray-500">improvement needed</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Keyword Analysis */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MagnifyingGlassIcon className="h-6 w-6 mr-2 text-indigo-600" />
              Keyword Analysis
            </h2>
            <div className="space-y-6">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-900 mb-3">High-Value Keywords</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-indigo-100">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-gray-900">Growing Keywords</h4>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">+45% MoM</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">dubai salary check</span>
                        <span className="text-gray-900 font-medium">3,400</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">uae gold rate today</span>
                        <span className="text-gray-900 font-medium">2,800</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">best credit card uae</span>
                        <span className="text-gray-900 font-medium">1,900</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-indigo-100">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-gray-900">Declining Keywords</h4>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">-32% MoM</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">emirates id fine check</span>
                        <span className="text-gray-900 font-medium">2,200</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">dubai traffic fines</span>
                        <span className="text-gray-900 font-medium">1,800</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">most visited cities</span>
                        <span className="text-gray-900 font-medium">1,500</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Keyword Opportunities</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-900">High Volume, Low Competition</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li>• uae investment guide</li>
                      <li>• dubai business setup</li>
                      <li>• uae tax system</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-900">Seasonal Opportunities</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li>• ramadan 2025 uae</li>
                      <li>• dubai shopping festival</li>
                      <li>• uae national day</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-900">Emerging Trends</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li>• uae digital banking</li>
                      <li>• dubai metaverse</li>
                      <li>• uae green economy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content Refresh Recommendations */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <ArrowPathIcon className="h-6 w-6 mr-2 text-emerald-600" />
              Content Refresh Recommendations
            </h2>
            <div className="space-y-6">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h3 className="font-semibold text-emerald-900 mb-3">Priority Updates</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-emerald-100">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-gray-900">Financial Guides</h4>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-emerald-100 text-emerald-800">High Priority</span>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Update salary verification process with new UAE systems</li>
                      <li>• Add latest credit card offers and rewards programs</li>
                      <li>• Include new digital banking features and security measures</li>
                      <li>• Update gold rate tracking with real-time data integration</li>
                    </ul>
                    <div className="mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Traffic Trend:</span>
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">+210% avg</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-emerald-100">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-gray-900">Regulatory Content</h4>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-emerald-100 text-emerald-800">High Priority</span>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Update Emirates ID fine checking process</li>
                      <li>• Add latest traffic fine regulations and payment methods</li>
                      <li>• Include new visa application procedures</li>
                      <li>• Update business licensing requirements</li>
                    </ul>
                    <div className="mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Traffic Trend:</span>
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">-51% avg</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-3">Declining Content (Traffic Loss &gt; 35%)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-red-100">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-gray-900">Tourism Content</h4>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">-43% avg</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Travel and tourism articles need updating with 2025 information and changing travel trends.</p>
                    <div className="mt-3">
                      <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mr-2 mb-2">most visited cities</span>
                      <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mr-2 mb-2">tourism ranking</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-red-100">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-gray-900">Site-Wide Pattern</h4>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">-73% from peak</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Traffic has decreased from its peak in May 2024 (93K) to current levels (8.8K). Comprehensive refresh needed.</p>
                    <div className="mt-3">
                      <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mr-2 mb-2">indexed pages declining</span>
                      <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mr-2 mb-2">content freshness issues</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Content Enhancement Strategy</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-900">Interactive Elements</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li>• Add salary calculator tools</li>
                      <li>• Implement fine calculation widgets</li>
                      <li>• Create currency conversion tools</li>
                      <li>• Add investment return calculators</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-900">Visual Content</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li>• Create infographics for complex topics</li>
                      <li>• Add video tutorials for processes</li>
                      <li>• Include comparison tables</li>
                      <li>• Develop interactive maps</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-900">User Experience</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li>• Add step-by-step guides</li>
                      <li>• Implement FAQ sections</li>
                      <li>• Create downloadable PDFs</li>
                      <li>• Add mobile-optimized views</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-3">Growth Opportunities (Traffic Gain &gt; 20%)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-green-100">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-gray-900">Safety & Security</h4>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">+62% avg</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Create more content around safety rankings, secure destinations, and security tips.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-100">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-gray-900">Seasonal Opportunity</h4>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Q2 traffic peaks</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Historical data shows traffic peaks during April-June. Prepare content strategy to capitalize on this seasonal pattern in 2025.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 