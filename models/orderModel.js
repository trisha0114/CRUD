import { DataTypes } from "sequelize";
import {sequelize} from "./db.js";

const Order = sequelize.define("Order", {
    orderNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customerName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

export default Order;