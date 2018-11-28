$( document ).ready(function() {
  var thermostat = new Thermostat;

  function update() {
    $( temperature_display ).html(thermostat.getCurrentTemperature());
      if(thermostat.energyUsage() == "low-usage") {
        newcolor = "green";
      } else if(thermostat.energyUsage() == "medium-usage") {
        newcolor = "black";
      } else {
        newcolor = "red";
      }
    $(temperature_display).css("color", newcolor)
  };
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
