/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { type Request, type Response, type NextFunction } from 'express'
import pool from '../database/db'
const router = express.Router()

router.get('/blog', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const fetchBlogs = await pool.query('SELECT * FROM blogs')
    res.status(200).json(fetchBlogs.rows)
    next()
  } catch {
    console.error()
  }
})

router.get('/blog/:title', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title } = req.params
    const fetchBlogsByTitle = await pool.query('SELECT * FROM blogs WHERE title = $1', [title])
    res.status(200).json(fetchBlogsByTitle.rows[0])
    next()
  } catch {
    console.error()
  }
})

router.put('/blog/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { body } = req.body
    await pool.query('UPDATE blogs SET body = $1 WHERE article_id = $2', [body, id])
    res.status(201).json({ message: `Successfully Updated Article ${id}` })
    next()
  } catch {
    console.error()
  }
})

router.delete('/blog/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM blogs WHERE article_id = $1', [id])
    res.status(202).json({ message: `Successfully Deleted Article ${id}` })
    next()
  } catch {
    console.error()
  }
})

router.post('/blog', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, body } = req.body
    const newPost = await pool.query('INSERT INTO blogs (title, body) VALUES($1, $2) RETURNING *', [title, body])
    res.status(201).json(newPost)
    next()
  } catch {
    console.error()
  }
})

export default router
