import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Button,
} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';

import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {useTheme} from 'react-native-paper';

const EditProfile = () => {
  const {colors} = useTheme(); //Dark Theme

  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '42%'], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <GestureHandlerRootView style={{height: '100%'}}>
      <View style={styles.container}>
        <View style={{margin: 20}}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={handlePresentModalPress}>
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ImageBackground
                  source={require('../../assets/mithun.jpg')}
                  style={{height: 100, width: 100}}
                  imageStyle={{borderRadius: 15}}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <MaterialCommunityIcons
                      name="camera-outline"
                      color="#fff"
                      size={35}
                      style={{
                        opacity: 0.7,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#fff',
                        borderRadius: 10,
                      }}
                    />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <Text
              style={{
                marginTop: 10,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Dulaj Mithun
            </Text>
          </View>

          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <TextInput
              placeholder="First Name"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={[styles.textInput, {color: colors.text}]}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <TextInput
              placeholder="Last Name"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={[styles.textInput, {color: colors.text}]}
            />
          </View>
          <View style={styles.action}>
            <Feather name="phone" color={colors.text} size={20} />
            <TextInput
              placeholder="Phone"
              placeholderTextColor="#666666"
              keyboardType="number-pad"
              autoCorrect={false}
              style={[styles.textInput, {color: colors.text}]}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="envelope-o" color={colors.text} size={20} />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={[styles.textInput, {color: colors.text}]}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="globe" color={colors.text} size={20} />
            <TextInput
              placeholder="Country"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={[styles.textInput, {color: colors.text}]}
            />
          </View>
          <View style={styles.action}>
            <MaterialCommunityIcons
              name="map-marker-outline"
              color={colors.text}
              size={20}
            />
            <TextInput
              placeholder="City"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={[styles.textInput, {color: colors.text}]}
            />
          </View>
          <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
            <Text style={styles.commandButtonTitle}>Submit</Text>
          </TouchableOpacity>
        </View>

        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            backgroundStyle={{borderRadius: 30}}
          >
            <View style={styles.panel}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>
                  Choose Your Profile Picture
                </Text>
              </View>
              <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Choose From Library</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.panelButton} onPress={() => {}}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  commandButton: {
    padding: 15,
    backgroundColor: '#FF6347',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  commandButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  panel: {
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default EditProfile;
