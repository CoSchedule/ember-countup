import Controller from '@ember/controller';

export default Controller.extend({

  customEasing: function (t, b, c, d) {
    var ts = (t /= d) * t;
    var tc = ts * t;
    return b + c * (tc * ts + -5 * ts * ts + 10 * tc + -10 * ts + 5 * t);
  },

  // see https://github.com/inorganik/countUp.js/blob/1.7.1/countUp.js#L52
  customFormatting: function(nStr) {
    return nStr;
  }

});
