import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API URL
    const url = 'https://jsonplaceholder.typicode.com/';

    // Make the API call
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        setData(data); // Save the data to state
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        setError(error.message); // Catch and display any errors
        setLoading(false); // Stop loading
      });
  }, []); // Empty dependency array, runs once when the component mounts

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      <Text>Data: {JSON.stringify(data)}</Text>
    </View>
  );
};

export default App;