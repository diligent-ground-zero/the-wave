import '../../styles/aboutUs.css'

document.addEventListener('DOMContentLoaded', () => {
  initAboutUs()
})

const leftImageContainer = document.getElementById('image_left')
const rightImageContainer = document.getElementById('image_right')
const textContainer = document.getElementById('paragraph_text')
const leftButton = document.getElementById('left_arrow')
const rightButton = document.getElementById('right_arrow')

const elements = [
  {
    leftImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/66c5c756f12558cb20dfcb07_64fef455bfe03703b2ad0d0f_Nicht%20benannt-2-p-500.png',
    rightImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/65e615db97765971f48ab7e2_vibe_favicon_apple.png',
    text: 'TEXT NUMBER 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
  {
    leftImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/65b6308d3061e1aff322dd72_Paulaner_Logo_SW_AF%20(1).svg',
    rightImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/651d58d0d7edb352cdd6ce98_05%20Paulaner_(Brauerei)_logo.svg',
    text: 'TEXT NUMBER 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
  {
    leftImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/65b630c080c184325af3c61b_BK_LOGO_PRIMARY_%C2%AE_ST_CRUNCHY_WHITE_PMS_C%20(2).svg',
    rightImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/651d5b65052c9ce0b8b7678b_BK_LOGO_PRIMARY_BACKGROUND_%E2%94%AC%C2%AB_ST_RGB.png',
    text: 'TEXT NUMBER 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
  {
    leftImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/654a468bc21c82a3253311b4_01%20dl-telekom-logo-02.png',
    rightImage:
      'https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/651d5a9086296e439a807aba_Nicht%20benannt%20(2).png',
    text: 'TEXT NUMBER 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
]

export const initAboutUs = () => {
  function initSetup() {
    if (leftImageContainer && rightImageContainer && textContainer) {
      leftImageContainer.src = elements[0].leftImage
      rightImageContainer.src = elements[0].rightImage
      textContainer.innerText = elements[0].text

      leftImageContainer.classList.add('content')
      rightImageContainer.classList.add('content')
      textContainer.classList.add('content')
    }
  }

  function setContent(index) {
    if (leftImageContainer && rightImageContainer && textContainer) {
      leftImageContainer.classList.add('fade-out')
      rightImageContainer.classList.add('fade-out')
      textContainer.classList.add('fade-out')

      setTimeout(() => {
        leftImageContainer.src = elements[index].leftImage
        rightImageContainer.src = elements[index].rightImage
        textContainer.innerText = elements[index].text

        leftImageContainer.classList.remove('fade-out')
        rightImageContainer.classList.remove('fade-out')
        textContainer.classList.remove('fade-out')

        leftImageContainer.classList.add('fade-in')
        rightImageContainer.classList.add('fade-in')
        textContainer.classList.add('fade-in')
      }, 500)

      leftImageContainer.classList.remove('fade-in')
      rightImageContainer.classList.remove('fade-in')
      textContainer.classList.remove('fade-in')
    }
  }

  // position in array
  let counter = 0

  function nextElement() {
    if (counter === 3) counter = 0
    else counter++

    setContent(counter)
  }

  function prevElement() {
    if (counter === 0) counter = 3
    else counter--

    setContent(counter)
  }

  // initial setup
  initSetup()

  leftButton.addEventListener('click', prevElement)
  rightButton.addEventListener('click', nextElement)
}
