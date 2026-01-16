import React, { lazy, Suspense } from 'react'
import Products from './Pages/Products/Products'
import Login from './Pages/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute'

const ProductDetails = lazy(
  () => import('./Pages/ProductDetails/ProductDetails'),
)
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path='/productdetails/:id'
          element={
            <ProtectedRoute>
              <Suspense fallback={<h2>Loading product details...</h2>}>
                <ProductDetails />
              </Suspense>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
