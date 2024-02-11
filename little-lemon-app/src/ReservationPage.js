import BookingForm from "./BookingForm";

function ReservationRage(formInfo, timesAve){
    return(
        <div>
            <Header/>
            <div class="container">
                <img src="./restaurant"/>
            </div>
            <h1>Make a Reservation</h1>
            <BookingForm
            mostData = {forInfo}
            time = {timesAve}
            />
            <Footer/>
        </div>
    )
}
export default ReservationPage;