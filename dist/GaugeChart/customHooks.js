"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isDeepEquals = (toCompare, reference) => {
  return _lodash.default.isEqual(toCompare, reference);
};

const useDeepCompareMemo = dependencies => {
  const ref = (0, _react.useRef)(null);

  if (isDeepEquals(dependencies, ref.current)) {
    ref.current = dependencies;
  }

  return ref.current;
}; // this function compares deeply new dependencies with old one
// It works like useEffect but we are using isEqual from lodash to compares deeply


const useDeepCompareEffect = (callback, dependencies) => {
  (0, _react.useEffect)(callback, useDeepCompareMemo(dependencies));
};

var _default = useDeepCompareEffect;
exports.default = _default;