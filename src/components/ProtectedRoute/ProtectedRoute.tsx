import { Session } from '@supabase/auth-js'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSupabase } from '../../supabase/SupabaseProvider'

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const supabase = useSupabase()
  const navigate = useNavigate()

  const [session, setSession] = useState<Session | null>()

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession()
      setSession(data.session)
    }

    fetchSession()
  })

  if (!session) {
    navigate('/login')
  }

  return <>{children}</>
}

export default ProtectedRoute
