### Homework 6 (due Sunday, October 15, 2017)

Two parts this week: some art inspiration and extending Snake! Both due Sunday.

#### Art Inspiration

**Assignment**: Create three sketches inspired by the colors and patterns of [Dan Flavin's neon pieces](https://www.google.com/search?tbm=isch&as_q=Dan+Flavin).

**Assignment**: Create three sketches inspired by the colors and patterns of [Frank Stella's paintings](https://www.google.com/search?tbm=isch&as_q=Frank+Stella). **Use loops!**


#### Extending Snake

Starting with this modified Snake code:

```javascript
var SNAKE_BLOCK_SIZE = 20;

var snakeHead = {
  x: 100,
  y: 100
}
var snakeSegments = [];

var snakeDirection = "right"; // or "down", etc.

var foodLocation = {
  x: 200,
  y: 200
}

function setup() {
  createCanvas(400, 400);
  frameRate(2);
  
  // add 2 segments
  extendSnake();
  extendSnake();
  
  background(0);
  drawSegment(snakeHead);
}

function draw() {
  background(0);

  moveSnake();
  checkFoodReached();

  // draw snake head
  drawSegment(snakeHead);
    
  // draw snake body
  snakeSegments.forEach(drawSegment);
  
  // draw food location
  ellipse(foodLocation.x, foodLocation.y, SNAKE_BLOCK_SIZE, SNAKE_BLOCK_SIZE);
}

function drawSegment(segment) {
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(segment.x, segment.y, SNAKE_BLOCK_SIZE, SNAKE_BLOCK_SIZE);
}  

function moveSnake() {
  // add snakeHead to front of segments array
  snakeSegments.unshift({x: snakeHead.x, y: snakeHead.y});
  // remove last element of the segments array
  snakeSegments.pop();
  
  if (snakeDirection == "up") {
    snakeHead.y = snakeHead.y - SNAKE_BLOCK_SIZE;
  } else if (snakeDirection == "down") {
    snakeHead.y = snakeHead.y + SNAKE_BLOCK_SIZE;
  } else if (snakeDirection == "left") {
    snakeHead.x = snakeHead.x - SNAKE_BLOCK_SIZE;
  } else if (snakeDirection == "right") {
    snakeHead.x = snakeHead.x + SNAKE_BLOCK_SIZE;
  }
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    snakeDirection = "up";
  } else if (keyCode == DOWN_ARROW) {
    snakeDirection = "down";
  } else if (keyCode == RIGHT_ARROW) {
    snakeDirection = "right";
  } else if (keyCode == LEFT_ARROW) {
    snakeDirection = "left";
  }
}

function extendSnake() {
  // get the last segment -- or the head segment if there aren't any segments
  var lastSegment = snakeSegments[snakeSegments.length-1] || snakeHead;
  // duplicate last segment
  snakeSegments.push({x: lastSegment.x, y: lastSegment.y}); 
}

function checkFoodReached() {
  if (dist(snakeHead.x, snakeHead.y, foodLocation.x, foodLocation.y) == 0) {
    foodLocation.x = SNAKE_BLOCK_SIZE * floor(random(width / SNAKE_BLOCK_SIZE));
    foodLocation.y = SNAKE_BLOCK_SIZE * floor(random(height / SNAKE_BLOCK_SIZE));
    
    // make the snake longer!
    extendSnake();
  }
}
```

Modify the code as follows:

1. **Assignment**: Add a score! What data will you need? How will you render it? (Check the reference for the [`text` command](https://p5js.org/reference/#/p5/text).)
   
   What event causes the score to increase? (And is there already a function that's triggered by this event?)

2. **Assignment**: Add boundaries! The simple version of this uses the sides of the canvas as boundary, so start there. You're creating a new event: hitting the boundary. How do you detect this event? What actions do you take in response?
   
   The [`noLoop` command](https://p5js.org/reference/#/p5/noLoop) will help you stop the game from continunion to run.

3. **Challenge**: Detect when the snake head hits the snake body and end the game then too!