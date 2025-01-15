import { Stack } from "expo-router"

const RootLayout = () =>{
    return <Stack screenOptions={{headerTitleAlign:"center"}}>
        <Stack.Screen name="index" options={{
            headerTitle:"Home Page",
        }} />
        <Stack.Screen name="users/[id]" options={{
            headerTitle:'User Page',
        }}/>
    </Stack>

}
export default RootLayout