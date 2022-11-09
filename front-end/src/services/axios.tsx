import axios from 'axios';

export const baseURL = 'http://localhost:5050/articles';

export const api = axios.create({ baseURL });