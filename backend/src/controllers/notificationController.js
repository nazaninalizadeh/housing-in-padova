import Notification from '../models/Notification.js';

export const getNotifications = async (req, res) => {
  try { const notes = await Notification.find({ user: req.user._id }).sort({ createdAt: -1 }); res.json(notes); } catch (err) { res.status(500).json({ message: err.message }); }
};

export const markRead = async (req, res) => {
  try { const n = await Notification.findById(req.params.id); if (!n) return res.status(404).json({}); n.read = true; await n.save(); res.json(n); } catch (err) { res.status(500).json({ message: err.message }); }
};
