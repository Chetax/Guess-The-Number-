var x = document.getElementById('Number');
let n1 = Math.floor(Math.random() * 100);
let n2 = Math.floor(Math.random() * 100);

if (n1 > n2) {
  x.innerHTML = `<p>Guess a Number Between ${n2}-${n1} </p>`;
} else if (n1 < n2) {
  x.innerHTML = `<p>Guess a Number Between ${n1}-${n2} </p>`;
} else if ((n1 > n2 && n1 - n2 == 1) || (n1 < n2 && n2 - n1 == 1) || n1 - n2 == 0) {
  location.reload();
}

let min;
if (n1 > n2) {
  min = n2;
} else if (n1 < n2) {
  min = n1;
}

let range = 0;
if (n1 > n2) {
  range = n1 - n2;
} else {
  range = n2 - n1;
}

let ans = Math.floor(Math.random() * range) + min;
console.log(ans);

let guesscount = 0;
var guessNo = document.getElementById('guessRemain');
if (guesscount == 0) {
  guessNo.innerHTML = 'No. Of Guess :  ';
}
var gno = document.getElementById('guessNo');
var input = document.getElementById('guess');
var i = document.getElementById('out');
var gr = document.getElementById('gr');
var replay = document.getElementById('replay');

input.addEventListener('click', function() {
  gno.innerHTML = `Guess Number: ${i.value}`;
  guesscount++;
  guessRemain.innerHTML = `No. Of Guess: ${guesscount}`;

  if (ans > i.value) {
    gr.innerHTML = 'You Guess Is Small 😶';
  } else if (ans < i.value) {
    gr.innerHTML = 'You Guess Is Large 😫';
  } else {
    gr.innerHTML = 'Congratulations 🎉';
    replay.innerHTML = '<img id="image" src="./replay.png" alt="My Image">';
    replay.addEventListener('click', function() {
      location.reload();
    });
  }
});
