import Header from "../../Header/Header"
import Slider from "../Slider/slider";
import Products from "../Products/products";
import Footer from "../Footer/Footer";
import "../../main.css"


const app = () => {
    return  (  
    <div>
        <Header/>
        <Slider/>
        <Products/>
        <Footer/>   
    </div>
     );
}
 
export default app;