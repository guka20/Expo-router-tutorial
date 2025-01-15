import { Tabs } from "expo-router"
import {MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons'
const TabsLayout = ()=>{
    return <Tabs screenOptions={{
        headerTitleAlign:'center'
    }}>
        <Tabs.Screen name="index" options={{
            headerTitle:'Home Page',
            title:"Home",
            tabBarIcon:({})=>(
                <MaterialCommunityIcons name="home" size={25} />
            )
            
        }} />
        <Tabs.Screen name="users/[id]" options={{
            headerTitle:"User Page",
            title:'User',
            tabBarIcon:({})=>(
                <FontAwesome name="user" size={25}/>
            )
        }} />
    </Tabs>
}

export default TabsLayout