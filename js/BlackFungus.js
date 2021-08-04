class Blackfungus{
    constructor(){
        this.x = (random(30, 770));
        this.y = (random(30, 370));
        this.size = (random(20, 50));
        this.speedx = (-3, 3);
        this.speedy = (-3, 3);
        this.color = 255;
        this.popped = false;
    }

    display(){
        //let d = dist(mouseX, mouseY, this.x, this.y);
        texture(black);
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