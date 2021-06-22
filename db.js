// connect to mongodb 
const mongodb =  require("mongodb")

const connectionString = "mongodb+srv://todoAppUser:todoApp@cluster0.x8oqf.mongodb.net/complexApp?retryWrites=true&w=majority"

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  module.exports = client.db()

  // require our app.js port
  const app = require("./app")

  app.listen(8080)


})
