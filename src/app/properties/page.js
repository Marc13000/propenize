import Link from 'next/link';
import { properties } from '../../data/mockDatabase';

export default function Properties() {
  return (
    <div className="min-h-screen bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Investment Opportunities</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover premium real estate investment opportunities with attractive returns.
            Each property has been carefully vetted by our team of experts.
          </p>
        </div>

        {/* Filters - In a real app, these would be functional */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                Property Type
              </label>
              <select
                id="propertyType"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">All Types</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="retail">Retail</option>
                <option value="industrial">Industrial</option>
              </select>
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <select
                id="location"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">All Locations</option>
                <option value="new-york">New York</option>
                <option value="chicago">Chicago</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="austin">Austin</option>
                <option value="seattle">Seattle</option>
              </select>
            </div>
            <div>
              <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-1">
                Token Price Range
              </label>
              <select
                id="priceRange"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Any Price</option>
                <option value="0-1000">$0 - $1,000</option>
                <option value="1000-2000">$1,000 - $2,000</option>
                <option value="2000-5000">$2,000 - $5,000</option>
                <option value="5000+">$5,000+</option>
              </select>
            </div>
            <div>
              <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-1">
                Sort By
              </label>
              <select
                id="sortBy"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="returns">Highest Returns</option>
              </select>
            </div>
          </div>
        </div>

        {/* Property Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-48 bg-gray-300 relative">
                {/* Placeholder for property image */}
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-gray-300 flex items-center justify-center">
                  <span className="text-accent text-4xl">
                    {property.propertyType === 'Residential' ? '🏙️' : 
                     property.propertyType === 'Commercial' ? '🏢' : 
                     property.propertyType === 'Retail' ? '🏬' : '🏭'}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-accent text-white px-2 py-1 rounded-md text-sm font-bold">
                  {property.expectedCAGR} CAGR
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm">Token Price</span>
                  <span className="font-bold">${property.tokenPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm">Available Tokens</span>
                  <span className="font-bold">{property.availableTokens.toLocaleString()} / {property.totalTokens.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm">Holding Period</span>
                  <span className="font-bold">{property.holdingPeriod}</span>
                </div>
                <Link href={`/properties/${property.id}`} className="btn-primary w-full block text-center">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}