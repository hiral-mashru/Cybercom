var teamJ1 = 89
var teamJ2 = 120
var teamJ3 = 103

var teamM1 = 116
var teamM2 = 94
var teamM3 = 123

var teamMa1 = 97
var teamMa2 = 134
var teamMa3 = 107

var avgJ = (teamJ1 + teamJ2 + teamJ3) / 3
print("Average score of John's team is",avgJ)

var avgM = (teamM1 + teamM2 + teamM3) / 3
print("Average score of Mike's team is",avgM)

var avgMa = (teamMa1 + teamMa2 + teamMa3) / 3
print("Average score of Mary's team is",avgMa)
var a=1
var b=1
var win = avgJ > avgM
if(win==true){
    console.log("Winner is : John's team")
} else if(avgJ && avgM){
    console.log("Both are winner")
} else {
    console.log("Winner is : Mike's team")
}