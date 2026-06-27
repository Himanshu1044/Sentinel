import {
    getProfileById,
    updateProfile,
    getProfileStatistics,
    getUserByEmail
} from "../repositories/profileRepository.js";

export const getProfileService = async (userId) => {
    return await getProfileById(userId);
}

export const updateProfileService = async (userId, data) => {
    const existingUser = await getUserByEmail(data.email);
    if (
        existingUser &&
        existingUser.id !== userId
    ) {
        throw new Error(
            "Email already exists"
        );
    }
    return await updateProfile(userId, data.name, data.email);
};

export const getProfileStatisticsService = async (userId) => {
    const stats = await getProfileStatistics(userId);

    return {
        totalReports: Number(stats.totalReports),
        approved: Number(stats.approved),
        pending: Number(stats.pending),
        rejected: Number(stats.rejected),
    };
};

