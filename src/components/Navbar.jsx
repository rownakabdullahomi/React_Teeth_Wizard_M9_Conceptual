import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      id="navbar"
      className="min-h-20 bg-blue-950 flex text-white justify-between items-center"
    >
      <div>
        <h1 className="text-xl font-extrabold ml-4">TEETH WIZARD</h1>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allTreatments" className="ml-4">
          All Treatments
        </NavLink>
        <NavLink to="/myAppointments" className="ml-4">
          My Appointments
        </NavLink>
        <NavLink to="/profile" className="ml-4">
          Profile
        </NavLink>
      </div>
      <div>
        <button className="btn btn-accent mr-4">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
