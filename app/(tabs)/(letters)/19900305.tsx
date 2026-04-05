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
          source={require('@/assets/images/pda.jpg')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Breathless
        </ThemedText>
      </ThemedView>
<ThemedText>Dearest Christopher,</ThemedText>
<ThemedText>How are you? I'll probably find out when I call you tonite. Anyway I miss you today 3/5/90 and by the time you receive this 3/7/90 I will be prostrate with grief. I probably miss you if I lived with you also. I guess <ThemedText style={{ backgroundColor: 'yellow' }}>with you I feel complete.</ThemedText>
 100% perfect instead of 99.999% perfect. But that .1% means a <ThemedText style={{fontSize: 24}}>WHOLE LOT.</ThemedText> I wish life were easier. By easier I mean Larry wouldn't be living in the 3rd room but I, me yes me would be living with 2 hunks, oops I mean one. Yes you Christopher J Letta...</ThemedText>
<ThemedText>I love you</ThemedText>
<ThemedText>Kissy Kissy</ThemedText>
<ThemedText></ThemedText>
<ThemedText>I miss you! & <ThemedText style={{ backgroundColor: 'yellow' }}>Love you abundantly</ThemedText>,</ThemedText>
<ThemedText>Ellen</ThemedText>
<ThemedText style={{fontStyle: 'italic'}}>Ellen drawing a "love scale"</ThemedText>
<ThemedText style={{fontStyle: 'italic'}}>On a scale of love we are equal</ThemedText>
<ThemedText style={{fontStyle: 'italic'}}>Chris: "I adore you Ellen"</ThemedText>
<ThemedText style={{fontStyle: 'italic'}}>Ellen: "I know"</ThemedText>
<ThemedText style={{fontStyle: 'italic'}}>Notice Chris' muskles ; Notice Ellen is a thin stick figure. hmmm...</ThemedText>

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
      require("@/assets/songs/when_i_need_you.aac")     );
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
      <Button title="Song: When I Need You by Leo Sayer" onPress={play1} />
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
