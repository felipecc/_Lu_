define('Tabpanel', function () {
  /**
   * Provides a mechanism for selecting
   * the tab content that is to be rendered to the user.
   * @class Tabpanel
   * @extends {Section}
   */
  var Tabpanel,
  /**
   * @type {Widget}
   */
  Widget = require('Section');

  Tabpanel = Widget.extend(function (base) {
    /**
     * An map of defaults for instances of Tabpanel
     * @type {Object}
     */
    var defaults = {};

    return {
      /**
       * Constructs Tabpanel
       * @param {jQuery} $element A jQuery collection.
       * @param {Object} settings @optional A settings object.
       * @constructor
       */
      init: function ($element, settings) {
        settings = settings || {};
        _.defaults(settings, defaults);
        base.init.call(this, $element, settings);
      }
    };
  });

  return Tabpanel;
});