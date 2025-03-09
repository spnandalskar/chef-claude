import React from "react";
import ClaudeRecipe from "./claudeRecipe";
import ListOfIngredients from "./ingredients";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient").trim();
    if (newIngredient) {
      setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
    }
  }

  const [recipe, setRecipe] = React.useState("");
  const recipeSection = React.useRef(null);

  React.useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown.replace(/```markdown/g, "").replace(/```/g, ""));
  }

  return (
    <main>
      <form action={addIngredients} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
          required
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <ListOfIngredients
          ingredients={ingredients}
          getRecipe={getRecipe}
          ref={recipeSection}
        />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
