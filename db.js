class DB{
    constructor(){
        this.inMemoryDB = {}
        this.allUrls = {}
    }

    set(uri, hash){
        return new Promise((resolve, reject) => {
            try{
                if (!(uri in this.allUrls)){
                    this.inMemoryDB[hash] = uri
                    this.allUrls[uri] = hash
                    resolve(hash);
                }
                else{ 
                    resolve(this.allUrls[uri]);
                }
            }catch(err){
                reject(`The value was not added due to ${err}`);
            }
            
        })
    }
    get(uri){
        console.log(uri)
        return new Promise((resolve, reject) => {
            if (!(uri in this.inMemoryDB)){
                reject(`The URL doesn't exist. Use Shorten URL first to create URL's shorter equivalent`);
            }else{resolve(this.inMemoryDB[uri])};
        })
    }
}

module.exports = new DB();