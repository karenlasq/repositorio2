import { Model, DataTypes } from 'sequelize';

export default class Usuario extends Model {
  static init(sequelize) {
    return super.init(
      {
        nombre: DataTypes.STRING,
        direccion: DataTypes.STRING,
        telefono: DataTypes.STRING,
        mail: DataTypes.STRING,
        dni: DataTypes.STRING,
        idRol: DataTypes.INTEGER
      },
      {
        sequelize,
        modelName: 'Usuario',
      }

    );
  }
}

