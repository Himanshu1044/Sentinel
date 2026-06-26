import {
    getAllIncidentsForAdminService,
    updateIncidentStatusService,
    getPendingIncidentsService,
    getIncidentStatisticsService
} from "../services/adminService.js";

export const getAllIncidentsForAdmin = async (req, res) => {
    try {
        const incidents = await getAllIncidentsForAdminService();

        res.json({
            success: true,
            count: incidents.length,
            incidents,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
}

export const updateIncidentStatus = async (req, res) => {
    try {
        const incident = await updateIncidentStatusService(req.params.id, req.body.status)
        res.json({
            success: true,
            incident,
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

export const getPendingIncidents =
    async (req, res) => {
        try {

            const incidents =
                await getPendingIncidentsService();

            res.json({
                success: true,
                count: incidents.length,
                incidents,
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message,
            });

        }
    };

export const getIncidentStatistics = async (req, res) => {
    try {

        const stats = await getIncidentStatisticsService();

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