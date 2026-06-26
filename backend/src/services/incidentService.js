import { createIncident } from "../repositories/incidentRepository.js";
import {
    getAllIncidents,
    getIncidentById,
    getIncidentsByUserId,
    updateIncident,
    deleteIncident,
    updateIncidentImage,
    getIncidentCount
} from "../repositories/incidentRepository.js";

export const createIncidentService = async (data, userId) => {
    return await createIncident({
        ...data, userId
    });
};

export const getAllIncidentsService = async (
    page,
    limit,
    status,
    category,
    sort
) => {

    const incidents =
        await getAllIncidents(
            page,
            limit,
            status,
            category,
            sort
        );

    const totalIncidents =
        await getIncidentCount(
            status,
            category
        );

    return {
        incidents,
        totalIncidents,
    };
};

export const getIncidentByIdService =
    async (id) => {
        return await getIncidentById(id);
    };

export const getMyIncidentsService =
    async (userId) => {
        return await getIncidentsByUserId(
            userId
        );
    };

export const updateIncidentService =
    async (
        incidentId,
        userId,
        data
    ) => {
        const incident =
            await getIncidentById(
                incidentId
            );

        if (!incident) {
            throw new Error(
                "Incident not found"
            );
        }

        if (
            incident.user_id !== userId
        ) {
            throw new Error(
                "Unauthorized"
            );
        }

        return await updateIncident(
            incidentId,
            data
        );
    };

export const deleteIncidentService =
    async (
        incidentId,
        userId
    ) => {
        const incident =
            await getIncidentById(
                incidentId
            );

        if (!incident) {
            throw new Error(
                "Incident not found"
            );
        }

        if (
            incident.user_id !== userId
        ) {
            throw new Error(
                "Unauthorized"
            );
        }

        return await deleteIncident(
            incidentId
        );
    };

export const uploadIncidentImageService = async (incidentId, userId, imageUrl) => {
    const incident = await getIncidentById(incidentId);

    if (!incident) {
        throw new Error(
            "Incident not found"
        );
    }

    if (
        incident.user_id !== userId
    ) {
        throw new Error(
            "Unauthorized"
        );
    }

    return await updateIncidentImage(incidentId, imageUrl)
}