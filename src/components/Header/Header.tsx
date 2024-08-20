// import { useNavigate } from "react-router-dom";

import styles from './Header.module.css'

export const Header = () => {
  // const navigate = useNavigate();

  /* TODO: Add a logout button after login is completed*/
  // const handleLogout = () => {
  //     return navigate("/login");
  // };

  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Movie RateRrr</h1>
    </header>
  )
}
