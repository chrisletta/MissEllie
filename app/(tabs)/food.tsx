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
          source={require('@/assets/images/2006_11_Chef.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Food
        </ThemedText>
      </ThemedView>
      <Collapsible title="Two Foodies">
        <ThemedText>Okay we were Italian... what do expect?</ThemedText>
      </Collapsible>
      <Collapsible title="Miss Ellie's Kitchen">
        <ThemedText>
          "For my grandparents the kitchen had always been the heart of the home. It was where meals were made and shared, a place of work and rest, where the family gathered to begin and end the day. And as each day passed the room stored a history. Some meals were simple, some elaborate, but all were an offering given by the cook. The countertop was the altar on which her fingers bled and her brow sweat in its preparation. But what was remembered was not the work, but fruits of the labor. Kitchens like my grandmothers became the crucible of tradition linking generations together, a familial communion transcending time and space."  </ThemedText>
      <ThemedText>
	</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}> paragraph 3, Chapter 5, "Buried Treasures Lost and Found"</ThemedText>
      <ThemedText>
	</ThemedText>
      <ThemedText>
	</ThemedText>
      </Collapsible>
      <Collapsible title="Dietitian and Snack Lady">
        <ThemedText>What is healthier a celery stick or an M&M cookie?</ThemedText>
      </Collapsible>
      <Collapsible title="Signature Cocktails">
        <ThemedText>Thirsty girl training...</ThemedText>
      </Collapsible>
      <Collapsible title="Bon Appetit Magazines">
        <ThemedText>Holiday Recipes</ThemedText>
      </Collapsible>
      <Collapsible title="Uncle Guiseppes">
        <ThemedText>Well deserved vacation</ThemedText>
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
