export default function Vis1() {

  const generateRandomData = () => {
    const data = [];
    for (let i = 0; i < 5; i++) {
      data.push({
        x: Math.round(Math.random() * 100)
      });
    }
    return data;
  };

  const randomData = generateRandomData();

  console.log("Random Data:", randomData);

  return (
    <div>
      <div>Data: {JSON.stringify(randomData)}</div>
      <div>vis1 page</div>
    </div>
  );
}

