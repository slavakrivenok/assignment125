import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, Animated } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


class SettingsScreen extends React.Component {
    render() {
      return (
        <ScrollView>
        <View style={styles.container}> 
          <Text style={styles.title}>Specials</Text>
          <ImageLoader style={styles.foods}// content
          source={require('../assets/bun1.png')}
        />
        <Text style={styles.lists}>Cina Buns</Text>
        <ImageLoader style={styles.foods}
          source={require('../assets/bun2.png')}
        />
        <Text style={styles.lists}>Sweet Buns</Text>
        <ImageLoader style={styles.foods}
          source={require('../assets/bun3.png')}
        />
        <Text style={styles.lists}>Garlic Buns</Text>
        


        </View>
        </ScrollView>

      );
    }
}

class ImageLoader extends Component {

  state = {
    opacity: new Animated.Value(0) // not visible
  }
  
  onLoad = () => { // When the page loads 
    Animated.timing(this.state.opacity, {
  toValue: 1, // goes from 0-1
  duration: 500,// half a second 
  useNativeDriver: true,
    }).start();
  }
  
  render() {
    return (
      <Animated.Image
      onLoad={this.onLoad}
      {...this.props}
      style={[
        {
          opacity: this.state.opacity,
          transform: [
            {
              scale: this.state.opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0.85, 1],
              })}]},
        this.props.style,
      ]}
      />
    )
  }
  
  }

//Styles

const styles = StyleSheet.create({
  
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  
   
    
  },

  title: {
    fontSize: 45,
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'white',
  },

  foods: {
   alignContent: 'center',
   width: '100%',
  },

  lists: {
   
    backgroundColor: 'red',
    fontSize: 30,
    color: 'white',
    width: '100%',
    textAlign: 'center',
  }



});


export default SettingsScreen;