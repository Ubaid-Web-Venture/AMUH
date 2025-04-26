import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
  try {
    const token = req.headers.token; // ہیڈر سے ٹوکن حاصل کریں
    if (!token) {
      return res.status(401).json({ success: false, message: "Token missing!" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ success: false, message: "Not Authorized!" });
    }

    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid Token" });
  }
};
export default adminAuth;