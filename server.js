/*********************************************************************************
*  WEB322 – Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part *  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Kanishk Pal Student ID: 166505214 Date: 06-04-2023
*
*  Cyclic Web App URL: https://tough-fish-crown.cyclic.app/about
*
*  GitHub Repository URL: https://github.com/SHIVsr/web322-app
*
********************************************************************************/ 


const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/about');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

storeService.initialize()
  .then(() => {
    const server = app.listen(process.env.PORT || 8080, () => {
      const port = server.address().port;
      console.log(`Express http server listening on port ${port}`);
    });
  })
  .catch(error => {
    console.error(error);
  });



  app.get('/shop', (req, res) => {
    storeService.getPublishedItems()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).json({ message: err });
      });
  });
  

  app.get('/items', (req, res) => {
    storeService.getAllItems()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).json({ message: err });
      });
  });
  

  app.get('/categories', (req, res) => {
    storeService.getCategories()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).json({ message: err });
      });
  });
  

// Route for unmatched URLs
app.use((req, res) => {
  res.status(404).json({ message: 'Page Not Found' });
});
