type User = {
    id: string;
    email: string;
    name: string;
    lastName: string;
    imageUrl?: string;
    roleName?: string;
}

type Service = {
    id: string,
    description: string,
    durationInMinutes: number,
    isActive: boolean,
    isDeleted: boolean,
    companyId: string,
    name: string,
    price: number
}

type ListCliente = {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
}

type CreateClient = {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    birthDate: string;
    address: string;
    cpf: string;
    isActive?: boolean;
}

export type { User, Service, ListCliente, CreateClient };