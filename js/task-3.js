const profile = {
    username: "Jacob",
    playTime: 300,
    getInfo() {
      `${profile.username}  has ${profil.playTime}  active hours!`;
    },
};
profile.getInfo();
console.log(profile.getInfo());
const newusername = "Marco";

     profile.changeUsername(){
    profile.username = "Marco";
};
console.log(profile.changeUsername());
const newplayTime = 20;  
profile.pdateplayTime(){
     playTime + newplayTime;
};  
console.log(profile.pdateplayTime());




console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"