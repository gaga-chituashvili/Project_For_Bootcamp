// employeeService.js

const API_URL = "https://momentum.redberryinternship.ge/api/employees";
const token = "9e6a2ed7-af17-45b5-ba9a-4bb074c0fa3b";

export const getEmployees = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: { 
        Authorization: `Bearer ${token}`, 
        "Content-Type": "application/json" 
      },
    });
    const result = await response.json();
    if (response.ok) {
      return result;
    } else {
      throw new Error(result.msg);
    }
  } catch (error) {
    console.error(error);
  }
};

export const createEmployee = async (data) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { 
        Authorization: `Bearer ${token}`, 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (response.ok) {
      console.log(result);
    } else {
      throw new Error(result.msg);
    }
  } catch (error) {
    console.error(error);
  }
};
