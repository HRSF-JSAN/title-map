const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restaurantyelp');

const restaurantSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  rating: Number,
  price: String,
  about: {
    address: String,
    number: String,
    image: String,
  },
  type: String,
});

restaurantSchema.index({ id: 1 }, { unique: true });
restaurantSchema.index({ name: 1 });

const RestaurantYelp = mongoose.model('restaurantyelp', restaurantSchema);
