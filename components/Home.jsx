import Link from "next/link";
import PageModule from "./PageModule";
import sty from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div>
      <PageModule>
        <h1>Lectures:</h1>
        <ul>
          <MyLink dest="math" />
          <MyLink dest="info" />
          <MyLink dest="magyar" />
          <MyLink dest="roman" />
          <MyLink dest="fizika" />
          <MyLink dest="bio" />
        </ul>
      </PageModule>
    </div>
  );
};

const MyLink = ({ dest }) => {
  return (
    <li className={sty.MyLink_li}>
      <Link href={`/lectures/${dest}`}>{dest}</Link>
    </li>
  );
};

export default Home;
