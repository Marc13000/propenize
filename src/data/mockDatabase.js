// Mock database for the real estate tokenization platform

// Users data
export const users = [
  {
    id: 1,
    username: "jai",
    email: "jai@email.com",
    password: "password123", // In a real app, this would be hashed
    name: "Jai K",
    profilePicture: "/images/users/jai.jpg",
    portfolio: [
      { propertyId: 1, tokens: 5, purchaseDate: "2023-10-15" },
      { propertyId: 3, tokens: 10, purchaseDate: "2023-11-20" }
    ],
    totalInvestment: 15000,
    returns: 1200
  },
  {
    id: 2,
    username: "yash",
    email: "yash@email.com",
    password: "password123",
    name: "Yash S",
    profilePicture: "/images/users/yash.jpg",
    portfolio: [
      { propertyId: 2, tokens: 8, purchaseDate: "2023-09-05" },
      { propertyId: 4, tokens: 3, purchaseDate: "2023-12-10" }
    ],
    totalInvestment: 11000,
    returns: 850
  },
  {
    id: 3,
    username: "sameep",
    email: "sameep@email.com",
    password: "password123",
    name: "Sameep S",
    profilePicture: "/images/users/sameep.jpg",
    portfolio: [
      { propertyId: 1, tokens: 3, purchaseDate: "2023-10-20" },
      { propertyId: 5, tokens: 7, purchaseDate: "2024-01-15" }
    ],
    totalInvestment: 10000,
    returns: 750
  },
  {
    id: 4,
    username: "jiigar",
    email: "jiigar@email.com",
    password: "password123",
    name: "Jiigar J",
    profilePicture: "/images/users/jiigar.jpg",
    portfolio: [
      { propertyId: 1, tokens: 3, purchaseDate: "2023-10-20" },
      { propertyId: 5, tokens: 7, purchaseDate: "2024-01-15" }
    ],
    totalInvestment: 10000,
    returns: 750
  },
  {
    id: 5,
    username: "aastha",git
    email: "aastha@email.com",
    password: "password123",
    name: "Aastha S",
    profilePicture: "/images/users/aastha.jpg",
    portfolio: [
      { propertyId: 1, tokens: 3, purchaseDate: "2023-10-20" },
      { propertyId: 5, tokens: 7, purchaseDate: "2024-01-15" }
    ],
    totalInvestment: 10000,
    returns: 750
  }
];

// Properties data
export const properties = [
  {
    id: 1,
    title: "Luxury Apartment Complex",
    location: "New York, NY",
    description: "A premium apartment complex in the heart of Manhattan, offering steady rental income and strong appreciation potential.",
    price: 5000000,
    tokenPrice: 1000,
    totalTokens: 5000,
    availableTokens: 4992,
    holdingPeriod: "5 years",
    expectedCAGR: "12%",
    images: ["/images/properties/property1-1.jpg", "/images/properties/property1-2.jpg", "/images/properties/property1-3.jpg"],
    documents: [
      { name: "Financial Projections", url: "/documents/property1-financials.pdf" },
      { name: "Legal Documentation", url: "/documents/property1-legal.pdf" },
      { name: "Property Inspection", url: "/documents/property1-inspection.pdf" }
    ],
    contactEmail: "investments@propenize.com",
    contactPhone: "+1 (555) 123-4567",
    features: ["24/7 Security", "Swimming Pool", "Fitness Center", "Rooftop Garden"],
    propertyType: "Residential",
    yearBuilt: 2018,
    squareFeet: 75000
  },
  {
    id: 2,
    title: "Commercial Office Building",
    location: "Chicago, IL",
    description: "A modern office building in Chicago's business district with long-term corporate tenants and stable income.",
    price: 8000000,
    tokenPrice: 1000,
    totalTokens: 8000,
    availableTokens: 7992,
    holdingPeriod: "7 years",
    expectedCAGR: "9.5%",
    images: ["/images/properties/property2-1.jpg", "/images/properties/property2-2.jpg"],
    documents: [
      { name: "Financial Projections", url: "/documents/property2-financials.pdf" },
      { name: "Legal Documentation", url: "/documents/property2-legal.pdf" },
      { name: "Tenant Information", url: "/documents/property2-tenants.pdf" }
    ],
    contactEmail: "investments@propenize.com",
    contactPhone: "+1 (555) 123-4567",
    features: ["Prime Location", "Parking Garage", "Conference Facilities", "High-Speed Internet"],
    propertyType: "Commercial",
    yearBuilt: 2015,
    squareFeet: 120000
  },
  {
    id: 3,
    title: "Retail Shopping Center",
    location: "Los Angeles, CA",
    description: "A thriving shopping center in Los Angeles with national retail tenants and excellent foot traffic.",
    price: 12000000,
    tokenPrice: 1000,
    totalTokens: 12000,
    availableTokens: 11990,
    holdingPeriod: "10 years",
    expectedCAGR: "11%",
    images: ["/images/properties/property3-1.jpg", "/images/properties/property3-2.jpg", "/images/properties/property3-3.jpg"],
    documents: [
      { name: "Financial Projections", url: "/documents/property3-financials.pdf" },
      { name: "Legal Documentation", url: "/documents/property3-legal.pdf" },
      { name: "Market Analysis", url: "/documents/property3-market.pdf" }
    ],
    contactEmail: "investments@propenize.com",
    contactPhone: "+1 (555) 123-4567",
    features: ["High Visibility", "Ample Parking", "Modern Facilities", "Anchor Tenants"],
    propertyType: "Retail",
    yearBuilt: 2010,
    squareFeet: 200000
  },
  {
    id: 4,
    title: "Residential Townhouse Development",
    location: "Austin, TX",
    description: "A new development of luxury townhouses in rapidly growing Austin, offering both rental income and appreciation.",
    price: 6500000,
    tokenPrice: 1000,
    totalTokens: 6500,
    availableTokens: 6497,
    holdingPeriod: "6 years",
    expectedCAGR: "14%",
    images: ["/images/properties/property4-1.jpg", "/images/properties/property4-2.jpg"],
    documents: [
      { name: "Financial Projections", url: "/documents/property4-financials.pdf" },
      { name: "Legal Documentation", url: "/documents/property4-legal.pdf" },
      { name: "Development Timeline", url: "/documents/property4-timeline.pdf" }
    ],
    contactEmail: "investments@propenize.com",
    contactPhone: "+1 (555) 123-4567",
    features: ["Smart Home Technology", "Energy Efficient", "Community Pool", "Private Yards"],
    propertyType: "Residential",
    yearBuilt: 2022,
    squareFeet: 85000
  },
  {
    id: 5,
    title: "Industrial Warehouse Complex",
    location: "Seattle, WA",
    description: "A strategic industrial warehouse complex near Seattle's port, leased to e-commerce and logistics companies.",
    price: 9500000,
    tokenPrice: 1000,
    totalTokens: 9500,
    availableTokens: 9493,
    holdingPeriod: "8 years",
    expectedCAGR: "10.5%",
    images: ["/images/properties/property5-1.jpg", "/images/properties/property5-2.jpg"],
    documents: [
      { name: "Financial Projections", url: "/documents/property5-financials.pdf" },
      { name: "Legal Documentation", url: "/documents/property5-legal.pdf" },
      { name: "Tenant Information", url: "/documents/property5-tenants.pdf" }
    ],
    contactEmail: "investments@propenize.com",
    contactPhone: "+1 (555) 123-4567",
    features: ["Loading Docks", "High Ceilings", "Climate Control", "Security System"],
    propertyType: "Industrial",
    yearBuilt: 2017,
    squareFeet: 150000
  }
];

// Authentication functions (mock)
export const authenticateUser = (email, password) => {
  const user = users.find(user => user.email === email && user.password === password);
  return user ? { ...user, password: undefined } : null;
};

export const registerUser = (userData) => {
  // In a real app, this would add the user to a database
  // For this mock, we'll just return a success message
  return { success: true, message: "User registered successfully" };
};

// Property functions (mock)
export const getPropertyById = (id) => {
  return properties.find(property => property.id === Number(id)) || null;
};

export const getUserPortfolio = (userId) => {
  const user = users.find(user => user.id === Number(userId));
  if (!user) return [];
  
  return user.portfolio.map(item => {
    const property = getPropertyById(item.propertyId);
    return {
      ...item,
      property: property ? {
        id: property.id,
        title: property.title,
        location: property.location,
        tokenPrice: property.tokenPrice,
        expectedCAGR: property.expectedCAGR
      } : null
    };
  });
};