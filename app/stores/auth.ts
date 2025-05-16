export const useAuthStore = defineStore('useAuthStore', {
    state: () => ({
        state: {
            name: undefined,
            email: undefined,
            password: undefined,
            confirm_password: undefined,
        }
    }),
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}