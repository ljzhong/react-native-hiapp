import React, { 
    Component    
} from 'react'

import {
    Text,
    View
} from 'react-native'

import {
    Scene,
    Router,
    Modal, 
    TabBar, 
    Actions
} from 'react-native-router-flux'

import HomeView from '../../Views/Home' 
import SettingsView from '../../Views/Settings' 
import ContactsView from '../../Views/Contacts' 

import IndexView from '../../Views/Index'
import AboutView from '../../Views/About'
import MessageView from '../../Views/Message'
import TweetView from '../../Views/Tweet'
import FeedbackView from '../../Views/Feedback'
import WebViewView from '../../Views/WebView'
import TweetDetailsView from '../../Views/TweetDetails'
import CommentView from '../../Views/Comment'

import styleUtils from '../../Styles'
import IconfontConf from '../../Utils/iconfontConf'

const tabIconfont = {
    Home: 'E613',
    Contacts: 'E60D',
    Settings: 'E610',
    HomeSelected: 'E602',
    ContactsSelected: 'E614',
    SettingsSelected: 'E60F'
}

class TabIcon extends Component {
    render(){
        let textStyle = this.props.selected ? styles.selectedTabText : styles.tabText
        let iconStyle = this.props.selected ? styles.selectedTabIcon : {} 
        let iconFont = this.props.selected ? tabIconfont[this.props.iconText + 'Selected'] : tabIconfont[this.props.iconText] 
        return (
            <View style={styles.tab}>
                <Text style={[styles.tabIcon, iconStyle]}>{IconfontConf('uni' + iconFont)}</Text>
                <Text style={textStyle}>{this.props.iconText}</Text>        
            </View>
        )
    }
}

export default class NavigatorComp extends Component {
    render() {
        return (
            <Router>
                <Scene key='modal' component={Modal}>
                    <Scene key='root'>
                        <Scene key='tabbar' tabs={true} tabBarStyle={styles.tabBarStyle} tabBarSelectedItemStyle={styles.tabBarSelectedStyle}>
                            <Scene key='home_tab' component={HomeView} navigationBarStyle={styles.navBarStyle} title='HiApp' iconText={'Home'} icon={TabIcon} sceneStyle={[styleUtils.commonScene]}/>
                            <Scene key='contacts_tab' component={ContactsView} navigationBarStyle={styles.navBarStyle} title='HiApp' iconText={'Contacts'} icon={TabIcon} sceneStyle={[styleUtils.commonScene]}/>
                            <Scene key='setting_tab' component={SettingsView} navigationBarStyle={styles.navBarStyle} title='HiApp' iconText={'Settings'} icon={TabIcon} sceneStyle={[styleUtils.commonScene]}/>
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        )
    }    
} 

const styles = {
    navBarStyle: {
        backgroundColor: '#f7f7f8'
    },
    tab: {
        alignItems: 'center'
    },
    tabBarStyle: {
        borderTopWidth: 0.5,
        borderColor: '#c4c4c4',
        backgroundColor: '#f7f7f8'
    },
    tabBarSelectedStyle: {
        backgroundColor: '#f7f7f8'
    },
    tabText: {
        color: '#929292',
        fontSize: 13
    },
    selectedTabText: {
        color: '#ff9630',
        fontSize: 13        
    },
    tabIcon: {  
        fontSize: 28,
        color: '#929292',
        fontFamily: 'iconfont'     
    },
    selectedTabIcon: {
        color: '#ff9630'        
    }
}