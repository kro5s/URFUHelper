const db = require('../db')

class PostController {
    async createPost(req, res) {
        const {name, avatar, language, content} = req.body

        const newPost = await db.query("INSERT INTO post (name, avatar, content, language) values ($1, $2, $3, $4) RETURNING *", [name, avatar, content, language])

        res.json(newPost.rows[0])
    }

    async getAllPosts(req, res) {
        const users = await db.query("SELECT * from post")

        res.set('Access-Control-Allow-Origin', 'http://localhost:3000').json(users.rows)
    }

    async getOnePost(req, res) {
        const id = req.params.id
        const post = await db.query("SELECT * FROM post where id = $1", [id])

        res.json(post.rows[0])
    }

    async updatePost(req, res) {
        const {id, name, avatar, language, content} = req.body;
        const post = await db.query("UPDATE post set name = $1, avatar = $2, language = $3, content = $4 where id = $5 RETURNING *", [name, avatar, language, content, id])

        res.json(post.rows[0])
    }

    async deletePost(req, res) {
        const id = req.params.id
        const post = await db.query("DELETE FROM post where id = $1", [id])

        res.json(post.rows[0])
    }
}

module.exports = new PostController()