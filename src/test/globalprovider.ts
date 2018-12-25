import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider{

  _bitacoras_personales: any  =  [
  {
    title: "Viaje al sur de Chile",
    entries: [
      {
        title: "Lorem Ipsum First",
        pics: [
          "assets/prototype/img1.png",
          "assets/prototype/img2.png"
        ]
      },
      {
        title: "Lorem Ipsum Second",
      }
    ],
    start_date: "24 Noviembre, 2018",
    end_date: "30 Noviembre, 2018",
    collaborators: 1
  },
  {
    title: "Viaje a Concepción",
    entries: [
      {
        title: "Lorem Ipsum Third",
      },
      {
        title: "Lorem Ipsum Fourth",
      },
      {
        title: "Lorem Ipsum Five"
      }
    ],
    start_date: "14 de Octubre, 2018",
    end_date: "25 de Octubre, 2018"
  },

  ];

  _bitacoras_compartidas: any = [
    {
      title : "Viaje con mis amigos",
      entries: [{
          title: "Lorem Ipsum First"
        },{
          title: "Lorem Ipsum Second"
        }
      ],
      external_entries: [{
        title: "Lorem Ipsum Third",
        author: "John Doe"
      },{
        title: "Lorem Ipsum Fourth",
        author: "Stacy Chad"
      }],
      start_date: "10 de Septiembre, 2018",
      end_date: "30 de Septiembre, 2018",
      permission: "colaborative"
    },
    {
      title : "Viaje con mis amigos",
      entries: [{
          title: "Lorem Ipsum First"
        },{
          title: "Lorem Ipsum Second"
        }
      ],
      external_entries: [{
        title: "Lorem Ipsum Third",
        author: "Johny Three Freeze"
      },{
        title: "Lorem Ipsum Fourth",
        author: "Farbinger Salame"
      }],
      start_date: "3 de Septiembre, 2018",
      end_date: "7 de Septiembre, 2018",
      permission: "read-only"
    },
  ]

  constructor(){ }

  getBitacorasPersonales(){
    return this._bitacoras_personales;
  }

  getBitacorasCompartidas(){
    return this._bitacoras_compartidas;
  }

  get5PicsFromBitacora(bitacora){
    var pics_list = []
    for (let entrada of bitacora.entries ){
      if (pics_list.length > 5){ break; }
      if (entrada.pics != null ){
        for (let pics of entrada.pics){
          if (pics_list.length > 5){ break; }
          pics_list.push(pics);
        }
      }
    }
    if (pics_list.length == 0){
      pics_list.push("assets/imgs/default_pic.png");
    };
    return pics_list;
  }

  getPostCounterBitacora(bitacora){
    return bitacora.entries.length;
  }

  getPicsCounter(bitacora){
    var pics_counter = 0;
    for (let entrada of bitacora.entries){
      if (entrada.pics != null ){
        for (let pics of entrada.pics){
          pics_counter++;
        }
      }
    }
    return pics_counter;
  }


  getVideoCounter(bitacora){
    var video_counter = 0;
    for (let entrada of bitacora.entries){
      if (entrada.videos != null){
        for( let videos of entrada.videos){
          video_counter++;
        }
      }
    }
    return video_counter;
  }


}
