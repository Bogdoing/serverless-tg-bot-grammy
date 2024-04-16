import { Bot } from 'grammy'
import "dotenv/config.js";
//require('dotenv').config()

const token = process.env.BOT_TOKEN


// Set your token in the vercel environment variable
export const bot = new Bot(token)

// attach all middleware
bot.on('message', async ctx => {
    await ctx.reply('Hi there!')
})

// bot.start()