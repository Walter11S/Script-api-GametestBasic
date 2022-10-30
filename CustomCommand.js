import { world, system, player } from "@minecraft/server"

let prefix = '!';
//prefix for chat

world.events.beforeChat.subscribe((e) => {
  let msg = e.message;
  
  if (msg.startsWith(prefix)) {
    let args = msg.slice(1).split(" ");
    let cmd = args.shift().toLowerCase();

    if (cmd == "apple") {
      //here goes the word
      e.cancel = true;
      commands.run(`give @s apple`, World
      //here goes the command
      .getDimension("overworld"))
      
    }
  }
});

