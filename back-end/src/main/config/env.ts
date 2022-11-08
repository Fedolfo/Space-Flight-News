export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://root:root@mongo:27017/space-flight?authSource=admin',
  port: process.env.PORT ?? 5050
}
