import {Sequelize, DataTypes} from 'sequelize';
import sequelize from '../../config/db.config.js';

const Hotel = sequelize.define('Hotel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{ 
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: true
    },
    ratings:{
        type: DataTypes.FLOAT,
        allowNull: true
    }
});
