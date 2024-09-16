import { ReactNode } from "react";

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


export interface FetchImagesResponse {
    results: Image[];
    total: number;
    total_pages: number;
}

export interface SearchBarProps {
    onSubmit: (query: string) => void,
}

export interface ImageCardProps {
    alt_description: string,
    color: string,
    urls: {
        small: string,
        regular: string,
    },
    likes: number,
    openModal: (urls: string, alt: string, likes: number) => void,
}

export interface ImageGalleryProps {
    images: Image[],
    openModal: (urls: string, alt: string) => void,
}

export interface ImageModalProps {
    urls: string,
    alt_description: string,
    isOpen: boolean;

    onRequestClose: () => void,
}

export interface LoadMoreBtnProps {
    children?: React.ReactNode,
    onClick: () => void,
    disabled: boolean,
}