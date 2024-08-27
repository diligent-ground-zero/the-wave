import '../../styles/aboutUs.css'

let isDesktopInitialized = false
let isMobileInitialized = false

const elements = [
  {
    title: 'WHO THE VIBE?',
    paragraphText: `Anika is a producer and new biz manager. With four years of experience in the music industry, she's been not only writing her own songs but also overseeing projects and generating artistic concepts. Her multifaceted skills make her a driving force in both creative and managerial roles at VIBE.`,
    leftBorder: '#11B1FF',
    leftImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/64f0cf64d065ec0e03a05fcf_64b0f78718f9c21036a0549d_DSCF2880.jpeg',
    rightBorder: '#FF0082',
    rightImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/64f0cec2663f1a2774a16651_Copyright_by_David_Dollmann_IMG_3294%20copy%20(1)%20Mittel.jpeg',
  },
  {
    title: 'WHY THE VIBE?',
    paragraphText: `WE THINK OUR WORK IS ALL ABOUT THE VIBE, ABOUT THAT DIRECT AND INNER INSTINCT, ABOUT THAT FEELING OF CONNECTION.
THE VIBE LEADS US, IN RELATIONS AND IN BUSINESS. AND THAT'S WHAT'S IMPORTANT.
WE WORK WITH MORE THAN 50 INTERNATIONALLY RENOWNED COMPOSERS, AUDIO ENGINEERS & SUPERVISORS.
OUR VIBES FOR YOU: MUSIC CONCEPTION & SUPERVISION, MUSIC COMPOSITION, SOUND DESIGN, VOICE-OVER, MIXING (ALL FORMATS AVAILABLE).`,
    leftBorder: '#11B1FF',
    leftImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/64f0cf64d065ec0e03a05fcf_64b0f78718f9c21036a0549d_DSCF2880.jpeg',
    rightBorder: '#FF0082',
    rightImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/64f0cec2663f1a2774a16651_Copyright_by_David_Dollmann_IMG_3294%20copy%20(1)%20Mittel.jpeg',
  },
  {
    title: 'WHAT THE VIBE?',
    paragraphText: `WE LOVE A CHALLENGE, WHETHER IT BE SEEKING OUT A ONE-HIT WONDER FROM 1994, REPLACING AN UNAVAILABLE TRACK THAT EVERYONE HAS "MOOD LOVE" FOR, OR TURNING A TIGHT BUDGET INTO A MEMORABLE JINGLE.
WE DO IT ALL, WE TAKE PRIDE IN OUR WORK WHILE ALWAYS RESPECTING THE PROCESS.`,
    leftBorder: '#0F008C',
    leftImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/64f0cec1909714f98f17bd94_DSCF2904%20Mittel.jpeg',
    rightBorder: '#FF0082',
    rightImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/64f0cec1805aa7cf97c27df4_DSCF2919%20Mittel.jpeg',
  },
  {
    title: 'WHERE THE VIBE?',
    paragraphText: `OUR CREATIVE SPACE AND STUDIO ARE RIGHT IN THE HEART OF HAMBURG, HOFWEG 9.
BUT: VIBE IS MANDATORY, LOCATION IS SECONDARY. WE'RE HAPPY TO HAVE ACCESS TO MULTIPLE CREATIVE SPACES IN HAMBURG, BERLIN AND MUNICH.
OUR CREATIVES ARE BASED IN GERMANY, ITALY, PORTUGAL, UK, BRAZIL, THE NORDICS AND THE U.S, WHICH GIVES US AN ADVANTAGE WHEN WORKING WITH TIGHT DEADLINES (6-9 HOURS TIME DIFFERENCE IS EAAASY).
OR AS KID CUDI ONCE SAID: DAY'N'NITE.`,
    leftBorder: '#FF0082',
    leftImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/64f07b5bfe4b3cbdb047d87e_ezgif.com-gif-maker.gif',
    rightBorder: '#FFF500',
    rightImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/64f0cf64d065ec0e03a05fcf_64b0f78718f9c21036a0549d_DSCF2880.jpeg',
  },
]

export const setupAboutUs = () => {
  const isMobile = window.innerWidth < 990

  if (isMobile) {
    initAboutUsMobile()
  } else {
    initAboutUsDesktop()
  }

  window.addEventListener('resize', () => {
    const isMobile = window.innerWidth < 990

    if (isMobile) {
      if (!isMobileInitialized) {
        initAboutUsMobile()
      }
    } else {
      if (!isDesktopInitialized) {
        initAboutUsDesktop()
      }
    }
  })
}

export const initAboutUsDesktop = () => {
  isDesktopInitialized = true

  const DOM = {
    leftImageBorder: document.getElementById('left_image_border'),
    rightImageBorder: document.getElementById('right_image_border'),
    leftImage: document.getElementById('left_image'),
    rightImage: document.getElementById('right_image'),
    selectorContainer: document.getElementById('selector_container'),
    textContainer: document.getElementById('paragraph_text'),
    upArrowButtons: Array.from(document.getElementsByClassName('up_arrow')),
    downArrowButtons: Array.from(document.getElementsByClassName('down_arrow')),
  }

  let currentIndex = 0

  function createArrow(direction) {
    const arrow = document.createElement('img')
    arrow.src =
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/66c7286ea8dc074851181ba1_Union.svg'
    arrow.classList.add(`${direction}-arrow`)
    return arrow
  }

  function addArrows(element) {
    element.prepend(createArrow('left'))
    element.appendChild(createArrow('right'))
  }

  function removeArrows(element) {
    element.querySelector('.left-arrow')?.remove()
    element.querySelector('.right-arrow')?.remove()
  }

  function updateSelectedTitle(index) {
    const titleElements = Array.from(
      DOM.selectorContainer.getElementsByClassName('selector_text_wrapper')
    )
    titleElements[currentIndex].classList.remove('selected_text_wrapper')
    removeArrows(titleElements[currentIndex])
    titleElements[index].classList.add('selected_text_wrapper')
    addArrows(titleElements[index])
    currentIndex = index
  }

  function updateContent(index) {
    const { leftBorder, rightBorder, paragraphText, leftImage, rightImage } =
      elements[index]

    DOM.leftImageBorder.style.color = leftBorder
    DOM.rightImageBorder.style.color = rightBorder
    DOM.textContainer.innerText = paragraphText

    DOM.leftImage.src = leftImage
    DOM.rightImage.src = rightImage

    DOM.leftImage.classList.remove('fade-out')
    DOM.leftImage.classList.add('fade-in')
    DOM.rightImage.classList.remove('fade-out')
    DOM.rightImage.classList.add('fade-in')
    DOM.textContainer.classList.remove('fade-out')
    DOM.textContainer.classList.add('fade-in')
  }

  function transitionContent(index) {
    DOM.textContainer.classList.add('fade-out')
    DOM.leftImage.classList.add('fade-out')
    DOM.rightImage.classList.add('fade-out')

    setTimeout(() => {
      updateContent(index)
    }, 500)

    DOM.textContainer.classList.remove('fade-in')
    DOM.leftImage.classList.remove('fade-in')
    DOM.rightImage.classList.remove('fade-in')
  }

  function changeElement(direction) {
    const newIndex =
      (currentIndex + direction + elements.length) % elements.length
    updateSelectedTitle(newIndex)
    transitionContent(newIndex)
  }

  function initSetup() {
    if (DOM.selectorContainer) {
      elements.forEach((element, index) => {
        const titleElement = document.createElement('div')
        titleElement.innerText = element.title
        titleElement.classList.add('selector_text_wrapper')
        if (index === currentIndex) {
          titleElement.classList.add('selected_text_wrapper')
          addArrows(titleElement)
        }
        titleElement.addEventListener('click', () => {
          updateSelectedTitle(index)
          transitionContent(index)
        })
        DOM.selectorContainer.appendChild(titleElement)
      })
    }

    updateContent(0)
    ;[DOM.textContainer, DOM.leftImage, DOM.rightImage].forEach((el) =>
      el.classList.add('content', 'fade-in')
    )
  }

  initSetup()

  DOM.upArrowButtons.forEach((button) =>
    button.addEventListener('click', () => changeElement(-1))
  )
  DOM.downArrowButtons.forEach((button) =>
    button.addEventListener('click', () => changeElement(1))
  )
}

export const initAboutUsMobile = () => {
  isMobileInitialized = true

  const leftArrow = document.getElementById('mobile_left_arrow')
  const rightArrow = document.getElementById('mobile_right_arrow')
  const title = document.getElementById('mobile_selector_text')
  const image = document.getElementById('mobile_image')
  const paragraphText = document.getElementById('mobile_paragraph')

  function initMobileSetup() {
    if (title && image && paragraphText) {
      title.innerText = elements[0].title
      paragraphText.innerText = elements[0].paragraphText
      image.src = elements[0].leftImage

      title.classList.add('content', 'fade-in')
      paragraphText.classList.add('content', 'fade-in')
      image.classList.add('content', 'fade-in')
    }
  }

  function setMobileContent(index) {
    if (title && image && paragraphText) {
      title.classList.add('fade-out')
      paragraphText.classList.add('fade-out')
      image.classList.add('fade-out')

      setTimeout(() => {
        title.innerText = elements[index].title
        paragraphText.innerText = elements[index].paragraphText
        image.src = elements[index].leftImage

        title.classList.remove('fade-out')
        paragraphText.classList.remove('fade-out')
        image.classList.remove('fade-out')

        title.classList.add('fade-in')
        paragraphText.classList.add('fade-in')
        image.classList.add('fade-in')
      }, 500)

      title.classList.remove('fade-in')
      paragraphText.classList.remove('fade-in')
      image.classList.remove('fade-in')
    }
  }

  let index = 0

  function nextElement() {
    index = (index + 1) % elements.length
    setMobileContent(index)
  }

  function prevElement() {
    index = (index - 1 + elements.length) % elements.length
    setMobileContent(index)
  }

  initMobileSetup()

  leftArrow.addEventListener('click', prevElement)
  rightArrow.addEventListener('click', nextElement)
}
