

const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

kittySchema.methods.speak = function speak() {
    const greeting = this.name
        ? 'Meow name is ' + this.name
        : 'I don\'t have a name';
    console.log(greeting);
};



const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

await fluffy.save();
fluffy.speak();

const kittens = await Kitten.find();
console.log(kittens);

await Kitten.find({ name: /^fluff/ });



function loadProducts(products) {
    var CardProduct = document.getElementById("products");

    var cards = [];

    for (let i = 0; i < products.length; i++) {
        let id = products[i].id;
        let name = products[i].name;
        let price = products[i].price;
        let description = products[i].description;
        let url = products[i].imageUrl;

        let card = "card" + i.toString();

        let AddCardRobot = document.createElement("div");

        AddCardRobot.innerHTML = `
            <div id=${card} class="card shadow-sm">
                <img src=${url} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text"> ${id} <strong>${name}</strong> $${price}</p>
                    <p class="card-text"> ${description} </p>
                    <small class="text-body-secondary"></small>
                </div>
            </div>
        </div>
        `;

        CardRobot.appendChild(AddCardRobot);

        let ccard = document.getElementById(card);
        cards.push(ccard);

        console.log(card);
    }

    console.log(cards);
  }