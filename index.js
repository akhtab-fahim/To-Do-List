import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const db = new pg.Client({
  user: "postgres", //change the username if you have other than this 
  host: "localhost",
  database: " ", //enter the name of the database
  password: " ", //enter your password
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Go to Gym💪" },
  { id: 2, title: "Go to Shopping 🛒" },];

app.get("/", async(req, res) => {
  try{
    const result = await db.query("SELECT * FROM items ");
    items = result.rows;
    res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });}
  catch(err){
    console.log(err);
  }
  
});

app.post("/add", async(req, res) => {
  const item = req.body.newItem;
  items.push({ title: item });
  try{
    await db.query("INSERT INTO items(title) VALUES($1)",[item]);
    res.redirect("/");
  }catch(err){
    console.log(err);
  }
  
});

app.post("/edit", async(req, res) => {
  const item = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;
  try{
    await db.query("UPDATE items SET title = ($1) WHERE id = $2",[item,id]);
    res.redirect("/");
  }catch(err){
    console.log(err);
  }
});


app.post("/delete", async(req, res) => {
  const id = req.body.deleteItemId;
  try{
    await db.query("DELETE FROM items WHERE id = $1",[id]);
    res.redirect("/");
  }catch(err){
    console.log(err);
  }
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});
