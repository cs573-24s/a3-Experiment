import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function ResultsPage() {
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    await getDocs(collection(db, "results")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setResults(newData);
    });
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div>
      do some calculations here lol
      {results.map((r) => (
        <div>{JSON.stringify(r)}</div>
      ))}
    </div>
  );
}
