const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "25414317020";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_15_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI2LFxuICAgICAgICA5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNixcbiAgICAgICAgNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzLFxuICAgICAgICA2LFxuICAgICAgICA2MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MSxcbiAgICAgICAgODksXG4gICAgICAgIDI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODMsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAyNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NixcbiAgICAgICAgOTksXG4gICAgICAgIDc1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NixcbiAgICAgICAgODMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMyxcbiAgICAgICAgNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDc3LFxuICAgICAgICAxODQsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibVNPelZRWllkUmdKekoyZkwwRUhtTlM2UmxxNDVVaHFPbG5hcjJvUUx5RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieks2Qm92TFBRNnU1YWdQR0xoU3R2QVwiLFxuICBcInBob25lSWRcIjogXCJkMzQ4YTUyZS02MmI5LTQ4MDEtYjdmNC1jNmZmMDg2NGQzZjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgNzIsXG4gICAgICA4NSxcbiAgICAgIDE5MyxcbiAgICAgIDEyLFxuICAgICAgNTksXG4gICAgICAxMjAsXG4gICAgICAxNzMsXG4gICAgICAxOTcsXG4gICAgICAxMjYsXG4gICAgICAyMSxcbiAgICAgIDIwOCxcbiAgICAgIDEzMCxcbiAgICAgIDkwLFxuICAgICAgMjExLFxuICAgICAgMjUsXG4gICAgICAzMyxcbiAgICAgIDIsXG4gICAgICA0OCxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQsXG4gICAgICAxMDUsXG4gICAgICAxNDYsXG4gICAgICAxMzAsXG4gICAgICAxMTMsXG4gICAgICAxODEsXG4gICAgICA4NixcbiAgICAgIDY2LFxuICAgICAgOTEsXG4gICAgICAxMDQsXG4gICAgICAyMTcsXG4gICAgICAxNTQsXG4gICAgICA3MixcbiAgICAgIDI1LFxuICAgICAgMjMwLFxuICAgICAgMTk4LFxuICAgICAgODcsXG4gICAgICA1NixcbiAgICAgIDM4LFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNYjB2QU1RNDhmdXN3WVlCU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIndKTzd1R0wvMnYxcGxaOUxNcWEvMGJqSnVsRlBLc01BTEtZUXR1Kzh2V1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV1MyQUFuYWNEdU1lWTJPNHhUQnZxOEFGSVcyVXpSVXA1NGhjMGZtempwOTRwbjgwT3pSTUEyZEl6djBqQXI3ck9kSlpYZ3hNWW9BTWtvZFQybUJlRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid2xiMlh3ZGFtUHE3QXpGai8yZkVUeE9lSXRjdytIM2hjWkpTRVF5YjY1UzZzcUViVGcvT3dhY0F0UzhBUFpZMmlKRmVRMTcveEpPcFNHcmZGa05kaXc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MTQzMTcwMjA6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExOTE0NDIzODUzMTIzOjMxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzE0MzE3MDIwOjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkzNzg5MTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBQlFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFCUC5qc29uIjogIntcImtleURhdGFcIjpcIllyR2t2SFF2NElSbUJabzNobjBMUk52V25yU0M0V1NabWw0cUEvYzJMMjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzI4OTQxNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5Mjk0NjYwMzA0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQUJRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL09KWWh6SjgyNzZqalpqVXk1cW9USFBOSWxhQll5RlBxaUcyRmlVdG1CMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3Mjg5NDE0LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFCUi5qc29uIjogIntcImtleURhdGFcIjpcIkpnbVdvODNibDRNdURkRGJGRTYxWkNUOXdZTnoyMVptelljcGlwOFcvckU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzI4OTQxNCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "PAC-MAN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
