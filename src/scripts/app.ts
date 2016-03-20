var System;

System.import('actions').then(actions => {
  console.log("actions imported.");

  let someMath = actions.adding(1, 2, 3)
    .then(res => console.log('res ', res));

});





