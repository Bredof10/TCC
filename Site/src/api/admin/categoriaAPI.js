import { API_URL } from '../config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function listarCategorias() {
    const v = await api.get('/admin/categoria');
    return v.data;
}