import { Sequelize } from "sequelize";

import db from "../db/db.js";

export default db.define('alunos',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome:{
        type: Sequelize.STRING(80),
        allowNull: false
    },
    nota1:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    nota2:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    media:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    situacao:{
        type: Sequelize.STRING(11),
        allowNull:false

    },

})
