import Ball from "./ball.js";

(() => {

    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');

    const ball1 = new Ball(350, 200, 20);
    const ball2 = new Ball(350, 250, 20);
    const ball3 = new Ball(350, 300, 20);

    function draw() {
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
        // ball 1
        ctx.beginPath();
        ctx.arc(ball1.x, ball1.y, ball1.radius, 0, radian(360), false);
        ctx.stroke();
        ctx.closePath();

        // // ball 1 distance
        // ctx.beginPath();
        // ctx.arc(ball1.x, ball1.y, 50, 0, radian(360), false);
        // ctx.stroke();

        // ball 1 - ball 2 line
        ctx.beginPath();
        ctx.moveTo(ball1.x, ball1.y);
        ctx.lineTo(ball2.x, ball2.y);
        ctx.stroke();
        ctx.closePath();

        // ball 2
        ctx.beginPath();
        ctx.arc(ball2.x, ball2.y, ball2.radius, 0, radian(360), false);
        ctx.stroke();
        ctx.closePath();
        ball2.drop(ball1.x, ball1.y);
        ball2.follow(ball1.x, ball1.y);
        ball2.setFollowSpeed(ball1.x, ball1.y);

        // ball 3
        ctx.beginPath();
        ctx.arc(ball3.x, ball3.y, ball3.radius, 0, radian(360), false);
        ctx.stroke();
        ctx.closePath();
        ball3.drop(ball2.x, ball2.y);
        ball3.follow(ball2.x, ball2.y);
        ball3.setFollowSpeed(ball2.x, ball2.y);

        // ball 2 - ball 3 line
        ctx.beginPath();
        ctx.moveTo(ball2.x, ball2.y);
        ctx.lineTo(ball3.x, ball3.y);
        ctx.stroke();
        ctx.closePath();

        requestAnimationFrame(draw);
    }

    draw();

    canvas.addEventListener('mousemove', (e) => {
        const clientX = e.clientX;
        const clientY = e.clientY;
        ball1.initPosition(clientX, clientY);
    })
    

    function radian(angle) {
        return angle * Math.PI / 180;
    }
})();