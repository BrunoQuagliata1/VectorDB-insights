import sequelize from './sequelize_setup.js';
import { DataTypes } from 'sequelize';

const Item = sequelize.define('Item', {
    question: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    answer: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    vector: {
        type: DataTypes.ARRAY(DataTypes.FLOAT),
        allowNull: false
    }
});

export default Item;
