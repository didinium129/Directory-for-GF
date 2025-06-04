// restaurants.js
export const restaurants = [
  {
    id: "monkey-grounds",                  // ← unique slug
    name: "Monkey Grounds Coffee",
    type: "Café",
    address: "Benigno Aquino Ave, Mandurriao, Iloilo City",
    opening: "6:30 AM",
    closing: "10:00 PM",
    notes: "Salads, Pasta, Pizza, Vegan, Rice, Tea, Coffee.",
    photos: [
      "https://i.imgur.com/rox1YZp_d.png?maxwidth=520&shape=thumb&fidelity=high",
      "https://i.imgur.com/nTrsnu4_d.png?maxwidth=520&shape=thumb&fidelity=high"
    ],
    menu: [
      { category: "Coffee", item: "Espresso",     price: 95 },
      { category: "Coffee", item: "Cappuccino",   price: 120 },
      { category: "Pasta",  item: "Aglio e Olio", price: 210 },
      { category: "Pizza",  item: "Margherita",   price: 299 },
      // …add every menu item here
    ]
  },
  {
    id: "kucho-cafe",
    name: "Kucho Cafe",
    type: "Café",
    address: "Pison Ave, San Rafael, Mandurriao, Iloilo City",
    opening: "9:00 AM",
    closing: "8:00 PM",
    notes: "Salad wraps, Appetizers, Burgers, Coffee.",
    photos: [
      "https://i.imgur.com/T9OTrFd_d.png?maxwidth=520&shape=thumb&fidelity=high",
      "https://i.imgur.com/aPOyRTn.png"
    ],
    menu: [
      { category: "Wraps", item: "Chicken Wrap",    price: 150 },
      { category: "Burgers", item: "Beef Burger",    price: 180 },
      { category: "Coffee", item: "Flat White",      price: 130 },
      // …etc.
    ]
  },
   {
        id: "drip-coffee-community",
        name: "Drip Coffee & Community",
        type: "Café",
        address: "Greenfields Complex, Diversion Rd, Mandurriao, Iloilo City",
        opening: "7:00 AM",
        closing: "8:00 PM (10 PM Fri-Sat)",
        menu: "https://drive.google.com/file/d/1ItQTZpA36V1dHdc0GcjDvE30vZavXxtD/view?usp=sharing",
        notes: "Coffee, Tea, Pasta",
        photos: [
            "https://i.imgur.com/rpAekrP.png",
            "https://i.imgur.com/N729oCp.png"
        ],
    menu: [
      { category: "Wraps", item: "Chicken Wrap",    price: 150 },
      { category: "Burgers", item: "Beef Burger",    price: 180 },
      { category: "Coffee", item: "Flat White",      price: 130 },
      // …etc.
    ]
    },
    {
        id: "house-of-monkeys",
        name: "House of Monkeys Cafe",
        type: "Café",
        address: "Atria, Donato Pison Ave, Mandurriao, Iloilo City",
        opening: "6:00 AM",
        closing: "9:00 PM",
        menu: "https://link-to-menu.com",
        notes: "TO FOLLOW MENU - waiting response.",
        photos: [
            "https://i.imgur.com/kUeP1Pv.png",
            "https://i.imgur.com/ttweTVW.png"
        ],
    menu: [
      { category: "Wraps", item: "Chicken Wrap",    price: 150 },
      { category: "Burgers", item: "Beef Burger",    price: 180 },
      { category: "Coffee", item: "Flat White",      price: 130 },
      // …etc.
    ]
    },
		{
        id: "aroma-cafe",
        name: "Aroma Cafe",
        type: "Café",
        address: "City Times Square, Mandurriao, Iloilo City",
        opening: "9:00 AM",
        closing: "9:00 PM; 12:00 AM (Fri-Sat); 10 PM (Sun)",
        menu: "https://drive.google.com/drive/folders/1jmAyy…",
        notes: "Coffee, Meals",
        photos: [],
        menu: [
          { category: "Coffee", item: "Flat White",  price: 130 },
          { category: "Meals",  item: "Chicken Wrap", price: 150 }
          // …etc.
        ]
	}
];   //  ✅ NOW the whole array is properly closed