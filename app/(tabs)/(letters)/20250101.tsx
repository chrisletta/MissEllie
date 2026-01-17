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
          36 Years Ago Today
        </ThemedText>
      </ThemedView>
      <ThemedText>The clock struck twelve</ThemedText> 
<ThemedText>and, unlike Cinderella,</ThemedText> 
<ThemedText>I, your prince, was about to run away.</ThemedText>
<ThemedText>Filled with despair,</ThemedText>
<ThemedText>Feeling no one cared.</ThemedText>
<ThemedText>Desperate, </ThemedText>
<ThemedText>Depressed,</ThemedText>
<ThemedText>Dejected,</ThemedText>
<ThemedText>Disenchanted.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Then came you.</ThemedText>
<ThemedText>A shining face in the crowd</ThemedText>
<ThemedText>A beautiful note amongst the loud,</ThemedText>
<ThemedText>With eyes that stunned like a taser</ThemedText> 
<ThemedText>and a smile that melted my layers.</ThemedText>
<ThemedText>Within minutes I was cast out of hell</ThemedText>
<ThemedText>And into a heaven I had never felt.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Not knowing what to say</ThemedText>
<ThemedText>I just kept talking… any old way.</ThemedText>
<ThemedText>Trying to be funny</ThemedText>
<ThemedText>Trying to impress</ThemedText>
<ThemedText>Trying to have you like me</ThemedText>
<ThemedText>Even though I was a mess.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>You asked me to dance</ThemedText>
<ThemedText>(Or was it a command?)</ThemedText>
<ThemedText>You held my hand</ThemedText>
<ThemedText>While walking to the floor</ThemedText>
<ThemedText>I followed you there</ThemedText>
<ThemedText>And continued to stare</ThemedText>
<ThemedText>Just like a Beatle’s song</ThemedText>
<ThemedText>I felt like I belonged</ThemedText>
<ThemedText>With you.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>You hung your arms</ThemedText> 
<ThemedText>Upon my shoulders</ThemedText>
<ThemedText>And clasped your hands</ThemedText>
<ThemedText>Around my neck</ThemedText>
<ThemedText>And I held on</ThemedText>
<ThemedText>To your hips</ThemedText>
<ThemedText>As you swayed </ThemedText>
<ThemedText>From side to side</ThemedText>
<ThemedText>A foreshadowing</ThemedText>
<ThemedText>Of a future scene</ThemedText>
<ThemedText>When you would be</ThemedText>
<ThemedText>My bride.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>We closed the bar</ThemedText>
<ThemedText>But stayed together</ThemedText>
<ThemedText>Not wanting </ThemedText>
<ThemedText>our encounter to end.</ThemedText>
<ThemedText>We had another drink</ThemedText>
<ThemedText>At another counter</ThemedText>
<ThemedText>And we tried to counter</ThemedText>
<ThemedText>Each quip with another.</ThemedText>
<ThemedText>But our timing and wit</ThemedText>
<ThemedText>Evaporated</ThemedText>
<ThemedText>Crowded out by JD & Coke.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Cupid’s dart did pierce my chest</ThemedText>
<ThemedText>But left no wound within my breast</ThemedText>
<ThemedText>For love’s mark is on the heart</ThemedText>
<ThemedText>And lasts much longer than a scar.</ThemedText>
<ThemedText></ThemedText>
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
