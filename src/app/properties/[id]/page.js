import { properties } from '../../../data/mockDatabase';
import PropertyDetailClient from './PropertyDetailClient';

// This function generates all possible property IDs at build time
export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id.toString(),
  }));
}

export default function PropertyDetail({ params }) {
  return <PropertyDetailClient params={params} />;
}
