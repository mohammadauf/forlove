const express = require('express');
const app = express()
const port = process.env.PORT || 8000;

const path = require("path")
const Register = require("./model/register");
require("./db/conn")

const staticPath = path.join((__dirname, "./public"));
app.use(express.static(staticPath))
app.use(express.urlencoded({ extended: false }));


app.set("view engine", "hbs");
const templates = path.join((__dirname, "./templates/views"));
const partials = path.join((__dirname, "./templates/partials"));
// hbs.registerPartials(partials);
app.set("views", templates);

app.get('/', (req, res) => {
  res.render("index")
})

app.get('/cal', (req, res) => {
  res.render('cal');
})


app.post("/", async (req, res) => {
  try {
    const forLove = new Register({
      nameuser: req.body.username,
      namelove: req.body.crushname,
    });
    const result = await forLove.save();
    console.log(result);
    // res.send("<h1>Loading....</h1>")
    res.render("cal")

  } catch (error) {
    console.log(error);
  }

});
app.listen(port, () => {
  console.log("server is running at port number is", port);
});