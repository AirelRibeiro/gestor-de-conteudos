import { DataTypes, Model } from 'sequelize';
import db from '.';

class Content extends Model {
  id!: number;
  titulo!: string;
  corpo?: string;
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
    }
  },
  {
    modelName: 'Contents',
    underscored: true,
    sequelize: db,
  },
);

export default Content;