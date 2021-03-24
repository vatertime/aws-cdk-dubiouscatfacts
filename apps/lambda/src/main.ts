import * as _ from 'lodash';

export const handler = async function(event) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "response_type": "in_channel",
        "text": generateCatFact()
      })
    };
  };

export const allFacts = [
    '2 out of every 10 cats prefer solid colors over patterns.',
    '56% of cats prefer cold weather.',
    'In 1972, \'Papa Paws\' became the first cat to complete a solo flight across the Atlantic.',
    'On average, cats sleep 26 hours out of the day.',
    '72% of cats enjoy wearing sombreros.',
    'Cats burn 150 calories a minute whilst purring.',
    'It is illegal to own a cat in Antarctica.',
    'Cats\' whiskers can help predict earthquakes.',
    'The average memory of a cat is 15 minutes.',
    'Before “your mom” jokes were \'cool\'- there were “your cat” jokes.',
    '9% of cats believe chocolate milk comes from brown cows.',
    'Cat armpits don\'t sweat.',
    'During their lifetime, cats will produce enough saliva to fill two Olympic-size swimming pools.',
    'Cats love Carly Rae Jepsen.',
    'The longest cat whisker ever recorded was 15 inches long.',
    'Cats fart at a minimum of 20mph.',
    'Baby cats used to be called catlings.',
    'A cat was the first passenger on the hot air-balloon.',
    'The average cat gets bored of shopping after 26 minutes.',
    'After the premiere of “16 and Pregnant” teenage cat pregnancy rates dropped.',
    'Approximately 45% of power outages in New Zealand are caused by cats.',
    '95% of cats text things they would never say in person.',
    'While trying to find a cure for AIDS, the Mayo Clinic accidentally created glow in the dark cats.',
    'Eating carrots will not turn a cat\'s fur orange.',
    'Cats love Nevada license plates',
    'When calling a coin toss, 68% of cats will choose \'heads\' over \'tails\'.',
    'Cats can\'t rap well.',
    'The Twitter logo (bird) was originally a cat.',
    'Most cats have 4 legs.',
    'Chuck Norris is afraid of cats.',
    'Most cats prefer to wake up at 5am, CST.',
    'Apples, potatoes, and onions all taste the same if a cat eats them with their nose plugged.',
    'Vincent Van Gogh never painted a picture of a cat, ever.',
    'Michael Jackson longed to make a musical starring only cats but then he died.',
    'Cats (2019 film) was based on a true story.',
    'There are more than 10,000 cats in the world.',
];

const generateCatFact = () => {
    return _.sample(exports.allFacts);
}