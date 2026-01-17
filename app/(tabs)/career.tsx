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
          Career
        </ThemedText>
      </ThemedView>
      <Collapsible title="Adoption Social Worker">
        <ThemedText>
          Employer: Society for Seamen's Children
        </ThemedText>
        <ThemedText>
          Hired: July 1988
        </ThemedText>
        <ThemedText>
          Resigned: May 1992
        </ThemedText>
        <ThemedText>
          Colleagues: Marcella, Anne Marie, Sue, Billy, Marnie
        </ThemedText>
      </Collapsible>
      <Collapsible title="Weight Loss Counselor">
        <ThemedText>
          Employer: Jenny Craig
        </ThemedText>
        <ThemedText>
          Hired: June 1992
        </ThemedText>
        <ThemedText>
          Resigned: March 1997
        </ThemedText>
        <ThemedText>
          Colleagues: Carole
        </ThemedText>
      </Collapsible>
      <Collapsible title="Registered Dietitian">
        <ThemedText>
          Employer: Chilton Memorial Hospital
        </ThemedText>
        <ThemedText>
          Hired: March 1997
        </ThemedText>
        <ThemedText>
          Resigned: July 2001
        </ThemedText>
        <ThemedText>
          Colleagues: Michelle, Kim, Sherry
        </ThemedText>
      </Collapsible>
      <Collapsible title="Supermom">
        <ThemedText>
          Employer: God
        </ThemedText>
        <ThemedText>
          Hired: August 11 2001
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
