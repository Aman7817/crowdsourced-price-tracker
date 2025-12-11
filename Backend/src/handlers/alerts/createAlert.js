import { createAlertService } from "../../services/alertService.js";
import { success, error } from "../../utils/response.js";
// import { getUserIdFromEvent } from "../../utils/jwt.js";

import { withDB } from "../../utils/withDb.js";

export const createAlert = withDB(async (event) => {
  try {
    const userId = getUserIdFromEvent(event);
    const body = JSON.parse(event.body);

    const alert = await createAlertService(userId, body.productId, body.targetPrice);

    return success(201, alert);
  } catch (err) {
    return error(err);
  }
});
