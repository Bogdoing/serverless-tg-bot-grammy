"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
require('dotenv').config();
// const token = process.env.BOT_TOKEN;
const token = "5343977261:AAHalKoXdVAWsqXROOZcxCQ01eHFRNTOuE8";
if (!token)
    throw new Error("BOT_TOKEN is unset");
const bot = new grammy_1.Bot(token);
bot.on("message", (ctx) => console.log('start bot'));
console.log('start bot');
bot.start();
exports.default = (0, grammy_1.webhookCallback)(bot, "std/http");
