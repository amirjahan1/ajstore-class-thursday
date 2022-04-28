import React,{Suspense }  from "react";

import {Routes , Route} from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer/footer";
import Loading from "./components/loading/loading";



const Home = React.lazy(() => import("./component-main/home"));
const Product = React.lazy(() => import("./component-main/product"));
const SpecialProduct = React.lazy(() => import("./component-main/special-product"));





function App() {

  return (
      <Suspense fallback={<Loading/>}>
          <Navbar/>

            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route exact path="/product/:name" element={<SpecialProduct/>}/>
            </Routes>

        <Footer/>
      </Suspense>
  );
}

export default App;
