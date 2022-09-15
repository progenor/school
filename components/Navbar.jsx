import sty from "../styles/Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className={sty.nav_main}>
        <div className={sty.nav_title}>
          <h1>
            <Link href="/">For dummies</Link>
          </h1>
        </div>
        <div className={sty.nav_links}>
          <Link href="#">Legal</Link>
          <Link href="#">About</Link>
          <Link href="#">Lectures</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
