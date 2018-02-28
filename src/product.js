function Product(item) {
  this.item_class = item;
}


Product.prototype.name = function () {
  return this.item_class.name;
};

Product.prototype.sellIn = function () {
  return this.item_class.sellIn;
};

Product.prototype.quality = function () {
  return this.item_class.quality;
};
