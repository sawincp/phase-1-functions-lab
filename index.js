// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if (blocks >= 42){
        return blocks - 42
    }
    else if(blocks <= 42){
        return 42 - blocks;
    }
    
}
//distanceFromHqInBlocks(43);

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet) *264;
}
//distanceFromHqInFeet(43);

function distanceTravelledInFeet(start, destination){
    if(destination > start){
        return (destination-start)*264;
    }
    else if (start > destination){
        return (start - destination)*264;
    }
    
}
//distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, destination){
    if(distanceTravelledInFeet(start, destination)<= 400){
        return 0;
    }
    else if(distanceTravelledInFeet(start,destination)>400 && distanceTravelledInFeet(start,destination)<2000){
        return (distanceTravelledInFeet(start,destination)-400) * 0.02;
    }
    else if(distanceTravelledInFeet(start, destination)>2000 && distanceTravelledInFeet (start, destination)<2500){
        return 25;
    }
    else if (distanceTravelledInFeet(start, destination)>2500){
        return 'cannot travel that far';
    }
}
calculatesFarePrice(50, 58);