import knex, { Knex } from 'knex';
import knexConfig from '../config/knex';

let conn: Knex;

function conectar(): Knex {
  if (conn) return conn;
  return knex(knexConfig);
}

export default conectar();
