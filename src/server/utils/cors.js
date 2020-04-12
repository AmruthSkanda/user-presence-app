const whitelist = ['http://localhost:8989', 'http://localhost:3000']

export const corsOptions = {
  origin: function (origin, callback) {
    console.log("Origin: ", origin)
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}