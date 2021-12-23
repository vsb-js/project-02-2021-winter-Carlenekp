'use strict';
const {
  Model
} = require('sequelize');
const db = require('.');
module.exports = (sequelize, DataTypes) => {
  class Art extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Detail)

    }
    static getArt = async (req, res) => {
      try {
          const updateArt =await db.Art.update({
            type: req.body.name,
            creator: req.body.creator,
            title: req.body.title,
            year: req.body.year,
            country: req.body.country,
            inspiration: req.body.inspiration,

       },
       {where: {id: req.params.id} });
       return res.status(201).send({
          art: artsDetails,
          status: 200
      });
      }
      catch (error) {
          return res.status(400).send({
              message: 'Unable to update data',
              errors: error,
              status: 400
          });
      }
  }
  };
  Art.init({
    type: DataTypes.STRING,
    creator: DataTypes.STRING,
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    country: DataTypes.STRING,
    inspiration: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Art',
  });
  return Art;
};