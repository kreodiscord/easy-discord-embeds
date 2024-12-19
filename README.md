# easy-discord-embeds

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![Discord](https://img.shields.io/discord/1275486972252786730?label=discord)](https://discord.gg/uwxaPtbdvT)

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

## Example Usage:
const { sendEmbed } = require('easy-discord-embeds');

module.exports = {
  data: {
    name: 'sendembed',
    description: 'Sends a simple embed.',
  },
  async execute(interaction) {
    const embedOptions = {
      title: 'Hello, World!',
      description: 'This is an easy embed.',
      color: 0x3498db, // Blue color
      fields: [
        {
          name: 'Field 1',
          value: 'This is the value of field 1.',
          inline: true,
        },
        {
          name: 'Field 2',
          value: 'This is the value of field 2.',
          inline: true,
        },
      ],
    };

    // Send the embed using the sendEmbed function
    sendEmbed(interaction, embedOptions);
  },
};
---

---
## Send Embed Function
sendEmbed(interaction, embedOptions);
---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
