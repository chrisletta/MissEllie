import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';
import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Fonts } from '@/constants/theme';
import { Collapsible } from '@/components/ui/collapsible';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerHeight={300}
      headerImage={
      <Image
          source={require('@/assets/images/Love.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Love Letters
        </ThemedText>
      </ThemedView>

    <Collapsible title="Introduction**">
<ThemedText> The following is a love story. It is almost a fairy tale. Some of these letters could have been written by Jane Austen. They're truly romantic, embarassingly honest, at times hilarious, often crude, and almost too good to be true. But I suppose that is what Love is.
</ThemedText>
<ThemedText> </ThemedText>
<ThemedText> The intimacy and trust expressed in this correspondence was done via the US Postal Service which at the time was considered secure, and I'm sure if Ellen thought that I'd ever read these notes out loud to friends and family, let alone publish them on the internet she would have never written them down. So in away by sharing them I am betraying that trust. But, in the larger sense, the sharing of her thoughts, joy, happiness, doubts, fears, inspirations, and strengths paint a picture of such an extraordinary soul that hiding them in a box in an attic which I did our entire marriage seems to me akin to hiding a light under a bushel basket. And so I ask her forgivenss... once again, knowing how forgiving she was, especially to me.
</ThemedText>

      </Collapsible>
      <Text> </Text>
      <Link href="19890214-E" asChild>
        <Button title="19890214-E Pure and Innocent" />
      </Link>
      <Link href="19890214" asChild>
        <Button title="19890214-C Happy Valentine's Day to my main squeeze" />
      </Link>
      <Link href="19890318" asChild>
        <Button title="19890318-E First Birthday Card" />
      </Link>
      <Link href="19890323" asChild>
        <Button title="19890323-C New Job" />
      </Link>
      <Link href="19890410" asChild>
        <Button title="19890410-C Top of My List" />
      </Link>
      <Link href="19890420" asChild>
        <Button title="19890420-E I Love You The Most" />
      </Link>
      <Link href="19890430" asChild>
        <Button title="19890430-C Aquaintance Report" />
      </Link>
      <Link href="19890510" asChild>
        <Button title="19890510-C Sweetest Lunch of All" />
      </Link>
      <Link href="19890611" asChild>
        <Button title="19890611-C Can't Sleep" />
      </Link>
      <Link href="19890617" asChild>
        <Button title="19890617-E Something Other Than Dear Chris Love Ellen" />
      </Link>
      <Link href="19890625" asChild>
        <Button title="19890625-C Silly Love Songs" />
      </Link>
      <Link href="19890701" asChild>
        <Button title="19890701-E The Little Prince" />
      </Link>
      <Link href="19890722" asChild>
        <Button title="19890722-E In spite of my independent nature..." />
      </Link>
      <Link href="19890812" asChild>
        <Button title="19890812-C Drunken Love" />
      </Link>
      <Link href="19890821" asChild>
        <Button title="19890821-E Love in Brooklyn" />
      </Link>
     <Link href="19890908" asChild>
        <Button title="19890908-C Ellen's First Birthday" />
      </Link>
     <Link href="19890915" asChild>
        <Button title="19890915-E A Special Reminder..." />
      </Link>
     <Link href="19890923" asChild>
        <Button title="19890923-C I'm fine Halibut You" />
      </Link>
      <Link href="19890930" asChild>
        <Button title="19890930-E Green M&M's" />
      </Link>
      <Link href="19891004" asChild>
        <Button title="19891004-E Symbolic Lips" />
      </Link>
      <Link href="19891011" asChild>
        <Button title="19891011-E Two Tickets to Paradise" />
      </Link>
      <Link href="19891030" asChild>
        <Button title="19891030-E 11 month Anniversary" />
      </Link>
      <Link href="19891109" asChild>
        <Button title="19891109-E Terminal Love" />
      </Link>
      <Link href="19891122" asChild>
        <Button title="19891122-E Our Hands" />
      </Link>
      <Link href="19891126" asChild>
        <Button title="19891126-E Messy Apartment" />
      </Link>
      <Link href="19891128" asChild>
        <Button title="19891128-C Hungry" />
      </Link>
      <Link href="19891215" asChild>
        <Button title="19891215-C Ellen's Song" />
      </Link>
      <Link href="19891225" asChild>
        <Button title="19891225-E Star Gazing" />
      </Link>
      <Link href="19891225-C" asChild>
        <Button title="19891225-C Merry Christmas" />
      </Link>
      <Link href="19900105" asChild>
        <Button title="19900105-C Flower in The Winter" />
      </Link>
      <Link href="19900119" asChild>
        <Button title="19900119-E Don't Know Much" />
      </Link>
      <Link href="19900202" asChild>
        <Button title="19900202-E Great Guy Ta Have!" />
      </Link>
      <Link href="19900209" asChild>
        <Button title="19900209-E Candy and Sex" />
      </Link>
      <Link href="19900214" asChild>
        <Button title="19900214-E Two Palm Trees" />
      </Link>
      <Link href="19900301" asChild>
        <Button title="19900301-E New York Fairy Tale" />
      </Link>
      <Link href="19900715" asChild>
        <Button title="19900715-C Tired" />
      </Link>
      <Link href="19910214" asChild>
        <Button title="19910214-E Where's the Heart Shaped Ring?" />
      </Link>
      <Link href="20030214-C" asChild>
        <Button title="20030214-C A poem (by Chris Letta)" />
      </Link>
      <Link href="20030214" asChild>
        <Button title="20030214-E The late great Miss Ellie" />
      </Link>
      <Link href="20040214" asChild>
        <Button title="20040214-C Aphrodite" />
      </Link>
      <Link href="20050214" asChild>
        <Button title="20040214-C 1989 Valentine" />
      </Link>
      <Link href="20250101" asChild>
        <Button title="20250101-C 36 Years Ago Today" />
      </Link>
      <Link href="20251021" asChild>
        <Button title="20251021-C Jacob and Rachel" />
      </Link>
     <Text> </Text>
     <Text> </Text>
     <Text> </Text>
    </ParallaxScrollView>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  stepContainer: {
    gap: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 300,
    width: 240,
    top: 0,
    left: 70,
    marginTop: 0,
    marginBottom: 10,
    position: 'absolute',
  },
});