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
          Signs
        </ThemedText>
      </ThemedView>
      <Collapsible title="History That Rhymes">
        <ThemedText>
          Hair assembly line - left shoulder

 surgery , before brain surgery 

Under affectionate mother - overflowing love and indulgence 

Rain Man - son on the spectrum

Society for Seaman’s Children - Sofia

Riis Park picnic - pig roast

Prom Date - Chris

Floating in Saint John - pool floats

Aunt Gene vacations - snacks and treats, chocolate fountains, cookie cakes, movie candy

Four star restaurants - holiday dinners

Thirsty Girl - signature cocktails 

Saint John Flora - Deck Habiscus

Cherry Tree - Sal

Fear of brain tumor- PLL

Endometriosis - PLL

Pool Light - PLL

Covid - PLL

Boots - Terry, Reggie, Sparkles, Charlie, and Puffin

Tennis - Jerry banishment

Prelude - Mazda

Hamster - Larry



Jack La Lane - abs of steel, barry, stairmaster, nordic track, treadmill, peloton racketball, headquarters plaza, kara, nick, ieva, corrine’s mom, planet fitness , walking butterworth with katie, mary anne, joanna, kristen, liz, alice



Floating vs steering/controlling -whitewater rafting, getting stuck on a rock…floating in the pool, getting sunburned snorkeling, snorkeling in aruba, lagging behind us



All who have nothing let them come to the water

All who have nothing let them come to the lord

Without money without price how can you spend your life

Except for the a Lord



Bank teller - credit card bills 



Tennis- winners no volleys



Singing Santa Lucia to Gina -Ben



Shopping with Zia



Artful Dodger



Gift shops
        </ThemedText>
      </Collapsible>
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
