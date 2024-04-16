"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const grammy_1 = require("grammy");
require('dotenv').config();
const token = process.env.BOT_TOKEN;
if (!token)
    throw new Error("BOT_TOKEN is unset");
// const bot = new Bot(token);
const bot = new grammy_1.Bot(token, {
    client: {
        // We accept the drawback of webhook replies for typing status.
        canUseWebhookReply: (method) => method === "start",
    },
});
bot.command("start", async (ctx) => {
    ctx.reply("Got another message! /start");
});
bot.command("test", async (ctx) => {
    ctx.reply("Got another message! /test");
});
bot.on("message", async (ctx) => {
    const message = ctx.message;
    ctx.reply((message === null || message === void 0 ? void 0 : message.text) + '');
});
exports.config = {
    runtime: "edge",
};
exports.default = (0, grammy_1.webhookCallback)(bot, "std/http");
// bot.start();
// export default bot
