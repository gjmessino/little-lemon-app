function SpecialsCards(data){
    return (
        <div class = "container">
            <img src = "data.dishImg"/>
            <h2 class = "card">${data.dish}</h2>
            <h2>${data.price}</h2>
            <p>${data.description}</p>
            <h2>Order for Delivery</h2>
            <img></img>
        </div>
    )
}
export default SpecialsCards();