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
          source={require('@/assets/images/motherhood.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Children
        </ThemedText>
      </ThemedView>
      <Collapsible title="Benjamin Joseph">
		<ThemedText>
		Born: Saturday August 8th 2001, 12:35 am; 7 pounds, 6 ounces, 20.5 inches at Morristown Hospital, Morristown NJ</ThemedText>
		<ThemedText>
       		</ThemedText>
		<ThemedText>
		Baptized: Sunday, November 4th 2001, 1:30 pm at Saint Thomas More Church Convent Station NJ, 
		Reception: L'allegria Ristorante, Madison NJ; Godparents: Mary Frances Sabo and Ron Letta
       		</ThemedText>
		<ThemedText>
       		</ThemedText>
		<ThemedText>
		Sacrament of Reconciliation: Monday, December 7th 2009 at Saint Virgilius Church Morris Plains NJ
       		</ThemedText>
		<ThemedText>
       		</ThemedText>
		<ThemedText>
		Holy Communion: Sunday, May 16th 2010, 10:30 am at Saint Virgilius Church Morris Plains NJ; Reception: Coco Pazzo, Morris Plains NJ;
       		</ThemedText>
      </Collapsible>
      <Collapsible title="Sofia Seong Mee">
        <ThemedText>
		Born: October 10th 2005, 5:51pm; 2.9 kilograms (6.4 pounds), 46 centimeters (18.1 inches) Cheongju, Chungcheonguk, Korea
       		</ThemedText>
		<ThemedText>
       		</ThemedText>
		<ThemedText>
		Placement: November 30th 2005
       		</ThemedText>
		<ThemedText>
       		</ThemedText>
		<ThemedText>
		Gotcha: April 26th 2006 , Laguardia Airport,  NY, NY
       		</ThemedText>
		<ThemedText>
       		</ThemedText>
		<ThemedText>
		Adoption: February 23rd 2007, 8:30 am at Morris County Superior Court, Morristown, NY
       		</ThemedText>
		<ThemedText>
       		</ThemedText>
		<ThemedText>
		Baptized: Sunday,May 6th 2007 at Saint Virgilius Church Morris Plains NJ; Reception: Coco Pazzo, Morris Plains NJ; Godparents: Ron and Andrea Letta
		</ThemedText>
		<ThemedText>
       		</ThemedText>
		<ThemedText>
		Holy Communion: Saturday, May 3rd 2014, 11:30 am at Saint Virgilius Church Morris Plains NJ; Reception: 5 Corn Hill Dr Morristown NJ
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
    height: 400,
    width: 400,
    top: 0,
    left: 0,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});
