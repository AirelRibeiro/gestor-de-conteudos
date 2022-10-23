import { DataTypes, Model } from 'sequelize';
import database from '.';
import Content from './Content';

class History extends Model {
  id!: number;
  content!: number;
  titulo!: string;
  corpo?: string;
}

History.init( {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  contentId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  titulo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  corpo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
},
{
  modelName: 'history',
  sequelize: database,
  timestamps: false,
},)

History.belongsTo(Content, { foreignKey: 'content', as: 'contentById' });

export default History;