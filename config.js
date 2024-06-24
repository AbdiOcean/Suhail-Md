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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_15_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NixcbiAgICAgICAgMTcxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM2LFxuICAgICAgICA3MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgOSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzLFxuICAgICAgICA5NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk0LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgNjIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTksXG4gICAgICAgIDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNixcbiAgICAgICAgOTMsXG4gICAgICAgIDQxLFxuICAgICAgICA0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDU0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU5LFxuICAgICAgICA2MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQwLFxuICAgICAgICA5MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDg5LFxuICAgICAgICA5OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDcwLFxuICAgICAgICAzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDMzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzksXG4gICAgICAgIDE4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZOXVBbXJLU0ZGeFQwZ2FUcmJXNGxLVlVoZ0NUa1VoYmd1VFZOOTU0Rkd3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcxNDMxNzAyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTAyRkExMDM2NzY3RjgxMzFEMTlCNTBGM0UzNTA2QkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MjI0MTM5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIncwVTltM3Y2UjQ2S3Zad3dHRlBCZUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTZmZTg4YjAtZGU3My00YjJmLTk0NjctNzFkMTQ4NGU5MWYxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDc1LFxuICAgICAgMTMyLFxuICAgICAgMTQ5LFxuICAgICAgNyxcbiAgICAgIDYxLFxuICAgICAgMjE1LFxuICAgICAgMjAxLFxuICAgICAgMTcwLFxuICAgICAgOTQsXG4gICAgICA1MyxcbiAgICAgIDI0OSxcbiAgICAgIDI2LFxuICAgICAgMTM2LFxuICAgICAgNSxcbiAgICAgIDc2LFxuICAgICAgMTQ5LFxuICAgICAgNzcsXG4gICAgICAyMDUsXG4gICAgICAyMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYwLFxuICAgICAgMjU0LFxuICAgICAgMjQ2LFxuICAgICAgMjMxLFxuICAgICAgMTc3LFxuICAgICAgMjQxLFxuICAgICAgMTg3LFxuICAgICAgNjAsXG4gICAgICA1MSxcbiAgICAgIDE1MCxcbiAgICAgIDIxNCxcbiAgICAgIDI1MixcbiAgICAgIDU1LFxuICAgICAgMTAwLFxuICAgICAgMzEsXG4gICAgICAwLFxuICAgICAgOTcsXG4gICAgICAyOSxcbiAgICAgIDI0MixcbiAgICAgIDE5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01YMHZBTVF2NDdsc3dZWUJ5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid0pPN3VHTC8ydjFwbFo5TE1xYS8wYmpKdWxGUEtzTUFMS1lRdHUrOHZXWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNVUhBandvZktlSG1hZmJQRW5CLy96OVpwTERVbXRKRVVzaCtkdVY5TzNOYlRCdDA5N01FU3ZhSTNVSTRYSlRlK0VRSHBhVklpazVQakx6cmMyZ3ZEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxdUkwWmxydVhrOUZSOWNRM2libG5ld3JXMUZ4UldyR0RFMkFHeDhQV2V3RnVRZE51WDZJNkVQZ3FMSXVuWCs1RU84RCtkcnJCbk42WmovZFY2Y2xodz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxNDMxNzAyMDoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE5MTQ0MjM4NTMxMjM6MjJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MTQzMTcwMjA6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTIyNDEzMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtTT1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1NPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUk40WG81VmsvbTAwV2s5M0VJSE1NS2ovOC9TQTVPbkhkeDNRdk5LWVR5WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3Mjg5NDEzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTAwMDM2ODQyMDhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLU1AuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiUndYelFpTHc0NFlOQWlNKzhoYlk2Y3JqbE94TEpoVXhZR0lBb3FYMnhRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcyODk0MTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjYwMzUwNjUxNFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtTUS5qc29uIjogIntcImtleURhdGFcIjpcIngzWG45Q0k2bEloL2dIdVQrZkgzK2JSR0VZQlRvUXFLUThzdi9ZRm5HOGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzI4OTQxMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1NSLmpzb24iOiAie1wia2V5RGF0YVwiOlwiT2hCTTB2L2NpSTZ1TFFRQkhXdkloUnJLK0NMQ0hIWGUvQ2gzd1A0VDlYUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3Mjg5NDEzLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjg4NTYxOTQzOVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtTUy5qc29uIjogIntcImtleURhdGFcIjpcIkR2bVBsZG5hUU1zQXdKV1hRSjJUYnFnMjhQeFRvL00rY05idmhJbGIzK3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzI4OTQxMyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1NULmpzb24iOiAie1wia2V5RGF0YVwiOlwiRmpWekJYM1RieXBPaWJZM2dvSUZPcnBNRHEramtVWnNsU1d3OGxwMW5oUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3Mjg5NDEzLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCw0LDVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtTVS5qc29uIjogIntcImtleURhdGFcIjpcIkJXNmxxMnlzLzFTQXhRWlVVOXN1Wk9sSlB5RjlLNGIwbnBvcWNhcnFVMDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzI4OTQxMyxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
