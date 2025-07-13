import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import DiscordModal from "@/components/DiscordModal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <FAQ />
      <DiscordModal />
    </div>
  );
};

export default Index;
