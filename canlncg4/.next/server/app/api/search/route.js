"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/search/route";
exports.ids = ["app/api/search/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.ts&appDir=C%3A%5CUsers%5Canmol%5CDocuments%5CGitHub%5Ccanlncg4%5Ccanlncg4%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Canmol%5CDocuments%5CGitHub%5Ccanlncg4%5Ccanlncg4&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.ts&appDir=C%3A%5CUsers%5Canmol%5CDocuments%5CGitHub%5Ccanlncg4%5Ccanlncg4%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Canmol%5CDocuments%5CGitHub%5Ccanlncg4%5Ccanlncg4&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_anmol_Documents_GitHub_canlncg4_canlncg4_app_api_search_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/search/route.ts */ \"(rsc)/./app/api/search/route.ts\");\n\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n// @ts-expect-error - replaced by webpack/turbopack loader\n\nconst AppRouteRouteModule = next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule;\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/search/route\",\n        pathname: \"/api/search\",\n        filename: \"route\",\n        bundlePath: \"app/api/search/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\anmol\\\\Documents\\\\GitHub\\\\canlncg4\\\\canlncg4\\\\app\\\\api\\\\search\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_anmol_Documents_GitHub_canlncg4_canlncg4_app_api_search_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/search/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZWFyY2glMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNlYXJjaCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNlYXJjaCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNhbm1vbCU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q2NhbmxuY2c0JTVDY2FubG5jZzQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2FubW9sJTVDRG9jdW1lbnRzJTVDR2l0SHViJTVDY2FubG5jZzQlNUNjYW5sbmNnNCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNoRDtBQUMwRjtBQUMzQjtBQUMvRDtBQUNnSDtBQUNoSCw0QkFBNEIsZ0hBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ2lKOztBQUVqSiIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbmxuY2c0Lz9iYTFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvbm9kZS1wb2x5ZmlsbC1oZWFkZXJzXCI7XG4vLyBAdHMtaWdub3JlIHRoaXMgbmVlZCB0byBiZSBpbXBvcnRlZCBmcm9tIG5leHQvZGlzdCB0byBiZSBleHRlcm5hbFxuaW1wb3J0ICogYXMgbW9kdWxlIGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gcmVwbGFjZWQgYnkgd2VicGFjay90dXJib3BhY2sgbG9hZGVyXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcYW5tb2xcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxjYW5sbmNnNFxcXFxjYW5sbmNnNFxcXFxhcHBcXFxcYXBpXFxcXHNlYXJjaFxcXFxyb3V0ZS50c1wiO1xuY29uc3QgQXBwUm91dGVSb3V0ZU1vZHVsZSA9IG1vZHVsZS5BcHBSb3V0ZVJvdXRlTW9kdWxlO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2VhcmNoL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2VhcmNoXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zZWFyY2gvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxhbm1vbFxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXGNhbmxuY2c0XFxcXGNhbmxuY2c0XFxcXGFwcFxcXFxhcGlcXFxcc2VhcmNoXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3NlYXJjaC9yb3V0ZVwiO1xuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.ts&appDir=C%3A%5CUsers%5Canmol%5CDocuments%5CGitHub%5Ccanlncg4%5Ccanlncg4%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Canmol%5CDocuments%5CGitHub%5Ccanlncg4%5Ccanlncg4&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/search/route.ts":
/*!*********************************!*\
  !*** ./app/api/search/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/db */ \"(rsc)/./utils/db.ts\");\n\nconst GET = async (req, res)=>{\n    const url = new URL(req.url);\n    const searchString = url.searchParams.get(\"searchString\");\n    if (!searchString || typeof searchString !== \"string\") {\n        return Response.json({\n            message: \"search term is required and must be a string\"\n        }, {\n            status: 400\n        });\n    } else {\n        const searchQuery = searchString?.toLowerCase();\n        try {\n            const con = await (0,_utils_db__WEBPACK_IMPORTED_MODULE_0__.connect)();\n            const lncrna_names = [];\n            const lncrna_names_result = await con.query(`SELECT DISTINCT lncrna_name FROM lnc_rna WHERE LOWER(lncrna_name) LIKE '%${searchQuery}%'`);\n            for(let i = 0; i < lncrna_names_result.rows.length; i++){\n                lncrna_names.push(lncrna_names_result.rows[i].lncrna_name);\n            }\n            const cancer_names = [];\n            const cancer_names_result = await con.query(`SELECT DISTINCT cancer_name FROM lnc_rna WHERE LOWER(cancer_name) LIKE '%${searchQuery}%'`);\n            for(let i = 0; i < cancer_names_result.rows.length; i++){\n                cancer_names.push(cancer_names_result.rows[i].cancer_name);\n            }\n            const aliases = [];\n            const aliases_result = await con.query(`SELECT DISTINCT alias FROM (SELECT json_array_elements_text(aliases) AS alias FROM lnc_rna) AS extracted_aliases WHERE LOWER(alias) LIKE '%${searchQuery}%'`);\n            for(let i = 0; i < aliases_result.rows.length; i++){\n                aliases.push(aliases_result.rows[i].alias);\n            }\n            await (0,_utils_db__WEBPACK_IMPORTED_MODULE_0__.disconnect)(con);\n            return Response.json({\n                lncrna_names,\n                cancer_names,\n                aliases\n            }, {\n                status: 200\n            });\n        } catch (err) {\n            console.log(err);\n            return Response.json({\n                message: \"internal server error\"\n            }, {\n                status: 500\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NlYXJjaC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFnRDtBQUd6QyxNQUFNRSxNQUFNLE9BQU9DLEtBQXFCQztJQUM3QyxNQUFNQyxNQUFNLElBQUlDLElBQUlILElBQUlFLEdBQUc7SUFDM0IsTUFBTUUsZUFBZUYsSUFBSUcsWUFBWSxDQUFDQyxHQUFHLENBQUM7SUFFMUMsSUFBSSxDQUFDRixnQkFBZ0IsT0FBT0EsaUJBQWlCLFVBQVU7UUFDckQsT0FBT0csU0FBU0MsSUFBSSxDQUNsQjtZQUFFQyxTQUFTO1FBQStDLEdBQzFEO1lBQUVDLFFBQVE7UUFBSTtJQUVsQixPQUFPO1FBQ0wsTUFBTUMsY0FBY1AsY0FBY1E7UUFDbEMsSUFBSTtZQUNGLE1BQU1DLE1BQU0sTUFBTWhCLGtEQUFPQTtZQUV6QixNQUFNaUIsZUFBZSxFQUFFO1lBQ3ZCLE1BQU1DLHNCQUFzQixNQUFNRixJQUFJRyxLQUFLLENBQ3pDLENBQUMseUVBQXlFLEVBQUVMLFlBQVksRUFBRSxDQUFDO1lBRTdGLElBQUssSUFBSU0sSUFBSSxHQUFHQSxJQUFJRixvQkFBb0JHLElBQUksQ0FBQ0MsTUFBTSxFQUFFRixJQUFLO2dCQUN4REgsYUFBYU0sSUFBSSxDQUFDTCxvQkFBb0JHLElBQUksQ0FBQ0QsRUFBRSxDQUFDSSxXQUFXO1lBQzNEO1lBRUEsTUFBTUMsZUFBZSxFQUFFO1lBQ3ZCLE1BQU1DLHNCQUFzQixNQUFNVixJQUFJRyxLQUFLLENBQ3pDLENBQUMseUVBQXlFLEVBQUVMLFlBQVksRUFBRSxDQUFDO1lBRTdGLElBQUssSUFBSU0sSUFBSSxHQUFHQSxJQUFJTSxvQkFBb0JMLElBQUksQ0FBQ0MsTUFBTSxFQUFFRixJQUFLO2dCQUN4REssYUFBYUYsSUFBSSxDQUFDRyxvQkFBb0JMLElBQUksQ0FBQ0QsRUFBRSxDQUFDTyxXQUFXO1lBQzNEO1lBRUEsTUFBTUMsVUFBVSxFQUFFO1lBQ2xCLE1BQU1DLGlCQUFpQixNQUFNYixJQUFJRyxLQUFLLENBQ3BDLENBQUMsMklBQTJJLEVBQUVMLFlBQVksRUFBRSxDQUFDO1lBRS9KLElBQUssSUFBSU0sSUFBSSxHQUFHQSxJQUFJUyxlQUFlUixJQUFJLENBQUNDLE1BQU0sRUFBRUYsSUFBSztnQkFDbkRRLFFBQVFMLElBQUksQ0FBQ00sZUFBZVIsSUFBSSxDQUFDRCxFQUFFLENBQUNVLEtBQUs7WUFDM0M7WUFFQSxNQUFNN0IscURBQVVBLENBQUNlO1lBQ2pCLE9BQU9OLFNBQVNDLElBQUksQ0FDbEI7Z0JBQUVNO2dCQUFjUTtnQkFBY0c7WUFBUSxHQUN0QztnQkFBRWYsUUFBUTtZQUFJO1FBRWxCLEVBQUUsT0FBT2tCLEtBQUs7WUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaLE9BQU9yQixTQUFTQyxJQUFJLENBQ2xCO2dCQUFFQyxTQUFTO1lBQXdCLEdBQ25DO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW5sbmNnNC8uL2FwcC9hcGkvc2VhcmNoL3JvdXRlLnRzPzc4MzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgZGlzY29ubmVjdCB9IGZyb20gXCJAdXRpbHMvZGJcIjtcclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVQgPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcS51cmwhKTtcclxuICBjb25zdCBzZWFyY2hTdHJpbmcgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInNlYXJjaFN0cmluZ1wiKTtcclxuXHJcbiAgaWYgKCFzZWFyY2hTdHJpbmcgfHwgdHlwZW9mIHNlYXJjaFN0cmluZyAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgbWVzc2FnZTogXCJzZWFyY2ggdGVybSBpcyByZXF1aXJlZCBhbmQgbXVzdCBiZSBhIHN0cmluZ1wiIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSBzZWFyY2hTdHJpbmc/LnRvTG93ZXJDYXNlKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjb24gPSBhd2FpdCBjb25uZWN0KCk7XHJcblxyXG4gICAgICBjb25zdCBsbmNybmFfbmFtZXMgPSBbXTtcclxuICAgICAgY29uc3QgbG5jcm5hX25hbWVzX3Jlc3VsdCA9IGF3YWl0IGNvbi5xdWVyeShcclxuICAgICAgICBgU0VMRUNUIERJU1RJTkNUIGxuY3JuYV9uYW1lIEZST00gbG5jX3JuYSBXSEVSRSBMT1dFUihsbmNybmFfbmFtZSkgTElLRSAnJSR7c2VhcmNoUXVlcnl9JSdgXHJcbiAgICAgICk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG5jcm5hX25hbWVzX3Jlc3VsdC5yb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbG5jcm5hX25hbWVzLnB1c2gobG5jcm5hX25hbWVzX3Jlc3VsdC5yb3dzW2ldLmxuY3JuYV9uYW1lKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY2FuY2VyX25hbWVzID0gW107XHJcbiAgICAgIGNvbnN0IGNhbmNlcl9uYW1lc19yZXN1bHQgPSBhd2FpdCBjb24ucXVlcnkoXHJcbiAgICAgICAgYFNFTEVDVCBESVNUSU5DVCBjYW5jZXJfbmFtZSBGUk9NIGxuY19ybmEgV0hFUkUgTE9XRVIoY2FuY2VyX25hbWUpIExJS0UgJyUke3NlYXJjaFF1ZXJ5fSUnYFxyXG4gICAgICApO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbmNlcl9uYW1lc19yZXN1bHQucm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNhbmNlcl9uYW1lcy5wdXNoKGNhbmNlcl9uYW1lc19yZXN1bHQucm93c1tpXS5jYW5jZXJfbmFtZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGFsaWFzZXMgPSBbXTtcclxuICAgICAgY29uc3QgYWxpYXNlc19yZXN1bHQgPSBhd2FpdCBjb24ucXVlcnkoXHJcbiAgICAgICAgYFNFTEVDVCBESVNUSU5DVCBhbGlhcyBGUk9NIChTRUxFQ1QganNvbl9hcnJheV9lbGVtZW50c190ZXh0KGFsaWFzZXMpIEFTIGFsaWFzIEZST00gbG5jX3JuYSkgQVMgZXh0cmFjdGVkX2FsaWFzZXMgV0hFUkUgTE9XRVIoYWxpYXMpIExJS0UgJyUke3NlYXJjaFF1ZXJ5fSUnYFxyXG4gICAgICApO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsaWFzZXNfcmVzdWx0LnJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBhbGlhc2VzLnB1c2goYWxpYXNlc19yZXN1bHQucm93c1tpXS5hbGlhcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGF3YWl0IGRpc2Nvbm5lY3QoY29uKTtcclxuICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBsbmNybmFfbmFtZXMsIGNhbmNlcl9uYW1lcywgYWxpYXNlcyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiAyMDAgfVxyXG4gICAgICApO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgbWVzc2FnZTogXCJpbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJkaXNjb25uZWN0IiwiR0VUIiwicmVxIiwicmVzIiwidXJsIiwiVVJMIiwic2VhcmNoU3RyaW5nIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiUmVzcG9uc2UiLCJqc29uIiwibWVzc2FnZSIsInN0YXR1cyIsInNlYXJjaFF1ZXJ5IiwidG9Mb3dlckNhc2UiLCJjb24iLCJsbmNybmFfbmFtZXMiLCJsbmNybmFfbmFtZXNfcmVzdWx0IiwicXVlcnkiLCJpIiwicm93cyIsImxlbmd0aCIsInB1c2giLCJsbmNybmFfbmFtZSIsImNhbmNlcl9uYW1lcyIsImNhbmNlcl9uYW1lc19yZXN1bHQiLCJjYW5jZXJfbmFtZSIsImFsaWFzZXMiLCJhbGlhc2VzX3Jlc3VsdCIsImFsaWFzIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/search/route.ts\n");

/***/ }),

/***/ "(rsc)/./utils/db.ts":
/*!*********************!*\
  !*** ./utils/db.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connect: () => (/* binding */ connect),\n/* harmony export */   disconnect: () => (/* binding */ disconnect)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connect = async ()=>{\n    const con = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n        user: process.env.PGSQL_USER,\n        password: process.env.PGSQL_PASSWORD,\n        host: process.env.PGSQL_HOST,\n        port: parseInt(process.env.PGSQL_PORT),\n        database: process.env.PGSQL_DATABASE\n    });\n    return con;\n};\nconst disconnect = async (con)=>{\n    await con.end();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBRW5CLE1BQU1DLFVBQVU7SUFDckIsTUFBTUMsTUFBTSxJQUFJRixvQ0FBSUEsQ0FBQztRQUNuQkcsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO1FBQzVCQyxVQUFVSCxRQUFRQyxHQUFHLENBQUNHLGNBQWM7UUFDcENDLE1BQU1MLFFBQVFDLEdBQUcsQ0FBQ0ssVUFBVTtRQUM1QkMsTUFBTUMsU0FBU1IsUUFBUUMsR0FBRyxDQUFDUSxVQUFVO1FBQ3JDQyxVQUFVVixRQUFRQyxHQUFHLENBQUNVLGNBQWM7SUFDdEM7SUFFQSxPQUFPYjtBQUNULEVBQUU7QUFFSyxNQUFNYyxhQUFhLE9BQU9kO0lBQy9CLE1BQU1BLElBQUllLEdBQUc7QUFDZixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FubG5jZzQvLi91dGlscy9kYi50cz9jZDdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvb2wgfSBmcm9tIFwicGdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGNvbiA9IG5ldyBQb29sKHtcclxuICAgIHVzZXI6IHByb2Nlc3MuZW52LlBHU1FMX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUEdTUUxfUEFTU1dPUkQsXHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5QR1NRTF9IT1NULFxyXG4gICAgcG9ydDogcGFyc2VJbnQocHJvY2Vzcy5lbnYuUEdTUUxfUE9SVCEpLFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LlBHU1FMX0RBVEFCQVNFLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY29uO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRpc2Nvbm5lY3QgPSBhc3luYyAoY29uOiBQb29sKSA9PiB7XHJcbiAgYXdhaXQgY29uLmVuZCgpO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUG9vbCIsImNvbm5lY3QiLCJjb24iLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIlBHU1FMX1VTRVIiLCJwYXNzd29yZCIsIlBHU1FMX1BBU1NXT1JEIiwiaG9zdCIsIlBHU1FMX0hPU1QiLCJwb3J0IiwicGFyc2VJbnQiLCJQR1NRTF9QT1JUIiwiZGF0YWJhc2UiLCJQR1NRTF9EQVRBQkFTRSIsImRpc2Nvbm5lY3QiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./utils/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.ts&appDir=C%3A%5CUsers%5Canmol%5CDocuments%5CGitHub%5Ccanlncg4%5Ccanlncg4%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Canmol%5CDocuments%5CGitHub%5Ccanlncg4%5Ccanlncg4&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();