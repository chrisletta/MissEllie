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
      headerHeight={450}
      headerImage={
      <Image
          source={require('@/assets/images/AnneMariesShowerMay90.jpg')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Living Bra Suicide
        </ThemedText>
      </ThemedView>
<ThemedText>(Card Text) "You think you got problems! My living bra tried to commit suicide!</ThemedText>
<ThemedText>It claimed it was leading an empty life."</ThemedText>
<ThemedText>Yes only 1 hour after being with you</ThemedText>
<ThemedText>Hello my King, my love Hunk and my passionate Knight.</ThemedText>
<ThemedText>See, <ThemedText style={{ backgroundColor: 'yellow' }}>you can be a trinity also. </ThemedText>I am overwelmed & consumed with feelings of lust and impure thoughts. Of you naked prone (or sitting up).. I'll let you fill in the rest. Actually my thoughts of you now are totally innocent. I felt so secure and loved in your arms tonite. You would think after all this time that it would feel the same or it wouldn't be as exciting. But <ThemedText style={{ backgroundColor: 'yellow' }}>when I'm in those strong arms of yours I never want to leave.</ThemedText></ThemedText>

<ThemedText>Maybe next time I'll crazy glue our arms around each other. Maybe we can quit our jobs and be naked models for an artist. Then we can be entwined in each others arms forever.</ThemedText>
<ThemedText>Sometimes I have a very sharp tongue and I may snap at you. I never would have noticed it unless you pointed it out to me. It makes me sick to think I hurt you. Sometimes I think maybe I'm not good enough, pretty enough, smart enough (you get the picture) for someone as wonderful as you. But then I realize I must be OK for you to love me the way you do. Christopher if we were in the Middle Ages you would be the strongest, handsomest and most chivalrous knight in all the land. I love your soul and your body and Mr. Happy and of course all those super sharp brain cells you have -></ThemedText>
<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}>Without you I would never would know what love is. I cherish you every day.</ThemedText> Enough mush - </ThemedText>
<ThemedText>Gimmee a kiss (with a little tongue) -> let's get user friendly</ThemedText>
<ThemedText>I</ThemedText>
<ThemedText>Love</ThemedText>
<ThemedText>You</ThemedText>
<ThemedText>Clint </ThemedText>
<ThemedText>(Oops I meant Chris)</ThemedText>
<ThemedText>hee hee</ThemedText>
<ThemedText>I bet you though there was another man. Didn't you?</ThemedText>
<ThemedText>Kissy Kissy</ThemedText>
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
      require("@/assets/songs/beautiful.m4a")     );
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
      <Button title="Song: Beautiful by Gordon Lightfoot" onPress={play1} />
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
    height: 450,
    width: 400,
    top: 0,
    left: 0,
    bottom: 20,
    marginTop: 0,
    marginBottom: 30,
    position: 'absolute',
  },
});
