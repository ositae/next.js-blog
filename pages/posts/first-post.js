import Link from "next/link";
import styles from "../../styles/FirstPost.module.css";
import Avatar from "../avatar";

// data
const array = ["HTML", "CSS", "JavaScript", "EJS", "Bootstrap", "SQL", "Node"];
export default function FirstPost() {
  const skillsArray = array.map((s, idx) => {
    return (
      <div className={styles.card} key={idx}>
        <h3>{s}</h3>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <h1>First Post</h1>
      <Avatar />
      <p>
        This is my first post on this blog. My engineering journey started with
        learning about HTML, CSS, and JavaScript!
      </p>
      <p>I learned {array[6]} for server-side rendering.</p>
      <p> I have learned the following concepts: </p>
      <div className={styles.grid}>{skillsArray}</div>
      <Link href="/">Homepage</Link>
    </div>
  );
}
