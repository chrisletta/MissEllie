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
          Can't Sleep
        </ThemedText>
      </ThemedView>
<ThemedText>Dear Ellen,
</ThemedText>
<ThemedText>
It's 5:30 in the morning and I can't sleep because I'm <ThemedText type="defaultSemiBold">MADLY</ThemedText> in love with you.
I<ThemedText style={{ textDecorationLine: 'line-through' }}>m</ThemedText> mean, what's going on here? I came home at one o'clock in the morning, I have to play softball at eight, and here I am writing a letter fully awake. </ThemedText>
<ThemedText>
I feel like my soul is going to burst if I don't vent my delirium. God dammit all. Look what you're doing to me. I guess part of it
is sexual. I keep thinking of your body - how I want to put ketchup on your neck and your breasts and have breakfast. "I am sick, I'm
a sick man. But <ThemedText style={{ textDecorationLine: 'line-through' }}>wh</ThemedText> how can you say that I am mad?" Now I know how
Edgar Allan Poe felt. I hope I don't murder anyone. You know I'd do anything for you. Beg, borrow, steal, murder? Why not? Actually, I
think I've been drugged. There has to be a logical explanation for all of this. I mean how can you take a pathetic anti-social, cynical,
recluse and turn him into a Mr. Rogers type-fairy, with nothing else to talk about except love, happiness, the sun, the moon, and the stars!
It's got to be drugs!</ThemedText>
<ThemedText>
I think you first started giving them to me sometime in February. You probably slipped them in my drinks somehow. Oh you must have dropped a
whammy in my wine last night because I'm flying baby, whooh! There's definitely a chemical imbalance. </ThemedText>
<ThemedText>Ellen! <ThemedText style={{fontSize: 24}}> ELLEN!!</ThemedText> I hate you! I <ThemedText style={{ textDecorationLine: 'line-through' }}>loy</ThemedText> (I love you so much I can't even spell anymore) love you SO MUCH. We've got to stop seeing each other. That's it.
No more. I hate being this way. Well, maybe once more; well maybe I'll see you until the end of the week, oh, the end of the month but that's
it; okay the year - LISTEN I'M NOT GONNA LEAVE TIL I'M 89! But you better believe ME on my 90th Birthday; you're HISTORY BABE! 
</ThemedText>
<ThemedText>God, some people just don't know when to leave. If you ever left me - you think I'm strange now. Wow, I'd start talking to horses
at Central Park! Seriously, I'd have my sister sue you for intentional psychosis. (That didn't come out right but I'm too upset to fix it.)
</ThemedText>
<ThemedText> Ellen, let me try to calm down. I can't! <ThemedText style={{fontSize: 24}}> I CAN'T!!</ThemedText> Okay let me try again. I know I 
keep talking about us splitting up jokingly - and you must think "hmmm, why does he joke about it all the time? He must be thinking about it all 
the time." I do. I can't help it. All my life I've always had an idea of what I'd be doing one, two or ten years from now. For the past six years I 
haven't had a clue - and its been very disturbing for me. I know we've only known each other for six months, but I'm pretty sure I know what I'm going to be doing ten years from now; I'll be in bed with you watching cartoons! I can't WAIT! <ThemedText style={{fontSize: 24}}> I CAN'T. I CAN'T. I CAN'T.</ThemedText>
Ellen I need a SEDITIVE. Please give me a sediGIVE! Do something, its not healthy, is it? I guess I like being sick - so long as you're the nurse.
AW - aren't I sweet? Ah that's where you're wrong. I'm mean, grotesque, ugly, immature, cowardly weak, and selfish! But I love you more than anything in this 
GALAXY! (Thought I was gonna say world didn't you? ALWAYS KEEP YOU ON THE EDGE) Do you believe all this CRAP? I mean seriously - I guess you really
can't think all of this up. I guess I really am in love because the time is now 6:10 and I'm still writing! I could write to you forever. I could talk
to you forever. I want to be with you forever. (That's what you call perfect parallel structure, by the way) Am I realy saying this - sometimes I can't 
censor anything that comes out. I guess I'm being honest - because they are all virgin thoughts. Isn't that nice - I have pure thoughts - well most of 
them, anyway - I guess you can't count the ones with the ketchup. If I were a poet, I'd write you a poem. If I were a singer, I'd sing you a song. If I 
were a garbage man, I'd take out your garbage! But I'm Chris and I am what I am, cause I eat me spinach, at least all I can finish, I'm Chris and I
love Ellen Spatola - da da dee da do dee DOLA!</ThemedText>
<ThemedText> 
Do you have any idea why I wrote this letter? I don't mean why did I write to you? I mean <ThemedText style={{fontSize: 24}}> WHY?</ThemedText> Why 
am I here? Why am I talking to you? <ThemedText style={{ textDecorationLine: 'underline' }}>Why</ThemedText> did we meet? Was it FATE that brought 
us together? Did some guy sit down a million years ago and say - "Oh yeah and then were gonna make this kinda cooky guy with lots of hair on his chest -
his parents are gonna call him Chris though he would have preferred they stuck with Cliff - yeah then he's gonna hook up with this fiesty but good-looking 
chick name Ellen - she'll be a little <ThemedText style={{ textDecorationLine: 'line-through' }}>unc</ThemedText>wild at first but he'll rub his hairy chin on her neck and she'll calm down, and they'll live happily ever after." Maybe its just by chance that we're here. Maybe <ThemedText style={{ textDecorationLine: 'line-through' }}>are</ThemedText>our molecules are positioned in such a way that you have to like me - no matter what you say you gots to! Oh Ellen, 
I believe that everything revolves around me. Those people who died three thousand years ago building stupid pyramids - they just did that for me - they knew that these pyramids weren't being built for the Pharoahs or the cats. <ThemedText style={{ textDecorationLine: 'line-through' }}>Shit</ThemedText>
<ThemedText style={{ textDecorationLine: 'underline' }}>Shiiiit!</ThemedText>  We is building dis here peermid for dis dude named Chris. He's gonna need 
something to read about in third grade! And so here you are - another something in my life. I don't know if you're even real. You may be just a dream. 
A funny thing just happened ( I am not kidding ) my alarm clock just went off. It's quarter to seven. God is telling me something. 
<ThemedText style={{fontSize: 24}}> WAKE UP</ThemedText> you fool! But I don't want to - I want to dream about Ellen!
</ThemedText>
<ThemedText> Well I'm awake now. Time to get up. I'm awake, but I'm still in love.
</ThemedText>
<ThemedText> I wish you could make me breakfast right now. Nothing fancy just a few eggs over easy toast bacon etc.
</ThemedText>
<ThemedText> Until future outbursts of emotion,
</ThemedText>
<ThemedText> your love slave,
</ThemedText>
<ThemedText style={{ textDecorationLine: 'underline' }}> Christopher
</ThemedText>
<ThemedText></ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>Video clip: "Young Frankenstein - Sedigive skit" by Mel Brooks and Gene Wilder</ThemedText>
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
      require("@/assets/songs/think_im_in_love.mp3")     );
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
      <Button title="Song: Think I'm in Love by Eddie Money" onPress={play1} />
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
