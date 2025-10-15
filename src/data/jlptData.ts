export interface GrammarPoint {
  id: string
  title: string
  explanation: string
  examples: {
    japanese: string
    english: string
    romaji: string
  }[]
  usage: string
}

export interface Exercise {
  id: string
  type: 'fill-blank' | 'translation'
  question: string
  answer: string
  options?: string[]
  explanation?: string
}

export interface Vocabulary {
  id: string
  japanese: string
  reading: string
  english: string
  example?: {
    japanese: string
    english: string
  }
  dictionaryLink?: string
}

export interface JLPTLevel {
  level: string
  grammar: GrammarPoint[]
  exercises: Exercise[]
  vocabulary: Vocabulary[]
}

// Comprehensive N5 data with essential grammar points
export const n5Data: JLPTLevel = {
  level: 'N5',
  grammar: [
    {
      id: 'desu-masu',
      title: 'です・ます (Desu/Masu)',
      explanation: 'The polite form ending for verbs and adjectives. Used in formal situations.',
      examples: [
        {
          japanese: '私は学生です。',
          english: 'I am a student.',
          romaji: 'Watashi wa gakusei desu.'
        },
        {
          japanese: '今日は暑いです。',
          english: 'Today is hot.',
          romaji: 'Kyou wa atsui desu.'
        }
      ],
      usage: 'Use です with nouns and い-adjectives. Use ます with verbs.'
    },
    {
      id: 'particle-wa',
      title: 'は (Wa) Particle',
      explanation: 'The topic particle. Indicates what the sentence is about.',
      examples: [
        {
          japanese: '私は田中です。',
          english: 'I am Tanaka.',
          romaji: 'Watashi wa Tanaka desu.'
        },
        {
          japanese: 'これは本です。',
          english: 'This is a book.',
          romaji: 'Kore wa hon desu.'
        }
      ],
      usage: 'Place は after the topic of the sentence.'
    },
    {
      id: 'particle-ga',
      title: 'が (Ga) Particle',
      explanation: 'The subject particle. Indicates the subject of the sentence.',
      examples: [
        {
          japanese: '雨が降っています。',
          english: 'It is raining.',
          romaji: 'Ame ga futte imasu.'
        },
        {
          japanese: '猫がいます。',
          english: 'There is a cat.',
          romaji: 'Neko ga imasu.'
        }
      ],
      usage: 'Use が to mark the subject, especially with existence verbs like います and あります.'
    },
    {
      id: 'particle-wo',
      title: 'を (Wo) Particle',
      explanation: 'The object particle. Marks the direct object of a verb.',
      examples: [
        {
          japanese: '本を読みます。',
          english: 'I read a book.',
          romaji: 'Hon wo yomimasu.'
        },
        {
          japanese: 'コーヒーを飲みます。',
          english: 'I drink coffee.',
          romaji: 'Koohii wo nomimasu.'
        }
      ],
      usage: 'Place を before the verb to indicate what is being acted upon.'
    },
    {
      id: 'particle-ni',
      title: 'に (Ni) Particle',
      explanation: 'Indicates direction, time, or indirect object.',
      examples: [
        {
          japanese: '学校に行きます。',
          english: 'I go to school.',
          romaji: 'Gakkou ni ikimasu.'
        },
        {
          japanese: '七時に起きます。',
          english: 'I wake up at 7 o\'clock.',
          romaji: 'Shichiji ni okimasu.'
        }
      ],
      usage: 'Use に for destinations, times, and indirect objects.'
    },
    {
      id: 'particle-de',
      title: 'で (De) Particle',
      explanation: 'Indicates location of action or means/method.',
      examples: [
        {
          japanese: '図書館で勉強します。',
          english: 'I study at the library.',
          romaji: 'Toshokan de benkyou shimasu.'
        },
        {
          japanese: '電車で行きます。',
          english: 'I go by train.',
          romaji: 'Densha de ikimasu.'
        }
      ],
      usage: 'Use で for places where actions occur or means of transportation.'
    },
    {
      id: 'particle-no',
      title: 'の (No) Particle',
      explanation: 'Indicates possession or modifies nouns.',
      examples: [
        {
          japanese: '私の本です。',
          english: 'It\'s my book.',
          romaji: 'Watashi no hon desu.'
        },
        {
          japanese: '日本の車です。',
          english: 'It\'s a Japanese car.',
          romaji: 'Nihon no kuruma desu.'
        }
      ],
      usage: 'Use の to show possession or to modify nouns.'
    },
    {
      id: 'particle-to',
      title: 'と (To) Particle',
      explanation: 'Means "and" when listing items, or "with" for companions.',
      examples: [
        {
          japanese: 'りんごとバナナを買いました。',
          english: 'I bought apples and bananas.',
          romaji: 'Ringo to banana wo kaimashita.'
        },
        {
          japanese: '友達と映画を見ました。',
          english: 'I watched a movie with my friend.',
          romaji: 'Tomodachi to eiga wo mimashita.'
        }
      ],
      usage: 'Use と to connect nouns or indicate companionship.'
    },
    {
      id: 'particle-mo',
      title: 'も (Mo) Particle',
      explanation: 'Means "also" or "too".',
      examples: [
        {
          japanese: '私も学生です。',
          english: 'I am also a student.',
          romaji: 'Watashi mo gakusei desu.'
        },
        {
          japanese: '今日も忙しいです。',
          english: 'Today is also busy.',
          romaji: 'Kyou mo isogashii desu.'
        }
      ],
      usage: 'Use も to indicate "also" or "too".'
    },
    {
      id: 'particle-kara',
      title: 'から (Kara) Particle',
      explanation: 'Indicates "from" (place/time) or reason "because".',
      examples: [
        {
          japanese: '日本から来ました。',
          english: 'I came from Japan.',
          romaji: 'Nihon kara kimashita.'
        },
        {
          japanese: '忙しいから行けません。',
          english: 'I can\'t go because I\'m busy.',
          romaji: 'Isogashii kara ikemasen.'
        }
      ],
      usage: 'Use から for starting points or reasons.'
    },
    {
      id: 'particle-made',
      title: 'まで (Made) Particle',
      explanation: 'Indicates "until" or "as far as".',
      examples: [
        {
          japanese: '十時まで働きます。',
          english: 'I work until 10 o\'clock.',
          romaji: 'Juuji made hatarakimasu.'
        },
        {
          japanese: '駅まで歩きます。',
          english: 'I walk to the station.',
          romaji: 'Eki made arukimasu.'
        }
      ],
      usage: 'Use まで to indicate the endpoint of time or distance.'
    },
    {
      id: 'te-form',
      title: 'て形 (Te-form)',
      explanation: 'The te-form of verbs used for various grammatical constructions.',
      examples: [
        {
          japanese: '本を読んでいます。',
          english: 'I am reading a book.',
          romaji: 'Hon wo yonde imasu.'
        },
        {
          japanese: 'テレビを見て寝ます。',
          english: 'I watch TV and then sleep.',
          romaji: 'Terebi wo mite nemasu.'
        }
      ],
      usage: 'Used for continuous actions, connecting sentences, and requests.'
    },
    {
      id: 'te-kudasai',
      title: 'てください (Te kudasai)',
      explanation: 'Polite request form meaning "please do".',
      examples: [
        {
          japanese: '本を読んでください。',
          english: 'Please read the book.',
          romaji: 'Hon wo yonde kudasai.'
        },
        {
          japanese: '静かにしてください。',
          english: 'Please be quiet.',
          romaji: 'Shizuka ni shite kudasai.'
        }
      ],
      usage: 'Use てください to make polite requests.'
    },
    {
      id: 'te-mo-ii',
      title: 'てもいいです (Temo ii desu)',
      explanation: 'Indicates permission meaning "it\'s okay to do" or "may I".',
      examples: [
        {
          japanese: '入ってもいいですか？',
          english: 'May I come in?',
          romaji: 'Haitte mo ii desu ka?'
        },
        {
          japanese: '食べてもいいです。',
          english: 'It\'s okay to eat.',
          romaji: 'Tabete mo ii desu.'
        }
      ],
      usage: 'Use てもいいです to ask for or give permission.'
    },
    {
      id: 'te-wa-ikemasen',
      title: 'てはいけません (Te wa ikemasen)',
      explanation: 'Indicates prohibition meaning "must not do".',
      examples: [
        {
          japanese: 'ここでタバコを吸ってはいけません。',
          english: 'You must not smoke here.',
          romaji: 'Koko de tabako wo sutte wa ikemasen.'
        },
        {
          japanese: '遅刻してはいけません。',
          english: 'You must not be late.',
          romaji: 'Chikoku shite wa ikemasen.'
        }
      ],
      usage: 'Use てはいけません to express prohibition.'
    },
    {
      id: 'tai-form',
      title: 'たい (Tai) Form',
      explanation: 'Expresses desire to do something.',
      examples: [
        {
          japanese: '映画を見たいです。',
          english: 'I want to watch a movie.',
          romaji: 'Eiga wo mitai desu.'
        },
        {
          japanese: '日本に行きたいです。',
          english: 'I want to go to Japan.',
          romaji: 'Nihon ni ikitai desu.'
        }
      ],
      usage: 'Add たい to verb stems to express desire.'
    },
    {
      id: 'mashou',
      title: 'ましょう (Mashou)',
      explanation: 'Suggests "let\'s do" something.',
      examples: [
        {
          japanese: '一緒に行きましょう。',
          english: 'Let\'s go together.',
          romaji: 'Issho ni ikimashou.'
        },
        {
          japanese: '勉強しましょう。',
          english: 'Let\'s study.',
          romaji: 'Benkyou shimashou.'
        }
      ],
      usage: 'Use ましょう to make suggestions or invitations.'
    },
    {
      id: 'deshou',
      title: 'でしょう (Deshou)',
      explanation: 'Indicates probability or "right?"',
      examples: [
        {
          japanese: '明日は雨でしょう。',
          english: 'It will probably rain tomorrow.',
          romaji: 'Ashita wa ame deshou.'
        },
        {
          japanese: '美味しいでしょう？',
          english: 'It\'s delicious, right?',
          romaji: 'Oishii deshou?'
        }
      ],
      usage: 'Use でしょう to express probability or seek agreement.'
    },
    {
      id: 'naide-kudasai',
      title: 'ないでください (Naide kudasai)',
      explanation: 'Polite request not to do something.',
      examples: [
        {
          japanese: '走らないでください。',
          english: 'Please don\'t run.',
          romaji: 'Hashiranaide kudasai.'
        },
        {
          japanese: '忘れないでください。',
          english: 'Please don\'t forget.',
          romaji: 'Wasurenaide kudasai.'
        }
      ],
      usage: 'Use ないでください to politely ask someone not to do something.'
    },
    {
      id: 'ta-koto-ga-aru',
      title: 'たことがある (Ta koto ga aru)',
      explanation: 'Indicates experience of having done something.',
      examples: [
        {
          japanese: '日本に行ったことがあります。',
          english: 'I have been to Japan.',
          romaji: 'Nihon ni itta koto ga arimasu.'
        },
        {
          japanese: 'その映画を見たことがあります。',
          english: 'I have seen that movie.',
          romaji: 'Sono eiga wo mita koto ga arimasu.'
        }
      ],
      usage: 'Use たことがある to talk about past experiences.'
    },
    {
      id: 'tsumori',
      title: 'つもり (Tsumori)',
      explanation: 'Indicates intention or plan.',
      examples: [
        {
          japanese: '明日勉強するつもりです。',
          english: 'I plan to study tomorrow.',
          romaji: 'Ashita benkyou suru tsumori desu.'
        },
        {
          japanese: '日本に住むつもりです。',
          english: 'I plan to live in Japan.',
          romaji: 'Nihon ni sumu tsumori desu.'
        }
      ],
      usage: 'Use つもり to express intentions or plans.'
    },
    {
      id: 'particle-yo',
      title: 'よ (Yo) Particle',
      explanation: 'Emphasizes information or adds emphasis to statements. Used to assert or emphasize what you\'re saying.',
      examples: [
        {
          japanese: 'これは美味しいですよ。',
          english: 'This is delicious, you know.',
          romaji: 'Kore wa oishii desu yo.'
        },
        {
          japanese: '明日は雨ですよ。',
          english: 'Tomorrow will be rainy, you know.',
          romaji: 'Ashita wa ame desu yo.'
        }
      ],
      usage: 'Add よ at the end of sentences to emphasize or assert information.'
    },
    {
      id: 'particle-ne',
      title: 'ね (Ne) Particle',
      explanation: 'Seeks agreement or confirmation. Used to make statements more friendly or to seek agreement.',
      examples: [
        {
          japanese: '今日は暑いですね。',
          english: 'It\'s hot today, isn\'t it?',
          romaji: 'Kyou wa atsui desu ne.'
        },
        {
          japanese: '美味しいですね。',
          english: 'It\'s delicious, isn\'t it?',
          romaji: 'Oishii desu ne.'
        }
      ],
      usage: 'Add ね at the end of sentences to seek agreement or confirmation.'
    },
    {
      id: 'particle-ka',
      title: 'か (Ka) Particle',
      explanation: 'Makes questions. Used at the end of sentences to form questions.',
      examples: [
        {
          japanese: 'これは何ですか？',
          english: 'What is this?',
          romaji: 'Kore wa nan desu ka?'
        },
        {
          japanese: 'どこですか？',
          english: 'Where is it?',
          romaji: 'Doko desu ka?'
        }
      ],
      usage: 'Add か at the end of sentences to make them questions.'
    },
    {
      id: 'particle-kara-made',
      title: 'から～まで (Kara ~ Made)',
      explanation: 'Indicates a range from one point to another, meaning "from ~ to".',
      examples: [
        {
          japanese: '九時から五時まで働きます。',
          english: 'I work from 9 o\'clock to 5 o\'clock.',
          romaji: 'Kuji kara goji made hatarakimasu.'
        },
        {
          japanese: '月曜日から金曜日まで学校に行きます。',
          english: 'I go to school from Monday to Friday.',
          romaji: 'Getsuyoubi kara kinyoubi made gakkou ni ikimasu.'
        }
      ],
      usage: 'Use から～まで to indicate a range from one point to another.'
    },
    {
      id: 'particle-dake',
      title: 'だけ (Dake)',
      explanation: 'Means "only" or "just". Indicates limitation or restriction.',
      examples: [
        {
          japanese: '水だけ飲みます。',
          english: 'I only drink water.',
          romaji: 'Mizu dake nomimasu.'
        },
        {
          japanese: '一人だけです。',
          english: 'There\'s only one person.',
          romaji: 'Hitori dake desu.'
        }
      ],
      usage: 'Use だけ after nouns to indicate "only" or "just".'
    },
    {
      id: 'particle-shika',
      title: 'しか (Shika)',
      explanation: 'Means "only" but with negative implication. Must be used with negative verbs.',
      examples: [
        {
          japanese: '水しか飲みません。',
          english: 'I only drink water (and nothing else).',
          romaji: 'Mizu shika nomimasen.'
        },
        {
          japanese: '一人しかいません。',
          english: 'There\'s only one person (and no more).',
          romaji: 'Hitori shika imasen.'
        }
      ],
      usage: 'Use しか with negative verbs to emphasize limitation.'
    },
    {
      id: 'particle-gurai',
      title: 'ぐらい (Gurai)',
      explanation: 'Means "about" or "approximately". Used to indicate approximate amounts or degrees.',
      examples: [
        {
          japanese: '一時間ぐらいかかります。',
          english: 'It takes about one hour.',
          romaji: 'Ichijikan gurai kakarimasu.'
        },
        {
          japanese: '十人ぐらいいます。',
          english: 'There are about ten people.',
          romaji: 'Juunin gurai imasu.'
        }
      ],
      usage: 'Use ぐらい after numbers or quantities to indicate approximation.'
    },
    {
      id: 'particle-sae',
      title: 'さえ (Sae)',
      explanation: 'Means "even" or "as long as". Used to emphasize extreme cases.',
      examples: [
        {
          japanese: '子供さえ分かります。',
          english: 'Even children understand.',
          romaji: 'Kodomo sae wakarimasu.'
        },
        {
          japanese: '時間さえあれば行きます。',
          english: 'I\'ll go as long as I have time.',
          romaji: 'Jikan sae areba ikimasu.'
        }
      ],
      usage: 'Use さえ to emphasize extreme cases or conditions.'
    },
    {
      id: 'particle-mo',
      title: 'も (Mo) Particle',
      explanation: 'Means "also" or "too". Used to indicate inclusion or addition.',
      examples: [
        {
          japanese: '私も学生です。',
          english: 'I am also a student.',
          romaji: 'Watashi mo gakusei desu.'
        },
        {
          japanese: '今日も忙しいです。',
          english: 'I\'m busy today too.',
          romaji: 'Kyou mo isogashii desu.'
        }
      ],
      usage: 'Use も to indicate "also" or "too".'
    },
    {
      id: 'particle-kara',
      title: 'から (Kara) Particle',
      explanation: 'Means "from" or "because". Used to indicate starting point or reason.',
      examples: [
        {
          japanese: '学校から帰りました。',
          english: 'I came back from school.',
          romaji: 'Gakkou kara kaerimashita.'
        },
        {
          japanese: '疲れたから休みます。',
          english: 'I\'ll rest because I\'m tired.',
          romaji: 'Tsukareta kara yasumimasu.'
        }
      ],
      usage: 'Use から to indicate starting point or reason.'
    },
    {
      id: 'particle-made',
      title: 'まで (Made) Particle',
      explanation: 'Means "until" or "up to". Used to indicate endpoint or limit.',
      examples: [
        {
          japanese: '五時まで待ちます。',
          english: 'I\'ll wait until 5 o\'clock.',
          romaji: 'Goji made machimasu.'
        },
        {
          japanese: '駅まで歩きます。',
          english: 'I\'ll walk to the station.',
          romaji: 'Eki made arukimasu.'
        }
      ],
      usage: 'Use まで to indicate endpoint or limit.'
    },
    {
      id: 'particle-ni',
      title: 'に (Ni) Particle',
      explanation: 'Indicates direction, time, or purpose. Very versatile particle.',
      examples: [
        {
          japanese: '学校に行きます。',
          english: 'I go to school.',
          romaji: 'Gakkou ni ikimasu.'
        },
        {
          japanese: '三時に会いましょう。',
          english: 'Let\'s meet at 3 o\'clock.',
          romaji: 'Sanji ni aimashou.'
        }
      ],
      usage: 'Use に for direction, time, or purpose.'
    },
    {
      id: 'particle-de',
      title: 'で (De) Particle',
      explanation: 'Indicates location of action or means/method.',
      examples: [
        {
          japanese: '図書館で勉強します。',
          english: 'I study at the library.',
          romaji: 'Toshokan de benkyou shimasu.'
        },
        {
          japanese: '電車で行きます。',
          english: 'I go by train.',
          romaji: 'Densha de ikimasu.'
        }
      ],
      usage: 'Use で for location of action or means/method.'
    },
    {
      id: 'particle-wo',
      title: 'を (Wo) Particle',
      explanation: 'Indicates direct object of a verb.',
      examples: [
        {
          japanese: '本を読みます。',
          english: 'I read a book.',
          romaji: 'Hon wo yomimasu.'
        },
        {
          japanese: '水を飲みます。',
          english: 'I drink water.',
          romaji: 'Mizu wo nomimasu.'
        }
      ],
      usage: 'Use を to indicate direct object of a verb.'
    },
    {
      id: 'particle-ga',
      title: 'が (Ga) Particle',
      explanation: 'Indicates subject or object of existence verbs.',
      examples: [
        {
          japanese: '猫がいます。',
          english: 'There is a cat.',
          romaji: 'Neko ga imasu.'
        },
        {
          japanese: '本があります。',
          english: 'There is a book.',
          romaji: 'Hon ga arimasu.'
        }
      ],
      usage: 'Use が for subject or object of existence verbs.'
    },
    {
      id: 'particle-wa',
      title: 'は (Wa) Particle',
      explanation: 'Indicates topic of the sentence.',
      examples: [
        {
          japanese: '私は学生です。',
          english: 'I am a student.',
          romaji: 'Watashi wa gakusei desu.'
        },
        {
          japanese: '今日は暑いです。',
          english: 'Today is hot.',
          romaji: 'Kyou wa atsui desu.'
        }
      ],
      usage: 'Use は to indicate the topic of the sentence.'
    },
    {
      id: 'particle-no',
      title: 'の (No) Particle',
      explanation: 'Indicates possession or connection between nouns.',
      examples: [
        {
          japanese: '私の本です。',
          english: 'It\'s my book.',
          romaji: 'Watashi no hon desu.'
        },
        {
          japanese: '学校の先生です。',
          english: 'He\'s a school teacher.',
          romaji: 'Gakkou no sensei desu.'
        }
      ],
      usage: 'Use の to indicate possession or connection between nouns.'
    },
    {
      id: 'particle-to',
      title: 'と (To) Particle',
      explanation: 'Means "and" or "with". Used to connect nouns or indicate accompaniment.',
      examples: [
        {
          japanese: '友達と映画を見ます。',
          english: 'I watch movies with friends.',
          romaji: 'Tomodachi to eiga wo mimasu.'
        },
        {
          japanese: 'りんごとバナナを買いました。',
          english: 'I bought apples and bananas.',
          romaji: 'Ringo to banana wo kaimashita.'
        }
      ],
      usage: 'Use と to mean "and" or "with".'
    },
    {
      id: 'particle-hodo',
      title: 'ほど (Hodo)',
      explanation: 'Means "about" or "as much as". Used to indicate degree or extent.',
      examples: [
        {
          japanese: '一時間ほどかかります。',
          english: 'It takes about one hour.',
          romaji: 'Ichijikan hodo kakarimasu.'
        },
        {
          japanese: 'それほど難しくありません。',
          english: 'It\'s not that difficult.',
          romaji: 'Sore hodo muzukashiku arimasen.'
        }
      ],
      usage: 'Use ほど to indicate degree or extent, often with negative sentences.'
    },
    {
      id: 'particle-yori',
      title: 'より (Yori)',
      explanation: 'Means "than" or "more than". Used for comparisons.',
      examples: [
        {
          japanese: 'この本はあの本より面白いです。',
          english: 'This book is more interesting than that book.',
          romaji: 'Kono hon wa ano hon yori omoshiroi desu.'
        },
        {
          japanese: '今日は昨日より暑いです。',
          english: 'Today is hotter than yesterday.',
          romaji: 'Kyou wa kinou yori atsui desu.'
        }
      ],
      usage: 'Use より to make comparisons meaning "than" or "more than".'
    }
  ],
  exercises: [
    {
      id: 'ex1',
      type: 'fill-blank',
      question: '私は学生____。',
      answer: 'です',
      explanation: 'Use です with nouns to make polite statements.'
    },
    {
      id: 'ex2',
      type: 'translation',
      question: 'This is a book.',
      answer: 'これは本です。',
      explanation: 'Use は to mark the topic and です for polite form.'
    },
    {
      id: 'ex3',
      type: 'fill-blank',
      question: '猫____います。',
      answer: 'が',
      explanation: 'Use が to mark the subject with existence verbs.'
    },
    {
      id: 'ex4',
      type: 'fill-blank',
      question: '本____読みます。',
      answer: 'を',
      explanation: 'Use を to mark the direct object of a verb.'
    },
    {
      id: 'ex5',
      type: 'translation',
      question: 'I go to school.',
      answer: '学校に行きます。',
      explanation: 'Use に to indicate direction or destination.'
    },
    {
      id: 'ex6',
      type: 'fill-blank',
      question: '図書館____勉強します。',
      answer: 'で',
      explanation: 'Use で to indicate the location where an action takes place.'
    },
    {
      id: 'ex7',
      type: 'translation',
      question: 'It\'s my book.',
      answer: '私の本です。',
      explanation: 'Use の to show possession.'
    },
    {
      id: 'ex8',
      type: 'fill-blank',
      question: 'りんご____バナナを買いました。',
      answer: 'と',
      explanation: 'Use と to connect nouns with "and".'
    },
    {
      id: 'ex9',
      type: 'translation',
      question: 'I am also a student.',
      answer: '私も学生です。',
      explanation: 'Use も to mean "also" or "too".'
    },
    {
      id: 'ex10',
      type: 'fill-blank',
      question: '日本____来ました。',
      answer: 'から',
      explanation: 'Use から to indicate "from" (place or time).'
    },
    {
      id: 'ex11',
      type: 'translation',
      question: 'I work until 10 o\'clock.',
      answer: '十時まで働きます。',
      explanation: 'Use まで to indicate "until" or endpoint.'
    },
    {
      id: 'ex12',
      type: 'fill-blank',
      question: '本を読____います。',
      answer: 'んで',
      explanation: 'The te-form of 読む is 読んで.'
    },
    {
      id: 'ex13',
      type: 'translation',
      question: 'Please read the book.',
      answer: '本を読んでください。',
      explanation: 'Use てください to make polite requests.'
    },
    {
      id: 'ex14',
      type: 'fill-blank',
      question: '入っ____いいですか？',
      answer: 'ても',
      explanation: 'Use てもいいです to ask for permission.'
    },
    {
      id: 'ex15',
      type: 'translation',
      question: 'You must not smoke here.',
      answer: 'ここでタバコを吸ってはいけません。',
      explanation: 'Use てはいけません to express prohibition.'
    },
    {
      id: 'ex16',
      type: 'fill-blank',
      question: '映画を見____です。',
      answer: 'たい',
      explanation: 'Add たい to verb stems to express desire.'
    },
    {
      id: 'ex17',
      type: 'translation',
      question: 'Let\'s go together.',
      answer: '一緒に行きましょう。',
      explanation: 'Use ましょう to make suggestions.'
    },
    {
      id: 'ex18',
      type: 'fill-blank',
      question: '明日は雨____。',
      answer: 'でしょう',
      explanation: 'Use でしょう to express probability.'
    },
    {
      id: 'ex19',
      type: 'translation',
      question: 'Please don\'t run.',
      answer: '走らないでください。',
      explanation: 'Use ないでください to politely ask someone not to do something.'
    },
    {
      id: 'ex21',
      type: 'fill-blank',
      question: '水____飲みます。',
      answer: 'を',
      explanation: 'Use を to mark the direct object of a verb.'
    },
    {
      id: 'ex22',
      type: 'translation',
      question: 'I want to eat sushi.',
      answer: '寿司を食べたいです。',
      explanation: 'Use たい to express desire.'
    },
    {
      id: 'ex23',
      type: 'fill-blank',
      question: '明日勉強する____です。',
      answer: 'つもり',
      explanation: 'Use つもり to express intention or plan.'
    },
    {
      id: 'ex24',
      type: 'translation',
      question: 'This is delicious, you know.',
      answer: 'これは美味しいですよ。',
      explanation: 'Use よ to emphasize information.'
    },
    {
      id: 'ex25',
      type: 'fill-blank',
      question: '今日は暑い____。',
      answer: 'ですね',
      explanation: 'Use ね to seek agreement or confirmation.'
    },
    {
      id: 'ex26',
      type: 'translation',
      question: 'What is this?',
      answer: 'これは何ですか？',
      explanation: 'Use か to make questions.'
    },
    {
      id: 'ex27',
      type: 'fill-blank',
      question: '九時____五時まで働きます。',
      answer: 'から',
      explanation: 'Use から～まで to indicate a range from one point to another.'
    },
    {
      id: 'ex28',
      type: 'translation',
      question: 'I only drink water.',
      answer: '水だけ飲みます。',
      explanation: 'Use だけ to mean "only" or "just".'
    },
    {
      id: 'ex29',
      type: 'fill-blank',
      question: '水____飲みません。',
      answer: 'しか',
      explanation: 'Use しか with negative verbs to emphasize limitation.'
    },
    {
      id: 'ex30',
      type: 'translation',
      question: 'It takes about one hour.',
      answer: '一時間ぐらいかかります。',
      explanation: 'Use ぐらい to indicate approximation.'
    },
    {
      id: 'ex31',
      type: 'fill-blank',
      question: 'この本はあの本____面白いです。',
      answer: 'より',
      explanation: 'Use より to make comparisons meaning "than" or "more than".'
    },
    {
      id: 'ex32',
      type: 'translation',
      question: 'Even children understand.',
      answer: '子供さえ分かります。',
      explanation: 'Use さえ to emphasize extreme cases.'
    },
    {
      id: 'ex33',
      type: 'fill-blank',
      question: '私____学生です。',
      answer: 'も',
      explanation: 'Use も to mean "also" or "too".'
    },
    {
      id: 'ex34',
      type: 'translation',
      question: 'I came back from school.',
      answer: '学校から帰りました。',
      explanation: 'Use から to indicate starting point.'
    },
    {
      id: 'ex35',
      type: 'fill-blank',
      question: '五時____待ちます。',
      answer: 'まで',
      explanation: 'Use まで to indicate endpoint or limit.'
    },
    {
      id: 'ex36',
      type: 'translation',
      question: 'Let\'s meet at 3 o\'clock.',
      answer: '三時に会いましょう。',
      explanation: 'Use に to indicate time.'
    },
    {
      id: 'ex37',
      type: 'fill-blank',
      question: '電車____行きます。',
      answer: 'で',
      explanation: 'Use で to indicate means or method.'
    },
    {
      id: 'ex38',
      type: 'translation',
      question: 'There is a cat.',
      answer: '猫がいます。',
      explanation: 'Use が to mark the subject with existence verbs.'
    },
    {
      id: 'ex39',
      type: 'fill-blank',
      question: '私____学生です。',
      answer: 'は',
      explanation: 'Use は to indicate the topic of the sentence.'
    },
    {
      id: 'ex40',
      type: 'translation',
      question: 'It\'s my book.',
      answer: '私の本です。',
      explanation: 'Use の to indicate possession.'
    }
  ],
  vocabulary: [
    {
      id: 'v1',
      japanese: '学生',
      reading: 'がくせい',
      english: 'student',
      example: {
        japanese: '私は学生です。',
        english: 'I am a student.'
      }
    },
    {
      id: 'v2',
      japanese: '本',
      reading: 'ほん',
      english: 'book',
      example: {
        japanese: 'これは本です。',
        english: 'This is a book.'
      }
    },
    {
      id: 'v3',
      japanese: '猫',
      reading: 'ねこ',
      english: 'cat',
      example: {
        japanese: '猫がいます。',
        english: 'There is a cat.'
      }
    },
    {
      id: 'v4',
      japanese: '学校',
      reading: 'がっこう',
      english: 'school',
      example: {
        japanese: '学校に行きます。',
        english: 'I go to school.'
      }
    },
    {
      id: 'v5',
      japanese: '図書館',
      reading: 'としょかん',
      english: 'library',
      example: {
        japanese: '図書館で勉強します。',
        english: 'I study at the library.'
      }
    },
    {
      id: 'v6',
      japanese: '電車',
      reading: 'でんしゃ',
      english: 'train',
      example: {
        japanese: '電車で行きます。',
        english: 'I go by train.'
      }
    },
    {
      id: 'v7',
      japanese: '友達',
      reading: 'ともだち',
      english: 'friend',
      example: {
        japanese: '友達と映画を見ました。',
        english: 'I watched a movie with my friend.'
      }
    },
    {
      id: 'v8',
      japanese: '映画',
      reading: 'えいが',
      english: 'movie',
      example: {
        japanese: '映画を見たいです。',
        english: 'I want to watch a movie.'
      }
    },
    {
      id: 'v9',
      japanese: '日本',
      reading: 'にほん',
      english: 'Japan',
      example: {
        japanese: '日本に行きたいです。',
        english: 'I want to go to Japan.'
      }
    },
    {
      id: 'v10',
      japanese: '明日',
      reading: 'あした',
      english: 'tomorrow',
      example: {
        japanese: '明日は雨でしょう。',
        english: 'It will probably rain tomorrow.'
      }
    },
    {
      id: 'v11',
      japanese: '今日',
      reading: 'きょう',
      english: 'today',
      example: {
        japanese: '今日は暑いです。',
        english: 'Today is hot.'
      }
    },
    {
      id: 'v12',
      japanese: '昨日',
      reading: 'きのう',
      english: 'yesterday',
      example: {
        japanese: '昨日は忙しかったです。',
        english: 'Yesterday was busy.'
      }
    },
    {
      id: 'v13',
      japanese: '時間',
      reading: 'じかん',
      english: 'time',
      example: {
        japanese: '時間がありません。',
        english: 'I don\'t have time.'
      }
    },
    {
      id: 'v14',
      japanese: '食べ物',
      reading: 'たべもの',
      english: 'food',
      example: {
        japanese: '美味しい食べ物です。',
        english: 'It\'s delicious food.'
      }
    },
    {
      id: 'v15',
      japanese: '水',
      reading: 'みず',
      english: 'water',
      example: {
        japanese: '水を飲みます。',
        english: 'I drink water.'
      }
    },
    {
      id: 'v16',
      japanese: 'コーヒー',
      reading: 'コーヒー',
      english: 'coffee',
      example: {
        japanese: 'コーヒーを飲みます。',
        english: 'I drink coffee.'
      }
    },
    {
      id: 'v17',
      japanese: '家',
      reading: 'いえ',
      english: 'house',
      example: {
        japanese: '家に帰ります。',
        english: 'I go home.'
      }
    },
    {
      id: 'v18',
      japanese: '車',
      reading: 'くるま',
      english: 'car',
      example: {
        japanese: '日本の車です。',
        english: 'It\'s a Japanese car.'
      }
    },
    {
      id: 'v19',
      japanese: '駅',
      reading: 'えき',
      english: 'station',
      example: {
        japanese: '駅まで歩きます。',
        english: 'I walk to the station.'
      }
    },
    {
      id: 'v20',
      japanese: '病院',
      reading: 'びょういん',
      english: 'hospital',
      example: {
        japanese: '病院に行きます。',
        english: 'I go to the hospital.'
      }
    },
    {
      id: 'v21',
      japanese: '銀行',
      reading: 'ぎんこう',
      english: 'bank',
      example: {
        japanese: '銀行でお金を下ろします。',
        english: 'I withdraw money at the bank.'
      }
    },
    {
      id: 'v22',
      japanese: '店',
      reading: 'みせ',
      english: 'store',
      example: {
        japanese: '店で買い物をします。',
        english: 'I shop at the store.'
      }
    },
    {
      id: 'v23',
      japanese: '公園',
      reading: 'こうえん',
      english: 'park',
      example: {
        japanese: '公園で散歩します。',
        english: 'I take a walk in the park.'
      }
    },
    {
      id: 'v24',
      japanese: '海',
      reading: 'うみ',
      english: 'sea',
      example: {
        japanese: '海で泳ぎます。',
        english: 'I swim in the sea.'
      }
    },
    {
      id: 'v26',
      japanese: '水',
      reading: 'みず',
      english: 'water',
      example: {
        japanese: '水を飲みます。',
        english: 'I drink water.'
      }
    },
    {
      id: 'v27',
      japanese: '食べ物',
      reading: 'たべもの',
      english: 'food',
      example: {
        japanese: '美味しい食べ物です。',
        english: 'It\'s delicious food.'
      }
    },
    {
      id: 'v28',
      japanese: '今',
      reading: 'いま',
      english: 'now',
      example: {
        japanese: '今何時ですか？',
        english: 'What time is it now?'
      }
    },
    {
      id: 'v29',
      japanese: '年',
      reading: 'とし',
      english: 'year',
      example: {
        japanese: '今年は2024年です。',
        english: 'This year is 2024.'
      }
    },
    {
      id: 'v30',
      japanese: '月',
      reading: 'つき',
      english: 'month',
      example: {
        japanese: '今月は忙しいです。',
        english: 'This month is busy.'
      }
    },
    {
      id: 'v31',
      japanese: '日',
      reading: 'ひ',
      english: 'day',
      example: {
        japanese: '毎日勉強します。',
        english: 'I study every day.'
      }
    },
    {
      id: 'v32',
      japanese: '時',
      reading: 'じ',
      english: 'hour',
      example: {
        japanese: '三時です。',
        english: 'It\'s three o\'clock.'
      }
    },
    {
      id: 'v33',
      japanese: '分',
      reading: 'ふん',
      english: 'minute',
      example: {
        japanese: '五分待ちます。',
        english: 'I\'ll wait five minutes.'
      }
    },
    {
      id: 'v34',
      japanese: '人',
      reading: 'ひと',
      english: 'person',
      example: {
        japanese: '良い人です。',
        english: 'He\'s a good person.'
      }
    },
    {
      id: 'v35',
      japanese: '男',
      reading: 'おとこ',
      english: 'man',
      example: {
        japanese: '男の人がいます。',
        english: 'There is a man.'
      }
    },
    {
      id: 'v36',
      japanese: '女',
      reading: 'おんな',
      english: 'woman',
      example: {
        japanese: '女の人がいます。',
        english: 'There is a woman.'
      }
    },
    {
      id: 'v37',
      japanese: '子供',
      reading: 'こども',
      english: 'child',
      example: {
        japanese: '子供が遊んでいます。',
        english: 'The children are playing.'
      }
    },
    {
      id: 'v38',
      japanese: '先生',
      reading: 'せんせい',
      english: 'teacher',
      example: {
        japanese: '先生に質問します。',
        english: 'I\'ll ask the teacher a question.'
      }
    },
    {
      id: 'v39',
      japanese: '医者',
      reading: 'いしゃ',
      english: 'doctor',
      example: {
        japanese: '医者に診てもらいます。',
        english: 'I\'ll have the doctor examine me.'
      }
    },
    {
      id: 'v40',
      japanese: '会社員',
      reading: 'かいしゃいん',
      english: 'office worker',
      example: {
        japanese: '父は会社員です。',
        english: 'My father is an office worker.'
      }
    },
    {
      id: 'v41',
      japanese: '店員',
      reading: 'てんいん',
      english: 'store clerk',
      example: {
        japanese: '店員に聞きます。',
        english: 'I\'ll ask the store clerk.'
      }
    },
    {
      id: 'v42',
      japanese: '家族',
      reading: 'かぞく',
      english: 'family',
      example: {
        japanese: '家族と一緒に住んでいます。',
        english: 'I live together with my family.'
      }
    },
    {
      id: 'v43',
      japanese: '父',
      reading: 'ちち',
      english: 'father',
      example: {
        japanese: '父は優しいです。',
        english: 'My father is kind.'
      }
    },
    {
      id: 'v44',
      japanese: '母',
      reading: 'はは',
      english: 'mother',
      example: {
        japanese: '母は料理が上手です。',
        english: 'My mother is good at cooking.'
      }
    },
    {
      id: 'v45',
      japanese: '兄',
      reading: 'あに',
      english: 'older brother',
      example: {
        japanese: '兄は大学生です。',
        english: 'My older brother is a university student.'
      }
    },
    {
      id: 'v46',
      japanese: '姉',
      reading: 'あね',
      english: 'older sister',
      example: {
        japanese: '姉は看護師です。',
        english: 'My older sister is a nurse.'
      }
    },
    {
      id: 'v47',
      japanese: '弟',
      reading: 'おとうと',
      english: 'younger brother',
      example: {
        japanese: '弟は中学生です。',
        english: 'My younger brother is a junior high school student.'
      }
    },
    {
      id: 'v48',
      japanese: '妹',
      reading: 'いもうと',
      english: 'younger sister',
      example: {
        japanese: '妹は小学生です。',
        english: 'My younger sister is an elementary school student.'
      }
    },
    {
      id: 'v49',
      japanese: '犬',
      reading: 'いぬ',
      english: 'dog',
      example: {
        japanese: '犬を飼っています。',
        english: 'I have a dog.'
      }
    },
    {
      id: 'v50',
      japanese: '鳥',
      reading: 'とり',
      english: 'bird',
      example: {
        japanese: '鳥が飛んでいます。',
        english: 'The birds are flying.'
      }
    },
    {
      id: 'v51',
      japanese: '魚',
      reading: 'さかな',
      english: 'fish',
      example: {
        japanese: '魚を食べます。',
        english: 'I eat fish.'
      }
    },
    {
      id: 'v52',
      japanese: '花',
      reading: 'はな',
      english: 'flower',
      example: {
        japanese: '美しい花です。',
        english: 'It\'s a beautiful flower.'
      }
    },
    {
      id: 'v53',
      japanese: '木',
      reading: 'き',
      english: 'tree',
      example: {
        japanese: '大きな木があります。',
        english: 'There is a big tree.'
      }
    },
    {
      id: 'v54',
      japanese: '川',
      reading: 'かわ',
      english: 'river',
      example: {
        japanese: '川で泳ぎます。',
        english: 'I swim in the river.'
      }
    },
    {
      id: 'v55',
      japanese: '空',
      reading: 'そら',
      english: 'sky',
      example: {
        japanese: '空が青いです。',
        english: 'The sky is blue.'
      }
    },
    {
      id: 'v56',
      japanese: '太陽',
      reading: 'たいよう',
      english: 'sun',
      example: {
        japanese: '太陽が明るいです。',
        english: 'The sun is bright.'
      }
    },
    {
      id: 'v57',
      japanese: '月',
      reading: 'つき',
      english: 'moon',
      example: {
        japanese: '月が美しいです。',
        english: 'The moon is beautiful.'
      }
    },
    {
      id: 'v58',
      japanese: '星',
      reading: 'ほし',
      english: 'star',
      example: {
        japanese: '星がたくさんあります。',
        english: 'There are many stars.'
      }
    },
    {
      id: 'v59',
      japanese: '雨',
      reading: 'あめ',
      english: 'rain',
      example: {
        japanese: '雨が降っています。',
        english: 'It\'s raining.'
      }
    },
    {
      id: 'v60',
      japanese: '雪',
      reading: 'ゆき',
      english: 'snow',
      example: {
        japanese: '雪が白いです。',
        english: 'The snow is white.'
      }
    },
    {
      id: 'v61',
      japanese: '風',
      reading: 'かぜ',
      english: 'wind',
      example: {
        japanese: '風が強いです。',
        english: 'The wind is strong.'
      }
    },
    {
      id: 'v62',
      japanese: '火',
      reading: 'ひ',
      english: 'fire',
      example: {
        japanese: '火が危険です。',
        english: 'Fire is dangerous.'
      }
    },
    {
      id: 'v63',
      japanese: '電気',
      reading: 'でんき',
      english: 'electricity',
      example: {
        japanese: '電気が消えました。',
        english: 'The electricity went out.'
      }
    },
    {
      id: 'v64',
      japanese: '家',
      reading: 'いえ',
      english: 'house',
      example: {
        japanese: '家に帰ります。',
        english: 'I go home.'
      }
    },
    {
      id: 'v65',
      japanese: '部屋',
      reading: 'へや',
      english: 'room',
      example: {
        japanese: '部屋が広いです。',
        english: 'The room is spacious.'
      }
    },
    {
      id: 'v66',
      japanese: '机',
      reading: 'つくえ',
      english: 'desk',
      example: {
        japanese: '机の上に本があります。',
        english: 'There is a book on the desk.'
      }
    },
    {
      id: 'v67',
      japanese: '椅子',
      reading: 'いす',
      english: 'chair',
      example: {
        japanese: '椅子に座ります。',
        english: 'I sit on the chair.'
      }
    },
    {
      id: 'v68',
      japanese: '窓',
      reading: 'まど',
      english: 'window',
      example: {
        japanese: '窓から外を見ます。',
        english: 'I look outside through the window.'
      }
    },
    {
      id: 'v69',
      japanese: 'ドア',
      reading: 'どあ',
      english: 'door',
      example: {
        japanese: 'ドアを開けます。',
        english: 'I open the door.'
      }
    },
    // Numbers
    {
      id: 'v71',
      japanese: '一',
      reading: 'いち',
      english: 'one',
      example: {
        japanese: '一つのりんごです。',
        english: 'It\'s one apple.'
      }
    },
    {
      id: 'v72',
      japanese: '二',
      reading: 'に',
      english: 'two',
      example: {
        japanese: '二つの本があります。',
        english: 'There are two books.'
      }
    },
    {
      id: 'v73',
      japanese: '三',
      reading: 'さん',
      english: 'three',
      example: {
        japanese: '三時に会いましょう。',
        english: 'Let\'s meet at three o\'clock.'
      }
    },
    {
      id: 'v74',
      japanese: '四',
      reading: 'よん',
      english: 'four',
      example: {
        japanese: '四つの椅子があります。',
        english: 'There are four chairs.'
      }
    },
    {
      id: 'v75',
      japanese: '五',
      reading: 'ご',
      english: 'five',
      example: {
        japanese: '五時です。',
        english: 'It\'s five o\'clock.'
      }
    },
    {
      id: 'v76',
      japanese: '六',
      reading: 'ろく',
      english: 'six',
      example: {
        japanese: '六人です。',
        english: 'There are six people.'
      }
    },
    {
      id: 'v77',
      japanese: '七',
      reading: 'なな',
      english: 'seven',
      example: {
        japanese: '七つの星です。',
        english: 'There are seven stars.'
      }
    },
    {
      id: 'v78',
      japanese: '八',
      reading: 'はち',
      english: 'eight',
      example: {
        japanese: '八時です。',
        english: 'It\'s eight o\'clock.'
      }
    },
    {
      id: 'v79',
      japanese: '九',
      reading: 'きゅう',
      english: 'nine',
      example: {
        japanese: '九つの花です。',
        english: 'There are nine flowers.'
      }
    },
    {
      id: 'v80',
      japanese: '十',
      reading: 'じゅう',
      english: 'ten',
      example: {
        japanese: '十人です。',
        english: 'There are ten people.'
      }
    },
    // Colors
    {
      id: 'v81',
      japanese: '赤い',
      reading: 'あかい',
      english: 'red',
      example: {
        japanese: '赤い花です。',
        english: 'It\'s a red flower.'
      }
    },
    {
      id: 'v82',
      japanese: '青い',
      reading: 'あおい',
      english: 'blue',
      example: {
        japanese: '青い空です。',
        english: 'It\'s a blue sky.'
      }
    },
    {
      id: 'v83',
      japanese: '黒い',
      reading: 'くろい',
      english: 'black',
      example: {
        japanese: '黒い猫です。',
        english: 'It\'s a black cat.'
      }
    },
    {
      id: 'v84',
      japanese: '白い',
      reading: 'しろい',
      english: 'white',
      example: {
        japanese: '白い雪です。',
        english: 'It\'s white snow.'
      }
    },
    {
      id: 'v85',
      japanese: '黄色い',
      reading: 'きいろい',
      english: 'yellow',
      example: {
        japanese: '黄色いバナナです。',
        english: 'It\'s a yellow banana.'
      }
    },
    {
      id: 'v86',
      japanese: '緑',
      reading: 'みどり',
      english: 'green',
      example: {
        japanese: '緑の木です。',
        english: 'It\'s a green tree.'
      }
    },
    {
      id: 'v87',
      japanese: '茶色',
      reading: 'ちゃいろ',
      english: 'brown',
      example: {
        japanese: '茶色の犬です。',
        english: 'It\'s a brown dog.'
      }
    },
    // Days of the week
    {
      id: 'v88',
      japanese: '月曜日',
      reading: 'げつようび',
      english: 'Monday',
      example: {
        japanese: '月曜日に学校に行きます。',
        english: 'I go to school on Monday.'
      }
    },
    {
      id: 'v89',
      japanese: '火曜日',
      reading: 'かようび',
      english: 'Tuesday',
      example: {
        japanese: '火曜日に映画を見ます。',
        english: 'I watch a movie on Tuesday.'
      }
    },
    {
      id: 'v90',
      japanese: '水曜日',
      reading: 'すいようび',
      english: 'Wednesday',
      example: {
        japanese: '水曜日に買い物をします。',
        english: 'I go shopping on Wednesday.'
      }
    },
    {
      id: 'v91',
      japanese: '木曜日',
      reading: 'もくようび',
      english: 'Thursday',
      example: {
        japanese: '木曜日に友達に会います。',
        english: 'I meet my friend on Thursday.'
      }
    },
    {
      id: 'v92',
      japanese: '金曜日',
      reading: 'きんようび',
      english: 'Friday',
      example: {
        japanese: '金曜日にパーティーがあります。',
        english: 'There\'s a party on Friday.'
      }
    },
    {
      id: 'v93',
      japanese: '土曜日',
      reading: 'どようび',
      english: 'Saturday',
      example: {
        japanese: '土曜日に休みます。',
        english: 'I rest on Saturday.'
      }
    },
    {
      id: 'v94',
      japanese: '日曜日',
      reading: 'にちようび',
      english: 'Sunday',
      example: {
        japanese: '日曜日に家族と過ごします。',
        english: 'I spend time with my family on Sunday.'
      }
    },
    // Time expressions
    {
      id: 'v95',
      japanese: '朝',
      reading: 'あさ',
      english: 'morning',
      example: {
        japanese: '朝にコーヒーを飲みます。',
        english: 'I drink coffee in the morning.'
      }
    },
    {
      id: 'v96',
      japanese: '昼',
      reading: 'ひる',
      english: 'noon',
      example: {
        japanese: '昼に昼食を食べます。',
        english: 'I eat lunch at noon.'
      }
    },
    {
      id: 'v97',
      japanese: '夜',
      reading: 'よる',
      english: 'night',
      example: {
        japanese: '夜にテレビを見ます。',
        english: 'I watch TV at night.'
      }
    },
    {
      id: 'v98',
      japanese: '秒',
      reading: 'びょう',
      english: 'second',
      example: {
        japanese: '三十秒待ちます。',
        english: 'I\'ll wait thirty seconds.'
      }
    },
    // Common verbs
    {
      id: 'v99',
      japanese: '行く',
      reading: 'いく',
      english: 'to go',
      example: {
        japanese: '学校に行きます。',
        english: 'I go to school.'
      },
      dictionaryLink: 'https://jisho.org/search/行く'
    },
    {
      id: 'v100',
      japanese: '来る',
      reading: 'くる',
      english: 'to come',
      example: {
        japanese: '明日来ます。',
        english: 'I\'ll come tomorrow.'
      },
      dictionaryLink: 'https://jisho.org/search/来る'
    },
    {
      id: 'v101',
      japanese: '食べる',
      reading: 'たべる',
      english: 'to eat',
      example: {
        japanese: 'ご飯を食べます。',
        english: 'I eat rice.'
      },
      dictionaryLink: 'https://jisho.org/search/食べる'
    },
    {
      id: 'v102',
      japanese: '飲む',
      reading: 'のむ',
      english: 'to drink',
      example: {
        japanese: '水を飲みます。',
        english: 'I drink water.'
      },
      dictionaryLink: 'https://jisho.org/search/飲む'
    },
    {
      id: 'v103',
      japanese: '見る',
      reading: 'みる',
      english: 'to see, to watch',
      example: {
        japanese: '映画を見ます。',
        english: 'I watch a movie.'
      }
    },
    {
      id: 'v104',
      japanese: '聞く',
      reading: 'きく',
      english: 'to listen, to hear',
      example: {
        japanese: '音楽を聞きます。',
        english: 'I listen to music.'
      }
    },
    {
      id: 'v105',
      japanese: '話す',
      reading: 'はなす',
      english: 'to speak',
      example: {
        japanese: '日本語を話します。',
        english: 'I speak Japanese.'
      }
    },
    {
      id: 'v106',
      japanese: '読む',
      reading: 'よむ',
      english: 'to read',
      example: {
        japanese: '本を読みます。',
        english: 'I read a book.'
      }
    },
    {
      id: 'v107',
      japanese: '書く',
      reading: 'かく',
      english: 'to write',
      example: {
        japanese: '手紙を書きます。',
        english: 'I write a letter.'
      }
    },
    {
      id: 'v108',
      japanese: '買う',
      reading: 'かう',
      english: 'to buy',
      example: {
        japanese: '本を買います。',
        english: 'I buy a book.'
      }
    },
    {
      id: 'v109',
      japanese: '売る',
      reading: 'うる',
      english: 'to sell',
      example: {
        japanese: '車を売ります。',
        english: 'I sell a car.'
      }
    },
    {
      id: 'v110',
      japanese: '作る',
      reading: 'つくる',
      english: 'to make',
      example: {
        japanese: '料理を作ります。',
        english: 'I make food.'
      }
    },
    {
      id: 'v111',
      japanese: '持つ',
      reading: 'もつ',
      english: 'to hold',
      example: {
        japanese: '荷物を持ちます。',
        english: 'I hold luggage.'
      }
    },
    {
      id: 'v112',
      japanese: '待つ',
      reading: 'まつ',
      english: 'to wait',
      example: {
        japanese: '電車を待ちます。',
        english: 'I wait for the train.'
      }
    },
    {
      id: 'v113',
      japanese: '歩く',
      reading: 'あるく',
      english: 'to walk',
      example: {
        japanese: '公園を歩きます。',
        english: 'I walk in the park.'
      }
    },
    {
      id: 'v114',
      japanese: '走る',
      reading: 'はしる',
      english: 'to run',
      example: {
        japanese: '毎日走ります。',
        english: 'I run every day.'
      }
    },
    {
      id: 'v115',
      japanese: '座る',
      reading: 'すわる',
      english: 'to sit',
      example: {
        japanese: '椅子に座ります。',
        english: 'I sit on the chair.'
      }
    },
    {
      id: 'v116',
      japanese: '立つ',
      reading: 'たつ',
      english: 'to stand',
      example: {
        japanese: '電車で立ちます。',
        english: 'I stand on the train.'
      }
    },
    {
      id: 'v117',
      japanese: '寝る',
      reading: 'ねる',
      english: 'to sleep',
      example: {
        japanese: '夜に寝ます。',
        english: 'I sleep at night.'
      }
    },
    {
      id: 'v118',
      japanese: '起きる',
      reading: 'おきる',
      english: 'to wake up',
      example: {
        japanese: '朝早く起きます。',
        english: 'I wake up early in the morning.'
      }
    },
    {
      id: 'v119',
      japanese: '働く',
      reading: 'はたらく',
      english: 'to work',
      example: {
        japanese: '会社で働きます。',
        english: 'I work at a company.'
      }
    },
    {
      id: 'v120',
      japanese: '勉強する',
      reading: 'べんきょうする',
      english: 'to study',
      example: {
        japanese: '毎日勉強します。',
        english: 'I study every day.'
      }
    },
    // Adjectives
    {
      id: 'v121',
      japanese: '大きい',
      reading: 'おおきい',
      english: 'big',
      example: {
        japanese: '大きい家です。',
        english: 'It\'s a big house.'
      }
    },
    {
      id: 'v122',
      japanese: '小さい',
      reading: 'ちいさい',
      english: 'small',
      example: {
        japanese: '小さい猫です。',
        english: 'It\'s a small cat.'
      }
    },
    {
      id: 'v123',
      japanese: '新しい',
      reading: 'あたらしい',
      english: 'new',
      example: {
        japanese: '新しい車です。',
        english: 'It\'s a new car.'
      }
    },
    {
      id: 'v124',
      japanese: '古い',
      reading: 'ふるい',
      english: 'old',
      example: {
        japanese: '古い本です。',
        english: 'It\'s an old book.'
      }
    },
    {
      id: 'v125',
      japanese: '高い',
      reading: 'たかい',
      english: 'tall, expensive',
      example: {
        japanese: '高い建物です。',
        english: 'It\'s a tall building.'
      }
    },
    {
      id: 'v126',
      japanese: '安い',
      reading: 'やすい',
      english: 'cheap',
      example: {
        japanese: '安い服です。',
        english: 'It\'s cheap clothing.'
      }
    },
    {
      id: 'v127',
      japanese: '近い',
      reading: 'ちかい',
      english: 'near',
      example: {
        japanese: '駅が近いです。',
        english: 'The station is near.'
      }
    },
    {
      id: 'v128',
      japanese: '遠い',
      reading: 'とおい',
      english: 'far',
      example: {
        japanese: '学校が遠いです。',
        english: 'The school is far.'
      }
    },
    {
      id: 'v129',
      japanese: '早い',
      reading: 'はやい',
      english: 'early, fast',
      example: {
        japanese: '早く起きます。',
        english: 'I wake up early.'
      }
    },
    {
      id: 'v130',
      japanese: '遅い',
      reading: 'おそい',
      english: 'late, slow',
      example: {
        japanese: '遅く寝ます。',
        english: 'I go to bed late.'
      }
    },
    {
      id: 'v131',
      japanese: '良い',
      reading: 'よい',
      english: 'good',
      example: {
        japanese: '良い天気です。',
        english: 'It\'s good weather.'
      }
    },
    {
      id: 'v132',
      japanese: '悪い',
      reading: 'わるい',
      english: 'bad',
      example: {
        japanese: '悪い天気です。',
        english: 'It\'s bad weather.'
      }
    },
    {
      id: 'v133',
      japanese: '熱い',
      reading: 'あつい',
      english: 'hot',
      example: {
        japanese: 'お茶が熱いです。',
        english: 'The tea is hot.'
      }
    },
    {
      id: 'v134',
      japanese: '寒い',
      reading: 'さむい',
      english: 'cold',
      example: {
        japanese: '今日は寒いです。',
        english: 'Today is cold.'
      }
    },
    {
      id: 'v135',
      japanese: '暖かい',
      reading: 'あたたかい',
      english: 'warm',
      example: {
        japanese: '暖かい部屋です。',
        english: 'It\'s a warm room.'
      }
    },
    {
      id: 'v136',
      japanese: '涼しい',
      reading: 'すずしい',
      english: 'cool',
      example: {
        japanese: '涼しい風です。',
        english: 'It\'s a cool breeze.'
      }
    },
    {
      id: 'v137',
      japanese: '美味しい',
      reading: 'おいしい',
      english: 'delicious',
      example: {
        japanese: '美味しい料理です。',
        english: 'It\'s delicious food.'
      }
    },
    {
      id: 'v138',
      japanese: 'まずい',
      reading: 'まずい',
      english: 'tasteless, bad taste',
      example: {
        japanese: 'まずい料理です。',
        english: 'It\'s tasteless food.'
      }
    },
    {
      id: 'v139',
      japanese: '面白い',
      reading: 'おもしろい',
      english: 'interesting',
      example: {
        japanese: '面白い映画です。',
        english: 'It\'s an interesting movie.'
      }
    },
    {
      id: 'v140',
      japanese: 'つまらない',
      reading: 'つまらない',
      english: 'boring',
      example: {
        japanese: 'つまらない本です。',
        english: 'It\'s a boring book.'
      }
    },
    {
      id: 'v141',
      japanese: '忙しい',
      reading: 'いそがしい',
      english: 'busy',
      example: {
        japanese: '今日は忙しいです。',
        english: 'Today is busy.'
      }
    },
    {
      id: 'v142',
      japanese: '暇',
      reading: 'ひま',
      english: 'free time',
      example: {
        japanese: '今日は暇です。',
        english: 'Today I have free time.'
      }
    },
    {
      id: 'v143',
      japanese: '難しい',
      reading: 'むずかしい',
      english: 'difficult',
      example: {
        japanese: '難しい問題です。',
        english: 'It\'s a difficult problem.'
      }
    },
    {
      id: 'v144',
      japanese: '易しい',
      reading: 'やさしい',
      english: 'easy',
      example: {
        japanese: '易しい問題です。',
        english: 'It\'s an easy problem.'
      }
    },
    {
      id: 'v145',
      japanese: '重い',
      reading: 'おもい',
      english: 'heavy',
      example: {
        japanese: '重い荷物です。',
        english: 'It\'s heavy luggage.'
      }
    },
    {
      id: 'v146',
      japanese: '軽い',
      reading: 'かるい',
      english: 'light',
      example: {
        japanese: '軽い荷物です。',
        english: 'It\'s light luggage.'
      }
    },
    {
      id: 'v147',
      japanese: '長い',
      reading: 'ながい',
      english: 'long',
      example: {
        japanese: '長い道です。',
        english: 'It\'s a long road.'
      }
    },
    {
      id: 'v148',
      japanese: '短い',
      reading: 'みじかい',
      english: 'short',
      example: {
        japanese: '短い髪です。',
        english: 'It\'s short hair.'
      }
    },
    {
      id: 'v149',
      japanese: '広い',
      reading: 'ひろい',
      english: 'wide, spacious',
      example: {
        japanese: '広い部屋です。',
        english: 'It\'s a spacious room.'
      }
    },
    {
      id: 'v150',
      japanese: '狭い',
      reading: 'せまい',
      english: 'narrow',
      example: {
        japanese: '狭い道です。',
        english: 'It\'s a narrow road.'
      }
    },
    {
      id: 'v151',
      japanese: '厚い',
      reading: 'あつい',
      english: 'thick',
      example: {
        japanese: '厚い本です。',
        english: 'It\'s a thick book.'
      }
    },
    {
      id: 'v152',
      japanese: '薄い',
      reading: 'うすい',
      english: 'thin',
      example: {
        japanese: '薄い紙です。',
        english: 'It\'s thin paper.'
      }
    },
    {
      id: 'v153',
      japanese: '深い',
      reading: 'ふかい',
      english: 'deep',
      example: {
        japanese: '深い海です。',
        english: 'It\'s a deep sea.'
      }
    },
    {
      id: 'v154',
      japanese: '浅い',
      reading: 'あさい',
      english: 'shallow',
      example: {
        japanese: '浅い川です。',
        english: 'It\'s a shallow river.'
      }
    },
    {
      id: 'v155',
      japanese: '明るい',
      reading: 'あかるい',
      english: 'bright',
      example: {
        japanese: '明るい部屋です。',
        english: 'It\'s a bright room.'
      }
    },
    {
      id: 'v156',
      japanese: '暗い',
      reading: 'くらい',
      english: 'dark',
      example: {
        japanese: '暗い部屋です。',
        english: 'It\'s a dark room.'
      }
    },
    {
      id: 'v157',
      japanese: '静か',
      reading: 'しずか',
      english: 'quiet',
      example: {
        japanese: '静かな場所です。',
        english: 'It\'s a quiet place.'
      }
    },
    {
      id: 'v158',
      japanese: 'うるさい',
      reading: 'うるさい',
      english: 'noisy',
      example: {
        japanese: 'うるさい場所です。',
        english: 'It\'s a noisy place.'
      }
    },
    {
      id: 'v159',
      japanese: '綺麗',
      reading: 'きれい',
      english: 'beautiful, clean',
      example: {
        japanese: '綺麗な花です。',
        english: 'It\'s a beautiful flower.'
      }
    },
    {
      id: 'v160',
      japanese: '汚い',
      reading: 'きたない',
      english: 'dirty',
      example: {
        japanese: '汚い部屋です。',
        english: 'It\'s a dirty room.'
      }
    },
    {
      id: 'v161',
      japanese: '元気',
      reading: 'げんき',
      english: 'healthy, energetic',
      example: {
        japanese: '元気な子供です。',
        english: 'It\'s a healthy child.'
      }
    },
    {
      id: 'v162',
      japanese: '病気',
      reading: 'びょうき',
      english: 'sick',
      example: {
        japanese: '病気の人は休みます。',
        english: 'Sick people rest.'
      }
    },
    {
      id: 'v163',
      japanese: '有名',
      reading: 'ゆうめい',
      english: 'famous',
      example: {
        japanese: '有名な歌手です。',
        english: 'It\'s a famous singer.'
      }
    },
    {
      id: 'v164',
      japanese: '大切',
      reading: 'たいせつ',
      english: 'important',
      example: {
        japanese: '大切な物です。',
        english: 'It\'s an important thing.'
      }
    },
    {
      id: 'v165',
      japanese: '便利',
      reading: 'べんり',
      english: 'convenient',
      example: {
        japanese: '便利な道具です。',
        english: 'It\'s a convenient tool.'
      }
    },
    {
      id: 'v166',
      japanese: '不便',
      reading: 'ふべん',
      english: 'inconvenient',
      example: {
        japanese: '不便な場所です。',
        english: 'It\'s an inconvenient place.'
      }
    },
    {
      id: 'v167',
      japanese: '安全',
      reading: 'あんぜん',
      english: 'safe',
      example: {
        japanese: '安全な場所です。',
        english: 'It\'s a safe place.'
      }
    },
    {
      id: 'v168',
      japanese: '危険',
      reading: 'きけん',
      english: 'dangerous',
      example: {
        japanese: '危険な場所です。',
        english: 'It\'s a dangerous place.'
      }
    },
    {
      id: 'v169',
      japanese: '簡単',
      reading: 'かんたん',
      english: 'simple',
      example: {
        japanese: '簡単な問題です。',
        english: 'It\'s a simple problem.'
      }
    },
    // Food and drinks
    {
      id: 'v171',
      japanese: 'ご飯',
      reading: 'ごはん',
      english: 'rice, meal',
      example: {
        japanese: 'ご飯を食べます。',
        english: 'I eat rice.'
      }
    },
    {
      id: 'v172',
      japanese: 'パン',
      reading: 'ぱん',
      english: 'bread',
      example: {
        japanese: 'パンを買います。',
        english: 'I buy bread.'
      }
    },
    {
      id: 'v173',
      japanese: '肉',
      reading: 'にく',
      english: 'meat',
      example: {
        japanese: '肉を食べます。',
        english: 'I eat meat.'
      }
    },
    {
      id: 'v174',
      japanese: '魚',
      reading: 'さかな',
      english: 'fish',
      example: {
        japanese: '魚を食べます。',
        english: 'I eat fish.'
      }
    },
    {
      id: 'v175',
      japanese: '野菜',
      reading: 'やさい',
      english: 'vegetables',
      example: {
        japanese: '野菜を食べます。',
        english: 'I eat vegetables.'
      }
    },
    {
      id: 'v176',
      japanese: '果物',
      reading: 'くだもの',
      english: 'fruit',
      example: {
        japanese: '果物が好きです。',
        english: 'I like fruit.'
      }
    },
    {
      id: 'v177',
      japanese: 'りんご',
      reading: 'りんご',
      english: 'apple',
      example: {
        japanese: 'りんごを食べます。',
        english: 'I eat an apple.'
      }
    },
    {
      id: 'v178',
      japanese: 'バナナ',
      reading: 'ばなな',
      english: 'banana',
      example: {
        japanese: 'バナナが好きです。',
        english: 'I like bananas.'
      }
    },
    {
      id: 'v179',
      japanese: 'オレンジ',
      reading: 'おれんじ',
      english: 'orange',
      example: {
        japanese: 'オレンジを食べます。',
        english: 'I eat an orange.'
      }
    },
    {
      id: 'v180',
      japanese: 'コーヒー',
      reading: 'こーひー',
      english: 'coffee',
      example: {
        japanese: 'コーヒーを飲みます。',
        english: 'I drink coffee.'
      }
    },
    {
      id: 'v181',
      japanese: 'お茶',
      reading: 'おちゃ',
      english: 'tea',
      example: {
        japanese: 'お茶を飲みます。',
        english: 'I drink tea.'
      }
    },
    {
      id: 'v182',
      japanese: '牛乳',
      reading: 'ぎゅうにゅう',
      english: 'milk',
      example: {
        japanese: '牛乳を飲みます。',
        english: 'I drink milk.'
      }
    },
    {
      id: 'v183',
      japanese: 'ジュース',
      reading: 'じゅーす',
      english: 'juice',
      example: {
        japanese: 'ジュースを飲みます。',
        english: 'I drink juice.'
      }
    },
    {
      id: 'v184',
      japanese: 'ビール',
      reading: 'びーる',
      english: 'beer',
      example: {
        japanese: 'ビールを飲みます。',
        english: 'I drink beer.'
      }
    },
    {
      id: 'v185',
      japanese: 'お酒',
      reading: 'おさけ',
      english: 'alcohol, sake',
      example: {
        japanese: 'お酒を飲みます。',
        english: 'I drink alcohol.'
      }
    },
    // Clothing
    {
      id: 'v186',
      japanese: '服',
      reading: 'ふく',
      english: 'clothes',
      example: {
        japanese: '新しい服を買います。',
        english: 'I buy new clothes.'
      }
    },
    {
      id: 'v187',
      japanese: 'シャツ',
      reading: 'しゃつ',
      english: 'shirt',
      example: {
        japanese: '白いシャツを着ます。',
        english: 'I wear a white shirt.'
      }
    },
    {
      id: 'v188',
      japanese: 'ズボン',
      reading: 'ずぼん',
      english: 'pants',
      example: {
        japanese: '青いズボンをはきます。',
        english: 'I wear blue pants.'
      }
    },
    {
      id: 'v189',
      japanese: 'スカート',
      reading: 'すかーと',
      english: 'skirt',
      example: {
        japanese: 'スカートをはきます。',
        english: 'I wear a skirt.'
      }
    },
    {
      id: 'v190',
      japanese: '靴',
      reading: 'くつ',
      english: 'shoes',
      example: {
        japanese: '新しい靴を買います。',
        english: 'I buy new shoes.'
      }
    },
    {
      id: 'v191',
      japanese: '帽子',
      reading: 'ぼうし',
      english: 'hat',
      example: {
        japanese: '帽子をかぶります。',
        english: 'I wear a hat.'
      }
    },
    {
      id: 'v192',
      japanese: '手袋',
      reading: 'てぶくろ',
      english: 'gloves',
      example: {
        japanese: '手袋をはめます。',
        english: 'I wear gloves.'
      }
    },
    {
      id: 'v193',
      japanese: '靴下',
      reading: 'くつした',
      english: 'socks',
      example: {
        japanese: '靴下をはきます。',
        english: 'I wear socks.'
      }
    },
    // Body parts
    {
      id: 'v194',
      japanese: '頭',
      reading: 'あたま',
      english: 'head',
      example: {
        japanese: '頭が痛いです。',
        english: 'My head hurts.'
      }
    },
    {
      id: 'v195',
      japanese: '顔',
      reading: 'かお',
      english: 'face',
      example: {
        japanese: '顔を洗います。',
        english: 'I wash my face.'
      }
    },
    {
      id: 'v196',
      japanese: '目',
      reading: 'め',
      english: 'eye',
      example: {
        japanese: '目が大きいです。',
        english: 'My eyes are big.'
      }
    },
    {
      id: 'v197',
      japanese: '鼻',
      reading: 'はな',
      english: 'nose',
      example: {
        japanese: '鼻が高いです。',
        english: 'I have a high nose.'
      }
    },
    {
      id: 'v198',
      japanese: '口',
      reading: 'くち',
      english: 'mouth',
      example: {
        japanese: '口を開けます。',
        english: 'I open my mouth.'
      }
    },
    {
      id: 'v199',
      japanese: '耳',
      reading: 'みみ',
      english: 'ear',
      example: {
        japanese: '耳を聞きます。',
        english: 'I listen with my ears.'
      }
    },
    {
      id: 'v200',
      japanese: '歯',
      reading: 'は',
      english: 'tooth',
      example: {
        japanese: '歯を磨きます。',
        english: 'I brush my teeth.'
      },
      dictionaryLink: 'https://jisho.org/search/歯'
    },
    {
      id: 'v201',
      japanese: '手',
      reading: 'て',
      english: 'hand',
      example: {
        japanese: '手を洗います。',
        english: 'I wash my hands.'
      }
    },
    {
      id: 'v202',
      japanese: '足',
      reading: 'あし',
      english: 'foot, leg',
      example: {
        japanese: '足が長いです。',
        english: 'My legs are long.'
      }
    },
    {
      id: 'v203',
      japanese: '背',
      reading: 'せ',
      english: 'back',
      example: {
        japanese: '背が高いです。',
        english: 'I am tall.'
      }
    },
    {
      id: 'v204',
      japanese: '心',
      reading: 'こころ',
      english: 'heart, mind',
      example: {
        japanese: '心が優しいです。',
        english: 'I have a kind heart.'
      }
    },
    // Common objects
    {
      id: 'v205',
      japanese: 'お金',
      reading: 'おかね',
      english: 'money',
      example: {
        japanese: 'お金を持っています。',
        english: 'I have money.'
      }
    },
    {
      id: 'v206',
      japanese: '時計',
      reading: 'とけい',
      english: 'clock, watch',
      example: {
        japanese: '時計を見ます。',
        english: 'I look at the clock.'
      }
    },
    {
      id: 'v207',
      japanese: 'カメラ',
      reading: 'かめら',
      english: 'camera',
      example: {
        japanese: 'カメラで写真を撮ります。',
        english: 'I take photos with a camera.'
      }
    },
    {
      id: 'v208',
      japanese: '写真',
      reading: 'しゃしん',
      english: 'photo',
      example: {
        japanese: '写真を撮ります。',
        english: 'I take a photo.'
      }
    },
    {
      id: 'v209',
      japanese: 'テレビ',
      reading: 'てれび',
      english: 'TV',
      example: {
        japanese: 'テレビを見ます。',
        english: 'I watch TV.'
      }
    },
    {
      id: 'v210',
      japanese: 'ラジオ',
      reading: 'らじお',
      english: 'radio',
      example: {
        japanese: 'ラジオを聞きます。',
        english: 'I listen to the radio.'
      }
    },
    {
      id: 'v211',
      japanese: '音楽',
      reading: 'おんがく',
      english: 'music',
      example: {
        japanese: '音楽を聞きます。',
        english: 'I listen to music.'
      }
    },
    {
      id: 'v212',
      japanese: '新聞',
      reading: 'しんぶん',
      english: 'newspaper',
      example: {
        japanese: '新聞を読みます。',
        english: 'I read the newspaper.'
      }
    },
    {
      id: 'v213',
      japanese: '雑誌',
      reading: 'ざっし',
      english: 'magazine',
      example: {
        japanese: '雑誌を買います。',
        english: 'I buy a magazine.'
      }
    },
    {
      id: 'v214',
      japanese: '手紙',
      reading: 'てがみ',
      english: 'letter',
      example: {
        japanese: '手紙を書きます。',
        english: 'I write a letter.'
      }
    },
    {
      id: 'v215',
      japanese: '切手',
      reading: 'きって',
      english: 'stamp',
      example: {
        japanese: '切手を買います。',
        english: 'I buy stamps.'
      }
    },
    {
      id: 'v216',
      japanese: '封筒',
      reading: 'ふうとう',
      english: 'envelope',
      example: {
        japanese: '封筒に手紙を入れます。',
        english: 'I put a letter in an envelope.'
      }
    },
    {
      id: 'v217',
      japanese: '紙',
      reading: 'かみ',
      english: 'paper',
      example: {
        japanese: '紙に書きます。',
        english: 'I write on paper.'
      }
    },
    {
      id: 'v218',
      japanese: '鉛筆',
      reading: 'えんぴつ',
      english: 'pencil',
      example: {
        japanese: '鉛筆で書きます。',
        english: 'I write with a pencil.'
      }
    },
    {
      id: 'v219',
      japanese: 'ペン',
      reading: 'ぺん',
      english: 'pen',
      example: {
        japanese: 'ペンで書きます。',
        english: 'I write with a pen.'
      }
    },
    {
      id: 'v220',
      japanese: '消しゴム',
      reading: 'けしごむ',
      english: 'eraser',
      example: {
        japanese: '消しゴムで消します。',
        english: 'I erase with an eraser.'
      }
    },
    {
      id: 'v221',
      japanese: 'ノート',
      reading: 'のーと',
      english: 'notebook',
      example: {
        japanese: 'ノートに書きます。',
        english: 'I write in a notebook.'
      }
    },
    {
      id: 'v222',
      japanese: '辞書',
      reading: 'じしょ',
      english: 'dictionary',
      example: {
        japanese: '辞書を引きます。',
        english: 'I look up words in a dictionary.'
      }
    },
    {
      id: 'v223',
      japanese: '鞄',
      reading: 'かばん',
      english: 'bag',
      example: {
        japanese: '鞄を持ちます。',
        english: 'I carry a bag.'
      }
    },
    {
      id: 'v224',
      japanese: '傘',
      reading: 'かさ',
      english: 'umbrella',
      example: {
        japanese: '傘を持ちます。',
        english: 'I carry an umbrella.'
      }
    },
    {
      id: 'v225',
      japanese: '鍵',
      reading: 'かぎ',
      english: 'key',
      example: {
        japanese: '鍵を忘れました。',
        english: 'I forgot my key.'
      }
    },
    {
      id: 'v226',
      japanese: '財布',
      reading: 'さいふ',
      english: 'wallet',
      example: {
        japanese: '財布を忘れました。',
        english: 'I forgot my wallet.'
      }
    },
    {
      id: 'v227',
      japanese: '眼鏡',
      reading: 'めがね',
      english: 'glasses',
      example: {
        japanese: '眼鏡をかけます。',
        english: 'I wear glasses.'
      }
    },
    {
      id: 'v228',
      japanese: '時計',
      reading: 'とけい',
      english: 'watch',
      example: {
        japanese: '時計をします。',
        english: 'I wear a watch.'
      }
    },
    {
      id: 'v229',
      japanese: '指輪',
      reading: 'ゆびわ',
      english: 'ring',
      example: {
        japanese: '指輪をはめます。',
        english: 'I wear a ring.'
      }
    },
    {
      id: 'v230',
      japanese: 'ネックレス',
      reading: 'ねっくれす',
      english: 'necklace',
      example: {
        japanese: 'ネックレスをします。',
        english: 'I wear a necklace.'
      }
    },
    // Transportation
    {
      id: 'v231',
      japanese: '自転車',
      reading: 'じてんしゃ',
      english: 'bicycle',
      example: {
        japanese: '自転車に乗ります。',
        english: 'I ride a bicycle.'
      }
    },
    {
      id: 'v232',
      japanese: 'バス',
      reading: 'ばす',
      english: 'bus',
      example: {
        japanese: 'バスに乗ります。',
        english: 'I ride the bus.'
      }
    },
    {
      id: 'v233',
      japanese: '飛行機',
      reading: 'ひこうき',
      english: 'airplane',
      example: {
        japanese: '飛行機で行きます。',
        english: 'I go by airplane.'
      }
    },
    {
      id: 'v234',
      japanese: '船',
      reading: 'ふね',
      english: 'ship',
      example: {
        japanese: '船で行きます。',
        english: 'I go by ship.'
      }
    },
    {
      id: 'v235',
      japanese: 'タクシー',
      reading: 'たくしー',
      english: 'taxi',
      example: {
        japanese: 'タクシーに乗ります。',
        english: 'I take a taxi.'
      }
    },
    {
      id: 'v236',
      japanese: '地下鉄',
      reading: 'ちかてつ',
      english: 'subway',
      example: {
        japanese: '地下鉄で行きます。',
        english: 'I go by subway.'
      }
    },
    // Weather and seasons
    {
      id: 'v237',
      japanese: '天気',
      reading: 'てんき',
      english: 'weather',
      example: {
        japanese: '天気が良いです。',
        english: 'The weather is good.'
      }
    },
    {
      id: 'v238',
      japanese: '春',
      reading: 'はる',
      english: 'spring',
      example: {
        japanese: '春が好きです。',
        english: 'I like spring.'
      }
    },
    {
      id: 'v239',
      japanese: '夏',
      reading: 'なつ',
      english: 'summer',
      example: {
        japanese: '夏は暑いです。',
        english: 'Summer is hot.'
      }
    },
    {
      id: 'v240',
      japanese: '秋',
      reading: 'あき',
      english: 'autumn',
      example: {
        japanese: '秋は涼しいです。',
        english: 'Autumn is cool.'
      }
    },
    {
      id: 'v241',
      japanese: '冬',
      reading: 'ふゆ',
      english: 'winter',
      example: {
        japanese: '冬は寒いです。',
        english: 'Winter is cold.'
      }
    },
    {
      id: 'v242',
      japanese: '雲',
      reading: 'くも',
      english: 'cloud',
      example: {
        japanese: '雲があります。',
        english: 'There are clouds.'
      }
    },
    {
      id: 'v243',
      japanese: '雷',
      reading: 'かみなり',
      english: 'thunder',
      example: {
        japanese: '雷が鳴ります。',
        english: 'Thunder rumbles.'
      }
    },
    {
      id: 'v244',
      japanese: '虹',
      reading: 'にじ',
      english: 'rainbow',
      example: {
        japanese: '虹が見えます。',
        english: 'I can see a rainbow.'
      }
    },
    // Common activities
    {
      id: 'v245',
      japanese: '勉強',
      reading: 'べんきょう',
      english: 'study',
      example: {
        japanese: '勉強をします。',
        english: 'I study.'
      }
    },
    {
      id: 'v246',
      japanese: '仕事',
      reading: 'しごと',
      english: 'work',
      example: {
        japanese: '仕事をします。',
        english: 'I work.'
      },
      dictionaryLink: 'https://jisho.org/search/仕事'
    },
    {
      id: 'v247',
      japanese: '買い物',
      reading: 'かいもの',
      english: 'shopping',
      example: {
        japanese: '買い物をします。',
        english: 'I go shopping.'
      },
      dictionaryLink: 'https://jisho.org/search/買い物'
    },
    {
      id: 'v248',
      japanese: '料理',
      reading: 'りょうり',
      english: 'cooking',
      example: {
        japanese: '料理をします。',
        english: 'I cook.'
      },
      dictionaryLink: 'https://jisho.org/search/料理'
    },
    {
      id: 'v249',
      japanese: '掃除',
      reading: 'そうじ',
      english: 'cleaning',
      example: {
        japanese: '掃除をします。',
        english: 'I clean.'
      },
      dictionaryLink: 'https://jisho.org/search/掃除'
    },
    {
      id: 'v250',
      japanese: '洗濯',
      reading: 'せんたく',
      english: 'laundry',
      example: {
        japanese: '洗濯をします。',
        english: 'I do laundry.'
      },
      dictionaryLink: 'https://jisho.org/search/洗濯'
    },
    {
      id: 'v251',
      japanese: '散歩',
      reading: 'さんぽ',
      english: 'walk',
      example: {
        japanese: '散歩をします。',
        english: 'I take a walk.'
      }
    },
    {
      id: 'v252',
      japanese: '運動',
      reading: 'うんどう',
      english: 'exercise',
      example: {
        japanese: '運動をします。',
        english: 'I exercise.'
      }
    },
    {
      id: 'v253',
      japanese: '旅行',
      reading: 'りょこう',
      english: 'travel',
      example: {
        japanese: '旅行をします。',
        english: 'I travel.'
      }
    },
    {
      id: 'v254',
      japanese: '休み',
      reading: 'やすみ',
      english: 'rest, vacation',
      example: {
        japanese: '休みを取ります。',
        english: 'I take a break.'
      }
    },
    {
      id: 'v255',
      japanese: '遊び',
      reading: 'あそび',
      english: 'play',
      example: {
        japanese: '遊びをします。',
        english: 'I play.'
      }
    },
    {
      id: 'v256',
      japanese: 'ゲーム',
      reading: 'げーむ',
      english: 'game',
      example: {
        japanese: 'ゲームをします。',
        english: 'I play games.'
      }
    },
    {
      id: 'v257',
      japanese: 'スポーツ',
      reading: 'すぽーつ',
      english: 'sports',
      example: {
        japanese: 'スポーツをします。',
        english: 'I play sports.'
      }
    },
    {
      id: 'v258',
      japanese: '映画',
      reading: 'えいが',
      english: 'movie',
      example: {
        japanese: '映画を見ます。',
        english: 'I watch movies.'
      }
    },
    {
      id: 'v259',
      japanese: 'パーティー',
      reading: 'ぱーてぃー',
      english: 'party',
      example: {
        japanese: 'パーティーをします。',
        english: 'I have a party.'
      }
    },
    {
      id: 'v260',
      japanese: '会議',
      reading: 'かいぎ',
      english: 'meeting',
      example: {
        japanese: '会議をします。',
        english: 'I have a meeting.'
      }
    },
    // Common adjectives (more)
    {
      id: 'v261',
      japanese: '可愛い',
      reading: 'かわいい',
      english: 'cute',
      example: {
        japanese: '可愛い猫です。',
        english: 'It\'s a cute cat.'
      }
    },
    {
      id: 'v262',
      japanese: '美しい',
      reading: 'うつくしい',
      english: 'beautiful',
      example: {
        japanese: '美しい花です。',
        english: 'It\'s a beautiful flower.'
      }
    },
    {
      id: 'v263',
      japanese: '醜い',
      reading: 'みにくい',
      english: 'ugly',
      example: {
        japanese: '醜い建物です。',
        english: 'It\'s an ugly building.'
      }
    },
    {
      id: 'v264',
      japanese: '強い',
      reading: 'つよい',
      english: 'strong',
      example: {
        japanese: '強い人です。',
        english: 'He\'s a strong person.'
      }
    },
    {
      id: 'v265',
      japanese: '弱い',
      reading: 'よわい',
      english: 'weak',
      example: {
        japanese: '弱い人です。',
        english: 'He\'s a weak person.'
      }
    },
    {
      id: 'v266',
      japanese: '太い',
      reading: 'ふとい',
      english: 'thick, fat',
      example: {
        japanese: '太い木です。',
        english: 'It\'s a thick tree.'
      }
    },
    {
      id: 'v267',
      japanese: '細い',
      reading: 'ほそい',
      english: 'thin, slender',
      example: {
        japanese: '細い人です。',
        english: 'He\'s a thin person.'
      }
    },
    {
      id: 'v268',
      japanese: '太った',
      reading: 'ふとった',
      english: 'fat',
      example: {
        japanese: '太った人です。',
        english: 'He\'s a fat person.'
      }
    },
    {
      id: 'v269',
      japanese: '痩せた',
      reading: 'やせた',
      english: 'thin',
      example: {
        japanese: '痩せた人です。',
        english: 'He\'s a thin person.'
      }
    },
    {
      id: 'v270',
      japanese: '若い',
      reading: 'わかい',
      english: 'young',
      example: {
        japanese: '若い人です。',
        english: 'He\'s a young person.'
      }
    },
    {
      id: 'v271',
      japanese: '年寄り',
      reading: 'としより',
      english: 'old person',
      example: {
        japanese: '年寄りの人です。',
        english: 'He\'s an old person.'
      }
    },
    {
      id: 'v272',
      japanese: '若い',
      reading: 'わかい',
      english: 'young',
      example: {
        japanese: '若い人です。',
        english: 'He\'s a young person.'
      }
    },
    {
      id: 'v273',
      japanese: '大人',
      reading: 'おとな',
      english: 'adult',
      example: {
        japanese: '大人の人です。',
        english: 'He\'s an adult.'
      }
    },
    {
      id: 'v274',
      japanese: '子供',
      reading: 'こども',
      english: 'child',
      example: {
        japanese: '子供の人です。',
        english: 'He\'s a child.'
      }
    },
    {
      id: 'v275',
      japanese: '赤ちゃん',
      reading: 'あかちゃん',
      english: 'baby',
      example: {
        japanese: '赤ちゃんがいます。',
        english: 'There\'s a baby.'
      }
    },
    // Common nouns (more)
    {
      id: 'v276',
      japanese: '問題',
      reading: 'もんだい',
      english: 'problem',
      example: {
        japanese: '問題があります。',
        english: 'There\'s a problem.'
      }
    },
    {
      id: 'v277',
      japanese: '答え',
      reading: 'こたえ',
      english: 'answer',
      example: {
        japanese: '答えを知っています。',
        english: 'I know the answer.'
      }
    },
    {
      id: 'v278',
      japanese: '質問',
      reading: 'しつもん',
      english: 'question',
      example: {
        japanese: '質問をします。',
        english: 'I ask a question.'
      }
    },
    {
      id: 'v279',
      japanese: '宿題',
      reading: 'しゅくだい',
      english: 'homework',
      example: {
        japanese: '宿題をします。',
        english: 'I do homework.'
      }
    },
    {
      id: 'v280',
      japanese: 'テスト',
      reading: 'てすと',
      english: 'test',
      example: {
        japanese: 'テストを受けます。',
        english: 'I take a test.'
      }
    },
    {
      id: 'v281',
      japanese: '試験',
      reading: 'しけん',
      english: 'exam',
      example: {
        japanese: '試験を受けます。',
        english: 'I take an exam.'
      }
    },
    {
      id: 'v282',
      japanese: '授業',
      reading: 'じゅぎょう',
      english: 'class',
      example: {
        japanese: '授業を受けます。',
        english: 'I attend class.'
      }
    },
    {
      id: 'v283',
      japanese: '宿題',
      reading: 'しゅくだい',
      english: 'homework',
      example: {
        japanese: '宿題をします。',
        english: 'I do homework.'
      }
    },
    {
      id: 'v284',
      japanese: 'レポート',
      reading: 'れぽーと',
      english: 'report',
      example: {
        japanese: 'レポートを書きます。',
        english: 'I write a report.'
      }
    },
    {
      id: 'v285',
      japanese: '作文',
      reading: 'さくぶん',
      english: 'composition',
      example: {
        japanese: '作文を書きます。',
        english: 'I write a composition.'
      }
    },
    {
      id: 'v286',
      japanese: '発表',
      reading: 'はっぴょう',
      english: 'presentation',
      example: {
        japanese: '発表をします。',
        english: 'I give a presentation.'
      }
    },
    {
      id: 'v287',
      japanese: '説明',
      reading: 'せつめい',
      english: 'explanation',
      example: {
        japanese: '説明をします。',
        english: 'I give an explanation.'
      }
    },
    {
      id: 'v288',
      japanese: '理由',
      reading: 'りゆう',
      english: 'reason',
      example: {
        japanese: '理由を聞きます。',
        english: 'I ask for the reason.'
      }
    },
    {
      id: 'v289',
      japanese: '原因',
      reading: 'げんいん',
      english: 'cause',
      example: {
        japanese: '原因を調べます。',
        english: 'I investigate the cause.'
      }
    },
    {
      id: 'v290',
      japanese: '結果',
      reading: 'けっか',
      english: 'result',
      example: {
        japanese: '結果を待ちます。',
        english: 'I wait for the result.'
      }
    },
    {
      id: 'v291',
      japanese: '目的',
      reading: 'もくてき',
      english: 'purpose',
      example: {
        japanese: '目的を説明します。',
        english: 'I explain the purpose.'
      }
    },
    {
      id: 'v292',
      japanese: '目標',
      reading: 'もくひょう',
      english: 'goal',
      example: {
        japanese: '目標を立てます。',
        english: 'I set a goal.'
      }
    },
    {
      id: 'v293',
      japanese: '計画',
      reading: 'けいかく',
      english: 'plan',
      example: {
        japanese: '計画を立てます。',
        english: 'I make a plan.'
      }
    },
    {
      id: 'v294',
      japanese: '予定',
      reading: 'よてい',
      english: 'schedule',
      example: {
        japanese: '予定を確認します。',
        english: 'I check the schedule.'
      }
    },
    {
      id: 'v295',
      japanese: '約束',
      reading: 'やくそく',
      english: 'promise',
      example: {
        japanese: '約束を守ります。',
        english: 'I keep my promise.'
      }
    },
    {
      id: 'v296',
      japanese: '希望',
      reading: 'きぼう',
      english: 'hope',
      example: {
        japanese: '希望を持ちます。',
        english: 'I have hope.'
      }
    },
    {
      id: 'v297',
      japanese: '夢',
      reading: 'ゆめ',
      english: 'dream',
      example: {
        japanese: '夢を見ます。',
        english: 'I have a dream.'
      }
    },
    {
      id: 'v298',
      japanese: '未来',
      reading: 'みらい',
      english: 'future',
      example: {
        japanese: '未来を考えます。',
        english: 'I think about the future.'
      }
    },
    {
      id: 'v299',
      japanese: '過去',
      reading: 'かこ',
      english: 'past',
      example: {
        japanese: '過去を振り返ります。',
        english: 'I look back at the past.'
      }
    },
    {
      id: 'v300',
      japanese: '現在',
      reading: 'げんざい',
      english: 'present',
      example: {
        japanese: '現在の状況を説明します。',
        english: 'I explain the current situation.'
      }
    },
    {
      id: 'v301',
      japanese: '状況',
      reading: 'じょうきょう',
      english: 'situation',
      example: {
        japanese: '状況を説明します。',
        english: 'I explain the situation.'
      }
    },
    {
      id: 'v302',
      japanese: '状態',
      reading: 'じょうたい',
      english: 'condition',
      example: {
        japanese: '状態を確認します。',
        english: 'I check the condition.'
      }
    },
    {
      id: 'v303',
      japanese: '環境',
      reading: 'かんきょう',
      english: 'environment',
      example: {
        japanese: '環境を守ります。',
        english: 'I protect the environment.'
      }
    },
    {
      id: 'v304',
      japanese: '社会',
      reading: 'しゃかい',
      english: 'society',
      example: {
        japanese: '社会について考えます。',
        english: 'I think about society.'
      }
    },
    {
      id: 'v305',
      japanese: '文化',
      reading: 'ぶんか',
      english: 'culture',
      example: {
        japanese: '文化を学びます。',
        english: 'I learn about culture.'
      }
    },
    {
      id: 'v306',
      japanese: '歴史',
      reading: 'れきし',
      english: 'history',
      example: {
        japanese: '歴史を勉強します。',
        english: 'I study history.'
      }
    },
    {
      id: 'v307',
      japanese: '地理',
      reading: 'ちり',
      english: 'geography',
      example: {
        japanese: '地理を勉強します。',
        english: 'I study geography.'
      }
    },
    {
      id: 'v308',
      japanese: '科学',
      reading: 'かがく',
      english: 'science',
      example: {
        japanese: '科学を勉強します。',
        english: 'I study science.'
      }
    },
    {
      id: 'v309',
      japanese: '数学',
      reading: 'すうがく',
      english: 'mathematics',
      example: {
        japanese: '数学を勉強します。',
        english: 'I study mathematics.'
      }
    },
    {
      id: 'v310',
      japanese: '英語',
      reading: 'えいご',
      english: 'English',
      example: {
        japanese: '英語を勉強します。',
        english: 'I study English.'
      }
    },
    {
      id: 'v311',
      japanese: '日本語',
      reading: 'にほんご',
      english: 'Japanese',
      example: {
        japanese: '日本語を勉強します。',
        english: 'I study Japanese.'
      }
    },
    {
      id: 'v312',
      japanese: '言語',
      reading: 'げんご',
      english: 'language',
      example: {
        japanese: '言語を学びます。',
        english: 'I learn languages.'
      }
    },
    {
      id: 'v313',
      japanese: '言葉',
      reading: 'ことば',
      english: 'word',
      example: {
        japanese: '言葉を覚えます。',
        english: 'I memorize words.'
      }
    },
    {
      id: 'v314',
      japanese: '文法',
      reading: 'ぶんぽう',
      english: 'grammar',
      example: {
        japanese: '文法を勉強します。',
        english: 'I study grammar.'
      }
    },
    {
      id: 'v315',
      japanese: '発音',
      reading: 'はつおん',
      english: 'pronunciation',
      example: {
        japanese: '発音を練習します。',
        english: 'I practice pronunciation.'
      }
    },
    {
      id: 'v316',
      japanese: '会話',
      reading: 'かいわ',
      english: 'conversation',
      example: {
        japanese: '会話を練習します。',
        english: 'I practice conversation.'
      }
    },
    {
      id: 'v317',
      japanese: '翻訳',
      reading: 'ほんやく',
      english: 'translation',
      example: {
        japanese: '翻訳をします。',
        english: 'I translate.'
      }
    },
    {
      id: 'v318',
      japanese: '通訳',
      reading: 'つうやく',
      english: 'interpreting',
      example: {
        japanese: '通訳をします。',
        english: 'I interpret.'
      }
    },
    {
      id: 'v319',
      japanese: '技術',
      reading: 'ぎじゅつ',
      english: 'technology',
      example: {
        japanese: '技術を学びます。',
        english: 'I learn technology.'
      }
    },
    {
      id: 'v320',
      japanese: '機械',
      reading: 'きかい',
      english: 'machine',
      example: {
        japanese: '機械を使います。',
        english: 'I use a machine.'
      }
    },
    {
      id: 'v321',
      japanese: '道具',
      reading: 'どうぐ',
      english: 'tool',
      example: {
        japanese: '道具を使います。',
        english: 'I use a tool.'
      }
    },
    {
      id: 'v322',
      japanese: '材料',
      reading: 'ざいりょう',
      english: 'material',
      example: {
        japanese: '材料を買います。',
        english: 'I buy materials.'
      }
    },
    {
      id: 'v323',
      japanese: '製品',
      reading: 'せいひん',
      english: 'product',
      example: {
        japanese: '製品を作ります。',
        english: 'I make products.'
      }
    },
    {
      id: 'v324',
      japanese: '商品',
      reading: 'しょうひん',
      english: 'goods',
      example: {
        japanese: '商品を売ります。',
        english: 'I sell goods.'
      }
    },
    {
      id: 'v325',
      japanese: '価格',
      reading: 'かかく',
      english: 'price',
      example: {
        japanese: '価格を確認します。',
        english: 'I check the price.'
      }
    },
    {
      id: 'v326',
      japanese: '値段',
      reading: 'ねだん',
      english: 'price',
      example: {
        japanese: '値段を聞きます。',
        english: 'I ask about the price.'
      }
    },
    {
      id: 'v327',
      japanese: '値引き',
      reading: 'ねびき',
      english: 'discount',
      example: {
        japanese: '値引きをします。',
        english: 'I give a discount.'
      }
    },
    {
      id: 'v328',
      japanese: '割引',
      reading: 'わりびき',
      english: 'discount',
      example: {
        japanese: '割引をします。',
        english: 'I give a discount.'
      }
    },
    {
      id: 'v329',
      japanese: '特価',
      reading: 'とっか',
      english: 'special price',
      example: {
        japanese: '特価で売ります。',
        english: 'I sell at a special price.'
      }
    },
    {
      id: 'v330',
      japanese: '無料',
      reading: 'むりょう',
      english: 'free',
      example: {
        japanese: '無料で提供します。',
        english: 'I provide it for free.'
      }
    },
    {
      id: 'v331',
      japanese: '有料',
      reading: 'ゆうりょう',
      english: 'paid',
      example: {
        japanese: '有料で提供します。',
        english: 'I provide it for a fee.'
      }
    },
    {
      id: 'v332',
      japanese: '料金',
      reading: 'りょうきん',
      english: 'fee',
      example: {
        japanese: '料金を払います。',
        english: 'I pay the fee.'
      }
    },
    {
      id: 'v333',
      japanese: '費用',
      reading: 'ひよう',
      english: 'cost',
      example: {
        japanese: '費用を計算します。',
        english: 'I calculate the cost.'
      }
    },
    {
      id: 'v334',
      japanese: '予算',
      reading: 'よさん',
      english: 'budget',
      example: {
        japanese: '予算を立てます。',
        english: 'I make a budget.'
      }
    },
    {
      id: 'v335',
      japanese: '収入',
      reading: 'しゅうにゅう',
      english: 'income',
      example: {
        japanese: '収入を増やします。',
        english: 'I increase my income.'
      }
    },
    {
      id: 'v336',
      japanese: '支出',
      reading: 'ししゅつ',
      english: 'expense',
      example: {
        japanese: '支出を減らします。',
        english: 'I reduce expenses.'
      }
    },
    {
      id: 'v337',
      japanese: '貯金',
      reading: 'ちょきん',
      english: 'savings',
      example: {
        japanese: '貯金をします。',
        english: 'I save money.'
      }
    },
    {
      id: 'v338',
      japanese: '借金',
      reading: 'しゃっきん',
      english: 'debt',
      example: {
        japanese: '借金を返します。',
        english: 'I pay back debt.'
      }
    },
    {
      id: 'v339',
      japanese: '投資',
      reading: 'とうし',
      english: 'investment',
      example: {
        japanese: '投資をします。',
        english: 'I make an investment.'
      }
    },
    {
      id: 'v340',
      japanese: '利益',
      reading: 'りえき',
      english: 'profit',
      example: {
        japanese: '利益を上げます。',
        english: 'I make a profit.'
      }
    },
    {
      id: 'v341',
      japanese: '損失',
      reading: 'そんしつ',
      english: 'loss',
      example: {
        japanese: '損失を出します。',
        english: 'I incur a loss.'
      }
    },
    {
      id: 'v342',
      japanese: '経済',
      reading: 'けいざい',
      english: 'economy',
      example: {
        japanese: '経済を勉強します。',
        english: 'I study economics.'
      }
    },
    {
      id: 'v343',
      japanese: '市場',
      reading: 'しじょう',
      english: 'market',
      example: {
        japanese: '市場を調査します。',
        english: 'I research the market.'
      }
    },
    {
      id: 'v344',
      japanese: '競争',
      reading: 'きょうそう',
      english: 'competition',
      example: {
        japanese: '競争に参加します。',
        english: 'I participate in competition.'
      }
    },
    {
      id: 'v345',
      japanese: '協力',
      reading: 'きょうりょく',
      english: 'cooperation',
      example: {
        japanese: '協力をします。',
        english: 'I cooperate.'
      }
    },
    {
      id: 'v346',
      japanese: '関係',
      reading: 'かんけい',
      english: 'relationship',
      example: {
        japanese: '関係を築きます。',
        english: 'I build a relationship.'
      }
    },
    {
      id: 'v347',
      japanese: '交流',
      reading: 'こうりゅう',
      english: 'exchange',
      example: {
        japanese: '交流をします。',
        english: 'I exchange.'
      }
    },
    {
      id: 'v348',
      japanese: '連絡',
      reading: 'れんらく',
      english: 'contact',
      example: {
        japanese: '連絡を取ります。',
        english: 'I make contact.'
      }
    },
    {
      id: 'v349',
      japanese: '情報',
      reading: 'じょうほう',
      english: 'information',
      example: {
        japanese: '情報を集めます。',
        english: 'I gather information.'
      }
    },
    {
      id: 'v350',
      japanese: 'データ',
      reading: 'でーた',
      english: 'data',
      example: {
        japanese: 'データを分析します。',
        english: 'I analyze data.'
      }
    },
    {
      id: 'v351',
      japanese: '資料',
      reading: 'しりょう',
      english: 'materials',
      example: {
        japanese: '資料を準備します。',
        english: 'I prepare materials.'
      }
    },
    {
      id: 'v352',
      japanese: '記録',
      reading: 'きろく',
      english: 'record',
      example: {
        japanese: '記録を残します。',
        english: 'I leave a record.'
      }
    },
    {
      id: 'v353',
      japanese: '記憶',
      reading: 'きおく',
      english: 'memory',
      example: {
        japanese: '記憶を残します。',
        english: 'I leave a memory.'
      }
    },
    {
      id: 'v354',
      japanese: '経験',
      reading: 'けいけん',
      english: 'experience',
      example: {
        japanese: '経験を積みます。',
        english: 'I gain experience.'
      }
    },
    {
      id: 'v355',
      japanese: '知識',
      reading: 'ちしき',
      english: 'knowledge',
      example: {
        japanese: '知識を増やします。',
        english: 'I increase knowledge.'
      }
    },
    {
      id: 'v356',
      japanese: '技能',
      reading: 'ぎのう',
      english: 'skill',
      example: {
        japanese: '技能を身につけます。',
        english: 'I acquire skills.'
      }
    },
    {
      id: 'v357',
      japanese: '能力',
      reading: 'のうりょく',
      english: 'ability',
      example: {
        japanese: '能力を高めます。',
        english: 'I improve my ability.'
      }
    },
    {
      id: 'v358',
      japanese: '才能',
      reading: 'さいのう',
      english: 'talent',
      example: {
        japanese: '才能を発揮します。',
        english: 'I demonstrate talent.'
      }
    },
    {
      id: 'v359',
      japanese: '努力',
      reading: 'どりょく',
      english: 'effort',
      example: {
        japanese: '努力をします。',
        english: 'I make an effort.'
      }
    },
    {
      id: 'v360',
      japanese: '成功',
      reading: 'せいこう',
      english: 'success',
      example: {
        japanese: '成功を収めます。',
        english: 'I achieve success.'
      }
    },
    {
      id: 'v361',
      japanese: '失敗',
      reading: 'しっぱい',
      english: 'failure',
      example: {
        japanese: '失敗をします。',
        english: 'I fail.'
      }
    },
    {
      id: 'v362',
      japanese: '挑戦',
      reading: 'ちょうせん',
      english: 'challenge',
      example: {
        japanese: '挑戦をします。',
        english: 'I take on a challenge.'
      }
    },
    {
      id: 'v363',
      japanese: '機会',
      reading: 'きかい',
      english: 'opportunity',
      example: {
        japanese: '機会を掴みます。',
        english: 'I seize the opportunity.'
      }
    },
    {
      id: 'v364',
      japanese: 'チャンス',
      reading: 'ちゃんす',
      english: 'chance',
      example: {
        japanese: 'チャンスを掴みます。',
        english: 'I seize the chance.'
      }
    },
    {
      id: 'v365',
      japanese: '可能性',
      reading: 'かのうせい',
      english: 'possibility',
      example: {
        japanese: '可能性を考えます。',
        english: 'I consider the possibility.'
      }
    },
    {
      id: 'v366',
      japanese: '選択',
      reading: 'せんたく',
      english: 'choice',
      example: {
        japanese: '選択をします。',
        english: 'I make a choice.'
      }
    },
    {
      id: 'v367',
      japanese: '決定',
      reading: 'けってい',
      english: 'decision',
      example: {
        japanese: '決定をします。',
        english: 'I make a decision.'
      }
    },
    {
      id: 'v368',
      japanese: '判断',
      reading: 'はんだん',
      english: 'judgment',
      example: {
        japanese: '判断をします。',
        english: 'I make a judgment.'
      }
    },
    {
      id: 'v369',
      japanese: '評価',
      reading: 'ひょうか',
      english: 'evaluation',
      example: {
        japanese: '評価をします。',
        english: 'I evaluate.'
      }
    },
    {
      id: 'v370',
      japanese: '批評',
      reading: 'ひひょう',
      english: 'criticism',
      example: {
        japanese: '批評をします。',
        english: 'I criticize.'
      }
    },
    {
      id: 'v371',
      japanese: '意見',
      reading: 'いけん',
      english: 'opinion',
      example: {
        japanese: '意見を述べます。',
        english: 'I express my opinion.'
      }
    },
    {
      id: 'v372',
      japanese: '提案',
      reading: 'ていあん',
      english: 'proposal',
      example: {
        japanese: '提案をします。',
        english: 'I make a proposal.'
      }
    },
    {
      id: 'v373',
      japanese: '要求',
      reading: 'ようきゅう',
      english: 'request',
      example: {
        japanese: '要求をします。',
        english: 'I make a request.'
      }
    },
    {
      id: 'v374',
      japanese: '依頼',
      reading: 'いらい',
      english: 'request',
      example: {
        japanese: '依頼をします。',
        english: 'I make a request.'
      }
    },
    {
      id: 'v375',
      japanese: '命令',
      reading: 'めいれい',
      english: 'order',
      example: {
        japanese: '命令を出します。',
        english: 'I give an order.'
      }
    },
    {
      id: 'v376',
      japanese: '指示',
      reading: 'しじ',
      english: 'instruction',
      example: {
        japanese: '指示を出します。',
        english: 'I give instructions.'
      }
    },
    {
      id: 'v377',
      japanese: '指導',
      reading: 'しどう',
      english: 'guidance',
      example: {
        japanese: '指導をします。',
        english: 'I provide guidance.'
      }
    },
    {
      id: 'v378',
      japanese: '教育',
      reading: 'きょういく',
      english: 'education',
      example: {
        japanese: '教育を受けます。',
        english: 'I receive education.'
      }
    },
    {
      id: 'v379',
      japanese: '学習',
      reading: 'がくしゅう',
      english: 'learning',
      example: {
        japanese: '学習をします。',
        english: 'I learn.'
      }
    },
    {
      id: 'v380',
      japanese: '練習',
      reading: 'れんしゅう',
      english: 'practice',
      example: {
        japanese: '練習をします。',
        english: 'I practice.'
      }
    },
    {
      id: 'v381',
      japanese: '訓練',
      reading: 'くんれん',
      english: 'training',
      example: {
        japanese: '訓練を受けます。',
        english: 'I receive training.'
      }
    },
    {
      id: 'v382',
      japanese: '研修',
      reading: 'けんしゅう',
      english: 'training',
      example: {
        japanese: '研修を受けます。',
        english: 'I receive training.'
      }
    },
    {
      id: 'v383',
      japanese: '研究',
      reading: 'けんきゅう',
      english: 'research',
      example: {
        japanese: '研究をします。',
        english: 'I do research.'
      }
    },
    {
      id: 'v384',
      japanese: '調査',
      reading: 'ちょうさ',
      english: 'investigation',
      example: {
        japanese: '調査をします。',
        english: 'I investigate.'
      }
    },
    {
      id: 'v385',
      japanese: '分析',
      reading: 'ぶんせき',
      english: 'analysis',
      example: {
        japanese: '分析をします。',
        english: 'I analyze.'
      }
    },
    {
      id: 'v386',
      japanese: '比較',
      reading: 'ひかく',
      english: 'comparison',
      example: {
        japanese: '比較をします。',
        english: 'I compare.'
      }
    },
    {
      id: 'v387',
      japanese: '検討',
      reading: 'けんとう',
      english: 'consideration',
      example: {
        japanese: '検討をします。',
        english: 'I consider.'
      }
    },
    {
      id: 'v388',
      japanese: '検証',
      reading: 'けんしょう',
      english: 'verification',
      example: {
        japanese: '検証をします。',
        english: 'I verify.'
      }
    },
    {
      id: 'v389',
      japanese: '確認',
      reading: 'かくにん',
      english: 'confirmation',
      example: {
        japanese: '確認をします。',
        english: 'I confirm.'
      }
    },
    {
      id: 'v390',
      japanese: '承認',
      reading: 'しょうにん',
      english: 'approval',
      example: {
        japanese: '承認をします。',
        english: 'I approve.'
      }
    },
    {
      id: 'v391',
      japanese: '許可',
      reading: 'きょか',
      english: 'permission',
      example: {
        japanese: '許可を求めます。',
        english: 'I ask for permission.'
      }
    },
    {
      id: 'v392',
      japanese: '承認',
      reading: 'しょうにん',
      english: 'approval',
      example: {
        japanese: '承認をします。',
        english: 'I approve.'
      }
    },
    {
      id: 'v393',
      japanese: '拒否',
      reading: 'きょひ',
      english: 'refusal',
      example: {
        japanese: '拒否をします。',
        english: 'I refuse.'
      }
    },
    {
      id: 'v394',
      japanese: '反対',
      reading: 'はんたい',
      english: 'opposition',
      example: {
        japanese: '反対をします。',
        english: 'I oppose.'
      }
    },
    {
      id: 'v395',
      japanese: '賛成',
      reading: 'さんせい',
      english: 'agreement',
      example: {
        japanese: '賛成をします。',
        english: 'I agree.'
      }
    },
    {
      id: 'v396',
      japanese: '支持',
      reading: 'しじ',
      english: 'support',
      example: {
        japanese: '支持をします。',
        english: 'I support.'
      }
    },
    {
      id: 'v397',
      japanese: '援助',
      reading: 'えんじょ',
      english: 'assistance',
      example: {
        japanese: '援助をします。',
        english: 'I provide assistance.'
      }
    },
    {
      id: 'v398',
      japanese: '協力',
      reading: 'きょうりょく',
      english: 'cooperation',
      example: {
        japanese: '協力をします。',
        english: 'I cooperate.'
      }
    },
    {
      id: 'v399',
      japanese: '支援',
      reading: 'しえん',
      english: 'support',
      example: {
        japanese: '支援をします。',
        english: 'I provide support.'
      }
    },
    {
      id: 'v400',
      japanese: '応援',
      reading: 'おうえん',
      english: 'cheering',
      example: {
        japanese: '応援をします。',
        english: 'I cheer.'
      }
    }
  ]
}

// Comprehensive N4 data with detailed grammar points
export const n4Data: JLPTLevel = {
  level: 'N4',
  grammar: [
    {
      id: 'you-ni-naru',
      title: '～ようになる (You ni naru)',
      explanation: 'Indicates a change in ability, habit, or state. Shows that someone has acquired a new ability or that a situation has changed. Often used with potential forms or verbs that show ability.',
      examples: [
        {
          japanese: '日本語が話せるようになりました。',
          english: 'I have become able to speak Japanese.',
          romaji: 'Nihongo ga hanaseru you ni narimashita.'
        },
        {
          japanese: '毎日運動するようになりました。',
          english: 'I have started exercising every day.',
          romaji: 'Mainichi undou suru you ni narimashita.'
        },
        {
          japanese: '子供が歩けるようになりました。',
          english: 'The child has become able to walk.',
          romaji: 'Kodomo ga arukeru you ni narimashita.'
        }
      ],
      usage: 'Use with dictionary form of verbs + ようになる. For potential verbs, use potential form + ようになる. Indicates a change from not being able to do something to being able to do it.'
    },
    {
      id: 'nagara',
      title: '～ながら (Nagara)',
      explanation: 'Expresses simultaneous actions, meaning "while doing" or "as you do". Shows that two actions are happening at the same time. The first action is usually the secondary action.',
      examples: [
        {
          japanese: '音楽を聞きながら勉強します。',
          english: 'I study while listening to music.',
          romaji: 'Ongaku wo kikinagara benkyou shimasu.'
        },
        {
          japanese: '歩きながら電話をかけました。',
          english: 'I made a phone call while walking.',
          romaji: 'Arukinagara denwa wo kakemashita.'
        },
        {
          japanese: 'テレビを見ながら食事をします。',
          english: 'I eat while watching TV.',
          romaji: 'Terebi wo minagara shokuji wo shimasu.'
        }
      ],
      usage: 'Use with the stem of verbs + ながら. The verb before ながら is the secondary action, and the main action comes after.'
    },
    {
      id: 'sugiru',
      title: '～すぎる (Sugiru)',
      explanation: 'Indicates excessiveness, meaning "too much" or "excessively". Can be used with adjectives, verbs, and nouns to show that something is overdone or excessive.',
      examples: [
        {
          japanese: 'この料理は辛すぎます。',
          english: 'This dish is too spicy.',
          romaji: 'Kono ryouri wa karasugimasu.'
        },
        {
          japanese: '食べすぎてお腹が痛いです。',
          english: 'I ate too much and my stomach hurts.',
          romaji: 'Tabesugite onaka ga itai desu.'
        },
        {
          japanese: '宿題が多すぎてできません。',
          english: 'There is too much homework and I can\'t do it.',
          romaji: 'Shukudai ga oosugite dekimasen.'
        }
      ],
      usage: 'With い-adjectives: remove い + すぎる. With な-adjectives: add すぎる. With verbs: stem + すぎる. With nouns: noun + すぎる.'
    },
    {
      id: 'hou-ga-ii',
      title: '～ほうがいい (Hou ga ii)',
      explanation: 'Gives advice or recommendations, meaning "it\'s better to" or "you should". Used to suggest what someone should or shouldn\'t do. Can be used with both positive and negative forms.',
      examples: [
        {
          japanese: '早く寝たほうがいいです。',
          english: 'You should go to bed early.',
          romaji: 'Hayaku neta hou ga ii desu.'
        },
        {
          japanese: 'タバコを吸わないほうがいいです。',
          english: 'You shouldn\'t smoke.',
          romaji: 'Tabako wo suwanai hou ga ii desu.'
        },
        {
          japanese: '医者に行ったほうがいいですよ。',
          english: 'You should go to the doctor.',
          romaji: 'Isha ni itta hou ga ii desu yo.'
        }
      ],
      usage: 'Use with past tense form of verbs + ほうがいい for advice. Use with negative past tense + ほうがいい for negative advice.'
    },
    {
      id: 'kamoshirenai',
      title: '～かもしれない (Kamoshirenai)',
      explanation: 'Expresses possibility or uncertainty, meaning "might" or "maybe". Shows that the speaker is not certain about something. More formal than casual expressions of uncertainty.',
      examples: [
        {
          japanese: '明日は雨が降るかもしれません。',
          english: 'It might rain tomorrow.',
          romaji: 'Ashita wa ame ga furu kamoshiremasen.'
        },
        {
          japanese: '田中さんは来ないかもしれません。',
          english: 'Tanaka might not come.',
          romaji: 'Tanaka-san wa konai kamoshiremasen.'
        },
        {
          japanese: 'この本は難しいかもしれません。',
          english: 'This book might be difficult.',
          romaji: 'Kono hon wa muzukashii kamoshiremasen.'
        }
      ],
      usage: 'Use with dictionary form of verbs/adjectives + かもしれません. For nouns, use noun + かもしれません.'
    },
    {
      id: 'nakereba-naranai',
      title: '～なければならない (Nakereba naranai)',
      explanation: 'Expresses obligation or necessity, meaning "must" or "have to". Shows that something is required or obligatory. More formal than casual expressions of necessity.',
      examples: [
        {
          japanese: '宿題をしなければなりません。',
          english: 'I must do my homework.',
          romaji: 'Shukudai wo shinakereba narimasen.'
        },
        {
          japanese: '明日までにレポートを出さなければなりません。',
          english: 'I must submit the report by tomorrow.',
          romaji: 'Ashita made ni repooto wo dasanakereba narimasen.'
        },
        {
          japanese: '毎日練習しなければなりません。',
          english: 'I must practice every day.',
          romaji: 'Mainichi renshuu shinakereba narimasen.'
        }
      ],
      usage: 'Use with negative stem of verbs + なければなりません. Can be shortened to なければならない in casual speech.'
    },
    {
      id: 'te-mo-ii',
      title: '～てもいい (Te mo ii)',
      explanation: 'Grants permission, meaning "it\'s okay to" or "you may". Used to give permission for someone to do something. Can be used as a question to ask for permission.',
      examples: [
        {
          japanese: 'ここで写真を撮ってもいいですか？',
          english: 'May I take a photo here?',
          romaji: 'Koko de shashin wo totte mo ii desu ka?'
        },
        {
          japanese: '帰ってもいいです。',
          english: 'You may go home.',
          romaji: 'Kaette mo ii desu.'
        },
        {
          japanese: 'この本を借りてもいいですか？',
          english: 'May I borrow this book?',
          romaji: 'Kono hon wo karite mo ii desu ka?'
        }
      ],
      usage: 'Use with te-form of verbs + てもいいです. Add か to make it a question asking for permission.'
    },
    {
      id: 'te-iru',
      title: '～ている (Te iru)',
      explanation: 'Describes ongoing actions or states. Can indicate continuous actions, completed actions with ongoing results, or habitual actions. Context determines the meaning.',
      examples: [
        {
          japanese: '今、本を読んでいます。',
          english: 'I am reading a book now.',
          romaji: 'Ima, hon wo yonde imasu.'
        },
        {
          japanese: '結婚しています。',
          english: 'I am married.',
          romaji: 'Kekkon shite imasu.'
        },
        {
          japanese: '毎日ジョギングをしています。',
          english: 'I jog every day.',
          romaji: 'Mainichi jogingu wo shite imasu.'
        }
      ],
      usage: 'Use with te-form of verbs + います. Indicates ongoing action, completed state, or habitual action depending on context.'
    },
    {
      id: 'ta-koto-ga-aru',
      title: '～たことがある (Ta koto ga aru)',
      explanation: 'Expresses past experience, meaning "have done" or "have been". Shows that someone has experienced something in the past. Only used for experiences, not recent actions.',
      examples: [
        {
          japanese: '日本に行ったことがあります。',
          english: 'I have been to Japan.',
          romaji: 'Nihon ni itta koto ga arimasu.'
        },
        {
          japanese: 'その映画を見たことがあります。',
          english: 'I have seen that movie.',
          romaji: 'Sono eiga wo mita koto ga arimasu.'
        },
        {
          japanese: '寿司を食べたことがありますか？',
          english: 'Have you ever eaten sushi?',
          romaji: 'Sushi wo tabeta koto ga arimasu ka?'
        }
      ],
      usage: 'Use with past tense form of verbs + ことがあります. Indicates past experience, not recent actions.'
    },
    {
      id: 'deshou',
      title: '～でしょう (Deshou)',
      explanation: 'Indicates probability or conjecture, meaning "probably" or "I think". Shows the speaker\'s assumption or prediction about something. More formal than casual expressions of probability.',
      examples: [
        {
          japanese: '明日は雨でしょう。',
          english: 'It will probably rain tomorrow.',
          romaji: 'Ashita wa ame deshou.'
        },
        {
          japanese: '田中さんは忙しいでしょう。',
          english: 'Tanaka is probably busy.',
          romaji: 'Tanaka-san wa isogashii deshou.'
        },
        {
          japanese: 'この問題は難しいでしょう。',
          english: 'This problem is probably difficult.',
          romaji: 'Kono mondai wa muzukashii deshou.'
        }
      ],
      usage: 'Use with dictionary form of verbs/adjectives + でしょう. For nouns, use noun + でしょう.'
    }
  ],
  exercises: [
    {
      id: 'ex1',
      type: 'fill-blank',
      question: '日本語が話せる____になりました。',
      answer: 'よう',
      explanation: 'Use ようになる to indicate a change in ability.'
    },
    {
      id: 'ex2',
      type: 'translation',
      question: 'I study while listening to music.',
      answer: '音楽を聞きながら勉強します。',
      explanation: 'Use ながら to express simultaneous actions.'
    },
    {
      id: 'ex3',
      type: 'fill-blank',
      question: 'この料理は辛____ます。',
      answer: 'すぎ',
      explanation: 'Use すぎる to indicate excessiveness.'
    },
    {
      id: 'ex4',
      type: 'translation',
      question: 'You should go to bed early.',
      answer: '早く寝たほうがいいです。',
      explanation: 'Use ほうがいい to give advice.'
    },
    {
      id: 'ex5',
      type: 'fill-blank',
      question: '明日は雨が降る____もしれません。',
      answer: 'か',
      explanation: 'Use かもしれません to express possibility.'
    },
    {
      id: 'ex6',
      type: 'translation',
      question: 'I must do my homework.',
      answer: '宿題をしなければなりません。',
      explanation: 'Use なければなりません to express obligation.'
    },
    {
      id: 'ex7',
      type: 'fill-blank',
      question: 'ここで写真を撮っ____いいですか？',
      answer: 'ても',
      explanation: 'Use てもいいです to ask for permission.'
    },
    {
      id: 'ex8',
      type: 'translation',
      question: 'I am reading a book now.',
      answer: '今、本を読んでいます。',
      explanation: 'Use ている to describe ongoing actions.'
    },
    {
      id: 'ex9',
      type: 'fill-blank',
      question: '日本に行っ____ことがあります。',
      answer: 'た',
      explanation: 'Use たことがある to express past experience.'
    },
    {
      id: 'ex10',
      type: 'translation',
      question: 'It will probably rain tomorrow.',
      answer: '明日は雨でしょう。',
      explanation: 'Use でしょう to express probability.'
    }
  ],
  vocabulary: [
    {
      id: 'v1',
      japanese: '運動',
      reading: 'うんどう',
      english: 'exercise',
      example: {
        japanese: '毎日運動するようになりました。',
        english: 'I have started exercising every day.'
      }
    },
    {
      id: 'v2',
      japanese: '音楽',
      reading: 'おんがく',
      english: 'music',
      example: {
        japanese: '音楽を聞きながら勉強します。',
        english: 'I study while listening to music.'
      }
    },
    {
      id: 'v3',
      japanese: '料理',
      reading: 'りょうり',
      english: 'cooking',
      example: {
        japanese: 'この料理は辛すぎます。',
        english: 'This dish is too spicy.'
      }
    },
    {
      id: 'v4',
      japanese: '医者',
      reading: 'いしゃ',
      english: 'doctor',
      example: {
        japanese: '医者に行ったほうがいいですよ。',
        english: 'You should go to the doctor.'
      }
    },
    {
      id: 'v5',
      japanese: '宿題',
      reading: 'しゅくだい',
      english: 'homework',
      example: {
        japanese: '宿題をしなければなりません。',
        english: 'I must do my homework.'
      }
    },
    {
      id: 'v6',
      japanese: '写真',
      reading: 'しゃしん',
      english: 'photo',
      example: {
        japanese: 'ここで写真を撮ってもいいですか？',
        english: 'May I take a photo here?'
      }
    },
    {
      id: 'v7',
      japanese: '結婚',
      reading: 'けっこん',
      english: 'marriage',
      example: {
        japanese: '結婚しています。',
        english: 'I am married.'
      }
    },
    {
      id: 'v8',
      japanese: '寿司',
      reading: 'すし',
      english: 'sushi',
      example: {
        japanese: '寿司を食べたことがありますか？',
        english: 'Have you ever eaten sushi?'
      }
    },
    {
      id: 'v9',
      japanese: '問題',
      reading: 'もんだい',
      english: 'problem',
      example: {
        japanese: 'この問題は難しいでしょう。',
        english: 'This problem is probably difficult.'
      }
    },
    {
      id: 'v10',
      japanese: '練習',
      reading: 'れんしゅう',
      english: 'practice',
      example: {
        japanese: '毎日練習しなければなりません。',
        english: 'I must practice every day.'
      }
    }
  ]
}

// Comprehensive N3 data with detailed grammar points
export const n3Data: JLPTLevel = {
  level: 'N3',
  grammar: [
    {
      id: 'you-ni-suru',
      title: '～ようにする (You ni suru)',
      explanation: 'Expresses making an effort to do something or trying to achieve a certain state. Shows intentional behavior change or effort to maintain a condition. Often used with volitional verbs.',
      examples: [
        {
          japanese: '毎日運動するようにしています。',
          english: 'I make an effort to exercise every day.',
          romaji: 'Mainichi undou suru you ni shite imasu.'
        },
        {
          japanese: '早く寝るようにしています。',
          english: 'I try to go to bed early.',
          romaji: 'Hayaku neru you ni shite imasu.'
        },
        {
          japanese: '日本語を話すようにしています。',
          english: 'I make an effort to speak Japanese.',
          romaji: 'Nihongo wo hanasu you ni shite imasu.'
        }
      ],
      usage: 'Use with dictionary form of verbs + ようにしています. Indicates ongoing effort or intention to do something.'
    },
    {
      id: 'koto-ni-suru',
      title: '～ことにする (Koto ni suru)',
      explanation: 'Expresses a personal decision or resolution, meaning "I decide to" or "I will". Shows that the speaker has made a decision about something. Used for personal choices and resolutions.',
      examples: [
        {
          japanese: 'タバコをやめることにしました。',
          english: 'I decided to quit smoking.',
          romaji: 'Tabako wo yameru koto ni shimashita.'
        },
        {
          japanese: '来年日本に行くことにしました。',
          english: 'I decided to go to Japan next year.',
          romaji: 'Rainen Nihon ni iku koto ni shimashita.'
        },
        {
          japanese: '毎日勉強することにしています。',
          english: 'I have decided to study every day.',
          romaji: 'Mainichi benkyou suru koto ni shite imasu.'
        }
      ],
      usage: 'Use with dictionary form of verbs + ことにします. Indicates personal decision or resolution.'
    },
    {
      id: 'koto-ni-naru',
      title: '～ことになる (Koto ni naru)',
      explanation: 'Expresses that something has been decided or arranged by circumstances, meaning "it has been decided that" or "it turns out that". Shows external decisions or natural outcomes.',
      examples: [
        {
          japanese: '来月転勤することになりました。',
          english: 'It has been decided that I will be transferred next month.',
          romaji: 'Raigetsu tenkin suru koto ni narimashita.'
        },
        {
          japanese: '会議は来週に延期することになりました。',
          english: 'It has been decided to postpone the meeting until next week.',
          romaji: 'Kaigi wa raishuu ni enki suru koto ni narimashita.'
        },
        {
          japanese: '新しいプロジェクトを担当することになりました。',
          english: 'It has been decided that I will be in charge of the new project.',
          romaji: 'Atarashii purojekuto wo tantou suru koto ni narimashita.'
        }
      ],
      usage: 'Use with dictionary form of verbs + ことになります. Indicates external decisions or circumstances.'
    },
    {
      id: 'you-da',
      title: '～ようだ (You da)',
      explanation: 'Expresses appearance or impression, meaning "it seems like" or "it appears that". Based on visual observation or general impression. More subjective than other conjecture expressions.',
      examples: [
        {
          japanese: '雨が降るようです。',
          english: 'It seems like it will rain.',
          romaji: 'Ame ga furu you desu.'
        },
        {
          japanese: '田中さんは忙しいようです。',
          english: 'Tanaka seems to be busy.',
          romaji: 'Tanaka-san wa isogashii you desu.'
        },
        {
          japanese: 'この問題は難しいようです。',
          english: 'This problem seems difficult.',
          romaji: 'Kono mondai wa muzukashii you desu.'
        }
      ],
      usage: 'Use with dictionary form of verbs/adjectives + ようです. For nouns, use noun + のようです.'
    },
    {
      id: 'rashii',
      title: '～らしい (Rashii)',
      explanation: 'Expresses hearsay or apparent characteristics, meaning "I heard that" or "it seems that". Based on information from others or typical characteristics. More objective than ようだ.',
      examples: [
        {
          japanese: '明日は雨が降るらしいです。',
          english: 'I heard that it will rain tomorrow.',
          romaji: 'Ashita wa ame ga furu rashii desu.'
        },
        {
          japanese: '田中さんは医者らしいです。',
          english: 'Tanaka seems to be a doctor.',
          romaji: 'Tanaka-san wa isha rashii desu.'
        },
        {
          japanese: 'その店は美味しいらしいです。',
          english: 'I heard that restaurant is delicious.',
          romaji: 'Sono mise wa oishii rashii desu.'
        }
      ],
      usage: 'Use with dictionary form of verbs/adjectives + らしいです. For nouns, use noun + らしいです.'
    },
    {
      id: 'mitai-da',
      title: '～みたいだ (Mitai da)',
      explanation: 'Expresses similarity or appearance, meaning "like" or "similar to". More casual than ようだ and often used in spoken Japanese. Can also mean "it seems like".',
      examples: [
        {
          japanese: 'この問題は簡単みたいです。',
          english: 'This problem seems easy.',
          romaji: 'Kono mondai wa kantan mitai desu.'
        },
        {
          japanese: '田中さんは先生みたいです。',
          english: 'Tanaka looks like a teacher.',
          romaji: 'Tanaka-san wa sensei mitai desu.'
        },
        {
          japanese: '雨が降るみたいです。',
          english: 'It looks like it will rain.',
          romaji: 'Ame ga furu mitai desu.'
        }
      ],
      usage: 'Use with dictionary form of verbs/adjectives + みたいです. For nouns, use noun + みたいです.'
    },
    {
      id: 'tame-ni',
      title: '～ために (Tame ni)',
      explanation: 'Expresses purpose or reason, meaning "in order to" or "because of". Shows the purpose of an action or the reason for a situation. Can be used for both purposes and causes.',
      examples: [
        {
          japanese: '日本語を勉強するために日本に来ました。',
          english: 'I came to Japan in order to study Japanese.',
          romaji: 'Nihongo wo benkyou suru tame ni Nihon ni kimashita.'
        },
        {
          japanese: '健康のために運動しています。',
          english: 'I exercise for the sake of my health.',
          romaji: 'Kenkou no tame ni undou shite imasu.'
        },
        {
          japanese: '雨のために試合が中止になりました。',
          english: 'The game was cancelled because of the rain.',
          romaji: 'Ame no tame ni shiai ga chuushi ni narimashita.'
        }
      ],
      usage: 'Use with dictionary form of verbs + ために for purpose. Use with noun + のために for reason.'
    },
    {
      id: 'noni',
      title: '～のに (Noni)',
      explanation: 'Expresses contrast or unexpected result, meaning "although" or "despite". Shows that the result is contrary to what was expected. Often expresses disappointment or surprise.',
      examples: [
        {
          japanese: '一生懸命勉強したのに、試験に落ちました。',
          english: 'Although I studied hard, I failed the exam.',
          romaji: 'Isshoukenmei benkyou shita noni, shiken ni ochimashita.'
        },
        {
          japanese: '雨が降っているのに、出かけました。',
          english: 'Despite the rain, I went out.',
          romaji: 'Ame ga futte iru noni, dekakemashita.'
        },
        {
          japanese: '時間があるのに、勉強しません。',
          english: 'Although I have time, I don\'t study.',
          romaji: 'Jikan ga aru noni, benkyou shimasen.'
        }
      ],
      usage: 'Use with dictionary form of verbs/adjectives + のに. For nouns, use noun + なのに.'
    },
    {
      id: 'bakari',
      title: '～ばかり (Bakari)',
      explanation: 'Expresses "only" or "nothing but", indicating that something is done excessively or exclusively. Shows that only one thing is happening or being done. Can have negative connotations.',
      examples: [
        {
          japanese: '彼はテレビを見てばかりいます。',
          english: 'He does nothing but watch TV.',
          romaji: 'Kare wa terebi wo mite bakari imasu.'
        },
        {
          japanese: '最近は雨ばかりです。',
          english: 'Recently it\'s been nothing but rain.',
          romaji: 'Saikin wa ame bakari desu.'
        },
        {
          japanese: '甘いものばかり食べています。',
          english: 'I eat nothing but sweet things.',
          romaji: 'Amai mono bakari tabete imasu.'
        }
      ],
      usage: 'Use with te-form of verbs + ばかりいます. Use with nouns + ばかりです.'
    },
    {
      id: 'te-bakari-iru',
      title: '～てばかりいる (Te bakari iru)',
      explanation: 'Expresses doing nothing but a certain action, meaning "doing nothing but" or "always doing". Shows excessive or exclusive behavior. Often used with criticism or concern.',
      examples: [
        {
          japanese: '彼は寝てばかりいます。',
          english: 'He does nothing but sleep.',
          romaji: 'Kare wa nete bakari imasu.'
        },
        {
          japanese: '遊んでばかりいないで、勉強しなさい。',
          english: 'Don\'t just play all the time, study.',
          romaji: 'Asonde bakari inaide, benkyou shinasai.'
        },
        {
          japanese: '食べてばかりいると太りますよ。',
          english: 'If you do nothing but eat, you\'ll gain weight.',
          romaji: 'Tabete bakari iru to futorimasu yo.'
        }
      ],
      usage: 'Use with te-form of verbs + ばかりいます. Indicates excessive or exclusive behavior.'
    }
  ],
  exercises: [
    {
      id: 'ex1',
      type: 'fill-blank',
      question: '毎日運動する____しています。',
      answer: 'ように',
      explanation: 'Use ようにしています to express making an effort.'
    },
    {
      id: 'ex2',
      type: 'translation',
      question: 'I decided to quit smoking.',
      answer: 'タバコをやめることにしました。',
      explanation: 'Use ことにします to express personal decision.'
    },
    {
      id: 'ex3',
      type: 'fill-blank',
      question: '来月転勤する____になりました。',
      answer: 'こと',
      explanation: 'Use ことになります to express external decision.'
    },
    {
      id: 'ex4',
      type: 'translation',
      question: 'It seems like it will rain.',
      answer: '雨が降るようです。',
      explanation: 'Use ようです to express appearance or impression.'
    },
    {
      id: 'ex5',
      type: 'fill-blank',
      question: '明日は雨が降る____です。',
      answer: 'らしい',
      explanation: 'Use らしいです to express hearsay.'
    },
    {
      id: 'ex6',
      type: 'translation',
      question: 'This problem seems easy.',
      answer: 'この問題は簡単みたいです。',
      explanation: 'Use みたいです to express similarity or appearance.'
    },
    {
      id: 'ex7',
      type: 'fill-blank',
      question: '日本語を勉強する____日本に来ました。',
      answer: 'ために',
      explanation: 'Use ために to express purpose.'
    },
    {
      id: 'ex8',
      type: 'translation',
      question: 'Although I studied hard, I failed the exam.',
      answer: '一生懸命勉強したのに、試験に落ちました。',
      explanation: 'Use のに to express contrast or unexpected result.'
    },
    {
      id: 'ex9',
      type: 'fill-blank',
      question: '彼はテレビを見て____います。',
      answer: 'ばかり',
      explanation: 'Use てばかりいます to express doing nothing but one action.'
    },
    {
      id: 'ex10',
      type: 'translation',
      question: 'He does nothing but sleep.',
      answer: '彼は寝てばかりいます。',
      explanation: 'Use てばかりいます to express excessive behavior.'
    }
  ],
  vocabulary: [
    {
      id: 'v1',
      japanese: '転勤',
      reading: 'てんきん',
      english: 'transfer',
      example: {
        japanese: '来月転勤することになりました。',
        english: 'It has been decided that I will be transferred next month.'
      }
    },
    {
      id: 'v2',
      japanese: '会議',
      reading: 'かいぎ',
      english: 'meeting',
      example: {
        japanese: '会議は来週に延期することになりました。',
        english: 'It has been decided to postpone the meeting until next week.'
      }
    },
    {
      id: 'v3',
      japanese: 'プロジェクト',
      reading: 'プロジェクト',
      english: 'project',
      example: {
        japanese: '新しいプロジェクトを担当することになりました。',
        english: 'It has been decided that I will be in charge of the new project.'
      }
    },
    {
      id: 'v4',
      japanese: '担当',
      reading: 'たんとう',
      english: 'in charge',
      example: {
        japanese: '新しいプロジェクトを担当することになりました。',
        english: 'It has been decided that I will be in charge of the new project.'
      }
    },
    {
      id: 'v5',
      japanese: '延期',
      reading: 'えんき',
      english: 'postponement',
      example: {
        japanese: '会議は来週に延期することになりました。',
        english: 'It has been decided to postpone the meeting until next week.'
      }
    },
    {
      id: 'v6',
      japanese: '一生懸命',
      reading: 'いっしょうけんめい',
      english: 'hard',
      example: {
        japanese: '一生懸命勉強したのに、試験に落ちました。',
        english: 'Although I studied hard, I failed the exam.'
      }
    },
    {
      id: 'v7',
      japanese: '試験',
      reading: 'しけん',
      english: 'exam',
      example: {
        japanese: '一生懸命勉強したのに、試験に落ちました。',
        english: 'Although I studied hard, I failed the exam.'
      }
    },
    {
      id: 'v8',
      japanese: '健康',
      reading: 'けんこう',
      english: 'health',
      example: {
        japanese: '健康のために運動しています。',
        english: 'I exercise for the sake of my health.'
      }
    },
    {
      id: 'v9',
      japanese: '試合',
      reading: 'しあい',
      english: 'game',
      example: {
        japanese: '雨のために試合が中止になりました。',
        english: 'The game was cancelled because of the rain.'
      }
    },
    {
      id: 'v10',
      japanese: '中止',
      reading: 'ちゅうし',
      english: 'cancellation',
      example: {
        japanese: '雨のために試合が中止になりました。',
        english: 'The game was cancelled because of the rain.'
      }
    }
  ]
}

// Comprehensive N2 data with detailed grammar points
export const n2Data: JLPTLevel = {
  level: 'N2',
  grammar: [
    {
      id: 'mono-da',
      title: '～ものだ (Mono da)',
      explanation: 'Expresses general truths, characteristics, or natural tendencies. Shows what is generally true or what people typically do. Often used to express common sense or universal truths.',
      examples: [
        {
          japanese: '人は年を取ると忘れやすくなるものです。',
          english: 'People tend to become forgetful as they get older.',
          romaji: 'Hito wa toshi wo toru to wasureyasuku naru mono desu.'
        },
        {
          japanese: '子供は元気なものです。',
          english: 'Children are naturally energetic.',
          romaji: 'Kodomo wa genki na mono desu.'
        },
        {
          japanese: '勉強は難しいものです。',
          english: 'Studying is naturally difficult.',
          romaji: 'Benkyou wa muzukashii mono desu.'
        }
      ],
      usage: 'Use with dictionary form of verbs/adjectives + ものです. For な-adjectives, use なものです.'
    },
    {
      id: 'mono-wo',
      title: '～ものを (Mono wo)',
      explanation: 'Expresses regret or disappointment, meaning "if only" or "though". Shows that the speaker regrets that something didn\'t happen or wishes things were different. Often used with criticism.',
      examples: [
        {
          japanese: 'もっと早く言ってくれればよかったものを。',
          english: 'If only you had told me earlier.',
          romaji: 'Motto hayaku itte kurereba yokatta mono wo.'
        },
        {
          japanese: '時間があれば行ったものを。',
          english: 'If only I had time, I would have gone.',
          romaji: 'Jikan ga areba itta mono wo.'
        },
        {
          japanese: 'もっと勉強すればよかったものを。',
          english: 'If only I had studied more.',
          romaji: 'Motto benkyou sureba yokatta mono wo.'
        }
      ],
      usage: 'Use with conditional forms + ものを. Expresses regret or disappointment.'
    },
    {
      id: 'koto-mo-aru',
      title: '～こともある (Koto mo aru)',
      explanation: 'Expresses that something sometimes happens, meaning "sometimes" or "occasionally". Shows that an action or state occurs from time to time, but not always. Indicates occasional behavior.',
      examples: [
        {
          japanese: '忙しい時は夜遅くまで働くこともあります。',
          english: 'When I\'m busy, I sometimes work late into the night.',
          romaji: 'Isogashii toki wa yoru osoku made hataraku koto mo arimasu.'
        },
        {
          japanese: '週末は家でゆっくりすることもあります。',
          english: 'Sometimes I relax at home on weekends.',
          romaji: 'Shuumatsu wa ie de yukkuri suru koto mo arimasu.'
        },
        {
          japanese: '疲れている時は早く寝ることもあります。',
          english: 'When I\'m tired, I sometimes go to bed early.',
          romaji: 'Tsukarete iru toki wa hayaku neru koto mo arimasu.'
        }
      ],
      usage: 'Use with dictionary form of verbs + こともあります. Indicates occasional behavior.'
    },
    {
      id: 'koto-ga-dekiru',
      title: '～ことができる (Koto ga dekiru)',
      explanation: 'Expresses ability or possibility, meaning "can" or "be able to". Shows that someone has the ability to do something or that something is possible. More formal than potential forms.',
      examples: [
        {
          japanese: '日本語を話すことができます。',
          english: 'I can speak Japanese.',
          romaji: 'Nihongo wo hanasu koto ga dekimasu.'
        },
        {
          japanese: 'この問題を解くことができますか？',
          english: 'Can you solve this problem?',
          romaji: 'Kono mondai wo toku koto ga dekimasu ka?'
        },
        {
          japanese: '明日までに終わらせることができます。',
          english: 'I can finish it by tomorrow.',
          romaji: 'Ashita made ni owarasete koto ga dekimasu.'
        }
      ],
      usage: 'Use with dictionary form of verbs + ことができます. Indicates ability or possibility.'
    },
    {
      id: 'koto-ni-suru',
      title: '～ことにする (Koto ni suru)',
      explanation: 'Expresses a personal decision or resolution, meaning "I decide to" or "I will". Shows that the speaker has made a decision about something. Used for personal choices and resolutions.',
      examples: [
        {
          japanese: '来年から日本語を勉強することにしました。',
          english: 'I decided to start studying Japanese next year.',
          romaji: 'Rainen kara Nihongo wo benkyou suru koto ni shimashita.'
        },
        {
          japanese: '毎日運動することにしています。',
          english: 'I have decided to exercise every day.',
          romaji: 'Mainichi undou suru koto ni shite imasu.'
        },
        {
          japanese: 'タバコをやめることにしました。',
          english: 'I decided to quit smoking.',
          romaji: 'Tabako wo yameru koto ni shimashita.'
        }
      ],
      usage: 'Use with dictionary form of verbs + ことにします. Indicates personal decision or resolution.'
    },
    {
      id: 'koto-ni-naru',
      title: '～ことになる (Koto ni naru)',
      explanation: 'Expresses that something has been decided or arranged by circumstances, meaning "it has been decided that" or "it turns out that". Shows external decisions or natural outcomes.',
      examples: [
        {
          japanese: '来月から新しい部署に移ることになりました。',
          english: 'It has been decided that I will move to a new department next month.',
          romaji: 'Raigetsu kara atarashii busho ni utsuru koto ni narimashita.'
        },
        {
          japanese: '会議は来週に延期することになりました。',
          english: 'It has been decided to postpone the meeting until next week.',
          romaji: 'Kaigi wa raishuu ni enki suru koto ni narimashita.'
        },
        {
          japanese: '新しいプロジェクトを担当することになりました。',
          english: 'It has been decided that I will be in charge of the new project.',
          romaji: 'Atarashii purojekuto wo tantou suru koto ni narimashita.'
        }
      ],
      usage: 'Use with dictionary form of verbs + ことになります. Indicates external decisions or circumstances.'
    },
    {
      id: 'koto-ga-aru',
      title: '～ことがある (Koto ga aru)',
      explanation: 'Expresses that something sometimes happens, meaning "sometimes" or "occasionally". Shows that an action or state occurs from time to time, but not always. Indicates occasional behavior.',
      examples: [
        {
          japanese: '忙しい時は夜遅くまで働くことがあります。',
          english: 'When I\'m busy, I sometimes work late into the night.',
          romaji: 'Isogashii toki wa yoru osoku made hataraku koto ga arimasu.'
        },
        {
          japanese: '週末は家でゆっくりすることがあります。',
          english: 'Sometimes I relax at home on weekends.',
          romaji: 'Shuumatsu wa ie de yukkuri suru koto ga arimasu.'
        },
        {
          japanese: '疲れている時は早く寝ることがあります。',
          english: 'When I\'m tired, I sometimes go to bed early.',
          romaji: 'Tsukarete iru toki wa hayaku neru koto ga arimasu.'
        }
      ],
      usage: 'Use with dictionary form of verbs + ことがあります. Indicates occasional behavior.'
    },
    {
      id: 'koto-ga-dekiru',
      title: '～ことができる (Koto ga dekiru)',
      explanation: 'Expresses ability or possibility, meaning "can" or "be able to". Shows that someone has the ability to do something or that something is possible. More formal than potential forms.',
      examples: [
        {
          japanese: '日本語を話すことができます。',
          english: 'I can speak Japanese.',
          romaji: 'Nihongo wo hanasu koto ga dekimasu.'
        },
        {
          japanese: 'この問題を解くことができますか？',
          english: 'Can you solve this problem?',
          romaji: 'Kono mondai wo toku koto ga dekimasu ka?'
        },
        {
          japanese: '明日までに終わらせることができます。',
          english: 'I can finish it by tomorrow.',
          romaji: 'Ashita made ni owarasete koto ga dekimasu.'
        }
      ],
      usage: 'Use with dictionary form of verbs + ことができます. Indicates ability or possibility.'
    },
    {
      id: 'koto-ga-aru',
      title: '～ことがある (Koto ga aru)',
      explanation: 'Expresses that something sometimes happens, meaning "sometimes" or "occasionally". Shows that an action or state occurs from time to time, but not always. Indicates occasional behavior.',
      examples: [
        {
          japanese: '忙しい時は夜遅くまで働くことがあります。',
          english: 'When I\'m busy, I sometimes work late into the night.',
          romaji: 'Isogashii toki wa yoru osoku made hataraku koto ga arimasu.'
        },
        {
          japanese: '週末は家でゆっくりすることがあります。',
          english: 'Sometimes I relax at home on weekends.',
          romaji: 'Shuumatsu wa ie de yukkuri suru koto ga arimasu.'
        },
        {
          japanese: '疲れている時は早く寝ることがあります。',
          english: 'When I\'m tired, I sometimes go to bed early.',
          romaji: 'Tsukarete iru toki wa hayaku neru koto ga arimasu.'
        }
      ],
      usage: 'Use with dictionary form of verbs + ことがあります. Indicates occasional behavior.'
    },
    {
      id: 'koto-ga-dekiru',
      title: '～ことができる (Koto ga dekiru)',
      explanation: 'Expresses ability or possibility, meaning "can" or "be able to". Shows that someone has the ability to do something or that something is possible. More formal than potential forms.',
      examples: [
        {
          japanese: '日本語を話すことができます。',
          english: 'I can speak Japanese.',
          romaji: 'Nihongo wo hanasu koto ga dekimasu.'
        },
        {
          japanese: 'この問題を解くことができますか？',
          english: 'Can you solve this problem?',
          romaji: 'Kono mondai wo toku koto ga dekimasu ka?'
        },
        {
          japanese: '明日までに終わらせることができます。',
          english: 'I can finish it by tomorrow.',
          romaji: 'Ashita made ni owarasete koto ga dekimasu.'
        }
      ],
      usage: 'Use with dictionary form of verbs + ことができます. Indicates ability or possibility.'
    }
  ],
  exercises: [
    {
      id: 'ex1',
      type: 'fill-blank',
      question: '人は年を取ると忘れやすくなる____です。',
      answer: 'もの',
      explanation: 'Use ものです to express general truths or characteristics.'
    },
    {
      id: 'ex2',
      type: 'translation',
      question: 'If only you had told me earlier.',
      answer: 'もっと早く言ってくれればよかったものを。',
      explanation: 'Use ものを to express regret or disappointment.'
    },
    {
      id: 'ex3',
      type: 'fill-blank',
      question: '忙しい時は夜遅くまで働く____もあります。',
      answer: 'こと',
      explanation: 'Use こともあります to express occasional behavior.'
    },
    {
      id: 'ex4',
      type: 'translation',
      question: 'I can speak Japanese.',
      answer: '日本語を話すことができます。',
      explanation: 'Use ことができます to express ability.'
    },
    {
      id: 'ex5',
      type: 'fill-blank',
      question: '来年から日本語を勉強する____にしました。',
      answer: 'こと',
      explanation: 'Use ことにします to express personal decision.'
    }
  ],
  vocabulary: [
    {
      id: 'v1',
      japanese: '部署',
      reading: 'ぶしょ',
      english: 'department',
      example: {
        japanese: '来月から新しい部署に移ることになりました。',
        english: 'It has been decided that I will move to a new department next month.'
      }
    },
    {
      id: 'v2',
      japanese: '移る',
      reading: 'うつる',
      english: 'to move',
      example: {
        japanese: '来月から新しい部署に移ることになりました。',
        english: 'It has been decided that I will move to a new department next month.'
      }
    },
    {
      id: 'v3',
      japanese: '元気',
      reading: 'げんき',
      english: 'energetic',
      example: {
        japanese: '子供は元気なものです。',
        english: 'Children are naturally energetic.'
      }
    },
    {
      id: 'v4',
      japanese: '年',
      reading: 'とし',
      english: 'age',
      example: {
        japanese: '人は年を取ると忘れやすくなるものです。',
        english: 'People tend to become forgetful as they get older.'
      }
    },
    {
      id: 'v5',
      japanese: '忘れやすい',
      reading: 'わすれやすい',
      english: 'forgetful',
      example: {
        japanese: '人は年を取ると忘れやすくなるものです。',
        english: 'People tend to become forgetful as they get older.'
      }
    }
  ]
}

// Comprehensive N1 data with detailed grammar points
export const n1Data: JLPTLevel = {
  level: 'N1',
  grammar: [
    {
      id: 'ni-suginai',
      title: '～に過ぎない (Ni suginai)',
      explanation: 'Expresses that something is nothing more than what is stated, meaning "nothing more than" or "merely". Shows that the speaker considers something to be limited or insignificant. Often used to downplay importance.',
      examples: [
        {
          japanese: '彼は学生に過ぎません。',
          english: 'He is nothing more than a student.',
          romaji: 'Kare wa gakusei ni sugimasen.'
        },
        {
          japanese: 'これは一つの例に過ぎません。',
          english: 'This is merely one example.',
          romaji: 'Kore wa hitotsu no rei ni sugimasen.'
        },
        {
          japanese: '私の意見は一つの提案に過ぎません。',
          english: 'My opinion is nothing more than a suggestion.',
          romaji: 'Watashi no iken wa hitotsu no teian ni sugimasen.'
        }
      ],
      usage: 'Use with noun + に過ぎません. Indicates that something is limited or insignificant.'
    },
    {
      id: 'ni-kagiranai',
      title: '～に限らない (Ni kagiranai)',
      explanation: 'Expresses that something is not limited to what is stated, meaning "not limited to" or "not only". Shows that the statement applies to more than just the mentioned case. Often used to expand the scope.',
      examples: [
        {
          japanese: 'この問題は日本に限りません。',
          english: 'This problem is not limited to Japan.',
          romaji: 'Kono mondai wa Nihon ni kagirimasen.'
        },
        {
          japanese: '学生に限らず、社会人も参加できます。',
          english: 'Not only students, but working people can also participate.',
          romaji: 'Gakusei ni kagirazu, shakaijin mo sanka dekimasu.'
        },
        {
          japanese: 'この方法は英語に限りません。',
          english: 'This method is not limited to English.',
          romaji: 'Kono houhou wa eigo ni kagirimasen.'
        }
      ],
      usage: 'Use with noun + に限りません. Indicates that something is not limited to the mentioned case.'
    },
    {
      id: 'ni-kakawarazu',
      title: '～に関わらず (Ni kakawarazu)',
      explanation: 'Expresses that something is regardless of what is stated, meaning "regardless of" or "irrespective of". Shows that the result is the same regardless of the condition. Often used to emphasize universality.',
      examples: [
        {
          japanese: '年齢に関わらず、誰でも参加できます。',
          english: 'Regardless of age, anyone can participate.',
          romaji: 'Nenrei ni kakawarazu, dare demo sanka dekimasu.'
        },
        {
          japanese: '天気に関わらず、試合は行われます。',
          english: 'Regardless of the weather, the game will be held.',
          romaji: 'Tenki ni kakawarazu, shiai wa okonawaremasu.'
        },
        {
          japanese: '経験に関わらず、応募できます。',
          english: 'Regardless of experience, you can apply.',
          romaji: 'Keiken ni kakawarazu, oubo dekimasu.'
        }
      ],
      usage: 'Use with noun + に関わらず. Indicates that something is regardless of the mentioned condition.'
    },
    {
      id: 'ni-totte',
      title: '～にとって (Ni totte)',
      explanation: 'Expresses the perspective or standpoint, meaning "for" or "from the perspective of". Shows how something appears or affects someone from their point of view. Often used to express personal impact.',
      examples: [
        {
          japanese: 'この問題は私にとって重要です。',
          english: 'This problem is important to me.',
          romaji: 'Kono mondai wa watashi ni totte juuyou desu.'
        },
        {
          japanese: '学生にとって、勉強は大切です。',
          english: 'For students, studying is important.',
          romaji: 'Gakusei ni totte, benkyou wa taisetsu desu.'
        },
        {
          japanese: 'この経験は私にとって貴重です。',
          english: 'This experience is valuable to me.',
          romaji: 'Kono keiken wa watashi ni totte kichou desu.'
        }
      ],
      usage: 'Use with noun + にとって. Indicates the perspective or standpoint.'
    },
    {
      id: 'ni-tsuite',
      title: '～について (Ni tsuite)',
      explanation: 'Expresses the topic or subject, meaning "about" or "regarding". Shows what something is concerning or related to. Often used to introduce topics or provide information.',
      examples: [
        {
          japanese: 'この問題について話し合いましょう。',
          english: 'Let\'s discuss this problem.',
          romaji: 'Kono mondai ni tsuite hanashiaimashou.'
        },
        {
          japanese: '日本の文化について学んでいます。',
          english: 'I am learning about Japanese culture.',
          romaji: 'Nihon no bunka ni tsuite manande imasu.'
        },
        {
          japanese: 'この本について質問があります。',
          english: 'I have a question about this book.',
          romaji: 'Kono hon ni tsuite shitsumon ga arimasu.'
        }
      ],
      usage: 'Use with noun + について. Indicates the topic or subject.'
    },
    {
      id: 'ni-taishite',
      title: '～に対して (Ni taishite)',
      explanation: 'Expresses the target or object, meaning "toward" or "against". Shows the direction of an action or attitude. Often used to indicate the recipient of an action or feeling.',
      examples: [
        {
          japanese: 'この問題に対して意見を述べました。',
          english: 'I expressed my opinion about this problem.',
          romaji: 'Kono mondai ni taishite iken wo nobemashita.'
        },
        {
          japanese: '学生に対して厳しい態度を取っています。',
          english: 'He takes a strict attitude toward students.',
          romaji: 'Gakusei ni taishite kibishii taido wo totte imasu.'
        },
        {
          japanese: 'この提案に対して反対です。',
          english: 'I am against this proposal.',
          romaji: 'Kono teian ni taishite hantai desu.'
        }
      ],
      usage: 'Use with noun + に対して. Indicates the target or object of an action.'
    },
    {
      id: 'ni-yotte',
      title: '～によって (Ni yotte)',
      explanation: 'Expresses the means or cause, meaning "by" or "due to". Shows how something is done or what causes something. Often used to indicate the method or reason.',
      examples: [
        {
          japanese: 'この問題は努力によって解決できます。',
          english: 'This problem can be solved by effort.',
          romaji: 'Kono mondai wa doryoku ni yotte kaiketsu dekimasu.'
        },
        {
          japanese: '雨によって試合が中止になりました。',
          english: 'The game was cancelled due to rain.',
          romaji: 'Ame ni yotte shiai ga chuushi ni narimashita.'
        },
        {
          japanese: 'この方法によって時間を節約できます。',
          english: 'By this method, you can save time.',
          romaji: 'Kono houhou ni yotte jikan wo setsuyaku dekimasu.'
        }
      ],
      usage: 'Use with noun + によって. Indicates the means or cause.'
    },
    {
      id: 'ni-saishite',
      title: '～に際して (Ni saishite)',
      explanation: 'Expresses the occasion or timing, meaning "on the occasion of" or "when". Shows the timing or circumstances of an action. Often used in formal contexts.',
      examples: [
        {
          japanese: '卒業に際して、先生に感謝の気持ちを表しました。',
          english: 'On the occasion of graduation, I expressed my gratitude to the teacher.',
          romaji: 'Sotsugyou ni saishite, sensei ni kansha no kimochi wo arawashimashita.'
        },
        {
          japanese: '会議に際して、資料を準備しました。',
          english: 'When holding the meeting, I prepared the materials.',
          romaji: 'Kaigi ni saishite, shiryou wo junbi shimashita.'
        },
        {
          japanese: '出発に際して、注意事項を説明しました。',
          english: 'On the occasion of departure, I explained the precautions.',
          romaji: 'Shuppatsu ni saishite, chuui jikou wo setsumei shimashita.'
        }
      ],
      usage: 'Use with noun + に際して. Indicates the occasion or timing.'
    },
    {
      id: 'ni-kanshite',
      title: '～に関して (Ni kanshite)',
      explanation: 'Expresses the topic or subject, meaning "regarding" or "concerning". Shows what something is related to or about. More formal than について.',
      examples: [
        {
          japanese: 'この問題に関して調査を行いました。',
          english: 'I conducted an investigation regarding this problem.',
          romaji: 'Kono mondai ni kanshite chousa wo okonaimashita.'
        },
        {
          japanese: '日本の文化に関して研究しています。',
          english: 'I am researching regarding Japanese culture.',
          romaji: 'Nihon no bunka ni kanshite kenkyuu shite imasu.'
        },
        {
          japanese: 'この事件に関して報告書を作成しました。',
          english: 'I created a report regarding this incident.',
          romaji: 'Kono jiken ni kanshite houkokusho wo sakusei shimashita.'
        }
      ],
      usage: 'Use with noun + に関して. Indicates the topic or subject in formal contexts.'
    },
    {
      id: 'ni-tsuite-wa',
      title: '～については (Ni tsuite wa)',
      explanation: 'Expresses the topic or subject with emphasis, meaning "as for" or "regarding". Shows what something is concerning with emphasis. Often used to introduce topics or provide information.',
      examples: [
        {
          japanese: 'この問題については、詳しく説明します。',
          english: 'As for this problem, I will explain in detail.',
          romaji: 'Kono mondai ni tsuite wa, kuwashiku setsumei shimasu.'
        },
        {
          japanese: '日本の文化については、多くの本があります。',
          english: 'As for Japanese culture, there are many books.',
          romaji: 'Nihon no bunka ni tsuite wa, ooku no hon ga arimasu.'
        },
        {
          japanese: 'この本については、後で話します。',
          english: 'As for this book, I will talk about it later.',
          romaji: 'Kono hon ni tsuite wa, ato de hanashimasu.'
        }
      ],
      usage: 'Use with noun + については. Indicates the topic or subject with emphasis.'
    }
  ],
  exercises: [
    {
      id: 'ex1',
      type: 'fill-blank',
      question: '彼は学生____過ぎません。',
      answer: 'に',
      explanation: 'Use に過ぎません to express that something is nothing more than what is stated.'
    },
    {
      id: 'ex2',
      type: 'translation',
      question: 'This problem is not limited to Japan.',
      answer: 'この問題は日本に限りません。',
      explanation: 'Use に限りません to express that something is not limited to what is stated.'
    },
    {
      id: 'ex3',
      type: 'fill-blank',
      question: '年齢____関わらず、誰でも参加できます。',
      answer: 'に',
      explanation: 'Use に関わらず to express that something is regardless of what is stated.'
    },
    {
      id: 'ex4',
      type: 'translation',
      question: 'This problem is important to me.',
      answer: 'この問題は私にとって重要です。',
      explanation: 'Use にとって to express the perspective or standpoint.'
    },
    {
      id: 'ex5',
      type: 'fill-blank',
      question: 'この問題____ついて話し合いましょう。',
      answer: 'に',
      explanation: 'Use について to express the topic or subject.'
    }
  ],
  vocabulary: [
    {
      id: 'v1',
      japanese: '例',
      reading: 'れい',
      english: 'example',
      example: {
        japanese: 'これは一つの例に過ぎません。',
        english: 'This is merely one example.'
      }
    },
    {
      id: 'v2',
      japanese: '提案',
      reading: 'ていあん',
      english: 'proposal',
      example: {
        japanese: '私の意見は一つの提案に過ぎません。',
        english: 'My opinion is nothing more than a suggestion.'
      }
    },
    {
      id: 'v3',
      japanese: '社会人',
      reading: 'しゃかいじん',
      english: 'working person',
      example: {
        japanese: '学生に限らず、社会人も参加できます。',
        english: 'Not only students, but working people can also participate.'
      }
    },
    {
      id: 'v4',
      japanese: '参加',
      reading: 'さんか',
      english: 'participation',
      example: {
        japanese: '年齢に関わらず、誰でも参加できます。',
        english: 'Regardless of age, anyone can participate.'
      }
    },
    {
      id: 'v5',
      japanese: '重要',
      reading: 'じゅうよう',
      english: 'important',
      example: {
        japanese: 'この問題は私にとって重要です。',
        english: 'This problem is important to me.'
      }
    }
  ]
}

export const jlptData = {
  N5: n5Data,
  N4: n4Data,
  N3: n3Data,
  N2: n2Data,
  N1: n1Data
}
