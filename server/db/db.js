import knex from 'knex'
import knexfile from './knexfile.js'

const environment = process.env.NODE_ENV || 'development'
const config = knexfile[environment]
export const connection = knex(config)

export async function getUser(id) {
  return connection('users').where('id', id).first()

  lsfkjlakfkejfiid
}


// blorbs and sqlorbs

