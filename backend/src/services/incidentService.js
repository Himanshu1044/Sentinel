import { createIncident } from "../repositories/incidentRepository.js";
import { getAllIncidents, getIncidentById, getIncidentsByUserId, updateIncident, deleteIncident } from "../repositories/incidentRepository.js";

export const createIncidentService = async (data, userId) => {
    return await createIncident({
        ...data, userId
    });
};

export const getAllIncidentsService = async () => {
    return await getAllIncidents();
}

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