import { createIncidentService } from "../services/incidentService.js";

import {
    getAllIncidentsService,
    getIncidentByIdService,
    getMyIncidentsService,
    updateIncidentService,
    deleteIncidentService,
    uploadIncidentImageService
} from "../services/incidentService.js";

export const createIncident = async (req, res) => {
    try {
        const incident = await createIncidentService(req.body, req.user.id)

        res.status(201).json({
            success: true,
            incident,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

}

export const getAllIncidents = async (
    req,
    res
) => {
    try {
        const incidents =
            await getAllIncidentsService();

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

export const getIncidentById = async (
    req,
    res
) => {
    try {
        const incident =
            await getIncidentByIdService(
                req.params.id
            );

        if (!incident) {
            return res.status(404).json({
                success: false,
                message:
                    "Incident not found",
            });
        }

        res.json({
            success: true,
            incident,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getMyIncidents = async (
    req,
    res
) => {
    try {
        const incidents =
            await getMyIncidentsService(
                req.user.id
            );

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

export const updateIncident =
    async (req, res) => {
        try {
            const incident =
                await updateIncidentService(
                    req.params.id,
                    req.user.id,
                    req.body
                );

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
    };

export const deleteIncident =
    async (req, res) => {
        try {
            const incident =
                await deleteIncidentService(
                    req.params.id,
                    req.user.id
                );

            res.json({
                success: true,
                message:
                    "Incident deleted successfully",
                incident,
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    };

export const uploadIncidentImage = async (req, res) => {
    try {
        const imageUrl =
            `/uploads/${req.file.filename}`;

        const incident =
            await uploadIncidentImageService(
                req.params.id,
                req.user.id,
                imageUrl
            );

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