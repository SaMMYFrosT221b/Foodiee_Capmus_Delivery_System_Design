import axios from "axios";
import { useEffect, useState } from "react";

// Function to calculate the longest common subsequence
const longestCommonSubsequence = (text1, text2) => {
  const m = text1.length;
  const n = text2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
};


const SearchPage = () => {
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false); // State variable to track button click

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const res = await axios.get("http://localhost:5000/items");
        setItems(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllItems();
  }, []);

  const handleButtonClick = () => {
    // Do something when the button is clicked
    console.log("Button clicked");
    setButtonClicked(true);
  };

  const topSimilarItems = items
    .map((item) => {
      const currentFields = `${item.ItemName}:${item.Description}:${item.Price}:${item.CousineType},${item.ExpectedTime}`;
      const similarity = longestCommonSubsequence(searchText, currentFields);
      return { item, similarity };
    })
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 10);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter search text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleButtonClick}>Search </button> {/* Button added */}
        {buttonClicked && ( // Conditionally render based on button click
          <div>
            <p>Top 10 most similar items:</p>
            <ul>
              {topSimilarItems.map((item, index) => (
                <li key={index}>
                  {item.item.ItemName} (Similarity: {item.similarity})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchPage;

