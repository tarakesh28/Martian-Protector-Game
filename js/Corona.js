class Corona{
    constructor(){
        this.x = (random(55,770));
        this.y = (random(120, 370));
        this.size = (random(20, 30));
        this.speedx = (-2, 2);
        this.speedy = (-2, 2);
        this.color = 255;
        this.popped = false;
    }

    display(){
        var di = dist(mouseX, mouseY, this.x, this.y);
        texture(corona);
        ellipse(this.x, this.y, this.size, this.size);
    }
    move(){
        this.x += this.speedx;
        this.y += this.speedy;

        if(this.x+this.size/2 > width || this.x-this.size/2 < 0){
            this.speedx = this.speedx*-1;
        }

        if(this.y+this.size/2 > height || this.y - this.size/2 < 0){
            this.speedy = this.speedy*-1;
        }
    }
}