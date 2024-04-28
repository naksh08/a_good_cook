import RecipeList from "./RecipeList";

function App() {
  return (
    <div>
      <RecipeList recipes = {sampleRecipe}/>
    </div>
  );
}

const sampleRecipe = [
  {
    id: 1,
    name: 'Soya Chunks',
    cookTime: '1:25',
    servings: 1,
    instructions: '1. Boil water \n2. Add soya chunks \n3. Cook for 10 minutes \n4. Drain water \n5. Add spices \n6. Cook for 15 minutes \n7. Serve hot'
  },
  {
    id: 2,
    name: 'Chicken Curry',
    cookTime: '1:45',
    servings: 2,
    instructions: '1. Boil water \n2. Add chicken \n3. Cook for 20 minutes \n4. Drain water \n5. Add spices \n6. Cook for 25 minutes \n7. Serve hot'
  }
]

export default App;
