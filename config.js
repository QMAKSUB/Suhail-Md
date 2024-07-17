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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348060450404";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_01_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDk1LFxuICAgICAgICAyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgwLFxuICAgICAgICA1OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk2LFxuICAgICAgICA0NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMixcbiAgICAgICAgNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA2OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjksXG4gICAgICAgIDQxLFxuICAgICAgICA0NixcbiAgICAgICAgMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA0MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MixcbiAgICAgICAgMjI5LFxuICAgICAgICA3MixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDYwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDcwLFxuICAgICAgICA5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMixcbiAgICAgICAgODgsXG4gICAgICAgIDUzLFxuICAgICAgICA3MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDczLFxuICAgICAgICAzNixcbiAgICAgICAgMTI2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODgsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpQ3Q3RDFVNFYrREhidFRWN3Q4REgrczJFS213d0ZyaXE3YW56Q3dtcjlRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNjA0NTA0MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk3OTk0QTY1RUE0RUY0OTZFMDVGNURBMEM2REJENjUwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTIzMjA4N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNX2RsY0EyTlEwLWhmaGJnbGJFV3l3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjI3NGVlMmE0LTUxMTEtNDdjYS1hNzU4LWIzODdjM2I4YThjY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICAzNyxcbiAgICAgIDIwOCxcbiAgICAgIDIwLFxuICAgICAgMzUsXG4gICAgICAyLFxuICAgICAgNDEsXG4gICAgICA0MSxcbiAgICAgIDM3LFxuICAgICAgMTAwLFxuICAgICAgMjI5LFxuICAgICAgMjUwLFxuICAgICAgMTYyLFxuICAgICAgMjExLFxuICAgICAgMjE2LFxuICAgICAgMTMzLFxuICAgICAgNzAsXG4gICAgICAxNzEsXG4gICAgICA3MyxcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDksXG4gICAgICA0MSxcbiAgICAgIDIzNCxcbiAgICAgIDE5OCxcbiAgICAgIDE0NyxcbiAgICAgIDgsXG4gICAgICA4NSxcbiAgICAgIDUwLFxuICAgICAgOTYsXG4gICAgICAzMixcbiAgICAgIDUxLFxuICAgICAgNDEsXG4gICAgICAxNjEsXG4gICAgICAyNSxcbiAgICAgIDQ3LFxuICAgICAgNzksXG4gICAgICAzNyxcbiAgICAgIDIzNyxcbiAgICAgIDEyMyxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjI0UDNCQzFaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDYwNDUwNDA0OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1NzU2OTIyMjMzNjUyNjoyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIm9sb3llIG11c2liYXVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKSE1qcVVHRU5EVjM3UUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjdMa2lMWEhBaXBUaVhKNC9kQ0Y3eU5ONmRvTzIrekRyS3NRVDRFRGJMbnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicktzV0U4bldYTU5STGFhQXBPOUUzRENiY1BKZWpwd3o0amlqWTBCUzczTGJPMjFJMGQ3dnJ4ZUQ4UlJiaUZYeFB4K0FocUIyQkhxQWJzTlBJTlBaQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZGMrbDk4NGtCczhnd25wNTlUWC9QV1JLYVQraTVTU3R3b213UTZBcXZSbXdKWkZmbVJLd1d5TitHbFc3Nnp6Y2tWQXBTQ3B4clRndEJONDE2Rzg4QUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2MDQ1MDQwNDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyMzIwODMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLbzBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtvMC5qc29uIjogIntcImtleURhdGFcIjpcIlkrTHg0LzFieVdDdFZJa1hFSnJLWGxNWEtnQUlIYmk1dndDQk1FNWt3M1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY4ODQ0NjQ4MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMjI1NzA4OTYwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
