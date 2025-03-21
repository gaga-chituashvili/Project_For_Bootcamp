export async function statusApi() {
  const response = await fetch(
    `https://momentum.redberryinternship.ge/api/statuses`,
  );

  const result = response.json();
  if (response.ok) {
    return result;
  }
  throw new Error("fetch error");
}
