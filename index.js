const { EmbedBuilder, Message } = require('discord.js');

function sendEmbed(target, embedOptions) {
  const embed = new EmbedBuilder()
    .setTitle(embedOptions.title || 'No Title')
    .setDescription(embedOptions.description || 'No Description')
    .setColor(embedOptions.color || 0x3498db);

  
  if (embedOptions.footer) {
    embed.setFooter({
      text: embedOptions.footer.text || 'Footer Text',
      iconURL: embedOptions.footer.iconURL || null,
    });
  }
  if (embedOptions.image) {
    embed.setImage(embedOptions.image);
  }
  if (embedOptions.thumbnail) {
    embed.setThumbnail(embedOptions.thumbnail);
  }
  if (embedOptions.fields) {
    embedOptions.fields.forEach((field) => {
      embed.addFields({
        name: field.name || 'No Name',
        value: field.value || 'No Value',
        inline: field.inline || false,
      });
    });
  }

  
  if (target.isCommand) {
    // Handle interaction (e.g., slash command)
    target.reply({ embeds: [embed] });
  } else if (target instanceof Message) {
    // Handle message object
    target.channel.send({ embeds: [embed] });
  } else {
    console.error('Unsupported target type.');
  }
}

module.exports = { sendEmbed };

