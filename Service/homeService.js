const db = require("../Util/db");
const urlvalid = require("valid-url");
const { nanoid } = require("nanoid");

class Home {
  async generateShortURL(reqObj) {
    try {
      let inputUrl = reqObj["url"];
      if (urlvalid.isWebUri(inputUrl)) {
        let newHash = nanoid();
        return db.set(inputUrl, newHash)
          .then((result) => {
            return result;
          })
          .catch((err) => {
            throw new Error(`${err}`);
          });
      } else {
        throw new Error(`URL is not a valid URL`);
      }
    } catch (err) {
      console.log(`Error - ${err}`);
    }
  }

  async fetchOriginalUrl(reqObj) {
    try {
      let hash = reqObj["tiny"];
      return db.get(hash)
        .then((result) => {
          return result;
        })
        .catch((err) => {
          throw new Error(`${err}`);
        });
    } catch (err) {
      console.log(`${err}`);
    }
  }
}

module.exports = new Home();
