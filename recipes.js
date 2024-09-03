const recipes = [
  {
    _id: '1',
    name: 'Spaghetti Carbonara',
    image: '/images/spaghetti_carbonara.jpg',
    ingredients: [
      '200g spaghetti',
      '100g pancetta',
      '2 large eggs',
      '50g pecorino cheese',
      '50g parmesan',
      '2 cloves of garlic',
      'Black pepper',
      'Salt'
    ],
    cookingTime: 20, // in minutes
    servingSize: 2,
    recipeType: 'Main Course',
    rating: 4.7,
    category: 'Italian',
    numReviews: 34,
    instructions: [
      'Cook the spaghetti in salted boiling water.',
      'Fry the pancetta with the garlic until crispy.',
      'Beat the eggs with the cheese, pepper, and a little pasta water.',
      'Combine the pasta with the pancetta, remove from heat, and mix in the egg mixture.',
      'Serve immediately with extra cheese.'
    ],
    description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    difficulty: 'Easy',
    diet: 'Non-Vegetarian',
  },
  {
    _id: '2',
    name: 'Chicken Tikka Masala',
    image: '/images/chicken_tikka_masala.jpg',
    ingredients: [
      '500g chicken breast',
      '1 onion',
      '2 cloves of garlic',
      '1 tsp ginger paste',
      '2 tbsp tikka masala paste',
      '400g canned tomatoes',
      '200ml coconut milk',
      'Fresh coriander',
      'Rice to serve'
    ],
    cookingTime: 40, // in minutes
    servingSize: 4,
    recipeType: 'Main Course',
    rating: 4.8,
    category: 'Indian',
    numReviews: 58,
    instructions: [
      'Marinate the chicken in the tikka masala paste for at least 30 minutes.',
      'Cook the onion, garlic, and ginger until soft.',
      'Add the chicken and cook until browned.',
      'Stir in the tomatoes and coconut milk, simmer until the chicken is cooked through.',
      'Serve with rice and garnish with fresh coriander.'
    ],
    description: 'A popular dish consisting of roasted marinated chicken chunks in spiced curry sauce.',
    difficulty: 'Medium',
    diet: 'Non-Vegetarian',
  },
  {
    _id: '3',
    name: 'Vegetable Stir-Fry',
    image: '/images/vegetable_stir_fry.jpg',
    ingredients: [
      '1 red bell pepper',
      '1 yellow bell pepper',
      '1 zucchini',
      '1 carrot',
      '100g broccoli florets',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '1 clove of garlic',
      '1 tsp grated ginger',
      'Sesame seeds for garnish',
      'Rice or noodles to serve'
    ],
    cookingTime: 15, // in minutes
    servingSize: 2,
    recipeType: 'Main Course',
    rating: 4.5,
    category: 'Asian',
    numReviews: 24,
    instructions: [
      'Slice all the vegetables into thin strips.',
      'Heat the sesame oil in a wok, add garlic and ginger.',
      'Add the vegetables and stir-fry for 5-7 minutes.',
      'Add the soy sauce and stir until well coated.',
      'Serve over rice or noodles and garnish with sesame seeds.'
    ],
    description: 'A quick and healthy stir-fry loaded with fresh vegetables and Asian flavors.',
    difficulty: 'Easy',
    diet: 'Vegetarian',
  },
  {
    _id: '4',
    name: 'Chocolate Chip Cookies',
    image: '/images/chocolate_chip_cookies.jpg',
    ingredients: [
      '200g unsalted butter',
      '150g brown sugar',
      '150g white sugar',
      '2 large eggs',
      '1 tsp vanilla extract',
      '300g flour',
      '1 tsp baking soda',
      '1/2 tsp salt',
      '200g chocolate chips'
    ],
    cookingTime: 30, // in minutes
    servingSize: 24 cookies,
    recipeType: 'Dessert',
    rating: 4.9,
    category: 'American',
    numReviews: 89,
    instructions: [
      'Preheat the oven to 180°C (350°F).',
      'Cream together the butter and sugars until fluffy.',
      'Add the eggs and vanilla extract, mix well.',
      'In a separate bowl, whisk together flour, baking soda, and salt.',
      'Gradually mix the dry ingredients into the wet mixture.',
      'Stir in the chocolate chips.',
      'Drop spoonfuls of dough onto a baking sheet and bake for 10-12 minutes.',
      'Cool on a wire rack before serving.'
    ],
    description: 'Classic chocolate chip cookies that are crisp on the edges and chewy in the center.',
    difficulty: 'Easy',
    diet: 'Vegetarian',
  },
  {
    _id: '5',
    name: 'Caesar Salad',
    image: '/images/caesar_salad.jpg',
    ingredients: [
      '1 romaine lettuce',
      '1/2 cup croutons',
      '50g parmesan cheese',
      '2 anchovy fillets',
      '1 clove of garlic',
      '1 egg yolk',
      '1 tsp Dijon mustard',
      '1 tbsp lemon juice',
      '1/2 cup olive oil',
      'Salt and pepper to taste'
    ],
    cookingTime: 15, // in minutes
    servingSize: 2,
    recipeType: 'Salad',
    rating: 4.6,
    category: 'American',
    numReviews: 42,
    instructions: [
      'Chop the romaine lettuce and place it in a large bowl.',
      'In a small bowl, mash the anchovies and garlic into a paste.',
      'Whisk in the egg yolk, mustard, and lemon juice.',
      'Slowly drizzle in the olive oil while whisking to emulsify the dressing.',
      'Toss the lettuce with the dressing, croutons, and parmesan.',
      'Season with salt and pepper and serve immediately.'
    ],
    description: 'A classic Caesar salad with a rich, creamy dressing made from scratch.',
    difficulty: 'Easy',
    diet: 'Non-Vegetarian',
  },
  {
    _id: '6',
    name: 'Lemon Drizzle Cake',
    image: '/images/lemon_drizzle_cake.jpg',
    ingredients: [
      '225g unsalted butter',
      '225g sugar',
      '4 large eggs',
      '225g self-raising flour',
      '2 lemons, zest and juice',
      '100g powdered sugar'
    ],
    cookingTime: 60, // in minutes
    servingSize: 8,
    recipeType: 'Dessert',
    rating: 4.7,
    category: 'British',
    numReviews: 28,
    instructions: [
      'Preheat the oven to 180°C (350°F).',
      'Cream the butter and sugar until light and fluffy.',
      'Add the eggs one at a time, beating well after each addition.',
      'Fold in the flour and lemon zest.',
      'Pour the batter into a greased loaf tin and bake for 45-50 minutes.',
      'Mix the lemon juice with powdered sugar to make the drizzle.',
      'Poke holes in the cake with a skewer and pour the drizzle over the top.',
      'Allow to cool before serving.'
    ],
    description: 'A moist and zesty lemon cake with a sweet and tangy drizzle.',
    difficulty: 'Medium',
    diet: 'Vegetarian',
  },
];

export default recipes;
