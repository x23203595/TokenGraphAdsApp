var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adSchema = new Schema({
    imagePath: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    order: { type: Number, required: true }
});

adSchema.statics.updateOrderField = function () {
    return this.find({}).sort({ order: 1 }).exec()
        .then(ads => {
            return Promise.all(ads.map((ad, index) => {
                ad.order = index + 1; 
                return ad.save();
            }));
        })
        .catch(err => {
            console.error('Error updating order field:', err);
        });
};

var Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;