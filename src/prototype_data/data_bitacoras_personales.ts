import { Injectable } from '@angular/core';

@Injectable()
export class DataBitacorasPersonales {

  _bitacoras_personales: any  =
  [{
    id: 1,
    title: "Viaje al sur de Chile",
    likes: 2,
    comments: 0,
    entries:
    [

      {
        created_at: "30 Noviembre, 2018",
        title: "Post de texto",
        body: "Quisque eu commodo augue. Phasellus nisi enim, egestas quis lacinia eu, rutrum posuere magna. Curabitur sit amet ante rutrum, aliquam dui ut, consectetur orci. Morbi sed pulvinar mauris. Nunc ullamcorper rutrum nunc eget porttitor. Sed ac tincidunt ante, at placerat tortor. Phasellus nec bibendum mi, in gravida arcu. Integer vitae ultrices tellus. Suspendisse vitae congue dolor, sit amet faucibus arcu. Curabitur rhoncus urna at dignissim mattis. Donec dapibus massa id tellus rhoncus, et mollis purus bibendum. Nunc et vulputate augue, nec vulputate lacus. Nunc maximus nisl vitae justo tristique interdum. Curabitur posuere sed justo id porta."
      },

      {
        created_at: "30 Noviembre, 2018",
        title: "Post de video",
        body: "Curabitur sit amet ante rutrum, aliquam dui ut, consectetur orci. Morbi sed pulvinar mauris. Nunc ullamcorper rutrum nunc eget porttitor. Sed ac tincidunt ante, at placerat tortor. Phasellus nec bibendum mi, in gravida arcu. Integer vitae ultrices tellus. Suspendisse vitae congue dolor, sit amet faucibus arcu. Curabitur rhoncus urna at dignissim mattis. Donec dapibus massa id tellus rhoncus, et mollis purus bibendum. Nunc et vulputate augue, nec vulputate lacus. Nunc maximus nisl vitae justo tristique interdum. Curabitur posuere sed justo id porta.",
        video: "assets/prototype/torres_del_paine.mp4"
      },


      {
        created_at: "30 Noviembre, 2018",
        title: "Post de fotografía",
        pics:
        [
          {
            src: "assets/prototype/img1.png",
            body: "Suspendisse semper, ligula ac aliquam facilisis, libero nunc consequat diam, ac pellentesque ligula justo ut lorem. Proin varius sed odio at feugiat. Cras laoreet ipsum arcu, in interdum erat interdum quis. Praesent blandit interdum lectus id ornare. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras gravida erat eget luctus aliquet. Quisque maximus vel augue quis sodales. Duis velit dui, convallis eget lacinia a, dictum sit amet felis. Duis imperdiet ex eget nunc vehicula consectetur."
          },
        ]
      },

      {
        created_at: "27 Noviembre, 2018",
        body: "Nullam elit elit, sollicitudin non imperdiet id, pellentesque nec lectus. Nunc fringilla turpis quis ipsum mattis faucibus. Suspendisse sit amet diam massa. Suspendisse fringilla tristique tristique. Suspendisse pretium ligula vitae lectus lacinia posuere. Maecenas diam mi, bibendum a lacus at, suscipit fringilla leo. Phasellus porttitor suscipit dui, quis auctor felis dignissim sed. Fusce sed nunc eget sem rutrum gravida ut eget dui. Pellentesque dui arcu, eleifend sed vestibulum id, venenatis vel purus. Aliquam eu lobortis urna. Sed mattis dignissim vestibulum. Donec ligula nisl, ornare nec nunc quis, suscipit viverra ipsum. Suspendisse sed mi eget libero porta fringilla.",
        pics:
        [
          {
            src: "assets/prototype/img2.png",
            body: "Suspendisse semper, ligula ac aliquam facilisis, libero nunc consequat diam, ac pellentesque ligula justo ut lorem. Proin varius sed odio at feugiat. Cras laoreet ipsum arcu, in interdum erat interdum quis. Praesent blandit interdum lectus id ornare. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras gravida erat eget luctus aliquet. Quisque maximus vel augue quis sodales. Duis velit dui, convallis eget lacinia a, dictum sit amet felis. Duis imperdiet ex eget nunc vehicula consectetur."
          },
          {
            src: "assets/prototype/img3.png",
          }
        ]
      },

      {
        created_at: "26 Noviembre, 2018",
        body: "Nullam elit elit, sollicitudin non imperdiet id, pellentesque nec lectus. Nunc fringilla turpis quis ipsum mattis faucibus. Suspendisse sit amet diam massa. Suspendisse fringilla tristique tristique. Suspendisse pretium ligula vitae lectus lacinia posuere. Maecenas diam mi, bibendum a lacus at, suscipit fringilla leo. Phasellus porttitor suscipit dui, quis auctor felis dignissim sed. Fusce sed nunc eget sem rutrum gravida ut eget dui. Pellentesque dui arcu, eleifend sed vestibulum id, venenatis vel purus. Aliquam eu lobortis urna. Sed mattis dignissim vestibulum. Donec ligula nisl, ornare nec nunc quis, suscipit viverra ipsum. Suspendisse sed mi eget libero porta fringilla.",
        pics:
        [
          {
            src: "assets/prototype/img4.png",
          },
          {
            src: "assets/prototype/img5.png",
          },
          {
            src: "assets/prototype/img6.png",
          }
        ]
      },

      {
        created_at: "25 Noviembre, 2018",
        body: "Nullam elit elit, sollicitudin non imperdiet id, pellentesque nec lectus. Nunc fringilla turpis quis ipsum mattis faucibus. Suspendisse sit amet diam massa. Suspendisse fringilla tristique tristique. Suspendisse pretium ligula vitae lectus lacinia posuere. Maecenas diam mi, bibendum a lacus at, suscipit fringilla leo. Phasellus porttitor suscipit dui, quis auctor felis dignissim sed. Fusce sed nunc eget sem rutrum gravida ut eget dui. Pellentesque dui arcu, eleifend sed vestibulum id, venenatis vel purus. Aliquam eu lobortis urna. Sed mattis dignissim vestibulum. Donec ligula nisl, ornare nec nunc quis, suscipit viverra ipsum. Suspendisse sed mi eget libero porta fringilla.",
        pics:
        [
          {
            src: "assets/prototype/img7.png",
          },
          {
            src: "assets/prototype/img8.png",
          },
          {
            src: "assets/prototype/img9.png",
          },
          {
            src: "assets/prototype/img10.png",
          }
        ]
      },

      {
        created_at: "24 Noviembre, 2018",
        pics:
        [
          {
            src: "assets/prototype/img11.png",
          },
          {
            src: "assets/prototype/img12.png",
          },
          {
            src: "assets/prototype/img13.png",
          },
          {
            src: "assets/prototype/img14.png",
          },
          {
            src: "assets/prototype/img1.png",
          }
        ]
      }

    ],

    start_date: "24 Noviembre, 2018",
    end_date: "30 Noviembre, 2018",
    sdate: new Date(2018,11,24),
    edate: new Date(2018,11,30),
    collaborators: 1
  },
{
  id: 2,
  likes: 5,
  comments: 1,
  title: "Bitácora general",
  start_date: "20 Octubre, 2018",
  sdate :new Date(2018, 8, 20),
  edate: new Date(2018, 8, 20),

  collaborators: 1,
  entries: []
}];

  getBitacoras(){ return this._bitacoras_personales; }

  getBitacoraTitles(){
    var title_list = [];
    for (let bitacora of this._bitacoras_personales)
      if (bitacora.title != null)
        title_list.push(bitacora.title);
    return title_list;
  }

  getBitacora(id){
    for (let bitacora of this._bitacoras_personales){
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

  getIndexOfID(id){
    var index = 0;
    for (let bitacora of this._bitacoras_personales){
      if (bitacora.id != null && bitacora.id == id ){
        return index;
      }
      index++;
    }
    return -1;
  }

  setTextEntry(id, entry){
    var index = this.getIndexOfID(id);
    this._bitacoras_personales[index].entries.unshift(entry);
    console.log(this._bitacoras_personales);

  }


}
