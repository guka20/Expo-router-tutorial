import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const HomePage = () => {
  return (
    <View>
      <Text>Hello World</Text>
      <Link href="/users/1">Got to User</Link>
      <Pressable onPress={()=>router.push({
        pathname:'/users/[id]',
        params:{id:2}
      })} ><Text>Go to user 2</Text></Pressable>
    </View>
  );
};
export default HomePage;
