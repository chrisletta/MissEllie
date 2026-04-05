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
      headerHeight={320}
      headerImage={
       <Image
          source={require('@/assets/images/sparkles.jpg')}
          style={styles.reactLogo}
        />
      }>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Sparkles
        </ThemedText>
      </ThemedView>
      <Collapsible title="Birthday">
        <ThemedText>
          Born November 10th 2011
        </ThemedText>
      </Collapsible>
      <Collapsible title="Dog Park">
        <ThemedText>
          Loved running the fence, chasing trucks, or taunting her friend the sheep dog.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Tough on Men">
        <ThemedText>
          Would harass men until she got to know them.
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
    height: 320,
    width: 400,
    top: 0,
    left: 0,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});
