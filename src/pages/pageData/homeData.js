import ROUTES from '../routes';

const homeData = {
  heroSection: {
    containerHeight: 50, // rem amount
    backgroundImages: {
      mobile: require('../../assets/home/mobile/image-hero-coffeepress.jpg').default,
      tablet: require('../../assets/home/tablet/image-hero-coffeepress.jpg').default,
      desktop: require('../../assets/home/desktop/image-hero-coffeepress.jpg').default,
    },
    title: {
      text: "Great coffee made simple.",
      muted: false // doesn't have smaller text for the title
    },
    intro: "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
    button: {
      label: "Create your plan",
      link: ROUTES.SUBSCRIBE
    }
  },
  // collection of coffee
  ourCollection: {
    title: "Our collection",
    collection: [
      {
        id: "gran-espresso",
        image: require('../../assets/home/desktop/image-gran-espresso.png').default,
        name: "Gran Espresso",
        description: "Light and flavorful blend with cocoa and black pepper for an intense experience"
      },
      {
        id: "planalto",
        image: require('../../assets/home/desktop/image-planalto.png').default,
        name: "Planalto",
        description: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
      },
      {
        id: "piccollo",
        image: require('../../assets/home/desktop/image-piccollo.png').default,
        name: "Piccollo",
        description: "Mild and smooth blend featuring notes of toasted almond and dried cherry "
      },
      {
        id: "danche",
        image: require('../../assets/home/desktop/image-danche.png').default,
        name: "Danche",
        description: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
      },
    ]
  },
  // steps to subscribing
  simpleSteps: {
    tagline: "How it works",
    button: {
      label: "Create your plan",
      link: ROUTES.SUBSCRIBE
    },
    steps: [
      {
        step: 1,
        title: "Pick your coffee",
        description: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
      },
      {
        step: 2,
        title: "Choose the frequency",
        description: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
      },
      {
        step: 3,
        title: "Receive and enjoy!",
        description: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world- class coffees curated to provide a distinct tasting experience."
      }
    ]
  },
}

export default homeData;