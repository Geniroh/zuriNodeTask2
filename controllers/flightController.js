let flight = [
    {
        "title": "flight to canda",
        "time": "1pm",
        "price": 26000,
        "date": "26-06-2022"
    }
]
exports.home = (req, res) => {
    res.send({
        "Flight Booking Api": "Welcome to zuri flight booking api",
        "Book a flight": "/book",
        "Get flight details": "/book/id",
        "Update flight details": "/edit/id",
        "Delete a flight": "/delete/id"
    })
}

exports.allFlights = (req, res)=>{
    res.send(flight)
}

exports.bookFlights = (req, res)=>{
console.log(req)
    res.end({
        status: "Flight Booked",
        title,
        time,
        price,
        date: new Date()
    })
}


