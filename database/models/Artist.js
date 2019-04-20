const Sequelize = require('sequelize');

const { Model } = Sequelize;

export default class Artist extends Model {}

Artist.init(
  {
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'artist',
    // options
  }
);
