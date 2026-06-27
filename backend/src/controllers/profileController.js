import {
    getProfileService,
    updateProfileService,
    getProfileStatisticsService
} from '../services/profileService.js'

export const getProfile = async (req, res) => {
    try {
        const user = await getProfileService(req.user.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export const updateProfile = async (req, res) => {
    try {
        const user =
            await updateProfileService(
                req.user.id,
                req.body
            );

        res.json({
            success: true,
            message: "Profile updated successfully",
            user,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

export const getProfileStatistics = async (req, res) => {
    try {
        const stats = await getProfileStatisticsService(req.user.id);

        res.json({
            success: true,
            stats,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};