// server.js
import jsonServer from 'json-server'
import auth from 'json-server-auth'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// ⚠️ Fix: dùng path không chứa ký tự như ? + () để tránh lỗi
const rules = auth.rewriter({
  // KHÔNG dùng cú pháp như "/:user?" hoặc "/path+"
  users: 600,
  products: 640
})

server.db = router.db

server.use(middlewares)
server.use(rules)
server.use(auth)
server.use(router)

server.listen(3000, () => {
  console.log('✅ Server is running at http://localhost:3000')
})
