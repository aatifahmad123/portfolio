import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import CodingProfilesSection from "@/components/CodingProfilesSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import FavoritesSection from "@/components/FavoritesSection";
import EducationSection from "@/components/EducationSection";
import AchievementsSection from "@/components/AchievementsSection";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aatif Ahmad</title>
        <meta 
          name="description" 
          content="Aatif Ahmad - Undergraduate at IIT Jodhpur building production-grade AI systems, intelligent tools, and real-world data applications. Portfolio showcasing ML, NLP, and full-stack projects." 
        />
        <meta name="keywords" content="Aatif Ahmad, IIT Jodhpur, AI, Data Science, Machine Learning, Portfolio, Developer" />
        <link rel="canonical" href="https://aatifahmad123.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AnimatedSection>
            <div id="about" className="scroll-mt-24">
              <AboutSection />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <FeaturedProjects />
          </AnimatedSection>
          <AnimatedSection>
            <CodingProfilesSection />
          </AnimatedSection>
          <AnimatedSection>
            <div id="experience" className="scroll-mt-24">
              <ExperienceSection />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div id="skills" className="scroll-mt-24">
              <SkillsSection />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <FavoritesSection />
          </AnimatedSection>
          <AnimatedSection>
            <div id="education" className="scroll-mt-24">
              <EducationSection />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <AchievementsSection />
          </AnimatedSection>
          <AnimatedSection>
            <div id="contact" className="scroll-mt-24">
              <Footer />
            </div>
          </AnimatedSection>
        </main>
      </div>
    </>
  );
};

export default Index;
