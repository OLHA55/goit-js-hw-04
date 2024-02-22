const profile = {
    username: "Jacob",
    playTime: 300,
    getInfo() {
         return `${this.username} has ${this.playTime} active hours!`
    },
};
 profile.getInfo();
console.log(profile.getInfo());

this.username = "Marco";
profile.changeUsername();

console.log(profile.getInfo());

 this.playTime = this.playTime + 20; 

console.log(profile.getInfo());

 



console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"