import React, { 
    Component     
} from 'react'

import {
    StyleSheet,
    View,
    Alert
} from 'react-native'

import { 
    Scene,
    Actions
 } from 'react-native-router-flux'

import styleUtils from '../../Styles'
import Editor from '../../Components/Editor'

class TweetView extends Component{
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }
    
    componentWillMount() {
        //this.props.route.sendTweet = this.sendTweet.bind(this)
    }

    render() {
        return (
            <View style={styles.container}>  
                <Editor
                    onChangeText={this.onChangeText.bind(this)} 
                    placeholder={'What\'s happening'}
                    text={this.state.text}/>    
            </View> 
        )
    }
    
    sendTweet() {
        Alert.alert(
            'Sent successfully',
            this.state.text,
            [
                {text: 'OK', onPress: () => Actions.pop()}
            ]
        )
    }
    
    onChangeText(text) {
        this.setState({    
            text: text
        })
    }
}

module.exports = <Scene key='tweet' 
    component={TweetView} 
    title='Tweet'
    hideTabBar={true}
    navigationBarStyle={styleUtils.navBarStyle} 
    direction={'vertical'}
    backTitle={'Cancel'}
    hideBackImage={true}
    backButtonTextStyle={styleUtils.buttonText}
    rightTitle={'Send'}
    rightButtonTextStyle={styleUtils.buttonText}
    onRight={() => {
        
    }}
/>

const styles = StyleSheet.create({
    container: {
        ...styleUtils.containerBg,
        flex: 1
    }
})