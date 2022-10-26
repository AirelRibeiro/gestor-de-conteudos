"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Content extends sequelize_1.Model {
}
Content.init({
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    titulo: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    corpo: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    created_at: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        defaultValue: new Date()
    },
    updated_at: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        defaultValue: new Date()
    }
}, {
    modelName: 'contents',
    underscored: true,
    timestamps: false,
    sequelize: _1.default,
});
exports.default = Content;
