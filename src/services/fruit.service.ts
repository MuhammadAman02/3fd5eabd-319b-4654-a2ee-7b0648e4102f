const FRUITS = [
  'Apple', 'Banana', 'Orange', 'Grape', 'Strawberry',
  'Pineapple', 'Mango', 'Kiwi', 'Peach', 'Pear',
  'Cherry', 'Blueberry', 'Raspberry', 'Blackberry', 'Watermelon',
  'Cantaloupe', 'Honeydew', 'Papaya', 'Coconut', 'Avocado',
  'Lemon', 'Lime', 'Grapefruit', 'Plum', 'Apricot',
  'Fig', 'Date', 'Pomegranate', 'Persimmon', 'Dragon Fruit'
];

export function getFruits(): { fruits: string[]; count: number } {
  const selectedFruits = FRUITS.slice(0, 20);
  
  console.log(`Returning ${selectedFruits.length} fruit names`);
  
  return {
    fruits: selectedFruits,
    count: selectedFruits.length,
  };
}