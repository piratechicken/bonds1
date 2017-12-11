const audience = [
  { 
    name: "men",
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
    name: "women",
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
  }
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