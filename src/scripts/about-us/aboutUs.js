import '../../styles/aboutUs.css'

let isDesktopInitialized = false
let isMobileInitialized = false

document.addEventListener('DOMContentLoaded', () => {
  const isMobile = window.matchMedia('(max-width: 990px)').matches

  if (isMobile) {
    initAboutUsMobile()
  } else {
    initAboutUsDesktop()
  }

  window.addEventListener('resize', () => {
    const isMobile = window.matchMedia('(max-width: 990px)').matches

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
})

const elements = [
  {
    title: 'WHY THE VIBE?',
    paragraphText:
      'WE THINK OUR WORK IS ALL ABOUT THE VIBE, ABOUT THAT DIRECT AND INNER INSTINCT, ABOUT THAT FEELING OF CONNECTION. THE VIBE LEADS US, IN RELATIONS AND IN BUSINESS. AND THAT‘S WHAT’S IMPORTANT.\n' +
      'YOU CHOOSE US AND WE CHOOSE YOU: IF WE WORK TOGETHER, VIBE IS MUSIC, SOUND AND VOICE-OVERS. IT IS FOR TV-COMMERCIALS and MOTION PICTURES. IT IS FOR YOU. TO CREATE THE BEST VIBES POSSIBLE, WE WORK WITH MORE THAN 50 INTERNATIONALLY RENOWNED COMPOSERS, AUDIO ENGINEERS & SUPERVISORS. OUR VIBES FOR YOU: MUSIC CONCEPTION & SUPERVISION, MUSIC COMPOSITION, SOUND DESIGN, VOICE-OVER (CASTING, RECORDING), MIXING (ALL FORMATS AVAILABLE).',
    leftBorder: '#11B1FF',
    leftImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/64f0cf64d065ec0e03a05fcf_64b0f78718f9c21036a0549d_DSCF2880.jpeg',
    rightBorder: '#FF0082',
    rightImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/64f0cec2663f1a2774a16651_Copyright_by_David_Dollmann_IMG_3294%20copy%20(1)%20Mittel.jpeg',
  },
  {
    title: 'WHO THE VIBE?',
    paragraphText:
      'TEXT NUMBER 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
    leftBorder: '#FFF500',
    leftImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/64f0cec2755db5cc25df2798_DSCF2934%20Mittel.jpeg',
    rightBorder: '#0F008C',
    rightImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/64f0cec23ff991f4d3d0a394__C7A3263%20Mittel.jpeg',
  },
  {
    title: 'WHAT THE VIBE?',
    paragraphText:
      'TEXT NUMBER 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
    leftBorder: '#0F008C',
    leftImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/64f0cec1909714f98f17bd94_DSCF2904%20Mittel.jpeg',
    rightBorder: '#FF0082',
    rightImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/64f0cec1805aa7cf97c27df4_DSCF2919%20Mittel.jpeg',
  },
  {
    title: 'WHERE THE VIBE?',
    paragraphText:
      'TEXT NUMBER 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
    leftBorder: '#FF0082',
    leftImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/64f07b5bfe4b3cbdb047d87e_ezgif.com-gif-maker.gif',
    rightBorder: '#FFF500',
    rightImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/64f0cf64d065ec0e03a05fcf_64b0f78718f9c21036a0549d_DSCF2880.jpeg',
  },
]

export const initAboutUsDesktop = () => {
  isDesktopInitialized = true

  const leftImageBorder = document.getElementById('left_image_border')
  const rightImageBorder = document.getElementById('right_image_border')
  const leftImage = document.getElementById('left_image')
  const rightImage = document.getElementById('right_image')
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
    if (
      textContainer &&
      leftImageBorder &&
      rightImageBorder &&
      leftImage &&
      rightImage
    ) {
      textContainer.innerText = elements[0].paragraphText
      textContainer.classList.add('content')

      leftImageBorder.style.color = elements[0].leftBorder
      rightImageBorder.style.color = elements[0].rightBorder

      leftImage.src = elements[0].leftImage
      rightImage.src = elements[0].rightImage

      leftImage.classList.add('content')
      rightImage.classList.add('content')
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
    if (
      textContainer &&
      leftImageBorder &&
      rightImageBorder &&
      leftImage &&
      rightImage
    ) {
      leftImageBorder.style.color = elements[index].leftBorder
      rightImageBorder.style.color = elements[index].rightBorder

      textContainer.classList.add('fade-out')
      leftImage.classList.add('fade-out')
      rightImage.classList.add('fade-out')

      setTimeout(() => {
        textContainer.innerText = elements[index].paragraphText
        leftImage.src = elements[index].leftImage
        rightImage.src = elements[index].rightImage

        textContainer.classList.remove('fade-out')
        leftImage.classList.remove('fade-out')
        rightImage.classList.remove('fade-out')

        textContainer.classList.add('fade-in')
        leftImage.classList.add('fade-in')
        rightImage.classList.add('fade-in')
      }, 500)

      textContainer.classList.remove('fade-in')
      leftImage.classList.remove('fade-in')
      rightImage.classList.remove('fade-in')
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

      title.classList.add('content')
      paragraphText.classList.add('content')
      image.classList.add('content')
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
    if (index === 3) index = 0
    else index++

    setMobileContent(index)
  }

  function prevElement() {
    if (index === 0) index = 3
    else index--

    setMobileContent(index)
  }

  initMobileSetup()

  leftArrow.addEventListener('click', prevElement)
  rightArrow.addEventListener('click', nextElement)
}
