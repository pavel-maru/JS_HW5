"use strict";

// 1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. 
// Доска должна быть верно разлинована на чёрные и белые ячейки. 
// Строки должны нумероваться числами от 1 до 8, 
// столбцы — латинскими буквами A, B, C, D, E, F, G, H.

function chessBoard(canvas) {

    let ctx = canvas.getContext("2d");
    const offset = 55;
    const number = 8;
    const arrLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    ctx.font = "22px Arial";

    // цифры
    for (let num = number; num >= 1; num--) {
        ctx.fillText(num, offset / 2 - 5, offset * (number - num + 2) - 5);
    }
    // буквы
    for (let i = 0; i < number; i++) {
        ctx.fillText(arrLetters[i], offset * (i + 1) + 5, offset / 2 + 5);
    }

    // квадратики
    for (let i = 1; i <= number; i += 2) {
        for (let j = 1; j <= number; j += 2) {
            drawCell(offset * j, offset * i, "white");
            drawCell(offset * (j + 1), offset * i, "black");
            drawCell(offset * j, offset * (i + 1), "black");
            drawCell(offset * (j + 1), offset * (i + 1), "white");
        }
    }

    // границы поля
    let num1 = number + 1;
    drawLine(offset, offset, offset, offset * num1);
    drawLine(offset, offset, offset * num1, offset);
    drawLine(offset * num1, offset, offset * num1, offset * num1);
    drawLine(offset, offset * num1, offset * num1, offset * num1);

    function drawCell(x, y, color) {
        ctx.beginPath();
        ctx.rect(x, y, offset, offset);
        ctx.fillStyle = color;
        ctx.fill();
    }

    function drawLine(x0, y0, x1, y1) {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
    }
}

let canvas = document.getElementById("renderCanvas");

Window.onload = chessBoard(canvas);