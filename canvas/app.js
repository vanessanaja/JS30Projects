const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BAD55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

//only draw when mouseclick is down
let isDrawing = false; 
let lastX = 0;
let lastY = 0;


