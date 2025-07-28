import { useState } from "react";
import { 
  Home, 
  Users, 
  Wrench, 
  Package, 
  Calendar,
  Settings,
  ChevronLeft,
  ChevronRight,
  Menu
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Clientes", url: "/clientes", icon: Users },
  { title: "Serviços", url: "/servicos", icon: Wrench },
  { title: "Produtos", url: "/produtos", icon: Package },
  { title: "Agendamentos", url: "/agendamentos", icon: Calendar },
  { title: "Configurações", url: "/configuracoes", icon: Settings },
];

interface AppSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function AppSidebar({ collapsed, onToggle }: AppSidebarProps) {
  return (
    <div className={cn(
      "transition-all duration-300 border-r shadow-soft bg-card",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="flex flex-col h-full p-4">
        {/* Logo/Brand */}
        <div className={cn("mb-6", collapsed ? "text-center" : "")}>
          {collapsed ? (
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mx-auto">
              <Calendar className="h-4 w-4 text-primary-foreground" />
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Calendar className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">ServiceApp</h2>
                <p className="text-xs text-muted-foreground">Gestão de Serviços</p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          {!collapsed && (
            <h3 className="text-muted-foreground mb-2 text-sm font-medium">
              Navegação
            </h3>
          )}

          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.url}
                  end
                  className={({ isActive }) =>
                    cn(
                      "flex items-center w-full p-3 rounded-lg transition-all duration-200 hover-scale",
                      collapsed ? "justify-center" : "justify-start",
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-soft" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    )
                  }
                >
                  <item.icon className={cn("h-5 w-5", !collapsed && "mr-3")} />
                  {!collapsed && (
                    <span className="font-medium animate-fade-in">
                      {item.title}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Collapse/Expand Button */}
        <div className="mt-auto pt-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className={cn(
              "w-full hover-scale",
              collapsed ? "px-0 justify-center" : "justify-start"
            )}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <>
                <ChevronLeft className="h-4 w-4 mr-2" />
                <span>Recolher</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}