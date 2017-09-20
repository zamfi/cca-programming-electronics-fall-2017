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

Together, we'll experiment with a few sketches to practice variables:

- [A Single Ellipse](http://p5js.zamfi.net/jd/sketches/SkPx0nSPx)
  - Working with a partner, modify this sketch to create an ellipse that extends past the edges of the canvas.
- [Random Dots](http://p5js.zamfi.net/full/HJ6LyTBPx)
  - Working with a partner, modify this sketch to give each ellipse:
     1. A random size.
     2. A random color. (Use HSB for nicer colors!)
- [Color and HSB](http://p5js.zamfi.net/full/ByanCnHPx)
  - Working with a partner, modify this sketch so that it continuously changes color instead of stopping at red.
- Class Quilt!
    - Working with a partner, make two patches for the class quilt! Start with the following code:
    ```javascript
    function yourQuilt(x, y) {
      noFill();
      stroke(238);
      rect(x, y, 100, 100);
      
      // your code here!
    }
    
    background(255);
    
    yourQuilt((width-100)/2, (height-100)/2);
    ```
    
    Modify the `yourQuilt` function, replacing `// your code here!` with drawing commands that draw inside the 100-by-100 pixel square. Use `x` and `y` to get yourself started -- all your shapes should appear within the rectangle bounded to the left by `x`, above by `y`, to the right by `x+100` and below by `y+100`. 
    
    We'll then take all our functions and pattern them together into a quilt! Making your functions depend on `x` and `y` means that we can place them anywhere in the quilt by "passing in" the appropriate `x` and `y` coordinates for that place in the quilt.
    
    Feel free to remove the border rectangle when you're done!
    
    Here's a (pretty complicated) example that I came up with for myself:
    
    ```javascript
    function jdQuilt(x, y) {
      noFill();
      stroke(238);
      rect(x, y, 100, 100);
      
      fill(238);
      noStroke();
      rect(x+20, y+20, 60, 20);
      rect(x+40, y+40, 20, 40);
      rect(x+20, y+60, 40, 20);
      
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