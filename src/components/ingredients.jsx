export default function ListOfIngredients(props) {
  const listItem = props.ingredients.map((item) => {
    return <li key={item}>{item}</li>;
  });
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {listItem}
      </ul>
      {props.ingredients.length > 3 && (
        <div ref={props.ref} className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
