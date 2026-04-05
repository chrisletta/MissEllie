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
      headerHeight={500}
      headerImage={
      <Image
          source={require('@/assets/images/Beauty2.jpg')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Well Christopher 
        </ThemedText>
      </ThemedView>
<ThemedText>Well Christopher,</ThemedText>
<ThemedText>This card though it seems lighthearted really isn't. I've taken your advice about writing about things that are troubling. Maybe the other birthday cards will be more fun. I don't know. Anyway I asked myself these past few weeks where we stand. I know where I stand but I am unclear where you are these days in relation to me. Its not that I want constant adoration but it isn't like it used to be. I used to look forward coming home and seeing funny cards in my mailbox. I think you must have liked me more because now I'm lucky if I get a phone call and you may say you love me but rarely without me saying it first. Of course <ThemedText style={{ backgroundColor: 'yellow' }}>you don't miss me</ThemedText> or love me and you're a very honest person than saying things like that would be a lie. <ThemedText style={{ backgroundColor: 'yellow' }}>I wonder if you really want to be with me anymore or is it just a habit.</ThemedText> Sometimes I think you really don't care about me. <ThemedText style={{ backgroundColor: 'yellow' }}>You don't seem to care about my welfare</ThemedText> - I could die coming home on the BQE and you don't express any concern about me getting home. That's just an example. Then I think it's my fault <ThemedText style={{ backgroundColor: 'yellow' }}>I make it too easy for you.</ThemedText> I don't expect much at least I used to not expect much. I'm changing. I'm realizing I matter and I'm worth alot more than I previously thought. I guess you helped me with that - my self-esteem. <ThemedText style={{ backgroundColor: 'yellow' }}>Writing this is a little actually very scary </ThemedText>because I don't know what your reaction will be. It could  be anything from (1) later Ellen, you're  too demanding for me, (2) Ellen you're right I don't love you. (3) I don't know what I feel or (4) ____________________ fill in the blanks.</ThemedText>
<ThemedText>What do you think?</ThemedText>
<ThemedText>Ellen</ThemedText>
<ThemedText></ThemedText>
<ThemedText>I don't want to influence you by telling you that I love you very much. - still!</ThemedText>

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
    height: 550,
    width: 300,
    top: 0,
    left: 50,
    marginTop: 0,
    marginBottom: 10,
    position: 'absolute',
  },
});
