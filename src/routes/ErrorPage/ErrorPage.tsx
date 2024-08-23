import { useNavigate } from 'react-router'
import { StyledButton } from '../../components/StyledMUI/StyledMUI'
import styles from './ErrorPage.module.css'

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.error}>
      <h1>This isn't an inception, you've reached the error page!</h1>
      <p>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <p>Please try the following:</p>
      <div className={styles.backButton}>
        <StyledButton onClick={() => navigate('/login')}>
          Go to Homepage
        </StyledButton>
      </div>
    </div>
  )
}

export default ErrorPage
