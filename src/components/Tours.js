import Card from "./Card";

function Tours({tours, removeTour}) {
    return (
        <div className="container">
            <div>
                <h2 className="title">Plan With Love</h2>
            </div>
            
            <div className="cards">
            {
                /* when we use map function so always we put the key value for best practice */
                tours.map( (tour) => {
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>

                })

            }
            </div>
        </div>
    );

}

export default Tours;