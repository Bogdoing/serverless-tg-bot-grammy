import { bot } from '../src/bot.mjs'

// const {
//     VERCEL_URL: host,
//     // set your webhook address or use default Vercel deployment url
//     WEBHOOK: webhook = `https://${host}/api/webhook`,
// } = process.env

const host    = process.env.VERCEL_URL || ''
const webhook = process.env.WEBHOOK    || 'https://80/api/webhook'

void bot.api.setWebhook(webhook)