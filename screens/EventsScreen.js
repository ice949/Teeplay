import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const EventsScreen = () => {

  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.flex}>
        <Pressable style={styles.button2} onPress={() => navigation.navigate('Community')}>
        <FontAwesome
            name="download"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={styles.text}>Feeds</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Events')}>
        <FontAwesome
            name="tree"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={styles.text}>Events</Text>
        </Pressable>
        <Pressable style={styles.button2} onPress={() => navigation.navigate('All')}>
        <FontAwesome
            name="download"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={styles.text}>All</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    color: '#fff',
    gap: 20,
    padding: "6%",
  },
  button: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 29,
    elevation: 3,
    backgroundColor: 'rgba(70, 203, 76, 0.56)',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 29,
    elevation: 3,
    backgroundColor: 'rgba(139, 141, 139, 0.36)',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default EventsScreen;