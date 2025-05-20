import {useState} from "react"

export default function MainContent(){

    const [ingredients, setIngredients] = useState([])

    const ingredientList = ingredients.map((ingredient, index) => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(formData){
        const ingredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, ingredient])
    }
    return(
        <main>
            <form action={handleSubmit} className="ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientList}
            </ul>
        </main>
    )
}