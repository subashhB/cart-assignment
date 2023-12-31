import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to='/'>
            <h1>Cart Assignment </h1>
        </Link>
        <nav>
            <div className="cart-navlink">
                <Link to='/cart'>Cart</Link>
            </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
