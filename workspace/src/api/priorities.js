export async function priorities() {
  const response = await fetch(
    "https://momentum.redberryinternship.ge/api/priorities",
  );

  const result = await response.json();
  if (response.ok) {
    return result;
  }
  throw new Error("fetch error");
}
