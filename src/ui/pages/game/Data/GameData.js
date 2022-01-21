export default {
  game1: {
    gameTemplateData: {
      gameBgImage: process.env.PUBLIC_URL + '/static/images/game/gymnasticsBg.svg',
      gameType: '体操チャレンジ',
      gameIcon: process.env.PUBLIC_URL + '/static/images/game/gymnasticsIcon.svg',
      content: {
        content1: '体験できるゲーム：',
        content2: 'スクワットチャレンジ、ポーズ、ボールキャッチ'
      }
    },
    coinData: [
      {
        icon1: process.env.PUBLIC_URL + '/static/images/exercise/icon1.svg',
        icon2: process.env.PUBLIC_URL + '/static/images/exercise/icon2.svg',
        timestamp: 1618984947,
        description: 'スクワット：15回',
        value: '75',
        points:0,
        contentID:"exercise",
        coins:0,
        content:{fitnessItem:"ball_strike",challengeResult:"success"}
      }
    ]
  },
  game2: {
    gameTemplateData: {
      gameBgImage: process.env.PUBLIC_URL + '/static/images/game/skinBg.svg',
      gameType: '肌診断',
      gameIcon: process.env.PUBLIC_URL + '/static/images/game/skinIcon.svg',
      content: {
        content1: 'あなたの肌年齢を診断するよ！',
        content2: 'ニキビ、肌色、肌質、毛穴。'
      }
    },
    // coinData: [
    //   {
    //     icon1: process.env.PUBLIC_URL + '/static/images/exercise/icon1.svg',
    //     icon2: process.env.PUBLIC_URL + '/static/images/exercise/icon2.svg',
    //     timestamp: 1618984947,
    //     // description: '肌診断を3回体験',
    //     points:20,
    //     mirrorID:"99999999",
    //     contentID:"skin",
    //     coins:20,
    //     content:{gender:"Male",age:34,smile:96.493,facequality:94.049,health:9.419,stain:1.401,darkCircle:6.065,acne:1.009}
    //   }
    // ]
  },
  game3: {
    gameTemplateData: {
      gameBgImage: process.env.PUBLIC_URL + '/static/images/game/faceBg.svg',
      gameType: '顔占い',
      gameIcon: process.env.PUBLIC_URL + '/static/images/game/faceIcon.svg',
      content: {
        content1: 'あなたの唇、眉毛、鼻、目、顔の形で',
        content2: '占いするよ！'
      }
    },
    // coinData: [
    //   {
    //     icon1: process.env.PUBLIC_URL + '/static/images/exercise/icon1.svg',
    //     icon2: process.env.PUBLIC_URL + '/static/images/exercise/icon2.svg',
    //     points: 20,
    //     timestamp: 1618984947,
    //     mirrorID: "99999999",
    //     contentID: "face",
    //     coins: 20,
    //     content: [
    //       {
    //         region: "face",
    //         type: "由字形",
    //         max_prob: "24.74125687790167%",
    //         analysis: "物質主義が多く、食べることと異性への興味が強い方です。お喋り好き、博打好きではあるが、どんなことに対しても自発的で、細かいことにはあまり気にしません。"
    //       },
    //       {
    //         region: "eyebrows",
    //         type: "剣眉",
    //         max_prob: "23.57497748565031%",
    //         analysis: "勇気も知恵もあって粘り強い。満足しやすくて外見のみきちんとする性格のため，収穫が基準に達さなくても心配しない。人並みの運を持っています。"
    //       },
    //       {
    //         region: "eyes",
    //         type: "つり目",
    //         max_prob: "27.548261928228186%",
    //         analysis: "この目を持つ人は、生まれながら勧善懲悪的な性格を持ち、常に正義の味方なのです。悪を見て見ぬフリができない、愛と憎しみの区別をはっきりしていて、他人から恩を受ければ必ず恩返しをし、信用できる人です。"
    //       },
    //       {
    //         region: "nose",
    //         type: "ギリシャ鼻",
    //         max_prob: "35.46429280504027%",
    //         analysis: "鼻が真っ直ぐで、鼻先がきちんと直立していてちょっとしたズレさえありません、鼻の付け根が長く、年も寿命も豊富な象徴です。この鼻の持ち主は中年になってから裕福になって成功するタイプです。"
    //       },
    //       {
    //         region: "mouth",
    //         type: "たらこ唇",
    //         max_prob: "35.46089733519076%",
    //         analysis: "情熱的で優しくて感覚刺激の方を重視します。仕事に関しては苦労をいとわず,恨み言を言われても気にかけません。ずる賢いことはしません。"
    //       }
    //     ]
    //   }
    // ]
  },
  game4: {
    gameTemplateData: {
      gameBgImage: process.env.PUBLIC_URL + '/static/images/game/quizBg.svg',
      gameType: 'クイズ王',
      gameIcon: process.env.PUBLIC_URL + '/static/images/game/quizIcon.svg',
      content: {
        content1: '全問正解できるかな？'
      }
    },
    // coinData: [
    //   {
    //     icon1: process.env.PUBLIC_URL + '/static/images/exercise/icon1.svg',
    //     icon2: process.env.PUBLIC_URL + '/static/images/exercise/icon2.svg',
    //     timestamp: 1618984947,
    //     description: '3問正解',
    //     points: 20,
    //     contentID: 'compatibility',
    //     coins: 20,
    //     value: '75',
    //     content: [
    //       {
    //         region: "face",
    //         type: "由字形",
    //         max_prob: "24.74125687790167%",
    //         analysis: "物質主義が多く、食べることと異性への興味が強い方です。お喋り好き、博打好きではあるが、どんなことに対しても自発的で、細かいことにはあまり気にしません。"
    //       },
    //       {
    //         region: "eyebrows",
    //         type: "剣眉",
    //         max_prob: "23.57497748565031%",
    //         analysis: "勇気も知恵もあって粘り強い。満足しやすくて外見のみきちんとする性格のため，収穫が基準に達さなくても心配しない。人並みの運を持っています。"
    //       },
    //       {
    //         region: "eyes",
    //         type: "つり目",
    //         max_prob: "27.548261928228186%",
    //         analysis: "この目を持つ人は、生まれながら勧善懲悪的な性格を持ち、常に正義の味方なのです。悪を見て見ぬフリができない、愛と憎しみの区別をはっきりしていて、他人から恩を受ければ必ず恩返しをし、信用できる人です。"
    //       }
    //     ]
    //   }
    // ]
  },
  game5: {
    gameTemplateData: {
      gameBgImage: process.env.PUBLIC_URL + '/static/images/game/sukoyakaBg.svg',
      gameType: 'SUKOYAKA',
      gameIcon: process.env.PUBLIC_URL + '/static/images/game/sukoyakaIcon.svg',
      content: {
        content1: 'SUKOYAKA知育教材ゲーム'
      }
    },
    sukoyakaData:[
      {
        cardIcon: process.env.PUBLIC_URL + '/static/images/sukoyaka/sukoyaka1.svg',
      },
      {
        cardIcon: process.env.PUBLIC_URL + '/static/images/sukoyaka/sukoyaka2.svg',
      },
      {
        cardIcon: process.env.PUBLIC_URL + '/static/images/sukoyaka/sukoyaka3.svg',
      },
      {
        cardIcon: process.env.PUBLIC_URL + '/static/images/sukoyaka/sukoyaka4.svg',
      }
  ]
  }
};
