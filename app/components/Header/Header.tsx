import Link from "next/link";
import styles from "./header.module.scss";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link className={styles.headerLink} href="/">
        <MenuBookOutlinedIcon />
        <p className={styles.headerTitle}>Book App</p>
      </Link>
    </div>
  );
}
