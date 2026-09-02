import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategoriesSection from '../components/home/CategoriesSection';
import Reassurance from '../components/home/Reassurance';
import SocialProof from '../components/home/SocialProof';

export default function HomePage() {
  return (
    <div className="pt-24 md:pt-0">
      <Hero />
      <FeaturedProducts />
      <CategoriesSection />
      <Reassurance />
      <SocialProof />
    </div>
  );
}
