const ENVIRONMENT = require('./environment');

var env = new ENVIRONMENT(2, 3, 0, 5, 7);

// console.log(env.test());

// Light
console.log('Light:', 'raw value (' + env.light.raw_value() + '), which is roughly (' + env.light.value() + ') lux');

// Temperature & Humidity
console.log('Temperature:', env.th02.getTemperature(), 'celcius');
console.log('Humidity:', env.th02.getHumidity(), '%');

// UV
console.log('UV:', env.uv.volts(), 'volts, ', env.uv.intensity(), 'mW/m^2');
