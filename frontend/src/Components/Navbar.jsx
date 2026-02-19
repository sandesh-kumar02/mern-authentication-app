import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="container bg-success p-3">
          <div className="row">
            <div className="col">
              <NavLink
                className="p-3"
                to="/"
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "red" : "",
                    color: isActive ? "white" : "white",
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "none" : "",
                  };
                }}
              >
                Home
              </NavLink>
              <NavLink className="p-3"
                to="/signup"
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "red" : "",
                    color: isActive ? "white" : "white",
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "none" : "",
                  };
                }}
              >
                Signup
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
