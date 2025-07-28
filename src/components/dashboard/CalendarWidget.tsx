import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function CalendarWidget() {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const today = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  // Mock data for appointments
  const appointmentDays = [3, 7, 12, 15, 18, 22, 25, 28];
  
  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const isToday = (day: number) => {
    return today.getDate() === day && 
           today.getMonth() === currentMonth && 
           today.getFullYear() === currentYear;
  };

  const hasAppointment = (day: number) => {
    return appointmentDays.includes(day);
  };

  const renderCalendarDays = () => {
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-8"></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div
          key={day}
          className={`
            h-8 w-8 rounded-full flex items-center justify-center text-sm relative cursor-pointer transition-smooth
            ${isToday(day) ? 'bg-primary text-primary-foreground font-semibold' : 'hover:bg-accent'}
            ${hasAppointment(day) && !isToday(day) ? 'bg-accent text-accent-foreground' : ''}
          `}
        >
          {day}
          {hasAppointment(day) && (
            <div className="absolute -bottom-1 -right-1">
              <Badge variant="secondary" className="h-2 w-2 p-0 text-xs"></Badge>
            </div>
          )}
        </div>
      );
    }
    
    return days;
  };

  return (
    <Card className="shadow-soft">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-foreground">
            {monthNames[currentMonth]} {currentYear}
          </CardTitle>
          <div className="flex space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateMonth('prev')}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateMonth('next')}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Days of week header */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
              <div key={day} className="text-xs font-medium text-muted-foreground p-2">
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {renderCalendarDays()}
          </div>
          
          {/* Legend */}
          <div className="flex items-center justify-center space-x-4 pt-3 border-t">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-primary"></div>
              <span className="text-xs text-muted-foreground">Hoje</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-accent relative">
                <Badge variant="secondary" className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 p-0"></Badge>
              </div>
              <span className="text-xs text-muted-foreground">Com agendamentos</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}