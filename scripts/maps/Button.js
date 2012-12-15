define(['Map', 'SUPPORTS'], function (Map, SUPPORTS) {
  var events = (SUPPORTS.touchEvents) ? 'touchstart' : 'click',
    Button;

  events += ' focus';

  Button = new Map({id: 'Button', executeOnEvent: events});

  Button.direct('[data-lu~=\"Button:Select\"]', function () {
    this.settings.action = 'select';
    this.ready(function () {
      console.log('Button Select directive resolved');
    });
  });

  return Button;
});