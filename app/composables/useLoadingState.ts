export const useLoadingState = () => {
  const loading = ref(false)
  const loadingStates = reactive({
    signIn: false,
    signUp: false,
    passwordReset: false,
    magicLink: false,
    google: false,
    github: false,
    updatePassword: false,
  })

  const setLoading = (key: keyof typeof loadingStates, value: boolean) => {
    loadingStates[key] = value
    loading.value = value
  }

  const startLoading = (key: keyof typeof loadingStates) => {
    setLoading(key, true)
  }

  const stopLoading = (key: keyof typeof loadingStates) => {
    setLoading(key, false)
  }

  const withLoading = async <T>(
    key: keyof typeof loadingStates,
    asyncFn: () => Promise<T>
  ): Promise<T> => {
    try {
      startLoading(key)
      return await asyncFn()
    } finally {
      stopLoading(key)
    }
  }

  const resetAllLoading = () => {
    Object.keys(loadingStates).forEach(key => {
      loadingStates[key as keyof typeof loadingStates] = false
    })
    loading.value = false
  }

  return {
    loading: readonly(loading),
    loadingStates: readonly(loadingStates),
    setLoading,
    startLoading,
    stopLoading,
    withLoading,
    resetAllLoading,
  }
} 