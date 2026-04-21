import Banner from "./Banner/Banner";
import ServiceHighlights from "./Components/ServiceHighlights";
import Marque from "./Components/Marque";
import StoreLocation from "./Components/StoreLocation";
import FeaturedCategory from "./Components/FeaturedCategory";
import WorkProcess from "./Components/WorkProcess";
import Testimonials from "./Components/Testimonials";
import BrandingAndSEO from "./Components/BrandingAndSEO";

const Home = () => {
  return (
    <div>
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <Banner />

        <ServiceHighlights />

        <Marque />

        <StoreLocation />

        <FeaturedCategory />

        <WorkProcess />

        <Testimonials />

        <BrandingAndSEO />
      </div>
    </div>
  );
};

export default Home;
