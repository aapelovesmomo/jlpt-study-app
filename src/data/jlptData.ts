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
      id: 'ex20',
      type: 'fill-blank',
      question: '日本に行っ____ことがあります。',
      answer: 'た',
      explanation: 'Use たことがある to talk about past experiences.'
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
      id: 'v25',
      japanese: '山',
      reading: 'やま',
      english: 'mountain',
      example: {
        japanese: '山に登ります。',
        english: 'I climb the mountain.'
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
