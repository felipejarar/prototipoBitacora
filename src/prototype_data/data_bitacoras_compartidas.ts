import { Injectable } from '@angular/core';

@Injectable()
export class DataBitacorasCompartidas {

  _bitacoras_compartidas: any  =
  [{
    id: 1,
    shared: true,
    author: "Franz Opazo",
    collaborators: 3,
    permission: "colaborative",
    start_date: "10 Septiembre, 2018",
    end_date: "30 Septiembre, 2018",
    sdate: new Date(2018,8,10),
    edate: new Date(2018,8,30),
    title: "Viaje con mis amigos en Santiago",
    likes: 3,
    comments: 5,
    entries:
    [

      {
        created_at: "15 Septiembre, 2018",
        title: "Fantasilandia",
        description: "Fui con mis amigos a fantasilandia un día de semana de gran calor en Santiago, puedo decir que lo pasamos muy bien ,nos subimos a muchos juegos ,yo me desestrese gritando y riendo ,nos refrescabamos en los puntos con agua ,hay que tener en cuenta que mochilas y bolsos no se pueden subir a muchos juegos ,pero hay casilleros para guardarlos ,los juegos son muy seguros y modernos, no hay peligro sólo diversión total",
        pics: [
          { src : "assets/prototype/img10.png" },
          { src : "assets/prototype/img11.png" },
          { src : "assets/prototype/img12.png" },
          { src : "assets/prototype/img13.png" }
       ]
      },
      {
        created_at: "15 Septiembre, 2018",
        author: "Franz Opazo",
        pics: [
          { src : "assets/prototype/img10.png"}
        ]
      }
    ]

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

    if (pics_list.length == 0)pics_list.push("assets/imgs/default_pic.png");
    return pics_list;
  }

  getVidCounter(bitacora){
    var counter = 0;
    for (let entrada of bitacora.entries)
      if (entrada.videos != null )
        counter += 1;
    return counter;
  }

  getIndexOfID(id){
    var index = 0;
    for (let bitacora of this._bitacoras_compartidas){
      if (bitacora.id != null && bitacora.id == id ){
        return index;
      }
      index++;
    }
    return -1;
  }


  setTextEntry(id, entry){
    var index = this.getIndexOfID(id);
    this._bitacoras_compartidas[index].entries.unshift(entry);
    console.log(this._bitacoras_compartidas);

  }

}
