import { atom } from "jotai";

export interface User {
    name: string;
    isAuthenticated: boolean;    
}

export const userAtom = atom<User>({
    name: "",
    isAuthenticated: false
});