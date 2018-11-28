$( document ).ready(function() {
  var thermostat = new Thermostat;

  function update() {
    $( temperature_display ).html(thermostat.getCurrentTemperature());
    $( temperature_display ).attr("class", thermostat.energyUsage());
  }
  update();

  $( raise ).click(function() {
    thermostat.up();
    update();
  });

  $( lower ).click(function() {
    thermostat.down();
    update();
  });

  $( reset ).click(function() {
    thermostat.resetTemperature();
    update();
  });

  $( psm_on ).click(function() {
    thermostat.switchPowerSavingModeOn();
    update();
  });

  $( psm_off ).click(function() {
    thermostat.switchPowerSavingModeOff();
    update();
  });
});
