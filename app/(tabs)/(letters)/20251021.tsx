import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Jacob and Rachel	
        </ThemedText>
</ThemedView>
<ThemedText>You ewe; you, you are my Rachel</ThemedText>
<ThemedText>Beautiful and bright, beautiful in form</ThemedText>
<ThemedText>I met you at a watering hole</ThemedText>
<ThemedText>You were tending your sheep</ThemedText>
<ThemedText>Who followed your lead</ThemedText>
<ThemedText>Were you a shepherdess?</ThemedText>
<ThemedText>Or a mere sheep following a shepherd?</ThemedText>
<ThemedText>Or a wolf in sheep’s clothing?</ThemedText>
<ThemedText>You certainly knew how to bite!</ThemedText>
<ThemedText>A bride without a head?</ThemedText>
<ThemedText>A wolf without a foot!</ThemedText>
<ThemedText>Howling like the wind!</ThemedText>

<ThemedText>{" "}</ThemedText>

<ThemedText>Am I your Jacob?</ThemedText>
<ThemedText>A sheep in wolf’s clothing</ThemedText>
<ThemedText>A hairy beast like Esau</ThemedText>
<ThemedText>But not Esau at all</ThemedText>
<ThemedText>Hairy and Scary</ThemedText>
<ThemedText>A Liar , Liar…</ThemedText>
<ThemedText>One who wrestles with God</ThemedText>
<ThemedText>I was never a good wrestler</ThemedText>
<ThemedText>Too reactive not aggressive</ThemedText>
<ThemedText>A lumberer, off balance, flat footed</ThemedText>
<ThemedText>Feet too wide, a duck, a goose</ThemedText>
<ThemedText>Graceful? Hardly…not even a black swan</ThemedText>
<ThemedText>I would flop not glide, splash not ripple</ThemedText>
<ThemedText>Kerplump, kerplooeey</ThemedText>
<ThemedText>No ratatouille</ThemedText>
<ThemedText>Humpty Dumpty</ThemedText>
<ThemedText>Brittle and Gooey</ThemedText>
<ThemedText>Hong Kung Fooey!</ThemedText>

<ThemedText>{" "}</ThemedText>

<ThemedText>A dreamer? A star gazer,</ThemedText>
<ThemedText>stunned by beauty, your beautiful taser</ThemedText>
<ThemedText>Your Star Trek phaser</ThemedText>
<ThemedText>Your Jedi Light saber</ThemedText>
<ThemedText>That pierced my heart</ThemedText>
<ThemedText>Like a barroom dart</ThemedText>
<ThemedText>You beautiful barfly</ThemedText>
<ThemedText>With angelic wings</ThemedText>
<ThemedText>You made me sing</ThemedText>
<ThemedText>You made me swoon,</ThemedText>
<ThemedText>Like COSMO’s moon</ThemedText>

<ThemedText>{" "}</ThemedText>

<ThemedText>Like an M&amp;M candy</ThemedText>
<ThemedText>Dipped in green honey</ThemedText>
<ThemedText>Like a slippery oyster</ThemedText>
<ThemedText>You made this boy stir</ThemedText>
<ThemedText>Oy! how his heart stirred</ThemedText>
<ThemedText>Like a lab centrifuge</ThemedText>
<ThemedText>And when our centers fused</ThemedText>
<ThemedText>Pressed together on the dance floor</ThemedText>
<ThemedText>I knew I wanted more</ThemedText>
<ThemedText>Just how much and for how long?</ThemedText>
<ThemedText>I thought you just another song;</ThemedText>
<ThemedText>Still blind I still could not quite see</ThemedText>
<ThemedText>You were my long sought symphony.</ThemedText>

<ThemedText>{" "}</ThemedText>

<ThemedText>Still his beating heart</ThemedText>

<ThemedText>{" "}</ThemedText>

<ThemedText>Like your son Joseph was a dreamer</ThemedText>
<ThemedText>Have I seen a stairway to heaven</ThemedText>
<ThemedText>Can it be bought?</ThemedText>
<ThemedText>You took the elevator</ThemedText>
<ThemedText>Sacrificing everything for your youngest</ThemedText>

<ThemedText>{" "}</ThemedText>

<ThemedText>Barren, adopting children from your servant</ThemedText>
<ThemedText>Dan and Naphtali</ThemedText><ThemedText></ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>Song: "Goodbye Girl" by Squeeze</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>Song: "I Saw Her Standing There" by Lennon and McCartney</ThemedText>
<ThemedText></ThemedText>
<ThemedText></ThemedText>
         </ParallaxScrollView>
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
});
