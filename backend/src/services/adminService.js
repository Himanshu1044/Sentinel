import { getAllIncidents, getIncidentById }
    from "../repositories/incidentRepository.js";

import { updateIncidentStatus ,getPendingIncidents} from '../repositories/incidentRepository.js'

export const getAllIncidentsForAdminService = async () => {
    return await getAllIncidents();
}

export const updateIncidentStatusService = async (incidentId, status) => {
    const incident = await getIncidentById(incidentId);

    if (!incident) {
        throw new Error(
            "Incident not found"
        );
    }

    return await updateIncidentStatus(incidentId, status);
}

export const getPendingIncidentsService = async () => {
    return await getPendingIncidents();
}