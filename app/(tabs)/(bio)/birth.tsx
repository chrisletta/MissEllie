import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { HighlightText } from '@/components/highlighting';
import { Text } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/Baby.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Birth
        </ThemedText>
      </ThemedView>
      <ThemedText>Thursday, September 8th 1966</ThemedText>
      <Collapsible title="When and Where">
        <ThemedText>
		Time: 12:56 PM
        </ThemedText>
        <ThemedText>
		Where: Long Island College Hospital, Brooklyn NY
        </ThemedText>
        <ThemedText>
       </ThemedText>
        <ThemedText>
		Other: The premiere of "That Girl", and "Star Trek"
        </ThemedText>
      </Collapsible>
      <Collapsible title="Her Name">
        <ThemedText>
She was born September 8th 1966 to a devout Polish-American Roman Catholic mother. Her birthday exactly nine months from the <ThemedText type="defaultSemiBold">Immaculate Conception</ThemedText> of the Virgin Mary*. So the obvious appellation would have been Mary had it not already been given to her sister nearly 2 years earlier. More precisely her sister’s name was Mary Frances; a double first name, not first name Mary, middle name Frances; Mary Frances with no middle name. I suppose her mother could have chosen a different second half such as “Mary Ellen” with sister “Mary Frances”, but their home would soon have been confused with a nunnery. And so she was to be "
        <ExternalLink href="https://namediscoveries.com/names/ellen">
          <ThemedText type="link" style={{fontSize: 20}}>Ellen</ThemedText>
        </ExternalLink>”, no second half, no middle. Rather simple, but still “beautiful, and bright”, just as the Greeks had named the beauty that launched a thousand ships.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>
Speaking of Helen and Ellen, the name was not an easy one for myself or my father to learn. For me, the initial meeting was filled with animated conversation but lacked proper introductions including “what’s your name?” Within minutes of our parting a friend mentioned it, and saved me, so I could ask for her number, and when I called her later that week not have to ask for her name before I asked her on a date.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>
Years later, when she was accompanying me everywhere, my father suffered from a disease that would have amazed <ExternalLink href="https://en.wikipedia.org/wiki/My_Fair_Lady"><ThemedText type="link">Henry Higgins</ThemedText></ExternalLink>: rather than dropping he was picking up “h’s” uncontrollably, calling Ellen “Helen” despite deliberate hesitation and thoughtful pronunciation. In the beginning it was blamed on my brother’s girlfriend of the same name but it continued well into our marriage and long after my brother and Helen had broken ties.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>
Last but not least is the connection with my daughter Sofia SeongMee whose middle name (given by her birth mother) also means beautiful and bright.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>
Of course, Ellen did have other names: Elle, Ellie, Wagi**, Ellen-or, Bubbles, Weenie, Pyromaniac, Thirsty Girl, Schmellen, Mama Bear. But the nick name I chose was Miss Ellie after the character from the 70’s evening soap opera Dallas. </ThemedText>
<ThemedText></ThemedText>
<ThemedText style={{fontSize: 12}}> 
*Many think the immaculate conception is about Jesus being conceived in the womb; it is actually Mary in her mother Anne’s womb. <ExternalLink href="https://www.ewtn.com/catholicism/teachings/immaculate-conception-222">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink></ThemedText>
<ThemedText></ThemedText>
<ThemedText style={{fontSize: 12}}> 
**Phillipino word (given by her high school friend, Anita) which means "winner" </ThemedText>
      </Collapsible>
      <Collapsible title="Zodiac">
<ThemedText>
</ThemedText>
<ThemedText type="defaultSemiBold" style={{fontSize: 24}}>VIRGO </ThemedText>
<ThemedText>
</ThemedText>
<ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
Characteristics
</ThemedText>
<ThemedText>
Symbol: The Maiden
</ThemedText>
<ThemedText>
Element: Earth (<ThemedText style={{ backgroundColor: 'yellow' }}>grounded, practical, reliable</ThemedText>)
</ThemedText>
<ThemedText>
Modality: Mutable (adaptable, flexible, seeks many perspectives)
</ThemedText>
<ThemedText>
Ruling Planet: Mercury (<ThemedText style={{ backgroundColor: 'yellow' }}>communication, intellect</ThemedText>, logic)
</ThemedText>
<ThemedText>
Strengths: Meticulous, <ThemedText style={{ backgroundColor: 'yellow' }}>loyal</ThemedText>, analytical, <ThemedText style={{ backgroundColor: 'yellow' }}>hardworking, helpful</ThemedText>, precise, <ThemedText style={{ backgroundColor: 'yellow' }}>sympathetic</ThemedText>
</ThemedText>
<ThemedText>
Weaknesses: Overly critical (self & others), worry, shyness, perfectionism, can get stuck in details 
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
A Virgo is a practical, analytical, and detail-oriented Earth sign (August 23 - September 22) known for being hardworking, loyal, and systematic, often striving for perfection and improvement in themselves and their surroundings, though they can sometimes be overly critical or shy. Ruled by Mercury, they're excellent problem-solvers, <ThemedText style={{ backgroundColor: 'yellow' }}>attentive to health</ThemedText>, and find comfort in routines and <ThemedText style={{ backgroundColor: 'yellow' }}>organization</ThemedText>, making them <ThemedText style={{ backgroundColor: 'yellow' }}>reliable friends and partners who show love through acts of service and meticulous care. </ThemedText>
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
Key Traits </ThemedText>
<ThemedText>
Analytical & Logical: Highly intelligent, <ThemedText style={{ backgroundColor: 'yellow' }}>they process information like a computer</ThemedText>
, turning chaos into clarity
</ThemedText>
<ThemedText>
Detail-Oriented & Meticulous: They notice the small things,<ThemedText style={{ backgroundColor: 'yellow' }}> love lists</ThemedText>, and are driven to refine and improve everything
</ThemedText>
<ThemedText>
Practical & Grounded: As an Earth sign, they are <ThemedText style={{ backgroundColor: 'yellow' }}>deeply rooted in the material world</ThemedText> and approach life systematically. 
</ThemedText>
<ThemedText>
Loyal & Service-Oriented: <ThemedText style={{ backgroundColor: 'yellow' }}>Extremely dependable friends who show affection through helpful actions and are committed to long-term relationships</ThemedText>
</ThemedText>
<ThemedText>
<ThemedText style={{ backgroundColor: 'yellow' }}>Health-Conscious: Attuned to ingredients and well-being</ThemedText>, ruling the digestive system and daily routines.
</ThemedText>
<ThemedText> 
</ThemedText>
<ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
Potential Challenges 
</ThemedText>
<ThemedText>
Perfectionism: Can be overly critical of themselves and others, leading to stress. 
</ThemedText>
<ThemedText>
Worry & Shyness: Prone to anxiety and can be reserved, disliking asking for help or <ThemedText style={{ backgroundColor: 'yellow' }}>being in the spotlight. </ThemedText>
</ThemedText>
<ThemedText>
Overthinking: May get stuck on details or negative news, finding it hard to let go. 
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
What They Like & Dislike 
</ThemedText>
<ThemedText>
Likes: <ThemedText style={{ backgroundColor: 'yellow' }}>Animals</ThemedText>, healthy food, books, <ThemedText style={{ backgroundColor: 'yellow' }}>nature</ThemedText>, cleanliness, <ThemedText style={{ backgroundColor: 'yellow' }}>order.</ThemedText> 
</ThemedText>
<ThemedText>
Dislikes: Rudeness, asking for help, chaos, <ThemedText style={{ backgroundColor: 'yellow' }}>taking center stage. </ThemedText>
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
Highly Compatible Signs (Strong Attraction):
</ThemedText>
<ThemedText>
Taurus & Capricorn (Earth Signs): Offers a deep, natural understanding, shared love for routine, practicality, and building security, creating a stable foundation. 
</ThemedText>
<ThemedText>
Cancer, Scorpio, <ThemedText style={{ backgroundColor: 'yellow' }}>Pisces</ThemedText> (Water Signs): Provides emotional depth, loyalty, and intuition that resonates with Virgo's caring side, offering comfort and dedication
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText type="defaultSemiBold" style={{ backgroundColor: 'yellow' }}>
Pisces: A classic opposition match, offering emotional depth and balance to Virgo's practicality
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
Red Flags: Virgos can be very particular and seem difficult at times, which may alienate others and unintentionally lead to arguments
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
Yes, Virgos can seem moody because their desire for perfection, need for control, and tendency to overanalyze can lead to internal stress, withdrawal, or sudden shifts from quiet to expressive, especially when overwhelmed or things aren't "just right," making them appear inconsistent or irritable. They need personal space to recharge, and when this isn't respected, they can become cranky or distant, but it's often their practical, detailed nature showing through, not just random mood swings. 
</ThemedText>
<ThemedText>
Virgo's primary <ThemedText type="defaultSemiBold">love language</ThemedText> is often Acts of Service, showing devotion through practical help, making life easier, and <ThemedText style={{ backgroundColor: 'yellow' }}>thoughtful actions</ThemedText> like bringing coffee or doing chores, but some also find Words of Affirmation, recognizing their efforts, and Quality Time (especially with meaningful connection) important. They feel loved when their partner notices and appreciates their supportive efforts, as they are naturally helpful and detail-oriented. 
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
Key Aspects of Virgo's Love Language:
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
Acts of Service: This is huge for practical Virgos; <ThemedText style={{ backgroundColor: 'yellow' }}>they show love by doing things for you</ThemedText>, so they feel loved when you do things for them (e.g., helping with tasks, taking care of details).
</ThemedText>
<ThemedText>
Words of Affirmation: Receiving sincere praise and thanks for their efforts validates them, as they can be self-critical.
</ThemedText>
<ThemedText>
Quality Time: While they might seem busy, focused, <ThemedText style={{ backgroundColor: 'yellow' }}>present time with you is meaningful</ThemedText>
, showing you value them beyond their helpfulness.
</ThemedText>
<ThemedText>
Thoughtfulness: Anticipating needs and showing up with practical, caring gestures speaks volumes to a Virgo. 
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
How to Show Love to a Virgo:
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
Appreciate their efforts: A simple "thank you" for the small things goes a long way.
Be helpful: Offer to help with their projects or ease their burdens.
Communicate clearly: <ThemedText style={{ backgroundColor: 'yellow' }}>Virgos value direct, honest talk.</ThemedText>
</ThemedText>
<ThemedText>
Encourage emotional sharing: Gently <ThemedText style={{ backgroundColor: 'yellow' }}>invite them to open up</ThemedText>, as they can be reserved. 
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
<ThemedText type="defaultSemiBold" style={{fontSize: 24}}>Chinese Zodiac: Horse
</ThemedText>
</ThemedText>
<ThemedText>
There are several traits that best define this symbol:
likes unknown paths rather than routine
open-minded person
<ThemedText style={{ backgroundColor: 'yellow' }}>multi-tasking person
friendly person</ThemedText>
This zodiac animal shows some trends in terms of behavior in love which we explain here:
dislike limitations
<ThemedText style={{ backgroundColor: 'yellow' }}>appreciate having a stable relationship
has fun loving capabilities
likeable in a relationship</ThemedText>
Among the traits related to social and interpersonal relationship skills of this sign can be included:
<ThemedText style={{ backgroundColor: 'yellow' }}>proves to be talkative in social groups
enjoys large social groups
often perceived as popular and charismatic
proves to be intuitive about the needs in a frienships or social group</ThemedText>

If we study the influences of this zodiac on the evolution or path of someone's career we can affirm that:
<ThemedText style={{ backgroundColor: 'yellow' }}>likes being appreciated and participating in team work</ThemedText>
rather interested in the big picture than on details
<ThemedText style={{ backgroundColor: 'yellow' }}>has good communication skills
often perceived as extrovert</ThemedText>
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
<ThemedText type="defaultSemiBold" style={{fontSize: 24}}>Horse and Snake
</ThemedText>
</ThemedText>
<ThemedText>
The Horse and Snake are a moderately compatible match in the Chinese Zodiac; they're not enemies but need understanding, as the <ThemedText style={{ backgroundColor: 'yellow' }}>energetic, passionate</ThemedText> Horse contrasts with the <ThemedText style={{ backgroundColor: 'yellow' }}>calm</ThemedText>, wise Snake
, requiring effort for connection but offering intellectual and emotional depth if differences are respected. 
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
Strengths of the Match:
</ThemedText>
<ThemedText>
Complementary Traits: The Snake's wisdom balances the Horse's impulsiveness, while the Horse brings <ThemedText style={{ backgroundColor: 'yellow' }}>excitement</ThemedText> to the Snake's <ThemedText style={{ backgroundColor: 'yellow' }}>thoughtful</ThemedText> nature, creating a dynamic partnership.
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
Intellectual Connection: Both signs value intelligence, allowing for deep conversations and mutual appreciation of each other's minds. 
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
Challenges:
</ThemedText>
<ThemedText>
Different Paces: The <ThemedText style={{ backgroundColor: 'yellow' }}>fast-paced</ThemedText> Horse can overwhelm the more deliberate Snake, leading to friction.
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
Emotional Needs: The Horse seeks <ThemedText style={{ backgroundColor: 'yellow' }}>freedom and adventure</ThemedText>
, while the Snake desires security and intimacy, requiring compromise. 
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
Overall Outlook:
</ThemedText>
<ThemedText>
It's a relationship that can thrive with effort and communication, as their contrasting styles can be a source of growth rather than conflict
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
<ThemedText type="defaultSemiBold" style={{fontSize: 24}}>
Yin and Yang
</ThemedText>
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
<ThemedText type="defaultSemiBold">Horse</ThemedText>: Yin Fire spirit
</ThemedText>
<ThemedText>
Yin (The Dark Side)
</ThemedText>
<ThemedText>
Qualities: Passive, feminine, dark, cool, receptive, yielding, internal, downward.
Examples: Night, water, moon, rest, shade, stillness, winter, <ThemedText style={{ backgroundColor: 'yellow' }}>softness</ThemedText>. 
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
<ThemedText type="defaultSemiBold">Snake</ThemedText>: Yang Fire reality/earth
</ThemedText>
<ThemedText>
Yang (The Light Side)
</ThemedText>
<ThemedText>
Qualities: Active, masculine, light, warm, assertive, dynamic, external, upward.
</ThemedText>
<ThemedText>
Examples: Day, fire, sun, movement, brightness, activity, summer, <ThemedText style={{ backgroundColor: 'yellow' }}>hardness</ThemedText>.
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
Core Principles 
</ThemedText>
<ThemedText>
Interdependence: <ThemedText style={{ backgroundColor: 'yellow' }}>Neither can exist without the other</ThemedText> (e.g., you can't have light without darkness).
</ThemedText>
<ThemedText>
Dynamic Balance: They are in constant flux, shifting and transforming into each other (day becomes night, summer becomes winter).
</ThemedText>
<ThemedText>
Containment: Each contains the seed of the other (the dots in the symbol).
</ThemedText>
<ThemedText>
Goal: Harmony is achieved through their balance, not by eliminating one, as seen in Traditional Chinese Medicine (TCM) for health. 
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
Analogy: Candle
</ThemedText>
<ThemedText>
Yin: The wax (supports the flame).
</ThemedText>
<ThemedText>
Yang: The flame (consumes the wax)
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
Brother, 2 sister in laws

Earth sign, down to earth, realists

Humility, well grounded, courageous, Martha, person of action, organized

Ms Merschat

Greeks, Mythology, Astrology 

Star gazing … magi… in search of a savior, a king, a priest, royalty

A bright light… someone who lights up a room… married my aunt… she married her uncle



Competitive nature 



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
    width: 240,
    top: 0,
    left: 70,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});
