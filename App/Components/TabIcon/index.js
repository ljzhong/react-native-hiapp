import React, { 
    Component    
} from 'react'

import {
    Text,
    View
} from 'react-native'

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

export default class TabIcon extends Component {
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

const styles = {
    tab: {
        alignItems: 'center'
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