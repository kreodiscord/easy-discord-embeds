# easy-discord-embeds

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A simple package to easily create and send embeds in Discord bots using `discord.js`. This package abstracts away the need to manually construct embed objects, allowing you to focus on what matters.

## 📦 Installation

```bash
npm install easy-discord-embeds
```

---

## 🚀 Usage

### Import the Library

#### For Node.js

```javascript
const { sendEmbed } = require('easy-discord-embeds');
```

---

## 🧑‍💻 Example Usage for Slash Commands
Here’s an example of how to use easy-discord-embeds with Slash Commands to send a simple embed in your Discord bot:
```javascript
const { sendEmbed } = require('easy-discord-embeds');

module.exports = {
  data: {
    name: 'sendembed',
    description: 'Send an embed.',
  },
  async execute(interaction) {
    sendEmbed(interaction, {
      title: 'Simple Embed!',
      description: 'This is a simple description.',
      color: 0x3498db, // Blue color
    });
  },
};

```
## 🧑‍💻 Example Usage for Message Commands
Here’s an example of how to use easy-discord-embeds with Message Commands (prefix-based commands) to send an embed:
```javascript
const { sendEmbed } = require('easy-discord-embeds');

module.exports = {
  name: 'sendembed',
  description: 'Send an embed.',
  async execute(message) {
    sendEmbed(message, {
      title: 'Hello!',
      description: 'This is a message embed.',
      color: 0x00ff00, // Green color
    });
  },
};
```

---

## 📝 sendEmbed Function

The `sendEmbed` function is used to send the embed to the Discord channel.
Parameters:
- interaction: The interaction object (for Slash Commands).
- message: The message object (for Message Commands).
- embedOptions: The options for your embed (title, description, fields, color, etc.).

---

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
