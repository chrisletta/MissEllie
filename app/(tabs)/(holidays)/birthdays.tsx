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
      headerHeight={400}
      headerImage={
       <Image
          source={require('@/assets/images/birthday45.jpg')}
          style={styles.reactLogo}
        />
      }>
 
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          September Birthdays
        </ThemedText>
      </ThemedView>
      <Collapsible title="Family Events">
        <ThemedText>
          We should have celebrated her birthday more. It was usually just dinner and cake.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Surprise Party">
 	
      <Image
          source={require('@/assets/images/birthday46.jpg')}
          style={styles.pic2}
        />
        <ThemedText></ThemedText>
        <ThemedText></ThemedText>
        <ThemedText></ThemedText>
        <ThemedText></ThemedText>
        <ThemedText></ThemedText>
        <ThemedText></ThemedText>
        <ThemedText></ThemedText>
        <ThemedText></ThemedText>
        <ThemedText></ThemedText>
       <ThemedText>
          I regret there was only one (46th), but she enjoyed it.
        </ThemedText>
        <ThemedText></ThemedText>
        <ThemedText></ThemedText>
        <ThemedText></ThemedText>
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
    height: 400,
    width: 400,
    top: 0,
    left: 0,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
  pic2: {
    height: 200,
    width: 300,
    top: 0,
    left: 0,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },

});
