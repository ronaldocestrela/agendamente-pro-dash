import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Clock, DollarSign, Wrench } from "lucide-react";
import { useServices } from "@/lib/hooks/useServices";

const mockServices = [
  {
    id: '1',
    name: 'Limpeza Residencial Completa',
    description: 'Limpeza profunda de residências incluindo todos os cômodos',
    duration: '3 horas',
    price: 150.00,
    category: 'Limpeza',
    status: 'active'
  },
  {
    id: '2',
    name: 'Manutenção Elétrica Predial',
    description: 'Instalação e manutenção de sistemas elétricos',
    duration: '2 horas',
    price: 200.00,
    category: 'Elétrica',
    status: 'active'
  },
  {
    id: '3',
    name: 'Jardinagem e Paisagismo',
    description: 'Cuidados com jardins, poda e paisagismo',
    duration: '4 horas',
    price: 120.00,
    category: 'Jardinagem',
    status: 'inactive'
  },
  {
    id: '4',
    name: 'Pintura Residencial',
    description: 'Pintura interna e externa de residências',
    duration: '6 horas',
    price: 300.00,
    category: 'Pintura',
    status: 'active'
  }
];

const Servicos = () => {
  const getStatusBadge = (status: string) => {
    return status === 'active' 
      ? { variant: 'default' as const, label: 'Ativo' }
      : { variant: 'secondary' as const, label: 'Inativo' };
  };

  const { services, isLoadingServices } = useServices();

  const getCategoryColor = (category: string) => {
    const colors = {
      'Limpeza': 'bg-blue-100 text-blue-800',
      'Elétrica': 'bg-yellow-100 text-yellow-800',
      'Jardinagem': 'bg-green-100 text-green-800',
      'Pintura': 'bg-purple-100 text-purple-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  if (isLoadingServices) return <div>Carregando serviços...</div>;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Serviços</h1>
          <p className="text-muted-foreground">Gerencie o catálogo de serviços</p>
        </div>
        <Button className="hover-scale">
          <Plus className="h-4 w-4 mr-2" />
          Novo Serviço
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="shadow-soft">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar serviços..." 
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Todos
              </Button>
              <Button variant="outline" size="sm">
                Limpeza
              </Button>
              <Button variant="outline" size="sm">
                Elétrica
              </Button>
              <Button variant="outline" size="sm">
                Jardinagem
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* {mockServices.map((service) => {
          const statusConfig = getStatusBadge(service.status);
          
          return (
            <Card key={service.id} className="shadow-soft hover:shadow-elegant transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <Badge variant={statusConfig.variant} className="text-xs">
                        {statusConfig.label}
                      </Badge>
                    </div>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(service.category)}`}>
                      {service.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      R$ {service.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-4 w-4" />
                    <span>R$ {service.price.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Editar
                  </Button>
                  <Button size="sm" className="flex-1">
                    Agendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })} */}
        {services.map((service) => {
          const statusConfig = getStatusBadge(service.isActive ? 'active' : 'inactive');
          return (
            <Card key={service.id} className="shadow-soft hover:shadow-elegant transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <Badge variant={statusConfig.variant} className="text-xs">
                        {statusConfig.label}
                      </Badge>
                    </div>
                    {/* <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(service.category)}`}>
                      {service.category}
                    </span> */}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      R$ {service.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{service.durationInMinutes}</span>
                  </div>
                  {/* <div className="flex items-center space-x-1">
                    <DollarSign className="h-4 w-4" />
                    <span>R$ {service.price.toFixed(2)}</span>
                  </div> */}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Editar
                  </Button>
                  <Button size="sm" className="flex-1">
                    Agendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total de Serviços</p>
                <p className="text-2xl font-bold text-foreground">{services.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-success/10 rounded-full">
                <DollarSign className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Preço Médio</p>
                <p className="text-2xl font-bold text-foreground">
                  R$ {(services.reduce((acc, s) => acc + s.price, 0) / services.length).toFixed(2)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-warning/10 rounded-full">
                <Clock className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Serviços Ativos</p>
                <p className="text-2xl font-bold text-foreground">
                  {services.filter(s => s.isActive).length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Servicos;