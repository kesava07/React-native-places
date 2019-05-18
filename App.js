import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList
} from 'react-native';
import Lists from './Src/placesList/Lists';
import Input from './Src/PlaceInput/Input';
import PlaceImage from './Images/avenger.png'
import PlaceDetails from './Src/PlaceDetails/PlaceDetails';

export default class App extends React.Component {
  state = {
    placeName: '',
    places: [],
    selectedPlace: null
  };

  handlePlaceChange = placeName => this.setState({ placeName });

  handleAlert = () => {
    const { placeName } = this.state;
    if (placeName.trim() === "") {
      this.setState({ placeName: "" })
      alert("Add some thing")
    } else {
      this.setState(prevState => {
        return {
          places: prevState.places.concat({
            key: Math.random().toString(), name: prevState.placeName, image: PlaceImage
          }),
          placeName: ""
        }
      });
    }
  };

  placeSelectionHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      }
    })
  };
  onCancelSelection = () => this.setState({ selectedPlace: null });

  handleDeletePlace = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      }
    })
  }

  render() {
    const { places, placeName, selectedPlace } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1a73e8" barStyle="light-content" />
        <PlaceDetails
          selectedPlace={selectedPlace}
          onCancelSelection={this.onCancelSelection}
          handleDeletePlace={this.handleDeletePlace}
        />
        <Input handlePlaceChange={this.handlePlaceChange} placeName={placeName} handleAlert={this.handleAlert} />
        <FlatList style={{ width: '100%' }}
          data={places}
          renderItem={(info) => (
            <Lists
              image={info.item.image}
              places={info.item.name}
              onPlaceSelect={() => this.placeSelectionHandler(info.item.key)}
            />
          )}
        >
        </FlatList>
      </View>
    )
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'flex-start',
    alignItems: "center"
  }
});