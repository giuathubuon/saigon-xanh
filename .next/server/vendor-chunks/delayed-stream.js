"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/delayed-stream";
exports.ids = ["vendor-chunks/delayed-stream"];
exports.modules = {

/***/ "(ssr)/./node_modules/delayed-stream/lib/delayed_stream.js":
/*!***********************************************************!*\
  !*** ./node_modules/delayed-stream/lib/delayed_stream.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar Stream = (__webpack_require__(/*! stream */ \"stream\").Stream);\nvar util = __webpack_require__(/*! util */ \"util\");\nmodule.exports = DelayedStream;\nfunction DelayedStream() {\n    this.source = null;\n    this.dataSize = 0;\n    this.maxDataSize = 1024 * 1024;\n    this.pauseStream = true;\n    this._maxDataSizeExceeded = false;\n    this._released = false;\n    this._bufferedEvents = [];\n}\nutil.inherits(DelayedStream, Stream);\nDelayedStream.create = function(source, options) {\n    var delayedStream = new this();\n    options = options || {};\n    for(var option in options){\n        delayedStream[option] = options[option];\n    }\n    delayedStream.source = source;\n    var realEmit = source.emit;\n    source.emit = function() {\n        delayedStream._handleEmit(arguments);\n        return realEmit.apply(source, arguments);\n    };\n    source.on(\"error\", function() {});\n    if (delayedStream.pauseStream) {\n        source.pause();\n    }\n    return delayedStream;\n};\nObject.defineProperty(DelayedStream.prototype, \"readable\", {\n    configurable: true,\n    enumerable: true,\n    get: function() {\n        return this.source.readable;\n    }\n});\nDelayedStream.prototype.setEncoding = function() {\n    return this.source.setEncoding.apply(this.source, arguments);\n};\nDelayedStream.prototype.resume = function() {\n    if (!this._released) {\n        this.release();\n    }\n    this.source.resume();\n};\nDelayedStream.prototype.pause = function() {\n    this.source.pause();\n};\nDelayedStream.prototype.release = function() {\n    this._released = true;\n    this._bufferedEvents.forEach((function(args) {\n        this.emit.apply(this, args);\n    }).bind(this));\n    this._bufferedEvents = [];\n};\nDelayedStream.prototype.pipe = function() {\n    var r = Stream.prototype.pipe.apply(this, arguments);\n    this.resume();\n    return r;\n};\nDelayedStream.prototype._handleEmit = function(args) {\n    if (this._released) {\n        this.emit.apply(this, args);\n        return;\n    }\n    if (args[0] === \"data\") {\n        this.dataSize += args[1].length;\n        this._checkIfMaxDataSizeExceeded();\n    }\n    this._bufferedEvents.push(args);\n};\nDelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {\n    if (this._maxDataSizeExceeded) {\n        return;\n    }\n    if (this.dataSize <= this.maxDataSize) {\n        return;\n    }\n    this._maxDataSizeExceeded = true;\n    var message = \"DelayedStream#maxDataSize of \" + this.maxDataSize + \" bytes exceeded.\";\n    this.emit(\"error\", new Error(message));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGVsYXllZC1zdHJlYW0vbGliL2RlbGF5ZWRfc3RyZWFtLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFJQSxTQUFTQyxvREFBd0I7QUFDckMsSUFBSUMsT0FBT0QsbUJBQU9BLENBQUM7QUFFbkJFLE9BQU9DLE9BQU8sR0FBR0M7QUFDakIsU0FBU0E7SUFDUCxJQUFJLENBQUNDLE1BQU0sR0FBRztJQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHO0lBQ2hCLElBQUksQ0FBQ0MsV0FBVyxHQUFHLE9BQU87SUFDMUIsSUFBSSxDQUFDQyxXQUFXLEdBQUc7SUFFbkIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBRztJQUM1QixJQUFJLENBQUNDLFNBQVMsR0FBRztJQUNqQixJQUFJLENBQUNDLGVBQWUsR0FBRyxFQUFFO0FBQzNCO0FBQ0FWLEtBQUtXLFFBQVEsQ0FBQ1IsZUFBZUw7QUFFN0JLLGNBQWNTLE1BQU0sR0FBRyxTQUFTUixNQUFNLEVBQUVTLE9BQU87SUFDN0MsSUFBSUMsZ0JBQWdCLElBQUksSUFBSTtJQUU1QkQsVUFBVUEsV0FBVyxDQUFDO0lBQ3RCLElBQUssSUFBSUUsVUFBVUYsUUFBUztRQUMxQkMsYUFBYSxDQUFDQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0UsT0FBTztJQUN6QztJQUVBRCxjQUFjVixNQUFNLEdBQUdBO0lBRXZCLElBQUlZLFdBQVdaLE9BQU9hLElBQUk7SUFDMUJiLE9BQU9hLElBQUksR0FBRztRQUNaSCxjQUFjSSxXQUFXLENBQUNDO1FBQzFCLE9BQU9ILFNBQVNJLEtBQUssQ0FBQ2hCLFFBQVFlO0lBQ2hDO0lBRUFmLE9BQU9pQixFQUFFLENBQUMsU0FBUyxZQUFZO0lBQy9CLElBQUlQLGNBQWNQLFdBQVcsRUFBRTtRQUM3QkgsT0FBT2tCLEtBQUs7SUFDZDtJQUVBLE9BQU9SO0FBQ1Q7QUFFQVMsT0FBT0MsY0FBYyxDQUFDckIsY0FBY3NCLFNBQVMsRUFBRSxZQUFZO0lBQ3pEQyxjQUFjO0lBQ2RDLFlBQVk7SUFDWkMsS0FBSztRQUNILE9BQU8sSUFBSSxDQUFDeEIsTUFBTSxDQUFDeUIsUUFBUTtJQUM3QjtBQUNGO0FBRUExQixjQUFjc0IsU0FBUyxDQUFDSyxXQUFXLEdBQUc7SUFDcEMsT0FBTyxJQUFJLENBQUMxQixNQUFNLENBQUMwQixXQUFXLENBQUNWLEtBQUssQ0FBQyxJQUFJLENBQUNoQixNQUFNLEVBQUVlO0FBQ3BEO0FBRUFoQixjQUFjc0IsU0FBUyxDQUFDTSxNQUFNLEdBQUc7SUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQ3RCLFNBQVMsRUFBRTtRQUNuQixJQUFJLENBQUN1QixPQUFPO0lBQ2Q7SUFFQSxJQUFJLENBQUM1QixNQUFNLENBQUMyQixNQUFNO0FBQ3BCO0FBRUE1QixjQUFjc0IsU0FBUyxDQUFDSCxLQUFLLEdBQUc7SUFDOUIsSUFBSSxDQUFDbEIsTUFBTSxDQUFDa0IsS0FBSztBQUNuQjtBQUVBbkIsY0FBY3NCLFNBQVMsQ0FBQ08sT0FBTyxHQUFHO0lBQ2hDLElBQUksQ0FBQ3ZCLFNBQVMsR0FBRztJQUVqQixJQUFJLENBQUNDLGVBQWUsQ0FBQ3VCLE9BQU8sQ0FBQyxVQUFTQyxJQUFJO1FBQ3hDLElBQUksQ0FBQ2pCLElBQUksQ0FBQ0csS0FBSyxDQUFDLElBQUksRUFBRWM7SUFDeEIsR0FBRUMsSUFBSSxDQUFDLElBQUk7SUFDWCxJQUFJLENBQUN6QixlQUFlLEdBQUcsRUFBRTtBQUMzQjtBQUVBUCxjQUFjc0IsU0FBUyxDQUFDVyxJQUFJLEdBQUc7SUFDN0IsSUFBSUMsSUFBSXZDLE9BQU8yQixTQUFTLENBQUNXLElBQUksQ0FBQ2hCLEtBQUssQ0FBQyxJQUFJLEVBQUVEO0lBQzFDLElBQUksQ0FBQ1ksTUFBTTtJQUNYLE9BQU9NO0FBQ1Q7QUFFQWxDLGNBQWNzQixTQUFTLENBQUNQLFdBQVcsR0FBRyxTQUFTZ0IsSUFBSTtJQUNqRCxJQUFJLElBQUksQ0FBQ3pCLFNBQVMsRUFBRTtRQUNsQixJQUFJLENBQUNRLElBQUksQ0FBQ0csS0FBSyxDQUFDLElBQUksRUFBRWM7UUFDdEI7SUFDRjtJQUVBLElBQUlBLElBQUksQ0FBQyxFQUFFLEtBQUssUUFBUTtRQUN0QixJQUFJLENBQUM3QixRQUFRLElBQUk2QixJQUFJLENBQUMsRUFBRSxDQUFDSSxNQUFNO1FBQy9CLElBQUksQ0FBQ0MsMkJBQTJCO0lBQ2xDO0lBRUEsSUFBSSxDQUFDN0IsZUFBZSxDQUFDOEIsSUFBSSxDQUFDTjtBQUM1QjtBQUVBL0IsY0FBY3NCLFNBQVMsQ0FBQ2MsMkJBQTJCLEdBQUc7SUFDcEQsSUFBSSxJQUFJLENBQUMvQixvQkFBb0IsRUFBRTtRQUM3QjtJQUNGO0lBRUEsSUFBSSxJQUFJLENBQUNILFFBQVEsSUFBSSxJQUFJLENBQUNDLFdBQVcsRUFBRTtRQUNyQztJQUNGO0lBRUEsSUFBSSxDQUFDRSxvQkFBb0IsR0FBRztJQUM1QixJQUFJaUMsVUFDRixrQ0FBa0MsSUFBSSxDQUFDbkMsV0FBVyxHQUFHO0lBQ3ZELElBQUksQ0FBQ1csSUFBSSxDQUFDLFNBQVMsSUFBSXlCLE1BQU1EO0FBQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FpZ29ueGFuaC8uL25vZGVfbW9kdWxlcy9kZWxheWVkLXN0cmVhbS9saWIvZGVsYXllZF9zdHJlYW0uanM/ZmU1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU3RyZWFtID0gcmVxdWlyZSgnc3RyZWFtJykuU3RyZWFtO1xudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGVsYXllZFN0cmVhbTtcbmZ1bmN0aW9uIERlbGF5ZWRTdHJlYW0oKSB7XG4gIHRoaXMuc291cmNlID0gbnVsbDtcbiAgdGhpcy5kYXRhU2l6ZSA9IDA7XG4gIHRoaXMubWF4RGF0YVNpemUgPSAxMDI0ICogMTAyNDtcbiAgdGhpcy5wYXVzZVN0cmVhbSA9IHRydWU7XG5cbiAgdGhpcy5fbWF4RGF0YVNpemVFeGNlZWRlZCA9IGZhbHNlO1xuICB0aGlzLl9yZWxlYXNlZCA9IGZhbHNlO1xuICB0aGlzLl9idWZmZXJlZEV2ZW50cyA9IFtdO1xufVxudXRpbC5pbmhlcml0cyhEZWxheWVkU3RyZWFtLCBTdHJlYW0pO1xuXG5EZWxheWVkU3RyZWFtLmNyZWF0ZSA9IGZ1bmN0aW9uKHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZGVsYXllZFN0cmVhbSA9IG5ldyB0aGlzKCk7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGZvciAodmFyIG9wdGlvbiBpbiBvcHRpb25zKSB7XG4gICAgZGVsYXllZFN0cmVhbVtvcHRpb25dID0gb3B0aW9uc1tvcHRpb25dO1xuICB9XG5cbiAgZGVsYXllZFN0cmVhbS5zb3VyY2UgPSBzb3VyY2U7XG5cbiAgdmFyIHJlYWxFbWl0ID0gc291cmNlLmVtaXQ7XG4gIHNvdXJjZS5lbWl0ID0gZnVuY3Rpb24oKSB7XG4gICAgZGVsYXllZFN0cmVhbS5faGFuZGxlRW1pdChhcmd1bWVudHMpO1xuICAgIHJldHVybiByZWFsRW1pdC5hcHBseShzb3VyY2UsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgc291cmNlLm9uKCdlcnJvcicsIGZ1bmN0aW9uKCkge30pO1xuICBpZiAoZGVsYXllZFN0cmVhbS5wYXVzZVN0cmVhbSkge1xuICAgIHNvdXJjZS5wYXVzZSgpO1xuICB9XG5cbiAgcmV0dXJuIGRlbGF5ZWRTdHJlYW07XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRGVsYXllZFN0cmVhbS5wcm90b3R5cGUsICdyZWFkYWJsZScsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZS5yZWFkYWJsZTtcbiAgfVxufSk7XG5cbkRlbGF5ZWRTdHJlYW0ucHJvdG90eXBlLnNldEVuY29kaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNvdXJjZS5zZXRFbmNvZGluZy5hcHBseSh0aGlzLnNvdXJjZSwgYXJndW1lbnRzKTtcbn07XG5cbkRlbGF5ZWRTdHJlYW0ucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuX3JlbGVhc2VkKSB7XG4gICAgdGhpcy5yZWxlYXNlKCk7XG4gIH1cblxuICB0aGlzLnNvdXJjZS5yZXN1bWUoKTtcbn07XG5cbkRlbGF5ZWRTdHJlYW0ucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc291cmNlLnBhdXNlKCk7XG59O1xuXG5EZWxheWVkU3RyZWFtLnByb3RvdHlwZS5yZWxlYXNlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX3JlbGVhc2VkID0gdHJ1ZTtcblxuICB0aGlzLl9idWZmZXJlZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gIH0uYmluZCh0aGlzKSk7XG4gIHRoaXMuX2J1ZmZlcmVkRXZlbnRzID0gW107XG59O1xuXG5EZWxheWVkU3RyZWFtLnByb3RvdHlwZS5waXBlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByID0gU3RyZWFtLnByb3RvdHlwZS5waXBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIHRoaXMucmVzdW1lKCk7XG4gIHJldHVybiByO1xufTtcblxuRGVsYXllZFN0cmVhbS5wcm90b3R5cGUuX2hhbmRsZUVtaXQgPSBmdW5jdGlvbihhcmdzKSB7XG4gIGlmICh0aGlzLl9yZWxlYXNlZCkge1xuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoYXJnc1swXSA9PT0gJ2RhdGEnKSB7XG4gICAgdGhpcy5kYXRhU2l6ZSArPSBhcmdzWzFdLmxlbmd0aDtcbiAgICB0aGlzLl9jaGVja0lmTWF4RGF0YVNpemVFeGNlZWRlZCgpO1xuICB9XG5cbiAgdGhpcy5fYnVmZmVyZWRFdmVudHMucHVzaChhcmdzKTtcbn07XG5cbkRlbGF5ZWRTdHJlYW0ucHJvdG90eXBlLl9jaGVja0lmTWF4RGF0YVNpemVFeGNlZWRlZCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5fbWF4RGF0YVNpemVFeGNlZWRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0aGlzLmRhdGFTaXplIDw9IHRoaXMubWF4RGF0YVNpemUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLl9tYXhEYXRhU2l6ZUV4Y2VlZGVkID0gdHJ1ZTtcbiAgdmFyIG1lc3NhZ2UgPVxuICAgICdEZWxheWVkU3RyZWFtI21heERhdGFTaXplIG9mICcgKyB0aGlzLm1heERhdGFTaXplICsgJyBieXRlcyBleGNlZWRlZC4nXG4gIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IobWVzc2FnZSkpO1xufTtcbiJdLCJuYW1lcyI6WyJTdHJlYW0iLCJyZXF1aXJlIiwidXRpbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJEZWxheWVkU3RyZWFtIiwic291cmNlIiwiZGF0YVNpemUiLCJtYXhEYXRhU2l6ZSIsInBhdXNlU3RyZWFtIiwiX21heERhdGFTaXplRXhjZWVkZWQiLCJfcmVsZWFzZWQiLCJfYnVmZmVyZWRFdmVudHMiLCJpbmhlcml0cyIsImNyZWF0ZSIsIm9wdGlvbnMiLCJkZWxheWVkU3RyZWFtIiwib3B0aW9uIiwicmVhbEVtaXQiLCJlbWl0IiwiX2hhbmRsZUVtaXQiLCJhcmd1bWVudHMiLCJhcHBseSIsIm9uIiwicGF1c2UiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInByb3RvdHlwZSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJnZXQiLCJyZWFkYWJsZSIsInNldEVuY29kaW5nIiwicmVzdW1lIiwicmVsZWFzZSIsImZvckVhY2giLCJhcmdzIiwiYmluZCIsInBpcGUiLCJyIiwibGVuZ3RoIiwiX2NoZWNrSWZNYXhEYXRhU2l6ZUV4Y2VlZGVkIiwicHVzaCIsIm1lc3NhZ2UiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/delayed-stream/lib/delayed_stream.js\n");

/***/ })

};
;