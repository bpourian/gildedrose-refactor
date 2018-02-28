function Shop(items) {
  this.items = items;
  this.conditionArray = [];
  this.existingProductConditions();
}

Shop.prototype.addProductConditions = function (name, sellIn, quality) {
  this.conditionArray.push([name,sellIn, quality]);
};

Shop.prototype.existingProductConditions = function () {
  this.conditionArray = [["Aged Brie",-1, 1],["Sulfuras, Hand of Ragnaros",2, 0]]
};

Shop.prototype.updateQuality = function () {



};
