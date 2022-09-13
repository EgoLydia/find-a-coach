export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://find-a-coach-35aae-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );
    const resData = await response.json();
    if (!response.ok) {
      const error = new Error(resData.message || 'Failed to send request');
      throw error;
    }
    newRequest.id = resData.name;
    newRequest.coachId = payload.coachId;
    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;

    const response = await fetch(
      `https://find-a-coach-35aae-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` +
        token
    );
    const resData = await response.json();
    if (!response.ok) {
      const error = new Error(resData.message || 'Failed to fetch requests');
      throw error;
    }
    const requests = [];
    for (const key in resData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: resData[key].userEmail,
        message: resData[key].message,
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  },
};
