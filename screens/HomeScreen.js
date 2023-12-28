import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View>
      <View style={style.flex}>
        <Button
          title="Feeds"
          color={'green'}
          onPress={() => navigation.navigate('Community')}
        />
        <Button
          title="Events"
          onPress={() => navigation.navigate('Community')}
        />
        <Button style={style.greenButton}
          title="All"
          onPress={() => navigation.navigate('Community')}
        />
      </View>
    </View>
  );
};

const style = {
  greenButton: {
    backgroundColor: '#000',
    padding: 20,
  },
  flex: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    color: '#fff',
    gap: 20,
    padding: "6%",
  },
}

export default HomeScreen;