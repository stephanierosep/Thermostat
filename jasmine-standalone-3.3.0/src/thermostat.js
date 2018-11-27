'use strict';

  function Thermostat() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.isPowerSavingMode = true;
  }

  Thermostat.prototype.getCurrentTemperature = function() {
    return this.temperature;
  };

  Thermostat.prototype.up = function() {
    this.temperature += 1;
  };

  Thermostat.prototype.down = function() {
    if(this.isMinimumTemperature()){
      return;
    }
    return this.temperature -= 1;
  }
  Thermostat.prototype.isMinimumTemperature = function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
  Thermostat.prototype.isPowerSavingModeOn = function() {
    return this.isPowerSavingMode === true;
  }
  Thermostat.prototype.switchPowerSavingModeOff = function() {
    this.isPowerSavingMode = false;
  }
  Thermostat.prototype.switchPowerSavingModeOn = function() {
     this.isPowerSavingMode = true;
  }
