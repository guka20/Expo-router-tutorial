import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const UserPage = () => {
    const {id} = useLocalSearchParams<{id:string}>();
  return (
    <View>
      <Text>User Page - {id}</Text>
    </View>
  );
};
export default UserPage;
