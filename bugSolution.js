import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (data === null) {
    return <Text>Error loading data</Text>;
  }

  return (
    <View>
      {/* Render your data here */}
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default MyComponent;