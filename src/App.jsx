
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/About/about';
import { MyProvider } from './utils/contextProvider';
import { Footer } from './layouts/footer';
import { Header } from './layouts/header';
import { Shopp } from './pages/Shop/components/shopp';
import { Contactt } from './pages/contact/contactt';
import { Caart } from './pages/cart/caart';
import { Productsss } from './pages/products/productsss';

function App() {
  return (
    <MyProvider>
      <Header/>
   
      <Routes >
        <Route path='/home' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/shop' element={<Shopp/>}/>
        <Route path='/contact' element={<Contactt/>}/>
        <Route path='/cart' element={<Caart/>}/>
        <Route path='/products/:name' element={<Productsss/>}/>
      </Routes >
      {/* <Footer/> */}

    </MyProvider>

  );
}
export default App;
