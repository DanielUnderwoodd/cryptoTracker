import api from "../../Config/publicApiConfig";

export const get = async (segment) => {
  try {
    const response = await api.get(`/${segment}`);
    let { data } = response.data;
    return Object.keys(data.market_cap_percentage);
  } catch (err) {
    console.log(err);
  }
};
