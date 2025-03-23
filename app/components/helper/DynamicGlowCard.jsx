import dynamic from 'next/dynamic';

// Dynamically import the GlowCard component with SSR disabled
const DynamicGlowCard = dynamic(
  () => import('./GlowCard'),
  { ssr: false } // This is the key part - disables server-side rendering
);

export default DynamicGlowCard;