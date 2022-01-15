const ewelink = require('ewelink-api')
const jsonfile = require('jsonfile')
const express = require('express')

const config = jsonfile.readFileSync('config.json')

function ewlConnect() {
	return new ewelink({
		email: config.email,
		password: config.password,
		region: config.region
	})
}

const app = express()

app.listen(config.port, config.hostname, () => {
	console.log("started server on port %d", config.port)
})

app.post('/setPowerState/:enabled', function (req, res) {
	newState = req.params.enabled == 'on' ? 'on' : 'off'
	ewlConnect().setDevicePowerState(config.deviceid, newState)
	res.send("success")
})
