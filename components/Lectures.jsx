import Link from "next/link";
// import fs from "fs";
// import path from "path";

const Lectures = ({ subject, posts }) => {
  return (
    <div>
      <h1>Lectures:</h1>
      <ul></ul>
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

// export async function getStaticProps({ subject }) {
//   const files = fs.readdirSync(path.join(`public/md/${subject}`));
//   console.log(files);

//   return {
//     props: {
//       posts: "the post",
//     },
//   };
// }

export default Lectures;
