import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Home from './pages/Home/Home';
import PageProducts from './pages/Products/Products';
import UserPage from './pages/Users/User';
import ErrorPage from './pages/Error/Error';
import AllProductsPage from './pages/AllProducts/AllProducts';
import ProductPage from './pages/Product/ProductPage';
import Login from './pages/Login/login.page';

//context
import ProductProvider from './store/product';

//theme
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';
import { GlobalStyle } from './theme/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme()}>
      <GlobalStyle/>
        <ProductProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/products' element={<PageProducts/>}/>
              <Route path='/user' element={<UserPage/>}/>
              <Route path='*' element={<ErrorPage/>}/>
              <Route path='/allproducts' element={<AllProductsPage/>}/>
              <Route path='/product/:id' element={<ProductPage/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
          </BrowserRouter>
        </ProductProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
