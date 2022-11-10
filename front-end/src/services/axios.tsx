import axios from 'axios'

export const baseURL = 'http://localhost:5050'

export const api = axios.create({ baseURL })
