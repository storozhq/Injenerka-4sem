import { Employee } from './IEmployee';
export interface Group{
    id?: number;
    training: string;
    description: string;
    datetime: string;
    personal: number[];
    club: number[];
}