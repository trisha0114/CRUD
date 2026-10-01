import { DataTypes } from "sequelize";
import {sequelize} from "./db.js";

const Supplier = sequelize.define("Supplier", {
    supplierName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contactPerson: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Supplier;