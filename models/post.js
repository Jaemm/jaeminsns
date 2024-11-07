const Sequlize = require('sequelize');

module.exports = class Post extends Sequlize.Model {
    static init(sequelize){
        return super.init({
            content: {
                type: Sequlize.STRING(140),
                allowNull: false,
            },
            img: {
                type: Sequlize.STRING(200),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Post',
            tableName: 'posts',
            paranoid: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {
        db.Post.belongsTo(db.User);
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
    }
}