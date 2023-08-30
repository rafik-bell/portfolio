"use strict";
exports.id = 851;
exports.ids = [851];
exports.modules = {

/***/ 6851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1307);
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8544);
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_node_Box_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9774);
/* harmony import */ var _mui_material_node_Box_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_node_Box_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);






function Navbar() {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState("one");
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_node_Box_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
            sx: {
                margin: "30px auto"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_3___default()), {
                value: value,
                onChange: handleChange,
                centered: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tab__WEBPACK_IMPORTED_MODULE_1___default()), {
                        label: "Home",
                        href: "/"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tab__WEBPACK_IMPORTED_MODULE_1___default()), {
                        label: "About",
                        href: "/about"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tab__WEBPACK_IMPORTED_MODULE_1___default()), {
                        label: "Projrcts",
                        href: "/projct"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tab__WEBPACK_IMPORTED_MODULE_1___default()), {
                        label: "contact",
                        href: "/contact"
                    })
                ]
            })
        })
    });
};


/***/ })

};
;