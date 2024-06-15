const Router = require('express')
const postController = require('../controllers/post.controller')

const router = new Router()

router.post('/posts', postController.createPost)
router.get('/posts', postController.getAllPosts)
router.get('/posts/:id', postController.getOnePost)
router.put('/posts', postController.updatePost)
router.delete('/posts/:id', postController.deletePost)

module.exports = router