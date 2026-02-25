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
          Tired
        </ThemedText>
      </ThemedView>
<ThemedText>Dear Ellen,
</ThemedText>
<ThemedText>
I'm tired. Let's face it, I'm pooped! I'm just waiting for a burst of inspiration to electrify my pen. But I don't think it's coming. I just got out of class
and I have this urge to talk to you, to say something funny, to say something profound. It seems sometimes <ThemedText style={{ textDecorationLine: 'line-through' }}>I</ThemedText> like I haven't said anything really good in a long time. I feel like I haven't had time to stop and think about things. I used to
do it all the time. I guess now a days if I spend time thinking about what I'm doing I won't have time enough to do it. Does that make any sense - 
it sounds good and I guess that's worth something. I don't know what it is, I'm a sucker for eloquence or just new ways of saying the same old thing. Maybe 
what I really want to be is an English teacher, although my English really isn't that good. I'd love to just sit around and read books. I always say that, 
but I hardly spend any of my time reading. Maybe all I really want to do is quote famous writers at parties and hear people say "Oh, he's an intellectual."
That's what I want to be: an intellectual. Not really. I want to  be with you, that's all. That's pretty simple huh. Oh, sometimes it gets hard; you know, 
when there's traffic and stuff, but I really am pretty content with my existence. That's a real blase way of saying I'm madly in love with you.
</ThemedText>
<ThemedText>
What more, do I want? Oh, not much. Just more of what I've already got. I don't want to be greedy or <ThemedText style={{ textDecorationLine: 'line-through' }}>anoth</ThemedText> anything, but I wouldn't mind spending the rest of my life with you.
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
PART Two:
</ThemedText>
<ThemedText>
I'm sitting in my Quantitative Methods class. I just finished my exam. It was easy peasy. I hope it keeps up this way. I missed you this morning. I would
have called earlier but I didn't know what time you got in. I felt like calling you again at 11:00 o'clock, but I figured you were going to be busy, 
and I really should have kept working even though I'm a little bit ahead of schedule. I have a guilt complex I guess if I don't work diligently for at
least 33 hours a week. Sometimes I wish I could be different, sometimes I don't. Peter Paul Almond Joy's got NUTS, Mounds DON'T. How are you peanut?
You're looking pretty good, you know. I've been watching you.
</ThemedText>
<ThemedText>Elly, you are my North Star, with you, I can never be lost.
</ThemedText> 
<ThemedText>I think we're like two ships that crashed into each other <ThemedText style={{ textDecorationLine: 'line-through' }}>in the night</ThemedText>.
It's been smooth sailing ever since.
</ThemedText> 
<ThemedText></ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>Video clip: "Blazing Saddles - Lily von Schtup" by Mel Brooks</ThemedText>
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
      require("@/assets/songs/here_there_and_everywhere.m4a")     );
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
      <Button title="Song: Here, There & Everywhere by the Beatles" onPress={play1} />
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
