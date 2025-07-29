

const mongoose = require('mongoose');

async function main() {
    await mongoose.connect(process.env.DB_CONNECT_STRING, {
        tls: true  // Needed for MongoDB Atlas and Node v22+
    });
    console.log("MongoDB connected");
}

module.exports = main;
