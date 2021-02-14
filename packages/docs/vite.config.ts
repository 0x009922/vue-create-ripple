import { UserConfig } from "vite"

const config: UserConfig = {
  base: process.env.PUBLIC_PATH || '/',
  assetsDir: 'assets'
}

export default config;
