export const useToastMessages = () => {
  const toast = useToast()

  const showSuccess = (title: string, description: string) => {
    toast.add({
      icon: 'i-lucide-check-circle',
      title,
      description,
      color: 'success',
    })
  }

  const showError = (title: string, description: string) => {
    toast.add({
      icon: 'i-lucide-circle-x',
      title,
      description,
      color: 'error',
    })
  }

  const showWarning = (title: string, description: string) => {
    toast.add({
      icon: 'i-lucide-alert-triangle',
      title,
      description,
      color: 'warning',
    })
  }

  const showInfo = (title: string, description: string) => {
    toast.add({
      icon: 'i-lucide-info',
      title,
      description,
      color: 'info',
    })
  }

  const showAuthSuccess = (action: string) => {
    const messages = {
      signIn: 'Signed in successfully',
      signUp: 'Email for verification has been sent',
      passwordReset: 'We have sent you a link to reset your password',
      passwordUpdate: 'Your password has been changed, please sign in to continue',
      magicLink: 'Magic link sent',
      signOut: 'Signed out successfully',
    }
    showSuccess('Success', messages[action as keyof typeof messages] || 'Operation completed successfully')
  }

  const showAuthError = (error: any, customMessage?: string) => {
    console.error('Auth error:', error)
    showError('Error', customMessage || error.message || 'An error occurred')
  }

  const showValidationError = (field: string, message: string) => {
    showError('Validation Error', `${field}: ${message}`)
  }

  const showNetworkError = () => {
    showError('Network Error', 'Please check your internet connection and try again')
  }

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showAuthSuccess,
    showAuthError,
    showValidationError,
    showNetworkError,
  }
} 