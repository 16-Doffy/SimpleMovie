import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
        <NavLink to="/" className={({isActive}) => (isActive ? "text-pink-500" : "")}>Home</NavLink>
        
        <NavLink to="/movies" className={({isActive}) => (isActive ? "text-pink-500" : "")}>Movies</NavLink>
      </header>
    </div>
  );
};

export default Header;
