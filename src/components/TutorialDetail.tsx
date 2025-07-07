import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TutorialDetailProps {
  isOpen: boolean;
  onClose: () => void;
  tutorial: {
    id: string;
    title: string;
    icon: string;
    content: {
      overview: string;
      keyPoints: string[];
      tips: string[];
      warning?: string;
    };
  } | null;
}

export const TutorialDetail = ({ isOpen, onClose, tutorial }: TutorialDetailProps) => {
  if (!tutorial) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto mx-4 w-[calc(100vw-2rem)] sm:w-full">
        <DialogHeader className="pb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-2xl">{tutorial.icon}</span>
            </div>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-foreground">
              {tutorial.title}
            </DialogTitle>
          </div>
          <Badge className="w-fit">Pet Care Guide</Badge>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Overview */}
          <div className="bg-gradient-card p-4 rounded-lg border border-border/50">
            <h3 className="text-lg font-semibold text-foreground mb-2">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{tutorial.content.overview}</p>
          </div>

          {/* Key Points */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Key Points</h3>
            <div className="space-y-3">
              {tutorial.content.keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-card/50 rounded-lg border border-border/30">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tips */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Pro Tips</h3>
            <div className="space-y-2">
              {tutorial.content.tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <span className="text-accent text-lg">💡</span>
                  <p className="text-muted-foreground leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Warning if exists */}
          {tutorial.content.warning && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-destructive text-lg">⚠️</span>
                <div>
                  <h4 className="font-semibold text-destructive mb-1">Important Note</h4>
                  <p className="text-muted-foreground leading-relaxed">{tutorial.content.warning}</p>
                </div>
              </div>
            </div>
          )}

          <Button 
            variant="default" 
            className="w-full py-3 text-lg font-semibold" 
            onClick={onClose}
          >
            Got it, thanks!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};