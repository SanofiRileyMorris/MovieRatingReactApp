import { useNavigate } from "react-router-dom";

import styles from "./Footer.module.css";

export const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className={styles.container} >
            <h3 className={styles.title}>
                Developed by Riley Morris @2024</h3>
        </footer>
    );
};
