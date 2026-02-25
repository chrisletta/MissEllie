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
          A New York Fairy Tale
        </ThemedText>
      </ThemedView>
<ThemedText>
Once upon a time in a land far away there lived a princess. This princess lived all alone in a big white house on a hill. She frolicked in her yard with her loyal dog Bentley. Her life was a happy one. The princess had a prince but he lived far away because he wanted a short commute to his job in the big city. They sent each other letters professing their undying love for each other. One day the princess fell ill. She lost her energy and her zest for life. She could not pick up a pen to write her true love to tell him. She received letter upon letter from the prince who did not understand the princess' aloofness. To make matters worse his gallant silver steed was in the shop so he could not ride to see his true love. The prince became very, very, very sad. His evil friend Larry said, "Prince Chris forget about her and come party with me and pick up some babes." But the prince remained loyal and steadfast even in the absence of his love's letters. The prince became thin as did the princess. In fact the princess was near death - prostrate with sickness and grief. "Where oh where is my prince" the princess sobbed. The prince no longer able to stay away from the princess began to walk very quickly to his love. He packed a sack, some nectarines, and ham sandwiches. After walking 2 miles he realized he had to turn back as he forgot his keys (an aside). Anyway the prince continued on his journey to the princess.
</ThemedText>
<ThemedText>
 Along the way the prince met a wild boar which he wrestled to the ground. Nothing could keep him from his princess. Then the prince met up with some evil thieves. They robbed him of his last ham sandwich. Starvation did not stop the gallant prince. <ThemedText style={{ backgroundColor: 'yellow' }}>The love of his princess sustained him. He knew deep in his heart the princess still loved him.</ThemedText> After days of treacherous travelling and dodging potholes the princess' house came into sight. The princess was close to giving up on her prince and she began to cry a puddle of tears. Deep in her heart she knew he would come. A fever took hold of the sweet princess and she slipped into unconsciousness. The prince reach the house and broke down the door. He raced up the stairs and threw open the princess' door. Alas he thought "I am too late" as he looked down on his love's peaceful pale face. He fell to his knees and clasped the princess' hand in his own. The prince began to weep. A tear slid down the prince's cheek onto his love's. At that moment the princess opened her brown eyes and smiled. The prince and princess held each other close two vines entwining. The prince looked with his deep green eyes into the princess' brown ones and said <ThemedText style={{ backgroundColor: 'yellow' }}>my love my life</ThemedText> I think we need to get phones. And they lived happily ever after and ran up huge telephone bills.
</ThemedText>
<ThemedText style={{fontSize: 24}}>THE 💕 END </ThemedText>
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
      require("@/assets/songs/i_do_it_for_you.mp3")     );
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
      <Button title="Song: (Everything I Do) I Do It For You by Bryan Adams" onPress={play1} />
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
