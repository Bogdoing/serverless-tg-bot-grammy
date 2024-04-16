import { Bot } from "grammy";

require('dotenv').config();

const token = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN is unset");

const bot = new Bot(token);

bot.command(
  "start",
  (ctx) => ctx.reply("I'm running on Heroku using long polling!"),
);

bot.start();