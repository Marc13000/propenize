import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Democratizing Real Estate Investment
              </h1>
              <p className="text-xl mb-8">
                Own a piece of premium real estate through blockchain-powered tokenization.
                Invest with as little as $1,000 and build your property portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/properties" className="btn-primary text-center">
                  Explore Properties
                </Link>
                <Link href="/register" className="btn-secondary text-center">
                  Create Account
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg h-80 md:h-96">
                <div className="absolute top-0 left-0 w-full h-full bg-accent opacity-10 rounded-lg transform rotate-3"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-secondary border-2 border-accent rounded-lg shadow-xl overflow-hidden">
                  {/* Placeholder for building image - in a real app, use an actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-accent/30 to-secondary flex items-center justify-center">
                    <span className="text-accent text-6xl">🏢</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">1</div>
              <h3 className="text-xl font-bold mb-4">Browse Properties</h3>
              <p>Explore our curated selection of high-quality real estate investment opportunities.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">2</div>
              <h3 className="text-xl font-bold mb-4">Purchase Tokens</h3>
              <p>Buy tokens representing fractional ownership in properties that match your investment goals.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">3</div>
              <h3 className="text-xl font-bold mb-4">Earn Returns</h3>
              <p>Receive your share of rental income and property appreciation as your investment grows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary text-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Propenize</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex items-start">
              <div className="bg-accent text-white p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Secure Blockchain Technology</h3>
                <p>All property tokens are secured on the blockchain, ensuring transparent and immutable ownership records.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-accent text-white p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Low Minimum Investment</h3>
                <p>Start building your real estate portfolio with as little as $1,000, making property investment accessible to everyone.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-accent text-white p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Vetted Properties</h3>
                <p>Our team of real estate experts thoroughly evaluates each property to ensure quality investment opportunities.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-accent text-white p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Diversified Portfolio</h3>
                <p>Spread your investment across multiple properties to reduce risk and maximize potential returns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}