import { ref } from "vue";
import beefWontonUrl from "./assets/beef-wonton.jpg";
import chicken from "./assets/chicken.jpg";

export const addOns = {
  modify(name, price) {
    let newValue = [];

    this.value.forEach((addOn) => {
      newValue.push({
        ...addOn,
        name: name + " w/ " + addOn.name,
        price: price + addOn.price,
      });
    });

    return newValue;
  },
  value: [
    {
      name: "Sweet & Sour Pork",
      category: "Add-Ons",
      price: 85,
      tags: ["NEW", "RECOMMENDED"],
    },
    {
      name: "Szechuan Pork",
      category: "Add-Ons",
      price: 85,
      tags: ["NEW"],
    },
    {
      name: "Wonton Dumplings",
      category: "Add-Ons",
      price: 80,
      tags: ["POPULAR"],
    },
    {
      name: "Shanghai Rolls - 6Pcs",
      category: "Add-Ons",
      price: 80,
      tags: ["POPULAR"],
    },
    {
      name: "Fried Chicken - 1Pc",
      category: "Add-Ons",
      price: 65,
    },
    {
      name: "Fried Egg",
      category: "Add-Ons",
      price: 25,
    },
  ],
};

export const products = ref([
  {
    id: 1,
    name: "Beef Wonton Mami",
    images: [beefWontonUrl],
    price: 260,
    category: "Specialty",
    tags: ["POPULAR", "RECOMMENDED"],
  },
  {
    id: 2,
    name: "Beef Mami",
    price: 190,
    category: "Specialty",
  },
  {
    id: 3,
    name: "Wonton Mami",
    price: 175,
    category: "Specialty",
  },
  {
    id: 4,
    name: "Wonton Soup",
    price: 125,
    category: "Specialty",
  },
  {
    id: 6,
    name: "Fried Chicken",
    images: [chicken],
    category: "Family Size Entree",
    tags: ["POPULAR"],
    variants: [
      {
        id: 7,
        parent_id: 6,
        name: "4PC Fried Chicken - Classic",
        price: 260,
      },
      {
        id: 8,
        parent_id: 6,
        name: "6PC Fried Chicken - Classic",
        price: 390,
      },
      {
        id: 9,
        parent_id: 6,
        name: "8PC Fried Chicken - Classic",
        price: 520,
      },
      {
        id: 10,
        parent_id: 6,
        name: "4PC Fried Chicken - Hao Bao Original",
        price: 260,
        tags: ["POPULAR", "RECOMMENDED"],
      },
      {
        id: 11,
        parent_id: 6,
        name: "6PC Fried Chicken - Hao Bao Original",
        price: 390,
        tags: ["POPULAR", "RECOMMENDED"],
      },
      {
        id: 12,
        parent_id: 6,
        name: "8PC Fried Chicken - Hao Bao Original",
        price: 520,
        tags: ["POPULAR", "RECOMMENDED"],
      },
      {
        id: 13,
        parent_id: 6,
        name: "4PC Fried Chicken - Orange Chicken",
        price: 260,
        tags: ["POPULAR"],
      },
      {
        id: 14,
        parent_id: 6,
        name: "6PC Fried Chicken - Orange Chicken",
        price: 390,
        tags: ["POPULAR"],
      },
      {
        id: 15,
        parent_id: 6,
        name: "8PC Fried Chicken - Orange Chicken",
        price: 520,
        tags: ["POPULAR"],
      },
      {
        id: 16,
        parent_id: 6,
        name: "4PC Fried Chicken - Honey Garlic",
        price: 260,
      },
      {
        id: 17,
        parent_id: 6,
        name: "6PC Fried Chicken - Honey Garlic",
        price: 390,
      },
      {
        id: 18,
        parent_id: 6,
        name: "8PC Fried Chicken - Honey Garlic",
        price: 520,
      },
      {
        id: 19,
        parent_id: 6,
        name: "4PC Fried Chicken - Soy Garlic",
        price: 260,
        tags: ["NEW"],
      },
      {
        id: 20,
        parent_id: 6,
        name: "6PC Fried Chicken - Soy Garlic",
        price: 390,
        tags: ["NEW"],
      },
      {
        id: 21,
        parent_id: 6,
        name: "8PC Fried Chicken - Soy Garlic",
        price: 520,
        tags: ["NEW"],
      },
      {
        id: 22,
        parent_id: 6,
        name: "4PC Fried Chicken - Szechuan",
        price: 260,
        tags: ["NEW"],
      },
      {
        id: 23,
        parent_id: 6,
        name: "6PC Fried Chicken - Szechuan",
        price: 390,
        tags: ["NEW"],
      },
      {
        id: 24,
        parent_id: 6,
        name: "8PC Fried Chicken - Szechuan",
        price: 520,
        tags: ["NEW"],
      },
    ],
  },
  {
    id: 25,
    name: "Beef Brocolli",
    price: 285,
    category: "Family Size Entree",
    tags: ["NEW"],
  },
  {
    id: 26,
    name: "Sweet & Sour Pork",
    price: 245,
    category: "Family Size Entree",
    tags: ["NEW", "RECOMMENDED"],
  },
  {
    id: 27,
    name: "Szechuan Pork",
    price: 245,
    category: "Family Size Entree",
    tags: ["NEW"],
  },
  {
    id: 28,
    name: "Spring Rolls",
    price: 145,
    category: "Family Size Entree",
  },
  {
    name: "Shanghai Rolls - 15Pcs",
    price: 195,
    category: "Family Size Entree",
    tags: ["POPULAR"],
  },
  {
    name: "Stir Fried Bok Choy",
    price: 195,
    category: "Family Size Entree",
    tags: ["RECOMMENDED"],
  },
  {
    name: "Soy Garlic Spinach",
    price: 120,
    category: "Family Size Entree",
  },

  {
    name: "Shrimp Fried Rice - Family Platter",
    price: 360,
    category: "Fried Rice - Family Platter",
  },
  {
    name: "Yang Chow - Family Platter",
    price: 315,
    category: "Fried Rice - Family Platter",
    tags: ["POPULAR", "RECOMMENDED"],
  },
  {
    name: "Pork Chow Fan - Family Platter",
    price: 265,
    category: "Fried Rice - Family Platter",
  },
  {
    name: "Hao Bao Egg Fried Rice - Family Platter",
    price: 360,
    category: "Fried Rice - Family Platter",
    tags: ["POPULAR"],
  },
  {
    name: "Hao Bao Egg Fried Rice",
    price: 85,
    category: "Rice Bowls",
    tags: ["RECOMMENDED"],
    variants: addOns.modify("Hao Bao Egg Fried Rice", 85),
  },
  {
    name: "Pork Chow Fan",
    price: 95,
    category: "Rice Bowls",
    variants: addOns.modify("Pork Chow Fan", 95),
  },
  {
    name: "Yang Chow",
    price: 110,
    category: "Rice Bowls",
    tags: ["RECOMMENDED", "POPULAR"],
    variants: addOns.modify("Yang Chow", 110),
  },
  {
    name: "Shrimp Fried Rice",
    price: 125,
    category: "Rice Bowls",
    variants: addOns.modify("Shrimp Fried Rice", 125),
  },

  {
    name: "Shrimp Chow Mein - Family Platter",
    price: 390,
    category: "Chow Mein - Family Platter",
  },
  {
    name: "Beef Chow Mein - Family Platter",
    price: 345,
    category: "Chow Mein - Family Platter",
  },
  {
    name: "Pork Chow Mein - Family Platter",
    price: 315,
    category: "Chow Mein - Family Platter",
    tags: ["RECOMMENDED", "POPULAR"],
  },
  {
    name: "Vegetable Chow Mein - Family Platter",
    price: 315,
    category: "Chow Mein - Family Platter",
  },

  {
    name: "Shrimp Chow Mein",
    price: 130,
    category: "Chow Mein Bowls",
    variants: addOns.modify("Shrimp Chow Mein", 130),
  },
  {
    name: "Beef Chow Mein",
    price: 115,
    category: "Chow Mein Bowls",
    variants: addOns.modify("Beef Chow Mein", 115),
  },
  {
    name: "Pork Chow Mein",
    price: 105,
    category: "Chow Mein Bowls",
    tags: ["RECOMMENDED", "POPULAR"],
    variants: addOns.modify("Pork Chow Mein", 105),
  },
  {
    name: "Vegetable Chow Mein",
    price: 105,
    category: "Chow Mein Bowls",
    variants: addOns.modify("Vegetable Chow Mein", 105),
  },
  ...addOns.value,
  {
    name: "Chicken Sandwich",
    price: 85,
    category: "Others",
  },
  {
    name: "Premium Leche Flan",
    price: 85,
    category: "Others",
    tags: ["RECOMMENDED"],
  },
]);
