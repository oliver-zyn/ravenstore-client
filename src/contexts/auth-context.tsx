import { createContext, useEffect, useState } from 'react'
import { AuthService } from '@/service/auth-service'

interface AuthContextProps {
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<ResponseValues>
  logout: () => void
}

interface ResponseValues {
  status: number
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthService.isAuthenticated(),
  )

  useEffect(() => {
    setIsAuthenticated(AuthService.isAuthenticated())
  }, [])

  const login = async (email: string, password: string) => {
    const response: ResponseValues = await AuthService.login({ email, password })

    if (response.status === 200) {
      setIsAuthenticated(true)
    }

    return response
  }

  const logout = () => {
    AuthService.logout()
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
