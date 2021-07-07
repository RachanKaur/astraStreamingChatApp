const express = require('express')
const app = express()
const path = require('path')

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))


module.exports= app