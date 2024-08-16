import styles from "./Login.module.css";
import Button from '@mui/material/Button';
import { Input, Typography } from "@mui/material";

const Login = () => {

    return (
        <div className={styles.wrapper}>
            <h1 >Welcome to Movie RateRrr</h1>
            <div className={styles.buttonWrapper}>

                <Typography>Username </Typography>
                <Input></Input>
                <Typography>Password </Typography>
                <Input></Input>
                <Button
                // onClick={handleLogin}
                // isLoading={isDisabled}
                >
                    Login

                </Button>
            </div>
        </div>
    );
};

export default Login;
