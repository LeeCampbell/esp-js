"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var AccountsField = (function () {
    function AccountsField() {
        _classCallCheck(this, AccountsField);

        this._value = [];
    }

    _createClass(AccountsField, {
        value: {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this._value = value;
            }
        }
    });

    return AccountsField;
})();

module.exports = AccountsField;