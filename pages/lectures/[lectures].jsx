import PageModule from "../../components/PageModule";
import Lectures from "../../components/Lectures";
import { useRouter } from "next/router";
import sty from "../../styles/Lectures.module.scss";

const Math = () => {
  const router = useRouter();

  const subject = router.asPath.split("/")[2];

  return (
    <div className={sty.main_cont}>
      <PageModule>
        <h1>{subject}</h1>
        <Lectures subject={subject} />
      </PageModule>
    </div>
  );
};

export default Math;
