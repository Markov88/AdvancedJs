function solve (ticketsDiscription, sortingCriteria) {
    let tickets = []
    class Ticket {
        constructor (destination, price, status) {
            this.destination = destination
            this.price = price
            this.status = status

        }
    }
    for (const ticket of ticketsDiscription) {
        let ticketToken = ticket.split('|')
        let destination = ticketToken[0]
        let price = +ticketToken[1]
        let status = ticketToken[2]
        tickets.push(new Ticket(destination, price, status))

    }
    return tickets
}



console.log(solve(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination'))
