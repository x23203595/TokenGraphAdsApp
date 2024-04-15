var Ad = require('../models/ad');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/GraphAds');

var ads = [
    {
        imagePath: '/TokenGraphAdsApp/public/images/cityscape.jpg',
        title: 'City Scape',
        description: 'City',
        price: 0.004,
        order: 1
    },
    {
        imagePath: '/TokenGraphAdsApp/public/images/night.jpg',
        title: 'Night',
        description: 'Night Time',
        price: 0.002,
        order: 2
    },
    {
        imagePath: '/TokenGraphAdsApp/public/images/muddybites.jpg',
        title: 'Muddy Bites',
        description: 'Muddy Bites Snack',
        price: 0.001,
        order: 3
    },
    {
        imagePath: '/TokenGraphAdsApp/public/images/bus.jpg',
        title: 'Bus Rush',
        description: 'Buses Rush',
        price: 0.003,
        order: 4
    },
    {
        imagePath: '/TokenGraphAdsApp/public/images/burger.jpg',
        title: 'Burger',
        description: 'Sizzling!',
        price: 0.002,
        order: 5 
    },
    {
        imagePath: '/TokenGraphAdsApp/public/images/london.jpg',
        title: 'London',
        description: 'London City',
        price: 0.001,
        order: 6
    },
    {
        imagePath: '/TokenGraphAdsApp/public/images/car.jpg',
        title: 'Snow Car',
        description: 'Car',
        price: 0.002,
        order: 7
    },
    {
        imagePath: '/TokenGraphAdsApp/public/images/coffee.jpg',
        title: 'Coffee',
        description: 'Fancy some Coffee?',
        price: 0.004,
        order: 8
    },
];

Promise.all(ads.map(updateOrCreateAd))
    .then(() => {
        console.log('All Graphic Ads updated/inserted successfully.');

        removeExtraAds()
            .then(() => console.log('Extra ads removed successfully'))
            .catch(error => console.error('Error removing extra ads:', error))
            .finally(() => mongoose.disconnect()); 
    })
    .catch(error => {
        console.error('Error updating/inserting Graphic Ads:', error);
        mongoose.disconnect();
    });

function updateOrCreateAd(adData) {
    return Ad.findOneAndUpdate(
        { imagePath: adData.imagePath }, 
        adData, 
        { upsert: true, new: true } 
    ).exec();
}

function removeExtraAds() {
    return Ad.aggregate([
        {
            $group: {
                _id: { imagePath: '$imagePath' }, 
                uniqueIds: { $addToSet: '$_id' }, 
                count: { $sum: 1 } 
            }
        },
        {
            $match: {
                count: { $gt: 1 } 
            }
        }
    ]).then(duplicateGroups => {
        const duplicateIds = duplicateGroups.map(group => group.uniqueIds.slice(1)).flat();
        return Ad.deleteMany({ _id: { $in: duplicateIds } }).exec();
    });
}