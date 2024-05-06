export const endpoints = {
  auth: {
    register: 'api/auth/register/',
    verify: 'api/auth/verify/',
    login: 'api/auth/login/',
  },
  companies: {
    all: 'api/companies/',
    single: (id: string) => `api/companies/${id}`,
  },
  companiesRegistry: {
    all: 'api/companies-registry/',
  },
  users: {
    me: 'api/users/me/',
  },
} as const
