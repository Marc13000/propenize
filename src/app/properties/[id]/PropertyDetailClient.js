'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getPropertyById } from '../../../data/mockDatabase';

export default function PropertyDetailClient({ params }) {
  const router = useRouter();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [investmentAmount, setInvestmentAmount] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Wrap localStorage access in try-catch to prevent errors
    try {
      // Check if user is logged in
      const storedUser = localStorage.getItem('user');
      setIsLoggedIn(!!storedUser);
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      // Don't set isLoggedIn if there's an error
    }

    // Fetch property data
    if (params && params.id) {
      const propertyData = getPropertyById(params.id);
      if (propertyData) {
        setProperty(propertyData);
        setLoading(false);
      } else {
        // Only redirect if we're sure the property doesn't exist
        console.error('Property not found:', params.id);
        setLoading(false);
        // Commenting out the redirect to prevent immediate closure
        // router.push('/properties');
      }
    } else {
      setLoading(false);
    }
  }, [params, router]);

  const handleInvestmentChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0 && value <= property.availableTokens) {
      setInvestmentAmount(value);
    }
  };

  const handleInvest = () => {
    if (!isLoggedIn) {
      router.push('/login');
      return;
    }

    // In a real app, this would make an API call to purchase tokens
    alert(`Successfully purchased ${investmentAmount} tokens for $${(investmentAmount * property.tokenPrice).toLocaleString()}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent mx-auto"></div>
          <p className="mt-4 text-lg">Loading property details...</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link href="/properties" className="flex items-center text-accent hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Properties
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
            <p className="mb-6">Sorry, we couldn&apos;t find the property you&apos;re looking for.</p>
            <Link href="/properties" className="btn-primary inline-block px-6 py-2">
              View All Properties
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/properties" className="flex items-center text-accent hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Properties
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Property Header */}
          <div className="bg-secondary text-secondary p-8">
            <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
            <p className="text-xl mb-4">{property.location}</p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                {property.propertyType}
              </span>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                {property.expectedCAGR} CAGR
              </span>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                {property.holdingPeriod}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            {/* Property Details - Left Column */}
            <div className="lg:col-span-2">
              {/* Property Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">About This Property</h2>
                <p className="text-gray-700 mb-6">{property.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Year Built</p>
                    <p className="font-bold">{property.yearBuilt}</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Square Feet</p>
                    <p className="font-bold">{property.squareFeet.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Property Type</p>
                    <p className="font-bold">{property.propertyType}</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Total Value</p>
                    <p className="font-bold">${property.price.toLocaleString()}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documents */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Documents</h2>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <ul className="space-y-4">
                    {property.documents.map((doc, index) => (
                      <li key={index} className="flex items-center justify-between">
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                          </svg>
                          {doc.name}
                        </span>
                        <a href={doc.url} className="text-accent hover:underline">
                          Download
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <p className="mb-2"><strong>Email:</strong> {property.contactEmail}</p>
                  <p><strong>Phone:</strong> {property.contactPhone}</p>
                </div>
              </div>
            </div>

            {/* Investment Details - Right Column */}
            <div>
              <div className="bg-white border rounded-lg shadow-lg p-6 sticky top-4">
                <h2 className="text-2xl font-bold mb-4">Investment Details</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Token Price</span>
                    <span className="font-bold">${property.tokenPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available Tokens</span>
                    <span className="font-bold">{property.availableTokens.toLocaleString()} / {property.totalTokens.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expected CAGR</span>
                    <span className="font-bold text-accent">{property.expectedCAGR}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Holding Period</span>
                    <span className="font-bold">{property.holdingPeriod}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Tokens
                  </label>
                  <input
                    type="number"
                    id="investmentAmount"
                    min="1"
                    max={property.availableTokens}
                    value={investmentAmount}
                    onChange={handleInvestmentChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div className="mb-6">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Investment Amount</span>
                      <span className="font-bold">${(investmentAmount * property.tokenPrice).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Annual Return</span>
                      <span className="font-bold text-accent">${(investmentAmount * property.tokenPrice * parseFloat(property.expectedCAGR) / 100).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleInvest}
                  className="w-full btn-primary py-3 text-center font-bold"
                >
                  Invest Now
                </button>

                {!isLoggedIn && (
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    You need to <Link href="/login" className="text-accent hover:underline">login</Link> to invest
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
