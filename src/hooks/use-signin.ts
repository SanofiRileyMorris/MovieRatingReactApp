import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/supabaseClient'

const useSignIn = (email: string, password: string) => {
  const navigate = useNavigate()

  const [loadingState, setLoadingState] = useState(false)

  const signIn = async (email: string, password: string) => {
    setLoadingState(true)
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    setLoadingState(false)

    if (error) {
      console.error('Error during sign-in:', error.message)
      navigate('/error')
    } else {
      console.log('User signed in:', data.user)
      global.localStorage.setItem("session", JSON.stringify(data.session))
      navigate('/')
    }
  }
  return { signIn, loadingState }
}
export default useSignIn
