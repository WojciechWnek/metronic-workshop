import { useOnboarding } from './useOnboarding'

export default function Onboarding() {
  const { user } = useOnboarding()
  return <div>Hello {user?.firstName}</div>
}
