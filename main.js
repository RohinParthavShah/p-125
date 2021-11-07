noseX= 0;
noseY= 0;
difference = 0;
leftWristX= 0;
rightWristY= 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);


    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);


}


function draw(){
    background('#FF0000');
    document.getElementById("square_side").innerHTML = "Width and Height Of the Square will be ="  + difference +  "px";
    fill('#FFC0CB');
    stroke('#FFC0CB');
    square(noseX,noseY, difference);
}

function modelLoaded(){
    console.log("PoseNet is Intialized");
}



function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("  noseX=  " + noseX +"  noseY=  " + noseY);
    
        leftWristX =  results[0].pose.leftWrist.x;
        rightWristX =  results[0].pose.rightWrist.x;
        difference = floor( leftWristX - rightWristX );
        console.log("  leftWristX=  " +  leftWristX +"   rightWristX=  " +  rightWristX + "  difference=  " + difference );
        
    }
   
}
