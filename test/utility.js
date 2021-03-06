(function () {
    var _ = typeof require == 'function' ? require('..') : window._;
    var templateSettings;

    QUnit.module('utility', {

        beforeEach: function () {
            templateSettings = _.clone(_.templateSettings);
        },

        afterEach: function () {
            _.templateSettings = templateSettings;
        }
    });

    QUnit.test('获取随机数：getRandom', function (assert) {
        var array = _.range(1000);
        var min = Math.pow(2, 31);
        var max = Math.pow(2, 62);
        assert.ok(_.every(array, function () {
            return _.getRandom(min, max) >= min;
        }), '是否应该产生一个大于或等于最小值的随机数');

        assert.ok(_.some(array, function () {
            return _.getRandom(Number.MAX_VALUE) > 0;
        }), '当传递“Number.MAX_VALUE”时，应该生成一个随机数');
    });

    QUnit.test('字节格式化：formatBytes', function (assert) {
        assert.ok(_.formatBytes(1024) == '1 KB', '1KB转换正确');
        assert.ok(_.formatBytes('1024') == '1 KB', '1KB转换正确');
        assert.ok(_.formatBytes(1234) == '1.21 KB', '1.21KB转换正确');
        assert.ok(_.formatBytes(1234, 3) == '1.205 KB', '1.205KB转换正确');
    });
}());
