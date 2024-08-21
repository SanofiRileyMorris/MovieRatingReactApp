// import { SetStateAction } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/supabaseClient'

export async function signIn(
  email: string,
  password: string,
  // setErrorMsg: { (value: SetStateAction<string>): void; (arg0: string): void }
  navigate: NavigateFunction
) {
  // const navigate = useNavigate()

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  if (error) {
    console.error('Error during sign-in:', error.message)
    // setErrorMsg(error.message)
  } else {
    console.log('User signed in:', data.user)
    navigate('/')
  }
}

// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { supabase } from '../supabase/supabaseClient'

// export function useSignIn(
//   email: string,
//   password: string,
// ) {
//   const navigate = useNavigate()
//   const [errorMsg, setErrorMsg] = useState<string>('');

//   const signIn = async (email: string, password: string) => {
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email: email,
//       password: password,
//     })

//     if (error) {
//       console.error('Error during sign-in:', error.message)
//       setErrorMsg(error.message)
//     } else {
//       console.log('User signed in:', data.user)
//       navigate('/')
//     }
//   }

//   return { signIn, errorMsg }
// }
