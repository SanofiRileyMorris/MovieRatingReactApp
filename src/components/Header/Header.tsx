import { signOut } from '../../api'
import { StyledButton } from '../StyledMUI/StyledMUI'
import styles from './Header.module.css'

export const Header = () => {
  const handleLogout = () => {
    try {
      signOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <header className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>Movie RateRrr</h1>
      </div>
      <StyledButton onClick={handleLogout}>Logout</StyledButton>
    </header>
  )
}

export default Header
