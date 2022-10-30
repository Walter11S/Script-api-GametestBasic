import { world, system } from "@minecraft/server"
import { ActionFormData } from "@minecraft/server-ui"

system.events.beforeWatchdogTerminate.subscribe(data
  => { 
    data.cancel = true;
)};

function onPlayerDeath() {
  let players = world.getPlayers();
  for(let player of players) {
    let playerHealt = player.getComponent("minecraft:healt").current;
    let isDeath = player.hatTag("death");
    if(playerHealt == 0 && isDeath == false)
    player.runCommand(`say hello`);
    //here goes the command
  }else if(playerHealt > 0) {
    player.removeTag("death");
   }
  }
}