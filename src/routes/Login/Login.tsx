import styles from './Login.module.css'
import { TextField } from '@mui/material'
import { useState } from 'react'
import { RedButton } from '../../components/StyledMUI/StyledMUI'
import useSignIn from '../../hooks/use-signin'
import { Loading } from '../../components/Loading/Loading'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn, loadingState } = useSignIn(email, password)

  if (loadingState) return <Loading />

  return (
    <div className={styles.wrapper}>
      <form>
        <h1>Welcome to Movie RateRrr</h1>
        <div className={styles.buttonWrapper}>
          <h3>Email </h3>
          <TextField
            sx={{ backgroundColor: 'white' }}
            variant="outlined"
            value={email}
            onChange={(event) => {
              setEmail(event.currentTarget.value)
            }}
          ></TextField>
          <h3>Password </h3>
          <TextField
            sx={{ backgroundColor: 'white' }}
            variant="outlined"
            value={password}
            onChange={(event) => {
              setPassword(event.currentTarget.value)
            }}
            type="password"
          ></TextField>
        </div>
        <div className={styles.buttonWrapper}>
          <RedButton
            className={styles.button}
            onClick={() => signIn(email, password)}
            variant="contained"
          >
            Login
          </RedButton>
        </div>
      </form>
    </div>
  )
}

export default Login
