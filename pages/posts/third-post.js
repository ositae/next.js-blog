import Link from "next/link";
import styles from "../../styles/ThirdPost.module.css";
import Avatar from "../avatar";


// data
const continentArray = [
  "Africa",
  "Antartica",
  "Asia",
  "Australia",
  "Europe",
  "North America",
  "South America",
]
export default function ThirdPost() {
  const array = continentArray.map((s, idx) => {
    return (
      <div className={styles.card} key={idx}>
        <h3>{s}</h3>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <h1>Third Post</h1>
      <Avatar />
      <p>
        This is my third post on this blog. A list of the different continents
        in alphabetical order. It has nothing to do with software engineering or
        truck driving. I just want to do my lab! All continents are listed here:
      </p>
      <div className={styles.grid}>{array}</div>
      <Link href="/">Homepage</Link>
    </div>
  );
}
