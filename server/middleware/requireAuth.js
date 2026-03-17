

export function requireAuth(req,res,next) {
    const token = req.cookies.auth_cookie;

    if (!token) {
        return res.status(401).json({ status: 'error'});
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch(err) {
        return res.status(401).json({ status: 'error', message: err.message})
    }

}