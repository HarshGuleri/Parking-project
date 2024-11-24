const jwt = require("jsonwebtoken");

const generateToken = (userData) => {
    return jwt.sign(userData, process.env.PRIVATE_KEY, { expiresIn: "1h" });
};

const validateToken = (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization) {
        return res.status(401).json({ err: "Token not available" });
    }

    const token = authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json({ err: "Unauthorized User" });
    }

    try {
        const validatedToken = jwt.verify(token, process.env.PRIVATE_KEY);
        req.user = validatedToken;
        next();
    } catch (error) {
        console.error("Token validation failed:", error);
        res.status(401).json({ err: "Invalid or expired token" });
    }
};

module.exports = { generateToken, validateToken };
