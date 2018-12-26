import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider{

  _bitacoras_personales: any  =  [
  {
    title: "Viaje al sur de Chile",
    entries: [
      {
        title: "Lorem Ipsum First",
        pics: ["assets/prototype/img1.png", "assets/prototype/img2.png"
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
    start_date: "14 Octubre, 2018",
    end_date: "25 Octubre, 2018"
  },

  ];

  /** Bitacoras compartidas:
  title: titulo de la bitácora (obligatorio)
  entries: entradas reallizadas por el usuario de la aplicación
      > title: Titulo de una experiencia de viaje (opcional)
      > description: Descripción de una experiencia de viaje
      > pics: Fotografías realizadas por el usuario sobre la experiencia de Viaje
      > external_pics: Fotografías realizadas por otros usuariso sobre la experiencia de Viaje
            >> pics: Fotografías
            >> author: Nombre del usuario que subio la fotografía
      > videos: Videos realizados por el usuario sobre la experiencia de viaje

  external_entries: experiencias de viaje realizadas por otros usuarios en una bitácora compartida
      > title: Titulo de una experiencia de viaje (opcional)
      > description: Descripción de una experiencia de viaje
      > pics: Fotografías realizadas por el usuario sobre la experiencia de Viaje
      > external_pics: Fotografías realizadas por otros usuariso sobre la experiencia de Viaje
            >> pics: Fotografías
            >> author: Nombre del usuario que subio la fotografía

  **/
  _bitacoras_compartidas: any = [
    { // Bitácora compartida con permisos colaborativos
      title : "Viaje con mis amigos a Santiago",

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
      start_date: "10 Septiembre, 2018",
      end_date: "30 Septiembre, 2018",
      permission: "colaborative"
    },

    { // Bitácora compartida con permisos de visualización
      title : "El viaje de mi amigo",
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
      start_date: "3 Septiembre, 2018",
      end_date: "7 Septiembre, 2018",
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
