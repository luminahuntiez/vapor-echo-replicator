import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Heart, Users, Download, Gamepad2 } from "lucide-react";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string>("");

  const faqs = [
    {
      icon: Heart,
      question: "Is VapR really free?",
      answer: "Yes! VapR is completely free to use. We believe in providing powerful Steam utilities without any cost to our users.",
      badge: "Free Forever",
      badgeVariant: "secondary" as const
    },
    {
      icon: Shield,
      question: "Is VapR safe to use?",
      answer: "Absolutely! While VapR is not open source, it has been thoroughly tested and is completely safe to use. We prioritize user security and privacy.",
      badge: "Secure",
      badgeVariant: "default" as const
    },
    {
      icon: Download,
      question: "How do I install games with VapR?",
      answer: "Simply drag and drop your game files (.zip, .lua, .manifest, or .st files) onto the VapR window. The application will automatically process and integrate them with your Steam installation.",
      badge: "Easy Setup",
      badgeVariant: "secondary" as const
    },
    {
      icon: Zap,
      question: "Can I uninstall games added through VapR?",
      answer: "Yes! VapR includes an uninstall helper that allows you to easily remove games that were added through the application, including all associated files.",
      badge: "Smart Cleanup",
      badgeVariant: "default" as const
    },
    {
      icon: Users,
      question: "Does VapR work with Discord?",
      answer: "Yes! VapR features Discord Rich Presence integration that can display your activity and provide quick access buttons for enhanced social gaming.",
      badge: "Social Gaming",
      badgeVariant: "secondary" as const
    },
    {
      icon: Gamepad2,
      question: "What file types does VapR support?",
      answer: "VapR supports various game file formats including .zip archives, .lua scripts, .manifest files, and .st game files. The app automatically detects and handles each format appropriately.",
      badge: "Multi-Format",
      badgeVariant: "default" as const
    }
  ];

  return (
    <section id="faq" className="relative py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30" />
      <div className="container relative z-10 mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-primary border-primary/20 mb-4">
            Got Questions?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about VapR and how it enhances your gaming experience
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion 
          type="single" 
          collapsible 
          value={openItem}
          onValueChange={setOpenItem}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gradient-card border border-border/50 rounded-xl px-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 group-hover:text-primary transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <faq.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg font-semibold">{faq.question}</span>
                      <Badge variant={faq.badgeVariant} className="text-xs">
                        {faq.badge}
                      </Badge>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-6 pl-14">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;