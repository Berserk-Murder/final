import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MPubli from "../pages/MPubli";
import Coment from "../pages/Coment";
import Registro from "../pages/Registro";
import Editar from "../pages/Editar";
import ContactPage from "../pages/ContactPage";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/:id" element={<Private Item={Editar} />} />
          <Route exact path="/mpubli" element={<Private Item={MPubli} />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/cancel" element={<MPubli />} />
          <Route path="/sobre" element={<ContactPage />} />
          <Route path="/confirm" element={<MPubli />} />
          <Route path="/coment" element={<Coment />} />
          <Route path="/coment/:id" element={<Coment />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
