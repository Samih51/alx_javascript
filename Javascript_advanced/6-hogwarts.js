let privateScore = 0;
let name = null;

function changeScoreBy(points) {
  privateScore += points;
}

module.exports = {
  setName: function (newName) {
    name = newName;
  },

  rewardStudent: function () {
    changeScoreBy(1);
  },

  penalizeStudent: function () {
    changeScoreBy(-1);
  },

  getScore: function () {
    return privateScore;
  },
};


const studentHogwarts = require('./6-hogwarts.js'); 

const harry = Object.create(studentHogwarts);
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log("Harry: "+harry.getScore()); 


const draco = Object.create(studentHogwarts);
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log("Draco: "+draco.getScore()); 