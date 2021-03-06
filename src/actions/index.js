import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = "http://reduxblog.herokuapp.com/api/";
const API_KEY = '?key=randomStringChars2606';

export function fecthPosts() {
    let url = `${ROOT_URL}/posts${API_KEY}`;

    const request = axios.get(url);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}



export function createPost(props) {
    let url = `${ROOT_URL}/posts${API_KEY}`;

    const request = axios.post(url, props);

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id) {
    let url = `${ROOT_URL}/posts/${id}${API_KEY}`;

    const request = axios.get(url);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id) {
    let url = `${ROOT_URL}/posts/${id}${API_KEY}`;
    const request = axios.delete(url);

    return {
        type: DELETE_POST,
        payload: request
    };
}