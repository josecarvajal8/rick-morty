/* eslint-disable prettier/prettier */
interface Origin {
    name: string;
    url: string
}

export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: 'Alive' | 'Dead' | 'unknown';
    gender: 'Male' | 'Female' | 'unknown' | 'Genderless';
    origin: Origin;
    location: Origin;
    image: string;
    episode: Array<string>;
    url: string;
    created: string;
}

export interface ResInfo {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface PaginatedResponse<T> {
    info: ResInfo;
    results: T;
}
