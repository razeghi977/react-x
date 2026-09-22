import Slider from "../Slider/slider";
import Products from "../Products/products";
import Footer from "../Footer/footer";
import MegaMenu from "../MegaMenu/MegaMenu";

import "../../main.css"


const app = () => {
    return  (  
    <div>
        <MegaMenu/>
        <Slider/>
        <Products/>
        <Footer/>   
    </div>
     );
}
 
export default app;