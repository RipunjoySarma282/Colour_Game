var numsquares=6;
var colors=generatecolor(numsquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordis=document.getElementById("colordisplay");
var messagedisplay=document.getElementById("message")
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function()
{
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numsquares=3;
    colors=generatecolor(numsquares);
    pickedcolor=pickcolor();
    colordis.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++)
        {
            if(colors[i])
                {
                    squares[i].style.background=colors[i];
                }
            else    
                {
                    squares[i].style.display="none";
                }
        }
    h1.style.background="steelblue";
}
)

hardbtn.addEventListener("click",function()
{
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numsquares=6;
    colors=generatecolor(numsquares);
    pickedcolor=pickcolor();
    colordis.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++)
        {
            squares[i].style.background=colors[i];
            squares[i].style.display="block";
        }
    h1.style.background="steelblue";
}
)

reset.addEventListener("click",function()
{
    //generate all mew colors
    colors=generatecolor(numsquares);
    //pick a new random color from array
    pickedcolor=pickcolor();
    //change colordis to match picked color
    colordis.textContent=pickedcolor;
    //change colors of square
    for(var i=0;i<squares.length;i++)
        {
            squares[i].style.background=colors[i];
        }
    messagedisplay.textContent="";
    this.textContent="New Colors";
    // console.log(h1.style.background);
    h1.style.background="steelblue";
}
)

colordis.textContent=pickedcolor; 

for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=colors[i];
        squares[i].addEventListener("click",function()
        
            {
                var selectcolor=this.style.background;
                if(selectcolor===pickedcolor)
                    {
                        messagedisplay.textContent="Correct";
                        changecolor(selectcolor);
                        h1.style.background=selectcolor;
                        reset.textContent="PLay Again?";
                        // console.log(h1.style.background);
                    }
                if(selectcolor!==pickedcolor)
                    {
                        this.style.background="#232323";
                        messagedisplay.textContent="Try Again";
                    }
            }
        )
    }


function changecolor(color)
    {
        for(var i=0;i<squares.length;i++)
            {
                squares[i].style.background=color;
            }
    }

    
function pickcolor()
    {
         var random=Math.floor(Math.random()*colors.length);
         return colors[random];
    }


function generatecolor(num)
{
    //make an array
    //add num random colors to the array
    //return that array
    var arr=[];
    for(var i=0;i<num;i++)
        {
            //get random color and push into arr
            arr.push(randomcolor());
        }
    return arr;
}


function randomcolor()
    {
        // pick a red from 0-255
        // pick a green from 0-255
        // pick a blue from 0-255
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }