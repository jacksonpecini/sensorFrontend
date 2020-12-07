import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const getAllSensors = async () => {
  const res = await axios.get(`${BASE_URL}/sensor`);
  return res.data.data;
};

export const getSensorById = async (id) => {
  const res = await axios.get(`${BASE_URL}/sensor/${id}`);
  return res.data.data;
};

export const updateSensor = async (id, data) => {
  delete data.id;
  const res = await axios.put(`${BASE_URL}/sensor/${id}`, data);
  console.log("response", res);
};

export const deleteSensor = async (id) => {
  const res = await axios.delete(`${BASE_URL}/sensor/${id}`);
  console.log("response", res);
};

export const createSensor = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/sensor`, data);
    console.log("response", res);
  } catch (error) {
    console.log("error found", error);
  }
};
