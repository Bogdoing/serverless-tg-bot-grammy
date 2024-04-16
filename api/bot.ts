import { Bot, webhookCallback } from "grammy";

require('dotenv').config();

const token = process.env.BOT_TOKEN;

if (!token) throw new Error("BOT_TOKEN is unset");

const bot = new Bot(token);

bot.on("message", (ctx) => ctx.reply("Got another message!"));
// console.log('start bot')
// bot.start();

export const config = {
    runtime: "edge",
};
export default webhookCallback(bot, "std/http");
