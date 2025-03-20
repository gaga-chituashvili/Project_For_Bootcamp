export async function getEmployees() {
    const response = await fetch("https://momentum.redberryinternship.ge/api/tasks", {
      method: "GET",
      headers: { 
        Authorization: `Bearer 9e7acb9f-7bca-48a7-98d6-50f7c40140a6`, 
        "Content-Type": "application/json" 
      },
    });
  
    const result = await response.json();
    if (response.ok) {
      return result;
    } 
    
    throw new Error("fetch error");
  };
  