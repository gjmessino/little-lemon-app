function SpecialsCards(data){
    return (
        <div>
            <img src = "data.dishImg"/>
            <h2>${data.dish}</h2>
            <h2>${data.price}</h2>
            <p>${data.description}</p>
            <h2>Order for Delivery</h2>
            <img></img>
        </div>
    )
}