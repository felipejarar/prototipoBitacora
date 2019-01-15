import { Injectable } from '@angular/core';

@Injectable()
export class DataBitacorasCompartidas {

  _bitacoras_compartidas: any  =
  [{
    id: 1,
    collaborators: 3,
    permission: "colaborative",
    start_date: "10 Septiembre, 2018",
    end_date: "30 Septiembre, 2018",
    title: "Viaje con mis amigos a Santiago",

    entries:
    [
      {
        title: "Fantasilandia",
        description: "Fui con mis amigos a fantasilandia un día de semana de gran calor en Santiago, puedo decir que lo pasamos muy bien ,nos subimos a muchos juegos ,yo me desestrese gritando y riendo ,nos refrescabamos en los puntos con agua ,hay que tener en cuenta que mochilas y bolsos no se pueden subir a muchos juegos ,pero hay casilleros para guardarlos ,los juegos son muy seguros y modernos, no hay peligro sólo diversión total",
        pics: [ "assets/prototype/img10.png"],
        external_pics:
        [
          {
            pics: [ "assets/prototype/img11.png", "assets/prototype/img12.png", "assets/prototype/img13.png"],
            author: "John Doe"
          }
        ]
      }
    ],

    external_entries:
    [
      {
        author: "John Doe",
        pics: ["assets/prototype/img10.png"]
    },{
      title: "Lorem Ipsum Fourth",
      author: "Stacy Chad"
    }],
  }];

  getBitacoras(){
    return this._bitacoras_compartidas;
  }

  getBitacoraTitles(){
    return this._bitacoras_compartidas.map(function(x){ if (x.title != null){ return x.title}})
  }

  getBitacora(id){
    for (let bitacora of this._bitacoras_compartidas){
      if (bitacora.id != null && bitacora.id == id ){
        return bitacora;
      }
    }
    return null;
  }


  getPostCounter(bitacora){ return bitacora.entries.length; }

  getPicCounter(bitacora){
    var counter = 0;
    for (let entrada of bitacora.entries)
      if (entrada.pics != null )
        counter += entrada.pics.length;
    return counter;
  }

  getPicCounterFromEntrada(entrada){
    if (entrada.pics != null)
      return entrada.pics.length;
    return 0;
  }

  getFivePictures(bitacora){
    var pics_list = [];
    for (let entrada of bitacora.entries ){
      if (pics_list.length >= 5) break;
      if (entrada.pics != null ){
        for (let pics of entrada.pics){
          pics_list.push(pics.src);
          if (pics_list.length >= 5) break;
        }
      }
    }

    if (pics_list.length == 0)
      pics_list.push("assets/imgs/default_pic.png");
    return pics_list;
  }

  getVidCounter(bitacora){
    var counter = 0;
    for (let entrada of bitacora.entries)
      if (entrada.videos != null )
        counter += 1;
    return counter;
  }


}
