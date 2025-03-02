/*

  © Created by : 
Giddy Tennor (Developer)

  
  WARNING..!!
- Don't recode this script 
- Don't sell or buy this script 

© Copyright 2021 - 2025 

*/
const fs = require('fs')

global.botname = "Hunter V12"
global.version = "12.0.0"
global.owner = "254756182478"
global.footer = "Giddy Tennor"
global.idch = "120363322464215140@newsletter"

//Global Thumb
global.thumb = "https://i.ibb.co/YT82z7W7/0a89c22bce6d5de2.jpg"

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
