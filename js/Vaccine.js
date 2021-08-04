class Vaccine{
    constructor(){
        this.x = mouseX;
        this.y = mouseY;
        this.r = 30;
    }

    display(){
        texture(vac);
        rect(this.x, this.y, this.r, this.r);
        
    }
    move(){
        this.x = mouseX;
        this.y = mouseY;

    }
    intersect(b){
        let distance = dist(mouseX, mouseY, b.x, b.y);
        if(distance<this.r){
            return true;
        }
    }
}