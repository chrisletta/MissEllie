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
          source={require('@/assets/images/AnimalHats.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Hungry
        </ThemedText>
      </ThemedView>
<ThemedText></ThemedText>
<ThemedText>Dear Elie,
</ThemedText>
<ThemedText>This is your delightful lover checking in with you at 23:00 hrs. Have I told you that your eyes are like aerial view of two black forest cakes? </ThemedText>
<ThemedText>Have I told you that your lips are like two adjacent cherry-coated bananas?</ThemedText>
<ThemedText>Have I told you that your hair is like a thousand golden strands of spaghetti dipped in a scrumptious chocolate sauce?</ThemedText>
<ThemedText>Haven't I told you that your nose are like two peppermint candies, the kind with the red swirls?</ThemedText>
<ThemedText>Have I told you that nose is like a thin carrot chopped in half and flavored with a slightly seasoned butter sauce?</ThemedText>
<ThemedText>Have I told you that your whole body is a giant box of Russell Stover's candies, each individually wrapped, and each with aphrodaisical
powers! Have I told you that I'm hungry for you?</ThemedText>
<ThemedText>Your voracious lover
</ThemedText> 
<ThemedText>Christopher</ThemedText>
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
      require("@/assets/songs/cant_get_enough_of_your_love.m4a")     );
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
      <Button title="Song: Can't Get Enough Of Your Love by Barry White" onPress={play1} />
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
    width: 240,
    top: 0,
    left: 70,
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
  },
});
