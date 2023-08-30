"use strict";
exports.id = 398;
exports.ids = [398];
exports.modules = {

/***/ 9398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8017);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4__);





const img = {
    width: "250x",
    height: "150px",
    margin: "20px 0px",
    borderRadius: "20px"
};
class Partprojct2 extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
    state = [
        {
            name: "Portfolio Site",
            disc: "A portfolio website is a concise, online showcase of an individual's or professional's work, skills, and achievements.",
            img: "/rafik.jpg",
            url: "https://chat.openai.com/"
        },
        {
            name: "Covid-19 Site",
            disc: "A web site of Models deployment for COVID-19 detection using transfer learning",
            img: "/img2.png",
            url: ""
        },
        {
            name: "Game of Thrones",
            disc: "A site for the characters of the Game of Thrones series, and you can read a summary of 5 episodes of it ",
            img: "/game.jpg",
            url: ""
        },
        {
            name: "Store application",
            disc: " A WEB application for store management. ",
            img: "/cj.jpg",
            url: ""
        },
        {
            name: "Login",
            disc: "A a model of login page . ",
            img: "/login.jpg",
            url: ""
        },
        {
            name: "rafik1",
            disc: "bbbbbb",
            img: "/hero10.jpg",
            url: ""
        }
    ];
    render() {
        const { items  } = this.state;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                    margin: "0% 16%"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {
                        label: "Projct name",
                        variant: "outlined",
                        size: "small",
                        InputProps: {
                            endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4___default()), {})
                        },
                        sx: {
                            marginBottom: "40px"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        container: true,
                        spacing: 2,
                        children: this.state.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 6,
                                md: 6,
                                sx: {
                                    padding: 0
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: item.url,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                                        elevation: 16,
                                        sx: {
                                            backgroundImage: 'url("/bgp1.jpg")',
                                            borderRadius: "20px"
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            sx: {
                                                display: "flex"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                    sx: {
                                                        margin: "30px 0px 0px 15px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                                            fontWeight: 500,
                                                            sx: {
                                                                margin: "0px 5px",
                                                                color: "white"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                                    children: [
                                                                        " ",
                                                                        item.name
                                                                    ]
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                                            sx: {
                                                                margin: "0px 5px",
                                                                color: "lightgray"
                                                            },
                                                            fontSize: 10,
                                                            children: item.disc
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                    sx: {
                                                        margin: "10px 15px"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: item.img,
                                                        style: img,
                                                        alt: ""
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            }, item.name))
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Partprojct2);


/***/ })

};
;