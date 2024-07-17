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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_15_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDcwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NyxcbiAgICAgICAgODcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDQwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDM3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDg3LFxuICAgICAgICAyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDk4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0LFxuICAgICAgICAzMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MixcbiAgICAgICAgMjMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwLFxuICAgICAgICAzOCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk4LFxuICAgICAgICA3MixcbiAgICAgICAgNDYsXG4gICAgICAgIDExLFxuICAgICAgICA4NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjExLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODcsXG4gICAgICAgIDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDUxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc0LFxuICAgICAgICA2NixcbiAgICAgICAgMjA5LFxuICAgICAgICA1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0YWtDY3FvanBjc2x4eGc0RERDYUhQTHBTMzNBeDgvWTFQeXlJbi9UT2VzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNjA0NTA0MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlCM0FDQ0UyM0UwREFDMkUxMjBGNTE5NUQ5MTk0M0MxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTIyNTcxM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNjA0NTA0MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZGRjFCNTQ4MDI4NjM5Njk1ODA2MEExQzk4RTFCMUU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTIyNTcxNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEbnpVMi14UlIwZUFEX1J2alZ1REpnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU2NzkzYTA5LWVmMmYtNDYwZC1hMGJkLTNiZmRjYzFkMWFiZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0LFxuICAgICAgMTkzLFxuICAgICAgMTk3LFxuICAgICAgMjExLFxuICAgICAgMTExLFxuICAgICAgODYsXG4gICAgICAxMDEsXG4gICAgICAxMjEsXG4gICAgICAxNDUsXG4gICAgICAyNSxcbiAgICAgIDU1LFxuICAgICAgNTgsXG4gICAgICAxMjksXG4gICAgICAxMjgsXG4gICAgICAxOTEsXG4gICAgICA5NyxcbiAgICAgIDUzLFxuICAgICAgMjAyLFxuICAgICAgMTIwLFxuICAgICAgMTk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NyxcbiAgICAgIDIyNCxcbiAgICAgIDIwNSxcbiAgICAgIDIyOCxcbiAgICAgIDU1LFxuICAgICAgMTg0LFxuICAgICAgMjQ1LFxuICAgICAgMTAyLFxuICAgICAgMTEwLFxuICAgICAgNjAsXG4gICAgICA5MCxcbiAgICAgIDE3NSxcbiAgICAgIDk0LFxuICAgICAgMjUwLFxuICAgICAgMjA5LFxuICAgICAgMTc5LFxuICAgICAgMTExLFxuICAgICAgNjgsXG4gICAgICAxNTcsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFo0OERNUlpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjA0NTA0MDQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU3NTY5MjIyMzM2NTI2OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkhNanFVR0VPZWozN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3TGtpTFhIQWlwVGlYSjQvZENGN3lOTjZkb08yK3pEcktzUVQ0RURiTG53PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjd3V29wNUxrK1RjVjhJSXZJakFLRm9adkxBNnN1UiswWE10YzY1VmtGMi96VVFPdHdpSmhZYTNmanZaT3dvTHlkSTZRTnNISEFMeHErT1ZDaHFrcENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInIwTS8zeUF4cEdsSXo0Rlo0NE5yN2p4SFBHcUdpNlI5cnNRc1E5R0pzM1JQM0xxZElYeWdQdTc3NEMzeFc4amo5OGVuUHZ2Vlo1MVl1T25KZXhkWmlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjA0NTA0MDQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjI1NzA3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS28wXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLbzAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZK0x4NC8xYnlXQ3RWSWtYRUpyS1hsTVhLZ0FJSGJpNXZ3Q0JNRTVrdzNRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2ODg0NDY0ODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTIyNTcwODk2MFwifSIKfQ=="  // PUT your SESSION_ID 


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
