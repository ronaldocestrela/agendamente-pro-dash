import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Package, DollarSign, AlertTriangle } from "lucide-react";

const mockProducts = [
  {
    id: '1',
    name: 'Detergente Multiuso Premium',
    description: 'Detergente concentrado para limpeza geral',
    category: 'Produtos de Limpeza',
    price: 25.90,
    stock: 45,
    minStock: 10,
    supplier: 'Fornecedor ABC',
    status: 'active'
  },
  {
    id: '2',
    name: 'Cabo Elétrico 2.5mm',
    description: 'Cabo flexível para instalações elétricas',
    category: 'Material Elétrico',
    price: 8.50,
    stock: 120,
    minStock: 20,
    supplier: 'Elétrica XYZ',
    status: 'active'
  },
  {
    id: '3',
    name: 'Adubo Orgânico 5kg',
    description: 'Adubo natural para plantas e jardins',
    category: 'Jardinagem',
    price: 35.00,
    stock: 5,
    minStock: 15,
    supplier: 'Garden Supply',
    status: 'active'
  },
  {
    id: '4',
    name: 'Tinta Acrílica Branca 18L',
    description: 'Tinta lavável para paredes internas',
    category: 'Tintas',
    price: 89.90,
    stock: 28,
    minStock: 5,
    supplier: 'Tintas Brasil',
    status: 'active'
  }
];

const Produtos = () => {
  const getStockStatus = (stock: number, minStock: number) => {
    if (stock <= minStock) {
      return { variant: 'destructive' as const, label: 'Estoque Baixo', icon: AlertTriangle };
    }
    return { variant: 'default' as const, label: 'Em Estoque', icon: Package };
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Produtos de Limpeza': 'bg-blue-100 text-blue-800',
      'Material Elétrico': 'bg-yellow-100 text-yellow-800',
      'Jardinagem': 'bg-green-100 text-green-800',
      'Tintas': 'bg-purple-100 text-purple-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const totalValue = mockProducts.reduce((acc, product) => acc + (product.price * product.stock), 0);
  const lowStockItems = mockProducts.filter(p => p.stock <= p.minStock).length;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Produtos</h1>
          <p className="text-muted-foreground">Gerencie seu estoque de produtos</p>
        </div>
        <Button className="hover-scale">
          <Plus className="h-4 w-4 mr-2" />
          Novo Produto
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <Package className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Produtos</p>
                <p className="text-xl font-bold text-foreground">{mockProducts.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-success/10 rounded-full">
                <DollarSign className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Valor Total</p>
                <p className="text-xl font-bold text-foreground">R$ {totalValue.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-warning/10 rounded-full">
                <AlertTriangle className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Estoque Baixo</p>
                <p className="text-xl font-bold text-foreground">{lowStockItems}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-accent/50 rounded-full">
                <Package className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Categorias</p>
                <p className="text-xl font-bold text-foreground">
                  {new Set(mockProducts.map(p => p.category)).size}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="shadow-soft">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar produtos..." 
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Todos
              </Button>
              <Button variant="outline" size="sm">
                Estoque Baixo
              </Button>
              <Button variant="outline" size="sm">
                Limpeza
              </Button>
              <Button variant="outline" size="sm">
                Elétrico
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockProducts.map((product) => {
          const stockStatus = getStockStatus(product.stock, product.minStock);
          
          return (
            <Card key={product.id} className="shadow-soft hover:shadow-elegant transition-all duration-300 hover-scale">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(product.category)}`}>
                      {product.category}
                    </span>
                  </div>
                  <Badge variant={stockStatus.variant} className="text-xs">
                    <stockStatus.icon className="h-3 w-3 mr-1" />
                    {stockStatus.label}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      R$ {product.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-foreground">
                      {product.stock} un.
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Mín: {product.minStock}
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <strong>Fornecedor:</strong> {product.supplier}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Editar
                  </Button>
                  <Button size="sm" className="flex-1">
                    Repor
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Produtos;