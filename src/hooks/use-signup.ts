import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/supabaseClient'

const useSignUp = (email: string, password: string) => {
  const navigate = useNavigate()

  const [loadingState, setLoadingState] = useState(false)

  const signUp = async (email: string, password: string) => {
    setLoadingState(true)

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    setLoadingState(false)
    if (error) {
      console.error('Error during sign-up:', error.message)
      navigate('/error')
    } else {
      console.log('User signed up:', data.user)
      navigate('/')
    }
  }
  return { signUp, loadingState }
}
export default useSignUp
