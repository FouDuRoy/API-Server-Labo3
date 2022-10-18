const Model = require('./model');
module.exports =
    class Nouvelle extends Model {
        constructor(categorie, titre, texte, imageUrl, date) {
            super();
            this.Categorie = categorie !== undefined ? categorie : "";
            this.Titre = titre !== undefined ? titre : "";
            this.ImageUrl = imageUrl !== undefined ? imageUrl : "";
            this.Texte = texte !== undefined ? texte : "";
            this.Date = date !== undefined ? date : "";

            this.addValidator('Categorie', 'string');
            this.addValidator('Titre', 'string');
            this.addValidator('ImageUrl', 'url');
            this.addValidator('Texte', 'string');
            this.addValidator('Date', 'integer');
        }
    }