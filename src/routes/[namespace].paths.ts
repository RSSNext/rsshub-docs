import fs from 'node:fs'
import path from 'node:path'

export default {
  async paths() {
    // Read routes.json from public directory during build
    const routesPath = path.join(process.cwd(), 'src/public/routes.json')

    if (!fs.existsSync(routesPath)) {
      console.warn('routes.json not found, returning empty paths')
      return []
    }

    const routes = JSON.parse(fs.readFileSync(routesPath, 'utf-8'))
    const namespaces = Object.keys(routes)

    return namespaces.map(namespace => ({
      params: { namespace }
    }))
  }
}
