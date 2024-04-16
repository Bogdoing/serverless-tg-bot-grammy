"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
require('dotenv').config();
const token = process.env.BOT_TOKEN;
if (!token)
    throw new Error("BOT_TOKEN is unset");
const bot = new grammy_1.Bot(token);
bot.command("start", async (ctx) => {
    ctx.reply("Got another message! /start");
});
bot.command("test", async (ctx) => {
    ctx.reply("Got another message! /test");
});
bot.on("message", (ctx) => {
    const message = ctx.message; // the message object
    ctx.reply((message === null || message === void 0 ? void 0 : message.text) + '');
});
bot.start();
// export const config = {
//     runtime: "edge",
// };
exports.default = (0, grammy_1.webhookCallback)(bot, "std/http");
