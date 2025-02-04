import { HomePage } from '@/pages/home'
import { Route, Routes } from 'react-router-dom'
import { AuthenticatedRoutes } from './authenticated-routes'
import { LoginPage } from '@/pages/login'
import { DefaultLayout } from '@/layouts/default-layout'
import { SignUpPage } from '@/pages/signup'
import { DefaultAuthenticationLayout } from '@/layouts/default-authentication-layout'

export function BaseRoutes() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />

          <Route element={<DefaultAuthenticationLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>
        </Route>

        <Route element={<AuthenticatedRoutes />}></Route>
      </Routes>
    </>
  )
}
