import styles from "./Login.module.css";
import { TextField } from "@mui/material";
import { createClient } from '@supabase/supabase-js'
import { useState } from "react";
import { useNavigate } from "react-router";
import { RedButton } from "../../components/StyledMUI/StyledMUI";

const Login = () => {
    // Create a single supabase client for interacting with your database
    // const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
    const supabase_url = "https://bsdyqpwndaecaczlyqik.supabase.co"
    const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzZHlxcHduZGFlY2Fjemx5cWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4MjMwNjAsImV4cCI6MjAzOTM5OTA2MH0.l2G3EV7TbK86wIKD0-s0sT9CdEOVeXvSA4fZG4MMv5Y"
    const supabase = createClient(supabase_url, anon_key)
    // i think the above should be in the main index.tsx file?

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("")



    // async function signUp(email: string, password: string) {
    //     const { data, error } = await supabase.auth.signUp({
    //         email: email,
    //         password: password,
    //     });

    //     if (error) {
    //         console.error('Error during sign-up:', error.message);
    //     } else {
    //         console.log('User signed up:');
    //     }
    // }

    async function signIn() {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        if (error) {
            console.error('Error during sign-in:', error.message);
            setErrorMsg(error.message)
        } else {
            console.log('User signed in:', data.user);
        }
        // return error;
    }


    // async function signOut() {
    //     const { error } = await supabase.auth.signOut();

    //     if (error) {
    //         console.error('Error during sign-out:', error.message);
    //     } else {
    //         console.log('User signed out successfully');
    //     }
    // }

    // supabase.auth.onAuthStateChange((event, session) => {
    //     if (event === 'SIGNED_IN') {
    //         console.log('User signed in:', session);
    //     } else if (event === 'SIGNED_OUT') {
    //         console.log('User signed out');
    //     }
    // });

    // const handleSignUp = async () => {
    //     signUp(email, password);
    // }

    const handleLogin = async () => {
        await signIn();
        console.log(errorMsg);

        if (errorMsg) {
            navigate("/error")
        }
        else navigate("/")
    };

    return (
        <div className={styles.wrapper}>
            <form>
                <h1 >Welcome to Movie RateRrr</h1>
                <div className={styles.buttonWrapper}>
                    <h3>Email </h3>
                    <TextField variant="outlined" value={email} onChange={(event) => { setEmail(event.currentTarget.value) }}></TextField>
                    <h3>Password </h3>
                    <TextField variant="outlined" value={password} onChange={(event) => { setPassword(event.currentTarget.value) }} type="password"></TextField>

                </div>
                <div className={styles.buttonWrapper}>
                    {/* <RedButton
                        className={styles.button}
                        onClick={handleSignUp}
                        variant="contained"
                    >
                        Sign Up
                    </RedButton> */}
                    <RedButton
                        className={styles.button}
                        onClick={handleLogin}
                        variant="contained"
                    >
                        Login
                    </RedButton>
                </div>
            </form>
        </div>
    );
};

export default Login;
