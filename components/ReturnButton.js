import Link from "next/link";
import styles from "../styles/Home.module.css";

const ReturnButton = () => {
  return (
    <Link href="/">
      <button className={styles.btn}>HomePage</button>
    </Link>
  );
};

export default ReturnButton;
