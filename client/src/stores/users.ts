import session, { api } from './session'

export function getUsers() {
    return api<ListEnvelope<User>>('users');
}

export function getUser(id: string) {
    return api<User>(`users/${id}`);
}   

export function createUser(user: User) {
    return api<User>('users', user, 'POST');
}

export function deleteUser(id: string) {
    return api<User>(`users/${id}`, {}, 'DELETE');
}

export interface ListEnvelope<T> {
    users: T[]
}

export interface User {
    _id: string;
    username: string;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

export default {
    getUsers,
    getUser,
    createUser,
    deleteUser
}