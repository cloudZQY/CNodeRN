'use strict'

import React,{Component,PropTypes} from "react"
import {View,Text,StyleSheet} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import Spinner from "react-native-spinkit"

import preferredThemer from "../theme"

const defaultStyles = StyleSheet.create({
    loadMore:{
        flex:1,
        flexDirection:"row",
        height:30,
        justifyContent:"center",
        alignItems:"center"
    },
    loadMoreText:{
        paddingLeft:5,
        fontSize:13,
        color:"#AAA"
    }
})

@preferredThemer(defaultStyles)
class LoadMore extends Component{
    static propTypes = {
        active:PropTypes.bool
    }
    static defaultProps = {
        active:false
    }
    render(){
        const {styles,styleConstants} = this.props
        const loadMoreColor = styleConstants.loadMoreColor
        return (
            <View style={styles.loadMore}>
               {this.props.active?<Spinner isVisble={true} type="FadingCircle" size={13} color={loadMoreColor}/>:
               <Icon name="arrow-upward" size={20} color={loadMoreColor}/>}
               <Text style={styles.loadMoreText}>{this.props.active?"加载中":"上拉加载更多"}</Text>
            </View>
        )
    }
}

export default LoadMore