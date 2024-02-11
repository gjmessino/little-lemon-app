function Reviews(props){
    return(
        <div class = "container">
            <h1>Rating</h1>
            <img src = "data.profImg"/>
            <h2>${props.userName}</h2>
            <p>${props.review}</p>
        </div>
    )
}

export default Reviews();