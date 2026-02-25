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
          A Poem to My Christopher
        </ThemedText>
      </ThemedView>                                           
<ThemedText>Walking along the path</ThemedText>
<ThemedText>of my life I have held</ThemedText>
<ThemedText>many hands.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>When I was very young</ThemedText>
<ThemedText>my parents held my hand</ThemedText> 
<ThemedText>tightly making me feel secure</ThemedText>
<ThemedText>and strong.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>When I started to grow</ThemedText>
<ThemedText>their grip loosened though</ThemedText>
<ThemedText>the memory of their support</ThemedText>
<ThemedText>and strength is still with me.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>My horizons broadened, there</ThemedText>
<ThemedText>were more paths and I began</ThemedText>
<ThemedText>to hold hands with many</ThemedText>
<ThemedText>people, some still with</ThemedText>
<ThemedText>me, others are vague images</ThemedText>
<ThemedText>in the past.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>One day I realized these</ThemedText>
<ThemedText>friends were no longer</ThemedText>
<ThemedText>enough. I searched</ThemedText>
<ThemedText>along the path for "mature love"</ThemedText>
<ThemedText>Along the way I held</ThemedText>
<ThemedText>hands with many but connected with few.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Sometimes he held too tightly</ThemedText>
<ThemedText>and I let go feeling it</ThemedText>
<ThemedText>wasn't right, our hands didn't</ThemedText>
<ThemedText>fit.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Other times, unsure of my feelings</ThemedText>
<ThemedText>I held on too long for fear</ThemedText>
<ThemedText>of being alone. It wasn't</ThemedText>
<ThemedText>right, our hands didn't fit.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>There came a time I</ThemedText>
<ThemedText>let my hand swing</ThemedText>
<ThemedText>loosely, no longer grasping</ThemedText>
<ThemedText>or accepting untrue hands</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Then as I was walking</ThemedText>
<ThemedText>on my path I met a man</ThemedText>
<ThemedText>whose hand fit mine.</ThemedText>
<ThemedText>Our fingers at the first</ThemedText>
<ThemedText>touch curled around each other</ThemedText>
<ThemedText>at home, secure.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>His hand was warm, sensitive and</ThemedText>
<ThemedText>strong. His love extended</ThemedText>
<ThemedText>from his fingertips to my</ThemedText>
<ThemedText>heart.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>I no longer feel lonely,</ThemedText>
<ThemedText>I feel strong. He has</ThemedText>
<ThemedText>given me this.</ThemedText>
<ThemedText></ThemedText>
<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}>I will never hold hands</ThemedText></ThemedText>
<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}>in this way with anyone</ThemedText></ThemedText>
<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}>but him. No man's</ThemedText></ThemedText>
<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}>hand will ever fit so</ThemedText></ThemedText>
<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}>perfectly to my own.</ThemedText></ThemedText>
<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}>No man's hand could</ThemedText></ThemedText>
<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}>touch me so deeply.</ThemedText></ThemedText>
<ThemedText></ThemedText>
<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}>Our hands will be</ThemedText></ThemedText>
<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}>linked, our grasp strong,</ThemedText></ThemedText>
<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}>faithful and tender</ThemedText></ThemedText>
<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}>for all eternity.</ThemedText></ThemedText>
<ThemedText></ThemedText>
<ThemedText>With Love forever</ThemedText>
<ThemedText>Ellen</ThemedText>

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
      require("@/assets/songs/cant_help_falling_in_love.mp3")     );
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
      <Button title="Song: Can't Help Falling In Love by Elvis Presley" onPress={play1} />
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
