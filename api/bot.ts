import { Bot } from "grammy";

require('dotenv').config();

const token = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN is unset");

export const bot = new Bot(token);


bot.command("start", async (ctx) => {
    ctx.reply("Got another message! /start")
});

bot.command("test", async (ctx) => {
    ctx.reply("Got another message! /test")
});

bot.on("message", async (ctx) => {
    const message = ctx.message;
    ctx.reply(message?.text + '')
});


bot.start();