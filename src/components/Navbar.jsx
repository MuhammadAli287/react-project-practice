
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="flex justify-between p-6 items-center">
            <div className="text-2xl font-bold">M4k Holdings</div>
            <nav className="flex gap-10">
                
                <Link to='/'>Home</Link>
                 <Link to='about'>About</Link>
                  <Link to='/products'>Product</Link>
                   <Link to='/store'>Store</Link>
            </nav>
            <div className="text-2xl px-4 py-1 bg-amber-200 rounded-lg ">Hello</div>
        </div>
    )
}

export default Navbar;