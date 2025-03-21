export async function departaments() {
  const response = await fetch(
    "https://momentum.redberryinternship.ge/api/departments",
  );

  const result = await response.json();
  if (response.ok) {
    return result;
  }
  throw new Error("fetch error");
}
