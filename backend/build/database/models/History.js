"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const Content_1 = __importDefault(require("./Content"));
class History extends sequelize_1.Model {
}
History.init({
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    content_id: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    },
    titulo: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    corpo: {
        allowNull: false,
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
    modelName: 'histories',
    sequelize: _1.default,
    timestamps: false,
});
History.belongsTo(Content_1.default, { foreignKey: 'content_id', as: 'contentById' });
exports.default = History;
