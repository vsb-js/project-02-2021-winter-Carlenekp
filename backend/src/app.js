const express = require("express");
const db = require("../models/index");
/*const cors = require("cors");

app.use(cors()); */

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));


//READ
app.get('/all', async (req, res) => {
    try {
        // get all values in users table
        const arts = await db.Art.findAll();
        // get all values in the cars table
        const details = await db.Detail.findAll();

        res.json({
            arts: arts,
            details: details
        });
    } catch (e) {
        console.error(e)
        res.status(404);
        res.send("Not found")
    }
})

app.get('/arts/', async (req, res) => {
    db.Art.findAll().then((arts) => {
        res.json(arts);
    }).catch((error) => {
        res.send(error);
    });
})

app.get('/details/', async (req, res) => {
    db.Detail.findAll().then((details) => {
        res.json(details);
    }).catch((error) => {
        res.send(error);
    })
})


// Parametrized query
app.get('/arts/:id', async (req, res) => {
    try {
        const {id} = req.params;
        let arts = await db.Art.findAll({
            where: {
                id: id
            }
        });
    
        res.json(arts[0])

    } catch (e) {
        console.error(e)
        res.status(500);
        res.send("Something wrong happens!")
    }
})

app.get('/details/:id', async (req, res) => {
    try {
        const {id} = req.params;
        let details = await db.Detail.findAll({
            where: {
                id: id
            }
        });
    
        res.json(details[0])
    } catch (e) {
        console.error(e)
        res.status(500);
        res.send("Something wrong happens!")
    }
    
})


app.get('/arts/title/:title', async (req, res)=>{
    try {
        let title = req.params.title;
        let arts = await db.Art.findAll({
            where: {
                title: title
            }
        })
        res.json(arts);
    } catch (e) {
        console.error(e)
        res.status(500);
        res.send("Something wrong happens!")
    }
})

app.get('/arts/creator/:creator', async(req, res)=>{
    try {
        let creator = req.params.creator;
        let arts = await db.Art.findAll({
        where:{
            creator: creator
        }
    })
    res.json(arts)
    } catch (e) {
        console.error(e)
        res.status(500);
        res.send("Something wrong happens!")
    }
})

app.get('/arts/year/:year', async(req, res)=>{ 
    try {
        let year = req.params.year;
        let arts = await db.Art.findAll({
        where:{
            year: year
        }
    })
    res.json(arts)
    } catch (e) {
        console.error(e)
        res.status(500);
        res.send("Something wrong happens!")
    }
})

app.get('/arts/country/:country', async(req, res)=>{
    try {
        let country = req.params.country;
        let arts = await db.Art.findAll({
            where:{
                country: country
            }
        })
        res.json(arts)
    } catch (e) {
        console.error(e)
        res.status(500);
        res.send("Something wrong happens!")
    }
})

app.get('/details/artId/:artId', async(req, res)=>{
    try {
        let artId = req.params.artId;
        let details = await db.Detail.findAll({
        where:{
            artId: artId
        }
    })
    res.json(details)
    } catch (e) {
        console.error(e)
        res.status(500);
        res.send("Something wrong happens!")
    }
})



//CRUD
//Create with a post
app.post('/arts', async (req, res) => {
    const mydata = req.body
    console.debug("Body request:")
    console.debug(mydata)

    try {
        const createdArt = await db.Art.create(mydata);
        res.status(200);
        res.json({success: "OK", data: {createdArt}});
    } catch (e) {
        console.error(e)
        res.status(500);
        res.send("Something wrong happens!")
    }

});



app.post('/details', async (req, res) => {
    const mydata = req.body
    console.debug("Body request:")
    console.debug(mydata)

    try {
        const createdDetail = await db.Detail.create(mydata);
        res.status(200);
        res.json({success: "OK", data: {createdDetail}});
    } catch (e) {
        console.error(e)
        res.status(500);
        res.send("Something wrong happens!")
    }

});

//Update
/*
app.put('/arts/update/replace/:id',arts.updateArt, (req, res) => {
   //console.log(req.params.id);
   /*exports.update = (req, res) => {
    const id = req.params.id;
  
    db.Art.update(req.body, {
      where: { id: id }
    })
     
          res.send({
            message: "Tutorial was updated successfully."     
            })
    
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      })
      } */
    
   /* res.redirect(303, 'path')
   db.Art.serialize(()=>{
    db.Art.run('UPDATE emp SET type = ? WHERE id = ?', [req.params.type,req.params.id], function(err){
      if(err){
        res.send("Error encountered while updating");
        return console.error(err.message);
      }
      res.send("Entry updated successfully");
      console.log("Entry updated successfully");
    });
  }); */

   /*try {
    res.json(await db.Art.create(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  } *//*
   
    try {
        const createdDetail = await db.Art.create(
            {
                where: {
                id: id
                }, 
            }, mydata
        )
        res.status(200);
        res.json({success: "OK", data: {mydata}});
    } catch (e) {
        console.error(e)
        res.status(500);
        res.send("Something wrong happens!")
    } */
    
       /* await db.Art.update({
            where: {
                id: id
            }
        });*/
        
        /*await db.Art.update({
            where: {
                id: id_arts
            }
        });*/
       /* JSON.stringify(
            /*{
                where: {
                    id: id_arts
                }
            },*/
          /*  {
                //id: id_arts,
                type: 'Painting',
                creator: "Pablo Picasso",
                title:"Guernica",
                year: 1937,
                country: "Spain",
                inspiration: "War of Spain",
                createdAt: new Date(),
                updatedAt: new Date()
        //    completed: false
            }) .then(response => response.json())
            .then(json => console.log(json)),
            headers; {
                "Content-type"; "application/json; charset=UTF-8"
                }            
           */
          
  
    
//})  
/*
app.patch('/arts/update/modify', (req, res) => {
res.send("PUT Request Called")
}) */



//Delete
app.delete('/arts/:id', async (req, res) => {
    const {id} = req.params;
    try {
        await db.Art.destroy({
            where: {
                id: id
            }
        });
        res.json({success: "OK"});
    } catch (e) {
        console.error(e)
        res.status(500);
        res.send("Something wrong happens!");
    }

})


//il fonctionne
app.delete('/details/:id', async (req, res) => {
    const {id} = req.params;

    try {
        await db.Detail.destroy({
            where: {
                id: id
            }
        });
        res.json({success: "OK"});
    } catch (e) {
        console.error(e)
        res.status(500);
        res.send("Something wrong happens!");
    }

})



module.exports = {app};