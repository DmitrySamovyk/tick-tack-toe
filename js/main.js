window.onload = function() {
  let cells = document.querySelectorAll('.cell');
  cells.forEach(function(cell) {
    cell.addEventListener('click', function(e) {
      move(e.target.getAttribute('id'), 'player')
    })
  });

};

let t = new Array(9);
let endText;

function computer() {
  let id = Math.floor(Math.random() * 9);
  t[id] ? computer() : move(id, 'computer');
}

function checkEnd(role) {
  if (t[0] === 'computer' && t[1] === 'computer' && t[2] === 'computer'
    || t[0] === 'player' && t[1] === 'player' && t[2] === 'player') {endText = `${role} win`; return true;}
  if (t[3] === 'computer' && t[4] === 'computer' && t[5] === 'computer'
    || t[3] === 'player' && t[4] === 'player' && t[5] === 'player') {endText = `${role} win`; return true;}
  if (t[6] === 'computer' && t[7] === 'computer' && t[8] === 'computer'
    || t[6] === 'player' && t[7] === 'player' && t[8] === 'player') {endText = `${role} win`; return true;}
  if (t[0] === 'computer' && t[3] === 'computer' && t[6] === 'computer'
    || t[0] === 'player' && t[3] === 'player' && t[6] === 'player') {endText = `${role} win`; return true;}
  if (t[1] === 'computer' && t[4] === 'computer' && t[7] === 'computer'
    || t[1] === 'player' && t[4] === 'player' && t[7] === 'player') {endText = `${role} win`; return true;}
  if (t[2] === 'computer' && t[5] === 'computer' && t[8] === 'computer'
    || t[2] === 'player' && t[5] === 'player' && t[8] === 'player') {endText = `${role} win`; return true;}
  if (t[0] === 'computer' && t[4] === 'computer' && t[8] === 'computer'
    || t[0] === 'player' && t[4] === 'player' && t[8] === 'player') {endText = `${role} win`; return true;}
  if (t[2] === 'computer' && t[4] === 'computer' && t[6] === 'computer'
    || t[2] === 'player' && t[4] === 'player' && t[6] === 'player') {endText = `${role} win`; return true;}
  if(t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) {endText = 'draw'; return true;}
}

function move(id, role) {
  if(t[id]) return false;
  t[id] = role;
  document.getElementById(id).className = `cell ${role}`;
  !checkEnd(role) ? (role === 'player') ? computer() : null : reset()
}

function reset() {
  alert(`Game over! ${endText}!!!`);
  location.reload();
}
