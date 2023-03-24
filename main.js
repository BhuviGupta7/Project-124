function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550);
    video.position(200, 150);

    canvas = createCanvas(550, 550);
    canvas.position(900, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded()
{
    console.log('PoseNet Is Intialized')
}

function draw() {
    background('#E6E6FA');
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
