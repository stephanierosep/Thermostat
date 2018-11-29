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

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=44e4c6f0e17fbfef3e2efdcfd3fe4a9c&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })

  $('#current-city').change(function() {
  var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=44e4c6f0e17fbfef3e2efdcfd3fe4a9c&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
    })
  })
});
