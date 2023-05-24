import { Text, FlatList, Pressable,StyleSheet } from 'react-native'
import {NetworkStatus, useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "../../../gql/Query";

const ProductScreen = () => {
    const { data, loading,error,networkStatus } = useQuery(CONTINENT_QUERY,{
        variables: {
          page: 1,
        },
        fetchPolicy: "network-only",
        notifyOnNetworkStatusChange: true,
  
        onError: (error) => {
          if (error.networkError) {
            refetch({
              discounted: true,
              page: 1,
            });
          } else {
            Toast.show(error.message);
          }
        },
      }
    ); //execute query
    console.log("data==of==gql====>"+data);
  const ContinentItem = ({ continent }) => {
    const { name, code } = continent; //get the name of continent
    return (
      <Pressable style={styles.container}>
        <Text>{name}</Text> //display name of continent
      </Pressable>
    );
  };

  loading?<Text>Fetching data...</Text> //while loading return this
 :error?<Text>Error Fetching data !</Text>:
      <FlatList
        data={data.productWithSpecialPrice}
        renderItem={({ item }) => <ContinentItem continent={item} />}
        keyExtractor={(item, index) => index}
      />
  
}

export default ProductScreen;
const styles = StyleSheet.create({
    container: (selectedJob, item) => ({
      width: 250,
      height:299,
      padding: 5,
      backgroundColor: "#FFF",
      borderRadius: 8,
      justifyContent: "space-between",
      shadowColor: "#FFF",
    }),
   
  });