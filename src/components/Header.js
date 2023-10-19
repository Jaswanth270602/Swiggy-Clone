
import {useState} from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
const Logo=()=>
{
    return (
        <a href="/" className="hi">
            <img className="image" alt="foodlogo" src="https://cdn.shopify.com/s/files/1/1404/9984/files/Swiggy_Logo.png?v=1593187390">
            </img>
        </a>
    )
}
const HeaderComponent=()=>
{
    const cartItems= useSelector((store)=>store.cart.items)
    const [isLogged,setIsLogged]=useState(false);
   return ( <div className="header">
        <Logo />
        <div className="navItems">
        <ul>
            <li ><Link to="/" className="nav-li">Home</Link></li>
            <li ><Link to="/about" className="nav-li">About</Link></li>
            <li ><Link to="/contact" className="nav-li">Contact</Link></li>
            <li ><Link to="/queries" className="nav-li">Queries</Link></li>

            <li ><Link to= "/cart" className="nav-li">Cart-{cartItems.length}</Link></li>


        </ul>
        {isLogged ? <button className="btns" onClick={()=>setIsLogged(false)}>LogOut</button> : <button className="btns" onClick={()=>setIsLogged(true)}>LogIn</button>}
        </div>
   </div>);
};

export default HeaderComponent;