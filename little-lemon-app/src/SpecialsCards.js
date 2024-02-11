function SpecialsCards(props){
    return (
        <div class = "container">
            <img src = "data.dishImg"/>
            <h2 class = "card">props.dish</h2>
            <h2>props.price</h2>
            <p>props.description</p>
            <h2>Order for Delivery</h2>
            <img></img>
        </div>
    )
}
export default SpecialsCards();