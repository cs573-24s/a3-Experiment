import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import "./ResultsPage.css"

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
      <h2>
        Thank you for participating!
      </h2>
      <p>
        Below are the current results for our experiment
      </p>
      {
        results.map((r) => (
          <p>{JSON.stringify(r)}</p>
        ))
      }
    </div>
  );
}
