magic_square = [[8, 3, 4],
                [1, 5, 9],
                [6, 7, 2]]
row1=0
row2=0
row3=0
i=0
while (i<magic_square.length){
    // console.log(i)
    j=0
    while (j<magic_square[i].length){
        // console.log(j)
        if(i===0){
            row1+=magic_square[i][j]
        }
        else if(i===1){
            row2+=magic_square[i][j]
        }
        else if(i===2){
            row3+=magic_square[i][j]
        }
        j++
    }
    i++
}
console.log("row1 :",row1)
console.log("row2 :",row2)
console.log("row3 :",row3)
column1=0
column2=0
column3=0
i=0
while (i<magic_square.length){
    j=0
    while (j<magic_square[i].length){
        if(i===0){
            column1+=magic_square[i][j]

        }
        else if(i===1){
            column2+=magic_square[i][j]

        }
        else if(i===2){
            column3+=magic_square[i][j]

        }
        j++
    }
    i++

}

console.log("column1 :",column1)
console.log("column2 :",column2)
console.log("column3 :",column3)

leftdiagonal=0
rightdiagonal=0
i=0
while (i<magic_square.length){
    j=0
    while (j<magic_square[i].length){
        if(i===j){
            leftdiagonal=leftdiagonal+magic_square[i][j]
        }
        if( i+j==(magic_square[i]).length-1){
            rightdiagonal=rightdiagonal+magic_square[i][j]

        }
        j++
    }
    i++

}
console.log("leftdiagonal :",leftdiagonal)
console.log("rightdiagonal :",rightdiagonal)
if (column1==column2==column3==leftdiagonal==rightdiagonal==row1==row2==row3){
    console.log("It as an magic square.")

}
else{
    console.log("It is not an magic square.")

}