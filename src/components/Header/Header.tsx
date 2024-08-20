import { signOut } from '../../api'
import { RedButton } from '../StyledMUI/StyledMUI'
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
      <RedButton className={styles.logout} onClick={handleLogout}>
        Logout
      </RedButton>
    </header>
  )
}
