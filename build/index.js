/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************!*\
  !*** ./index.caf ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, global) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 3);
Caf.defMod(module, () => {
  let Object = global.Object,
    console = global.console,
    Error = global.Error,
    assert,
    fooValue,
    barValue,
    MyBaseClass,
    MyDerivedClass,
    defaultValue,
    structuring,
    foo,
    bar;
  global.caffeineScriptCompatible = false;
  assert = function(isTrue, message) {
    return !isTrue
      ? (() => {
          throw new Error(message != null ? message : "expecting true");
        })()
      : undefined;
  };
  assert.equal = function(a, b, message) {
    return !(a === b)
      ? (() => {
          throw new Error(
            message != null
              ? message
              : `expecting a(${Caf.toString(a)}) == b(${Caf.toString(b)})`
          );
        })()
      : undefined;
  };
  fooValue = 123;
  barValue = 456;
  MyBaseClass = Caf.defClass(
    class MyBaseClass extends Object {
      constructor() {
        super(...arguments);
        this.foo = fooValue;
      }
    }
  );
  MyDerivedClass = Caf.defClass(
    class MyDerivedClass extends MyBaseClass {
      constructor() {
        super(...arguments);
        this.bar = barValue;
      }
    },
    function(MyDerivedClass, classSuper, instanceSuper) {
      this.foo = fooValue;
      this.bar = barValue;
    }
  );
  assert.equal(MyDerivedClass.name, "MyDerivedClass");
  assert.equal(
    Object.keys(MyDerivedClass)
      .sort()
      .join(","),
    "bar,foo"
  );
  defaultValue = function(v = 248) {
    return v;
  };
  assert.equal(defaultValue(), 248);
  structuring = { foo, bar };
  ({ foo, bar } = MyDerivedClass);
  assert.equal(foo, fooValue);
  assert.equal(bar, barValue);
  ({ foo, bar } = new MyDerivedClass());
  assert.equal(foo, fooValue);
  assert.equal(bar, barValue);
  console.log({ caffeineScriptCompatible: true });
  return (global.caffeineScriptCompatible = true);
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ 1)(module), __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ 2)))

/***/ }),
/* 1 */
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/*!***********************************************!*\
  !*** ../caffeine-script-runtime/index.coffee ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./sourceWithoutNeptuneNamespaces/CaffeineScript/Runtime */ 4);


/***/ }),
/* 4 */
/*!*****************************************************************************************************!*\
  !*** ../caffeine-script-runtime/sourceWithoutNeptuneNamespaces/CaffeineScript/Runtime/index.coffee ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var k, out, ref, ref1, ref2, ref3, v;

module.exports = out = {};

ref = __webpack_require__(/*! ./ArrayCompactFlatten */ 5);
for (k in ref) {
  v = ref[k];
  out[k] = v;
}

ref1 = __webpack_require__(/*! ./Iteration */ 6);
for (k in ref1) {
  v = ref1[k];
  out[k] = v;
}

ref2 = __webpack_require__(/*! ./Iteration2 */ 8);
for (k in ref2) {
  v = ref2[k];
  out[k] = v;
}

ref3 = __webpack_require__(/*! ./Lib */ 9);
for (k in ref3) {
  v = ref3[k];
  out[k] = v;
}


/***/ }),
/* 5 */
/*!*******************************************************************************************************************!*\
  !*** ../caffeine-script-runtime/sourceWithoutNeptuneNamespaces/CaffeineScript/Runtime/ArrayCompactFlatten.coffee ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ArrayCompactFlatten, arraySlice, doFlattenInternal, flattenIfNeeded, isArguments, isArrayOrArguments, isPlainArray, keepAll, keepUnlessNullOrUndefined, needsFlatteningOrCompacting;

arraySlice = Array.prototype.slice;

isArguments = function(o) {
  return o && (typeof o.callee === "function") && (typeof o.length === "number");
};

isPlainArray = (function(_this) {
  return function(o) {
    return (o != null) && o.constructor === Array;
  };
})(this);

isArrayOrArguments = function(o) {
  return o && (isPlainArray(o) || isArguments(o));
};

doFlattenInternal = function(array, keepTester, output) {
  var a, i, len;
  output || (output = []);
  for (i = 0, len = array.length; i < len; i++) {
    a = array[i];
    if (isArrayOrArguments(a)) {
      flattenIfNeeded(a, keepTester, output);
    } else if (keepTester(a)) {
      output.push(a);
    }
  }
  return output;
};

needsFlatteningOrCompacting = function(array, keepTester) {
  var a, i, len;
  for (i = 0, len = array.length; i < len; i++) {
    a = array[i];
    if (isArrayOrArguments(a) || !keepTester(a)) {
      return true;
    }
  }
  return false;
};

flattenIfNeeded = function(array, keepTester, output) {
  var i, len, v;
  if (needsFlatteningOrCompacting(array, keepTester)) {
    return doFlattenInternal(array, keepTester, output);
  } else if (output) {
    for (i = 0, len = array.length; i < len; i++) {
      v = array[i];
      output.push(v);
    }
    return output;
  } else if (array.constructor !== Array) {
    return arraySlice.call(array);
  } else {
    return array;
  }
};

keepAll = function() {
  return true;
};

keepUnlessNullOrUndefined = function(a) {
  return a !== null && a !== void 0;
};

module.exports = ArrayCompactFlatten = (function() {
  function ArrayCompactFlatten() {}

  ArrayCompactFlatten.isPlainArray = isPlainArray;

  ArrayCompactFlatten.compact = function(array, keepTester) {
    var a, i, len;
    if (keepTester == null) {
      keepTester = keepUnlessNullOrUndefined;
    }
    for (i = 0, len = array.length; i < len; i++) {
      a = array[i];
      if (!keepTester(a)) {
        return (function() {
          var j, len1, results;
          results = [];
          for (j = 0, len1 = array.length; j < len1; j++) {
            a = array[j];
            if (keepTester(a)) {
              results.push(a);
            }
          }
          return results;
        })();
      }
    }
    return array;
  };

  ArrayCompactFlatten.flatten = function(firstArg) {
    return flattenIfNeeded(arguments.length === 1 ? isArrayOrArguments(firstArg) ? firstArg : [firstArg] : arguments, keepAll);
  };

  ArrayCompactFlatten.compactFlatten = function(array, keepTester) {
    if (keepTester == null) {
      keepTester = keepUnlessNullOrUndefined;
    }
    return flattenIfNeeded(array, keepTester);
  };

  return ArrayCompactFlatten;

})();


/***/ }),
/* 6 */
/*!*********************************************************************************************************!*\
  !*** ../caffeine-script-runtime/sourceWithoutNeptuneNamespaces/CaffeineScript/Runtime/Iteration.coffee ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var each, extendedEach, isArrayIterable;

isArrayIterable = __webpack_require__(/*! ./IterationBase */ 7).isArrayIterable;


/*
Notes:

Comprehension loop variables are always going to mask any variables
defined in a higher scope.

With e/ee we put all the when, with and key blocks in the same function,
so they naturally share one loop-scope.
 */

module.exports = {

  /*
  IN:
    source:
      array-like (source.length is a number >= 0)
      null or undefined
      otherwise, properties are iterated
  
    out: the value that will be returned.
      out is initialized to source if out == undefined.
      This is for convenience and code-reduction in the "each-without-into-set" case.
  
    withBlock: (currentIterationValue, currentIterationKey, returning) -> ignored
  
  USE: object, array, each
   */
  each: each = function(source, out, withBlock) {
    var i, k, len, v;
    if (out == null) {
      out = source;
    }
    if (source != null) {
      if (isArrayIterable(source)) {
        for (k = i = 0, len = source.length; i < len; k = ++i) {
          v = source[k];
          withBlock(v, k, out);
        }
      } else {
        for (k in source) {
          v = source[k];
          withBlock(v, k, out);
        }
      }
    }
    return out;
  },
  e: each,

  /*
  enhanced-each
  
  Different from each :
    updating-out:   out is updated with the result of every withBlock call
    break-support:  withBlock is passed a forth argument: setShouldBreak
  
    NOTE: out is only initialized to source, if out == undefined. Any updated out
    could be set to undefined and that would be returned.
  
  setShouldBreak:
    IN: ()
    OUT: the undefined value
    EFFECT: this will be the last call to withBlock &
      the value returned by this last call will be the result
      of ee.
  
  This should be enough for all features:
    - "return" - requires a setShouldReturn function in the enclosing scope, and setShouldBreak
    - "next" - becomes a return-statement in withBlock - this works with the basic "e"
    - "break" - setShouldBreak();return out;
    - "break value" - setShouldBreak();return value;
    - "reduce" iteration - needs updating-out
    - "find" iteration - needs break-with-value
  
  Cons:
    possible performance and code-size hit:
    - ee requires more code in the withBlock: {...; return out;}
    - ee creates a setShouldBreak function every time
  
    But, with testing, we may decided those don't really matter.
  
  EXAMPLES:
  
    find v from o with v > 10
  
    Caf.ee o, null, (v, k, out, brk) ->
      brk v if v > 10
  
  
    reduce v1, v2 from o with f v1, v2
  
     * I think we need to remove the out = source default.
  
    Caf.ee o, undefined, (v2, k, v1, brk) ->
      if v1 == undefined
        v2
      else
        f v1, v2
  
     * example: object v from o with v + 1
    Caf.e(o, {}, function(v, k, into) {
      return into[k] = v + 1;
    });
  
     * example: object v from o when v > 3 with v + 1
    Caf.e(o, {}, function(v, k, into) {
      if( v > 3 ) {
        return into[k] = v + 1;
      };
    });
  
     * example: object o
    Caf.e(o, {}, function(v, k, into) {
      return into[k] = v;
    });
   */
  extendedEach: extendedEach = function(source, out, withBlock) {
    var i, k, len, setShouldBreak, shouldBreak, v;
    if (out === "undefined") {
      out = source;
    }
    if (source != null) {
      shouldBreak = false;
      setShouldBreak = function() {
        shouldBreak = true;
        return void 0;
      };
      if (isArrayIterable(source)) {
        for (k = i = 0, len = source.length; i < len; k = ++i) {
          v = source[k];
          out = withBlock(v, k, out, setShouldBreak);
          if (shouldBreak) {
            break;
          }
        }
      } else {
        for (k in source) {
          v = source[k];
          out = withBlock(v, k, out, setShouldBreak);
          if (shouldBreak) {
            break;
          }
        }
      }
    }
    return out;
  },
  ee: extendedEach
};


/***/ }),
/* 7 */
/*!*************************************************************************************************************!*\
  !*** ../caffeine-script-runtime/sourceWithoutNeptuneNamespaces/CaffeineScript/Runtime/IterationBase.coffee ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var isNonNegativeInt;

isNonNegativeInt = function(x) {
  return ((x | 0) === x) && x >= 0;
};

module.exports = {
  isArrayIterable: function(source) {
    return source && isNonNegativeInt(source.length) && source.constructor !== Object;
  }
};


/***/ }),
/* 8 */
/*!**********************************************************************************************************!*\
  !*** ../caffeine-script-runtime/sourceWithoutNeptuneNamespaces/CaffeineScript/Runtime/Iteration2.coffee ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var existsTest, isArrayIterable, returnFirst, returnSecond, returnTrue;

isArrayIterable = __webpack_require__(/*! ./IterationBase */ 7).isArrayIterable;

existsTest = function(a) {
  return a != null;
};

returnTrue = function() {
  return true;
};

returnFirst = function(a) {
  return a;
};

returnSecond = function(a, b) {
  return b;
};

module.exports = {
  find: function(source, withClause, whenClause) {
    var i, j, k, l, len, len1, len2, result, v;
    if (source != null) {
      if (!(whenClause || withClause)) {
        whenClause = existsTest;
      }
      if (isArrayIterable(source)) {
        switch (false) {
          case !(whenClause && withClause):
            for (k = i = 0, len = source.length; i < len; k = ++i) {
              v = source[k];
              if (whenClause(v, k)) {
                return withClause(v, k);
              }
            }
            break;
          case !whenClause:
            for (k = j = 0, len1 = source.length; j < len1; k = ++j) {
              v = source[k];
              if (whenClause(v, k)) {
                return v;
              }
            }
            break;
          case !withClause:
            for (k = l = 0, len2 = source.length; l < len2; k = ++l) {
              v = source[k];
              if (result = withClause(v, k)) {
                return result;
              }
            }
        }
      } else {
        switch (false) {
          case !(whenClause && withClause):
            for (k in source) {
              v = source[k];
              if (whenClause(v, k)) {
                return withClause(v, k);
              }
            }
            break;
          case !whenClause:
            for (k in source) {
              v = source[k];
              if (whenClause(v, k)) {
                return v;
              }
            }
            break;
          case !withClause:
            for (k in source) {
              v = source[k];
              if (result = withClause(v, k)) {
                return result;
              }
            }
        }
      }
    }
  },
  object: function(source, withClause, whenClause, into, keyClause) {
    var i, k, len, v;
    if (withClause == null) {
      withClause = returnFirst;
    }
    if (whenClause == null) {
      whenClause = returnTrue;
    }
    if (into == null) {
      into = {};
    }
    if (isArrayIterable(source)) {
      if (keyClause == null) {
        keyClause = returnFirst;
      }
      for (k = i = 0, len = source.length; i < len; k = ++i) {
        v = source[k];
        if (whenClause(v, k)) {
          into[keyClause(v, k)] = withClause(v, k);
        }
      }
    } else {
      if (keyClause == null) {
        keyClause = returnSecond;
      }
      for (k in source) {
        v = source[k];
        if (whenClause(v, k)) {
          into[keyClause(v, k)] = withClause(v, k);
        }
      }
    }
    return into;
  },
  array: function(source, withClause, whenClause, into) {
    var i, k, len, v;
    if (withClause == null) {
      withClause = returnFirst;
    }
    if (whenClause == null) {
      whenClause = returnTrue;
    }
    if (into == null) {
      into = [];
    }
    if (isArrayIterable(source)) {
      for (k = i = 0, len = source.length; i < len; k = ++i) {
        v = source[k];
        if (whenClause(v, k)) {
          into.push(withClause(v, k));
        }
      }
    } else {
      for (k in source) {
        v = source[k];
        if (whenClause(v, k)) {
          into.push(withClause(v, k));
        }
      }
    }
    return into;
  },
  each2: function(source, withClause, whenClause, into) {
    var i, k, len, v;
    if (withClause == null) {
      withClause = returnFirst;
    }
    if (whenClause == null) {
      whenClause = returnTrue;
    }
    if (into == null) {
      into = source;
    }
    if (isArrayIterable(source)) {
      for (k = i = 0, len = source.length; i < len; k = ++i) {
        v = source[k];
        if (whenClause(v, k)) {
          withClause(v, k);
        }
      }
    } else {
      for (k in source) {
        v = source[k];
        if (whenClause(v, k)) {
          withClause(v, k);
        }
      }
    }
    return into;
  },

  /*
  IN:
    fromValue:  number (required)
    toValue:    number (required)
    byValue:    number (optional)
    into:       object implementing .push(v) (optional)
    withClause: (v) -> value-to-push
    whenCluase: (v) -> truish
    til:        t/f; if true, will stop just before v == toValue
   */
  arrayRange: function(fromValue, toValue, withClause, whenClause, byValue, til, into) {
    var v;
    if (withClause == null) {
      withClause = returnFirst;
    }
    if (whenClause == null) {
      whenClause = returnTrue;
    }
    if (into == null) {
      into = [];
    }
    if (byValue === 0) {
      throw new Error("CaffeineScript array-range comprehension: 'by' is zero. (from: " + fromValue + ", to: " + toValue + ")");
    }
    if (byValue == null) {
      byValue = fromValue < toValue ? 1 : -1;
    }
    v = fromValue;
    if (til) {
      if (byValue > 0) {
        while (v < toValue) {
          if (whenClause(v)) {
            into.push(withClause(v));
          }
          v += byValue;
        }
      } else {
        while (v > toValue) {
          if (whenClause(v)) {
            into.push(withClause(v));
          }
          v += byValue;
        }
      }
    } else {
      if (byValue > 0) {
        while (v <= toValue) {
          if (whenClause(v)) {
            into.push(withClause(v));
          }
          v += byValue;
        }
      } else {
        while (v >= toValue) {
          if (whenClause(v)) {
            into.push(withClause(v));
          }
          v += byValue;
        }
      }
    }
    return into;
  }
};


/***/ }),
/* 9 */
/*!***************************************************************************************************!*\
  !*** ../caffeine-script-runtime/sourceWithoutNeptuneNamespaces/CaffeineScript/Runtime/Lib.coffee ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _import, compactFlatten, getSuper, isDirectPrototypeOf, isFalse, isFunction, isPlainArray, isPlainObject, isTrue, ref, throwImportError,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

ref = __webpack_require__(/*! ./ArrayCompactFlatten */ 5), compactFlatten = ref.compactFlatten, isPlainArray = ref.isPlainArray, isPlainObject = ref.isPlainObject;

__webpack_require__(/*! ./Global */ 10);

global.__definingModule = null;

throwImportError = function(notFound, importNames, libs) {
  var i, importFileName, importFrom, len, lib, line, ref1, ref2;
  importFrom = ((function() {
    var i, len, results;
    results = [];
    for (i = 0, len = libs.length; i < len; i++) {
      lib = libs[i];
      if (lib === global) {
        results.push("global");
      } else if (lib != null) {
        results.push(lib.namespacePath || (typeof lib.getName === "function" ? lib.getName() : void 0) || ("{" + (Object.keys(lib).join(', ')) + "}"));
      } else {
        results.push('null');
      }
    }
    return results;
  })()).join('\n  ');
  ref1 = (new Error).stack.split("\n");
  for (i = 0, len = ref1.length; i < len; i++) {
    line = ref1[i];
    if (!(line.match(/^\s/) && !line.match(/caffeine-script-runtime/))) {
      continue;
    }
    importFileName = ((ref2 = line.match(/\(([^()]+)/)) != null ? ref2[1] : void 0) || line;
    break;
  }
  console.warn("CaffineScript imports not found:\n  " + (notFound.join('\n  ')) + "\n\nimporting from:\n  " + importFrom + "\n\nsource:\n  " + importFileName + "\n");
  throw new Error("CaffineScript imports not found: " + (notFound.join(', ')));
};

module.exports = {
  "in": function(a, b) {
    return indexOf.call(b, a) >= 0;
  },
  mod: function(a, b) {
    return modulo(a, b);
  },
  div: function(a, b) {
    return Math.floor(a / b);
  },
  pow: function(a, b) {
    return Math.pow(a, b);
  },
  existsOr: function(a, b) {
    return a != null ? a : b();
  },
  exists: function(a) {
    return (a !== null && a !== void 0) || void 0;
  },
  is: function(a, b) {
    return a === b || ((a != null) && (b != null) && a.constructor === b);
  },

  /*
  Implements the 'import' function.
  
  IN:
    importNames: array of strings of identifiers to import
    libs: array of objects to import from, first has highest priority.
  
  OUT: and object with one property per importName
   */
  "import": _import = function(importNames, libs) {
    var i, importName, j, len, lib, notFound, out, v;
    out = {};
    notFound = null;
    libs = compactFlatten(libs);
    for (i = 0, len = importNames.length; i < len; i++) {
      importName = importNames[i];
      for (j = libs.length - 1; j >= 0; j += -1) {
        lib = libs[j];
        if ((v = lib[importName]) != null) {
          out[importName] = v;
          break;
        }
      }
      if (out[importName] == null) {
        (notFound || (notFound = [])).push(importName);
      }
    }
    if (notFound != null) {
      throwImportError(notFound, importNames, libs);
    }
    return out;
  },

  /*
  IN:
    importNames: array of strings
    libs: array of objects to import from, with arbitrary subarray nesting
    toInvoke: function
  
  EFFECT:
    for each import-name, libs are searched in reverse order for a value with that name.
      if no value is found, an error is down with and information is provided.
  
    toInvoke is called with each of the values found in order as arugments.
    the value form toInvoke is returned
  
  EXAMPLE:
    importInvoke(["a", "b"], [a:1, b:2], toInvoke)
    EFFECT: return toInvoke 1, 2
   */
  importInvoke: function(importNames, libs, toInvoke) {
    var importName, importValue, importValues, lib, notFound, v;
    notFound = null;
    libs = compactFlatten(libs);
    importValues = (function() {
      var i, j, len, results;
      results = [];
      for (i = 0, len = importNames.length; i < len; i++) {
        importName = importNames[i];
        importValue = null;
        for (j = libs.length - 1; j >= 0; j += -1) {
          lib = libs[j];
          if ((v = lib[importName]) != null) {
            importValue = v;
            break;
          }
        }
        results.push(importValue != null ? importValue : (notFound || (notFound = [])).push(importName));
      }
      return results;
    })();
    if (notFound != null) {
      throwImportError(notFound, importNames, libs);
    }
    return toInvoke.apply(null, importValues);
  },
  isTrue: isTrue = function(a) {
    return (a != null) && a !== false;
  },
  isFalse: isFalse = function(a) {
    return a === false || (a == null);
  },
  isFunction: isFunction = function(a) {
    return typeof a === "function";
  },
  isDirectPrototypeOf: isDirectPrototypeOf = function(o, prototype) {
    return !isFunction(o) && prototype.constructor === o.constructor;
  },
  toString: function(a) {
    if (a != null) {
      if (isPlainArray(a)) {
        return a.join('');
      } else if (isFunction(a != null ? a.toString : void 0)) {
        return a.toString();
      } else {

      }
    } else {
      return '';
    }
  },
  gt: function(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a > b;
    } else {
      return a.gt(b);
    }
  },
  lt: function(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a < b;
    } else {
      return a.lt(b);
    }
  },
  lte: function(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a <= b;
    } else {
      return a.lte(b);
    }
  },
  gte: function(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a >= b;
    } else {
      return a.gte(b);
    }
  },
  add: function(a, b) {
    if ((typeof a === "number" && typeof b === "number") || (typeof a === "string" && typeof b === "string")) {
      return a + b;
    } else {
      return a.add(b);
    }
  },
  sub: function(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    } else {
      return a.sub(b);
    }
  },
  mul: function(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a * b;
    } else {
      return a.mul(b);
    }
  },
  div: function(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a / b;
    } else {
      return a.div(b);
    }
  },

  /*
  All about getSuper in ES6 land:
  
    class A {}
    class B extends A {}
    class C extends B {}
  
    a = new A
    b = new B
    c = new C
  
    getSuper(B) == A
    getSuper(C) == B
  
    getSuper(A.prototype) == Object.prototype
    getSuper(B.prototype) == A.prototype
    getSuper(C.prototype) == B.prototype
  
    getSuper(b) == A.prototype
    getSuper(c) == B.prototype
  
  prototype map:
  
  KEY:
    <->
       <-- .constructor
       --> .prototype
    ^  Object.prototypeOf
  
  MAP:
    A <-> aPrototype
  
    ^     ^     ^
    |     |     a
    |     |
  
    B <-> bPrototype
  
    ^     ^     ^
    |     |     b
    |     |
  
    C <-> cPrototype
  
                ^
                c
  
  Definition of super:
  
    if instance then prototype's prototype
    else prototype
   */
  getSuper: getSuper = function(o) {
    var _super, out;
    if (!((typeof o === "object") || (typeof o === "function"))) {
      throw new Error("getSuper expecting an object");
    }
    _super = Object.getPrototypeOf(o);
    out = _super === Function.prototype && o.__super__ ? o.__super__.constructor : isDirectPrototypeOf(o, _super) ? Object.getPrototypeOf(_super) : _super;
    return out;
  },

  /*
  IN:
    klass a new class-function object
    init: (klass) -> outKlass
  
  OUT: if isF outKlass.createWithPostCreate
    outKlass.createWithPostCreate outKlass
  OR
    outKlass (from init)
  
  EFFECT:
    outKlass.createWithPostCreate?(outKlass) ? outKlass
   */
  defClass: function(klass, init) {
    var ref1;
    if (init != null) {
      init.call(klass, klass, getSuper(klass), getSuper(klass.prototype));
    }
    return (ref1 = typeof klass.createWithPostCreate === "function" ? klass.createWithPostCreate(klass) : void 0) != null ? ref1 : klass;
  },
  getModuleBeingDefined: function() {
    return global.__definingModule;
  },

  /*
  IN:
    defineFunciton ||
   */
  defMod: function(_module, a) {
    var lastModule, result;
    lastModule = global.__definingModule;
    global.__definingModule = _module;
    result = _module.exports = a();
    global.__definingModule = lastModule;
    return result;
  },
  i: _import,
  t: isTrue,
  f: isFalse,
  isF: isFunction
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ 2)))

/***/ }),
/* 10 */
/*!******************************************************************************************************!*\
  !*** ../caffeine-script-runtime/sourceWithoutNeptuneNamespaces/CaffeineScript/Runtime/Global.coffee ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var g;

g = typeof window !== "undefined" && window !== null ? window : typeof self !== "undefined" && self !== null ? self : global;

g.global = g;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ 2)))

/***/ })
/******/ ]);