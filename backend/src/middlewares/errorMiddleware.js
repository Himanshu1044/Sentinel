import multer from "multer";

export const errorHandler = (
    err,
    req,
    res,
    next
) => {

    if (err instanceof multer.MulterError) {

        if (err.code === "LIMIT_FILE_SIZE") {
            return res.status(400).json({
                success: false,
                message: "Image size must be less than 5 MB",
            });
        }

        return res.status(400).json({
            success: false,
            message: err.message,
        });
    }

    res.status(err.status || 500).json({
        success: false,
        message:
            err.message || "Internal Server Error",
    });
};