import Message from '../models/Message.js';
import Notification from '../models/Notification.js';

export const sendMessage = async (req, res) => {
  try {
    const m = await Message.create({ from: req.user._id, text: req.body.text, listing: req.body.listing });
    // notify admin (simple)
    res.json(m);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const getUserMessages = async (req, res) => {
  try { const msgs = await Message.find({ from: req.user._id }); res.json(msgs); } catch (err) { res.status(500).json({ message: err.message }); }
};

export const getAdminMessages = async (req, res) => {
  try { const msgs = await Message.find().populate('from'); res.json(msgs); } catch (err) { res.status(500).json({ message: err.message }); }
};

export const replyToMessage = async (req, res) => {
  try {
    const msg = await Message.findById(req.params.messageId);
    if (!msg) return res.status(404).json({ message: 'Not found' });
    msg.replies.push({ fromAdmin: true, text: req.body.text });
    await msg.save();
    // create notification for user
    await Notification.create({ user: msg.from, text: 'Admin replied to your message', link: '/messages' });
    res.json(msg);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
