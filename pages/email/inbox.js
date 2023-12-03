import Link from "next/link";
import Image from "next/image";
import style from "../../styles/Inbox.module.css";
import Message from "../message";
//data
const engineersArray = [
  { username: "@Keya-Moradi", message: "Terzi" },
  { username: "@ltcervan", message: "Community" },
  { username: "@JordanJNelson", message: "Breaking Bad" },
  { username: "@abbyog27", message: "The Crown" },
  { username: "@Nimsey", message: "Blue Eye Samurai" },
  { username: "@dfloresca", message: "Dancing With The Stars" },
  { username: "@gongt108", message: "Avatar the Last Airbender" },
  { username: "@soyrvelez", message: "The Curse" },
  { username: "@DougAlex32", message: "Breaking Bad" },
  { username: "@ositae", message: "Friday"},
  { username: "@mike-gustafson", message: "Monarch Legacy of Monsters" },
  { username: "@DonEvans63", message: "Valhalla" },
  { username: "@DGWonKanobi", message: "Money Heist" },
  { username: "@romebell", message: "Peaky Blinders" },
  { username: "@avisa-ga", message: "New Amsterdam" },
];

export default function Inbox() {
    const displayEngineersArray = engineersArray.map((engineer, idx) => {
        return <Message username={engineer.username} message={engineer.message} key={idx}/>
    });

  return (
    <div className={style.container}>
      <h1>Email Inbox</h1>

      <div className={style.grid}>{displayEngineersArray}</div>

      <Link href="/">Homepage</Link>
    </div>
  );
}
