let  readlineSync  =  require('readline-sync');

function introToHider(){
  console.log(`\n${name}, as the Hider, you must vow to never be discovered.`);
  console.log( "The Seeker will try to find you. Once found, they will try to destroy you.");
  console.log("You are weaker than the Seeker. But you are the stronger runner and hider.\n");
  placeholder=readlineSync.question("..Don't be afraid\n\nPress the 'enter' button to continue...");
  console.log("\nPick the location you will hide in:\n");
}

function introToSeeker(){
  console.log(`\n${name}, as the Seeker, you must vow to discover the Hider.`);
  console.log( "The Hider will try to hide from you.");
  console.log("Once you find the Hider, you must destroy them.");
  console.log("If they decide to run, they will suceed.");
  console.log("You are stronger than the Hider. But they are stronger at running and hiding.\n");
  placeholder=readlineSync.question("Seek and destroy!!\n\nPress the 'enter' button to continue...");
  console.log("\nPick the location they must be hiding:\n");
}


function locationMenu(){
  let playerlocationChoice=false;
  while(playerlocationChoice==false){
    console.log("Select 0 for: USA");
    console.log("Select 1 for: Italy");
    console.log("Select 2 for: France");
    console.log("Select 3 for: Japan");
    console.log("Select 4 for: Germany");
    console.log("Select 5 for: Brazil");
    console.log("Select 6 for: Canada");
    console.log("Select 7 for: China");
    console.log("Select 8 for: Australia");
    playerlocationChoice=readlineSync.question("Select 9 for: Iceland\n");

    if(playerlocationChoice>=0 && playerlocationChoice<=9){
        return playerlocationChoice;
    } else{
      console.log("\nYou didn't appropriately select a country!");
      console.log("Pick again!\n");
      playerlocationChoice=false;
    }
  }

}

function makeRandom(){

  return Math.floor(Math.random()*10);
}

function locationsForPcSeeker(array){
let choice1, choice2, choice3, choice4;

  choice1=makeRandom();
  choice2=makeRandom();
  choice3=makeRandom();
  choice4=makeRandom();

      if (checkForDuplicateSeeker(choice1,choice2, choice3, choice4)=== null){
          return locationsForPcSeeker(arrayOfCountries);
        } else {
          return[choice1, choice2, choice3, choice4];
        }

    }

  function checkForDuplicateSeeker(one, two, three, four){

    if(one===two || one===three || one===four || two===three || two===four || three===four){
      return null;
    }

  }


  function whoWonIfPcSeeker(playerChoice, pc1, pc2, pc3, pc4) {
    let pointForSeeker =1;

    if((playerChoice ==pc1) || (playerChoice==pc2) || (playerChoice==pc3) || (playerChoice==pc4)) {
      console.log("The Seeker found you!!!");
      return pointForSeeker;

  } else{
    console.log("The Seeker never found you. You survived!");

  }

}

    function locationsForPcHider(array){
      let choice =Math.floor(Math.random()*10);

            return choice;
    }

      function runOrFight(){
        let pcRunOrFight =Math.floor(Math.random()*2);
        return pcRunOrFight;
      }


///Where the program actually begins
//declaring of the variables
let name;
let typeOfplayer;
let playerlocationChoice;
let arrayOfCountries = ['USA', 'Italy', 'France', 'Japan', 'Germany', 'Brazil', 'Canada', 'China', 'Australia','Iceland'];
let placeholder;
let chances;




//The welcoming
console.log( "Welcome to Hider or Seeker!\n" );
name=readlineSync.question("What is thy name? ");



//The decisions of player
typeOfplayer=readlineSync.question(`Welcome ${name}, are you the Hider or the Seeker? `);
typeOfplayer=typeOfplayer.toLowerCase();

if(typeOfplayer=="both"){
  console.log("You were suppose to choose a side!! Start the game over again");
  return null;
} else if(!(typeOfplayer=="hider" || typeOfplayer=="the hider"|| typeOfplayer=="seeker" || typeOfplayer=="the seeker")){
  console.log("Invalid input. Start the game over again");
  return null;
} else if(typeOfplayer=="hider"|| typeOfplayer=="the hider"){

      introToHider();
      playerlocationChoice=locationMenu();
      let locationPc=locationsForPcSeeker(arrayOfCountries);
      let locationPc1=locationPc[0];
      let locationPc2=locationPc[1];
      let locationPc3=locationPc[2];
      let locationPc4=locationPc[3];
      console.log("The Seeker will run out of resources if they don't find you within 4 countries.");
      placeholder=readlineSync.question("Let's see if they found you:\n\nPress the 'enter' button to continue....\n");
      let pointForSeeker=whoWonIfPcSeeker(playerlocationChoice,locationPc1, locationPc2, locationPc3, locationPc4 );
      console.log(`\nYou chosen ${arrayOfCountries[playerlocationChoice]}.`);
      console.log(`The Seeker looked in ${arrayOfCountries[locationPc1]}, ${arrayOfCountries[locationPc2]}, ${arrayOfCountries[locationPc3]}, ${arrayOfCountries[locationPc4]}.`);
      if(pointForSeeker==1){
        console.log("\nI found you Hider!");
        console.log("Are you gonna run like a coward! or Fight?");
        let answer=readlineSync.question("Select 1 to run. Select 2 to fight:  ");
        if(answer==1){
          console.log("Congratuations! You lived another day");
        } else if(answer==2) {
          placeholder=readlineSync.question("\nGet ready to fight!\n\nPress the 'enter' button to continue....\n");
          console.log("That was not smart of you...");
          console.log("Your not strong enough to win the fight");
          console.log("You broke your vow to never be discovered and got distroyed.");
        }else{
          console.log("\nSince you decided to choose neither one or two");
          console.log("I will choose for you!");
          console.log("\nGet ready to fight!\n");
          console.log("That was not smart of you...");
          console.log("Your not strong enough to win the fight");
          console.log("You broke your vow to never be discovered and got distroyed.");

        }

      }


} else{
    introToSeeker();
    let locationPcHider=locationsForPcHider(arrayOfCountries);
    console.log("You will run out of resources if you don't find the hider within 4 countries.\n");
    console.log("Make your guess count!!\n");
    for(let i=1; i<5; i++){
      playerlocationChoice=locationMenu();
      if (playerlocationChoice==locationPcHider) {
        console.log(`You chosen ${arrayOfCountries[playerlocationChoice]}\n`);
        console.log("You found the Hider!!");
        console.log(`The Hider was actually hiding in ${arrayOfCountries[locationPcHider]}`);
        let pcRunOrFight=runOrFight();
        placeholder=readlineSync.question("Will the Hider choose to run or fight??\nPress the 'enter' button to continue....\n");
          if(pcRunOrFight==0){
            console.log("Better luck next time.The Hider ran. Great job finding the Hider though")
          } else{
            console.log("The Hider decided to fight!\n");
            console.log("That was not smart of the Hider!");
            console.log("You destroyed the Hider!");
            console.log("You are a worthy Seeker!");
          }
          break;

        }
        if (i !=4) {
        console.log(`You chosen ${arrayOfCountries[playerlocationChoice]}\n`);
        console.log("You didn't find the Hider. Look again:");
        chances= 4-i;
        console.log(`You have ${chances} more left\n`);
      }
      if(i==4){
        console.log(`You chosen ${arrayOfCountries[playerlocationChoice]}\n`);

      }

    }
    if(playerlocationChoice != locationPcHider){
      console.log("You ran out of resources and didn't disover the Hider.");
      console.log(`The Hider was actually hiding in ${arrayOfCountries[locationPcHider]}\n`);
      console.log(`${name}, you broke your vow.`);
      console.log("You lost and lost the right to call yourself The Seeker.");
    }

  }
