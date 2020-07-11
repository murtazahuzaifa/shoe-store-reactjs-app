import React from 'react';
import { Routes, Route } from 'react-router';

//importing components
import { Header, Footer } from './components';

//importing pages
import { Home, About, Products, ProductsIndex, ProductDetails, PageNotFound } from './pages';

function App() {
    return (
        <div>
            <Header />
            <br /> <br />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Home' element={<Home />} />
                <Route path='About' element={<About />} />
                <Route path='Products' element={<Products />}>
                    <Route path='/' element={<ProductsIndex />} />
                    <Route path=':productId' element={<ProductDetails />} />
                </Route>
                <Route path='*' element={<PageNotFound/>} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App