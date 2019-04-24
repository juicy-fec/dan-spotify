const Sequelize = require('sequelize');

const { Model } = Sequelize;

export default class Track extends Model {}

Track.init(
  {
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    playcount: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    length: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    artist_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'track',
    // options
  }
);
