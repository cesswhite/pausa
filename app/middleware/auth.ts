export default defineNuxtRouteMiddleware((to, _from) => {
  const session = useSupabaseSession()
  if (!session.value) {
      return navigateTo('/')
  }
})