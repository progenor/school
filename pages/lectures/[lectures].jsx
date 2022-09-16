import PageModule from "../../components/PageModule";
import { useRouter } from "next/router";
import sty from "../../styles/Lectures.module.scss";
import Link from "next/link";

const Math = () => {
  const router = useRouter();

  const subject = router.asPath.split("/")[2];

  return (
    <div className={sty.main_cont}>
      <PageModule>
        <h1>{subject}</h1>
      </PageModule>
    </div>
  );
};

const MyLink = ({ dest }) => {
  return (
    <li className={sty.MyLink_li}>
      <Link href={`/lecture/${dest}`}>{dest}</Link>
    </li>
  );
};

export default Math;
