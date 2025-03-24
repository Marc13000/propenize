'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getUserPortfolio } from '../../data/mockDatabase';

export default function UserProfile() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      router.push('/login');
      return;
    }

    try {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      
      // Fetch user's portfolio
      const portfolioData = getUserPortfolio(userData.id);
      setPortfolio(portfolioData);
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent mx-auto"></div>
          <p className="mt-4 text-lg">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // This should not happen as we redirect to login if no user
  }

  return (
    <div className="min-h-screen bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* User Profile Header */}
          <div className="bg-secondary text-secondary p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-300 mb-4 md:mb-0 md:mr-8 flex items-center justify-center">
                {user.profilePicture ? (
                  <Image
                    src={user.profilePicture}
                    alt={user.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                ) : (
                  <span className="text-4xl">👤</span>
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                <p className="text-lg mb-1">@{user.username}</p>
                <p className="mb-4">{user.email}</p>
                <button
                  onClick={handleLogout}
                  className="btn-secondary text-sm px-4 py-2"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Investment Summary */}
          <div className="p-8 border-b">
            <h2 className="text-2xl font-bold mb-6">Investment Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Investment</h3>
                <p className="text-3xl font-bold text-accent">${user.totalInvestment.toLocaleString()}</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Returns</h3>
                <p className="text-3xl font-bold text-accent">${user.returns.toLocaleString()}</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Properties Owned</h3>
                <p className="text-3xl font-bold text-accent">{portfolio.length}</p>
              </div>
            </div>
          </div>

          {/* Portfolio */}
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Your Portfolio</h2>
              <Link href="/properties" className="btn-primary">
                Explore More Properties
              </Link>
            </div>

            {portfolio.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-xl text-gray-600 mb-4">You don&apos;t have any properties in your portfolio yet.</p>
                <Link href="/properties" className="btn-primary">
                  Start Investing
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolio.map((item) => (
                  <div key={`${item.propertyId}-${item.purchaseDate}`} className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.property.title}</h3>
                      <p className="text-gray-600 mb-4">{item.property.location}</p>
                      
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Tokens Owned</span>
                        <span className="font-bold">{item.tokens}</span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Token Price</span>
                        <span className="font-bold">${item.property.tokenPrice}</span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Investment Value</span>
                        <span className="font-bold">${(item.tokens * item.property.tokenPrice).toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-600">Expected CAGR</span>
                        <span className="font-bold text-accent">{item.property.expectedCAGR}</span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Purchase Date</span>
                        <span className="font-bold">{new Date(item.purchaseDate).toLocaleDateString()}</span>
                      </div>
                      
                      <Link href={`/properties/${item.propertyId}`} className="btn-primary w-full block text-center mt-4">
                        View Property
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}