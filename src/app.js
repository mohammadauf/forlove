const express = require('express');
const { render } = require('express/lib/response');
const app = express()
const port = 800;
const path = require("path")
const Register = require("./model/register");
require("./db/conn")
app.set("view engine", "html");

const staticPath = path.join((__dirname, "./public"));
app.use(express.static(staticPath));
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.render("index")
})

app.post("/", async (req, res) => {
  try {
    const forLove = new Register({
      nameuser: req.body.username,
      namelove: req.body.crushname,
    });
    const result = await forLove.save();
    console.log(result);
    res.send("<h1>Loading....</h1>")

  } catch (error) {
    console.log(error);
  }

});
app.listen(port, () => {
  console.log("server is running at port number is", port);
});