const express = require('Express')
const app = express()
const urlvalid = require('valid-url')
const { nanoid } = require('nanoid')
const db = require('./db')

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post('/', (req, res) => {
    let inputUrl = req.body['url']
    if (urlvalid.isWebUri(inputUrl)){
        let newHash = nanoid();
        db.set(inputUrl, newHash)
        .then((result) => {
            res.status(200).json({
                message: `Success`,
                shortURL: `localhost:9000?tiny=`+result
            })
        })
        .catch((err) => {
            res.status(400).json({
                message: `Failure!!!`,
                error: err
            })
        });
    }
    else{
        res.status(400).json({
            message: `Not Valid URL!!!`
        })
    }
    
})

app.get('/', (req, res) => {
    let hash = req.query['tiny'];
    db.get(hash)
    .then((result) => {
        res.redirect(result);
    })
    .catch((err) => {
        res.status(400).json({
            message: `Failure!!!`,
            error: err
        })
    });
    
})

app.listen(9000, () => {
    console.log(`App is listening on port 9000!!!`)
})