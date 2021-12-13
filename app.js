const express= require("express")
const users= require("./users.json")
const movies= require("./movies.json")
const theatres= require("./theatres.json")
const shows= require("./shows.json")
const seats= require("./seats.json")
//const users= require("./users.json")
const app=express();
app.use(express.json());
app.post("/movies",(req, res) =>{
    res.send(movies);
});
app.get("/shows/:movie",(req, res) =>{
    const newUsers=shows.map((user) =>{
        if(req.params.movie === user.movie){
            res.send(user)
        }       
    }); 
});   
app.get("/shows/:screen",(req, res) =>{
    const newUsers=shows.map((user) =>{
        if(req.params.screen === user.screen){
            res.send(user)
        }       
    }); 
});
app.get("/seats/:city",(req, res) =>{
    res.send(seats);
});
app.get("/movies/:actor",(req, res) =>{
    res.send(movies);
});
app.post("/seats",(req, res) =>{
    res.send(movies);
});
app.listen(2347, function(){
    console.log("listening to port 2346");
});