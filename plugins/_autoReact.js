let handler = (m) => m;
handler.all = async function (m) {
  const targetJids = [
    "233268374753@s.whatsapp.net",
    "233533763772@s.whatsapp.net",
  ];
  const reactionEmoji = "✨";
  if (targetJids.includes(m.sender)) {
    await m.react(reactionEmoji);
  }
};
export default handler;
