import styles from './Login.module.css'
import { Box, Modal, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { StyledButton } from '../../components/StyledMUI/StyledMUI'
import useSignIn from '../../hooks/use-signin'
import { Loading } from '../../components/Loading/Loading'
import useSignUp from '../../hooks/use-signup'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [modal, setModal] = useState(false)

  const { signIn, loadingState } = useSignIn(email, password)
  const { signUp, loadingState: loading } = useSignUp(email, password)

  if (loadingState && loading) return <Loading size={60} />

  return (
    <div className={styles.wrapper}>
      <Modal open={modal} onClose={() => setModal(false)}>
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 550,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
          }}
        >
          <form>
            <div className={styles.signupTitle}>
              <h1>Sign Up to Movie RateRrr</h1>
              <StyledButton onClick={() => setModal(false)} sx={{ my: 3 }}>
                Close
              </StyledButton>
            </div>
            <div>
              <div className={styles.credentials}>
                <h3>Email </h3>
                <TextField
                  sx={{ backgroundColor: 'white' }}
                  variant="outlined"
                  value={signupEmail}
                  onChange={(event) => {
                    setSignupEmail(event.currentTarget.value)
                  }}
                ></TextField>
              </div>
              <div className={styles.credentials}>
                <h3>Password </h3>
                <TextField
                  sx={{ backgroundColor: 'white' }}
                  variant="outlined"
                  value={signupPassword}
                  onChange={(event) => {
                    setSignupPassword(event.currentTarget.value)
                  }}
                  type="password"
                ></TextField>
              </div>
            </div>
            <div className={styles.buttonSignUpWrapper}>
              <StyledButton
                sx={{ marginTop: '1rem', width: 200 }}
                onClick={() => {
                  signUp(signupEmail, signupPassword)
                }}
              >
                Sign Up
              </StyledButton>
            </div>
          </form>
        </Box>
      </Modal>
      <form>
        <h1>Welcome to Movie RateRrr</h1>
        <div className={styles.credentialsContainer}>
          <div className={styles.credentials}>
            <h3>Email </h3>
            <TextField
              sx={{ backgroundColor: 'white' }}
              variant="outlined"
              value={email}
              onChange={(event) => {
                setEmail(event.currentTarget.value)
              }}
            ></TextField>
          </div>
          <div className={styles.credentials}>
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
        </div>
        <div className={styles.buttonWrapper}>
          <StyledButton
            className={styles.button}
            onClick={() => signIn(email, password)}
            variant="contained"
          >
            Login
          </StyledButton>
          <StyledButton
            className={styles.button}
            onClick={() => setModal(!modal)}
            variant="contained"
          >
            Create Account
          </StyledButton>
        </div>
      </form>
    </div>
  )
}

export default Login
