// const noOfRooms = 8,
//     noOfAdults = 71,
//     noOfChildren = 5,
//     childrenAgeList = [12, 14, 12, 14, 12];
const noOfRooms = 1,
    noOfAdults = 1,
    noOfChildren = 0;

const childrenAgeList = [];
for(let i = 0; i < noOfChildren; i++){
    childrenAgeList.push(Math.floor(Math.random() * 20));
}
   console.log({childrenAgeList});


function generateRoomDetails({noOfRooms = 1, noOfAdults  = 1, noOfChildren = 0, childrenAgeList = []} = {}){
    const perRoomAdults = Math.floor(noOfAdults / noOfRooms);
    const perRoomChildren = noOfChildren && Math.floor(noOfChildren / noOfRooms);
    
    let remainingAdults = noOfAdults;
    let remainingChildren = noOfChildren;

    const roomDetails = [];
    for(let i = 0; i < noOfRooms; i++){
        roomDetails.push({
            NoOfAdults : perRoomAdults,
            NoOfChild : perRoomChildren,
            ...(perRoomChildren && {childAge: childrenAgeList.splice(0, perRoomChildren)})
        })
        remainingAdults -= perRoomAdults;
        remainingChildren -= perRoomChildren;
    }
    
    const remaining = remainingAdults > remainingChildren ? remainingAdults : remainingChildren;
    
    for(let i = 0; i < remaining; i++){
        if(remainingAdults){
            roomDetails[i].NoOfAdults += 1;
            remainingAdults--;
        }
        if(remainingChildren){
             roomDetails[i].NoOfChild += 1;
            if(roomDetails[i]?.childAge?.length)
            roomDetails[i].childAge.push(childrenAgeList.pop());
            else if(childrenAgeList?.length)
                roomDetails[i].childAge = [childrenAgeList.pop()];
            remainingChildren--;
        }
    }
    return roomDetails;
}

console.log(generateRoomDetails({noOfRooms, noOfAdults, noOfChildren, childrenAgeList}))

