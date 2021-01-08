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

var win = avgJ > avgM

if(avgJ > avgM && avgJ > avgMa)
{
    console.log("Winner is : John's team")
}
else if(avgM > avgJ && avgM > avgMa)
{
    console.log("Winner is : Mike's team")
}
else if(avgMa > avgM && avgMa > avgJ)
{
    console.log("Winner is : Mary's team")
}
else if(avgMa == avgM == avgJ)
{
    console.log("All are winners")
}
else if(avgMa == avgM)
{
    console.log("Winners are : teams of Mary and Mike")
}else if(avgM == avgJ)
{
    console.log("Winners are : teams of John and Mike")
}
else if(avgMa == avgJ)
{
    console.log("Winners are : teams of Mary and John")
}