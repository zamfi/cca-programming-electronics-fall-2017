### Homework 5 (due Sunday, October 8, 2017)

Note: this is a pretty long homework assignment, and the tutorial exercises in particular may take a while to complete -- start early!

1. Complete the [in-class exercises from Wedneday's class](../README.md#objects--functions-workshop) and submit them in your [homework repository](/zamfi/github-guide). Label them `sketch-1.js`, etc.

2. **Assignment**: Pick 3 **more** of Sol LeWitt's *Wall Drawings* from [this retrospective at MASS MoCA](http://massmoca.org/sol-lewitt/) and reproduce them using code. Label these in your [homework repository](http://github.com/zamfi/github-guide) according to their title in the restrospective, e.g., `lewitt-368.js`. Feel free to use the image as your guide or LeWitt's instructions directly. More info about [Sol LeWitt's instructions here](http://risdmuseum.org/manual/45_variations_of_a_drawing_sol_lewitt_and_his_written_instructions).
   
   Get creative! Use whatever code you're comfortable with. Bonus points for doing more than 3, or for animating them in some way.

3.  Starting with the following code:      
    
    ```javascript
    var agents = [];

    function setup() {
      createCanvas(400, 400);
      for (var i = 0; i < 30; i++) {
        agents.push({
          x: random(width),
          y: random(height),
          angle: random(TWO_PI),
          state: floor(random(3))
        });
      }
    }

    function draw() {
      rectMode(CENTER);
      background(220);
      
      agents.forEach(activateAgent);
      agents.forEach(drawAgent);
    }

    function drawAgent(agent) {
      push();
      translate(agent.x, agent.y);
      rotate(agent.angle);
      stroke(0);
      fill(255);
      rect(0, 0, 20, 10);
      fill(0);
      rect(0, 0, 2, 2);
      pop();
    }

    function activateAgent(agent) {
      if (random(100) < 1) {
        agent.state = floor(random(3));
      }

      if (agent.state == 1) {
        agent.angle += PI / 200;
      }

      if (agent.state == 2) {
        agent.x += cos(agent.angle) / 3;
        agent.y += sin(agent.angle) / 3;

        if (agent.x > width) {
          agent.x = 0;
        } else if (agent.x < 0) {
          agent.x = width;
        }

        if (agent.y > height) {
          agent.y = 0;
        } else if (agent.y < 0) {
          agent.y = height;
        }
      }
    }
    ```
    
    1. Copy the code into a new [p5js sketch](http://p5js.zamfi.net). Run the code and observe its behavior. What do the rectangles ("agents") do? How do they move? 
    
    2. **Assignment**: Give each agent a filled color. Bonus points if the small rectangle inside is a darker version of that color! (Hint: remember that HSB mode lets you specify hue, saturation, and brightness separately...)
    
    3. **Assignment**: Modify the `activateAgent` function to speed up the movement of each agent.

    4. **Assignment**: Add a `mousePressed` function that creates a new "agent" object at the location of the mouse, with a random angle. You may find the [`append`](https://p5js.org/reference/#/p5/append) function useful!
    
    5. **Assignment**: Add a `keyPressed` function that sets the `angle` property of every agent to 0. It may help to write a function that takes one `agent` as a parameter and sets its `angle` proeprty to `0`: `agent.angle = 0;`. Then, inside your `keyPressed` function, use `agents.forEach` to run your new function on each agent!
       
       Bonus points for detecting the arrow keys (see the [`keyPressed` reference](https://p5js.org/reference/#/p5/keyPressed)) being pressed, and then rotating the agents to match the direction of the key.
    
  
#### Arrays (due Tuesday)

We only scratched the surface of arrays in class.

Watch Daniel Shiffman's tutorials about arrays: [part 1](https://www.youtube.com/watch?v=VIQoUghHSxU&index=21&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA), [part 2](https://www.youtube.com/watch?v=RXWO3mFuW-I&index=22&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA), and [part 3](https://www.youtube.com/watch?v=pGkSHeEZLMU&index=23&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA).

Given the following code:

```javascript
var sizes = [40, 70, 90, 30, 60];

function setup() {
  createCanvas(600, 600);

  noStroke();
    
  for (var i = 0; i < sizes.length; i += 1) {
    fill(sizes[i]);
    ellipse(50+i*100, height/2, sizes[i], sizes[i]);
  }
}
```

Make the following changes, and save your code in your [homework repository](http://github.com/zamfi/github-guide) using the name `circles-1.js` etc.

1. Add three more circles to the sketch. (Make sure they're all visible.)

2. Modify the code so that the circles have color and are not just grayscale.

3. Modify the circle sizes so they correspond (roughly!) to the sizes of the [8 planets of the solar system](http://www.universetoday.com/36649/planets-in-order-of-size/).

4. Convert the sketch into an animation *(Hint: you'll need to define a `draw()` function!)* that causes each of the circles to jitter up and down by a few pixels each frame.
   
   There are multiple ways to do this; some are easier than others. Think for a bit before jumping into code.

Next, consider the following code:

```javascript
var shade0 = 10;
var shade1 = 20;
var shade2 = 45;
var shade3 = 25;
var shade4 = 60;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB);
  noStroke();
  
  fill(shade0, 100, 100);
  rect(0*width/5, 0, width/5, height);
  
  fill(shade1, 100, 100);
  rect(1*width/5, 0, width/5, height);
  
  fill(shade2, 100, 100);
  rect(2*width/5, 0, width/5, height);
  
  fill(shade3, 100, 100);
  rect(3*width/5, 0, width/5, height);
  
  fill(shade4, 100, 100);
  rect(4*width/5, 0, width/5, height);
}
```

Make the following changes, labeling your sketches `arrays-1.js` etc. in your [homework repository](http://github.com/zamfi/github-guide).

1. Change the code above to use an array insted of the 5 separate variables named `shade0`, `shade1`, etc. Create your array first, e.g., `var shade = [];` -- then replace every use of the variable `shade#` with `shade[#]` (e.g., `shade2` becomes `shade[2]`) so that your code uses numeric indexes into an array. The output of your sketch should not change!

2. Modify the `draw` function to use a loop on a variable `i` instead of calling `fill` and `rect` individually 5 times. The code for the circles assignment above may be helpful inspiration. (Remember that your last value for `i` should be the highest index: 4. Typically, programmers will write `i < 5`, which is true when `i` is 4 and false when `i` is 5.)

3. If you didn't do this in #2, use the array length instead of the constant number `5` in your code's divisions of the `width` variable. Also use the array length in the condition of your loop.

4. Add 4 more shades to the array.

5. **Optional Challenge**: Modify the code so that the shade of the last panel changes with the `y` coordinate of the mouse. (Note: you can access the last entry in an array using its length, as in `shades[shades.length-1] = 300`.)

6. **Optional Challenge**: Make clicks add new bars at the end of the canvas.

7. **Optional Challenge**: Animate the bars sliding together across the screen. 

8. **Bonus Challenge**: Make the bars slide at different speeds. (You may find is helpful to use objects instead of numbers in your array, which would allow you to associate a position as well as a hue with each shade.)

#### Tutorials

If you find the concept of functions and function parameters confusing, watch Daniel Shiffman's videos about functions -- [part 1](https://www.youtube.com/watch?v=wRHAitGzBrg&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=16), [part 2](https://www.youtube.com/watch?v=zkc417YapfE&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=17), and [part 3](https://www.youtube.com/watch?v=qRnUBiTJ66Y&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=18).

These videos probably most helpful if you take the time to experiment with the code Shiffman writes in the course of his videos.