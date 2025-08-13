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

export type { User, Service };