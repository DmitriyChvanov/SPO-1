import { makeAutoObservable } from "mobx";
export default class ClothesStore {
  constructor() {
    this._types = [
      { id: 1, name: "all" },
      { id: 2, name: "summer coll" },
      { id: 3, name: "new arrive" },
      { id: 4, name: "best sell" },
      { id: 5, name: "flash" },
    ];
    this._brands = [
      { id: 1, name: "ZNY" },
      { id: 1, name: "ZAZA" },
      { id: 1, name: "SASA" },
    ];
    this._clothes = [
      {
        id: 1,
        name: "ZNY SHIRT",
        price: 100,
        img: "https://sizcentr.ru/upload/iblock/9b4/9b4c2d153b26e3c2ceaff98bde3bcc5b.png",
      },
      {
        id: 2,
        name: "ZAZA SHIRT",
        price: 150,
        img: "https://sizcentr.ru/upload/iblock/9b4/9b4c2d153b26e3c2ceaff98bde3bcc5b.png",
      },
      {
        id: 3,
        name: "SASA SHIRT",
        price: 50,
        img: "https://files.gifts.ru/reviewer/tb/51/1374.92_30_500.jpg",
      },
      {
        id: 4,
        name: "SASA SHIRT",
        price: 10,
        img: "https://files.gifts.ru/reviewer/tb/51/1374.92_30_500.jpg",
      },
      {
        id: 5,
        name: "SASA SHIRT",
        price: 200,
        img: "https://files.gifts.ru/reviewer/tb/51/1374.92_30_500.jpg",
      },
      // {
      //   id: 6,
      //   name: "SASA SHIRT",
      //   price: 99,
      //   img: "https://files.gifts.ru/reviewer/tb/51/1374.92_30_500.jpg",
      // },
    ];
    this._selectedType = {};
    this._selectedClothes = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setClothes(clothes) {
    this._clothes = clothes;
  }
  setSelectedType(type) {
    this.selectedType = type;
  }
  setSelectedClothes(clothes) {
    this._selectedClothes = clothes;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get clothes() {
    return this._clothes;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedClothes() {
    return this._selectedClothes;
  }
}
