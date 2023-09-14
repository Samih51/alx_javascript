function createClassRoom(numbersOfStudents){
    function studentSeat(seat){
        return function(){
            return seat;
        }
    }
    let students=[];
    for(let i=0;i<=numbersOfStudents;i++){
        students[i]=i;
    }
    return students;

}
const classRoom = createClassRoom(10);
console.log(classRoom[0]());