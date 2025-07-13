import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageSquare, X } from "lucide-react";

const DiscordModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Discord Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full w-14 h-14 shadow-2xl"
          size="icon"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>

      {/* Discord Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#5865F2] rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-white" />
                </div>
                <DialogTitle className="text-xl font-semibold text-foreground">
                  Join Our Discord!
                </DialogTitle>
              </div>
            </div>
          </DialogHeader>
          
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Connect with the VapR community! Get support, share feedback, and stay updated 
              with the latest news and features.
            </p>
            
            <div className="flex space-x-3">
              <Button 
                className="flex-1 bg-[#5865F2] hover:bg-[#4752C4] text-white"
                onClick={() => {
                  window.open('https://discord.gg/vapr', '_blank');
                  setIsOpen(false);
                }}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Join Discord
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setIsOpen(false)}
                className="border-border hover:bg-muted"
              >
                Maybe Later
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DiscordModal;