import { DataTypes, Model } from 'sequelize';
import database from '.';
import Content from './Content';

class History extends Model {
  id!: number;
  content_id!: number;
  titulo!: string;
  corpo?: string;
  created_at!: Date;
  updated_at!: Date;
}

History.init( {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  content_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  titulo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  corpo: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  created_at: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: new Date()
  },
  updated_at: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: new Date()
  }
},
{
  modelName: 'histories',
  sequelize: database,
  timestamps: false,
},)

History.belongsTo(Content, { foreignKey: 'content_id', as: 'contentById' });

export default History;