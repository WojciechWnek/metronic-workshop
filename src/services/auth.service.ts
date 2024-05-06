import { post } from '@config/api'
import { endpoints } from '@config/endpoints'
import { Register, Verify } from '@constants/types/registration'

export const AuthService = {
  register: (data: Register) => post(endpoints.auth.register, { json: data }),
  verify: (data: Verify) => post(endpoints.auth.verify, { json: data }),
  login: (data: any) =>
    post(endpoints.auth.login, { json: data, cache: 'no-store', credentials: 'include' }),
}
