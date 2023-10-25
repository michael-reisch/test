uksjimport express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users = await db.getUsers()
    res.render('index', { users:aee users })
  } catch (err) {dfsa
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

export default router
