import { HomePage } from '@/pages/home'
import { Route, Routes } from 'react-router-dom'
import { AuthenticatedRoutes } from './authenticated-routes'
import { LoginPage } from '@/pages/login'
import { DefaultLayout } from '@/layouts/default-layout'
import { SignUpPage } from '@/pages/signup'
import { DefaultAuthenticationLayout } from '@/layouts/default-authentication-layout'
import { Cart } from '@/pages/cart'
import { Checkout } from '@/pages/checkout'
import { AfterPayment } from '@/pages/after-payment'
import { Products } from '@/pages/products'
import { ProductPage } from '@/pages/product'

export function BaseRoutes() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductPage />} />

          <Route element={<DefaultAuthenticationLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>
        </Route>

        <Route element={<AuthenticatedRoutes />}>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/after-payment" element={<AfterPayment />} />
        </Route>
      </Routes>
    </>
  )
}
