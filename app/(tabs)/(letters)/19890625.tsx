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
          source={require('@/assets/images/MoonlightDrive.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Silly Love Songs
        </ThemedText>
      </ThemedView>
<ThemedText>Dear Ellen,
</ThemedText>
<ThemedText>
I loved your letter. You make me so happy sometimes it's pathetic. I feel so silly sometimes when I'm with you or when I think about you. That morning when I came back from your house I just laid in bed 
with the biggest grin on my face (even Mr. Happy had a grin on his face).
</ThemedText>
<ThemedText>
Anyway, I wanted to write you a song, or at least a poem. Let me tell you, it takes more that just being in love to be able to write a good poem. All I could come up with is this:
</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>I've listened to a million love songs</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>And thought them all pretty silly</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>But now it's me that's acting silly</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>And singing 'bout love all day long</ThemedText>
<ThemedText>
I think it's pretty bad. So rather than continue to torture your ears I've decided to plagiarize because I think there are so many people who have said what I want to say a whole lot better than I 
even could. Here goes:
</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>Longer than there's been fishes in the ocean</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>Higher than any bird ever flew</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>Longer than there've been stars up in the heavens</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>I'll be in love with you.</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>Take my hand, take my whole life too</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>For I can't help falling in love with you.</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>You fill up my senses like a night in a forest,</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>Like a mountain in Spring time, like a walk in the rain,</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>Like a storm in the desert, like a sleepy blue ocean</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>I love you, I love you, I love you</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>That's all I want to say</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>My love, there's only you in my life</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>The only thing that's right</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>My first love, you're every breath that I take</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>You're every step I make</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>I need you, I need you, I need you</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>I need to make you see</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>What you mean to me</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>I'm gonna love you til the heavens stop the rain</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>I'm gonna love you til the stars fall from they sky</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>For you and I</ThemedText>
<ThemedText>
Well now that I've recited a good half hour of "LITE FM" <ThemedText style={{ textDecorationLine: 'line-through' }}>songs</ThemedText> I still don't feel satisfied. Do you really know how I feel?
I wonder. One day I'll have to cut myself open and show my heart - there's a permanent "E" engraved on it. I think we're doing great.  And I'm fully recovered from two Saturdays ago. The disease
 is spreading and getting worse - I hope I die with it.
</ThemedText>
<ThemedText>
I think I like you.
</ThemedText>
<ThemedText>
from the
</ThemedText>
<ThemedText>
Prince who will obey
</ThemedText>
<ThemedText>
Cristofo
</ThemedText>
<ThemedText></ThemedText>
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
      require("@/assets/songs/michelle.m4a")     );
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
      <Button title="Song: Michelle by The Beatles" onPress={play1} />
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
