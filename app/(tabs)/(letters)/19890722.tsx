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
          source={require('@/assets/images/missu.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          In spite of my independent nature, I miss you terribly
        </ThemedText>
      </ThemedView>
<ThemedText>Hi Chris,
</ThemedText>
<ThemedText>
I know, you must be saying why is she giving me this card I was just with her. Well it's 9:30 PM and I have been away from you for 11 hours and it may be weird
but I do feel a little empty. If I was busy doing something exciting like bombing cucarachas maybe I wouldn't feel this way. (Nah!) <ThemedText style={{ backgroundColor: 'yellow' }}>I feel complete really 
totally complete when I'm with you.</ThemedText>
</ThemedText>
<ThemedText>
I never noticed before that I was incomplete. I have 2 eyes nose etc... but in my heart I was. Chris <ThemedText style={{ backgroundColor: 'yellow' }}>you make me incredibly happy! I can only hope that I make
you just as happy if not more.</ThemedText>
</ThemedText>
<ThemedText>
At times your sensitivity and concerns about things I say surprises me. I guess I'm still getting accustomed to the fact that you really listen to me. I never
had this before with other guys. I may not be very good at reassuring you that I think we have a strong relationship but I know we do.
</ThemedText>
<ThemedText>
Isn't it exciting - we have so many little things to discover about each other. Maybe that's why I miss you so much. <ThemedText style={{ backgroundColor: 'yellow' }}>I want to be with you, learn more about you and share every second of life with you. Chris you are the most wonderful part of my life.</ThemedText> I feel the bond between us growing stronger in every day we 
spend together and in every thought that we have about each other when we are apart.
</ThemedText>
<ThemedText>
I <ThemedText style={{ textDecorationLine: 'underline' }}>love</ThemedText> you 💕💕💕💕 Chris my <ThemedText style={{ backgroundColor: 'yellow', textDecorationLine: 'underline' }}>King</ThemedText> 
</ThemedText>
<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}><ThemedText style={{ textDecorationLine: 'underline' }}>Forever</ThemedText> your girl</ThemedText>
</ThemedText> 
<ThemedText>Ellen
</ThemedText> 
<ThemedText></ThemedText>
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
      require("@/assets/songs/forever_man.m4a")     );
    setSound(sound);
    await sound.playAsync();
  }
  async function play2() {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/songs/thank_god_i_do.mp3")     );
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
      <Button title="Song: Forever Man by Eric Clapton" onPress={play1} />
      <Button title="Song: Thank God I Do by Lauren Daigle" onPress={play2} />
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
    width: 400,
    top: 0,
    left: 0,
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
  },
});
