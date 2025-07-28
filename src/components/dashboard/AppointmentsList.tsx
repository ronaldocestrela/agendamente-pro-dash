import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, MapPin } from "lucide-react";

interface Appointment {
  id: string;
  clientName: string;
  service: string;
  time: string;
  location: string;
  status: 'confirmed' | 'pending' | 'completed';
}

const mockAppointments: Appointment[] = [
  {
    id: '1',
    clientName: 'Maria Silva',
    service: 'Limpeza Residencial',
    time: '09:00',
    location: 'Rua das Flores, 123',
    status: 'confirmed'
  },
  {
    id: '2',
    clientName: 'João Santos',
    service: 'Manutenção Elétrica',
    time: '14:30',
    location: 'Av. Brasil, 456',
    status: 'pending'
  },
  {
    id: '3',
    clientName: 'Ana Costa',
    service: 'Jardinagem',
    time: '16:00',
    location: 'Rua do Jardim, 789',
    status: 'confirmed'
  }
];

export function AppointmentsList() {
  const getStatusBadge = (status: Appointment['status']) => {
    const variants = {
      confirmed: { variant: 'default' as const, label: 'Confirmado' },
      pending: { variant: 'secondary' as const, label: 'Pendente' },
      completed: { variant: 'outline' as const, label: 'Concluído' }
    };
    
    return variants[status];
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-foreground">Próximos Agendamentos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockAppointments.map((appointment) => {
          const statusConfig = getStatusBadge(appointment.status);
          
          return (
            <div
              key={appointment.id}
              className="flex items-center space-x-4 p-4 bg-accent/50 rounded-lg transition-smooth hover:bg-accent"
            >
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {getInitials(appointment.clientName)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">
                    {appointment.clientName}
                  </p>
                  <Badge variant={statusConfig.variant}>
                    {statusConfig.label}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {appointment.service}
                </p>
                
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{appointment.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span className="truncate max-w-[200px]">{appointment.location}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}