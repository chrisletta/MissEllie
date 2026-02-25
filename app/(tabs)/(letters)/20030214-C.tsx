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
          A poem (by Chris Letta)
        </ThemedText>
      </ThemedView>

<ThemedText>Roses are red,</ThemedText>
<ThemedText>Violets are blue,</ThemedText>
<ThemedText>I love Miss Ellie,</ThemedText>
<ThemedText>And Benjamin too!</ThemedText>
<ThemedText></ThemedText>
<ThemedText>It seems like yesterday,</ThemedText> 
<ThemedText>But it was 1989</ThemedText> 
<ThemedText>When I first asked Miss Ellie</ThemedText>
<ThemedText>"Would you be mine?"</ThemedText> 
<ThemedText></ThemedText> 
<ThemedText>Fourteen years later</ThemedText> 
<ThemedText>And much more mature</ThemedText> 
<ThemedText>We've built a bond</ThemedText> 
<ThemedText>That will long endure.</ThemedText> 
<ThemedText></ThemedText> 
<ThemedText>And though we fight</ThemedText> 
<ThemedText>And argue over money</ThemedText> 
<ThemedText>We can always reconcile</ThemedText> 
<ThemedText>Over scoops of Chunky Munkey!</ThemedText> 
<ThemedText></ThemedText> 
<ThemedText>And then there's Ben,</ThemedText> 
<ThemedText>Our own personal Cupid,</ThemedText> 
<ThemedText>Who makes us act silly.</ThemedText> 
<ThemedText>(That's silly, not stupid)</ThemedText> 
<ThemedText></ThemedText> 
<ThemedText>He strengthens our bond</ThemedText> 
<ThemedText>Forged years ago</ThemedText> 
<ThemedText>He makes us pure</ThemedText> 
<ThemedText>As the driven snow</ThemedText> 
<ThemedText></ThemedText> 
<ThemedText>He lightens our hearts</ThemedText> 
<ThemedText>And brightens our days</ThemedText> 
<ThemedText>He elicits the child</ThemedText> 
<ThemedText>Of a once forgotten age.</ThemedText> 
<ThemedText></ThemedText> 
<ThemedText>But today is for us</ThemedText> 
<ThemedText>Just me and you</ThemedText> 
<ThemedText>For without us both</ThemedText> 
<ThemedText>What could we do?</ThemedText> 
<ThemedText></ThemedText> 
<ThemedText>All of my hopes</ThemedText> 
<ThemedText>All of my dreams</ThemedText> 
<ThemedText>Have you in the middle</ThemedText> 
<ThemedText>(Or at least at the seams)</ThemedText> 
<ThemedText></ThemedText> 
<ThemedText>I know you're saying</ThemedText> 
<ThemedText>He's painting a pretty picture</ThemedText> 
<ThemedText>But what you really want to know is:</ThemedText> 
<ThemedText>Who'll take the next kishka???</ThemedText> 
<ThemedText></ThemedText> 
<ThemedText>I suppose it all comes</ThemedText> 
<ThemedText>Down to this:</ThemedText> 
<ThemedText>I'm buttering you up</ThemedText> 
<ThemedText>For a Valentine's kiss</ThemedText> 
<ThemedText></ThemedText> 
<ThemedText>And now here in</ThemedText> 
<ThemedText>My final rhyme (hooray!)</ThemedText> 
<ThemedText>Oh please! OH</ThemedText> 
<ThemedText style={{textDecorationLine: 'underline', fontSize: 24}}>PLEASE!!</ThemedText> 
<ThemedText>Be My  💕</ThemedText> 
<ThemedText><ThemedText style={{textDecorationLine: 'underline', fontSize: 24}}>Valentine</ThemedText> <ThemedText style={{fontSize: 32}}>💕</ThemedText> </ThemedText> 
<ThemedText></ThemedText> 
<ThemedText>Love</ThemedText> 
<ThemedText>Christopher</ThemedText> 
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
      require("@/assets/songs/sunshine_of_my_life.m4a")     );
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
      <Button title="Song: You are the Sunshine of My Life by Stevie Wonder" onPress={play1} />
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
