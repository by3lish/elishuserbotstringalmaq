// Ｅｌｉｓｈ Ｕｓｅｒｂｏｔ

const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const logger = require("../logger");

const client = new Client({
  puppeteer: { headless: true, args: ["--no-sandbox"] },
});
client.initialize();

client.on("qr", (qr) => {
  console.log(`QR Kodu WhatsApp Web ilə Skanlayın`);
  qrcode.generate(qr, { small: true });
});

var token = "";

client.on("authenticated", (session) => {
  token = session;
});

client.on("ready", async () => {

  await logger(client,"```Sizin Stringiniz. Zəhmət olmasa bunu gizli saxlayın. Əgər bir daha ehtiyacınız olmayacaqsa onu silə bilərsiniz```\n\n🔱 Ｅｌｉｓｈ Ｕｓｅｒｂｏｔ 🔱");
  await logger(client, JSON.stringify(token));

  console.log(
    "\n\nWhatsApp açın və söhbətə daxil olun, Sizin Stringiniz orada qeyd edilmişdir"
  );

  setTimeout(() => {
    process.exit();
  }, 5000);
});
