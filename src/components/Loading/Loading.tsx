import { CircularProgress } from '@mui/material'
import styles from './Loading.module.css'

export const Loading = ({ size }: { size: number }) => {
  return (
    <div className={styles.loading}>
      <CircularProgress size={size} sx={{ color: 'red' }} />
    </div>
  )
}
