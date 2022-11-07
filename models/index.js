const User = require('./User');
const Hero = require('./Hero');
const Review = require('./Review');


Hero.hasMany(Review, {
    foreignKey: 'hero_id',
});

User.hasMany(Review, {
    foreignKey: 'user_id',
});

Review.belongsTo(Hero, {
    foreignKey: "hero_id",
});

Review.belongsTo(User, {
    foreignKey: "user_id",
});
User.hasMany(Hero, {
    foreignKey: 'user_id'
});


module.exports = { User, Hero, Review };