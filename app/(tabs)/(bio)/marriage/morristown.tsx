import { Image } from 'expo-image';
import { Platform, StyleSheet, Button, View } from 'react-native';
import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { router } from "expo-router";


export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/BayvilleCouch.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Morristown
        </ThemedText>
      </ThemedView>
      <Collapsible title="Moving In">
        <ThemedText>
		Name of the Bar?
	</ThemedText>
        <ThemedText>
		Her Friends: Dawn, Katie, Laura, Jean, Julie, Martha, Nanci?
	</ThemedText>
        <ThemedText>
		My Friends: Cap, Rich, Drew, Boo, Catman
	</ThemedText>
        <ThemedText>
		Darkness: Depression, despair, disinterest; ready to leave without saying goodbye
	</ThemedText>
      </Collapsible>
      <Collapsible title="Infertility">
        <ThemedText>
		The Look, the Hook and Pick Up Line
			Not the first time ever I saw your face
			But this time felt the earth move
        </ThemedText>
      </Collapsible>
      <Collapsible title="Adoption Home Study">
        <ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
		Description of the Couple
        </ThemedText>
<ThemedText>
"Christopher J. Letta is a forty-year-old Caucasian male of Scottish and Italian American descent. He is an <ThemedText style={{ backgroundColor: 'yellow' }}>
attractive</ThemedText> man who stands six feet tall and weighs one hundred ninety pounds, and has dark brown hair, hazel eyes, and a medium complexion. He is currently employed as a vice president in the systems management department of JP Morgan. He views himself as an honest and funny person who is easy going and calm. Christopher appears to be an intelligent and <ThemedText style={{ backgroundColor: 'yellow' }}>confident</ThemedText> man. Ellen Letta is a thirty-nine-year-old Caucasian female of Polish and Italian American descent. Ellen is an attractive woman who stands five feet two inches tall and weighs one hundred thirty pounds, and has brown hair, dark brown eyes, and a medium complexion. She is trained as a clinical dietitian, but is currently home taking care of her son, Benjamin who is four-years-old. Ellen describes herself as an <ThemedText style={{ backgroundColor: 'yellow' }}>organized, perceptive and caring</ThemedText> person. She appears to be a <ThemedText style={{ backgroundColor: 'yellow' }}>sensitive, intelligent and articulate</ThemedText> woman."
</ThemedText>
<ThemedText>
</ThemedText>
        <ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
		Background of the Adoptive Father
        </ThemedText>
<ThemedText>
"Christopher was raised in a middle class, traditional family. He believes he grew up with a good balance of discipline and forgiveness, and that his parents had a good sense of humor. Christopher describes himself as a quiet child who played mostly with his younger brother, Ronald, since they are only eighteen months apart. They are both good athletes and for a while were the best in the neighborhood. Christopher loved sports but also enjoyed making people laugh. Although he was shy, he had a lot of self-confidence. He sought recognition at home by performing rather than speaking. He does not remember ever giving in to peer pressure.</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
During adulthood, Christopher has gone through several emotional challenges. He lost a good friend during the September 11th tragedy in New York City, and he had to battle with testicular cancer (he has been in remission for [over 10] years). These experiences have helped him appreciate life even more. Christopher says the most positive and significant events of his adulthood have been his marriage to Ellen and the birth of his son, Benjamin. He tries to enjoy all he does. The adversities he experienced have helped him cherish all in his life.</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
Christopher enjoys music, reading and sports. He loves being a father is excited about raising another child."
</ThemedText>
<ThemedText>
</ThemedText>
        <ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
		Background of the Adoptive Mother
        </ThemedText>
<ThemedText>
"Ellen describes her childhood as a happy one in which she felt loved, secure, and well provided for by her parents. Ellen's parents fostered their children's independence while providing an organized and structured home life. Her parents stressed respect for authority figures and learning right from wrong. Discipline usually consisted of discussions and age appropriate consequences such as the loss of a privilege. Ellen attended a Catholic all girl's elementary and high school. Outside of school, she played tennis and the piano. She enjoyed the Science Club and became a volunteer in a nursing home when she was thirteen years old. Ellen stayed there for three years, and then worked part time as a lab clerk.
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
Growing up, Ellen remembers her teachers and parents instilling a strong value system. <ThemedText style={{ backgroundColor: 'yellow' }}>She always had a lot of friends</ThemedText> and enjoyed being with different people. After graduating high school, Ellen went to college in Upstate New York for four years. Upon graduation she moved back to her parents' house and became an adoption social worker for a foster care agency. She worked there for five years, and then decided to pursue another interest: nutrition. After she got married, Ellen went back to school and became a dietitian so she could help people lead healthier lives.
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
As a young adult, Ellen's most positive events are marrying Christopher and having their son, Benjamin. She describes herself as an <ThemedText style={{ backgroundColor: 'yellow' }}>outgoing</ThemedText> individual. She feels her personality is one of <ThemedText style={{ backgroundColor: 'yellow' }}>strength and gentleness</ThemedText>. Ellen feels she has endurance and gets beyond negative experiences. She is accepting of other differences and <ThemedText style={{ backgroundColor: 'yellow' }}>tries to look on the bright side</ThemedText> of every situation.
"
</ThemedText>
<ThemedText>
</ThemedText>
        <ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
		Marriage and Lifestyle
        </ThemedText>
<ThemedText>
"Christopher and Ellen met at a college reunion party in 1988. They both attended Hamilton College in Upstate New York. They were immediately attracted to one another. Christopher was attracted to Ellen's <ThemedText style={{ backgroundColor: 'yellow' }}>humor, intelligence, thoughtfulness and sensitivity</ThemedText>. Ellen was attracted to Christopher's <ThemedText style={{ backgroundColor: 'yellow' }}>humor, intelligence, and calm nature</ThemedText>. They were engaged exactly two years from the day they met. They were married a year and five months later in Staten Island , New York on May 30th, 1992.
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
Christopher and Ellen made an excellent adjustment to married life, and view themselves as partners who share all decisions and responsibilities. They attribute the success of their marriage to their mutual respect and trust. They also have similar values, a commitment to family, and common goals, including raising a family together. Each spouse reports great satisfaction with the marital relationship, and expresses that their <ThemedText style={{ backgroundColor: 'yellow' }}>personalities complement each other.</ThemedText> The Lettas resolve disagreements by discussing the issue, listening to one another, and then giving themselves time to sort out their opinions and feelings. They appear to resolve all conflicts easily because of their mutual respect and good communication. The Lettas have never been separated, considered divorce, or engaged in marriage counseling.
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
Christopher and Ellen enjoy a casual but active lifestyle, which will easily accommodate another child. Their lives are <ThemedText style={{ backgroundColor: 'yellow' }}>centered on family and friends</ThemedText>, which usually includes young children. The couple enjoys socializing with friends, dining out, going to the movies and spending time with their son. The Lettas feel that the mutual goal of raising a family together and spending more time with family and friends with their children will enrich an already <ThemedText style={{ backgroundColor: 'yellow' }}>strong and loving marriage</ThemedText>. The couple fees that they have the organization skills need to balance the responsibilities of family, household, and work."
</ThemedText>
<ThemedText>
</ThemedText>
        <ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
		References
        </ThemedText>
<ThemedText>
Six letters of reference from friends of longstanding, neighbors and colleagues were submitted to the record in support of the Lettas' adoption plans. The references were all enthusiastic about the couple's plan to adopt a child and attest to their having the qualities necessary to provide a stable, loving, nurturing home environment in which a child is likely to develop to his/her fullest potential. A letter from a very good friend of the Lettas states that, "We believe that Chris and Ellen are <ThemedText style={{ backgroundColor: 'yellow' }}>extraordinary parents</ThemedText> and <ThemedText style={{ backgroundColor: 'yellow' }}>any child would be blessed</ThemedText> to have them as parents. They have demonstrated strong parenting skills and a desire to develop a unified relationship with Benjamin". Another good friend says, "They embrace new and different cultures into their home with creativity. They provide their child with diverse educational, fun toys and adventures... Mr. and Mrs. Letta <ThemedText style={{ backgroundColor: 'yellow' }}>enrich the lives of the people they know</ThemedText>, therefore, I know they would do the same for any child placed with them." The Lettas commitment to family, friends and their community are reflected in the letters. Every reference emphasized how <ThemedText style={{ backgroundColor: 'yellow' }}>caring and loving</ThemedText> the Lettas are <ThemedText style={{ backgroundColor: 'yellow' }}>as individuals and as a couple</ThemedText>. There are no reservations and only praises about recommending the Lettas to adopt a child from Korea.

</ThemedText>
<ThemedText>
</ThemedText>
        <ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
		Evaluation and Recommendation
        </ThemedText>
<ThemedText>
"Christopher and Ellen Letta are an extremely intelligent, <ThemedText style={{ backgroundColor: 'yellow' }}>friendly, thoughtful and engaging couple</ThemedText>. Their marriage is built on a strong foundation of shared values, and mutual love and respect. They have supported one another through difficult times, and maintained their <ThemedText style={{ backgroundColor: 'yellow' }}>dedication and optimism</ThemedText>. They have consistently proven their ability to work as a team, with a strong focus and commitment to each other and their son. Christopher and Ellen also share <ThemedText style={{ backgroundColor: 'yellow' }}>close and loving relationships with extended family and friends</ThemedText>, all of whom look forward to being actively involved in the life of the couple's second child. They are loving and devoted parents, and Benjamin's development reflects their dedication to him.
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>

Child and Home Study Associates find Christopher and Ellen to be a responsible, loving and stable couple who possess the qualities necessary to provide a nurturing, secure and stimulating environment for a growing child. Child and Home Study Associates <ThemedText type="defaultSemiBold" style={{ backgroundColor: 'yellow' }}>approve Christopher Joseph Letta and Ellen Spatola Letta </ThemedText>as an adoptive couple and recommend the placement of a healthy Korean infant up to the age of one year.
"
</ThemedText>
<ThemedText>
</ThemedText>
      </Collapsible>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Motherhood"
        onPress={() => router.push("motherhood")}
      />
    </View>
<ThemedText>
</ThemedText>
<ThemedText>
</ThemedText>

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
    height: 250,
    width: 230,
    top: 0,
    left: 85,
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
  },
});
