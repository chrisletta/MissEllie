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
          source={require('@/assets/images/Messy.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Every time with you... ( your apartment gets messy)
        </ThemedText>
      </ThemedView>
<ThemedText>                                                          1:30 AM</ThemedText>
<ThemedText>Dear Chris,
</ThemedText>
<ThemedText>I know you're probably wondering why I'm inundating you with cards. Well I don't know, maybe I do. I'm getting mushy (mushier) as we get closer
to the one year mark. I think about you more often especially when I see Christmas stuff in the stores. Last year I don't remember Christmas all that well.
I  don't remember feeling happy or awaiting Christmas with much emotion. Both of us a year ago were feeling quite alone. That may be why our love is so fierce 
and consuming. I truly cannot get enough of you. Sometimes after work I think about driving to see you even if it's only for one hour. Just long enough to 
stare into those passionate green eyes of yours, give you a hug, kiss and then I'd be on my way. (maybe) </ThemedText>

<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}>I love making you happy Christopher.</ThemedText> If you notice on the front of the card the phone is off the hook. Next time I come over that phone is going out
the window so I can have you totally to myself and you won't have to say no to anyone. Only yes yes yes to moi, moi, moi
</ThemedText>
<ThemedText>Kiss, Kiss, Kiss 💋
</ThemedText> 
<ThemedText>and another kiss
</ThemedText>
<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}>As usual I can never get enough of you and I adore you my sweet King</ThemedText>
 </ThemedText>
<ThemedText>Love again</ThemedText>
<ThemedText>Ellen</ThemedText>
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
      require("@/assets/songs/caught_up_in the_rapture.m4a")     );
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
      <Button title="Song: Caught Up In the Rapture by Anita Baker" onPress={play1} />
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
