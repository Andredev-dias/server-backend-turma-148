import http from 'http'
import app from './app'

const port = 9090

const server = http.createServer(app)

server.listen(port, () => {
    return console.log(`App listening on port ${port}`)
})