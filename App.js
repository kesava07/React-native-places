import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import Lists from './Src/placesList/Lists';
import Input from './Src/PlaceInput/Input';
import PlaceDetails from './Src/PlaceDetails/PlaceDetails';
import * as actions from './Store/Actions/index';

class App extends React.Component {
  state = {
    placeName: 'Udayasree',
  };

  handlePlaceChange = placeName => this.setState({ placeName });

  handleAddPlace = () => {
    const { placeName } = this.state;
    if (placeName.trim() === "") {
      this.setState({ placeName: "" })
      alert("Add some thing")
    } else {
      this.props.onAddPlace(this.state.placeName);
      this.setState({ placeName: "" })
    }
  };

  placeSelectionHandler = key => this.props.onSelectPlace(key)

  onCancelSelection = () => this.props.onUnselectPlace()

  handleDeletePlace = () => this.props.onDeletePlace()


  render() {
    const { placeName } = this.state;
    const { places, selectedPlace } = this.props;
    console.log(selectedPlace, places)
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1a73e8" barStyle="light-content" />
        <PlaceDetails
          selectedPlace={selectedPlace}
          onCancelSelection={this.onCancelSelection}
          handleDeletePlace={this.handleDeletePlace}
        />
        <Input handlePlaceChange={this.handlePlaceChange} placeName={placeName} handleAlert={this.handleAddPlace} />
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

const mapStateToProps = state => ({
  places: state.places.places,
  selectedPlace: state.places.selectedPlace
});

const mapDispatchToProps = dispatch => ({
  onAddPlace: (name) => dispatch(actions.addPlace(name)),
  onDeletePlace: () => dispatch(actions.deletePlace()),
  onSelectPlace: (key) => dispatch(actions.selectPlace(key)),
  onUnselectPlace: () => dispatch(actions.unSelectPlace())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'flex-start',
    alignItems: "center"
  }
});