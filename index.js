// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers) {
  drivers.forEach(function(driver) {
    if (driver.hometown === hometown)
    console.log(driver.name)
  })
}
