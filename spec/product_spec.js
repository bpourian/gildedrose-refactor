describe("Product class test", function () {

  it("Should return product name, quality and sellin", function () {

    var product = new Product(new Item("Aged Brie",1, 2))
    var product2 = new Product(new Item("Sulfuras, Hand of Ragnaros",2, 0))
    var product3 = new item
    // console.log(product.item_class.name)
    // const shop = new Shop([product, product2]);
    // console.log(shop);
    //
    // console.log(shop.items[1].name());
    //
    //
    console.log(product.name());
    console.log(product.sellIn());
    console.log(product.quality());

    var shop = new Shop([product, product2])
    console.log(shop)

    console.log(shop.items[0].name())

    shop.addProductConditions("Random", -1, 2);
    shop.addProductConditions("Test", -2, 3);
    console.log(shop.conditionArray);
  })

})
