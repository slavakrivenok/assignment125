import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, Animated } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


class HomeScreen extends React.Component {
    render() {
      return (
        
        <ScrollView> 

          
        <View style={styles.container}> 
          <Text style={styles.title}>Menu</Text> 
          <ImageLoader style={styles.foods}  //Page content
          source={require('../assets/pizza1.png')}
        />
        <Text style={styles.lists}>Pepi Pizza $1.95</Text>
        <ImageLoader
         style={styles.foods}
          source={require('../assets/pizza2.png')}
        />
        <Text style={styles.lists}>Oli Pizza $1.97</Text>
        <ImageLoader style={styles.foods}
          source={require('../assets/pizza3.png')}
        />
        <Text style={styles.lists}>Veggie Pizza $36.95</Text>
        <ImageLoader style={styles.foods}
          source={require('../assets/pizza4.png')}
        />
        <Text style={styles.lists}>Meat Pizza $1.95</Text>


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

// styles
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



export default HomeScreen;