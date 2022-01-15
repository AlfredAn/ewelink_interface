const ewelink = require('ewelink-api')
const jsonfile = require('jsonfile')

config = jsonfile.readFileSync('config.json')

const connection = new ewelink({
  email: config.email,
  password: config.password,
  region: config.region
})

function main() {
  command = process.argv[2]
  if (command == "off") {
    connection.setDevicePowerState(config.deviceid, "off")
  } else if (command == "on") {
    connection.setDevicePowerState(config.deviceid, "on")
  }
}

main()
