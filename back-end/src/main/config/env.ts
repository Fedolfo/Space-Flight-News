export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://root:root@localhost:27017/space-flight?authSource=admin',
  port: process.env.PORT ?? 5050
}
