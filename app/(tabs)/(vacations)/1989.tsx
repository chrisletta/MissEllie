import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { useEffect, useState } from "react";
import { Button, View } from "react-native";
import { Audio } from "expo-av";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerHeight={300}
      headerImage={
       <Image
          source={require('@/assets/images/1989PuertaPlata.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Puerta Plata
        </ThemedText>
      </ThemedView>
      <Collapsible title="Activities">
        <ThemedText>Sunbathing under a Palm Tree</ThemedText>
        <ThemedText>Happy Hour on the Beach</ThemedText>
        <ThemedText>Middle aged Canadian women and the cabin boys</ThemedText>
        <ThemedText>Dancing at night in the Cabana</ThemedText>
        <ThemedText>Power Outages... in search of a running shower</ThemedText> 
        <ThemedText>Escorted trip into town</ThemedText>                   
        <ThemedText></ThemedText>
      </Collapsible>
      <Collapsible title="Food and Drinks">
        <ThemedText>All you can eat Dominican arroz con pollo</ThemedText>
	<ThemedText>Tropicana</ThemedText>        
      </Collapsible>
      <Collapsible title="Souvenirs">
        <ThemedText>African Face Masks</ThemedText>
        <ThemedText>Straw Dolls</ThemedText>
      </Collapsible>
      <Collapsible title="Pics">
        <ThemedText>"Airport"</ThemedText>
        <ThemedText>"On the bridge"</ThemedText>
      </Collapsible>
      <Collapsible title="Memorable Lines">
        <ThemedText>
	"Happy Hour Twofers"
        </ThemedText>
      </Collapsible>
<ThemedText></ThemedText>
<M4APlayer />
<ThemedText></ThemedText>
<ThemedText></ThemedText>
    </ParallaxScrollView>
  );
}

export function M4APlayer() {
  const [sound, setSound] = useState(null);

  async function play1() {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/songs/one_two_three.m4a")     );
    setSound(sound);
    await sound.playAsync();
  }
  async function play2() {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/songs/conga.m4a")     );
    setSound(sound);
    await sound.playAsync();
  }
  async function play3() {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/songs/two_tickets_to_paradise.mp3")     );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      <Button title="Song: Two Tickets to Paradise by Eddie Money" onPress={play3} />
      <Button title="Song: 1-2-3 by Gloria Estefan" onPress={play1} />
      <Button title="Song: Conga by Gloria Estefan" onPress={play2} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactLogo: {
    height: 305,
    width: 400,
    top: 0,
    left: 0,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});
