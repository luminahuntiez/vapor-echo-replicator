import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-sm font-bold text-white">
              V
            </div>
            <span className="text-xl font-bold text-foreground">VapR</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <a 
              href="https://discord.gg/vapr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Discord
            </a>
            <Button 
              size="sm" 
              className="bg-gradient-primary hover:opacity-90 text-white border-0"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4 animate-fade-in">
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
            >
              FAQ
            </button>
            <a 
              href="https://discord.gg/vapr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Discord
            </a>
            <Button 
              size="sm" 
              className="bg-gradient-primary hover:opacity-90 text-white border-0 w-full"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;