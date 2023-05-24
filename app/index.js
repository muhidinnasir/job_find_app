import { View , ScrollView,SafeAreaView} from 'react-native';
import { Stack,useRouter } from 'expo-router';
import {useState} from 'react';
import {COLORS,icons,images,SIZES} from '../constants';
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const Home =()=>{
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [pressed, setIspressed] = useState(false);
    // Initialize Apollo Client
const client = new ApolloClient({
  uri: '',
  cache: new InMemoryCache()
});
    return (
      <ApolloProvider client={client}>
        <SafeAreaView style={{flex:1 , backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen 
            options={{
                headerStyle:{
                    backgroundColor:COLORS.lightWhite,
                },
                headerShadowVisible:false,
                headerLeft:()=>(
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="70%" handlePress = {() => {}}/>
                ),
                headerRight:()=>(
                    <ScreenHeaderBtn iconUrl={images.muhiprofile} dimension="100%"/>
                ),
                headerTitle:"",
            }}/>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
                <Welcome 
                 searchTerm={searchTerm}
                 setSearchTerm={setSearchTerm}
                 handleClick= {() => {
                   if (searchTerm) {
                    router.push(`/search/${searchTerm}`)
                   }
                 }}
                 /> 
                <Popularjobs/>
                <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
        </ApolloProvider>
    );
}

export default Home;