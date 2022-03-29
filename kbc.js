console.log("welcome","🙏🙏")
console.log("lest play kon banega crorpati (KBC)")
console.log("😻😻","😻😻","😻😻","😻😻","😻😻")
question_list = [
    "1 How many continents are there?",             
    "2 What is the capital of India?",            
    "3 NG mei kaun se course padhaya jaata hai?"    ]
options_list = [
    ["Four", "Nine", "Seven", "Eight"],
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]
ans=["3 Seven","4 Eight","4 Delhi","3 Chennai","1 Software Engineering","2 Counseling"]
solution_list = [3, 4, 1]
i=0
a=0
b=1
count=0
while(i<question_list.length){
    console.log(question_list[i])
    // i++
    j=0
    c=1
    while(j<=options_list.length){
        console.log(options_list[i][j])
        j++
    
    }
    let readlineSync=require("readline-sync")
    var life_line=readlineSync.question("yes or no  ")
    if (life_line=="yes"){
        if (count==0){
            console.log(ans[i+a])
            console.log(ans[i+b])
            console.log("😉😉")
            var answer=readlineSync.question("enter your answer ")
            if (solution_list[i]==answer){
                console.log("right")
                console.log("😍😍","✅","😍😍")
                console.log("congrects")
                console.log("play forword","🎮🎮")
                count+=1
            }
            else{
                console.log("wrong","🙀🙀")
                console.log("😧😧")
                console.log("game over","😵😵")
                break
            }   
        }
        else{
            console.log("you don't have life line ")
            console.log("you already used your life line","◀")
            var a=readlineSync.question("enter answer ")
            if (solution_list[i]==a){
                console.log("right")
            }
            else{
                console.log("wrong","🙀🙀")
                console.log("game over","😵😵")
                console.log("😧😧")
                break
            }
        }
    

    }
    else if(life_line=="no"){
        console.log("👆👆")
        var user=readlineSync.question("chose answer from obave options ")
        if (solution_list[i]==user){
            console.log("right")
            console.log("😍😍")
            console.log("you win you got 10,000 rupees")
            console.log("😉😉")
        }
        else{
            console.log("wrong")
            console.log("😫😫")
            console.log("🙀🙀")
            break
        }

    }
    else{
        console.log("wrong","😫😫")
        console.log("🥴🥴")
        console.log("game over","🤦🏻","🤦🏻","🤦🏻")
        console.log("😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭")
        break
    
    }
    a+=1
    b+=1
    i++
}
