export default function MainContent(){
    return(
        <main>
            <form className="ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. eggs"
                    aria-label="Add ingredient"
                />
                <button>Add ingredient</button>
            </form>
        </main>
    )
}