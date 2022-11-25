const express = require("express");
const { listen } = require("express/lib/application");

const app = express();
const PORT = 3001;

const groceryList = [
  {
    item: "Milk",
    quantity: " 3",
  },

  {
    item: "Apple",
    quantity: " 10",
  },

  {
    item: "Orange",
    quantity: " 8",
  },
];
app.use(express.json());
<<<<<<< Updated upstream
app.use(express.urlencoded());
app.use(req,res,next)=>{
console.log(req.url)
next()
}
=======
app.use(express.urlencoded())

>>>>>>> Stashed changes
app.listen(PORT, () => console.log(`Running server on port ${PORT}`));

app.get("/groceries", (req, res) => {
  res.send(groceryList);
});

app.post("/groceries",(req,res,next)=>{}, (req, res) => {
  console.log(req.body);
  groceryList.push(req.body);
  res.send(201);
});
