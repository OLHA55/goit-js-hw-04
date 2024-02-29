const profile = {
    username : "Jacob",
    playTime : 300,
    getInfo() {
         return `${this.username} has ${this.playTime} active hours!`
    },
};
profile.getInfo();
  
profile.changeName = "Marco";

console.log(profile.changeName);






    
this.playTime1 = 20;
this.playTime2 = this.playTime + this.playTime1;

profile.getInfo();


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"