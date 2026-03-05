export default function Coffee() {

  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  if (hour === 12 && minute === 15) {
    alert("Coffee time. Deploy caffeine.");
  }

  return (
    <div>
      <h2>Kava?</h2>
      <span>Tikrinam laiką...</span>
    </div>
  );

}