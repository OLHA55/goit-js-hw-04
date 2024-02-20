const profile = {
    username: "Jacob",
  playTime: 300,
};
username ="Marco";
playTime = 20;

Info(){ return "this.username has this.playTime active hours!"};
getInfo(){"this.username has this.playTime active hours!"};
changeUsername(){return this.username};
getInfo(){return "this(username) has this(playTime) active hours!" };
updatePlayTime(){return this.thisplayTime};
getInfo(){return "this(username) has this(playTime) active hours!" };




console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"