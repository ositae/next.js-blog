import Link from "next/link";
import styles from "../../styles/FourthPost.module.css";
import Avatar from "../avatar";


// data
const arrayOfObjects = [
    {
        topic: "React",
        description: "Computer language used for front end framework",
      },
      {
        topic: "SQL and MongoDB",
        description: "Relational and nonrelational databases!",
      },
      {
        topic: "AWS, Azure",
        description: "2 different types of cloud computing framework",
      },
      {
      topic: "Local, regional, otr, specialized",
      description: "Different types of trucking work most trucking companies operate under",
    },
    {
    topic: "Keep Working",
    description: "Building out such websites and programs will not only strengten build my software engineering skills, but bridge the gap between my soon to be double profession!",
  },
];
export default function FourthPost() {
  const array = arrayOfObjects.map((obj, idx) => {
    return (
      <div className={styles.card} key={idx}>
        <h3>{obj.topic}</h3>
        <p>{obj.description}</p>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <h1>Fourth Post</h1>
      <Avatar />
      <p>
I plan on designing websites, and developing programs for small and medium sized trucking companies to improve my coding skills! I plan on starting with the company I work for; I will design a database structure where they can keep account of the customer base!</p>
      <div className={styles.grid}>{array}</div>
      <Link href="/">Homepage</Link>
    </div>
  );
}
