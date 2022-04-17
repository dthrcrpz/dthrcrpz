import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.PUBLIC_API_URL
})