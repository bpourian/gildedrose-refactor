describe("Gilded Rose", function() {

  describe("Aged Bree tests", function () {

    it("should return item name", function() {
      const gildedRose = new Shop([ new Item("Aged Brie",0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Aged Brie");
    })

    it("shold return item sellin", function () {
      const gildedRose = new Shop([ new Item("Aged Brie",0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(2)
    });

    it("shold return item sellin", function () {
      const gildedRose = new Shop([ new Item("Aged Brie",0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(2)
    });


    it("shold return item sellin and quality", function () {
      const gildedRose = new Shop([ new Item("Aged Brie",0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(2);
    });

  })

  describe("Sulfuras, Hand of Ragnaros tests", function () {

    it("shold return item name", function () {
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros",0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
    })

    it("shold return item sellin and quality", function () {
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros",0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
    })

    it("shold return item sellin and quality", function () {
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros",10, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(10);
    })

    it("shold return item sellin and quality", function () {
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros",0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    })

    it("shold return item sellin and quality", function () {
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros",0, 50) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0)
      expect(items[0].quality).toEqual(50);
    })
  })


  describe("Random item test", function () {

    it("shold return item name", function () {
      const gildedRose = new Shop([ new Item("item",0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("item");
    })

    it("shold return item sellin and quality", function () {
      const gildedRose = new Shop([ new Item("Random",0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(-1)
    })

    it("shold return item sellin and quality", function () {
      const gildedRose = new Shop([ new Item("Random",2, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(1)
    })

    it("shold return item sellin and quality", function () {
      const gildedRose = new Shop([ new Item("Random",0, 50) ]);
      const items = gildedRose.updateQuality();
      console.log(items)
      expect(items[0].quality).toEqual(48);
      expect(items[0].sellIn).toEqual(-1)
    })
  })
});
