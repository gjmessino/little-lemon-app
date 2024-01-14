function Reviews(data){
    return(
        <div>
            <h1>Rating</h1>
            <img src = "data.profImg"/>
            <h2>${data.userName}</h2>
            <p>${data.review}</p>
        </div>
    )
}