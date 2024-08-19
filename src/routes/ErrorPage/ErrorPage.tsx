import styles from "./ErrorPage.module.css";


const ErrorPage = () => {

    return (
        <div className={styles.error}>
            <h1>
                This isn't an inception, you've reach the error page!
            </h1>
        </div>
    );
};

export default ErrorPage;
