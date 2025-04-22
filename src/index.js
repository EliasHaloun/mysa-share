"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subtitle = exports.Title = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Title = ({ text }) => ((0, jsx_runtime_1.jsx)("h1", { style: { fontFamily: "Font_B", color: 'purple', fontSize: '3rem', textAlign: 'center' }, children: text }));
exports.Title = Title;
const Subtitle = ({ text }) => ((0, jsx_runtime_1.jsx)("h2", { style: { fontFamily: "Font_B", color: 'purple', fontSize: '2rem', textAlign: 'center' }, children: text }));
exports.Subtitle = Subtitle;
