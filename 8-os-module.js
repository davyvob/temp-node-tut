const os = require('os')


const currentOs = {
    currentUser : os.userInfo(),
    type : os.type(),
    uptime : os.uptime(),
    totalmemory : os.totalmem(),
    availablememory : os.freemem(),
    usedmemory : os.totalmem() - os.freemem()
}

console.log(currentOs)