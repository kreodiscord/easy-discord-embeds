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

## 🎨 Embed Options
Here’s how you can customize the embeds:

- title: The title of the embed (string)
- description: The content of the embed (string)
- color: The color of the embed (hexadecimal value)
- footer: Optional footer text (object with text and iconURL properties)
- image: Optional image URL to display in the embed (string)
- thumbnail: Optional thumbnail URL (string)
- fields: Optional fields array, where each field has name, value, and optional inline (boolean)

---

---

## 🧑‍💻 Example with Advanced Options:
```javascript
sendEmbed(message, {
  title: 'Embed with Advanced Options',
  description: 'This embed has footer, image, and fields.',
  color: 0xff5733, // Red color
  footer: {
    text: 'Footer Text',
    iconURL: 'https://example.com/icon.png',
  },
  image: 'https://example.com/image.png',
  thumbnail: 'https://example.com/thumbnail.png',
  fields: [
    {
      name: 'Field 1',
      value: 'This is a field with some content.',
      inline: true,
    },
  ],
});


```

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
