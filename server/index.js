const express = require('express')
const fileUpload = require('express-fileupload')

const postRouter = require('./routes/post.routes.js')
const serviceRouter = require('./routes/service.routes.js')
const experienceRouter = require('./routes/experience.routes')
const questionRouter = require('./routes/question.routes')
const authRouter = require('./routes/auth.routes')

const PORT = process.env.PORT || 8080;

const app = express()

app.use(express.json())
app.use(fileUpload({}))
app.use(express.static('static'))

app.use('/api', postRouter)
app.use('/api', serviceRouter)
app.use('/api', experienceRouter)
app.use('/api', questionRouter)
app.use('/auth', authRouter)

app.listen(PORT, () => {console.log(`Server started on port: ${PORT}`)})