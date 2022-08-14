export interface IShow {
    name: string;
    image: string[];
    images: string[];
    icon?: string;
    linkname?: string;
    shows?: Show[];
}

interface Show {
    name: string;
    images: string[]
}