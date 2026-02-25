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
          source={require('@/assets/images/Beauty.jpeg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Meaning - What's It All About
        </ThemedText>
      </ThemedView>
<Collapsible title="Who She Was">
      <Collapsible title="Martha">
        <ThemedText>
          She was a Martha, did not stay still
        </ThemedText>
      </Collapsible>
      <Collapsible title="Mary (Poppins)">
        <ThemedText>
         She was a Mary (Poppins)
        </ThemedText>
      </Collapsible>
      <Collapsible title="Light">
        <ThemedText>
          She was a light and torch, a firework
        </ThemedText>
      </Collapsible>
      <Collapsible title="X-Ray Vision">
        <ThemedText>
          She was perceptive... she saw through things and thus had a great sense of humor        </ThemedText>
      </Collapsible>
      <Collapsible title="Pyromaniac">
        <ThemedText>
          She started fires, put a flame to your ass (e.g. exlax brownies)
        </ThemedText>
      </Collapsible>
      <Collapsible title="Rule breaker">
        <ThemedText>
          She was no hall monitor, she snuck out to play, played hooky, she wasn't a tool..balanced work with play (particularly the play)
        </ThemedText>
      </Collapsible>
</Collapsible>
<Collapsible title="Faith, Hope, and Love">
      <Collapsible title="Faith and Trust">
        <ThemedText>
          She maintained a hidden piety, did not wear her faith on her sleeve. Her optimism was rooted in trusting that there was alot of good in
the world, and that we need only open our eyes to see it and open the door to find it. She trusted me and ultimately trusted God, perhaps not always with words
from her lips, but clearly through the actions she took: attending mass every week, volunteering at her children's school, or supporting their extra curricular activities, helping friends in need, sharing her gifts with others.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Hope and Perseverance">
        <ThemedText>
         In Spanish to wait and hope is the same word. Anticipation was one of the songs on our wedding video. We waited to find each other. When we dated we waited for the weekend or for the end of the day to talk to each other. We wrote notes to each other. Even in having children, we had to wait. We delayed gratification. And the result of this waiting was a deeper appreciation of the gift. If every day were Christmas oh how ho-hum the gift would be.
        </ThemedText>
        <ThemedText>
         She always dwelt on the positive rather than negative. She was an "Ellie Upper". Her fiance's cancer, her endometriosis, our infertility, her kids medical and emotional issues, friends in crisis, even the death of a loved one she faced with a strength of spirit and a will to persevere, and would never let grief overcome her. She was always looking forward to her next outing, her next vacation, next holiday, next party or event. She even looked forward to old age  
(as a Starbucks barrister living in Sedona, Arizona).
        </ThemedText>
      </Collapsible>
      <Collapsible title="Love and Sacrifice">
        <ThemedText>
          She never sought the spotlight, never sought praise or recognition, always looked to serve others; she got pleasure from making others happy. She would do anything for her husband, her kids, her relatives and friends, and her pets.
        </ThemedText>
      </Collapsible>
</Collapsible>
<Collapsible title="Home - Paradise">
        <ThemedText>
          She grew up in a secure and beautiful home, beautiful not only physically but spiritually as well, filled with love. Although our home at 5 Corn Hill Drive was much more modest physically, the love she nurtured within its wall was just as grand.
        </ThemedText>
        <ThemedText>
          But like a young bird we all must leav the comfort of the nest and experience life. We need to travel, to go on outings, let go of our parents hands and cross the street alone, find our own friends,
        </ThemedText>
</Collapsible>
<Collapsible title="Milestones - Collapsing Time">
        <ThemedText>
          God often punished census takers...those who count rather than those who just see abundance in everything around them. We started counting anniversaries of when we met. Now I'm counting anniversaries of when she left.
        </ThemedText>
</Collapsible>

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
      require("@/assets/songs/still.m4a")     );
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
      <Button title="Song: Still by The Commodores" onPress={play1} />
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
    height: 430,
    width: 240,
    top: 0,
    left: 70,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});
