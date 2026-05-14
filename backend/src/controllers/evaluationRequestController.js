import EvaluationRequest from '../models/EvaluationRequest.js';

export const createEvaluationRequest = async (req, res) => {
  try {
    const images = (req.files || []).map(f => '/uploads/' + f.filename);
    const doc = await EvaluationRequest.create({ user: req.user._id, area: req.body.area, details: req.body.details, images });
    res.json(doc);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const getAdminEvaluationRequests = async (req, res) => {
  try { const list = await EvaluationRequest.find().populate('user'); res.json(list); } catch (err) { res.status(500).json({ message: err.message }); }
};

export const updateEvaluationRequest = async (req, res) => {
  try { const r = await EvaluationRequest.findById(req.params.id); if (!r) return res.status(404).json({}); Object.assign(r, req.body); await r.save(); res.json(r); } catch (err) { res.status(500).json({ message: err.message }); }
};
