"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const grammy_1 = require("grammy");
require('dotenv').config();
const token = process.env.BOT_TOKEN;
if (!token)
    throw new Error("BOT_TOKEN is unset");
exports.bot = new grammy_1.Bot(token);
exports.bot.command("start", async (ctx) => {
    ctx.reply("Got another message! /start");
});
exports.bot.command("test", async (ctx) => {
    ctx.reply("Got another message! /test");
});
exports.bot.on("message", async (ctx) => {
    const message = ctx.message;
    ctx.reply((message === null || message === void 0 ? void 0 : message.text) + '');
});
exports.bot.start();
