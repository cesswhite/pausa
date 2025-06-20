import type { FormError } from "#ui/types"

export const useFormValidation = () => {
  const validateEmail = (email: string): string | null => {
    if (!email) return 'Email is required'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return 'Please enter a valid email'
    return null
  }

  const validatePassword = (password: string): string | null => {
    if (!password) return 'Password is required'
    if (password.length < 6) return 'Password must be at least 6 characters'
    return null
  }

  const validateConfirmPassword = (password: string, confirmPassword: string): string | null => {
    if (!confirmPassword) return 'Please confirm your password'
    if (password !== confirmPassword) return 'Passwords do not match'
    return null
  }

  const validateRequired = (value: string, fieldName: string): string | null => {
    if (!value || value.trim() === '') return `${fieldName} is required`
    return null
  }

  const validateAuthForm = (state: any): FormError[] => {
    const errors: FormError[] = []

    // Email validation
    const emailError = validateEmail(state.email)
    if (emailError) errors.push({ name: 'email', message: emailError })

    // Password validation
    const passwordError = validatePassword(state.password)
    if (passwordError) errors.push({ name: 'password', message: passwordError })

    // Confirm password validation (if exists)
    if (state.confirm_password) {
      const confirmPasswordError = validateConfirmPassword(state.password, state.confirm_password)
      if (confirmPasswordError) errors.push({ name: 'confirm_password', message: confirmPasswordError })
    }

    return errors
  }

  const validateSignInForm = (state: any): FormError[] => {
    const errors: FormError[] = []

    const emailError = validateEmail(state.email)
    if (emailError) errors.push({ name: 'email', message: emailError })

    const passwordError = validateRequired(state.password, 'Password')
    if (passwordError) errors.push({ name: 'password', message: passwordError })

    return errors
  }

  const validateSignUpForm = (state: any): FormError[] => {
    return validateAuthForm(state)
  }

  const validatePasswordResetForm = (state: any): FormError[] => {
    const errors: FormError[] = []

    const passwordError = validatePassword(state.password)
    if (passwordError) errors.push({ name: 'password', message: passwordError })

    const confirmPasswordError = validateConfirmPassword(state.password, state.confirm_password)
    if (confirmPasswordError) errors.push({ name: 'confirm_password', message: confirmPasswordError })

    return errors
  }

  const validateForgotPasswordForm = (state: any): FormError[] => {
    const errors: FormError[] = []

    const emailError = validateEmail(state.email)
    if (emailError) errors.push({ name: 'email', message: emailError })

    return errors
  }

  return {
    validateEmail,
    validatePassword,
    validateConfirmPassword,
    validateRequired,
    validateAuthForm,
    validateSignInForm,
    validateSignUpForm,
    validatePasswordResetForm,
    validateForgotPasswordForm,
  }
} 