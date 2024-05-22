export function handleError(error: unknown, setLoading: (state:boolean) => void) {
  setLoading(false);
  console.error(error)
  alert("Something when wrong. Try again.");
}