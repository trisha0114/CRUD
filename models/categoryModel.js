import { DataTypes } from "sequelize";
import {sequelize} from "./db.js";

const Category = sequelize.define("Category", {
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    remarks: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Category;