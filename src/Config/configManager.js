// Config Manager - Handles URLs for development and production environments
const env = import.meta.env.MODE || 'development'
let config
if (env === 'development') {
  import('./dev.data.json').then((module) => {
    config = module.default
  })
} else {
  import('./production.data.json').then((module) => {
    config = module.default
  })
}
export default config
