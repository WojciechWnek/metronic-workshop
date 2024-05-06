import ky from 'ky'

const config = {
  prefixUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/',
}

export const http = ky.create(config)

const { get, post, put, patch, delete: destroy } = http
export { destroy, get, patch, post, put }
