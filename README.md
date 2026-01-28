# 🤖 Simple WhatsApp Bot

This is a simple WhatsApp bot developed in Node.js using the `whatsapp-web.js` library. The bot generates a QR Code in the terminal for authentication and automatically responds to basic commands.

## 📋 Features

- [x] Generates a QR Code directly in the terminal for login.
- [x] Automatic response to text commands.
- [x] Message handling (ignores case sensitivity and extra spaces).

### 💬 Available Commands

The bot responds to the following messages:

| User Message | Bot Response |
|--------------|--------------|
| `hi`         | `hello`      |
| `hello`      | `hello 👋`    |
| `ping`       | `pong 🏓`    |

---

## 🚀 How to Use

### 1. Prerequisites
Make sure you have **[Node.js](https://nodejs.org/)** installed on your machine.

### 2. Installation

Open the terminal in the project folder and install the necessary dependencies:

```bash
# Initialize the project (if you don't have a package.json yet)
npm init -y

# Install the libraries used in the code
npm install whatsapp-web.js qrcode-terminal
```

### 3. Running the Bot
Run the file where you saved the code (e.g., `index.js` or `bot.js`):

```bash
node bot.js
```

### 4. Connecting

1. A QR Code will appear in your terminal.
2. Open WhatsApp on your phone.
3. Go to **Linked Devices** > **Link a Device**.
4. Scan the QR Code displayed in the terminal.
5. Once the message `✅ Bot is ready!` appears, it is operational.

---

### 🚀 Potential Improvements & Use Cases

I decided to keep the code open and flexible, but there is a lot you can achieve with it! Beyond basic responses, you can integrate AI APIs (like GPT) to create smart and dynamic replies, automate customer service, collect and process information, or even connect the bot to external systems like CRMs or marketing automation tools. This opens the door to advanced conversational flows that are highly useful for businesses, support teams, or personal automated assistants.