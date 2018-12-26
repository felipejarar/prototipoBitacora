import { Injectable } from '@angular/core';

@Injectable()
export class DataBitacorasPersonales {

/**
  Estructura: Bitácora Personal
  > Título (opcional)
  > Cuerpo (opcional)
  > Fotografías [] (Opcional)
      >> Source
      >> Comentarios []
  > Video
      >> Source
      >> Comentarios []

  > Comentarios []


  > Entradas
      >>  Título
      >>  Cuerpo
      >>  Fotografías
      >>  Video
**/
  _bitacoras_personales: any  = [
  {

    title: "Viaje al sur de Chile",

    entries:
    [
      {
        title: "Lorem Ipsum (1)",
        body: "Quisque eu commodo augue. Phasellus nisi enim, egestas quis lacinia eu, rutrum posuere magna. Curabitur sit amet ante rutrum, aliquam dui ut, consectetur orci. Morbi sed pulvinar mauris. Nunc ullamcorper rutrum nunc eget porttitor. Sed ac tincidunt ante, at placerat tortor. Phasellus nec bibendum mi, in gravida arcu. Integer vitae ultrices tellus. Suspendisse vitae congue dolor, sit amet faucibus arcu. Curabitur rhoncus urna at dignissim mattis. Donec dapibus massa id tellus rhoncus, et mollis purus bibendum. Nunc et vulputate augue, nec vulputate lacus. Nunc maximus nisl vitae justo tristique interdum. Curabitur posuere sed justo id porta."
      },
      {
        pics: [
          {
            src: "assets/prototype/img1.png",
            body: "Suspendisse semper, ligula ac aliquam facilisis, libero nunc consequat diam, ac pellentesque ligula justo ut lorem. Proin varius sed odio at feugiat. Cras laoreet ipsum arcu, in interdum erat interdum quis. Praesent blandit interdum lectus id ornare. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras gravida erat eget luctus aliquet. Quisque maximus vel augue quis sodales. Duis velit dui, convallis eget lacinia a, dictum sit amet felis. Duis imperdiet ex eget nunc vehicula consectetur."
          },
          {
            src: "assets/prototype/img2.png"
          }
        ]
      },

      {
        title: "Lorem Ipsum (2)",
        body: "Nullam elit elit, sollicitudin non imperdiet id, pellentesque nec lectus. Nunc fringilla turpis quis ipsum mattis faucibus. Suspendisse sit amet diam massa. Suspendisse fringilla tristique tristique. Suspendisse pretium ligula vitae lectus lacinia posuere. Maecenas diam mi, bibendum a lacus at, suscipit fringilla leo. Phasellus porttitor suscipit dui, quis auctor felis dignissim sed. Fusce sed nunc eget sem rutrum gravida ut eget dui. Pellentesque dui arcu, eleifend sed vestibulum id, venenatis vel purus. Aliquam eu lobortis urna. Sed mattis dignissim vestibulum. Donec ligula nisl, ornare nec nunc quis, suscipit viverra ipsum. Suspendisse sed mi eget libero porta fringilla."
      }
    ],

    start_date: "24 Noviembre, 2018",

    end_date: "30 Noviembre, 2018",

    collaborators: 1
  }]

  getBitacoras(){
    return this._bitacoras_personales;
  }

  getPostCounter(bitacora){
    return bitacora.length;
  }

  getPicCounter(bitacora){
    var counter = 0;
    for (let entrada of bitacora.entries){
      if (entrada.pics != null ){
        counter += entrada.pics.length;
      }
    }
    return counter;
  }

  getFivePictures(bitacora){
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

  getVidCounter(bitacora){
    var counter = 0;
    for (let entrada of bitacora.entries){
      if (entrada.videos != null ){
        counter += entrada.videos.length;
      }
    }
    return counter;
  }


}
