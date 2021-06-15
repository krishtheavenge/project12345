status="";
objects=[];

function back(){
    window.location="hi.html";
}

function preload(){
    
   fruit = loadImage("TV.jpg");
  
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(500,250);
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";

}

function modelLoaded(){
    console.log("Model has been loaded.");
    status=true;
  objectDetector.detect(fruit,gotresult);
}

function gotresult(error,result){

if(error){
    console.log(error);
}
else{
    console.log(result);
    objects=result;
}

}

function draw(){

    image(fruit,0,0,600,500);
    console.log("image loaded");

        if(status != ""){
            for(i=0; i<objects.length; i++){
                 fill("red");
                    percent = floor(objects[i].confidence*100);
                    text(objects[i].label+" " + percent+"%", objects[i].x, objects[i].y);
                    noFill();
                    stroke("teal");
                    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
                    
                } 
                   
        } 
}