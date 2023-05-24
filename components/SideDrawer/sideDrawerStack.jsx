import { createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,} from '@react-navigation/drawer';
import { View,Text } from 'react-native';
import { StyleSheet,Dimensions } from 'react-native'; 
import { useRouter } from 'expo-router'; 
import {
    MaterialCommunityIcons,
    AntDesign,
    Entypo,
    Ionicons,
  } from "@expo/vector-icons";
import CustomPressable from '../common/button/CustomPressable';

const Drawer = createDrawerNavigator();
    const SideDrawer = ()=>{
        const router = useRouter();
        return (
            <>
            <Drawer.Navigator 
            drawerContent={(props)=>{
                <DrawerContentScrollView {...props} >
              <View style={styles.drawerContent}>
              <View style={styles.header}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: Dimensions.get("window").width * 0.46,
                  }}
                >
                  <View>
                    <Text style={styles.headerTitle}>Muhidin</Text>
                    <Text style={styles.headerSubTitle} numberOfLines={1}>0947244441
                    </Text>
                  </View>
                  <CustomPressable
                        style={{ paddingStart: 14, paddingEnd: 8 }}
                        onPress={toggleTheme}
                      >
                          <Ionicons
                            name="md-moon"
                            size={20}
                            color= "#E5E5E5"
                          />
                        
                      </CustomPressable>
                </View>
              </View>

              <View>
                <DrawerItem
                  icon={({ color, size }) => (
                    <MaterialCommunityIcons
                      name="home"
                      color={color}
                      size={size}
                    />
                  )}
                  label="Home"
                  onPress={() =>
                    router.push("/app/index") 
                  }
                />

                <DrawerItem
                  icon={({ color, size }) => (
                    <MaterialCommunityIcons
                      name="account-circle-outline"
                      color={color}
                      size={size}
                    />
                  )}
                  label="My Account"
                  onPress={() =>{}
                  }
                />

                <DrawerItem
                  icon={({ color, size }) => (
                    <AntDesign name="hearto" color={color} size={size} />
                  )}
                  label="Wishlist"
                  onPress={() =>{}
                  }
                />
                <DrawerItem
                  icon={({ color, size }) => (
                    <AntDesign name="message1" color={color} size={size} />
                  )}
                  label="Chat"
                  onPress={() =>{}
                  }
                />
                {token ? (
                  <DrawerItem
                    icon={({ color, size }) => (
                      <AntDesign name="logout" color={color} size={size} />
                    )}
                    label="Logout"
                    onPress={async () => {
                    }}
                  />
                ) : (
                  <DrawerItem
                    icon={({ color, size }) => (
                      <AntDesign name="login" color={color} size={size} />
                    )}
                    label="Login"
                    onPress={() =>{}
                    }
                  />
                )}
                <CustomButton
                  title="Invest on Ashewa"
                  onPress={() => {
                    Linking.openURL(
                      "https://www.ashewatechnology.com/buy-share-now.php"
                    );
                  }}
                  style={{
                    width: "80%",
                    alignSelf: "center",
                    marginTop: Dimensions.get("window").height * 0.2,
                  }}
                  buttonStyle={{
                    marginVertical: 6,
                  }}
                />
                <CustomButton
                  title="Sell on Ashewa"
                  onPress={() => {
                    Linking.openURL("https://seller.ashewa.com");
                  }}
                  style={{
                    width: "80%",
                    alignSelf: "center",
                    marginTop: 10,
                  }}
                  buttonStyle={{
                    marginVertical: 6,
                  }}
                />
              </View>
            </View>
                </DrawerContentScrollView>
            }}
             >

            </Drawer.Navigator>
            </>
        );

    }

    
 const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: 120,
      paddingHorizontal: 10,
      backgroundColor: "#ffffff",
      marginBottom: 15,
    },
    profilePicture: {
      width: 60,
      height: 60,
      borderRadius: 30,
      borderWidth: 2,
      overflow: "hidden",
      marginRight: 10,
      borderColor: 0,
    },
    headerTitle: {
      fontSize: 16,
      fontWeight: "bold",
      flexShrink: 1,
      color: "#ffffff",
      marginBottom: 2,
    },
    headerSubTitle: {
      flexShrink: 1,
      color: "#ffffff",
      width: Dimensions.get("window").width * 0.3,
    },
  });

    export default SideDrawer;