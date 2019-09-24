import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>Calories: {calories}</p>
            <div className={style.cont}>
                <img className={style.image} src={image} alt=""/>
                <div>
                    <h3>Ingredients: </h3>
                    <ul>
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Recipe;