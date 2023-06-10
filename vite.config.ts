import { UserConfigExport, ServerOptions } from 'vite'
import react from '@vitejs/plugin-react'
import { certificateFor } from 'devcert'
// import { resolve } from 'path'
// import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default async (): Promise<UserConfigExport> => {
  let server: ServerOptions | undefined = undefined
  if (process.env.HTTPS === 'true') {
    const { key, cert } = await certificateFor('localhost')
    server = {
      https: {
        key,
        cert,
      },
    }
  }

  return {
    plugins: [react()],
    server,
  }
}

// const root = resolve(__dirname, 'src')
//
// export default defineConfig({
//   root,
// })