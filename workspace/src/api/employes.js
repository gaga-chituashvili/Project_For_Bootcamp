export async function getEmployees() {
  const response = await fetch("https://momentum.redberryinternship.ge/api/employees", {
    method: "GET",
    headers: { 
      Authorization: `Bearer 9e6a2ed7-af17-45b5-ba9a-4bb074c0fa3b`, 
      "Content-Type": "application/json" 
    },
  });

  const result = await response.json();
  if (response.ok) {
    return result;
  } 
  
  throw new Error("fetch error");
};
