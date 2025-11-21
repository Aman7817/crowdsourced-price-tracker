import { getAlertsService } from "../../services/alertService.js";
import { success, error } from "../../utils/response.js";
import { getUserIdFromEvent } from "../../utils/jwt.js";

export const getAlerts = async (event) => {
  try {
    const userId = getUserIdFromEvent(event);
    const alerts = await getAlertsService(userId);

    return success(200, alerts);
  } catch (err) {
    return error(err);
  }
};
