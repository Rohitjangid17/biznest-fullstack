export interface Provider {
    _id: string;
    name: string;
    email: string;
    phone: string;
    serviceType: string;
    address: Address;
    status: string;
    rating: number;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
}
