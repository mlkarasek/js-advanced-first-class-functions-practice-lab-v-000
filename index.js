// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver){
    if(driver.hometown === hometown)
    console.log(driver.name)
  })
}

function driversByRevenue(drivers) {
return drivers.slice().sort(function(h, l) {
  return h.revenue - l.revenue;
})
}

function driversByName(drivers) {
  retun drivers.slice().sort(function(a,b) {
    return a.name.localeCompare(b.name);
  })
}
