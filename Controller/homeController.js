require('dotenv').config()
const homeService = require('../Service/homeService')


async function generateShortURL(req, res) {
    try{
        let shortUrl = await homeService.generateShortURL(req.body);
        if(shortUrl){
            res.status(200).json({
                success: true,
                message: `Success`,
                shortURL: process.env.HOME_URL + `tiny=` + shortUrl
            })
        }else{
            throw new Error(`Short URL couldn't be created. Maybe the URL is not in https:// or http:// format`)
        }
    }catch(err){
        res.status(400).json({
            success: false,
            message: `Failure!!!`,
            shortURL: err.message || err.errors || err.errmsg
        })
    }

}

async function fetchOriginalURL(req, res) {
    try{
        let originalURL = await homeService.fetchOriginalUrl(req.query);
        if(originalURL){
            res.redirect(originalURL);
        }else{
            throw new Error(`Original URL couldn't be found`)
        }
    }catch(err){
        res.status(400).json({
            success: false,
            message: `Failure!!!`,
            shortURL: err.message || err.errors || err.errmsg
        })
    }
}

module.exports = { generateShortURL, fetchOriginalURL }