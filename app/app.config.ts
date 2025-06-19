export default defineAppConfig({
    toaster: {
        position: 'bottom-right' as const,
        expand: false,
        duration: 5000
      },
    ui: {
        colors: {
            primary: 'fuchsia',
            neutral: 'zinc'
        },
    }
})
