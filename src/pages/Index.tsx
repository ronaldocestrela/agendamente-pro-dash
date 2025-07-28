import { Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { AppointmentsList } from "@/components/dashboard/AppointmentsList";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { CalendarWidget } from "@/components/dashboard/CalendarWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-card border-b shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground">Gerencie seus agendamentos de serviços</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">
                {new Date().toLocaleDateString('pt-BR', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Agendamentos Hoje"
            value={12}
            icon={Calendar}
            trend={{ value: 8.2, isPositive: true }}
            variant="default"
          />
          <MetricCard
            title="Pendentes"
            value={5}
            icon={Clock}
            trend={{ value: -2.1, isPositive: false }}
            variant="warning"
          />
          <MetricCard
            title="Concluídos"
            value={28}
            icon={CheckCircle}
            trend={{ value: 12.5, isPositive: true }}
            variant="success"
          />
          <MetricCard
            title="Cancelados"
            value={2}
            icon={AlertCircle}
            trend={{ value: -50, isPositive: true }}
            variant="default"
          />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <AppointmentsList />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <QuickActions />
            <CalendarWidget />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;