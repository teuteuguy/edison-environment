// Libraries
const groveSENSOR = require('jsupm_grove');
const groveTH02 = require('jsupm_th02');
const groveLCD = require('jsupm_jhd1313m1');
const groveUV = require('jsupm_guvas12d');
const groveMOTION = require('jsupm_biss0001');
// const groveENCODER = require("jsupm_rotaryencoder");

function environment(lightSensorAnalogPort, uvSensorAnalogPort, buttonDigitalPin, relayDigitalPin, motionDigitalPin) {

    // i2c sensors
    // Temperature & Humidity
    this.th02 = new groveTH02.TH02();
    // LCD
    this.lcd = new groveLCD.Jhd1313m1(0, 0x3E, 0x62);

    // Analog sensors
    // Light
    this.light = new groveSENSOR.GroveLight(lightSensorAnalogPort); // var light = new groveSENSOR.GroveLight(2);
    // UV
    this.uv = new groveUV.GUVAS12D(uvSensorAnalogPort); // var guvas12d = new groveUV.GUVAS12D(3);

    // Digital sensors
    // Button
    this.button = new groveSENSOR.GroveButton(buttonDigitalPin);
    // Relay
    this.relay = new groveSENSOR.GroveRelay(relayDigitalPin);
    // Motion
    this.motion = new groveMOTION.BISS0001(motionDigitalPin);

    this.test = function() {
        // Light
        console.log('Light:', 'raw value (' + this.light.raw_value() + '), which is roughly (' + this.light.value() + ') lux');

        // Temperature & Humidity
        console.log('Temperature:', this.th02.getTemperature(), 'celcius');
        console.log('Humidity:', this.th02.getHumidity(), '%');

        // UV
        console.log('UV:', this.uv.volts(), 'volts, ', this.uv.intensity(), 'mW/m^2');
        return 'Test result';
    };

};

module.exports = environment;

// // Temperature sensor
// const th02 = new groveTH02.TH02();

// // Light sensor
// const light = new groveSENSOR.GroveLight(2);

// // UV sensor
// const guvas12d = new groveUV.GUVAS12D(3);

// // Motion sensor
// const biss0001 = new groveMOTION.BISS0001(7);

// // Relay
// const relay = new groveSENSOR.GroveRelay(5);

// // Encoder sensor
// const myRotaryEncoder = new groveENCODER.RotaryEncoder(2, 3);

// Button
// const button = new groveSENSOR.GroveButton(0);


//////////////////////////////////////////////
// console.log(biss0001);
// setInterval(function() {
// 	console.log('BISS0001: ', biss0001.value(), biss0001.motionDetected());
// }, 1);

// setInterval(function() {
// 	console.log("Encoder position: " + myRotaryEncoder.position());
// }, 100);

// setInterval(function() {
//     console.log('Encoder position:', relay.name());
//     if (relay.isOn()) relay.off();
//     else relay.on();
// }, 2000);


// // Read the input and print both the raw value and a rough lux value,
// // waiting one second between readings
// function readLightSensorValue() {
//     console.log(light.name() + " raw value is " + light.raw_value() +
//             ", which is roughly " + light.value() + " lux");
// }
// setInterval(readLightSensorValue, 1000);

// // Light
// console.log('Light:', 'raw value (' + light.raw_value() + '), which is roughly (' + light.value() + ') lux');

// // Temperature & Humidity
// console.log('Temperature:', th02.getTemperature(), 'celcius');
// console.log('Humidity:', th02.getHumidity(), '%');

// // UV
// console.log('UV:', guvas12d.volts(), 'volts, ', guvas12d.intensity(), 'mW/m^2');
