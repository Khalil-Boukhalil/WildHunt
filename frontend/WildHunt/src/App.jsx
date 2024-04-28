import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Header from './header';
import SearchBar from './SearchBar';
import Shop from './shop';
import MapComp from './map';
import Contact from './contact';
const App = () => {
    return (
       <div>
        <BrowserRouter>
        <Routes>
        <Route index element ={<Elements/>}/>
        <Route path='/Home' element={<Elements/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
        </BrowserRouter>
       </div>
    );
};
const Elements =() =>{
  return (
    <div>
    <Header/>
    <SearchBar/>
    <MapComp/>
    </div>
  );
}
const ShopPage=()=>{
  return (
    <div>
    <Header/>
    <Shop/>
    </div>
  );
}
const ContactPage=()=>{
return (
<div>
  <Header/>
  <Contact/>
</div>
)
}
export default App;
