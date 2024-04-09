module.exports = function Cart(oldCart){
    this.ads = oldCart.ads || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    this.add = function(ad, id){
        var storedAd = this.ads[id];
        if (!storedAd)
        {
            storedAd = this.ads[id] = {ad: ad, qty: 0, price: 0};
        }
        storedAd.qty++;
        storedAd.price = storedAd.ad.price * storedAd.qty;
        this.totalQty++;
        this.totalPrice += storedAd.ad.price;
    };

    this.generateArray = function() {
        var arr = [];
        for (var id in this.ads)
        {
            arr.push(this.ads[id]);
        }
        return arr;
    };
};