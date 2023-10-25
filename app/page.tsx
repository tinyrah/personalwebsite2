import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import ResumeSection from "@/components/ResumeSection"
import ResearchSection from "@/components/ResearchSection"
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <ProjectsSection />
      <ResumeSection />
    </main>
  )
}
