import React from 'react';
import TouchableScale from 'react-native-touchable-scale';
import { StyleSheet, Text, View, Vibration, Image, Alert,} from 'react-native';

const DURATION = 40;

export default class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { count: 0}
  }
 

  onPress = () => {
    //Handle the start vibration button click
    Vibration.vibrate(DURATION);
    //To start the vibration for the defined Duration
    this.setState({
      count: this.state.count+1
    })
  }
  _onPressButton = () =>  {
    Alert.alert(
      'Reset',
      'Apakah anda yakin ingin mereset?',
      [        
        {text: 'Tidak', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Ya', onPress: () => this.setState({count:0})},
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header, shadow]}>
          <View style={styles.headerText}>
          <Image source={require('../../assets/header.png')} style={{width: 190, height: 50}}/>
          </View>

          <View style={styles.containerButton}>
          <TouchableScale
            style={styles.headerButton}
            activeScale={0.7}
            onPress={ ()=> {this._onPressButton()}} >
          <Image source={require('../../assets/img/iconfinder_refresh.png')} style={{width: 35, height: 35}}/>
        </TouchableScale>  
          </View>

          
        </View>

        <View style={styles.containerContent}>
          <Text style={styles.textItem}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</Text>
          <Text style={styles.textItem}>اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ</Text>
          <Text style={styles.text}>Ya Allah, berikanlah rahmat-Mu kepada Nabi Muhammad dan keluarga Nabi Muhammad</Text>
        </View>
        

        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
          
              {this.state.count}
            </Text>
          </View>

        <View style={styles.containerButton}>
        <TouchableScale
            style={styles.button}
            onPress={this.onPress}
            activeScale={0.7}
        >
          <Image source={require('../../assets/img/button.png')} style={styles.imgButton}/>
        </TouchableScale>
        </View>

        

      </View>
    );
  }
}

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.20,
  shadowRadius: 1.41,
  elevation: 2,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#3c91de'
   },
   header: {
     backgroundColor: '#ffffff',
     justifyContent: 'center',
     flexDirection: 'row'
   },
   headerText: {
     paddingTop: 27,
     width:300
   },
   headerButton: {
    borderColor:'#dddbdb',
    alignItems: 'center',
    paddingTop: 20,
    justifyContent:'center',
    width:40,
    height:40,
   },
   textItem: {
    fontSize:30,
    textAlign: 'center',
    padding:5,
    fontFamily: 'font-arabic'
   },
   text: {
    textAlign: 'center',
    padding:5,
    fontSize:15,
    fontFamily: 'font-text'
    
   },
   containerContent: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingBottom: 6,
    borderRadius: 10,
    borderColor: '#000',
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
  },
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
   button: {
    alignItems: 'center',
    justifyContent:'center',
    width:125,
    height:125,
    backgroundColor:'#ffffff',
    borderRadius:150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textButtom: {
    color: '#000',
    fontSize:20,
    fontWeight: 'bold'
  },
  imgButton: {
    width: 100, 
    height: 100
  },
  countContainer: {
    alignItems: 'center',
    marginTop: -40
  },
  countText: {
    color: '#ffffff',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: '#000000',
    fontSize:100,
    fontFamily: 'font-count'
  }
});
