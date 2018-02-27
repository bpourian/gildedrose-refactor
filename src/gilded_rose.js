class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {

  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {

    for (var i = 0; i < this.items.length; i++) { //main loop starts

      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {//main if starts
            console.log("Inside loop top");

            if (this.items[i].quality > 0) {//inner if starts
              console.log("Inside loop 2");

                if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {

                  this.items[i].quality = this.items[i].quality - 1;

                }

              }//inner if ends

      } else {


            if (this.items[i].quality < 50) {
              console.log("Inside loop middle");

              this.items[i].quality = this.items[i].quality + 1;
              if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {

                  if (this.items[i].sellIn < 11) {
                        if (this.items[i].quality < 50) {
                          this.items[i].quality = this.items[i].quality + 1;
                        }
                      }


                    if (this.items[i].sellIn < 6) {
                          if (this.items[i].quality < 50) {
                            this.items[i].quality = this.items[i].quality + 1;
                          }
                    }
              }
            }

      }//outer main if ends
      /////////////////////

      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {// second if statement starts
        console.log("Inside loop bottom");

        this.items[i].sellIn = this.items[i].sellIn - 1;
        }// second if ends


        /////////////////


      if (this.items[i].sellIn < 0) { // third if starts
        console.log("Inside loop 2");

        if (this.items[i].name != 'Aged Brie') {
                  if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                    console.log("Inside loop 3");

                        if (this.items[i].quality > 0) {//inner if starts

                            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                                    this.items[i].quality = this.items[i].quality - 1;
                                        }
                                }
                    } else {
                        console.log("Inside loop 4");
                        this.items[i].quality = this.items[i].quality - this.items[i].quality;
                        }
        } else {

                      if (this.items[i].quality < 50) {//inner if starts
                        this.items[i].quality = this.items[i].quality + 1;
                      }// inner if ends

        }//inner if ends

      }// third if ends

      //////////////


    } //update quality ends

    return this.items;
  }

  
}
