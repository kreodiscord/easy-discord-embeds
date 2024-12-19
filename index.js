const { EmbedBuilder } = require('discord.js');

function sendEmbed(interaction, embedOptions) {
  const embed = new EmbedBuilder()
    .setTitle(embedOptions.title || 'No Title')
    .setDescription(embedOptions.description || 'No Description')
    .setColor(embedOptions.color || 0x3498db); // Default to blue if no color is provided

  // Add optional properties if they exist
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

  // Send the embed to the interaction or message
  if (interaction.isCommand()) {
    interaction.reply({ embeds: [embed] });
  } else if (interaction.isMessage()) {
    interaction.channel.send({ embeds: [embed] });
  } else {
    console.error('Unsupported interaction type.');
  }
}

module.exports = { sendEmbed };
