var Ad = require('../models/ad');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/GraphAds');

var ads = [
    {
    imagePath:'/TokenGraphAdsApp/public/images/cityscape.jpg',
    title: 'City Scape',
    description: 'City',
    price: 1 
},
{
    imagePath:'/TokenGraphAdsApp/public/images/night.jpg',
    title: 'Night',
    description: 'Night Time',
    price: 1 
},
{
    imagePath:'/TokenGraphAdsApp/public/images/muddybites.jpg',
    title: 'Muddy Bites',
    description: 'Muddy Bites Snack',
    price: 1 
},
{
    imagePath:'/TokenGraphAdsApp/public/images/bus.jpg',
    title: 'Bus Rush',
    description: 'Buses Rush',
    price: 1 
},
{
    imagePath:'/TokenGraphAdsApp/public/images/cityscape.jpg',
    title: 'City Scape',
    description: 'Night',
    price: 1 
},
{
    imagePath:'/TokenGraphAdsApp/public/images/london.jpg',
    title: 'London',
    description: 'London City',
    price: 1 
},
{
    imagePath:'/TokenGraphAdsApp/public/images/car.jpg',
    title: 'Snow Car',
    description: 'Car',
    price: 1 
},
{
    imagePath:'/TokenGraphAdsApp/public/images/coffee.jpg',
    title: 'Coffee',
    description: 'Coffee Snack',
    price: 1 
},
];

Promise.all(ads.map(ad => new Ad(ad).save()))
    .then(() => {
        console.log('All Graphic Ads saved successfully.');
        mongoose.disconnect();
    })
    .catch(error => {
        console.error('Error saving Graphic Ads:', error);
        mongoose.disconnect();
    });
function exit() {
    mongoose.disconnect();
}