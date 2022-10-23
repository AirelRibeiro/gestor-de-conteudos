import { DataTypes, Model } from 'sequelize';
import db from '.';

class Content extends Model {
  id!: number;
  titulo!: string;
  corpo?: string;
  created_at!: Date;
  updated_at!: Date;
}

Content.init(
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    titulo: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    corpo: {
      allowNull: true,
      type: DataTypes.STRING,
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
    modelName: 'contents',
    underscored: true,
    sequelize: db,
  },
);

export default Content;