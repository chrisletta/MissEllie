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
      headerHeight={400}
      headerImage={
      <Image
          source={require('@/assets/images/cupid.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Great guy TA HAVE SEE!
        </ThemedText>
      </ThemedView>
<ThemedText>Dear Snookums,</ThemedText>
<ThemedText>It's a good thing cuipd didn't have that last drink before he shot his arrows at us. Actually I think if we had one more drink that night we may never have met. I remember by the time I met you I had resigned myself to just getting plastered. But then again it was a JD & Coke that got us together. Oh Well such is life. I can't expect to make sense when I'm so much in love with you.</ThemedText>
<ThemedText>"Happy Valentine's Day"</ThemedText>
<ThemedText>A wee bit early just 'cause I love you</ThemedText>
<ThemedText>and you're a great guy</ThemedText>
<ThemedText style={{fontSize: 24}}>Ta Have</ThemedText>
<ThemedText style={{fontSize: 24}}>Seee --</ThemedText>
<ThemedText>Love</ThemedText>
<ThemedText>Ellen</ThemedText>
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
      require("@/assets/songs/crazy_little_thing_called_love.m4a")     );
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
      <Button title="Song: Crazy Little Thing Called Love by Queen" onPress={play1} />
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
    height: 400,
    width: 290,
    top: 0,
    left: 70,
    marginTop: 0,
    marginBottom: 10,
    position: 'absolute',
  },
});
