
import { Progress } from "@/components/ui/progress";

interface ProgressItemProps {
  label: string;
  progress: number;
  target?: string;
  status?: string;
}

export function ProgressItem({ label, progress, target, status }: ProgressItemProps) {
  return (
    <div className="space-y-1 mb-4">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        {target && <span className="text-muted-foreground">{target}</span>}
      </div>
      <Progress value={progress} className="h-2" />
      {status && (
        <div className="text-xs text-muted-foreground mt-1">
          {status}
        </div>
      )}
    </div>
  );
}
