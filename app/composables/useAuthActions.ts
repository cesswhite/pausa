export const useAuthActions = () => {
  const client = useSupabaseClient()
  const router = useRouter()
  const config = useRuntimeConfig()
  const { showAuthSuccess, showAuthError } = useToastMessages()

  const signInWithPassword = async (email: string, password: string) => {
    try {
      const { data, error } = await client.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        showAuthError(error)
        return { success: false, error }
      }

      showAuthSuccess('signIn')
      setTimeout(() => {
        router.push('/app/dashboard')
      }, 1500)
      return { success: true, data }
    } catch (error) {
      showAuthError(error)
      return { success: false, error }
    }
  }

  const signUpWithEmail = async (email: string, password: string) => {
    try {
      const { data, error } = await client.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${config.public.siteUrl}/auth/confirm`,
        },
      })

      if (error) {
        showAuthError(error)
        return { success: false, error }
      }

      showAuthSuccess('signUp')
      return { success: true, data }
    } catch (error) {
      showAuthError(error)
      return { success: false, error }
    }
  }

  const sendPasswordReset = async (email: string) => {
    try {
      const { data, error } = await client.auth.resetPasswordForEmail(email, {
        redirectTo: `${config.public.siteUrl}/auth/reset-password/`,
      })

      if (error) {
        showAuthError(error)
        return { success: false, error }
      }

      showAuthSuccess('passwordReset')
      return { success: true, data }
    } catch (error) {
      showAuthError(error)
      return { success: false, error }
    }
  }

  const updatePassword = async (password: string, email?: string) => {
    try {
      const { data, error } = await client.auth.updateUser({
        email,
        password,
      })

      if (error) {
        showAuthError(error)
        return { success: false, error }
      }

      showAuthSuccess('passwordUpdate')
      return { success: true, data }
    } catch (error) {
      showAuthError(error)
      return { success: false, error }
    }
  }

  const sendMagicLink = async (email: string, shouldCreateUser: boolean = false) => {
    try {
      const { data, error } = await client.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser,
          emailRedirectTo: `${config.public.siteUrl}/auth/confirm`,
        },
      })

      if (error) {
        showAuthError(error)
        return { success: false, error }
      }

      showAuthSuccess('magicLink')
      return { success: true, data }
    } catch (error) {
      showAuthError(error)
      return { success: false, error }
    }
  }

  const signOut = async () => {
    try {
      const { error } = await client.auth.signOut()
      if (error) {
        showAuthError(error)
        return { success: false, error }
      }
      showAuthSuccess('signOut')
      router.push('/')
      return { success: true }
    } catch (error) {
      showAuthError(error)
      return { success: false, error }
    }
  }

  return {
    signInWithPassword,
    signUpWithEmail,
    sendPasswordReset,
    updatePassword,
    sendMagicLink,
    signOut,
  }
} 