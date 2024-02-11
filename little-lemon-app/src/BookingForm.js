function BookingForm(formData, availableTime) {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="guests">Number of Guests</label>
            <input onChange={(e) = setFormData({ ...formData, guests: e.target.value })} value={formData.guests} type="number" name="guestNum" />
            <label htmlFor="date">Date</label>
            <input onChange={(e) = setFormData({ ...formData, date: e.target.value })} value={formData.date} type="date" name="res_date" />
            <label htmlFor="availableTime">Time</label>
            <select id="res-time ">
                <option>1700</option>
                <option>1800</option>
                <option>1900</option>
                <option>2000</option>
                <option>2100</option>
                <option>2200</option>
            </select>
            <input onChange={(e) = setAvailableTime(prevState => { temp = { ...prevState }; temp[e.target.value] = false; return temp })} value={formData.time} type="number" name="res_time" />
            <label htmlFor="occassion">Occassion</label>
            <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input onChange={(e) = setFormData({ ...formData, occassion: e.target.value })} value={formData.occassion} type="radio" name="occassion" />
            <button type="submit">Book Now</button>
        </form>

    )
}
export default BookingForm();