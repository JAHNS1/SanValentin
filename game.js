const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Cristina, mi amor, I love you',
    options: [
      {
        text: 'Open letter',
        setState: { blueGoo: true },
        nextText: 2
      },

    ]
  },
  {
    id: 2,
    text: 'So as you know, today is Valentines Day.',
    options: [
      {
        text: 'Yes I knew',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, sword: true },
        nextText: 3
      },
      {
        text: 'No I didnt know hehe',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, shield: true },
        nextText: 4
      },
    
    ]
  },
  {
    id: 3,
    text: 'Oh, but I see YOU didnt build me a website',
    options: [
      {
        text: 'Yes I did',
        nextText: 5
      },
      {
        text: 'No I didnt',
        nextText: 4
      },
    ]
  },
  {
    id: 4,
    text: 'Thats okay my love. You show me your love in lots of ways, and I am so grateful for that',
    options: [
      {
        text: 'I love you',
        nextText: 6
      }
    ]
  },
  {
    id: 5,
    text: 'Wow! We are soooo similar. Can you send it to me?',
    options: [
      {
        text: 'Ehhhh...maybe later',
        nextText: 4
      },
      {
        text: 'No I cant :(',
        nextText: 4
      }
    ]
  },
  {
    id: 6,
    text: 'Hehe. Anyway, I originally wanted to write you a love letter, and post it to your house, but SOMEONE took too long to send it to me.',
    options: [
      {
        text: 'Sorry mi amorrr',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'So instead, I decided to build a mini interactive website to show you I love you. As I am coding this message now, it is currently 3:37AM, my brain and heart are overflowing with thoughts and feelings for you, and you are sleeping beautifully.',
    options: [
      {
        text: 'HONKKKK MIMIMIMI',
        nextText: 8
      }
    ]
  },
  {
    id: 8,
    text: 'The main reason I made this though, is to ask you a simple question.',
    options: [
      {
        text: 'Tell me',
        nextText: 10
      }
    ]
  },
  {
    id: 10,
    text: 'Ayayayayay Im so nervous aaaaa',
    options: [
      {
        text: 'Come onnnn',
        nextText: 11
      }
    ]
  },
  {
    id: 11,
    text: 'Will you be my Valentine?',
    options: [
      {
        text: 'AHH YES I WILL',
        nextText: 12
      },
      {
        text: 'No I wont hehe',
        nextText: 14

      }
    ]
  },
  {
    id: 12,
    text: 'AHHHHH I CANT BELIEVE IT ',
    options: [
      {
        text: 'AHHHHH',
        nextText: 13

      }
    ]
  },
  {
    id: 14,
    text: 'Pleaseeeee',
    options: [
      {
        text: 'Okayyyy I will',
        nextText: 12
      },
      {
        text: 'No way',
        nextText: 15

      }
    ]
  },
  {
    id: 15,
    text: 'Come onnn please?',
    options: [
      {
        text: 'Fineeee',
        nextText: 12
      },
      {
        text: 'No sir I wont',
        nextText: 16

      }
    ]
  },
  {
    id: 16,
    text: 'please youre breaking my heart :(',
    options: [
      {
        text: 'Of course I will baby',
        nextText: 12
      }
    ]
  },
  {
    id: 13,
    text: 'One last question though... ',
    options: [
      {
        text: 'Tell me',
        nextText: 17
      }
    ]
  },
  {
    id: 17,
    text: 'Would you like to go on a date with me tonight at 9.30pm? We can watch a movie and eat nice food and perhaps smoke a little and it will be so nice.',
    options: [
      {
        text: 'Yes I will !!!',
        nextText: 18
      }
    ]
  },
  {
    id: 18,
    text: 'Okay, now its time for a love letter. I love you to death, and I know I dont do enough to show you. I hope this letter explains how I feel well.',
    options: [
      {
        text: '',
        nextText: 19
      }
    ]
  },
  {
    id: 19,
    text: 'Cris, I love you with all I am. I wake up every single morning with thoughts of you filling my head, and go to sleep with feelings for you threatening to burst my heart. You complete me entirely, and I dont know how I ever lived in a world where you werent as intertwined with my very soul as you are. At the end of this, I am going to attach a poem that I admittedly read probably once a day. It warms me, and strengthens the never ending thoughts and feelings of you, thoughts and feelings that have become as much a part of me as my hands, my legs, my hair. Cristina, meeting you was the beginning of my life. You make my food taste better, tough situations easy, and more. My love, the world is more beautiful with you in it. MY world is more beautiful for having you in it. If having you in my life means making a thousand silly websites every day, I will do it. If it means having to kiss through salty lips as we say goodbye yet again, I will do it. No matter what. You are my be all and end all. I love you so much my dear. Happy Valentines Day beautiful. ',
    options: [
      {
        text: '',
        nextText: 20
      }
    ]
  },
  {
    id: 20,
    text: 'Ive been told/that people in the army/do more by 7:00 am/than I do/in an entire day/but if I wake/at 6:59 am/and turn to you/to trace the outline of your lips/with mine/I will have done enough/and killed no one/in the process. ',
    options: [
      {
        text: '',
        nextText: 21
      }
    ]
  },
  {
    id: 21,
    text: 'I love you so much. I CANT WAIT FOR OUR DATE!',
    options: [
      {
        text: 'Close letter',
        nextText: -1
      }
    ]
  },

]

startGame()