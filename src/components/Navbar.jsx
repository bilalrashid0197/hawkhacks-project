import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = {
    color: 'green', // Change color based on your design preferences
    fontWeight: 'bold'
  };
  return (
    <header className="mb-5 ">
      <div className="flex justify-between items-end px-5 pt-5 pb-1">
        {/* TITLE */}
        <div className="font-bold text-2xl text-white">
          <Link to ="/">
            <p className="align-bottom">Brain Matter</p>
          </Link>
        </div>
        {/* Navigation Items */}
        <div className="flex gap-10 justify-end text-lg text-white">
          <NavLink className={({ isActive }) => isActive ? "text-green-500 font-bold hover:underline" : "hover:underline"} to="/home">Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-green-500 font-bold hover:underline" : "hover:underline"}>About</NavLink>
          <NavLink to="/forum" className={({ isActive }) => isActive ? "text-green-500 font-bold hover:underline" : "hover:underline"}>Forum</NavLink>
          <NavLink to="/brain" className={({ isActive }) => isActive ? "text-green-500 font-bold hover:underline" : "hover:underline"}>Brain</NavLink>
        </div>
      </div>
    </header>
  )
};

export default Navbar;