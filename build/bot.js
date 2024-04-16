"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const grammy_1 = require("grammy");
require('dotenv').config();
const token = process.env.BOT_TOKEN;
if (!token)
    throw new Error("BOT_TOKEN is unset");
const bot = new grammy_1.Bot(token);
bot.on("message", (ctx) => ctx.reply("Got another message!"));
// console.log('start bot')
bot.start();
exports.config = {
    runtime: "edge",
};
exports.default = (0, grammy_1.webhookCallback)(bot, "std/http");
