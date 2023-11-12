import knex from '../../service/knex';

const getAll = async () => {
  return knex('aluno').select();
};

const store = async (params: any) => {
  return knex('aluno').insert(params);
};

export default {
  getAll,
  store,
};
