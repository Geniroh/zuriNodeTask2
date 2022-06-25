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
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty" });
        return;
      }
    
      const book = {
        title: req.body.title,
        time: req.body.time,
        price: req.body.price,
        date: new Date(),
      };

      flight.push(book)

      res.send(book)
}


