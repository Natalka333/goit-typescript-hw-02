export interface Image {
    id: number,
    alt_description: string,
    color: string,
    urls: {
        small: string,
        regular: string,
    },
    likes: number,
}

