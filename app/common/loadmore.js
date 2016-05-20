'use strict'

import React,{Component,View,Text,StyleSheet} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import Spinner from "react-native-spinkit"

class LoadMore extends Component{
    render(){
        return (
            <View style={styles.loadMore}>
               {this.props.active?<Spinner isVisble={true} type="FadingCircle" size={20} color="#999"/>:
               <Icon name="arrow-upward" size={25} color="#AAA"/>}
            </View>
        )
    }
}

LoadMore.defaultProps = {
    active:false
}

const styles = StyleSheet.create({
    loadMore:{
        // backgroundColor:"#F7F7F7",
        flex:1,
        // flexDirection:"row",
        // height:30,
        justifyContent:"center",
        alignItems:"center"
    },
    loadMoreText:{
        paddingLeft:5,
        fontSize:13,
        color:"#AAA"
    },
    loadMoreIcon:{
        color:"#AAA"
    }
})

export default LoadMore