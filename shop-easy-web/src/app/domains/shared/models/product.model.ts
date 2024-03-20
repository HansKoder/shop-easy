
export interface IProduct {
    id: number,    
    price: number,
    title: string,
    cover: string,
    createdAt: string,
    categories : ICategory[],
    images: string[],
}

export interface ICategory {
    id: number,
    description: string,
}