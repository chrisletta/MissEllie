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
          Ferry Terminal Love
        </ThemedText>
      </ThemedView>
<ThemedText>                                                          1:30 AM</ThemedText>
<ThemedText>Hey Chris,
</ThemedText>
<ThemedText>Although I went out tonite you still invaded my thoughts and actions. Sometimes especially now I hate this. <ThemedText style={{ backgroundColor: 'yellow' }}>Whenever I go out with a 
group I feel like part of me is not there - I really do.</ThemedText>

</ThemedText>
<ThemedText>I try dancing with other guys or flirting but it doesn't work. I can never follow through because I always think of you - (xcuse the spelling
I am drunk.) I thought I could forget you for one night but I couldn't I kept comparing other guys to you and seeing that they don't even come close to 
you. I guess being with you all the time I don't always appreciate your intellect and wit and that it is something uniquely you.
</ThemedText>
<ThemedText>By the way I'm writing this in the Ferry Terminal standing up so it can't be neat. Anyway I with I could call you now but you're sleeping, I'm 
 <ThemedText style={{ textDecorationLine: 'line-through' }}> sta</ThemedText> sure dreaming innocent dreams? Do you miss me? No, of course not but I miss 
you.
</ThemedText>
<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}>I love you</ThemedText>
 </ThemedText>
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
      require("@/assets/songs/sweet_love.m4a")     );
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
      <Button title="Song: Sweet Love by Anita Baker" onPress={play1} />
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
