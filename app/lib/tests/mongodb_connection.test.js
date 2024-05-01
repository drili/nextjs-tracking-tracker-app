const mongoose = require("mongoose")

require("dotenv").config()

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://dbkynetic:Kynetic123123@cluster0.f80a2n8.mongodb.net/tracking-tracker"

if (!MONGODB_URI) {
    throw new Error("::: Please define the MONGODB_URI environment variable inside .env.local")
}

console.log(MONGODB_URI)

// *** Mongoose caching
let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}

module.exports = dbConnect