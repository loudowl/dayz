'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _momentRange = require('moment-range');

var _momentRange2 = _interopRequireDefault(_momentRange);

var EVENT_COUNTER = 1;

var Event = (function () {
    function Event(attributes) {
        _classCallCheck(this, Event);

        this.attributes = attributes;
        this.isEvent = true;
        this.key = EVENT_COUNTER++;

        if (!this.attributes.range) {
            throw new Error("Must provide range");
        }
    }

    _createClass(Event, [{
        key: 'render',
        value: function render(date, layout) {
            if (this.attributes.render) {
                return this.attributes.render(date, layout);
            } else {
                return this.defaultRenderImplementation(date, layout);
            }
        }
    }, {
        key: 'defaultRenderImplementation',
        value: function defaultRenderImplementation(date, options) {
            return _react2['default'].createElement('div', {}, this.attributes.content || _momentRange2['default'].start.format('MMM DD YYYY'));
        }
    }, {
        key: 'range',
        value: function range() {
            return this.attributes.range.clone();
        }
    }, {
        key: 'isMultiDay',
        value: function isMultiDay() {
            this.attributes.range.end.diff(this.range.start, 'days') > 1;
        }
    }]);

    return Event;
})();

exports['default'] = Event;
module.exports = exports['default'];