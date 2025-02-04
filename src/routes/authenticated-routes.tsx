import { DefaultLayout } from '@/layouts/default-layout'
import { AuthService } from '@/service/AuthService'
import { Navigate, useLocation } from 'react-router-dom'

export function AuthenticatedRoutes() {
  const isAuthenticated = AuthService.isAuthenticated()
  const location = useLocation()
  return isAuthenticated ? (
    <>
      <DefaultLayout />
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}
