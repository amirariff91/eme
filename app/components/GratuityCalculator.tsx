'use client';

import { useState } from 'react';
import { CalculatorIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';

interface GratuityResult {
  basicGratuity: number;
  additionalGratuity: number;
  totalGratuity: number;
  breakdown: {
    basic: number;
    housing: number;
    transport: number;
    other: number;
  };
}

export default function GratuityCalculator() {
  const [formData, setFormData] = useState({
    basicSalary: '',
    housingAllowance: '',
    transportAllowance: '',
    otherAllowances: '',
    serviceYears: '',
    serviceMonths: '',
    lastSalary: '',
  });

  const [result, setResult] = useState<GratuityResult | null>(null);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const calculateGratuity = () => {
    const basic = parseFloat(formData.basicSalary) || 0;
    const housing = parseFloat(formData.housingAllowance) || 0;
    const transport = parseFloat(formData.transportAllowance) || 0;
    const other = parseFloat(formData.otherAllowances) || 0;
    const years = parseFloat(formData.serviceYears) || 0;
    const months = parseFloat(formData.serviceMonths) || 0;
    const lastSalary = parseFloat(formData.lastSalary) || basic;

    const totalServiceYears = years + (months / 12);
    const dailyWage = lastSalary / 30;
    
    let basicGratuity = 0;
    let additionalGratuity = 0;

    // Basic gratuity calculation (21 days per year for first 5 years)
    if (totalServiceYears <= 5) {
      basicGratuity = dailyWage * 21 * totalServiceYears;
    } else {
      basicGratuity = dailyWage * 21 * 5;
    }

    // Additional gratuity calculation (30 days per year for years after 5)
    if (totalServiceYears > 5) {
      additionalGratuity = dailyWage * 30 * (totalServiceYears - 5);
    }

    const totalGratuity = basicGratuity + additionalGratuity;

    setResult({
      basicGratuity,
      additionalGratuity,
      totalGratuity,
      breakdown: {
        basic: basicGratuity,
        housing: housing * 0.21 * totalServiceYears,
        transport: transport * 0.21 * totalServiceYears,
        other: other * 0.21 * totalServiceYears,
      }
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center space-x-2 mb-6">
        <CalculatorIcon className="h-6 w-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">UAE Gratuity Calculator</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Basic Salary (AED)</label>
          <input
            type="number"
            value={formData.basicSalary}
            onChange={(e) => setFormData({ ...formData, basicSalary: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            placeholder="Enter basic salary"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Housing Allowance (AED)</label>
          <input
            type="number"
            value={formData.housingAllowance}
            onChange={(e) => setFormData({ ...formData, housingAllowance: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            placeholder="Enter housing allowance"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Transport Allowance (AED)</label>
          <input
            type="number"
            value={formData.transportAllowance}
            onChange={(e) => setFormData({ ...formData, transportAllowance: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            placeholder="Enter transport allowance"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Other Allowances (AED)</label>
          <input
            type="number"
            value={formData.otherAllowances}
            onChange={(e) => setFormData({ ...formData, otherAllowances: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            placeholder="Enter other allowances"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Years of Service</label>
          <input
            type="number"
            value={formData.serviceYears}
            onChange={(e) => setFormData({ ...formData, serviceYears: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            placeholder="Enter years"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Months of Service</label>
          <input
            type="number"
            value={formData.serviceMonths}
            onChange={(e) => setFormData({ ...formData, serviceMonths: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            placeholder="Enter months"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Last Basic Salary (AED)</label>
          <input
            type="number"
            value={formData.lastSalary}
            onChange={(e) => setFormData({ ...formData, lastSalary: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            placeholder="Enter last basic salary"
          />
        </div>
      </div>

      <button
        onClick={calculateGratuity}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Calculate Gratuity
      </button>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Gratuity Summary</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Basic Gratuity (21 days/year for first 5 years)</span>
                <span className="font-medium">{result.basicGratuity.toFixed(2)} AED</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Additional Gratuity (30 days/year after 5 years)</span>
                <span className="font-medium">{result.additionalGratuity.toFixed(2)} AED</span>
              </div>
              <div className="flex justify-between text-lg font-semibold text-blue-800 pt-2 border-t">
                <span>Total Gratuity</span>
                <span>{result.totalGratuity.toFixed(2)} AED</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowBreakdown(!showBreakdown)}
            className="w-full text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            {showBreakdown ? 'Hide Breakdown' : 'Show Detailed Breakdown'}
          </button>

          {showBreakdown && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Detailed Breakdown</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Basic Salary Component</span>
                  <span className="font-medium">{result.breakdown.basic.toFixed(2)} AED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Housing Allowance Component</span>
                  <span className="font-medium">{result.breakdown.housing.toFixed(2)} AED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transport Allowance Component</span>
                  <span className="font-medium">{result.breakdown.transport.toFixed(2)} AED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Other Allowances Component</span>
                  <span className="font-medium">{result.breakdown.other.toFixed(2)} AED</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-6 text-sm text-gray-500">
        <p className="font-medium mb-2">Note:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Basic gratuity is calculated as 21 days per year for the first 5 years</li>
          <li>Additional gratuity is calculated as 30 days per year for years after 5</li>
          <li>Allowances are included in the calculation at 21 days per year</li>
          <li>This is an estimate and may vary based on specific employment conditions</li>
        </ul>
      </div>
    </div>
  );
} 