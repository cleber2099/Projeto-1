const { db } = require('../../database/database');

class Tarefa {
    static async getById({ id }) {
        return await db.tarefa.findUnique({ where: id });
    }

    static async create({ descricao }) {
        return await db.tarefa.create({ data: { descricao } });
    }

    static async delete({ id }) {
        return await db.tarefa.delete({ where: { id } });
    }

    static async edit({ id, descricao }) {
        return await db.tarefa.update({ where: { id }, data: { descricao } })
    }

    static async paginate({ page = 0 }) {
        const qtdPorPagina = 5;
        const count = await db.tarefa.count();
        const tarefas = await db.tarefa.findMany({
            skip: page * qtdPorPagina,
            take: qtdPorPagina,
        });

        return { tarefas, count, page: Number(page) }
    }
}

module.exports = Tarefa;