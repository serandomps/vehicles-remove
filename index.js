var dust = require('dust')();
var serand = require('serand');
var utils = require('utils');
var Vehicle = require('vehicles-service');

dust.loadSource(dust.compile(require('./template'), 'vehicles-remove'));

module.exports = function (sandbox, fn, options) {
    console.log('-----------1')
    dust.render('vehicles-remove', {}, function (err, out) {
        if (err) {
            console.log(err)
        }
        var el = sandbox.append(out);
        console.log(out)
        $('.remove', el).on('click', function () {
            Vehicle.remove(options.id, function () {

            })
        })
        fn(false, serand.none);
    });
};
