### Homework 4 (due Sunday, October 1, 2017)

0. If you haven't yet sent me your patch for the class quilt, please do so!

1. Complete the [in-class exercises from Wedneday's class](../README.md#loops-workshop) -- the challenge exercise is optional -- and submit them in your [homework repository](/zamfi/github-guide). Label them `sketch-1.js`, etc.

2. Pick 3 of Sol LeWitt's *Wall Drawings* from [this retrospective at MASS MoCA](http://massmoca.org/sol-lewitt/) and reproduce them using code. Label these in your [homework repository](http://github.com/zamfi/github-guide) according to their title in the restrospective, e.g., `lewitt-368.js`. Feel free to use the image as your guide or LeWitt's instructions directly. More info about [Sol LeWitt's instructions here](http://risdmuseum.org/manual/45_variations_of_a_drawing_sol_lewitt_and_his_written_instructions).
   
   Get creative! Use whatever code you're comfortable with. Bonus points for doing more than 3, or for animating them in some way.
   
   You may also find interesting Casey Reas' [{Software} Structures](http://artport.whitney.org/commissions/softwarestructures/map.html).

3. Animations!
   
   In class, we adapted the Rudy-based [`random-circles.js`](../class-code/random-circles.js) sketch to work in p5.js:
   
   ```javascript
   function setup() {
     background(255);
     strokeWeight(3);
     colorMode(HSB);
   }

   function draw() {
     var h = random(360)
     stroke(h, 50, 90);
     fill(h, 50, 100);

     var r = random(30, 60);
     ellipse(random(width), random(height), r, r);
   }
   ```
   
   1. Perform the same adaptation on the Rudy-based [`cycling-hue.js`](../class-code/cycling-hue.js) sketch. Using [p5.js](http://p5js.zamfi.net), put all the variables at the top, any code **not inside** `while (true)` in a `fucntion setup() { }` block, and any code **inside** the `while (true)` loop in a `function draw() { }` block. (Use the code above as a template!) Call this `random-circles.js` in your repository.
   
   2. Next, create a new sketch starting from your cone-of-lines in-class assignment. Turn the code into an animation like this:
      
      ![animated-lines](img/animated-lines.gif)
      
      You can use `mouseX` and `mouseY` for the position of the mouse -- which endpoint of the lines are you replacing?
      
  
#### Tutorials (due before next class)

Watch Daniel Shiffman's tutorials about [JavaScript objects](https://www.youtube.com/watch?v=-e5h4IGKZRY&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=7) and functions -- [part 1](https://www.youtube.com/watch?v=wRHAitGzBrg&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=16), [part 2](https://www.youtube.com/watch?v=zkc417YapfE&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=17), and [part 3](https://www.youtube.com/watch?v=qRnUBiTJ66Y&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=18).

Then, answer the following questions in a 'questions.md' file in your repository for week 3's homework:

1. What is one major advantage of using an object instead of multiple variables?

2. What is the role of the parameters of a function?

3. What does it mean for a function to "return" something?
