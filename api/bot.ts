import { Bot, webhookCallback } from "grammy";

require('dotenv').config();

const token = process.env.BOT_TOKEN;

if (!token) throw new Error("BOT_TOKEN is unset");

// const bot = new Bot(token);
const bot = new Bot(token, {
    client: {
      // We accept the drawback of webhook replies for typing status.
      canUseWebhookReply: (method) => method === "start",
    },
  });

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


// export const config = {
//     runtime: "edge",
// };
export default webhookCallback(bot, "std/http");
    
// bot.start();

// export default bot