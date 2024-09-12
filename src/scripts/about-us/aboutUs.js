import '../../styles/aboutUs.css'

let isDesktopInitialized = false
let isMobileInitialized = false
import gsap from 'gsap'
const elements = [
  {
    title: 'WHO THE VIBE?',
    lukasText:
      'As the founder of VIBE, Lukas made it his mission to revolutionize the world of sound. His vision is to make music and sound as simple and accessible as possible—especially in a time where technology offers us nearly limitless possibilities. With VIBE, he aims to redefine the role of music and sound and enhance their value for brands. He firmly believes that great sound sells better and leaves a lasting impression.',
    anikaText:
      'Anika is a producer and new biz manager. With four years of experience in the music industry, she’s been not only writing her own songs but also overseeing projects and generating artistic concepts. Her multifaceted skills make her a driving force in both creative and managerial roles at VIBE.',
    leftBorder: '#11B1FF',
    leftImage:
      'https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/651d325ebb1199b5bd92a1a0_Copyright_by_David_Dollmann_IMG_3294%20copy%20(1).jpg',
    rightBorder: '#FF0082',
    rightImage:
      'https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/66cf83d04a52e336daf84c6d_2024_vibe_Presse_Julia_Tiemann-8.jpg',
    paragraphText:
      'As the founder of VIBE, Lukas made it his mission to revolutionize the world of sound. His vision is to make music and sound as simple and accessible as possible—especially in a time where technology offers us nearly limitless possibilities. With VIBE, he aims to redefine the role of music and sound and enhance their value for brands. He firmly believes that great sound sells better and leaves a lasting impression. \n \n Anika is a producer and new biz manager. With four years of experience in the music industry, she’s been not only writing her own songs but also overseeing projects and generating artistic concepts. Her multifaceted skills make her a driving force in both creative and managerial roles at VIBE.',
  },
  {
    title: 'WHY THE VIBE?',
    paragraphText: `WE THINK OUR WORK IS ALL ABOUT THE VIBE, ABOUT THAT DIRECT AND INNER INSTINCT, ABOUT THAT FEELING OF CONNECTION.
THE VIBE LEADS US, IN RELATIONS AND IN BUSINESS. AND THAT'S WHAT'S IMPORTANT.
WE WORK WITH MORE THAN 50 INTERNATIONALLY RENOWNED COMPOSERS, AUDIO ENGINEERS & SUPERVISORS.
OUR VIBES FOR YOU: MUSIC CONCEPTION & SUPERVISION, MUSIC COMPOSITION, SOUND DESIGN, VOICE-OVER, MIXING (ALL FORMATS AVAILABLE).`,
    leftBorder: '#FF0082',
    leftImage:
      'https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/66d6be3e3964c1900f6a331d_2.webp',
    rightBorder: '#11B1FF',
    rightImage:
      'https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/66d6c2293c92b4f730d7a4eb_2024_vibe_Presse_Julia_Tiemann-10.webp',
  },
  {
    title: 'WHAT THE VIBE?',
    paragraphText: `WE LOVE A CHALLENGE, WHETHER IT BE SEEKING OUT A ONE-HIT WONDER FROM 1994, REPLACING AN UNAVAILABLE TRACK THAT EVERYONE HAS "MOOD LOVE" FOR, OR TURNING A TIGHT BUDGET INTO A MEMORABLE JINGLE.
WE DO IT ALL, WE TAKE PRIDE IN OUR WORK WHILE ALWAYS RESPECTING THE PROCESS.`,
    leftBorder: '#FFF500',
    leftImage:
      'https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/66d6c229cc0cb2a3b8471c79_2024_vibe_Presse_Julia_Tiemann-1.webp',
    rightBorder: '#FF0082',
    rightImage:
      'https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/66d6be3e728f16660577db58_4.webp',
  },
  {
    title: 'WHERE THE VIBE?',
    paragraphText: `OUR CREATIVE SPACE AND STUDIO ARE RIGHT IN THE HEART OF HAMBURG, HOFWEG 9.
BUT: VIBE IS MANDATORY, LOCATION IS SECONDARY. WE'RE HAPPY TO HAVE ACCESS TO MULTIPLE CREATIVE SPACES IN HAMBURG, BERLIN AND MUNICH.
OUR CREATIVES ARE BASED IN GERMANY, ITALY, PORTUGAL, UK, BRAZIL, THE NORDICS AND THE U.S, WHICH GIVES US AN ADVANTAGE WHEN WORKING WITH TIGHT DEADLINES (6-9 HOURS TIME DIFFERENCE IS EAAASY).
OR AS KID CUDI ONCE SAID: DAY'N'NITE.`,
    leftBorder: '#FFF500',
    leftImage:
      'https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/66d6c229190f166a69becdd7_2024_vibe_Presse_Julia_Tiemann-9.webp',
    rightBorder: '#FF0082',
    rightImage:
      'https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/66d6be3e3964c1900f6a331d_2.webp',
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
    leftImageBorder: document.getElementById('left_pixel_border'),
    leftPixelCover: document.getElementById('left_pixel_cover'),
    leftPixels: document.getElementsByClassName('left_pixel'),
    rightPixels: document.getElementsByClassName('right_pixel'),
    rightPixelBorder: document.getElementById('right_pixel_border'),
    rightPixelCover: document.getElementById('right_pixel_cover'),
    leftImage: document.getElementById('left_image'),
    rightImage: document.getElementById('right_image'),
    selectorContainer: document.getElementById('selector_container'),
    textContainer: document.getElementById('paragraph_text'),
    upArrowButtons: Array.from(document.getElementsByClassName('up_arrow')),
    downArrowButtons: Array.from(document.getElementsByClassName('down_arrow')),
    iconLeft: document.getElementsByClassName('icon_left'),
    iconRight: document.getElementsByClassName('icon_right'),

    // elements for Who The Vibe part
    whoTheVibeContainer: document.getElementById(
      'who_the_vibe_select_container'
    ),
    leftRocketship: document.getElementById('left_rocket'),
    rightRocketship: document.getElementById('right_rocket'),
    whoTheVibeTextContainer: document.getElementById(
      'who_the_vibe_text_container'
    ),
    whoTheVibeBack: document.getElementById('who_vibe_text_back'),
    whoTheVibeTitle: document.getElementById('who_the_vibe_title'),
    whoTheVibeParagraph: document.getElementById('who_the_vibe_paragraph'),

    gameboyContent: document.getElementById('gameboy_content'),
  }

  DOM.whoTheVibeContainer.style.display = 'none'
  DOM.whoTheVibeTextContainer.style.display = 'none'
  DOM.leftRocketship.addEventListener('click', () => leftRocket())
  DOM.rightRocketship.addEventListener('click', () => rightRocket())
  DOM.whoTheVibeBack.addEventListener('click', () => backButton())

  DOM.gameboyContent.classList.add('content')

  let currentIndex = 0

  function leftRocket() {
    DOM.gameboyContent.classList.add('fade-out')
    DOM.leftImage.classList.add('fade-out')
    DOM.rightImage.classList.add('fade-out')

    setTimeout(() => {
      DOM.whoTheVibeParagraph.innerText = elements[0].anikaText
      DOM.whoTheVibeTitle.innerText = 'THE BIZ'
      DOM.leftImage.src =
        'https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/66cf6b5237a8bc0f37c02e01_anika.webp'
      DOM.rightImage.src =
        'https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/66d6be3e3964c1900f6a331d_2.webp'

      DOM.gameboyContent.classList.remove('fade-out')
      DOM.leftImage.classList.remove('fade-out')
      DOM.rightImage.classList.remove('fade-out')

      DOM.gameboyContent.classList.add('fade-in')
      DOM.leftImage.classList.add('fade-in')
      DOM.rightImage.classList.add('fade-in')

      DOM.whoTheVibeContainer.style.display = 'none'
      DOM.whoTheVibeTextContainer.style.display = 'flex'
    }, 1200)

    DOM.gameboyContent.classList.remove('fade-in')
    DOM.leftImage.classList.remove('fade-in')
    DOM.rightImage.classList.remove('fade-in')
  }

  function rightRocket() {
    DOM.gameboyContent.classList.add('fade-out')
    DOM.leftImage.classList.add('fade-out')
    DOM.rightImage.classList.add('fade-out')

    setTimeout(() => {
      DOM.whoTheVibeParagraph.innerText = elements[0].lukasText
      DOM.whoTheVibeTitle.innerText = 'MGMT'
      DOM.leftImage.src =
        'https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/66d6be3ebdca4acf6988c288_3.webp'
      DOM.rightImage.src =
        'https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/64f0cec1909714f98f17bd94_DSCF2904%20Mittel.jpeg'

      DOM.gameboyContent.classList.remove('fade-out')
      DOM.leftImage.classList.remove('fade-out')
      DOM.rightImage.classList.remove('fade-out')

      DOM.gameboyContent.classList.add('fade-in')
      DOM.leftImage.classList.add('fade-in')
      DOM.rightImage.classList.add('fade-in')

      DOM.whoTheVibeContainer.style.display = 'none'
      DOM.whoTheVibeTextContainer.style.display = 'flex'
    }, 1200)

    DOM.gameboyContent.classList.remove('fade-in')
    DOM.leftImage.classList.remove('fade-in')
    DOM.rightImage.classList.remove('fade-in')
  }

  function backButton() {
    DOM.gameboyContent.classList.add('fade-out')
    DOM.leftImage.classList.add('fade-out')
    DOM.rightImage.classList.add('fade-out')

    setTimeout(() => {
      DOM.gameboyContent.classList.remove('fade-out')
      DOM.leftImage.classList.remove('fade-out')
      DOM.rightImage.classList.remove('fade-out')

      DOM.leftImage.src = elements[0].leftImage
      DOM.rightImage.src = elements[0].rightImage

      DOM.gameboyContent.classList.add('fade-in')
      DOM.leftImage.classList.add('fade-in')
      DOM.rightImage.classList.add('fade-in')

      DOM.whoTheVibeTextContainer.style.display = 'none'
      DOM.whoTheVibeContainer.style.display = 'flex'
    }, 1200)

    DOM.gameboyContent.classList.remove('fade-in')
    DOM.leftImage.classList.remove('fade-in')
    DOM.rightImage.classList.remove('fade-in')
  }

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

  async function updateContent(index) {
    const { paragraphText, leftImage, rightImage, leftBorder, rightBorder } =
      elements[index]

    if (index === 0) {
      DOM.gameboyContent.classList.add('fade-in')
      DOM.textContainer.classList.remove('fade-out')
      DOM.textContainer.style.display = 'none'
      DOM.whoTheVibeContainer.style.display = 'flex'
    } else {
      DOM.textContainer.style.display = 'flex'
      DOM.whoTheVibeContainer.style.display = 'none'
      DOM.whoTheVibeTextContainer.style.display = 'none'

      DOM.textContainer.innerText = paragraphText

      DOM.textContainer.classList.remove('fade-out')
      DOM.textContainer.classList.add('fade-in')
    }

    DOM.leftImageBorder.style.backgroundColor = leftBorder
    DOM.leftImageBorder.style.borderColor = leftBorder
    DOM.rightPixelBorder.style.backgroundColor = rightBorder
    DOM.rightPixelBorder.style.borderColor = rightBorder

    // Add background color to all left pixel boxes
    Array.from(DOM.leftPixels).forEach((pixel) => {
      pixel.style.backgroundColor = leftBorder
      pixel.style.opacity = 1
    })

    Array.from(DOM.rightPixels).forEach((pixel) => {
      pixel.style.backgroundColor = rightBorder
      pixel.style.opacity = 1
    })

    DOM.leftImage.src = leftImage
    DOM.rightImage.src = rightImage

    DOM.leftImage.classList.remove('fade-out')
    DOM.leftImage.classList.add('fade-in')
    DOM.rightImage.classList.remove('fade-out')
    DOM.rightImage.classList.add('fade-in')
    DOM.whoTheVibeContainer.classList.remove('fade-out')
    DOM.whoTheVibeContainer.classList.add('fade-in')
  }

  function transitionContent(index) {
    DOM.textContainer.classList.add('fade-out')
    DOM.leftImage.classList.add('fade-out')
    DOM.rightImage.classList.add('fade-out')
    DOM.whoTheVibeContainer.classList.add('fade-out')

    setTimeout(() => {
      updateContent(index)
      gsap.to('.left_pixel', {
        opacity: 0,
        duration: 0.4,
        stagger: {
          each: 0.125,
          from: 'random',
          grid: 'auto',
        },
        ease: 'power1.inOut',
      })
      gsap.to('.right_pixel', {
        opacity: 0,
        duration: 0.4,
        stagger: {
          each: 0.125,
          from: 'random',
          grid: 'auto',
        },
        ease: 'power1.inOut',
      })
    }, 1200)

    DOM.textContainer.classList.remove('fade-in')
    DOM.leftImage.classList.remove('fade-in')
    DOM.rightImage.classList.remove('fade-in')
    DOM.whoTheVibeContainer.classList.remove('fade-in')
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
    ;[
      DOM.textContainer,
      DOM.leftImage,
      DOM.rightImage,
      DOM.whoTheVibeContainer,
      DOM.whoTheVibeTextContainer,
    ].forEach((el) => el.classList.add('content', 'fade-in'))

    var grid = [10, 10]

    function buildGrid(vars) {
      vars = vars || {}
      const parent = vars.parent || document.body
      const parentRect = parent.getBoundingClientRect()
      const rows = vars.grid[0] || 5
      const cols = vars.grid[1] || 5
      const width = parentRect.width
      const height = parentRect.height
      const gutter = vars.gutter || 1
      const className = vars.className || ''

      const container = document.createElement('div')
      container.style.cssText = `
        width: ${width}px;
        height: ${height}px;
        display: grid;
        grid-template-columns: repeat(${cols}, 1fr);
        grid-template-rows: repeat(${rows}, 1fr);
        gap: ${gutter}px;
      `

      for (let i = 0; i < rows * cols; i++) {
        const box = document.createElement('div')
        box.className = className
        box.setAttribute('data-index', i)
        if (vars.onCellClick) {
          box.addEventListener('click', vars.onCellClick)
        }
        container.appendChild(box)
      }

      parent.appendChild(container)
      return container
    }

    buildGrid({
      grid: grid,
      className: 'left_pixel',
      gutter: 7,
      parent: DOM.leftPixelCover,
    })

    buildGrid({
      grid: grid,
      className: 'right_pixel',
      gutter: 7,
      parent: DOM.rightPixelCover,
    })

    // Add continuous floating animation to icon_left
    gsap.to(DOM.iconLeft, {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })

    gsap.to(DOM.iconRight, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })
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
      image.src =
        index === 0 ? elements[index].rightImage : elements[index].leftImage

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
