import { createIncidentService } from "../services/incidentService.js";

import {
    getAllIncidentsService,
    getIncidentByIdService,
    getMyIncidentsService,
    updateIncidentService,
    deleteIncidentService,
    uploadIncidentImageService
} from "../services/incidentService.js";

import { getIO } from "../socket/socket.js";

export const createIncident = async (req, res) => {
    try {
        const incident = await createIncidentService(req.body, req.user.id)

        const io = getIO();

        io.emit("incidentCreated", incident);

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

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const { status, category, sort } = req.query;

        const {
            incidents,
            totalIncidents,
        } = await getAllIncidentsService(
            page,
            limit,
            status,
            category,
            sort
        );

        const totalPages = Math.ceil(
            totalIncidents / limit
        );

        res.json({
            success: true,
            page,
            limit,
            totalIncidents,
            totalPages,
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

            const io = getIO();

            io.emit("incidentUpdated", incident);

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
            const io = getIO();

            io.emit("incidentDeleted", {
                id: req.params.id,
            });

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