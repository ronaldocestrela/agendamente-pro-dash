import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: 'default' | 'success' | 'warning';
}

export function MetricCard({ title, value, icon: Icon, trend, variant = 'default' }: MetricCardProps) {
  const variantStyles = {
    default: "border-l-primary bg-gradient-subtle",
    success: "border-l-success bg-green-50/50",
    warning: "border-l-warning bg-orange-50/50"
  };

  const iconStyles = {
    default: "text-primary bg-primary/10",
    success: "text-success bg-success/10", 
    warning: "text-warning bg-warning/10"
  };

  return (
    <Card className={`border-l-4 shadow-soft transition-smooth hover:shadow-elegant ${variantStyles[variant]}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
            {trend && (
              <div className={`flex items-center text-sm ${trend.isPositive ? 'text-success' : 'text-destructive'}`}>
                <span>{trend.isPositive ? '+' : ''}{trend.value}%</span>
                <span className="text-muted-foreground ml-1">vs. mês anterior</span>
              </div>
            )}
          </div>
          <div className={`p-3 rounded-full transition-smooth ${iconStyles[variant]}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}