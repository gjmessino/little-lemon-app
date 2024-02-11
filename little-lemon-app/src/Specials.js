import React, { useState } from 'react';
import SpecialsCards from "./SpecialsCards"

function Specials(){
    return(
        <div class = "container" id = "specials">
            <h1><b>This Week's Specials</b></h1>
            <button>Online Menu</button>
            <SpecialsCards
            dish = "Greek Salad"
            price = "$12.99"
            description = "The famous Greek Salad of crispy lettuce, peppers, olives, and our Chicago style fet cheese garnished with garlic and croutons."
            />
            <SpecialsCards
             dish = "Bruschetta"
             price = "$5.99"
             description = "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."/>
            <SpecialsCards
             dish = "Lemon Dessert"
             price = "$5.00"
             description = "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is authentic as can be imagined."/>
        </div>
    )
}
export default Specials();