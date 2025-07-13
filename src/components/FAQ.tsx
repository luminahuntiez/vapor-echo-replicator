import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is VapR really free?",
      answer: "Yes! VapR is completely free to use. We believe in providing powerful Steam utilities without any cost to our users."
    },
    {
      question: "Is VapR safe to use?",
      answer: "Absolutely! While VapR is not open source, it has been thoroughly tested and is completely safe to use. We prioritize user security and privacy."
    },
    {
      question: "How do I install games with VapR?",
      answer: "Simply drag and drop your game files (.zip, .lua, .manifest, or .st files) onto the VapR window. The application will automatically process and integrate them with your Steam installation."
    },
    {
      question: "Can I uninstall games added through VapR?",
      answer: "Yes! VapR includes an uninstall helper that allows you to easily remove games that were added through the application, including all associated files."
    },
    {
      question: "Does VapR work with Discord?",
      answer: "Yes! VapR features Discord Rich Presence integration that can display your activity and provide quick access buttons for enhanced social gaming."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about VapR
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border/50 rounded-lg px-6 hover:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
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