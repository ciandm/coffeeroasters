const subscribeData = {
  listItems: [
    'Preferences',
    'Bean Type',
    'Quantity',
    'Grind Option',
    'Deliveries'
  ],
  selection: [
    {
      id: "preference",
      question: "How do you drink your coffee?",
      options: [
        {
          id: "capsule",
          answer: "Capsule",
          description: "Compatible with Nespresso systems and similar brewers"
        },
        {
          id: "filter",
          answer: "Filter",
          description: "For pour over or drip methods like Aeropress, Chemex, and V60"
        },
        {
          id: "espresso",
          answer: "Espresso",
          description: "Dense and finely ground beans for an intense, flavorful experience"
        },
      ]
    },
    {
      id: "type",
      question: "What type of coffee?",
      options: [
        {
          id: "single-origin",
          answer: "Single origin",
          description: "Distinct, high quality coffee from a specific family-owned farm"
        },
        {
          id: "decaf",
          answer: "Decaf",
          description: "Just like regular coffee, except the caffeine has been removed"
        },
        {
          id: "blended",
          answer: "Blended",
          description: "Combination of two or three dark roasted beans of organic coffees"
        },
      ]
    },
    {
      id: "weight",
      question: "How much would you like?",
      options: [
        {
          id: "250g",
          answer: "250g",
          description: "Perfect for the solo drinker. Yields about 12 delicious cups."
        },
        {
          id: "500g",
          answer: "500g",
          description: "Perfect option for a couple. Yields about 40 delectable cups."
        },
        {
          id: "1000g",
          answer: "1000g",
          description: "Perfect for offices and events. Yields about 90 delightful cups."
        },
      ]
    },
    {
      id: "grind",
      question: "Want us to grind them?",
      options: [
        {
          id: "wholebean",
          answer: "Wholebean",
          description: "Best choice if you cherish the full sensory experience"
        },
        {
          id: "filter",
          answer: "Filter",
          description: "For drip or pour-over coffee methods such as V60 or Aeropress"
        },
        {
          id: "cafetiére",
          answer: "Cafetiére",
          description: "Course ground beans specially suited for french press coffee"
        },
      ]
    },
    {
      id: "delivery",
      question: "How often should we deliver?",
      options: [
        {
          id: "weekly",
          answer: "Every week",
          description: {
            '250g': "$7.20 per shipment. Includes free first-class shipping.",
            '500g': "$13.00 per shipment. Includes free first-class shipping.",
            '1000g': "$22.00 per shipment. Includes free first-class shipping."
          }
        },
        {
          id: "fortnightly",
          answer: "Every 2 weeks",
          description: {
            '250g': "$9.60 per shipment. Includes free first-class shipping.",
            '500g': "$17.50 per shipment. Includes free first-class shipping.",
            '1000g': "$32.00 per shipment. Includes free first-class shipping."
          }
        },
        {
          id: "monthly",
          answer: "Monthly",
          description: {
            '250g': "$12.00 per shipment. Includes free first-class shipping.",
            '500g': "$22.00 per shipment. Includes free first-class shipping.",
            '1000g': "$42.00 per shipment. Includes free first-class shipping."
          }
        },
      ]
    },
  ]
}

export default subscribeData;