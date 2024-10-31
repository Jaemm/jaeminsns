const Sequlize = require('sequelize');

module.exports = class User extends Sequlize.Model {
    static init(sequelize){
        return super.init({
            email: {
                type: Sequlize.STRING(40),
                allowNull: true,
                unique: true,
            },
            nick: {
                type: Sequlize.STRING(15),
                allowNull: false,
            },
            password: {
                type: Sequlize.STRING(100),
                allowNull: true,
            },
            provider: {
                type: Sequlize.STRING(10),
                allowNull: false,
                defaultValue: 'local',
            },
            snsId: {
                type: Sequlize.STRING(30),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db){}
};