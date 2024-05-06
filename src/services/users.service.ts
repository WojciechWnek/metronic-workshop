import { get } from '@config/api'
import { endpoints } from '@config/endpoints'
import { User } from '@constants/types/users'

export const UsersService = {
  me: () => get(endpoints.users.me, { credentials: 'include' }).json() as Promise<User>,
}
