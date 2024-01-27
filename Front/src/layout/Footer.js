import "./Footer.css";
import Logo from "../img/LogoHouse.png";
import twitter from '../img/twitter-logo-24.png';
import insta from '../img/instagram-logo-24.png';
import linkedin from '../img/linkedin-square-logo-24.png';
import github from '../img/github-logo-24.png';
import gmail from '../img/gmail-logo-24.png';
import 'boxicons'

function Footer() {
  return (
    <div className="footer">
      <div className="sb_footer section_padding footerC">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
          <a className="navbar-brand" href="#">
            <img src={Logo} width="110" height="50" id="LogoHouse"></img>
          </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>WEB</h4>
            <a href="/Contato">
              <p>CONTATO</p>
            </a>
            <a href="/Sobre">
              <p>SOBRE</p>
            </a>
            <a href="/resource">
              <p>MINHAS PUBLIS</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>DESENVOLVIDO POR</h4>
            <a href="/employer">
              <p>KARLLOS ADRIANO</p>
            </a>
            <a href="/employer">
              <p>MATHEUS MARTINS</p>
            </a>
            <a href="/employer">
              <p>NIKOLAS GOMES</p>
            </a>
            <a href="/employer">
              <p>MARCUS</p>
            </a>
            <a href="/employer">
              <p>FEITOSA</p>
            </a>
            <a href="/employer">
              <p>GABRIELLY</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Teste4</h4>
            <a href="/employer">
              <p>Sobre</p>
            </a>
            <a href="/employer">
              <p>Press</p>
            </a>
            <a href="/employer">
              <p>Career</p>
            </a>
            <a href="/employer">
              <p>Contato</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>CONTATOS</h4>
            <h6>KARLLOS</h6>
            <div className="socialmedia">
              <p><a rel="noreferrer noopener" href="https://www.instagram.com/karlloss.adriano/" target="_blank"><img src={insta} alt=""/></a></p>
              <p><img src={linkedin} alt=""/></p>
              <p><a rel="noreferrer noopener" href="https://github.com/Karllos-DEV" target="_blank"><img src={github} alt=""/></a></p>
              <p><a rel="noreferrer noopener" href="mailto:karllosadriano.of@gmail.com" target="_blank"><img src={gmail} alt=""/></a></p>
            </div>
            <h6>MATHEUS</h6>
            <div className="socialmedia">
              <p><a rel="noreferrer noopener" href="https://www.instagram.com/matheus_knittell/" target="_blank"><img src={insta} alt=""/></a></p>
              <p><a rel="noreferrer noopener" href="https://www.linkedin.com/in/matheus-martins-864a38285/" target="_blank"><img src={linkedin} alt=""/></a></p>
              <p><a rel="noreferrer noopener" href="https://github.com/MatheusOharah" target="_blank"><img src={github} alt=""/></a></p>
              <p><a rel="noreferrer noopener" href="mailto:matheusmartins031102@gmail.com" target="_blank"><img src={gmail} alt=""/></a></p>
            </div>
            <h6>NIKOLAS</h6>
            <div className="socialmedia">
              <p><img src={insta} alt=""/></p>
              <p><img src={linkedin} alt=""/></p>
              <p><a rel="noreferrer noopener" href="https://github.com/NikolasGomess" target="_blank"><img src={github} alt=""/></a></p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              @{new Date().getFullYear()} CodeInn. All right reserved.
            </p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/privacy"><div><p>Privacy</p></div></a>
            <a href="/security"><div><p>Security</p></div></a>
            <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;