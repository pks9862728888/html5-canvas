window.onload = function() {
    var canvas = document.getElementById("demo-canvas");
    var context = canvas.getContext("2d");
    
    // Orange rectangle
    context.fillStyle = "orange";
    context.fillRect(15, 15, 30, 20);
    
    // Blue rectangle
    context.fillStyle = "blue";
    context.fillRect(10,20,30,20);

    // Drawing line
    context.beginPath();  // Clear previous
    context.strokeStyle = "green"
    context.strokeWidth = 10;
    context.moveTo(60, 20);  // Start point
    context.lineTo(30, 50);  // End point
    context.stroke();        // Draw line
}
 