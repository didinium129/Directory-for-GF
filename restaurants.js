// restaurants.js
export const restaurants = [
  {
    id: "monkey-grounds",                  // ← unique slug
    menu: [
      { category: "Coffee - Arabica", item: "Americano (Hot)",     price: 115 },
      { category: "Coffee - Arabica", item: "Americano (Iced)",     price: 125 },
      { category: "Coffee - Arabica", item: "Aerocano (Iced)",   price: 125 },
      { category: "Coffee - Arabica", item: "Mocha (Hot)",   price: 145 },
      { category: "Coffee - Arabica", item: "Mocha (Iced)",   price: 155 },
      { category: "Coffee - Robusta", item: "Americano (Hot)",   price: 85 },
      { category: "Coffee - Robusta", item: "Americano (Iced)",   price: 95 },
      { category: "Coffee - Robusta", item: "Mocha (Hot)",   price: 115 },
      { category: "Coffee - Robusta", item: "Mocha (Iced)",   price: 125 },
      { category: "Salad",  item: "Savory Summer (Greens and Veggies on Raspberry Vinaigrette Dressing. w/ poached egg and croutons)",   price: 220 },
      { category: "Salad",  item: "Oriental Salad (Lettuce, carrots, jicama, peanuts, fried vermicelli with hoisin-sesame dressing)",   price: 220 },
      { category: "Salad",  item: "Roquette Salata (Roquette arugula and romaine on a greek vinaigrette dressing, walnut praline, sun-dried tomatoes, shaved parmesan)",   price: 245 },
      { category: "Salad",  item: "Quinoa Salad (Greens, quinoa, seedless grapes, apple, candied walnut, blue cheese, balsamic-raspberry dressing)",   price: 245 },
      { category: "Salad",  item: "Chicken Waldorf Salad (Greens with arugula, faux chicken, fruits, walnuts, pecans, monkey's Waldorf dressing)",   price: 245 },
      { category: "Salad",  item: "Mango Kani Salad (Greens with mango, mixed veggies, faux shrimp, seaweed with oriental sesame dressing)",   price: 245 },
      { category: "Salad",  item: "Chicken Caesar Salad (Greens with faux chicken, croutons with monkey's caesar dressing)",   price: 245 },
      { category: "Salad",  item: "MGC Salad (Greens with honey mustard dressing topped with candied peanuts, sunflower seeds and blue cheese)",   price: 180 },
      { category: "Salad",  item: "Ham and Potato Salad (Steamed potatoes with boiled egg and faux ham, creamy mayo dressing)",   price: 225 },
      { category: "Salad",  item: "Mexican Taco Salad (Nachos with lettuce, cucumber, tomatoes, roasted cord, salsa, cheese)",   price: 245 },
      { category: "Breakfast",  item: "Longganisa (w/ 2 eggs)",   price: 190 },
      { category: "Breakfast",  item: "Embutido (w/ 2 eggs)",   price: 190 },
      { category: "Breakfast",  item: "Meatless Tocino (w/ 2 eggs)",   price: 155 },
      { category: "Breakfast",  item: "Meatless Tapa (w/ 2 eggs)",   price: 155 },
      { category: "Breakfast",  item: "Chicken Nuggets (w/ 2 eggs)",   price: 190 },
      { category: "Breakfast",  item: "Sausage (w/ 2 eggs)",   price: 190 },
      { category: "Breakfast",  item: "Faux Crispy Bacon (w/ 2 eggs)",   price: 199 },
      { category: "Rice Meals",  item: "Fire Bowl (Shiitake, Tofu, Chili Sauce)",   price: 185 },
      { category: "Rice Meals",  item: "Teriyaki Bowl (Oyster Mushroom, Tofu, Teriyaki Sauce)",   price: 185 },
      { category: "Rice Meals",  item: "Un-Sisig Bowl (w/ Egg & Mayo)",   price: 190 },
      { category: "Rice Meals",  item: "Vegan Un-Sisig Bowl (w/o Egg and Mayo)",   price: 185 },
      { category: "Rice Meals",  item: "Soy Lemon Shrimp (Faux Shrimp, Oyster, Tofu, Soy Lemon sauce with cashew)",   price: 225 },
      { category: "Rice Meals",  item: "Kung Pao Shrimp (Faux Shrimp, Oyster, Tofu, Kung pao sauce with peanuts)",   price: 225 },
      { category: "Rice Meals",  item: "Chicken Ala King (Chicken, White Sauce)",   price: 185 },
      { category: "Rice Meals",  item: "Orange Chicken (Chicken, Oyster, Orange sauce)",   price: 205 },
      { category: "Rice Meals",  item: "Loco Moco (Burger Patty, Poached Egg, Brown Gravy topped w/ Caramelized Onion)",   price: 210 },
      { category: "Rice Meals",  item: "3 Mushrooms with Gravy (3 Mushrooms, Egg, Garlic Gravy Sauce)",   price: 210 },
      { category: "Rice Meals",  item: "Vegan Garlic Lechon Kawali (Plant-based)",   price: 235 },
      { category: "Rice Meals",  item: "Meatless Adobo (Faux Pork + Boiled Egg)",   price: 265 },
      { category: "Pasta",  item: "Aglio Olio (Olives, Garlic)",   price: 165 },
      { category: "Pasta",  item: "Chili Garlic pasta (Chili Garlic Sauce, Sesame Seeds, Spring Onions)",   price: 165 },
      { category: "Pasta",  item: "Pasta Al Limone (Creamy Lemon Pasta)",   price: 210 },
      { category: "Pasta",  item: "Pesto",   price: 185 },
      { category: "Pasta",  item: "Creamy Pesto (w/ White Sauce)",   price: 199 },
      { category: "Pasta",  item: "La Vegan pomodoro (Vegan Sun Dried Tomato Pesto pasta)",   price: 235 },
      { category: "Pasta",  item: "Spaghetti with Baked Broccoli Balls (3 Baked Broccoli Balls)",   price: 199 },
      { category: "Pasta",  item: "Messy Spaghetti (Tomato Sauce, White Sauce)",   price: 195 },
      { category: "Pasta",  item: "Meaty Bolognese (Faux Ground Meat, Tomato Sauce)",   price: 199 },
      { category: "Pasta",  item: "Carbonara Shiitake (White Sauce, Shiitake Fritters)",   price: 199 },
      { category: "Pasta",  item: "The Vegan Lady (Carbonara with Vegan Cream)",   price: 220 },
      { category: "Pasta",  item: "Pasta Arugula (Pasta with Sauteed Arugula, Sunflower Seeds, Tomato, Parmigiano Reggiano)",   price: 235 },
      { category: "Pasta",  item: "Pasta Georgina (Fresh Tomato, Basil, Roasted Garlic, Sunflower Seeds, Blue Cheese)",   price: 265 },
      { category: "Pizza",  item: "Margherita (Tomato, Basil, Cheese)",   price: 325 },
      { category: "Pizza",  item: "Four Cheese",   price: 325 },
      { category: "Pizza",  item: "Spinach Alfredo (Spinach, Artichoke, Shiitake Mushroom, Caramelized Onion)",   price: 355 },
      { category: "Pizza",  item: "Farmer's Pizza (Grilled Cucumber, Eggplant & Bell pepper)",   price: 355 },
      { category: "Pizza",  item: "Peach Please (Peach, Walnut, Pecan, Sundried Tomato, Honeyed Arugula)",   price: 355 },
      { category: "Pizza",  item: "Breakfast Sausage & Gravy (Sausage, Egg, Caramelized Onions, Gravy)",   price: 399 },
      { category: "Pizza",  item: "Monkey's Choice (Bacon, Ground Meat, Sausage, Spicy Honeyed Arugula)",   price: 415 },
      { category: "Ice Cream",  item: "Brownie Ala Mode (Vanilla, Mixed Nuts, Brownies, Banana, Chocolate & Caramel Syrup)",   price: 150 },


      // …add every menu item here
    ]
  },
  {
    id: "kucho-cafe",
    menu: [
      { category: "Wraps", item: "Chicken Wrap",    price: 150 },
      { category: "Burgers", item: "Beef Burger",    price: 180 },
      { category: "Coffee", item: "Flat White",      price: 130 },
      // …etc.
    ]
  },
   {
        id: "drip-coffee-community",
    menu: [
      { category: "Wraps", item: "Chicken Wrap",    price: 150 },
      { category: "Burgers", item: "Beef Burger",    price: 180 },
      { category: "Coffee", item: "Flat White",      price: 130 },
      // …etc.
    ]
    },
    {
        id: "house-of-monkeys",
    menu: [
      { category: "Wraps", item: "Chicken Wrap",    price: 150 },
      { category: "Burgers", item: "Beef Burger",    price: 180 },
      { category: "Coffee", item: "Flat White",      price: 130 },
      // …etc.
    ]
    },
		{
        id: "aroma-cafe",
        menu: [
          { category: "Coffee", item: "Flat White",  price: 130 },
          { category: "Meals",  item: "Chicken Wrap", price: 150 }
          // …etc.
        ]
	}
];   //  ✅ NOW the whole array is properly closed
