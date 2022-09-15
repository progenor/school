import sty from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={sty.footer_main}>
        <p>
          Created by:{" "}
          <span>
            <a href="https://github.com/progenor">Progenor</a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
