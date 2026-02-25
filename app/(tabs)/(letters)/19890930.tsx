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
          source={require('@/assets/images/pda.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Green M&M's
        </ThemedText>
      </ThemedView>
<ThemedText> </ThemedText>
<ThemedText>Chris,
</ThemedText>
<ThemedText>You make my senses soar</ThemedText>
<ThemedText>You make my hormones roar.</ThemedText>
<ThemedText>Whenever you're around</ThemedText>
<ThemedText>You make my heart pound.</ThemedText>
<ThemedText>I love your body,</ThemedText>
<ThemedText>I love your mind.</ThemedText>
<ThemedText>You have the greatest combination -</ThemedText>
<ThemedText>You are so fine</ThemedText>
<ThemedText></ThemedText>
<ThemedText>When you gaze at me</ThemedText>
<ThemedText>With eyes so green,</ThemedText>
<ThemedText>I want to do things to you</ThemedText> 
<ThemedText>That may cause a scene (<ThemedText style={{ fontStyle: 'italic' }}>Hee Hee</ThemedText>
)</ThemedText>
<ThemedText></ThemedText>
<ThemedText>I must state</ThemedText> 
<ThemedText>This poem ain't so great,</ThemedText>
<ThemedText>But its sealed</ThemedText> 
<ThemedText>With a kiss</ThemedText> 
<ThemedText>For your lips</ThemedText> 
<ThemedText>That I so miss</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Ellen</ThemedText>
<ThemedText>I love you cookie</ThemedText>
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
      require("@/assets/songs/wild_thing.mp3")     );
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
      <Button title="Song: Wild Thing by Tone Loc" onPress={play1} />
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
