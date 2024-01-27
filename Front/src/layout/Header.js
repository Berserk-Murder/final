import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/LogoHouse.png";
import useAuth from "../hooks/useAuth";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const { signout, signed } = useAuth();

  const handleSignOut = () => {
    signout();

    navigate("/");
  };

  return (
    <div>
    <nav className="navbar navbar-expand-lg  fixed-top  navH">
      <div className="container-fluid">
          <a className="navbar-brand" href='/'>
            <img src={Logo} width="110" height="50" id="LogoHouse"></img>
          </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" me-2 navT" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="nav-menu">
            <li>
              <Link className="tx" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="tx" to="/contato">
                Contato
              </Link>
            </li>
            <li >
              <Link className="tx " to="/sobre">
                Sobre
              </Link>
            </li>
            <li>
              <Link className="tx" to="/mpubli">
                Minhas Publis
              </Link>
              </li>
              {signed ? (
            <button
              className="btn btn-danger ms-auto mb-2"
              onClick={handleSignOut}
            >
              <i className="bi bi-person"></i>
              &nbsp;Sair
            </button>
          ) : (
            <Link className="Login" to="/login">
              <i className="bi bi-person"></i>
              &nbsp;Login
            </Link>
          )}
          </ul>
        </div>
      </div>
    </nav>
  </div>
);
}

export default Header;