

---

# **Selfbot with Web-based RPC Maker (Termux Edition)**  
🚀 A **Discord selfbot** with a web interface to update **Rich Presence (RPC)** easily on **Termux**!  

---

## ⚠ **Disclaimer**  
> **This selfbot is for educational and personal use only.**  
> Selfbots violate Discord’s **Terms of Service (ToS)**, and using them **may result in account termination**.  
> The owner of this project is **not responsible** for any misuse or harm caused by this bot.  

---

## 📌 **Features**  
- 🔹 **Discord Rich Presence Maker** (RPC)  
- 🔹 **Web Interface** to update status  
- 🔹 **Customizable activity types** (Streaming, Playing, Listening, Watching)  
- 🔹 **Minimal & Modern UI**  
- 🔹 **Fast and lightweight**  
- 🔹 **Real-time console logs**  
- 🔹 **More commands… and many more!**  

---

## 🛠 **Installation (Termux Only)**  
### **1️⃣ Install Required Packages**  
Make sure you have **Node.js** installed on Termux:  

```bash
pkg update && pkg upgrade -y
pkg install nodejs git -y
```

### **2️⃣ Clone the Repository**  
```bash
git clone https://github.com/devrock07/RockV3-Selfbot.git
cd RockV3-Selfbot
```
> If you don’t have Git, download the ZIP from GitHub manually, extract it, and navigate to the folder.  

### **3️⃣ Install Dependencies**  
```bash
npm install
```

### **4️⃣ Configure the Selfbot**  
1. **Rename** `.env.example` to `.env`:  
   ```bash
   mv .env.example .env
   ```
2. Open `.env` and enter your **Discord token** and other required details:  
   ```bash
   nano .env
   ```
   **Example:**
   ```
   DISCORD_TOKEN=your_discord_token_here
   ```
   ⚠ **Do NOT share your token!**  

### **5️⃣ Start the Selfbot**  
```bash
node index.js
```
Your selfbot is now running! ✅  

---

## 🌐 **Web Interface** (RPC Maker)  
The **web-based RPC Maker** allows you to update your Discord status easily.  

### **1️⃣ Start the Web Server**  
```bash
node webServer.js
```

### **2️⃣ Open in Browser**  
Go to **`http://localhost:3000`** in your **mobile browser** to customize your status! 🚀  

---

## 🎮 **Commands**  
```bash
| Command      | Description                     |
|-------------|---------------------------------|
| `!rpc`      | Open RPC Maker from Discord    |
| `!status`   | Show current status            |
| `!clear`    | Clear console logs             |
| `!userinfo` | Get user info                   |
| `!serverinfo` | Get server info               |
| `!avatar`   | Fetch user's avatar            |
| `!help`     | Show all commands              |
| ... and many more! |
```

---

## 🔧 **Configuration**  
- Customize the **RPC Maker** UI in `public/styles.css`.  
- Modify web server logic in `webServer.js`.  
- Add more commands in `commands/` folder.  

---

## 📜 **License**  
This project is **for educational purposes only**.  
Using selfbots on Discord is against ToS—**use at your own risk**.  

---

## 🤝 **Credits**  
Made with ❤️ by **DevRock**  

---

This version is **optimized for Termux**, ensuring all installation and usage steps are compatible. 🚀
