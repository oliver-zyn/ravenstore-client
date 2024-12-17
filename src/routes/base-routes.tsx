import { HomePage } from '@/pages/home'
import { Route, Routes } from 'react-router-dom'
import { AuthenticatedRoutes } from './authenticated-routes'
import LoginPage from '@/pages/login'
import { DefaultLayout } from '@/layouts/default-layout'
import SignUpPage from '@/pages/signup'

export function BaseRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
        </Route>

        <Route element={<AuthenticatedRoutes />}></Route>
      </Routes>
    </>
  )
}
