import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Calendar, Users, Settings } from "lucide-react";

export function QuickActions() {
  const actions = [
    {
      icon: Plus,
      label: 'Novo Agendamento',
      variant: 'default' as const,
      onClick: () => console.log('Novo agendamento')
    },
    {
      icon: Calendar,
      label: 'Ver Calendário',
      variant: 'outline' as const,
      onClick: () => console.log('Ver calendário')
    },
    {
      icon: Users,
      label: 'Clientes',
      variant: 'outline' as const,
      onClick: () => console.log('Clientes')
    },
    {
      icon: Settings,
      label: 'Configurações',
      variant: 'outline' as const,
      onClick: () => console.log('Configurações')
    }
  ];

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-foreground">Ações Rápidas</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant={action.variant}
            className="flex flex-col h-20 gap-2 transition-smooth hover:shadow-soft"
            onClick={action.onClick}
          >
            <action.icon className="h-5 w-5" />
            <span className="text-xs font-medium">{action.label}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}