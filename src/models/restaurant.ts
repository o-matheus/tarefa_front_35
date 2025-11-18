export interface Pratos {
    id: number;
    name: string;
    image: string;
    description: string;
}

export interface Restaurant {
    id: number;
    name: string;
    image: string;
    category?: string;
    info: string[];
    rating: string;
    description: string;
    pratos?: Pratos[];
}