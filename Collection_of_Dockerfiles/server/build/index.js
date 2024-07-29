"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
// 환경 변수 로딩
dotenv_1.default.config();
// app.ts에서 내보낸 app 객체를 가져옵니다.
const app = require('./app');
// CORS 미들웨어 설정
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// 서버 포트 설정
const PORT = process.env.APP_PORT || 3000;
// 서버 시작
app.listen(PORT, () => {
    console.log('Server up and running...');
});
