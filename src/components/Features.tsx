import { 
  Download, 
  Settings, 
  Gamepad2, 
  MessageSquare, 
  RefreshCw, 
  Pin 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Download,
      title: "Drag & Drop Installation",
      description: "Simply drag and drop your game files to install them instantly into your Steam library."
    },
    {
      icon: Settings,
      title: "Game Management",
      description: "Manage your custom games with our intuitive uninstall helper and library tracker."
    },
    {
      icon: Gamepad2,
      title: "Steam Integration",
      description: "Launch, restart, and control your Steam client directly from VapR with seamless integration."
    },
    {
      icon: MessageSquare,
      title: "Discord Rich Presence",
      description: "Show your VapR activity on Discord with customizable rich presence integration."
    },
    {
      icon: RefreshCw,
      title: "Automatic Updates",
      description: "Stay up to date with the latest features through our automatic update system."
    },
    {
      icon: Pin,
      title: "Always On Top",
      description: "Keep VapR accessible with our always-on-top window that stays within reach."
    }
  ];

  return (
    <section id="features" className="relative py-24 px-4">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            We have lots of cool features
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the power of a modern Steam utility combined with advanced functionality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;