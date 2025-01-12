"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/supports-color";
exports.ids = ["vendor-chunks/supports-color"];
exports.modules = {

/***/ "(ssr)/./node_modules/supports-color/index.js":
/*!**********************************************!*\
  !*** ./node_modules/supports-color/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst os = __webpack_require__(/*! os */ \"os\");\nconst tty = __webpack_require__(/*! tty */ \"tty\");\nconst hasFlag = __webpack_require__(/*! has-flag */ \"(ssr)/./node_modules/has-flag/index.js\");\nconst { env } = process;\nlet forceColor;\nif (hasFlag(\"no-color\") || hasFlag(\"no-colors\") || hasFlag(\"color=false\") || hasFlag(\"color=never\")) {\n    forceColor = 0;\n} else if (hasFlag(\"color\") || hasFlag(\"colors\") || hasFlag(\"color=true\") || hasFlag(\"color=always\")) {\n    forceColor = 1;\n}\nif (\"FORCE_COLOR\" in env) {\n    if (env.FORCE_COLOR === \"true\") {\n        forceColor = 1;\n    } else if (env.FORCE_COLOR === \"false\") {\n        forceColor = 0;\n    } else {\n        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);\n    }\n}\nfunction translateLevel(level) {\n    if (level === 0) {\n        return false;\n    }\n    return {\n        level,\n        hasBasic: true,\n        has256: level >= 2,\n        has16m: level >= 3\n    };\n}\nfunction supportsColor(haveStream, streamIsTTY) {\n    if (forceColor === 0) {\n        return 0;\n    }\n    if (hasFlag(\"color=16m\") || hasFlag(\"color=full\") || hasFlag(\"color=truecolor\")) {\n        return 3;\n    }\n    if (hasFlag(\"color=256\")) {\n        return 2;\n    }\n    if (haveStream && !streamIsTTY && forceColor === undefined) {\n        return 0;\n    }\n    const min = forceColor || 0;\n    if (env.TERM === \"dumb\") {\n        return min;\n    }\n    if (process.platform === \"win32\") {\n        // Windows 10 build 10586 is the first Windows release that supports 256 colors.\n        // Windows 10 build 14931 is the first release that supports 16m/TrueColor.\n        const osRelease = os.release().split(\".\");\n        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {\n            return Number(osRelease[2]) >= 14931 ? 3 : 2;\n        }\n        return 1;\n    }\n    if (\"CI\" in env) {\n        if ([\n            \"TRAVIS\",\n            \"CIRCLECI\",\n            \"APPVEYOR\",\n            \"GITLAB_CI\",\n            \"GITHUB_ACTIONS\",\n            \"BUILDKITE\"\n        ].some((sign)=>sign in env) || env.CI_NAME === \"codeship\") {\n            return 1;\n        }\n        return min;\n    }\n    if (\"TEAMCITY_VERSION\" in env) {\n        return /^(9\\.(0*[1-9]\\d*)\\.|\\d{2,}\\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;\n    }\n    if (env.COLORTERM === \"truecolor\") {\n        return 3;\n    }\n    if (\"TERM_PROGRAM\" in env) {\n        const version = parseInt((env.TERM_PROGRAM_VERSION || \"\").split(\".\")[0], 10);\n        switch(env.TERM_PROGRAM){\n            case \"iTerm.app\":\n                return version >= 3 ? 3 : 2;\n            case \"Apple_Terminal\":\n                return 2;\n        }\n    }\n    if (/-256(color)?$/i.test(env.TERM)) {\n        return 2;\n    }\n    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {\n        return 1;\n    }\n    if (\"COLORTERM\" in env) {\n        return 1;\n    }\n    return min;\n}\nfunction getSupportLevel(stream) {\n    const level = supportsColor(stream, stream && stream.isTTY);\n    return translateLevel(level);\n}\nmodule.exports = {\n    supportsColor: getSupportLevel,\n    stdout: translateLevel(supportsColor(true, tty.isatty(1))),\n    stderr: translateLevel(supportsColor(true, tty.isatty(2)))\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3VwcG9ydHMtY29sb3IvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNQSxLQUFLQyxtQkFBT0EsQ0FBQztBQUNuQixNQUFNQyxNQUFNRCxtQkFBT0EsQ0FBQztBQUNwQixNQUFNRSxVQUFVRixtQkFBT0EsQ0FBQztBQUV4QixNQUFNLEVBQUNHLEdBQUcsRUFBQyxHQUFHQztBQUVkLElBQUlDO0FBQ0osSUFBSUgsUUFBUSxlQUNYQSxRQUFRLGdCQUNSQSxRQUFRLGtCQUNSQSxRQUFRLGdCQUFnQjtJQUN4QkcsYUFBYTtBQUNkLE9BQU8sSUFBSUgsUUFBUSxZQUNsQkEsUUFBUSxhQUNSQSxRQUFRLGlCQUNSQSxRQUFRLGlCQUFpQjtJQUN6QkcsYUFBYTtBQUNkO0FBRUEsSUFBSSxpQkFBaUJGLEtBQUs7SUFDekIsSUFBSUEsSUFBSUcsV0FBVyxLQUFLLFFBQVE7UUFDL0JELGFBQWE7SUFDZCxPQUFPLElBQUlGLElBQUlHLFdBQVcsS0FBSyxTQUFTO1FBQ3ZDRCxhQUFhO0lBQ2QsT0FBTztRQUNOQSxhQUFhRixJQUFJRyxXQUFXLENBQUNDLE1BQU0sS0FBSyxJQUFJLElBQUlDLEtBQUtDLEdBQUcsQ0FBQ0MsU0FBU1AsSUFBSUcsV0FBVyxFQUFFLEtBQUs7SUFDekY7QUFDRDtBQUVBLFNBQVNLLGVBQWVDLEtBQUs7SUFDNUIsSUFBSUEsVUFBVSxHQUFHO1FBQ2hCLE9BQU87SUFDUjtJQUVBLE9BQU87UUFDTkE7UUFDQUMsVUFBVTtRQUNWQyxRQUFRRixTQUFTO1FBQ2pCRyxRQUFRSCxTQUFTO0lBQ2xCO0FBQ0Q7QUFFQSxTQUFTSSxjQUFjQyxVQUFVLEVBQUVDLFdBQVc7SUFDN0MsSUFBSWIsZUFBZSxHQUFHO1FBQ3JCLE9BQU87SUFDUjtJQUVBLElBQUlILFFBQVEsZ0JBQ1hBLFFBQVEsaUJBQ1JBLFFBQVEsb0JBQW9CO1FBQzVCLE9BQU87SUFDUjtJQUVBLElBQUlBLFFBQVEsY0FBYztRQUN6QixPQUFPO0lBQ1I7SUFFQSxJQUFJZSxjQUFjLENBQUNDLGVBQWViLGVBQWVjLFdBQVc7UUFDM0QsT0FBTztJQUNSO0lBRUEsTUFBTVYsTUFBTUosY0FBYztJQUUxQixJQUFJRixJQUFJaUIsSUFBSSxLQUFLLFFBQVE7UUFDeEIsT0FBT1g7SUFDUjtJQUVBLElBQUlMLFFBQVFpQixRQUFRLEtBQUssU0FBUztRQUNqQyxnRkFBZ0Y7UUFDaEYsMkVBQTJFO1FBQzNFLE1BQU1DLFlBQVl2QixHQUFHd0IsT0FBTyxHQUFHQyxLQUFLLENBQUM7UUFDckMsSUFDQ0MsT0FBT0gsU0FBUyxDQUFDLEVBQUUsS0FBSyxNQUN4QkcsT0FBT0gsU0FBUyxDQUFDLEVBQUUsS0FBSyxPQUN2QjtZQUNELE9BQU9HLE9BQU9ILFNBQVMsQ0FBQyxFQUFFLEtBQUssUUFBUSxJQUFJO1FBQzVDO1FBRUEsT0FBTztJQUNSO0lBRUEsSUFBSSxRQUFRbkIsS0FBSztRQUNoQixJQUFJO1lBQUM7WUFBVTtZQUFZO1lBQVk7WUFBYTtZQUFrQjtTQUFZLENBQUN1QixJQUFJLENBQUNDLENBQUFBLE9BQVFBLFFBQVF4QixRQUFRQSxJQUFJeUIsT0FBTyxLQUFLLFlBQVk7WUFDM0ksT0FBTztRQUNSO1FBRUEsT0FBT25CO0lBQ1I7SUFFQSxJQUFJLHNCQUFzQk4sS0FBSztRQUM5QixPQUFPLGdDQUFnQzBCLElBQUksQ0FBQzFCLElBQUkyQixnQkFBZ0IsSUFBSSxJQUFJO0lBQ3pFO0lBRUEsSUFBSTNCLElBQUk0QixTQUFTLEtBQUssYUFBYTtRQUNsQyxPQUFPO0lBQ1I7SUFFQSxJQUFJLGtCQUFrQjVCLEtBQUs7UUFDMUIsTUFBTTZCLFVBQVV0QixTQUFTLENBQUNQLElBQUk4QixvQkFBb0IsSUFBSSxFQUFDLEVBQUdULEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1FBRXpFLE9BQVFyQixJQUFJK0IsWUFBWTtZQUN2QixLQUFLO2dCQUNKLE9BQU9GLFdBQVcsSUFBSSxJQUFJO1lBQzNCLEtBQUs7Z0JBQ0osT0FBTztRQUVUO0lBQ0Q7SUFFQSxJQUFJLGlCQUFpQkgsSUFBSSxDQUFDMUIsSUFBSWlCLElBQUksR0FBRztRQUNwQyxPQUFPO0lBQ1I7SUFFQSxJQUFJLDhEQUE4RFMsSUFBSSxDQUFDMUIsSUFBSWlCLElBQUksR0FBRztRQUNqRixPQUFPO0lBQ1I7SUFFQSxJQUFJLGVBQWVqQixLQUFLO1FBQ3ZCLE9BQU87SUFDUjtJQUVBLE9BQU9NO0FBQ1I7QUFFQSxTQUFTMEIsZ0JBQWdCQyxNQUFNO0lBQzlCLE1BQU14QixRQUFRSSxjQUFjb0IsUUFBUUEsVUFBVUEsT0FBT0MsS0FBSztJQUMxRCxPQUFPMUIsZUFBZUM7QUFDdkI7QUFFQTBCLE9BQU9DLE9BQU8sR0FBRztJQUNoQnZCLGVBQWVtQjtJQUNmSyxRQUFRN0IsZUFBZUssY0FBYyxNQUFNZixJQUFJd0MsTUFBTSxDQUFDO0lBQ3REQyxRQUFRL0IsZUFBZUssY0FBYyxNQUFNZixJQUFJd0MsTUFBTSxDQUFDO0FBQ3ZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FpZ29ueGFuaC8uL25vZGVfbW9kdWxlcy9zdXBwb3J0cy1jb2xvci9pbmRleC5qcz83YmI5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcbmNvbnN0IHR0eSA9IHJlcXVpcmUoJ3R0eScpO1xuY29uc3QgaGFzRmxhZyA9IHJlcXVpcmUoJ2hhcy1mbGFnJyk7XG5cbmNvbnN0IHtlbnZ9ID0gcHJvY2VzcztcblxubGV0IGZvcmNlQ29sb3I7XG5pZiAoaGFzRmxhZygnbm8tY29sb3InKSB8fFxuXHRoYXNGbGFnKCduby1jb2xvcnMnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj1mYWxzZScpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPW5ldmVyJykpIHtcblx0Zm9yY2VDb2xvciA9IDA7XG59IGVsc2UgaWYgKGhhc0ZsYWcoJ2NvbG9yJykgfHxcblx0aGFzRmxhZygnY29sb3JzJykgfHxcblx0aGFzRmxhZygnY29sb3I9dHJ1ZScpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPWFsd2F5cycpKSB7XG5cdGZvcmNlQ29sb3IgPSAxO1xufVxuXG5pZiAoJ0ZPUkNFX0NPTE9SJyBpbiBlbnYpIHtcblx0aWYgKGVudi5GT1JDRV9DT0xPUiA9PT0gJ3RydWUnKSB7XG5cdFx0Zm9yY2VDb2xvciA9IDE7XG5cdH0gZWxzZSBpZiAoZW52LkZPUkNFX0NPTE9SID09PSAnZmFsc2UnKSB7XG5cdFx0Zm9yY2VDb2xvciA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0Zm9yY2VDb2xvciA9IGVudi5GT1JDRV9DT0xPUi5sZW5ndGggPT09IDAgPyAxIDogTWF0aC5taW4ocGFyc2VJbnQoZW52LkZPUkNFX0NPTE9SLCAxMCksIDMpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZUxldmVsKGxldmVsKSB7XG5cdGlmIChsZXZlbCA9PT0gMCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0bGV2ZWwsXG5cdFx0aGFzQmFzaWM6IHRydWUsXG5cdFx0aGFzMjU2OiBsZXZlbCA+PSAyLFxuXHRcdGhhczE2bTogbGV2ZWwgPj0gM1xuXHR9O1xufVxuXG5mdW5jdGlvbiBzdXBwb3J0c0NvbG9yKGhhdmVTdHJlYW0sIHN0cmVhbUlzVFRZKSB7XG5cdGlmIChmb3JjZUNvbG9yID09PSAwKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRpZiAoaGFzRmxhZygnY29sb3I9MTZtJykgfHxcblx0XHRoYXNGbGFnKCdjb2xvcj1mdWxsJykgfHxcblx0XHRoYXNGbGFnKCdjb2xvcj10cnVlY29sb3InKSkge1xuXHRcdHJldHVybiAzO1xuXHR9XG5cblx0aWYgKGhhc0ZsYWcoJ2NvbG9yPTI1NicpKSB7XG5cdFx0cmV0dXJuIDI7XG5cdH1cblxuXHRpZiAoaGF2ZVN0cmVhbSAmJiAhc3RyZWFtSXNUVFkgJiYgZm9yY2VDb2xvciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRjb25zdCBtaW4gPSBmb3JjZUNvbG9yIHx8IDA7XG5cblx0aWYgKGVudi5URVJNID09PSAnZHVtYicpIHtcblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcblx0XHQvLyBXaW5kb3dzIDEwIGJ1aWxkIDEwNTg2IGlzIHRoZSBmaXJzdCBXaW5kb3dzIHJlbGVhc2UgdGhhdCBzdXBwb3J0cyAyNTYgY29sb3JzLlxuXHRcdC8vIFdpbmRvd3MgMTAgYnVpbGQgMTQ5MzEgaXMgdGhlIGZpcnN0IHJlbGVhc2UgdGhhdCBzdXBwb3J0cyAxNm0vVHJ1ZUNvbG9yLlxuXHRcdGNvbnN0IG9zUmVsZWFzZSA9IG9zLnJlbGVhc2UoKS5zcGxpdCgnLicpO1xuXHRcdGlmIChcblx0XHRcdE51bWJlcihvc1JlbGVhc2VbMF0pID49IDEwICYmXG5cdFx0XHROdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxMDU4NlxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIE51bWJlcihvc1JlbGVhc2VbMl0pID49IDE0OTMxID8gMyA6IDI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRpZiAoJ0NJJyBpbiBlbnYpIHtcblx0XHRpZiAoWydUUkFWSVMnLCAnQ0lSQ0xFQ0knLCAnQVBQVkVZT1InLCAnR0lUTEFCX0NJJywgJ0dJVEhVQl9BQ1RJT05TJywgJ0JVSUxES0lURSddLnNvbWUoc2lnbiA9PiBzaWduIGluIGVudikgfHwgZW52LkNJX05BTUUgPT09ICdjb2Rlc2hpcCcpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH1cblxuXHRcdHJldHVybiBtaW47XG5cdH1cblxuXHRpZiAoJ1RFQU1DSVRZX1ZFUlNJT04nIGluIGVudikge1xuXHRcdHJldHVybiAvXig5XFwuKDAqWzEtOV1cXGQqKVxcLnxcXGR7Mix9XFwuKS8udGVzdChlbnYuVEVBTUNJVFlfVkVSU0lPTikgPyAxIDogMDtcblx0fVxuXG5cdGlmIChlbnYuQ09MT1JURVJNID09PSAndHJ1ZWNvbG9yJykge1xuXHRcdHJldHVybiAzO1xuXHR9XG5cblx0aWYgKCdURVJNX1BST0dSQU0nIGluIGVudikge1xuXHRcdGNvbnN0IHZlcnNpb24gPSBwYXJzZUludCgoZW52LlRFUk1fUFJPR1JBTV9WRVJTSU9OIHx8ICcnKS5zcGxpdCgnLicpWzBdLCAxMCk7XG5cblx0XHRzd2l0Y2ggKGVudi5URVJNX1BST0dSQU0pIHtcblx0XHRcdGNhc2UgJ2lUZXJtLmFwcCc6XG5cdFx0XHRcdHJldHVybiB2ZXJzaW9uID49IDMgPyAzIDogMjtcblx0XHRcdGNhc2UgJ0FwcGxlX1Rlcm1pbmFsJzpcblx0XHRcdFx0cmV0dXJuIDI7XG5cdFx0XHQvLyBObyBkZWZhdWx0XG5cdFx0fVxuXHR9XG5cblx0aWYgKC8tMjU2KGNvbG9yKT8kL2kudGVzdChlbnYuVEVSTSkpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdGlmICgvXnNjcmVlbnxeeHRlcm18XnZ0MTAwfF52dDIyMHxecnh2dHxjb2xvcnxhbnNpfGN5Z3dpbnxsaW51eC9pLnRlc3QoZW52LlRFUk0pKSB7XG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRpZiAoJ0NPTE9SVEVSTScgaW4gZW52KSB7XG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRyZXR1cm4gbWluO1xufVxuXG5mdW5jdGlvbiBnZXRTdXBwb3J0TGV2ZWwoc3RyZWFtKSB7XG5cdGNvbnN0IGxldmVsID0gc3VwcG9ydHNDb2xvcihzdHJlYW0sIHN0cmVhbSAmJiBzdHJlYW0uaXNUVFkpO1xuXHRyZXR1cm4gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0c3VwcG9ydHNDb2xvcjogZ2V0U3VwcG9ydExldmVsLFxuXHRzdGRvdXQ6IHRyYW5zbGF0ZUxldmVsKHN1cHBvcnRzQ29sb3IodHJ1ZSwgdHR5LmlzYXR0eSgxKSkpLFxuXHRzdGRlcnI6IHRyYW5zbGF0ZUxldmVsKHN1cHBvcnRzQ29sb3IodHJ1ZSwgdHR5LmlzYXR0eSgyKSkpXG59O1xuIl0sIm5hbWVzIjpbIm9zIiwicmVxdWlyZSIsInR0eSIsImhhc0ZsYWciLCJlbnYiLCJwcm9jZXNzIiwiZm9yY2VDb2xvciIsIkZPUkNFX0NPTE9SIiwibGVuZ3RoIiwiTWF0aCIsIm1pbiIsInBhcnNlSW50IiwidHJhbnNsYXRlTGV2ZWwiLCJsZXZlbCIsImhhc0Jhc2ljIiwiaGFzMjU2IiwiaGFzMTZtIiwic3VwcG9ydHNDb2xvciIsImhhdmVTdHJlYW0iLCJzdHJlYW1Jc1RUWSIsInVuZGVmaW5lZCIsIlRFUk0iLCJwbGF0Zm9ybSIsIm9zUmVsZWFzZSIsInJlbGVhc2UiLCJzcGxpdCIsIk51bWJlciIsInNvbWUiLCJzaWduIiwiQ0lfTkFNRSIsInRlc3QiLCJURUFNQ0lUWV9WRVJTSU9OIiwiQ09MT1JURVJNIiwidmVyc2lvbiIsIlRFUk1fUFJPR1JBTV9WRVJTSU9OIiwiVEVSTV9QUk9HUkFNIiwiZ2V0U3VwcG9ydExldmVsIiwic3RyZWFtIiwiaXNUVFkiLCJtb2R1bGUiLCJleHBvcnRzIiwic3Rkb3V0IiwiaXNhdHR5Iiwic3RkZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/supports-color/index.js\n");

/***/ })

};
;