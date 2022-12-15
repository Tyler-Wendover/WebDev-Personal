import session, { api } from './session'


export function createPostContent(title: string) {
    return api<string>(`gpt/${title}`, 'POST');
}

export interface Post {
    _id: string;
    username?: string;
    name?: string;
    title: string;
    content: string;
    date: string;
}