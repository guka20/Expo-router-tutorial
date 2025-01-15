import { Stack } from "expo-router"

const StackLayout = ()=>{
    return (
        <>
        <Stack.Screen name="index" options={{
            headerTitle:"Home Page",
        }} />
        <Stack.Screen name="users/[id]" options={{
            headerTitle:'User Page',
        }}/>
        </>
    )
}

const RootLayout = () =>{
    return <Stack screenOptions={{headerTitleAlign:"center"}}>
        {/* <StackLayout/> */}
        <Stack.Screen name="(tabs)" options={{
            headerShown:false
        }}/>
    </Stack>

}
export default RootLayout