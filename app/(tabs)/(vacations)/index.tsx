import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Platform, StyleSheet } from 'react-native';
import { Collapsible } from '@/components/ui/collapsible';

export default function VacationsScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerHeight={300}
      headerImage={
       <Image
          source={require('@/assets/images/1989PuertaPlata.png')}
          style={styles.reactLogo}
        />
      }>
<ThemedView>
      <Collapsible title="3 V's of Bon Vivant">
        <ThemedText>
VACATION, VACATION, VACATION!</ThemedText>
<ThemedText></ThemedText>
<ThemedText>
We would sometimes go on vacation 3 times a year. Some people work for the weekend. Miss Ellie worked for vacation!
         </ThemedText>
<ThemedText></ThemedText>
      </Collapsible>
      <Collapsible title="Vacation Relics">
        <ThemedText>
Years ago her Grandma called them "boobatsoos"... aka trinkets, "katchkees", mementos of an experience, an attraction, or vacation. For Miss Ellie, the signature item was a Christmas ornament. Christmas being one of her favorite holidays, and the one most connected with "giving"; hence, what would be more appropriate "gift" to purchase in a "gift shop" but a Christmas ornament. And so, she could not pass through or by a gift shop without entering, and each vacation or destination included not only the itinerary of the local attractions, but the search for the "christmas ornament gift shop" to obtain the relevant memento. At the time, being the cheapskate that I am, I thought it all such a waste of money. In hindsight, I am so happy she did what she did, and I have it now as a relic of our experience together.
         </ThemedText>
      </Collapsible>
<ThemedText></ThemedText>
<ThemedText></ThemedText>
<ThemedText>Select the year...</ThemedText>
 </ThemedView>
      <Link href="1970s" asChild>
        <Button title="1970s" />
      </Link>
      <Link href="1980s" asChild>
        <Button title="1980s" />
      </Link>
      <Link href="1989" asChild>
        <Button title="1989" />
      </Link>
      <Link href="1990" asChild>
        <Button title="1990" />
      </Link>
      <Link href="1991" asChild>
        <Button title="1991" />
      </Link>
      <Link href="1992" asChild>
        <Button title="1992" />
      </Link>
      <Link href="1993" asChild>
        <Button title="1993" />
      </Link>
      <Link href="1994" asChild>
        <Button title="1994" />
      </Link>
      <Link href="1995" asChild>
        <Button title="1995" />
      </Link>
      <Link href="1996" asChild>
        <Button title="1996" />
      </Link>
      <Link href="1997" asChild>
        <Button title="1997" />
      </Link>
      <Link href="1998" asChild>
        <Button title="1998" />
      </Link>
      <Link href="1999" asChild>
        <Button title="1999" />
      </Link>
      <Link href="2000" asChild>
        <Button title="2000" />
      </Link>
      <Link href="2001" asChild>
        <Button title="2001" />
      </Link>
      <Link href="2002" asChild>
        <Button title="2002" />
      </Link>
      <Link href="2003" asChild>
        <Button title="2003" />
      </Link>
      <Link href="2004" asChild>
        <Button title="2004" />
      </Link>
      <Link href="2005" asChild>
        <Button title="2005" />
      </Link>
      <Link href="2006" asChild>
        <Button title="2006" />
      </Link>
      <Link href="2007" asChild>
        <Button title="2007" />
      </Link>
      <Link href="2008" asChild>
        <Button title="2008" />
      </Link>
      <Link href="2009" asChild>
        <Button title="2009" />
      </Link>
      <Link href="2010" asChild>
        <Button title="2010" />
      </Link>
      <Link href="2011" asChild>
        <Button title="2011" />
      </Link>
      <Link href="2012" asChild>
        <Button title="2012" />
      </Link>
      <Link href="2013" asChild>
        <Button title="2013" />
      </Link>
      <Link href="2014" asChild>
        <Button title="2014" />
      </Link>
      <Link href="2015" asChild>
        <Button title="2015" />
      </Link>
      <Link href="2016" asChild>
        <Button title="2016" />
      </Link>
      <Link href="2017" asChild>
        <Button title="2017" />
      </Link>
      <Link href="2018" asChild>
        <Button title="2018" />
      </Link>
      <Link href="2019" asChild>
        <Button title="2019" />
      </Link>
      <Link href="2020" asChild>
        <Button title="2020" />
      </Link>
      <Link href="2021" asChild>
        <Button title="2021" />
      </Link>
      <Link href="2022" asChild>
        <Button title="2022" />
      </Link>
      <Link href="2023" asChild>
        <Button title="2023" />
      </Link>
<ThemedText></ThemedText>
<ThemedText></ThemedText>
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
  reactLogo: {
    height: 305,
    width: 400,
    top: 0,
    left: 0,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});