'use strict';
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');
const score0El=document.querySelector('#score--0');
const score1El=document.querySelector('#score--1');
const current0El=document.querySelector('#current--0');
const current1El=document.querySelector('#current--1');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const scores=[0,0];
let activeplayer=0;
let currentscore=0;
let playing =true;
const switchPlayer=function(){
    document.getElementById(`current--${activeplayer}`).textContent=0;
    currentscore=0;
    activeplayer=activeplayer===0?1:0;
   player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click',function(){
    if(playing){
const dice = Math.trunc(Math.random()*6)+1;

diceEl.classList.remove('hidden');
diceEl.src=`dice-${dice}.png`;
if(dice!==1){
currentscore+=dice;
document.getElementById(`current--${activeplayer}`).textContent=currentscore;


}
else{
   
 switchPlayer();
 
   

    
    


}
    }

})
btnHold.addEventListener('click',function(){
    if(playing){
    scores[activeplayer]+=currentscore;
   document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer];
   if(scores[activeplayer]>=50){
    playing =false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
   
    
   }else{
  switchPlayer();}
   }
})
 btnNew.addEventListener('click',function(){
    playing =true;
    activeplayer=0;
    currentscore=0;
    scores[0]=0;
    scores[1]=0;
    score0El.textContent=0;
score1El.textContent=0;
current0El.textContent=0;
current1El.textContent=0;
player0.classList.remove('player--winner');
player1.classList.remove('player--winner');
diceEl.classList.add('hidden');

player1.classList.remove('player--active');
player0.classList.add('player--active');


   
  
 })

