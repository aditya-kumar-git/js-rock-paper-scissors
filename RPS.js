var score=0;
function rock()
    {
        console.log("rock");
        gamegame(1);
        randEnemy(1);
    }
function papers()
    {
        console.log("paper");
        gamegame(2);
        randEnemy(2);
    }
function scissors()
    {
        console.log("scissors");
        gamegame(3);
        randEnemy(3);
    }

function gamegame(weapon)
    {
        document.querySelector("#player").src="./weapon-"+weapon+".png";
    }
function randEnemy(player)
    {
        var play=player;
        var temp=Math.floor((Math.random()*3)+1);
        console.log(temp);
        document.querySelector("#enemy").src="./enemy-"+temp+".png";
        if((play==1&&temp==3)||(play==2&&temp==1)||(play==3&&temp==2))
            {
                score++;
                console.log("win");
                document.querySelector("#status").textContent="You Win!";
                document.querySelector("#score").textContent="Your Score is : "+score;
            }
        else if(play==temp)
            {
                console.log("draw");
                document.querySelector("#status").textContent="It's a Draw";
            }
        else
            {
                score--;
                console.log("loose");
                document.querySelector("#status").textContent="You Lose";
                document.querySelector("#score").textContent="Your Score is : "+score;
            }
    }


document.querySelector("#weapon-1").addEventListener("click",rock);
document.querySelector("#weapon-2").addEventListener("click",papers);
document.querySelector("#weapon-3").addEventListener("click",scissors);