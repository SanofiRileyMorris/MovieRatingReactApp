import { CircularProgress } from "@mui/material";
import styles from "./Loading.module.css";

export const Loading = () => {
    return (
        <div className={styles.loading}>
            <CircularProgress sx={{ color: "red" }} />
        </div>
    );
};
