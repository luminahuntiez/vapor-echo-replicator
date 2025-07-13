import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--gaming-primary)_0%,_transparent_50%)] opacity-20" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_var(--gaming-secondary)_0deg,_transparent_60deg,_var(--gaming-accent)_120deg,_transparent_180deg)] opacity-10" />
      
      <div className="container relative z-10 text-center space-y-8 px-4">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl font-bold text-white shadow-2xl">
            V
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            The definitive Steam utility tool
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            for all your gaming needs
          </p>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          VapR is a powerful Steam utility that allows you to enhance your gaming experience 
          with advanced features and seamless integration.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-4 text-lg shadow-2xl border-0"
          >
            <Download className="mr-2 h-5 w-5" />
            Download VapR
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;