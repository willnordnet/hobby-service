import dotenv from 'dotenv'
dotenv.config()

import buildApp from './app'

const app = buildApp()

const port = process.env.PORT || 3000
const host = process.env.HOST || '0.0.0.0'

app.listen({ port: +port, host }, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
