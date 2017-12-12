const audience = [
  { 
    name: "Men",
    category: [
      {
        name: "underwear",
        subCategories: ["trunks", "briefs", "y-fronts"]
      },
      {
        name: "tops",
        subCategories: ["tees", "singlets", "chesty"]
      },
      {
        name: "clothing",
        subCategories: ["sloppy joes", "hoodies", "shorts"]
      },
      {
        name: "socks and accessories",
        subCategories: ["casual", "business", "outdoor"]
      }
    ]
  },
  { 
    name: "Women",
    category: [
      {
        name: "underwear",
        subCategories: ["hipster", "bikini", "sport"]
      },
      {
        name: "bras",
        subCategories: ["contour", "sport", "maternity"]
      },
      {
        name: "clothing",
        subCategories: ["sloppy joes", "hoodies", "shorts"]
      },
      {
        name: "socks and tights",
        subCategories: ["casual", "business", "sport"]
      }
    ]
  },
  { 
    name: "Kids",
    category: [
      {
        name: "girl's clothing",
        subCategories: ["tees", "hoodies", "leggings"]
      },
      {
        name: "boy's clothing",
        subCategories: ["tees", "trackies", "shorts"]
      },
      {
        name: "socks and accessories",
        subCategories: ["socks", "leggings", "accessories"]
      }
    ]
  }
]


const styles = [
  {
    id: 1,
    name: "raglan",
    price: 10
  },
  {
    id: 2,
    name: "v neck",
    price: 15
  },
  {
    id: 3,
    name: "crew",
    price: 20
  },
  {
    id: 4,
    name: "daggy",
    price: 20
  },
  {
    id: 5,
    name: "nerd shirt",
    price: 20
  },
  {
    id: 6,
    name: "polo",
    price: 20
  },
]

const colors = [
  {
    id: 1,
    name: "red",
    stock: true
  },
  {
    id: 2,
    name: "blue",
    stock: true
  },
  {
    id: 3,
    name: "green",
    stock: true
  }
]

const sizes = [
  {
    id: 1,
    name: "s",
    stockStatus: "lots"
  },
  {
    id: 2,
    name: "m",
    stockStatus: "low"
  },
  {
    id: 3,
    name: "l",
    stockStatus: "out of stock"
  }
]

module.exports = {
  audience,
  styles,
  colors,
  sizes
}