import { Image, TouchableOpacity } from "react-native";
import { Stack,useRouter} from 'expo-router';
import styles from "./screenheader.style";
import SideDrawer from "../../SideDrawer/sideDrawerStack";
const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
const router = useRouter();
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}  
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
    
  );
};

export default ScreenHeaderBtn;
