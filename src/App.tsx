import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LogoCloud } from "./components/LogoCloud";
import { FeaturedCourses } from "./components/FeaturedCourses";
import { AIMentor } from "./components/AIMentor";
import { LearningPaths } from "./components/LearningPaths";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="h-screen flex flex-col overflow-hidden flex-shrink-0">
        <Navbar />
        <Hero />
      </div>
      <LogoCloud />
      <FeaturedCourses />
      <AIMentor />
      <LearningPaths />
      <Stats />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
