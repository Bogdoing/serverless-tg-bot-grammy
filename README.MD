# Настройка Webhook

### Подключение приложения Vercel к Telegram

https://api.telegram.org/bot<BOT_TOKEN>/setWebhook?url=<HOST_URL>

Н-р:
https://api.telegram.org/bot9999999999:AAАААААААААААААААААААААААААААААААА/setWebhook?url=https://serverless-bot.vercel.app/api/bot

---

### Настройка HOST_URL

Это HOST_URL немного сложно, потому что вам нужно использовать свой домен приложения Vercel, следуя маршруту к коду бота, 
например https://appname.vercel.app/api/bot. 
Где bot имеется в виду ваш bot.ts или bot.js файл.

### Корректный ответ

{
  "ok": true,
  "result": true,
  "description": "Webhook was set"
}