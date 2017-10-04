# CCA Programming & Electronics, Fall 2017

This course repository contains homework assignments, useful guides, and code for "Programming & Electronics" at CCA, Fall 2017.

Also included in this repository is the official [course syllabus](syllabus.pdf).

### Week 1: Wednesday, September 6, 2017

Lecture:
- Introductions
- What is programming?
- Goals & course details

Hands-on activities:
- Human Embodiment of Programmer & Robot
  - Programs generally run line-by-line.
  - Repetition, decision making, and recipes break that up.
- [Solving Puzzles](puzzle-sheets.pdf)

#### Building Blocks of Code

In class, we discussed the four basic building blocks of code: actions & recipes, remembering, making decisions, and repetition. 

[Here are some notes.](building-blocks-programs.md)

#### Inspiration

Finally, here are some inspirational videos to get you excited for our class if you're not already:
- Creative Code
  - [Interviews with Practitioners](http://www.youtube.com/watch?v=eBV14-3LT-g)
- Basic robots
  - [Coffee-can robot](http://www.youtube.com/watch?v=b0mIshBIbvI#t=24)
  - [Tree-climbing robot](http://www.youtube.com/watch?v=zkpH1BjD6Wc)
  - [Self-balancing robot](http://www.youtube.com/watch?v=Tw9Jr-SPL0Y)
  - [Insect robot](http://www.youtube.com/watch?v=tOsNXg2vAd4#t=120)
  - [Treadbot](http://www.youtube.com/watch?v=YblSltHDbIU)
  - [Velociraptor robot](http://www.youtube.com/watch?v=lPEg83vF_Tw)
- Installations
  - [The Bay Lights](http://thebaylights.org/)
  - [Murmur Wall](http://www.future-cities-lab.net/projects/#/murmurwall/)
  - [Floating Couch](http://vimeo.com/72826106)
  - [Wooden Segment Mirror](https://www.youtube.com/watch?v=BZysu9QcceM#t=36)
  - [Generative design](https://www.youtube.com/watch?v=pNkz8wEJljc)
- Art & Music bots
  - [Textile weaving](https://vimeo.com/71044541)
  - [ReacTable](https://www.youtube.com/user/marcosalonso)
  - [Projection mapping](https://www.youtube.com/watch?v=czuhNcNU6qU)
  - [Laser harp](http://www.youtube.com/watch?v=sLVXmsbVwUs#t=20)
  - [Cubli: Floating Cube](https://www.youtube.com/watch?v=n_6p-1J551Y)
  - [Arc-o-matic](http://vimeo.com/57082262#at=130)
  - [Robo Faber](http://vimeo.com/78771257)
  - [Eggbot](https://www.youtube.com/watch?v=w4cdbV2oaEc)
- Drink-makers
  - [Textspresso](http://www.youtube.com/watch?v=kx9D74t7GD8#t=89)
  - [The Inebriator](http://www.youtube.com/watch?v=WqY7fchs7H0)
- Computer Numerical Control (CNC)
  - [Shapoko / tinyg](http://www.youtube.com/watch?v=pCC1GXnYfFI#t=11)
  - [Makerbot Replicator](http://www.youtube.com/watch?v=NAbiAzYhTOQ)
- Vacuuming
  - [Roomba](https://www.youtube.com/watch?v=0DNkbZvVYvc)

[Homework for Week 1](hw/week1.md)

### Week 2: Wednesday, September 13, 2017

In-class:
- Homework review.
- Translating "pseudo-code" into real code with [Rudy](http://rudy.zamfi.net); here are some notes on the [building blocks of code](building-blocks-code.md).

[Homework for Week 2](hw/week2.md)

### Week 3: Wednesday, September 20, 2017

First, homework review. Then, a workshop.

#### Workshop

Together, we'll experiment with a few sketches to practice variables & functions:

- [A Single Ellipse](http://p5js.zamfi.net/jd/sketches/SkPx0nSPx)
  - Working with a partner, modify this sketch to create an ellipse that extends past the edges of the canvas.
- [Random Dots](http://p5js.zamfi.net/full/HJ6LyTBPx)
  - Working with a partner, modify this sketch to give each ellipse:
     1. A random size.
     2. A random color. (Use HSB for nicer colors!)
  - Here's some code that accomplishes this: [random-dots.js](class-code/random-circles.js)
- [Color and HSB](http://p5js.zamfi.net/full/ByanCnHPx)
  - Working with a partner, modify this sketch so that it continuously changes color instead of stopping at red.
  - Here's the code we created together in class: [cycling-hue.js](class-code/cycling-hue.js)
-   Class Quilt!

    Working with a partner, make two patches for the class quilt! Start with the following code:

    ```javascript
    function yourPatch(x, y) {
      noFill();
      stroke(238);
      rect(x, y, 100, 100);
      
      // your code here!
    }
    
    background(255);
    
    yourPatch((width-100)/2, (height-100)/2);
    ```
    
    Modify the `yourPatch` function, replacing `// your code here!` with drawing commands that draw inside the 100-by-100 pixel square. Use `x` and `y` to get yourself started -- all your shapes should appear within the rectangle bounded to the left by `x`, above by `y`, to the right by `x+100` and below by `y+100`. 
    
    We'll then take all our functions and pattern them together into a class quilt! Making your functions depend on `x` and `y` means that we can place them anywhere in the quilt by "passing in" the appropriate `x` and `y` coordinates for that place in the quilt.
    
    When you like what you have, change the call your `yourPatch` to draw your patch at `(0, 0)` and `(100, 100)` -- make sure your drawing moves along with the coorinates.
    
    Feel free (but not compelled) to remove the border rectangle when you like what you have!
    
    Here's a (frankly, pretty complicated) example that I came up with for myself:
    
    ```javascript
    function jdPatch(x, y) {
      noFill();
      stroke(238);
      rect(x, y, 100, 100);
      
      // blocky J
      fill(238);
      noStroke();
      rect(x+20, y+20, 60, 20);
      rect(x+40, y+40, 20, 40);
      rect(x+20, y+60, 40, 20);
      
      // overlay of lines
      stroke(0);
      var lines = 3;
      while (lines < 50) {
        line(x+lines, y, x, y+lines);
        lines = lines + 5;
      }
      stroke(200);
      while (lines < 100) {
        line(x+lines, y, x, y+lines);
        lines = lines + 3;
      }
      stroke(255, 127, 0);
      lines = 0;
      while (lines < 50) {
        line(x+100, y+lines, x+lines, y+100);
        lines = lines + 4;
      }
      stroke(0, 64, 127);
      while (lines < 100) {
        line(x+100, y+lines, x+lines, y+100);
        lines = lines + 4;
      }
    }
    ```
    
    You don't have to understand exactly how the code above works -- but do notice that **every single coordinate** parameter of every shape and line has `x` or `y` in it -- usually something added to `x` or `y` -- and that's so that every shape is drawn **relative to `(x, y)`**. That way, when I run `jdPatch(0,0)` or `jdPatch(100, 100)`, all my shapes are offset by the correct amount.
    
[Homework for Week 3](hw/week3.md)

### Week 4: Wednesday, September 27, 2017

Thanks to everyone who provided a patch for the class quilt!

![quilt](img/class-quilt.png)

#### Loops Workshop

Today, we'll practice loops:

1.  Together, we'll make vertical lines:
    
    ![vertical lines](img/vertical-lines.png)

2.  Then, with a partner, you'll make horizontal lines:
    
    ![horizontal lines](img/horizontal-lines.png)
    
3.  Try these concentric circles too:
    
    ![concentric circles](img/concentric-circles.png)

4.  And this cone:

    ![cone of lines](img/cone-of-lines.png)
    
5.  Also this diamond:

    ![diamond](img/diamond.png)
    
6.  What about these taller lines?
    
    ![doubles](img/doubles.png)
    
7.  For this you'll need a **loop within a loop**:
    
    ![artdeco](img/artdeco.png)

8.  Now try this grid of circles; you'll need **nested loops** for this one too!
    
    ![circle grid](img/circle-grid.png)

9.  **Challenge:** Using a technique called the "exponential moving average", we can create a smooth easing animation like this:
    
    ![easing position](img/easing-position.gif)
    
    The technique works by one variable to store intermediate values for another variable. For example, in the sketch above, the *x-* and *y-* coordinates of the circle are stored in variables `x` and `y`, which are **eased** to the target values given by `mouseX` and `mouseY`.
    
    "Exponential moving average" is a fancy way of saying: first, pick a fixed **rate** at which the easing occurs for a variable reaching its target. That rate controls how much impact the target has on the value each frame. For exampe, if the rate is 10%, then the new value each frame is 10% the target value and 90% the old value of the variable. Here's some sample code; the key is in the line `x = target*rate + x*(1-rate);`:
    
    ```javascript    
    var rate = 0.1;
    var x = 0;
    var target = 100;
    
    while (true) {
      ellipse(x, 100, 15, 15);
      x = target*rate + x*(1-rate); // rate is 0.1, or 10% -- (1-rate) is 0.9, or 90%
    }
    ```
    
    Each frame, x gets 10% closer to its target.
    
    Modify this code to create a circle that follows the mouse as in the anigif above.



#### Working with Loops

Here's one way of working with loops, and figuring out how to turn a pattern into code:

1. Write down the coordinates of the shapes you want to create in your loop.
2. Find the pattern for those coordinates
  a. Where does it start?
  b. Where does it end?
  c. How much does it change each time?
3. Use that pattern in a for loop: `for (var i = START; i < END; i = i + CHANGE) { ... }`
  
For example, to create the following sketch:

![triangle of lines](img/triangle.png)

...start by writing down some endpoints for those lines:

```
(20, 20) -> (20, 20)
(20, 30) -> (30, 20)
(20, 40) -> (40, 20)
(20, 50) -> (50, 20)
(20, 60) -> (60, 20)
(20, 70) -> (70, 20)
(20, 80) -> (80, 20)
.
.
.
(20, 480) -> (480, 20)
```

...from these coordinates, we can find a pattern for each of the four parameters we need to draw a line:

- `startX`: always 20
- `startY`: starts at 20, ends at 480, goes up by 10 each time
- `endX`: starts at 20, ends at 480, goes up by 10 each time
- `endY`: always 20

...from this pattern, we can generate a loop that draws these lines, by creating a variable that starts at `20`, ends at `480`, and goes up by `10` each time. We won't call the variable `x` or `y` beacuse we don't use it exclusively for either coordinate.

```javascript
for (var i = 20; i <= 480; i = i + 10) {
  var startX = 20;
  var startY = i;
  var endX = i;
  var endY = 20;
  line(startX, startY, endX, endY);
}
```

[Homework for Week 4](hw/week4.md)

### Week 5: Wednesday, October 4, 2017

#### Homework Review

Loops! And share your Sol LeWitt pieces.

#### Objects & Functions Workshop

Objects are collections of properties. They can help to keep related variables together. For example:

```javascript
var circle = {
  x: 100, 
  y: 100,
  vx: 3,
  vy: 4,
  r: 10
};

var circle2 = {
  x: 120, 
  y: 160,
  vx: 3,
  vy: 4,
  r: 10
};


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  paint(circle);
  paint(circle2);
  
  move(circle);
  move(circle2);
  
  bounce(circle);
  bounce(circle2);
}

function paint(circle) {
  ellipse(circle.x, circle.y, circle.r*2, circle.r*2);
}

function move(circle) {
  circle.x += circle.vx; // circle.x = circle.x + circle.vx
  circle.y += circle.vy;
}

function bounce(circle) {
  if (circle.x > width || circle.x < 0) {
    circle.vx = - circle.vx;
  }
  if (circle.y > height || circle.y < 0) {
    circle.vy = - circle.vy;
  }
}

```

This code creates two objects: `circle` and `circle2`. Each of the `paint`, `move`, and `bounce` functions is defined to act on a single obejct; calling `paint(circle)` makes the function act on the first `circle` object, while calling `paint(circle2)` makes the function act on the second `circle2` object.

"Act on" means that the `circle` variable inside the function actually refers to one of the `circle` or `circle2` objects defined at the top of the code. Which one it refers to depends on whether it was called with `circle` or `circle2` as the parameter.

**Exercise 1**: Add a third circle object.

**Exercise 2**: Add a property to each circle that holds a color.

**Exercise 2a**: Use that property in the `paint` function to draw each circle using its color property.

Next, modify the initial locations -- the `x` and `y` properties of `circle` and `circle2` so both circles start at the bottom of the canvas:

```javascript
var circle = {
  x: 100, 
  y: 400,
  vx: 0,
  vy: -4,
  r: 10
};

var circle2 = {
  x: 160, 
  y: 400,
  vx: 0,
  vy: -4,
  r: 10
};
```

**Exercise 3**: Modify the `bounce` function so that, instead of bouncing, the two circles each reset to the bottom of the canvas when they reach the top.

**Exercise 4**: Modify the `move` function so that the circles (now bubbles!) vibrate in the `x` direction each frame.

**Exercise 5**: Add some interactivity -- use the `keyPressed` function to make the up (and down) arrow keys increase (and decrease) the rate at which the bubbles rise.
