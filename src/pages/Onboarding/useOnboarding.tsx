import { User } from '@constants/types/users'
import { UsersService } from '@services/users.service'
import { useEffect, useState } from 'react'

export const useOnboarding = () => {
  const [user, setUser] = useState<User>()
  useEffect(() => {
    UsersService.me()
      .then((response) => {
        setUser(response)
        console.log(response)
      })
      .catch((error: any) => {
        console.log(error)
      })
  }, [])
  return { user }
}
