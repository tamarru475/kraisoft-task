import "./index.css";

const dragItem = document.querySelector('.block__child');
const container = document.querySelector('.block');

var initialX, initialY, xOffset = 0, yOffset = 0;

const handleMouseDown = (e) => {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
}

const handleMouseMove = (e) => {

    e = e || window.event;
    e.preventDefault();

    const currentX = e.clientX - initialX;
    const currentY = e.clientY - initialY;


    xOffset = currentX;
    yOffset = currentY;

    if (currentY < 0 || currentY > (container.clientHeight - 100) || currentX < 0 || currentX > (container.clientWidth - 100)) {
        return;
    } else {
        dragItem.style.left = currentX + "px";
        dragItem.style.top = currentY + "px";
    }

}

const handleMouseUp = () => {

    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
}

dragItem.addEventListener('mousedown', handleMouseDown);

