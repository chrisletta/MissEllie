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
          source={require('@/assets/images/MissEllieCaumsett.jpg')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Enough of being "Out-Carded" by You
        </ThemedText>
      </ThemedView>
<ThemedText>That does it! I've had just about enough of being "out-carded" by the likes of you! Afterall, who started all this letter writing stuff anyway? MOI! So just sit back little girl and get ready for the awesomest, funniest, bestest letter you've ever read! You might say that I'm setting rather high expectations for myself. Well, I say, hah! You just haven't come to know my true identify xx identity:(I had a problem spelling this word. Do you suppose I really don't know my true identity? Perhaps it was a Freudian slip. Maybe I didn't want to know my identity, who I am, what I am, why I am - But ENOUGH of this HORSE-SHIT - Back to our STORY ---->
</ThemedText>
<ThemedText>CHRISTOPHER - SUPER-BOYFRIEND! Da da DAH! da DA DAH! (stick men shouting "Yay" "Rah" "our hero!" and one with cloud message "Hey I didn't get a "Hoorah out of you!)
I know what you're saying: All this pomp and circumstance is really not nece...
DON'T TELL ME WHAT'S NECE. I know what's nece. And for my girlfriend, what's nece is everything under the sun, that will make her smile, laugh, burp, fart, or just plain convulse into orgasmic screeches of pleasure.
</ThemedText>
<ThemedText>I'll have you know, that I am in such a good mood right now that I am having your Chicken Primervera for the third (count em THREE) night in a row! Can you believe this? Is this love, or what? No, actually, it isn't love, it's just that I can't waste time with such mundane tasks as cooking when there is so much that I have to say to you! Unfortunately, I'm running out of space on this card, so you will have to wait for the next correspendence. Don't worry it will be mailed the same day. </ThemedText>
<ThemedText>Love Chris</ThemedText>
<ThemedText>P.S. I found some more space over here. Please don't read this part first. Turn the page! TURN THE PAGE! 
I just wanted to add, while I was still on this card, that although I was backed into corner and had to write "Love, Chris" in such small letters, it by no means reflects the current state of our relationship. Indeed, I feel at this very moment my bond with you to be like that of two hydrogen atoms (very strong). I didn't mean to parenthesize this as if you didn't recall your chemistry, but rather to emphasize, and repeat, to the POINT OF DRUMMING INTO YOUR HEAD ELLEN SPATOLA THAT I LOVE YOU MORE THAN ANY CREATURE ON EARTH! </ThemedText>
<ThemedText>And another thing, don't think that just because I seem like a such a great guy today that I'm going to stay this way. I told you from the start what a selfish, low-life I am and by God I'm going to stay that way! Okay, I may have this problem of being madly in love with you, but hey... Okay, I have this problem of wanting to lick the skin off your body, but that doesn't mean... Okay, I sometimes find myself hypnotized by your gorgeous brown eyes, but that doesn't MEAN I'M YOUR LOVE SLAVE! I mean, c'mon, slavery has been outlawed for centuries. You're not allowed to do that!
So if I catch you trying any of that stuff again, you know, showing off your body, looking at me with that cutsie wootsie face, I'm going to call Dr Ruth and have you thrown in jail, for crimes against humanity.
</ThemedText>
<ThemedText>I'm sorry if I seem a little defensive, but how is a guy supposed to react to all this love stuff? I mean it isn't enough that you have to exist, and suddenly come into my life. But you're good-looking, you're sexy, you're smart, and you like Bugs Bunny! And to top it all off, you have to be nice. I mean, I could survive with you just coming over now and then, and just kind of sitting there with those big bloopy eyes, and maybe occassionally kissing me on the nose. But then you have to start doing all that nice stuff: you know, like cooking for me, writing me letters, buying me presents, doing my laundry, calling me every night, cleaning my apartment, coming to watch me play softball when you would really want to stay in bed, 
going out with my friends when you would really rather stay in bed, going to my company picnic when you'd really want to stay in bed, and basically just being the crazy Ellen Spatola that you are, and loving me like no person ever has before. Why do you have to do that? Why me? I don't deserve what you give to me. (But I'm gonna take it because I love you) Sometimes I forget how much I really do love you. I always thought all the lovy-dovy stuff you read in poems and songs was always a lot of slop. But this past year and four months I've learned, that it isn't slop it's honest. When I think of you, I think of slop. Gooey mushy thoughts. I want to ooze all over you. Because that's the way you make me feel, like mush.
</ThemedText>
<ThemedText>There are many things in life that make you sad, unhappy, angry, violent. They make you callous, cynical, pessimistic. But there is nothing in the world like love, because it takes all these things, and squashes them with one smoothe stroke.
</ThemedText>
<ThemedText>I believe that I will never truly be unhappy again, so long as I stay with you.( and you don't dump me for someone named Clint). It is really frustrating sometimes because I think that I haven't said it all. And I haven't. Maybe you could understand me if you could see me right now, look into my eyes, or see my expression.
</ThemedText>
<ThemedText>I guess its love, but it feels too awesome to be expressed  in one sentence. I just can't wait to talk to you tonight.</ThemedText>
<ThemedText>Christopher</ThemedText>
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
      require("@/assets/songs/till.aac")     );
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
      <Button title="Song: Till by Tom Jones" onPress={play1} />
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
