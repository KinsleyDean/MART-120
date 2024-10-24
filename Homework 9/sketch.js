function setup() {
    createCanvas(500,600);
  }
  
  function draw() {
    background(120, 45, 78);
    strokeWeight(1)
    fill(128, 103,4)
    rect(70,200,380,350);
    ellipse(260,270,400,450)
    fill(555,250,500)
    rect(210,400,100,100);
    ellipse(260,270,300,390)
    
    fill(128, 103,4)
    ellipse(260,130,250,150)
    
    <!--eyebase-->
    color(RGB)
    fill((255, 255, 255))
    ellipse(190,250,70,40)
    ellipse(330,250,70,40)
    
    <!--eyes/eyebrow-->
    color(RGB)
    fill(0, 128, 0)
    circle(190,250,40);
    circle(330,250,40);
    fill(0,0,0)
    circle(330,250,25);
    circle(190,250,25);
    fill(255,255,255)
    circle(180,245,10);
    circle(180,255,5);
    circle(320,245,10);
    circle(320,255,5);
    fill(128, 103,4)
    ellipse(330,210,70,10)
    ellipse(190,210,70,10)
    
    <!--lips-->
    fill(206,123,142)
    triangle(280, 405, 310, 390, 290, 412)
    triangle(230, 412, 210, 400, 250, 412)
    ellipse(260,410,70,10)
    ellipse(260,405,70,10)
   
    <!--freckles-->
      fill(222,180,126)
      strokeWeight(2)
      point(240,275)
    point(220,295)
      point(190,295)
    point(200,285)
    point(290,295)
    point(330,280)
    point(310,290)
    point(270,315)
    point(280,280)
   
    strokeWeight(1)
    <!--nose-->
    fill(255,228,228)
    triangle(240, 320, 258, 260, 280, 320)
    circle(260,320,40);
    fill(0,0,0)
    ellipse(270,330,5,2)
    ellipse(250,330,5,2)
    
    <!--shirt-->
    fill(50,50,70);
    circle(80,550,100);
    circle(430,550,100);
    rect(80,500,350,100);
    rect(30,550,50,100);
    rect(430,550,50,100);
    
    <!--shirt-->
      strokeWeight(30)
    fill(255,255,255)
      line(180, 620, 180, 515);
    line(100, 620, 100, 515);
    line(260, 620, 260, 515);
    line(340, 620, 340, 515);
    line(410, 620, 410, 515);
    
    textSize(40);
    text('"A Very Sad Portrait"', 70, 40);
    textSize(20);
    text('Kinsley Dean', 350,580)
  }