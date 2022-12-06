import session, { api } from './session'

export function getPosts() {
    return api<ListEnvelope<Post>>('posts');
}

export function getPost(id: string) {
    return api<Post>(`posts/${id}`);
}

export function createPost(post: Post) {
    return api<Post>('posts', post, 'POST');
}

export function deletePost(id: string) {
    return api<Post>(`posts/${id}`, {}, 'DELETE');
}

export interface ListEnvelope<T> {
    posts: T[]
}

export interface Post {
    _id: string;
    username?: string;
    name?: string;
    title: string;
    content: string;
    date: string;
}

export default {
    getPosts,
    getPost,
    createPost,
    deletePost
}
