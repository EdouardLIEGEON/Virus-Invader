let gameZone = document.getElementById('gameZone');
let displayZone = document.getElementById('displayZone');
let scoreZone = document.getElementById('scoreZone');

function main(){
  // initalize game
  var score = 0;

  // create grid 100 x 100
  for(var iteration = 1; iteraton <= 100; iteration++){
    let gridItem = document.createElement('DIV',iteraton);
    gridItem.setAttribute('id','grid-'+iteration);
    displayZone.appendChild(gridItem);
  }

  // create ennemi and place it on the grid
  for(var nombreEnnemis = 1;nombreEnnemis <= 30;nombreEnnemis++){
    let ennemi = createObj('ennemi',nombreEnnemis);
    let gridItem = document.getElementById('grid-'+nombreEnnemis);
    gridItem.appendChild(ennemi);
  }

  // create user and position
  let user = createObj('user','user');
  let userPosition = 105;
  let gridItem = document.getElementById('grid-'+userPosition);
  gridItem.appendChild(user);


  // game loop
  while(true){

    // detect user event
    document.addEventListener('onkeypress',function(event){
      switch(event.keyCode){
        case 32:
          // shoot them up !!!!!!!
        break;
        case 37:
          // move to left
          moveObj(-1,'user');
        break;
        case 39:
          // move to right
          moveObj(1,'user');
        break;
        default:
        break;
      }
    });

    // Déplacer les fichiers

    // Déplacer les tirs

    // calculer mpacts 

  }

}

// fonction déplacement
function moveObj(direction,objName){
  let obj = document.getElementById('obj-'+objName);
  let current = obj.parentElement;
  let gridNum = parseInt(current.id);

  if(
    ( (direction + gridNum) >= 100 && (direction + gridNum) <= 110) ||
    obj!='user'
  ){
    let moveTo = document.getElementById('grid-'+ gridNum + direction);
    moveTo.appendChild(obj);
    current.innerHtml = "";
  }
}

function createObj(objname,iteraton){
  let obj = document.createElement('IMG');
  obj.setAttribute('src','lib/medias/'+objname+'.png');
  obj.setAttribute('id','obj-'+iteration);
  obj.setAttribute('alt',objname);
  obj.setAttribute('width','26px');
  obj.setAttribute('height','26px');
  return obj;
}
