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
          Parties
        </ThemedText>
      </ThemedView>
      <Collapsible title="Halloween">
        <ThemedText>
	At Nancy's. At 102-35 67 Road. At Noreen's.Kids.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Around the World">
        <ThemedText>
	At 102-35 67 Road.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Barbecues and Pig Roasts">
        <ThemedText>
	At 5 Corn Hill
        </ThemedText>
      </Collapsible>
      <Collapsible title="New Year's Eve">
        <ThemedText>
	Squab dinner
        </ThemedText>
      </Collapsible>
      <Collapsible title="40th Anniversary">
        <ThemedText>
	At 5 Corn Hill
        </ThemedText>
      </Collapsible>
      <Collapsible title="Surprise 40th and 46th">
        <ThemedText>
	At 5 Corn Hill
        </ThemedText>
      </Collapsible>
      <Collapsible title="Candle Auction">
        <ThemedText>
	At 5 Corn Hill
        </ThemedText>
      </Collapsible>
      <Collapsible title="Gold Auction">
        <ThemedText>
	At 5 Corn Hill
        </ThemedText>
      </Collapsible>
      <Collapsible title="Newlywed">
        <ThemedText>
	At 5 Corn Hill
        </ThemedText>
      </Collapsible>
      <Collapsible title="Festivus">
        <ThemedText>
	At 5 Corn Hill
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
