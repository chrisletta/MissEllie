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
          Something other than "Dear Chris, Love Ellen"
        </ThemedText>
      </ThemedView>
<ThemedText>Dear Chris,
</ThemedText>
<ThemedText>
Well guess what, I’ve actually decided to write something on the inside of this card besides “Dear Chris" "Love Ellen.” I’m not writing this to you because you’ve been writing to me, but because writing about my feelings for you seems more real. When I say I love you that of course is real. But writing it and expressing my feelings for you this way is a breakthrough for me.
</ThemedText>
<ThemedText>
I guess over the past six years or so I’ve built up certain defenses so no guy I had a relationship with could hurt me. I very rarely verbally expressed my caring much less write about it. You on the other hand have broken down the barriers I had erected. <ThemedText style={{ backgroundColor: 'yellow' }}>I trust you </ThemedText>Chris, <ThemedText style={{ backgroundColor: 'yellow' }}>I have total faith in you</ThemedText> - I <ThemedText style={{ textDecorationLine: 'underline' }}>love</ThemedText> you. You’re such a wonderful person — I can’t even begin to list your qualities which made me love you and want to be by your side infinitely. Also I might add I <ThemedText style={{ textDecorationLine: 'underline' }}>never</ThemedText> ever ever ever have enjoyed kissing, making out, rolling around and making nooggie nooggie (is that how you spell it) with anyone as much as I do with you. Most of the time I feel (with other guys) that I 
was outside of myself watching - not really -> feeling that strongly or feeling that I belonged with the person. With you I always want to feel your touch or touch you myself. I love your strength both physical and mental — I feel so secure with you. I have never been totally myself with any guy I have ever dated. For some reason I instinctively sensed you would understand my many moods so I never am afraid to show them. Hey I’m kind of getting into this I can see why you like doing it.
</ThemedText>
<ThemedText>
In your letter you said you started caring for me around February. Well we must be in cinc because by that time I was asking myself do I love this guy? "Yes I do!" But at that time I felt I couldn't risk
scaring you away by saying I love you. So everytime I saw you a little voice kept saying inside me I love Chris over and over, I was afraid it might slip out unconsciously and you'd be out the door in a
sec. Thank God or Thank Chris that you told me soon after because I just might have blurted it out in the middle of a movie or something weird like that. 
</ThemedText>
<ThemedText>
Before when I was saying that I feel so secure with you I guess that's mostly true but I still have a few melodramatic - self pitying moments when I envision you breaking up with me, these of course 
are my own fantasies I've created. For example Memorial Day. I guess my insecurity after that day was a culmination of a few episodes. You Chris are very athletic, I on the other hand though not a clutz
do not pick up sports without practice. After that day at the beach I kept saying to myself Chris should be going out with someone like Dawn who plays volleyball, probably can pick up golf and any 
other sport you'd like to play. That made me a little sad because in that way I guess you won't be having much fun with me. But that's no biggy. </ThemedText>
<ThemedText>Another even more stupid but more funny in a dramatic way scene I depict is you meeting someone else when you're out on your own. I know I know you’re probably thinking, “I’m not good at that kind of thing.” But as I’ve said before women are animals! You are one hot looking man even though you don’t always realize it. Anyways I noticed, a few weeks back when you asked me to look through your cards for Adam’s #, that Jackie’s number was on the back of one of the cards. Then when you said you were going out with Joe and the gang I was sure Jackie would be there. Luckily I got your letter before so that I put this paranoid delusion out of my head. So Chris what do you think- am I crazy or am I suffering from the same wonderful “disease” as you. And you thought you were obsessed well you’re not alone baby. <ThemedText style={{ backgroundColor: 'yellow' }}>I thought I would never find someone like you. Sometimes I still can’t believe we found each other.</ThemedText></ThemedText>

<ThemedText>
 <ThemedText style={{ backgroundColor: 'yellow' }}>I only hope that I can make you as happy as you made me.</ThemedText>
 I love you Chr💕stopher with all my 💕 and 👞(soul). 
</ThemedText>
<ThemedText>Love</ThemedText> 
 <ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}>your soul mate</ThemedText> </ThemedText> 
<ThemedText>
Ellen
</ThemedText>
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
      require("@/assets/songs/first_time_ever_i_saw_your_face.mp3")     );
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
      <Button title="Song: First Time Ever I Saw Your Face by Roberta Flack" onPress={play1} />
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
