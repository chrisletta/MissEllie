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
          source={require('@/assets/images/Love.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Sweetest Lunch Of All
        </ThemedText>
      </ThemedView>
<ThemedText>To the Sweetest Lunch of All - Ellen Spatola,
</ThemedText>
<ThemedText>You add spice to my life</ThemedText>
<ThemedText>Like mustard to knockwurst</ThemedText>
<ThemedText>You add icing to my days</ThemedText>
<ThemedText>Like whipped cream to parfaits</ThemedText>
<ThemedText></ThemedText>
<ThemedText>I want to put you between</ThemedText>
<ThemedText>two slices of bread, and</ThemedText>
<ThemedText>nibble you to death.</ThemedText>
<ThemedText>You came to me and I shall never hunnger again.</ThemedText>
<ThemedText>I want to drink your soul until I'm drunk. And drunk will I stay and let no man make me sober</ThemedText>
<ThemedText></ThemedText>
<ThemedText>For you are my life, my passion,</ThemedText>
<ThemedText>My flower which I will water every day</ThemedText>
<ThemedText>You are my treasure I will hid in my chest,</ThemedText>
<ThemedText>You are my love that tingles when I think of you.</ThemedText>
<ThemedText>You are my light that show me the way</ThemedText>
<ThemedText>You are the reason I wake up every day</ThemedText>
<ThemedText>And, you, my sweet Ellen, I will never let away.</ThemedText>
<ThemedText>No mountain nor ocean could keep me at bay.</ThemedText>
<ThemedText>My love can not wait; it must touch you EACH day.</ThemedText>
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
      require("@/assets/songs/waiting_for_a_girl_like_you.m4a")     );
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
      <Button title="Song: Waiting For A Girl Like You by Foreigner" onPress={play1} />
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
    height: 300,
    width: 240,
    top: 0,
    left: 70,
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
  },
});
