import AniColorDb from "./propTypes/AniColorDb.js";




export default class BackgroundDb {
public color:AniColorDb;


constructor(color:string="blue"){
this.color = new AniColorDb(color);
}

}