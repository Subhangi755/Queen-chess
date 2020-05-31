var queen = {
    direction: 'S',
    position: {
        x : 4,
        y : 0
    }
}
var step = window.prompt("Enter the steps");
step = parseInt(step);
var direction = window.prompt("Enter the direction");
changeDirection(direction, step);
console.log(queen);


function MoveForward(step){
    step = step + 1;
    
}

console.log(queen.position);


function changeDirection(direction, step) {
    switch (direction) {
        case "W": {
            queen.position.y = queen.position.y - step;
            if (queen.position.y < 0) console.log("out");
            else console.log(queen.position.y);
            break;
        }
//N and S must affect x axis
//E and W with y okay then should i replace all y with x and x with y? Instead change the direction N -> W, S -> E, etc.ok IS IT FINE NOW?
        case "E": {
            queen.position.y = queen.position.y + step;
            if (queen.position.y < 0) console.log("out");
            else console.log(queen.position.y);
            break;
        }

        case "S": {
            queen.position.x = queen.position.x - step;
            if (queen.position.x > 8) {console.log("Out");}
            else console.log(queen.position.x);
            break;
        }

        case "N": {
            queen.position.x = queen.position.x + step;
            if (queen.position.x > 8) console.log("Out");
            else console.log(queen.position.x);
            break;
        }

        case "NE": {
            queen.position.x = queen.position.x + step;
            queen.y = queen.y - step;
            if (queen.position.y > 8 || queen.position.x < 0 || queen.position.y < 0)
            console.log("Out");
            else console.log(queen.position.x, queen.position.y);
            break;
        }

        case "NW": {
            queen.position.x = queen.position.x - step;
            queen.position.y = queen.position.y - step;
            if (queen.position.y > 8 || queen.position.x < 0 || queen.position.y < 0)
                console.log("Out");
            else console.log(queen.position.x, queen.position.y);
            break;
        }

        case "SE": {
            queen.position.x = queen.position.x + step;
            queen.position.y = queen.position.y + step;
            if (queen > 8 || queen.position.y > 8 || queen.position.x < 0 || queen.position.y < 0)
                console.log("Out");
            else console.log(queen.position.x, queen.position.y);
            break;
        }

        case "SW": {
            queen.position.x = queen.position.x - step;
            queen.position.y = queen.position.y + step;
            if (queen > 8 || queen.position.y > 8 || queen.position.x < 0 || queen.position.y < 0)
                console.log("out");
            else console.log(queen.position.x, queen.position.y);
            break;
        }
    }
}
    


var positionlog = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];
console.log("Queen's current Position ->" + positionlog[queen.position.x][queen.position.y]);

  