import {adding} from 'actions';

adding(1, 2, 3, 4, 5).then(res => {
  let h1El = document.querySelector('.magicNumber');
  h1El.innerHTML = res;
});





