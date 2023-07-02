<!-- The main icon for the website -->

<!-- The styles for the main icon -->
<style>

  svg {
    --size: 100%;

    inline-size: var(--size);
    block-size: var(--size);
    aspect-ratio: 1;
  }

  /* The colours for the main icon in the light theme */
  :global(.light) svg {

    
    /* The colours for the first wheel */
    --wheel-1-outer-colour: black;
    --wheel-1-inner-colour: #F6C1E3;
    --wheel-1-core-colour: #FF3BC2;
    --wheel-1-accent-colour: black;

    /* The colours for the second wheel */
    --wheel-2-outer-colour: black;
    --wheel-2-inner-colour: #F6C1E3;
    --wheel-2-core-colour: #FF3BC2;
    --wheel-2-accent-colour: black;

    /* The colours for the third wheel */
    --wheel-3-outer-colour: black;
    --wheel-3-inner-colour: #F6C1E3;
    --wheel-3-core-colour: #FF3BC2;
    --wheel-3-accent-colour: black;

    /* The colours for the fourth wheel */
    --wheel-4-outer-colour: black;
    --wheel-4-inner-colour: #F6C1E3;
    --wheel-4-core-colour: #FF3BC2;
    --wheel-4-accent-colour: black;


    /* The colours for the outer wings */
    --outer-wings-body-colour: #FF3BC2;
    --outer-wings-accent-colour: black;

    /* The colours for the inner wings */
    --inner-wings-body-colour: hotpink;
    --inner-wings-accent-colour: black;

    
    /* The colours for the frame */
    --frame-colour: #D9D8D9;
    --frame-spacing-colour: black;

    /* The colours for the first frame bolt */
    --frame-bolt-1-outer-colour: hotpink;
    --frame-bolt-1-inner-colour: black;

    /* The colours for the second frame bolt */
    --frame-bolt-2-outer-colour: hotpink;
    --frame-bolt-2-inner-colour: black;

    /* The colours for the third frame bolt */
    --frame-bolt-3-outer-colour: hotpink;
    --frame-bolt-3-inner-colour: black;

    /* The colours for the fourth frame bolt */
    --frame-bolt-4-outer-colour: hotpink;
    --frame-bolt-4-inner-colour: black;

    
    /* The colours for the liner */
    --liner-colour: #99E1BF;
    --liner-front-accent-colour: #014D4E;
    --liner-middle-accent-colour: #014D4E;
    --liner-back-accent-colour: #014D4E;

    /* The colours for the liner flap */
    --liner-flap-colour: #D9D8D9;

    /* The colours for the toe flap and toe cap */
    --toe-flap-colour: black;
    --toe-cap-colour: #D9D8D9;

    
    /* The colours for the cuff */
    --cuff-colour: #419F90;
    --cuff-inner-edge-colour: #99E1BF;
    --cuff-screw-colour: black;
    --cuff-spacing-colour: #014D4E;

    
    /* The colours for the straps and buckles */
    --front-strap-1-colour: hotpink;
    --front-strap-2-colour: hotpink;
    --power-strap-colour: black;
    --power-strap-top-edge-colour: hotpink;
    --power-strap-bottom-edge-colour: hotpink;
    --top-buckle-inner-colour: black;
    --top-buckle-outer-colour: #D9D8D9;
    --top-strap-colour: #D9D8D9;
  }

  /* The colours for the main icon in the dark theme */
  :global(.dark) svg {

    
    /* The colours for the first wheel */
    --wheel-1-outer-colour: black;
    --wheel-1-inner-colour: #EF432A;
    --wheel-1-core-colour: #DEE3FF;
    --wheel-1-accent-colour: black;

    /* The colours for the second wheel */
    --wheel-2-outer-colour: black;
    --wheel-2-inner-colour: #EF432A;
    --wheel-2-core-colour: #DEE3FF;
    --wheel-2-accent-colour: black;

    /* The colours for the third wheel */
    --wheel-3-outer-colour: black;
    --wheel-3-inner-colour: #EF432A;
    --wheel-3-core-colour: #DEE3FF;
    --wheel-3-accent-colour: black;

    /* The colours for the fourth wheel */
    --wheel-4-outer-colour: black;
    --wheel-4-inner-colour: #EF432A;
    --wheel-4-core-colour: #DEE3FF;
    --wheel-4-accent-colour: black;


    /* The colours for the outer wings */
    --outer-wings-body-colour: #EF432A;
    --outer-wings-accent-colour: black;

    /* The colours for the inner wings */
    --inner-wings-body-colour: #F2753F;
    --inner-wings-accent-colour: black;

    
    /* The colours for the frame */
    --frame-colour: #4A4A4B;
    --frame-spacing-colour: #0D0B0C;

    /* The colours for the first frame bolt */
    --frame-bolt-1-outer-colour: #F2753F;
    --frame-bolt-1-inner-colour: black;

    /* The colours for the second frame bolt */
    --frame-bolt-2-outer-colour: #F2753F;
    --frame-bolt-2-inner-colour: black;

    /* The colours for the third frame bolt */
    --frame-bolt-3-outer-colour: #F2753F;
    --frame-bolt-3-inner-colour: black;

    /* The colours for the fourth frame bolt */
    --frame-bolt-4-outer-colour: #F2753F;
    --frame-bolt-4-inner-colour: black;

    
    /* The colours for the liner */
    --liner-colour: #0BC3D3;
    --liner-front-accent-colour: #0A0B89;
    --liner-middle-accent-colour: #0A0B89;
    --liner-back-accent-colour: #0A0B89;

    /* The colours for the liner flap */
    --liner-flap-colour: #DEE3FF;

    /* The colours for the toe flap and toe cap */
    --toe-flap-colour: black;
    --toe-cap-colour: #DEE3FF;

    
    /* The colours for the cuff */
    --cuff-colour: #4A4A4B;
    --cuff-inner-edge-colour: #0BC3D3;
    --cuff-screw-colour: black;
    --cuff-spacing-colour: #0A0B89;

    
    /* The colours for the straps and buckles */
    --front-strap-1-colour: #DEE3FF;
    --front-strap-2-colour: #DEE3FF;
    --power-strap-colour: black;
    --power-strap-top-edge-colour: #F2753F;
    --power-strap-bottom-edge-colour: #F2753F;
    --top-buckle-inner-colour: black;
    --top-buckle-outer-colour: #DEE3FF;
    --top-strap-colour: #DEE3FF;
  }





  /* The styles for the wheels */

  .wheel-1 > polygon {
    fill: var(--wheel-1-accent-colour);
  }

  .wheel-1 > .outer {
    fill: var(--wheel-1-outer-colour);
  }

  .wheel-1 > .inner {
    fill: var(--wheel-1-inner-colour);
  }

  .wheel-1 > .core {
    fill: var(--wheel-1-core-colour);
  }
  
  .wheel-2 > polygon {
    fill: var(--wheel-2-accent-colour);
  }

  .wheel-2 > .outer {
    fill: var(--wheel-2-outer-colour);
  }

  .wheel-2 > .inner {
    fill: var(--wheel-2-inner-colour);
  }

  .wheel-2 > .core {
    fill: var(--wheel-2-core-colour);
  }

  .wheel-3 > polygon {
    fill: var(--wheel-3-accent-colour);
  }

  .wheel-3 > .outer {
    fill: var(--wheel-3-outer-colour);
  }

  .wheel-3 > .inner {
    fill: var(--wheel-3-inner-colour);
  }

  .wheel-3 > .core {
    fill: var(--wheel-3-core-colour);
  }

  .wheel-4 > polygon {
    fill: var(--wheel-4-accent-colour);
  }

  .wheel-4 > .outer {
    fill: var(--wheel-4-outer-colour);
  }

  .wheel-4 > .inner {
    fill: var(--wheel-4-inner-colour);
  }

  .wheel-4 > .core {
    fill: var(--wheel-4-core-colour);
  }





  /* The styles for the wings */

  .outer-wings > .body {
    fill: var(--outer-wings-body-colour);
  }

  .outer-wings > .accent {
    fill: var(--outer-wings-accent-colour);
  }

  .inner-wings > .body {
    fill: var(--inner-wings-body-colour);
  }

  .inner-wings > .accent {
    fill: var(--inner-wings-accent-colour);
  }





  /* The styles for the frame */

  .frame {
    fill: var(--frame-colour);
  }

  .frame-spacing > path {
    fill: var(--frame-spacing-colour);
  }

  .frame-bolt-outer > .one {
    fill: var(--frame-bolt-1-outer-colour);
  }

  .frame-bolt-outer > .two {
    fill: var(--frame-bolt-2-outer-colour);
  }

  .frame-bolt-outer > .three {
    fill: var(--frame-bolt-3-outer-colour);
  }

  .frame-bolt-outer > .four {
    fill: var(--frame-bolt-4-outer-colour);
  }

  .frame-bolt-inner > .one {
    fill: var(--frame-bolt-1-inner-colour);
  }

  .frame-bolt-inner > .two {
    fill: var(--frame-bolt-2-inner-colour);
  }

  .frame-bolt-inner > .three {
    fill: var(--frame-bolt-3-inner-colour);
  }

  .frame-bolt-inner > .four {
    fill: var(--frame-bolt-4-inner-colour);
  }





  /* The styles for the liner */

  .liner {
    fill: var(--liner-colour);
  }

  .liner-accent > .front {
    fill: var(--liner-front-accent-colour);
  }

  .liner-accent > .middle {
    fill: var(--liner-middle-accent-colour);
  }

  .liner-accent > .back {
    fill: var(--liner-back-accent-colour);
  }


  /* The styles for the liner flap */
  
  .liner-flap > :is(polygon, path) {
    fill: var(--liner-flap-colour);
  }

  .liner-flap > .toe-flap {
    fill: var(--toe-flap-colour);
  }


  /* The styles for the toe cap */
  .toe-cap {
    fill: var(--toe-cap-colour);
  }





  /* The styles for the cuff */
  
  .cuff {
    fill: var(--cuff-colour);
  }

  .cuff-inner-edge {
    fill: var(--cuff-inner-edge-colour);
  }

  .cuff-screw {
    fill: var(--cuff-screw-colour);
  }

  .cuff-spacing {
    fill: var(--cuff-spacing-colour);
  }





  /* The styles for the straps and buckles */

  .front-strap-1 {
    fill: var(--front-strap-1-colour);
  }

  .front-strap-2 {
    fill: var(--front-strap-2-colour);
  }

  .power-strap > .strap {
    fill: var(--power-strap-colour);
  }

  .power-strap > .top-edge {
    fill: var(--power-strap-top-edge-colour);
  }

  .power-strap > .bottom-edge {
    fill: var(--power-strap-bottom-edge-colour);
  }

  .top-buckle > .outer {
    fill: var(--top-buckle-outer-colour);
  }

  .top-buckle > .inner {
    fill: var(--top-buckle-inner-colour);
    mix-blend-mode: normal;
  }

  .top-buckle > .strap {
    fill: var(--top-strap-colour);
  }
  
</style>

<!-- The HTML for the main icon -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="310px"
  height="255px" viewBox="0 0 320 230" xml:space="preserve">
  <style type="text/css">
    .st0 {
      fill: #FFFFFF;
      stroke: #000000;
      stroke-width: 2;
      stroke-miterlimit: 10;
    }
    .st1 {
      fill: #FFFFFF;
      stroke: #000000;
      stroke-width: 1;
      stroke-miterlimit: 10;
    }
    .st2 {
      fill: #FFFFFF;
      stroke: #000000;
      stroke-width: 2;
      stroke-miterlimit: 10;
    }
    .st3 {
      fill: none;
      stroke: #000000;
      stroke-width: 2;
      stroke-miterlimit: 10;
    }
    .st4 {
      fill: #FFFFFF;
      stroke: #000000;
      stroke-width: 1.5;
      stroke-miterlimit: 10;
    }
    .st5 {
      fill: #FFFFFF;
    }
    .st6 {
      fill: #FFFFFF;
      stroke: #000000;
      stroke-width: 1;
      stroke-miterlimit: 10;
    }
    .st7 {
      fill: #FFFFFF;
      stroke: #000000;
      stroke-width: 0.5;
      stroke-miterlimit: 10;
    }
    .st8 {
      fill: none;
      stroke: #000000;
      stroke-miterlimit: 10;
    }
    .st9 {
      fill: none;
      stroke: #000000;
      stroke-width: 0.5;
      stroke-miterlimit: 10;
    }
    .st10 {
      fill: #FFFFFF;
      stroke: #000000;
      stroke-miterlimit: 10;
    }
    .st11 {
      fill: none;
      stroke: #000000;
      stroke-width: 1;
      stroke-miterlimit: 10;
    }
  </style>
  <g>
    <g>
      <g>
        <g>
          <g class="wheel-1">

            <ellipse class="st0 outer" transform="matrix(0.6584 -0.7526 0.7526 0.6584 -145.391 110.0645)" cx="48.6" cy="215.2" rx="21.6" ry="28.3"/>

            <ellipse class="st1 inner" transform="matrix(0.6584 -0.7526 0.7526 0.6584 -145.391 110.0645)" cx="48.6" cy="215.2" rx="19" ry="24.9"/>

            <ellipse class="st1 core" transform="matrix(0.6584 -0.7526 0.7526 0.6584 -145.7481 110.3194)" cx="48.7" cy="215.7" rx="14.1" ry="18.5"/>
            <polygon points="35.2,221 38.5,220 42.3,224.3 40.8,227.5 37.8,224.8"/>
            <polygon points="45.2,230 46.2,226.8 51.7,228 53.1,231.9 49.5,231.6"/>
            <polygon points="58.6,230.5 56.4,227 59.8,223.8 63.7,226 61.8,228.6"/>
            <polygon points="31.9,209.5 35.7,211.1 36.3,216.3 32.6,217 31.6,213.5"/>
            <polygon points="37.6,201.1 40.1,204.4 37.3,208.1 33.3,206.3 34.7,203.5"/>
            <polygon points="62.1,209.3 59.1,210.7 54.8,206.8 55.8,203.3 59.1,205.7"/>
            <polygon points="64.9,222.4 61.1,220.7 60.7,215.4 64.4,214.9 65.3,218.4"/>
            <polygon points="50.4,200.4 50.1,204 44.8,203.8 42.6,200 46.1,199.6"/>
          </g>
          <g class="wheel-2">

            <ellipse class="st0 outer" transform="matrix(0.6584 -0.7526 0.7526 0.6584 -127.0789 150.4058)" cx="102.2" cy="215.2" rx="21.6" ry="28.3"/>

            <ellipse class="st1 inner" transform="matrix(0.6584 -0.7526 0.7526 0.6584 -127.0789 150.4058)" cx="102.2" cy="215.2" rx="19" ry="24.9"/>

            <ellipse class="st1 core" transform="matrix(0.6584 -0.7526 0.7526 0.6584 -127.4401 150.6654)" cx="102.3" cy="215.7" rx="14.1" ry="18.5"/>
            <polygon points="88.8,221 92.1,220 95.9,224.3 94.4,227.5 91.4,224.8"/>
            <polygon points="98.8,230 99.8,226.8 105.3,228 106.7,231.9 103.1,231.6"/>
            <polygon points="112.2,230.5 110,227 113.4,223.8 117.3,226 115.4,228.6"/>
            <polygon points="85.5,209.5 89.3,211.1 89.9,216.3 86.2,217 85.2,213.5"/>
            <polygon points="91.2,201.1 93.7,204.4 90.9,208.1 86.9,206.3 88.3,203.5"/>
            <polygon points="115.7,209.3 112.7,210.7 108.4,206.8 109.4,203.3 112.7,205.7"/>
            <polygon points="118.5,222.4 114.7,220.7 114.3,215.4 118,214.9 118.9,218.4"/>
            <polygon points="104,200.4 103.7,204 98.4,203.8 96.2,200 99.7,199.6"/>
          </g>
          <g class="wheel-3">

            <ellipse class="st0 outer" transform="matrix(0.6584 -0.7526 0.7526 0.6584 -108.7139 190.9135)" cx="156" cy="215.2" rx="21.6" ry="28.3"/>

            <ellipse class="st1 inner" transform="matrix(0.6584 -0.7526 0.7526 0.6584 -108.7139 190.9134)" cx="156" cy="215.2" rx="19" ry="24.9"/>

            <ellipse class="st1 core" transform="matrix(0.6584 -0.7526 0.7526 0.6584 -108.9919 191.1922)" cx="156.1" cy="215.7" rx="14.1" ry="18.5"/>
            <polygon points="142.6,221 145.9,220 149.7,224.3 148.3,227.5 145.2,224.8"/>
            <polygon points="152.6,230 153.6,226.8 159.1,228 160.5,231.9 156.9,231.6"/>
            <polygon points="166.1,230.5 163.9,227 167.3,223.8 171.1,226 169.3,228.6"/>
            <polygon points="139.3,209.5 143.1,211.1 143.7,216.3 140,217 139.1,213.5"/>
            <polygon points="145,201.1 147.6,204.4 144.7,208.1 140.8,206.3 142.2,203.5"/>
            <polygon points="169.5,209.3 166.5,210.7 162.2,206.8 163.2,203.3 166.5,205.7"/>
            <polygon points="172.3,222.4 168.5,220.7 168.1,215.4 171.8,214.9 172.7,218.4"/>
            <polygon points="157.8,200.4 157.6,204 152.2,203.8 150.1,200 153.5,199.6"/>
          </g>
          <g class="wheel-4">

            <ellipse class="st0 outer" transform="matrix(0.6584 -0.7526 0.7526 0.6584 -90.1599 231.773)" cx="210.3" cy="215.2" rx="21.6" ry="28.3"/>

            <ellipse class="st1 inner" transform="matrix(0.6584 -0.7526 0.7526 0.6584 -90.1599 231.773)" cx="210.3" cy="215.2" rx="19" ry="24.9"/>

            <ellipse class="st1 core" transform="matrix(0.6584 -0.7526 0.7526 0.6584 -90.517 232.0279)" cx="210.4" cy="215.7" rx="14.1" ry="18.5"/>
            <polygon points="196.9,221 200.2,220 204,224.3 202.6,227.5 199.5,224.8"/>
            <polygon points="206.9,230 207.9,226.8 213.4,228 214.8,231.9 211.2,231.6"/>
            <polygon points="220.4,230.5 218.1,227 221.6,223.8 225.4,226 223.6,228.6"/>
            <polygon points="193.6,209.5 197.4,211.1 198,216.3 194.3,217 193.4,213.5"/>
            <polygon points="199.3,201.1 201.9,204.4 199,208.1 195.1,206.3 196.5,203.5"/>
            <polygon points="223.8,209.3 220.8,210.7 216.5,206.8 217.5,203.3 220.8,205.7"/>
            <polygon points="226.6,222.4 222.8,220.7 222.4,215.4 226.1,214.9 227,218.4"/>
            <polygon points="212.1,200.4 211.8,204 206.5,203.8 204.3,200 207.8,199.6"/>
          </g>
        </g>
        <g>
          <g class="outer-wings">
            <path class="st2 body" d="M238.2,76.6c28.4,8.2,47.9,6.8,58.2,0.8c15.9-9.3,13.8-30.8,13.8-30.8c-1.2,2.2-8.3,18.5-58.8,13.8
                                      c5-0.9,12-2.5,19.5-4.8c48.3-14.7,26.5-57.5,25.6-60.5c-0.4,1.8-6,23.5-46.4,39.6c-17.9,7.2-40.6,7.6-52.4,6.2
                                      c-11.7-1.3-31.6,8.9-31.6,8.9s14.3,52.6,25.5,70.8c1.4,2.2,6.9,9,15.4,11.5c9.5,2.7,16.8,0,16.8,0s-9.3-3.5-14.4-8.6
                                      c-5.2-5.2-11.8-18.6-11.8-18.6s5.5,8.2,13.7,14.8c8.9,7.2,21.4,8.5,26.8,8.5c7.9,0,16.2-3.6,16.2-3.6s-16.5-2.1-24.3-7.6
                                      c-6.8-4.8-9.9-10.4-9.9-10.4s6.2,5.8,16.6,9.6c8.6,3.2,20.9,4.8,28.2,2.7c8.9-2.7,13.2-10.1,13.2-10.1s-9,2.1-28.4-4.3
                                      c-6.9-2.3-19.2-8.8-25.4-12.2c4.3,2.1,12.8,5.5,28.5,9.5C292.2,112,300.4,85,300.4,85s-13.5,9.2-51.6-3.8
                                      C233.2,76,206.1,67.4,238.2,76.6L238.2,76.6z"/>
            <path class="accent" d="M186.3,103.7l4-3.9c0,0,5.8,13.5,10,18.9c4.7,6,8.6,8.3,8.6,8.3s-1.8,0.2-10-8.6c-2.7-2.8-6.2-9.8-6.1-7.2
                                    c0,1.2,3.7,7,5.2,9c3,4.1,4.4,4.7,4.4,4.7s-1.7-0.5-5.3-5C193.4,115.6,186.3,103.7,186.3,103.7L186.3,103.7z"/>
            <path class="accent" d="M202.4,102.2l4.9-3.1c0,0,8.5,12.2,11.6,15.8c3.2,3.7,12,8.3,12,8.3s-6.6-3-12.3-7.3c-1.9-1.4-7.9-8.1-7.4-5.6
                                    c0.2,1.1,2.8,4.5,4.5,6c2.8,2.6,5.6,4.8,5.6,4.8s-3.5-2.2-7.1-5.5C210.4,111.9,202.5,102.2,202.4,102.2L202.4,102.2z"/>
            <path class="accent" d="M216.1,99.4l-3.8-7.9c0,0,23.5,14,28.9,16.2c10.8,4.4,17.3,4.1,17.3,4.1s-6.6,1.1-18.8-3.2c-3-1.1-13.9-6.9-11.9-3.7
                                    c0.9,1.4,1.8,1.3,3.2,2.5c4,3.5,9.8,5.3,9.8,5.3s0.2,0.7-5.8-2C228.3,107.7,216.1,99.4,216.1,99.4L216.1,99.4z"/>
            <path class="accent" d="M237.8,87.2l2.5-2.2c0,0,16.2,6,24.9,7.2c11,1.5,17.9,1.3,17.9,1.3s-10.5,1.4-19.9-0.1c-7.1-1.1-19.5-3.9-19.5-3.9
                                    s-6.7-2-6.4-0.9c0.7,2.4,13.5,5.4,17.5,6.3C260.6,96.1,265,96,265,96s-1.6,1-11.6-0.5c-7.1-1.1-15.3-3.4-20.5-4.9L237.8,87.2
                                    L237.8,87.2z"/>
            <path class="accent" d="M250.7,68.8l2.1-3c0,0,12.9,2.3,24.5,2.1s18.5-2.3,18.5-2.3s-5.9,3.5-17.1,4.2c-7.2,0.5-21.6,0.1-21.6,0.1
                                    s-6.9-0.6-6.5,0.5c1.8,4.6,28.4,3.9,28.8,3.3c0,0-9,3.7-32.8-0.2L250.7,68.8z"/>
            <path class="accent" d="M244.3,49.2l3.6-8.3c0,0,9.1,0.6,17.6-3.6c10.6-5.3,20.8-16.1,20.8-16.1s-5.5,10.6-13.4,16.7
                                    c-11.7,8.9-15.8,8.1-22.2,9.8c-1.2,0.3-5.1,2.5-3.9,3.1c1.8,0.9,9.3-0.4,16.2-2.1c9.5-2.4,16.7-9.5,17.3-9.8
                                    c0,0-7.7,8.6-18,11.4s-22.9,6.3-30.4,5.3L244.3,49.2L244.3,49.2z"/>
          </g>
          <g class="inner-wings">
            <path class="st3" d="M259,30.8c-0.5-5.3-2.4-10.4-2.4-10.4s-0.8,11.5-26.4,15.8c-18.4,3.1-25-3.2-45.5-2.9
                                 c-20.5,0.2-19.2,19.6-19.2,19.6"/>
            <path class="st4 body" d="M165.5,52.9c0,0-1.3-19.5,19.2-19.7c20.5-0.3,27.1,6,45.5,2.9c25.6-4.3,26.2-14.9,26.2-14.9
                                      s9.1,26.7-11.4,32.9c-18.7,5.7-34.2,3-34.2,3s8.6,3.9,20.5,4.2c20.1,0.6,27.3-7.2,27.3-7.2s1.5,18.3-16.9,22.1
                                      c-14.2,3-35.8-4.1-35.8-4.1s12.4,7.3,24.4,8.2c19.9,1.5,22.4-1,22.4-1s-4.5,13.7-23,13.9c-9.6,0.1-26.8-7.4-26.8-7.4
                                      s12,8.4,23.3,11c14.3,3.4,14.5,2.1,14.5,2.1c-6.9,7.6-14.1,9.4-26.2,6.9c-11.6-2.4-20.2-9.7-20.2-9.7s2.9,3.9,7.2,6.9
                                      c9.8,6.8,25.1,7.3,25.1,7.3s-4.7,7.1-21.1,4c-4.1-0.8-16.9-7.2-19.7-13c-0.6-1.2-1-7.3-1.4-7.9c-8.9-11.4-8.6-27.6-9.9-29.3
                                      C166.7,54.5,165.5,52.9,165.5,52.9L165.5,52.9z"/>
            <path class="accent" d="M184.2,90.6c3.4,0.1,11.9,13.1,15.6,16c4.6,3.5,8.7,4.6,8.7,4.6s-4.3-0.8-9.8-4.2c-5.1-3.2-10.7-9.8-11.1-10.1
                                    c-6.9-7.3,0.5,3.1,7.2,8.8c3.4,2.9,4.4,3.4,4.4,3.4s-6.7-4.1-12-9.5C183,95.3,183.3,90.6,184.2,90.6L184.2,90.6z"/>
            <path class="accent" d="M177.3,74.6l0.5-2.9c0,0,21.3,17.7,28,22.2c11.7,7.9,15.4,8.2,16.1,8.5c0.6,0.3-3.5,0.8-17.6-7.9
                                    c-9.1-5.6-17.1-12.4-17.8-12.8c-2.7-1.6,0.6,4.3,6.1,8.3c9,6.5,18.5,10.8,18.5,10.8s-10.3-3.5-21.3-10.5
                                    c-8.5-5.4-9.6-7.8-10.9-9.9L177.3,74.6L177.3,74.6z"/>
            <path class="accent" d="M178.1,69c0,0.1-4.5-10.4-0.3-8.9c1.8,0.7,6.4,3.8,9.8,6.2c7.3,5,25.7,12.8,27.3,13.5c13.7,5.4,25.4,5.2,25.4,5.2
                                    s-11.6,2.1-27.4-3.8c-11.8-4.4-17.6-6.6-22.5-9.4c-3.8-2.2,0.8,2,7.1,5.9c11.7,7.3,26,10.8,26,10.8s-8.4-0.6-23.2-7.7
                                    C191.9,76.8,182.9,73.4,178.1,69L178.1,69L178.1,69z"/>
            <path class="accent" d="M247.4,66.4c0,0-19.8-0.2-35.5-5.4c-3.6-1.2-9-4.5-16.9-5.2c-5.9-0.5-11.5,1.8-11.5,1.8s5.1-3.1,9.7-4.2
                                    s10.7-1.5,15-1.6c17.3-0.1,25.9-2.6,25.9-2.6s-9.5,1.9-27.8,0.6c-2.2-0.2-6.2-1.1-13.4,0.6c-3.1,0.7-8,3.7-8,3.7
                                    s5-7.4,25.6-7.4c7.1,0,26.2-3.1,36.1-6.7c0,0-17.3,3.9-35.9,3.6c-8.3-0.1-17.4-1.2-23.3,2.2c-5.3,3-9.1,8.9-9.5,13.2
                                    c2.5-2.6,23.9,6.3,30.1,8c19.6,5.2,24.4,3.4,24.4,3.4c-3.7,0-7.7,0.5-24-5.4c-5.9-2.1-9.1-4.5-20.3-7c-2.8-0.6-4.5,0.9-4.5,0.9
                                    s5.7-0.7,12.3,0.7c4.7,1,12.2,3.4,15,4C232.8,68.2,247.4,66.4,247.4,66.4L247.4,66.4z"/>
          </g>
        </g>
        <g>
          <g>
            <path class="st2 frame" d="M168,183.5c-6.1,0.8-36.2,1.1-60.3,1.9c-27.1,0.8-48.1,2.1-48.1,2.1S49,201.3,44.7,204.8
                                       c-8.8,7.1-4.1,20.9,7.1,17.4c16.5-5.2,21.3-9,35.1-3.9s12.9,4.8,19.3,4.8c9.5,0,13.7-8.1,24.1-8.1c12.2,0,17.4,8,27.7,8.5
                                       c12.1,0.6,13.5-8.9,27-8.3c9.5,0.4,19.7,4.7,24.1,6.7c2.3,1.1,4.8,1.5,7.1,1.1c2-0.4,3.3-2.1,3.6-4.5c1-8.3-2.1-12.2-24.7-31.7
                                       C189.2,181.6,181,181.9,168,183.5L168,183.5z"/>
            <path class="st5 frame" d="M183.9,184.6c-12.6-3-142.6,37.7-131.4,34.4c18.2-5.3,21.3-9,35.1-3.9s12.9,4.8,19.3,4.8
                                       c9.5,0,13.7-8.1,24.1-8.1c12.2,0,17.4,8,27.7,8.5c12.1,0.6,13.5-8.9,27-8.3c9.5,0.4,19.5,5.9,23.9,8"/>
            <g class="frame-bolt-outer">

              <ellipse class="st6 one" transform="matrix(0.8218 -0.5697 0.5697 0.8218 -112.8596 66.1341)" cx="49.3" cy="213.5" rx="3.5" ry="4.4"/>

              <ellipse class="st6 two" transform="matrix(0.8218 -0.5697 0.5697 0.8218 -103.2669 96.7097)" cx="103" cy="213.5" rx="3.5" ry="4.4"/>

              <ellipse class="st6 three" transform="matrix(0.8218 -0.5697 0.5697 0.8218 -93.7214 127.2451)" cx="156.6" cy="213.5" rx="3.5" ry="4.4"/>

              <ellipse class="st6 four" transform="matrix(0.8218 -0.5697 0.5697 0.8218 -84.2375 157.6853)" cx="210" cy="213.5" rx="3.5" ry="4.4"/>
            </g>
            <g class="frame-bolt-inner">
              <polygon class="st7 one" points="47.6,212 47.4,214.1 49,215.6 51.1,215.2 51.3,213.1 49.5,211.3"/>
              <polygon class="st7 two" points="101.2,212 101,214.1 102.6,215.6 104.7,215.2 104.9,213.1 103.1,211.3"/>
              <polygon class="st7 three" points="154.8,212 154.6,214.1 156.2,215.6 158.3,215.2 158.6,213.1 156.7,211.3"/>
              <polygon class="st7 four" points="208.3,212 208.1,214.1 209.7,215.6 211.8,215.2 212,213.1 210.2,211.3"/>
            </g>
            <g class="frame-spacing">
              <path class="st2" d="M68.6,191.5l-13.7,16.2c0,0-1.7,3.7,2.6,2.5S93.2,199,93.2,199s5.9-5.1,0.9-5.1
                                   C88.9,193.8,68.6,191.5,68.6,191.5L68.6,191.5z"/>
              <path class="st2" d="M100.1,191.2c0,0,1.9,6.6,8.7,6c6.8-0.6,53.9-12.8,53.9-12.8L100.1,191.2L100.1,191.2z"/>
              <path class="st2" d="M134,201.4c0,0-3.8,1.3-3.3,3s15.8,2,15.8,2l49.9-0.7c0,0,6.4-2.5-2-10.2S181.3,190,177,191
                                   C172.7,192,134,201.4,134,201.4L134,201.4z"/>
            </g>
            <path d="M67.5,185.5l-11.8-1.1c0,0,0.7,6.2,4.4,6.4c3.7,0.2,36.4,3.2,36.4,3.2l85-10.8l-25.7,1l-82.7,0.6L67.5,185.5z"/>
          </g>
          <g>
            <path class="st2 liner" d="M39.5,152.1c0,0-5.6,5.8-4.3,10.3s-3.9,7.8,4,14.4c7.9,6.7,17.5,7.9,17.5,7.9l152.3-3.2
                                       c0,0,16.1-9.2-0.2-33.5c-12.5-18.7-20.7-45.9-20.7-45.9s-8.7-47.4-11.9-52.1c-5.4-8-9.5-10.7-18.5-14.6c-7-3-17.3-8.2-30.6-8.2
                                       c-25.4,0-19.6,10.8-23.2,11.4c-4.4,0.6-11.5,10.8-11.5,10.8l1.8,4.6l7.2,29.9c0,0,6.8,26.2,3.2,31.7
                                       c-15.4,23.5-64.9,36.3-64.9,36.3L39.5,152.1z"/>
            <path class="st8 toe-cap" d="M39.3,153.7c0,0-3.9,4.1-3.8,6.2c0.1,2.1,0.9,3.8,0.9,3.8s1,1.5,1.8,1.7c0.8,0.2,51.4,10.2,56.3,11.8
                                         c7.6,2.5,6.8,4.1,7.5,5.1s9.3-2.9,9.3-2.9s-2-3.8-2.8-4.9c-1.2-1.8-4.5-4.8-6.5-6c-1.3-0.8-4.7-2-6.2-2.4
                                         c-8.6-2.8-24-5.8-33.6-7.7c-7.9-1.5-16-3.2-20.5-4C41.1,154.2,39.3,153.7,39.3,153.7z"/>
            <g class="liner-flap">
              <path class="st5" d="M71.3,141.3c0,0,2-0.6,3.4,1.4s1.3,4.6,0.3,5.2c-0.6,0.4-8.6,4.4-15.4,6.4s-6.2,1.7-6.2,1.7l4.3,1.1
                                   l10-3.2c0,0,7.7-2.5,9.8-5c2.3-2.8,1.1-4.8,1.1-4.8l5.7-4c0,0-4-3.4-7.1-2C75.2,139.1,71.3,141.3,71.3,141.3z"/>
              <path class="st5" d="M87.6,132.5l6.3-4.3c0,0,0.4,0,2.2,0.3c1.8,0.3,3.6,0.5,3.6,0.5l-7.5,5.5L87.6,132.5z"/>
              <polygon class="st5" points="101.1,121.4 104.9,116.8 110.6,117.2 107.1,122.1"/>
              <path class="st5" d="M102.1,81.9c0,0,1.4,7.1,1.9,9.2c0.6,2.5,1.7,9.7,1.7,9.7s1.6-0.6,3.2-0.8c0.8-0.1,3.6-0.4,5.6-0.1
                                   s2.8,0.4,2.8,0.4s0.7-1.7-1.3-11.5c-1.2-6-2.2-9.3-2.2-9.3L102.1,81.9z"/>
              <path class="st5" d="M93.4,49.5c0,0,1.2,2.7,1.7,4.5c0.8,2.8,3.3,13.5,3.3,13.5l11.5-5.3l-6.1-22.9c0,0-2.4,1.1-5.8,4.2
                                   C96.1,45.4,93.4,49.5,93.4,49.5z"/>
              <path class="st9 toe-flap" d="M52.9,156.2c0,0,7.7-1.1,21.5-8c2.9-1.5,0.6-7.7-3.5-6.6c0,0-15.5,6.1-19.6,7.5
                                            c-3.8,1.3-11.8,3.5-11.8,3.5l2.5,1.8L52.9,156.2z"/>
            </g>
            <g class="liner-accent">
              <path class="front" d="M36,165.9c-0.8,0.8-0.7,2.1-0.6,3.3c0.1,1.4,2.9,3.9,5.5,5.3c2.5,1.4,9.8,4.8,13.2,5.1c7.8,0.8,45.9,1.2,45.2-0.3
                                     c-0.2-0.5-0.9-0.6-2.8-1.3c-4.7-1.6-7.6-2.3-10.6-2.9c-5.3-1-16.4-3.4-22.8-4.4c-3-0.5-12.9-2.6-12.9-2.6
                                     c-2.6-0.2-11.6-2.4-13.7-2.9c-0.2,0-0.1-0.3-0.2-0.2L36,165.9z"/>
              <path class="middle" d="M64,158.7c0.8,0.2,18.4-3.2,17.5-10c-1-6.9,2.8-5,2.8-5s7.6,5.3,9.8,7.6c5.2,5.3,13.2,16.1,13.2,16.1
                                      s-12.5-20.1-20.3-26c-3.3-2.5,1.9-0.8,1.9-0.8l10.9-5.5c0.1,0.1,11.1,3.9,16.3,8.7c6,5.4,13.3,15.9,13.3,15.9
                                      s-6.8-19.6-26.3-27.6c0,0,0.3-0.3,2.6-2.4l9.7-9.1c0,0,7.9,2,13.4,4.6c5.1,2.4,16.3,9.7,16.3,9.7S130.3,120.3,117,118
                                      c-1.7-0.3,4.2-15.6,4.3-18.6c0,0,6.6,0.6,11.5,2.6c4.4,1.8,18.1,10.3,18.1,10.3s-15.6-13.4-29.4-16.7c0,0,0.2-1.2,0.1-2.5
                                      c-0.1-1.7-0.2-3.1-0.2-3.1c-1.4-0.6,7.8,3.5,10.7,5.2c3.4,1.9,13.3,8.8,13.3,8.8s-10.5-9.9-24.1-15.8c0,0-1.3-5.1-1.9-8.4
                                      c-0.3-1.4,3.6,1.3,11.1,3.5c0,0,22.5,6.8,24.5,8.5s5,9.6,5,9.6l0.1,7.9l-2.2,14.5l-2.2,13.4l-2.2,8.2l-14.2,16.7l-20.7,14.7
                                      l-7.4,3.6l-3.1-6.2l-6.2-5.5l-5.7-2.3L64,158.7L64,158.7z"/>
              <path class="back" d="M115.4,58.3l-6-19.5c0,0,1.9-5.5,6.7-6.3c4.8-0.9,8.5-0.9,19.6,0c24.7,2,37.1,16.5,38.6,21.1
                                    c1.6,4.9,5.5,15.8,5.2,18.6c-0.3,2.8,6.5,34,11.2,45.4s15.1,28.5,21.1,41.5c6,13.1-21.2,22.6-32-1s-8.5-42.4-9.4-54.8
                                    s-12.7-27.6-18.2-28S115.3,58.3,115.4,58.3"/>
            </g>
            <path class="st8" d="M111.2,117c0,0,7.9-10.2,6.5-20.9S104,38.7,104,38.9"/>
            <path class="st8" d="M101.4,184.4c0,0,1.2-4.6-4.5-6.2C82.6,174,51.9,168,38.6,166c-2.5-0.4-4.1-5-4.1-5"/>
            <path class="st8" d="M39.3,153.2c0.7,0.1,2,1.2,2.8,1.3c19,4,41.6,7.6,55.3,11.6c5.7,1.7,11.6,7.5,13.3,11.5
                                 c0.7,1.6,0.8,6.5,0.8,6.5"/>
            <path class="st8" d="M39.2,155.6c0.2,0.2,0.5,0.4,0.7,0.6c0.3,0.2,0.6,0.3,0.8,0.2"/>
            <path class="st8" d="M42.4,156.9l1.3,0.4"/>
            <path class="st8" d="M45.1,157.8c0.4,0.1,0.9,0.1,1.3,0.3"/>
            <path class="st8" d="M48,158.5c0.5,0.1,0.9,0.1,1.4,0.3"/>
            <path class="st8" d="M50.9,159.1c0.4,0.1,0.9,0.2,1.3,0.3"/>
            <path class="st8" d="M54,159.7l1.3,0.2"/>
            <path class="st8" d="M56.4,160.2c0.6,0.1,1.2,0.2,1.8,0.2"/>
            <path class="st8" d="M59.8,160.7c0.4-0.1,0.9,0,1.3,0.1"/>
            <path class="st8" d="M62.5,161.2c0.5,0,1,0.1,1.6,0.2"/>
            <path class="st8" d="M65.7,161.8l1.7,0.2"/>
            <path class="st8" d="M68.5,162.3l1.3,0.2"/>
            <path class="st8" d="M71.2,162.8c0.5,0,1,0.1,1.6,0.3"/>
            <path class="st8" d="M74.1,163.1l1.5,0.1l0,0"/>
            <path class="st8" d="M77.2,163.8c0.5-0.1,1-0.1,1.6,0"/>
            <path class="st8" d="M80.2,164.4c0.4-0.1,0.9-0.1,1.3,0.1"/>
            <path class="st8" d="M82.9,164.9c0.5-0.1,1-0.1,1.5,0.1"/>
            <path class="st8" d="M85.7,165.5c0.4,0,0.8,0.1,1.2,0.1"/>
            <path class="st8" d="M88.1,165.9l1.7,0.3l0,0"/>
            <path class="st8" d="M91.3,166.7l1.6,0.2"/>
            <path class="st8" d="M94.2,167.4c0.5,0.1,1.1,0.2,1.6,0.5"/>
            <path class="st8" d="M97.2,168.5c0.5,0.2,0.9,0.5,1.4,0.8"/>
            <path class="st8" d="M99.7,170.1c0.5,0,0.9,0.6,1.5,0.8"/>
            <path class="st8" d="M102.4,171.8l1.3,1.1"/>
            <path class="st8" d="M105,174.1c0.4,0.4,0.8,0.8,1.2,1.2"/>
            <path class="st8" d="M107.2,176.6c0.4,0.3,0.8,0.7,1.1,1.2"/>
            <path class="st8" d="M109.3,179.3c0.3,0.4,0.6,0.9,0.7,1.4"/>
            <path class="st8" d="M110.1,181.7c0.1,0.4,0.1,0.8,0,1.2"/>
            <path class="st8" d="M56,157.1c0,0,16.4-4.2,20.1-7.5s2.1-5.4,2.1-5.4s7.5-5.2,10.4-6.9c2.7-1.6,10.1-7.1,11.8-8.3
                                 c4.5-3.1,8.3-7.9,10.7-12c1.8-3-6.7-2.4-6.7-2.4"/>
            <path class="st8" d="M93.9,53.6c0.2-0.7,0.5-1.3,0.9-1.9"/>
            <path class="st8" d="M95.3,51.1c0.1-0.5,0.4-1,0.8-1.3"/>
            <path class="st8" d="M97.1,49l1-1"/>
            <path class="st8" d="M99.1,47.3c0.3-0.4,0.7-0.8,1.2-1"/>
            <path class="st8" d="M101.3,45.8l1.2-1"/>
            <path class="st8" d="M116,95.1l-0.4-2.2"/>
            <path class="st8" d="M116.2,96.3c0.1,0.6,0.1,1.2,0.1,1.7"/>
            <path class="st8" d="M116.3,99.2c-0.1,0.7-0.2,1.3-0.3,1.9"/>
            <path class="st8" d="M115.9,102.3c-0.1,0.7-0.3,1.3-0.5,2"/>
            <path class="st8" d="M115.3,105.3c-0.1,0.6-0.3,1.2-0.6,1.8"/>
            <path class="st8" d="M114.4,108c-0.2,0.5-0.4,1-0.6,1.5"/>
            <path class="st8" d="M113.2,110.7l-0.7,1.3"/>
            <path class="st8" d="M112.1,112.8l-0.8,1.3"/>
            <path class="st8" d="M115.3,91.3l-0.3-2"/>
            <path class="st8" d="M114.9,87.8c-0.1-0.7-0.2-1.3-0.4-2"/>
            <path class="st8" d="M113.6,82.2c0.2,0.6,0.3,1.2,0.4,1.8"/>
            <path class="st8" d="M113.1,79.1c0,0.5,0.1,0.9,0.2,1.4v-0.1"/>
            <path class="st8" d="M112.2,76.3c0.1,0.5,0.3,1,0.4,1.5c0-0.1,0-0.1,0-0.2"/>
            <path class="st8" d="M111.5,73.2c0.1,0.5,0.2,1,0.4,1.5"/>
            <path class="st8" d="M110.7,70.4c0.1,0.6,0.3,1.1,0.4,1.7c0-0.1,0-0.1,0-0.2"/>
            <path class="st8" d="M110,67.5l0.4,1.7"/>
            <path class="st8" d="M109.3,64.5c0.1,0.6,0.2,1.1,0.4,1.6"/>
            <path class="st8" d="M108.6,61.6c0.1,0.5,0.2,1.1,0.3,1.6"/>
            <path class="st8" d="M108,58.7l0.4,1.6"/>
            <path class="st8" d="M107.2,56.3l0.4,1.5l-0.1-0.2"/>
            <path class="st8" d="M106.5,53.2l0.3,1.5"/>
            <path class="st8" d="M105.7,49.8c0.1,0.7,0.2,1.3,0.3,2"/>
            <path class="st8" d="M105.1,46.8l0.3,1.3"/>
            <path class="st8" d="M104.1,44c0.1,0.6,0.3,1.1,0.5,1.7"/>
            <g>
              <path class="st10 front-strap-1" d="M107.9,146c-14.8-12.6-21.8-13.5-21.8-13.5s-2.9-0.5-5.8,1c-5,2.5-4.4,4.1-4.4,4.1s7.5-1.3,23.6,12.8
                                                  c12.7,11,21.2,24.3,21.2,24.3l9.6-6C130.3,168.7,128.1,163.2,107.9,146z"/>
              <path class="st10 front-strap-2" d="M95.8,124c0,0,2.9-2.4,6.7-2.1c7.1,0.6,15.5,1.9,27.1,7.4c14.2,6.8,24,15.9,24,15.9s-5.5,5.9-6.1,6.8
                                                  c-0.4,0.6-6.4-9.1-23.3-16.1c-17.8-7.4-26.4-7.5-29.3-7.8C92,127.6,95.8,124.1,95.8,124L95.8,124z"/>
              <g>
                <g class="power-strap">
                  <path class="st7 top-edge" d="M104.7,102c0,0,6.2-5.1,24.2,2.4c16.4,6.8,24,9.3,29,15.1c0.5,0.6,0.8,1.6,0.8,1.6
                                                s-21.3-10.8-42.2-17.1C109.7,101.9,104.7,102,104.7,102z"/>
                  <path class="st7 strap" d="M104.8,101.9c0,0-1.6,0.7-2,3.8c-0.4,3.4-0.1,7.8-0.1,7.8s4.7,0.3,6.7,0.7c8.9,1.9,18.7,5.1,25.7,7.9
                                             c5.8,2.3,22.9,11.6,22.9,11.6s1.9-8,1.5-10.4c-0.3-1.7-0.8-2.4-0.8-2.4s-12.8-6.3-22.2-10c-5.8-2.3-14.6-6.6-24.2-8.2
                                             C110.5,102.3,104.8,101.9,104.8,101.9z"/>
                  <path class="st7 bottom-edge" d="M102.7,113.6c0,0,0.1,2.4,2.4,2.7s3.3,0.5,5.4,0.5c0.3,0,9.3,1.2,26.3,8.7c10.2,4.5,19.7,9.9,19.7,9.9
                                                   s1-0.1,1.5-1.7c0.5-1.7-21.8-11.5-23.9-12.1c-2.1-0.6-14.9-6.5-24.7-7.5C102.8,113.5,102.7,113.6,102.7,113.6z"/>
                </g>
                <g>
                  <g>
                    <path class="st8" d="M159.4,123.3c-0.3-1.7-0.8-2.4-0.8-2.4l0,0c-0.1-0.3-0.4-1-0.7-1.4c-5-5.8-12.6-8.3-29-15.1
                                         c-18-7.5-24.2-2.4-24.2-2.4l0,0c-0.6,0.3-1,0.7-1,0.7s-0.6,0.8-0.9,3.1c-0.5,3.1-0.2,7.1-0.1,7.7c0,0.1,0,0.2,0,0.2
                                         s0.1,2.4,2.4,2.7c2.4,0.4,3.3,0.5,5.4,0.5c0.3,0,9.3,1.2,26.3,8.7c10.2,4.5,19.7,9.9,19.7,9.9s1-0.1,1.5-1.7
                                         c0-0.1,0-0.1,0-0.2C158.1,132.9,159.8,125.6,159.4,123.3z"/>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g>
            <path class="st2 cuff" d="M114.6,62.1c0,0-0.6-6.6,3.2-10.9c3.4-3.9,19.8-7.8,31.8,0.8c17.1,12.2,12.3,27.3,17.1,35.3
                                      c4.2,6.9,10.7,21.8,14,16.3c2.5-4.1,5.5-12.4-5.1-22.1c-14.6-13.4-12.3-17.5-11-20.8c1.3-3.3,16,8.6,17.5,11.6
                                      s9.7,23.5,5.9,28.8c-3.7,5.1-3.8,1.3-4,6.1c-0.6,13.7-0.8,12.4-0.4,22.1c0.3,7.8,10.7,23.3,22.8,20c3.6-1,8,5.2,9.9,12.6
                                      c3.1,12.3-2.4,20.5-5.6,20.5c-3.2,0-114,2.2-114,2.2s17.4-3.8,28.3-11.5c12.3-8.6,22.9-21.1,29.8-33.5c0.9-1.5-0.2-3.3,0.6-5.5
                                      c2.8-7.8,3.7-14.6,4-21.2c0.3-5.7-0.1-13.1-3-17.7c-5.5-8.7-35.8-11.7-36.7-15.3C118.9,76.2,114.6,62,114.6,62.1L114.6,62.1z"
              />
            <path class="st5 cuff-inner-edge" d="M120,76.7c0,0-0.6,2.4,2,3.6c2.5,1.2,5.2,1.7,9.9,2.9c8.7,2.2,18.9,5.3,22.3,8.2c2.9,2.5,4.4,5.1,5,7.7
                                                 c0.9,3.6,1.4,6.3,1.3,11.7c-0.1,5-2.9,16.8-4.5,24.4c-0.6,2.9,4,6.4,4,6.4s-1.2-1.8-1.4-2.8c-0.2-0.9-0.8-1.6-0.4-5.1
                                                 c0.4-3.5,4-15.8,4.7-19.4c0.8-3.8,3.5-12.8,0.7-20.6c-2.2-6-6.4-8.1-13.3-10.1c-8-2.3-10.1-2.3-16.5-3.3
                                                 c-6.1-0.9-10.4-0.9-11.6-2.6s0.1-2.2-0.6-3c-0.5-0.5-1.5-0.2-1.5-0.2L120,76.7z"/>
            <path class="st10 cuff-spacing" d="M165.6,170.8c2.9-3.7,7.4-13,4.1-17.6c-3.4-4.6-27.4,10.5-34.1,16.9c-0.4,0.4-1.2,1.2-1.7,2.1
                                               s-0.6,1.9,0.5,2.4C136.7,175.8,162.7,174.5,165.6,170.8L165.6,170.8z"/>
            <path class="st10 cuff-spacing" d="M184.8,151.9c-6.1,0.9-7.2,6.6-7.8,9.8c-0.4,2.2-1.4,8.5,3.7,9.1s26.6,1.3,26.9-6.3
                                               C207.7,161.2,191.8,150.9,184.8,151.9L184.8,151.9z"/>
            <path d="M169.7,153.2l1.2,3.2l-0.7,4.9l-1.5,4.6l-3.4,5.4l-4.4,1.6c0,0-22.3,2.7-24.5,2.1c-2.2-0.6-2.8-1-2.2-1.3
                     c1.4-0.8,25.2-0.3,28.3-3.9c2.3-2.7,6.7-3.1,6.3-17.2L169.7,153.2L169.7,153.2z"/>
            <path d="M188.7,152.4l10.1,4.2l3.2,2.4l3.4,2.4l2.2,2.7l-0.8,2.4l-3.3,2.4l-8.5,2l-6.9,0.2l-7.3-0.2c0,0-3.9-2.1-2-2
                     c3.4,0.2,12.4,1.5,19,0.3c4.2-0.7,7.4-2.2,7.5-4.9c0.1-2.2-6.8-6.6-13.6-9.3c-3-1.2-6.2-2.7-8.3-2.6
                     C182.9,152.4,188.7,152.4,188.7,152.4L188.7,152.4z"/>
            <path class="st9" d="M118.4,74.7c0,0,3-0.7,3.6,0c0.8,1.1-1.1,3.2,3.3,4.4c3.7,1,31,2,37,11.2c6.4,10,1,23-3.4,41.8
                                 c-2.2,9.6,4.9,11.6,4.9,11.6"/>
            <path class="st8" d="M155.5,134c-0.9,4.2,5.1,10.8,11,9.8c5.9-1.1,7.6-1.9,9.9-3.4c2.7-1.8,7.3-5.9,7.2-11.2"/>
            <path d="M164.3,144.2c5.5,1.4,11-1.2,13.3-2.7c2.7-1.8,7.6-4.1,7.5-9.4c-0.1-5.3,0-14.1,0.3-18.4c0.1-1.8-0.2-6.3,0.4-8.1
                     c0.3-1,2-3.1,2-3.1l-3.6,2.3l-0.4,12.5l-0.3,12.7c0,0-0.3,2.7-0.7,3.5c-3.5,6.8-9.8,8.6-9.8,8.6L164.3,144.2L164.3,144.2z"/>
            <g class="top-buckle">
              <path class="st10 outer" d="M119,57.8c0,0,3,15.5,4.9,17.7c1.9,2.3,27.8-1.2,29.4-1.7s8.1-20.8,5.3-23.2S119,57.8,119,57.8z"/>
              <path class="inner" d="M129.9,60.3c0,0,1.7,9,2.8,10.3c1.1,1.3,16.1-0.7,17-1s4.7-12.1,3.1-13.5C151.3,54.8,130,60.3,129.9,60.3L129.9,60.3z
                                     "/>
              <path class="st10 strap" d="M92.9,72.7l2.8,7.6c0.5,1.2,1.7,2,2.8,1.8l19.7-4.1c0.7-0.2,1.2-0.7,1.3-1.5l0.5-3.9
                                          c0.1-0.7,0.6-1.3,1.2-1.5l18.9-5.3c0.5-0.1,0.8-0.5,1.1-0.9l0.1-0.3c0.4-0.8,0.2-1.9-0.5-2.7l0,0c-0.6-0.7-1.4-1.1-2.2-0.9
                                          l-18.3,3.3c-0.6,0.1-1.3-0.1-1.8-0.6l-2.9-2.3c-0.7-0.6-1.5-0.7-2.2-0.4l-19.7,9C92.8,70.5,92.5,71.6,92.9,72.7L92.9,72.7z"/>
            </g>

            <ellipse class="st11 cuff-screw" transform="matrix(0.9254 -0.379 0.379 0.9254 -37.5076 73.8846)" cx="168.9" cy="132.2" rx="6.1" ry="7.5"/>
            <path d="M164.5,135.8c1.3,1.3,2,2.7,4.7,2.7c0.8,0,3.2-0.2,4-1.6c2-3.1,2-11.5-6.4-11.5c-1.3,0,2.4-0.9,4.3,0.2
                     c1.3,0.8,2.6,2.2,3.2,3.6c1.1,2.5,0.8,5.6,0.7,6.3c-0.7,2.6-2.5,3.1-2.5,3.1l-5.2,0.5C167.3,139.2,163.6,134.9,164.5,135.8
                     L164.5,135.8z"/>
            <path class="st10" d="M94.5,71.8c1.1,3,2.2,6.1,3.3,9.1"/>
            <path class="st10" d="M108.1,65.3c1.1,4.1,2,8.3,2.7,12.5"/>
            <path class="st10" d="M106.4,66.1c1.1,3.8,2,8.3,2.9,12.1"/>
            <path class="st10" d="M104.5,66.7c1,3.7,2.1,8.2,3.3,11.9"/>
            <path class="st10" d="M102.7,67.5c1.1,3.7,2.4,8.1,3.6,11.8"/>
            <path class="st10" d="M101,68.7c1,3.5,2.2,7.5,3.4,10.9"/>
            <path class="st10" d="M99.2,69.6c0.9,3.4,2.3,7.3,3.5,10.6"/>
            <path class="st10" d="M97.6,70.4c1,3.4,2,6.4,3.4,9.7"/>
            <path class="st10" d="M96,71c1,3.1,2.1,6.2,3.5,9.7"/>
            <path d="M172.4,78.7l7.1,9.5c0,0,2.2,2,1.8,6.3s-1.3,9.1-3.6,8.1s-3.2-2.5-4.3-4.3s3.6,5.6,3.6,5.6l3.2,0.7l1.5-2.7l1-3.8
                     l0.3-3.2l-0.4-3.6l-3.6-6.5L172.4,78.7L172.4,78.7z"/>
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>