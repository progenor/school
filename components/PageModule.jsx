import sty from "../styles/PageModule.module.scss";

const PageModule = ({ children }) => {
  return (
    <div className={sty.big_cont}>
      <div className={sty.main_cont}>{children}</div>
    </div>
  );
};

export default PageModule;
