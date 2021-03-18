function findMatching (drivers,name) {
    // let lowerCase_Drivers = drivers.map (d => d.toLowerCase())
    // let clean = lowerCase_Drivers.filter( n => { return n === `${name}`})
    let clean = drivers.filter( n => { if  (n === `${name[0].toUpperCase() + name.substr(1)}` && n === `${name}`) {return n}  })
    return clean
}

function fuzzyMatch (drivers,name) {
    let clean = drivers.filter( n => { if (n === `${name[0]}` && n+1 === `${name[1]}`) {return n}  })
    return clean
}

function matchName (drivers,crit){
    let bin = []
    for (i = 0; i < drivers.length; i++){
        if (drivers[i].name === crit){
            bin.push(crit)
        }
        return bin 
    }

}