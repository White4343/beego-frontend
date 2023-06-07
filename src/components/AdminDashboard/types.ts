export interface IProduct {
    title: string
    description: string
    price: number,
    imageFile: {
        file: string
        rawFile: File
        title: string
    }
    imageUrl: string
}

export interface IUser {
    fullName: string;
    email: string;
    passwordHash: string;
    role: 'user' | 'admin';
    cart: {
        items: [];
    };
}