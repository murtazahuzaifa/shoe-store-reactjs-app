import React from 'react';
import {Routes, Route} from 'react-router';

//importing components
import {Header, Footer} from './components';

//importing pages
import {Home, About, Products, ContactUs} from './pages';

function App(){
    return(
        <div>
            <Header/>
            <br/> <br/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Home' element={<Home/>} />
                <Route path='About' element={<About/>} />
                <Route path='Products' element={<Products/>} />
                <Route path='contactus' element={<ContactUs/>} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App