class Ball {
    constructor(x, y, radius) {
        this.radius = radius || 20;
        this.x = x || 0;
        this.y = y || 0;
        this.maxY = 880;
        this.gravityY = 3;
        this.gravityX = 2;
        this.followSpeed = 5;
        this.basicDistance = 50;
        this.isMaxDistance = false;
    }

    initPosition(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    drop(subordinatedX, subordinatedY) {
        const width = subordinatedX - this.x;
        const height = subordinatedY - this.y;
        this.isMaxDistance = (width * width) + (height * height) > this.basicDistance * this.basicDistance;

        if(this.y < this.maxY && this.y < subordinatedY + this.basicDistance) {
            this.y = this.y + this.gravityY;
        }
        if(this.y > subordinatedY && this.x < subordinatedX && this.isMaxDistance) {
            this.x = this.x + this.gravityX;
        } else if(this.y > subordinatedY && this.x > subordinatedX && this.isMaxDistance) {
            this.x = this.x - this.gravityX;
        }
    }
    follow(subordinatedX, subordinatedY) {
        const width = subordinatedX - this.x;
        const height = subordinatedY - this.y;
        const isOverDistance = (width * width) + (height * height) > (this.basicDistance + 10) * (this.basicDistance + 10);
        if(this.isMaxDistance && this.x < subordinatedX && this.y < subordinatedY) {
            this.x = this.x + this.followSpeed;
            this.y = this.y + this.followSpeed;
        } else if(this.isMaxDistance && this.x > subordinatedX && this.y < subordinatedY) {
            this.x = this.x - this.followSpeed;
            this.y = this.y + this.followSpeed;
        } else if(isOverDistance && this.y > subordinatedY && this.x <= subordinatedX) {
            this.x = this.x + this.followSpeed;
            this.y = this.y - this.followSpeed;
        } else if(isOverDistance && this.y > subordinatedY && this.x > subordinatedX) {
            this.x = this.x - this.followSpeed;
            this.y = this.y - this.followSpeed;
        }
    }
    setFollowSpeed(subordinatedX, subordinatedY) {
        const width = subordinatedX - this.x;
        const height = subordinatedY - this.y;
        const distance = Math.sqrt((width * width) + (height * height));
        if (distance > 400) {
            this.followSpeed = 12;
        } else if(distance > 300) {
            this.followSpeed = 10;
        } else if(distance > 200) {
            this.followSpeed = 8;
        } else if(distance > 100) {
            this.followSpeed = 6;
        } else if(distance > 50) {
            this.followSpeed = 4;
        }
    }
}
export default Ball;