const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        author: ["Suzanne Collins"],
        description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
        image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
        title: "The Hunger Games"
    },
    {
        author: ["Stephen King"],
        description: "The ten remaining passengers are Brian Engle, an off-duty airline pilot traveling to Boston to attend his ex-wife's funeral; Dinah Bellman, a young blind girl with minor psychic powers; fifth-grade teacher Laurel Stevenson, who takes to watching over Dinah; Nick Hopewell, a junior attache & mechanic for the British Embassy; Don Gaffney, a retired tool-and-die engineer on a trip to see his grandchild; Rudy Warwick, a businessman; Albert Kaussner, a talented teen violinist heading to a prestigious school of the arts; Bethany Simms, a teenager being sent by her family to rehab; Bob Jenkins, a mystery author who acts as the voice of logic; and Craig Toomey, an irritable investment banker on the verge of a psychotic breakdown. They realize only those sleeping are now left on the plane. Engle takes control and lands the plane in Bangor, Maine for safety reasons, despite Toomey's protests.",
        image: "https://images-na.ssl-images-amazon.com/images/I/71F58ZBCzYL.jpg",
        link: "https://www.google.com/search?tbm=bks&hl=en&q=title%3Alangoliers",
        title: "The Langoliers"

    }];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });