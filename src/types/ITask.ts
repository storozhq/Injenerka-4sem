import { Employee } from './IEmployee'

export interface Task {
    id?: number;
    name: string;
    surname: string;
    age: number;
    club: number[]
}

export interface Pages{
    count: number;
    next: string | null;
    previous: string | null;
}