const Product = require("./model/product");

class FakeDB {
  constructor() {
    this.products = [
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: "Phone XL",
        price: 99000,
        description: "A large phone with one of the best screens",
        heding1: "サンプルテキスト１",
        heding2: "サンプルテキスト２",
        heding3: "サンプルテキスト３",
        headingtext1: "サンプルテキスト サンプルテキスト",
        headingtext2: "テキスト文章 テキスト文章",
        headingtext3: "test test test test",
      },
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: "Phone Mini",
        price: 77000,
        description: "A large phone with one of the best screens",
        heding1: "サンプルテキスト１",
        heding2: "サンプルテキスト２",
        heding3: "サンプルテキスト３",
        headingtext1: "サンプルテキスト サンプルテキスト",
        headingtext2: "テキスト文章 テキスト文章",
        headingtext3: "test test test test",
      },
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: "Phone Standard",
        price: 28000,
        description: "A large phone with one of the best screens",
        heding1: "サンプルテキスト１",
        heding2: "サンプルテキスト２",
        heding3: "サンプルテキスト３",
        headingtext1: "サンプルテキスト サンプルテキスト",
        headingtext2: "テキスト文章 テキスト文章",
        headingtext3: "test test test test",
      },
    ];
  }

  async initDb() {
    await this.cleanDb();
    this.pushProductsToDb();
  }

  async cleanDb() {
    await Product.deleteMany({});
  }

  pushProductsToDb() {
    this.products.forEach((product) => {
      const newProduct = new Product(product);
      newProduct.save();
    });
  }

  seeDb() {
    this.pushProductsToDb();
  }
}
module.exports = FakeDB;
