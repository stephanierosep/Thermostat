'use strict';

  function Thermostat() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.isPowerSavingMode = true;
    this.PSM_MAX_TEMPERATURE = 25;
    this.MAX_TEMPERATURE = 32;
  }

  Thermostat.prototype.getCurrentTemperature = function() {
    return this.temperature;
  };

  Thermostat.prototype.up = function() {
    if(this.MaximumTemperature() === this.temperature) {
      return;
    }
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
  Thermostat.prototype.MaximumTemperature = function() {
    if(this.isPowerSavingModeOn()) {
      return this.PSM_MAX_TEMPERATURE;
    }
    return this.MAX_TEMPERATURE;
  }
