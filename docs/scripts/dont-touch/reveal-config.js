import Reveal from '../../web_modules/reveal.js/dist/reveal.esm.js';
import RevealMarkdown from '../../web_modules/reveal.js/plugin/markdown/markdown.esm.js'
import RevealZoom from '../../web_modules/reveal.js/plugin/zoom/zoom.esm.js';
import RevealNotes from '../../web_modules/reveal.js/plugin/notes/notes.esm.js';
import RevealHighLight from '../../web_modules/reveal.js/plugin/highlight/highlight.esm.js';
import RevealSfeirTheme from '../../web_modules/sfeir-school-theme/dist/js/sfeir-theme.js';
import { renderSlides } from './import-slides.js';
import { usedSlides } from '../slides.js';

const importSlideElement = document.querySelector('.slides');
renderSlides(importSlideElement, usedSlides());

Reveal.initialize(
  {
    controls: true,
    progress: true,
    history: true,
    center: false,
    width: 1920,
    height: 1080,

    keyboard: {
      32: function() {
        var video = document.querySelector('.present video');
        if (video.paused == true) {
          video.play();
        } else {
          video.pause();
        }
      }
    },

    slideNumber: 'c/t',
    showSlideNumber: 'speaker',
    plugins: [
      RevealMarkdown, RevealSfeirTheme, RevealZoom, RevealNotes, RevealHighLight
    ]
  }).then(() => {
    Reveal.configure({
      theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
      transition: Reveal.getQueryHash().transition || 'none', // default/cube/page/concave/zoom/linear/fade/none
    });
  });

