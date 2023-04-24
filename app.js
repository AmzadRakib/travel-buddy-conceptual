var carObject = {
    vehicle: 'Car',
    imageLocation: 'images/car.jpg',
    farePerKilo: 4,
    capacity: 4,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde eligendi at laborum iusto? Quos quam natus,'
}

var busObject = {
    vehicle: 'Bus',
    imageLocation: 'images/bus.jpg',
    farePerKilo: 4,
    capacity: 30,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam ab quibusdam architecto corporis placeat vel pariatur eaque numquam ut?'
}

var bikeObject = {
    vehicle: 'Bkie',
    imageLocation: 'images/bike.jpg',
    farePerKilo: 6,
    capacity: 3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor ab vero consequuntur perspiciatis vitae. Autem soluta blanditiis aspernatur expedita.'
}


function serviceCard(card) {
    const cardString = JSON.stringify(card)
    const cardMainSection = document.getElementById('main-container');
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `
        <div class="card mt-3 mx-auto" style="max-width: 70%;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src= ${card.imageLocation} class="img-fluid rounded-start h-100" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Transport Mood: ${card.vehicle}</h5>
                        <p class="card-text">${card.description} </p>
                        <p class="card-text"><small class="text-muted">Fare Per Kilo: ${card.farePerKilo} </small> <br>
                            <small class="text-muted">Capacity: ${card.capacity}</small>
                        </p>
                        <button type="button" class="btn btn-primary"             data-bs-toggle="modal" data-bs-target="#exampleModal" onclick= 'modalButton(${cardString})'>
                           BOOK NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    cardMainSection.appendChild(createDiv);

}

serviceCard(carObject);
serviceCard(busObject);
serviceCard(bikeObject);


function modalButton(modalbtn) {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
    <div class="card mx-auto" style="width: 18rem;">
     <img src=${modalbtn.imageLocation} class="card-img-top" alt="...">
     <div class="card-body">
      <h5 class="card-title">Transport Mood: ${modalbtn.vehicle}</h5>
       <p class="card-text">${modalbtn.description}</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
    </div>
    `
}