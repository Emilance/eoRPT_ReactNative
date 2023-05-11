import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StatusBar } from 'react-native'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'

function HeaderComponent({navigation}) {
    const statusBarHeight = StatusBar.currentHeight || 0;

  return (
    <View style={{...styles.container,paddingTop: statusBarHeight }}>
          <TouchableOpacity style={styles.view1} >
            <Icon 
               type="material-community"
               name ="arrow-left"
               color ="gray"
               size={32}
               onPress={()=> navigation.goBack()}
            />
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
       width:"100%",
       marginVertical: 10
    },
    view1 : {
       alignSelf:"flex-start"
    }
})

export default HeaderComponent