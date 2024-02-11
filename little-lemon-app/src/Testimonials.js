import Reviews from "./Reviews"
function Testimonials(){
    return(
        <div class = "container" id = "testimonials">
            <h1>Testimonials</h1>
            <Reviews
            userName = "g"
            review = "f"/>
            <Reviews
             userName = "g"
             review = "f"/>
            <Reviews
             userName = "f"
             review = "g"/>
        </div>
    )
}
export default Testimonials();