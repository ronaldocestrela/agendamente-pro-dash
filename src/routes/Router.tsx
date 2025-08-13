import { createBrowserRouter } from "react-router";
import RequireAuth from "./RequiredAuth";
import Index from "@/pages/Index";
import Clientes from "@/pages/Clientes";
import Servicos from "@/pages/Servicos";
import Produtos from "@/pages/Produtos";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import Login from "@/pages/Login";
import App from "@/App";
import Register from "@/pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        element: <DashboardLayout><RequireAuth /></DashboardLayout>,
        children: [
          { index: true, element: <Index /> },
          { path: "clientes", element: <Clientes /> },
          { path: "servicos", element: <Servicos /> },
          { path: "produtos", element: <Produtos /> },
        ]
      },
    ]
    // errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
])