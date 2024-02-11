import ReservationPage from "./ReservationPage";
import React, {useState} from React;
import {useRducer} from React;

const [formData, setFormData] = useState({
    guests: "",
    date: "",
    occassion: ""
})
const [availableTime, setAvailableTime] = useState({
    1700: true,
    1800: true,
    1900: true,
    2000: true,
    2100: true,
    2200: true
})

function Main (){
    <ReservationPage
    mostData = {formData}
    time = {availableTime}
    />
}

export default Main;