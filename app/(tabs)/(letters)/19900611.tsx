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
          source={require('@/assets/images/199007_clove_lake.jpeg')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Oi Veh.. The Guilt
        </ThemedText>
      </ThemedView>
<ThemedText>Dear Christopher,</ThemedText>
<ThemedText>
Oi veh! The guilt I feel after pointing out that you are human. That's what I did you know. So you're not perfect. Join the club to which I am a full time member.You are the best Christopher.</ThemedText>
<ThemedText>This all came over me like a wave in a vast expanse...Anyway it just came over me. I think and know you are witty, smart, exceptionally attractive, sensitive, patient, giving (actually a little less giving this past weekend), caring, vulnerable, strong, solid (hee hee), brave, faithful, sweet, hunkish, philosophical of course... I could list all night but I do need my beauty rest.</ThemedText>
<ThemedText>
About our relationship: I have decided to think about it in a different frame of reference. I will think of our love affair as star-crossed. Yeh like Romeo and Juliet without all the tragedy, yeh that's it Romeo and Juliet, Sampson and Delilah. I bet you know those hairs on your neck that I cut actually lessened your sexual willpower. Remember 2 weekends ago my love stud. I think its time for  another trim.
Anyway so many forces have kept us apart - the ocean, the BQE, NYU, you name it we've been victims of it. But I will not let myself depressed or held down. I will never be hungry again! I will not depress my sweet Christopher!</ThemedText>
<ThemedText>I hope you believe me because someone has to. You will probably remind me of what I wrote because you know what a short term memory I have. Actually I may deny the whole thing. No really I meant what I said and I said what I meant Ellen loves Christopher 100%.</ThemedText>
<ThemedText>Kisses and hugs my prince</ThemedText>
<ThemedText>Love your lover</ThemedText>
<ThemedText>Ellen</ThemedText>
<ThemedText>Till we meet again my love</ThemedText>
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
      require("@/assets/songs/till.aac")     );
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
      <Button title="Song: Till by Tom Jones" onPress={play1} />
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
    width: 400,
    top: 0,
    left: 0,
    bottom: 20,
    marginTop: 0,
    marginBottom: 30,
    position: 'absolute',
  },
});
