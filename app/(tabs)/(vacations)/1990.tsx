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
      headerHeight={300}
      headerImage={
       <Image
          source={require('@/assets/images/1990VirginiaBeach.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Virginia Beach
        </ThemedText>
      </ThemedView>
       <Collapsible title="Activities">
        <ThemedText>King size bed</ThemedText>
        <ThemedText>Tennis</ThemedText>
        <ThemedText></ThemedText>
      </Collapsible>
      <Collapsible title="Food and Drinks">
        <ThemedText>Rabbit</ThemedText>
	<ThemedText>Captain Jack's Crab Legs</ThemedText>        
      </Collapsible>
      <Collapsible title="Souvenirs">
        <ThemedText>Virginia Beach T-Shirt</ThemedText>
      </Collapsible>
      <Collapsible title="Pics">
        <ThemedText>"Pressing the button to cross the street"</ThemedText>
        <ThemedText>"On the balcony"</ThemedText>
      </Collapsible>
      <Collapsible title="Memorable Lines">
        <ThemedText>
	"Happy Hour Twofers"
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
  reactLogo: {
    height: 300,
    width: 400,
    top: 0,
    left: 0,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});
