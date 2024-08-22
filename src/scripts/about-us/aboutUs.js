import '../../styles/aboutUs.css'

document.addEventListener('DOMContentLoaded', () => {
  initAboutUs()
})

const selectorContainer = document.getElementById('selector_container')
const textContainer = document.getElementById('paragraph_text')
const upArrowButton = Array.from(document.getElementsByClassName('up_arrow'))
const downArrowButton = Array.from(
  document.getElementsByClassName('down_arrow')
)

const leftArrow = document.createElement('img')
leftArrow.src =
  'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/66c7286ea8dc074851181ba1_Union.svg'
leftArrow.classList.add('left-arrow')

const rightArrow = document.createElement('img')
rightArrow.src =
  'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/66c7286ea8dc074851181ba1_Union.svg'
rightArrow.classList.add('right-arrow')

const elements = [
  {
    title: 'WHY THE VIBE?',
    paragraphText:
      'WE THINK OUR WORK IS ALL ABOUT THE VIBE, ABOUT THAT DIRECT AND INNER INSTINCT, ABOUT THAT FEELING OF CONNECTION. THE VIBE LEADS US, IN RELATIONS AND IN BUSINESS. AND THAT‘S WHAT’S IMPORTANT.\n' +
      'YOU CHOOSE US AND WE CHOOSE YOU: IF WE WORK TOGETHER, VIBE IS MUSIC, SOUND AND VOICE-OVERS. IT IS FOR TV-COMMERCIALS and MOTION PICTURES. IT IS FOR YOU. TO CREATE THE BEST VIBES POSSIBLE, WE WORK WITH MORE THAN 50 INTERNATIONALLY RENOWNED COMPOSERS, AUDIO ENGINEERS & SUPERVISORS. OUR VIBES FOR YOU: MUSIC CONCEPTION & SUPERVISION, MUSIC COMPOSITION, SOUND DESIGN, VOICE-OVER (CASTING, RECORDING), MIXING (ALL FORMATS AVAILABLE).',
  },
  {
    title: 'WHO THE VIBE?',
    paragraphText:
      'TEXT NUMBER 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
  {
    title: 'WHAT THE VIBE?',
    paragraphText:
      'TEXT NUMBER 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
  {
    title: 'WHERE THE VIBE?',
    paragraphText:
      'TEXT NUMBER 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
]

export const initAboutUs = () => {
  function addArrows(element) {
    element.prepend(leftArrow)
    element.appendChild(rightArrow)
  }

  function removeArrows(element) {
    const leftArrow = element.querySelector('.left-arrow')
    const rightArrow = element.querySelector('.right-arrow')

    if (leftArrow) leftArrow.remove()
    if (rightArrow) rightArrow.remove()
  }

  function initSetup() {
    // set up all titles in selector container
    if (selectorContainer) {
      elements.forEach((element, index) => {
        const titleElement = document.createElement('div')
        titleElement.innerText = element.title
        titleElement.classList.add('selector_text_wrapper')

        if (index === currentSelectedIndex) {
          titleElement.classList.add('selected_text_wrapper')
          addArrows(titleElement)
        }

        titleElement.addEventListener('click', () => {
          setSelectedTitle(index)
          setContent(index)
        })

        selectorContainer.appendChild(titleElement)
      })
    }

    // set up initial elements
    if (textContainer) {
      textContainer.innerText = elements[0].paragraphText
      textContainer.classList.add('content')
    }
  }

  function setSelectedTitle(index) {
    const titleElements = Array.from(
      selectorContainer.getElementsByClassName('selector_text_wrapper')
    )

    titleElements[currentSelectedIndex].classList.remove(
      'selected_text_wrapper'
    )
    removeArrows(titleElements[currentSelectedIndex])

    titleElements[index].classList.add('selected_text_wrapper')
    addArrows(titleElements[index])

    currentSelectedIndex = index
  }

  function setContent(index) {
    if (textContainer) {
      textContainer.classList.add('fade-out')

      setTimeout(() => {
        textContainer.innerText = elements[index].paragraphText

        textContainer.classList.remove('fade-out')
        textContainer.classList.add('fade-in')
      }, 500)

      textContainer.classList.remove('fade-in')
    }
  }

  function nextElement() {
    if (index === 3) index = 0
    else index++

    setSelectedTitle(index)
    setContent(index)
  }

  function prevElement() {
    if (index === 0) index = 3
    else index--

    setSelectedTitle(index)
    setContent(index)
  }

  // currently selected title
  let currentSelectedIndex = 0
  let index = 0

  // initial setup
  initSetup()

  upArrowButton.forEach((element) => {
    element.addEventListener('click', prevElement)
  })
  downArrowButton.forEach((element) => {
    element.addEventListener('click', nextElement)
  })
}
