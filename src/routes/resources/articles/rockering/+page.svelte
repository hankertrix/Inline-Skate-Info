<!-- The image imports required for the article -->
<script lang="ts">
  import flatRocker from "$lib/assets/images/flat-rocker.gif";
  import bananaRocker from "$lib/assets/images/banana-rocker.gif";
  import antiRocker from "$lib/assets/images/anti-rocker.gif";
  import frontRocker from "$lib/assets/images/front-rocker.gif";
  import hiLoRocker from "$lib/assets/images/hi-lo-rocker.gif";
  import bananaHiLoRocker from "$lib/assets/images/banana-hi-lo-rocker.gif";
  import salomonFskEaRocker from "$lib/assets/images/salomon-fsk-ea-rocker.gif";

  // The wheel rotation article url
  const wheelRotationUrl = "./wheel-rotation";
</script>

<!-- The headers for the rockering article -->
<svelte:head>
  <title>Rockering - Inline Skate Info</title>
  <meta name="description" content="Rockering in inline skating" />
</svelte:head>

<main class="page-wrapper">
  <h1 id="rockering">Rockering</h1>

  <section>
    <h2 id="what-is-rockering">What is rockering?</h2>
    <p>
      Most skates are sold with what is called a 'flat' setup, which means all
      wheels have the same size, and are touching the ground. The main point of
      the flat setup is to have all the wheels touch the ground at all times.
    </p>
    <p>
      This is a stable setup that suits most beginners and occasional
      recreational skaters, providing good balance, speed and stability, but
      limits manoeuvrability a little. This setup is the easiest to control when
      practicing slides.
    </p>
    <div class="image-wrapper">
      <img alt="Flat rocker setup" src={flatRocker} />
    </div>
  </section>

  <section>
    <h2 id="why-rocker-your-skates">Why rocker your skates?</h2>
    <p>
      Rockering changes the way your skates behave in specific situations. A
      specific type of rocker makes some things much easier, while making some
      other things much more difficult. There are tradeoffs to every single
      rocker type, including the flat setup, but each of them have a specific
      use case.
    </p>
    <p>
      Think of rockering like customising your equipment to suit the activity
      that you want to do. For example, if you are going to the beach, you would
      be happy to wear slippers or sandals, but you would not want to wear
      slippers when attending a work conference. The same principles apply to
      rockering for skating, and it is a part of setting up your skates to fit
      your situation and your needs.
    </p>
  </section>

  <section class="rockering-setups">
    <h2 id="rockering-setups">Rockering setups</h2>

    <section>
      <h3 id="banana-rocker">Banana rocker (Full rocker)</h3>
      <div class="image-wrapper">
        <img alt="Banana rocker setup" src={bananaRocker} />
      </div>
      <p>
        The banana rocker, also known as the full rocker or the slalom rocker,
        is probably the rocker type that you will see most often, especially if
        you are part of an inline skating club. Usually, the first and last
        wheels are raised 1 to 2mm above the centre two wheels. This can be done
        by having different wheel sizes, flipping the axle around on a
        rockerable frame, or having a frame that is already set up to have a
        banana rocker, which is common on skates made for slalom.
      </p>
      <p>
        This setup is mainly used for slalom, as it provides an incredible
        amount of manoeuvrability. It is extremely easy to change direction with
        this setup, and most slalom tricks are only possible with this setup. It
        may take some getting used to when coming from a flat setup, as turns
        are far quicker.
      </p>
      <p>
        However, you lose a lot of stability with this setup, as you are only
        skating with 2 wheels at all times. This setup is not very suitable for
        skating at high speeds, like skating down a hill or long slope, as the
        speed wobbles caused by the instability can be quite difficult to deal
        with and can take quite a while to get used to. You also lose some
        stopping power on stopping tricks like the T-stop or the power slide,
        since there are fewer points of contact with the ground. You will also
        need to be mindful of the wheel wear when stopping, and will
        occasionally need to T-stop using just the front or back wheel to ensure
        the rocker is maintained, otherwise the wheel wear can cause the setup
        to revert back to a flat setup.
      </p>

      <section>
        <h4 id="banana-rocker-benefits">Benefits</h4>
        <ul>
          <li>Extremely easy to manoeuvre.</li>
          <li>Most slalom tricks are only possible with this setup.</li>
        </ul>
        <h4 id="banana-rocker-downsides">Downsides</h4>
        <ul>
          <li>Low stability.</li>
          <li>
            Slides are extremely difficult to control and often feel unstable.
          </li>
          <li>
            Speed wobbles at high speeds, which can make urban skating
            dangerous.
          </li>
          <li>Reduced stopping power on stopping tricks.</li>
          <li>
            Need to be mindful of wheel wear, and to wear out the wheels evenly
            when using stopping tricks to ensure the setup is maintained.
          </li>
        </ul>
      </section>
    </section>

    <section>
      <h3 id="anti-rocker">Anti rocker (Inverse rocker)</h3>
      <div class="image-wrapper">
        <img alt="Anti rocker setup" src={antiRocker} />
      </div>

      <p>
        The anti rocker, also known as the inverse rocker, is probably the next
        most common rocker type after the banana rocker. Typically, the middle
        two wheels are far smaller than the first and last wheels, usually with
        sizes of 40 - 50mm. Some skaters will even use wheel cores or hard
        plastic wheels in place of proper urethane wheels, and some may even
        just remove the centre two wheels entirely, leaving only the axle, as
        there is no need for the wheels to rotate since it does not touch the
        ground. This is not recommended, as it can cause the frame to bend
        inwards and make it impossible to place wheels in the centre two
        positions.
      </p>

      <p>
        This setup is mainly used for slides, as it retains the stability of the
        flat setup, while reducing the number of contact points with the ground
        from 4 to 2, reducing friction and making sliding much easier. It also
        has a side effect of forcing you to execute slides properly, without
        carving into the slide, as it is almost impossible to turn using a
        parallel turn on this setup.
      </p>

      <p>
        Aggressive skates also use this setup, as the tiny wheels in the two
        central positions allow aggressive skates to have a larger H-block to
        grind on rails and ledges. They also usually come with the central two
        wheels being made out of hard plastic to make it easier to do grinds.
      </p>

      <p>
        However, you lose a lot of manoeuvrability with this setup, and it is
        almost impossible to do a parallel turn with such a setup. The only way
        to turn is to do crossover turns. As such, this setup is not very
        suitable for beginners who have yet to learn crossover turns. This setup
        also results in more wheel wear in the two wheels that are touching the
        ground, while making stopping tricks like T-stop and power slide less
        effective due to the reduced number of contact points with the ground.
      </p>

      <p>
        Such a setup also performs poorly on undulating terrain, as the tiny
        central wheels tend to follow the undulations in the terrain, resulting
        in a very unstable skating experience. You should try to avoid
        broadwalks made of uneven or bent wooden planks when using this setup.
      </p>

      <section>
        <h4 id="anti-rocker-benefits">Benefits</h4>
        <ul>
          <li>Same amount of stability as the flat setup.</li>
          <li>
            Fewer points of contact with the ground resulting in less friction
            and easier slides.
          </li>
          <li>
            Easier grinds due to larger H-block and easier access to the frame
            for aggressive skates.
          </li>
        </ul>
        <h4 id="anti-rocker-downsides">Downsides</h4>
        <ul>
          <li>
            Nearly impossible to turn using parallel turns, hence crossover
            turns are required.
          </li>
          <li>
            Nigh impossible to do most slalom tricks with this setup. You are a
            God if you can do them smoothly and cleanly.
          </li>
          <li>
            Increased wheel wear on the two wheels that are touching the ground.
          </li>
          <li>Reduced stopping power on stopping tricks.</li>
          <li>
            Performs poorly and feels very unstable on undulating terrain.
          </li>
          <li>Not beginner friendly.</li>
        </ul>
      </section>
    </section>

    <section>
      <h3 id="front-rocker">Front rocker</h3>
      <div class="image-wrapper">
        <img alt="Front rocker setup" src={frontRocker} />
      </div>

      <p>
        The front rocker is probably the next most common type of rocker. The
        front rocker is a less extreme version of the banana rocker, with only
        the front wheel being smaller than the rest of the wheels instead of
        both the front and back wheels, resulting in either 2 or 3 wheels
        touching the ground at all times.
      </p>
      <p>
        Usually, this is achieved by using a smaller wheel size for the front
        wheel, or flipping the front wheel axle on a rockerable frame. For a
        frame that is already rockered, you will most likely need to use 76mm
        wheels for the front 3 wheels, and a 80mm wheel for the last wheel. If
        you can somehow find 84mm wheels, you can use 80mm wheels for the front
        3 wheels instead and use a 84mm wheel for the back wheel to achieve this
        setup.
      </p>

      <p>
        This setup is not usually used to perform any tricks, as it doesn't
        provide as much manoeuvrability as the full banana rocker, making slalom
        tricks more difficult, while also offering reduced stability compared to
        the flat and anti rocker setups, making slides more difficult.
      </p>
      <p>
        This setup is often used by urban skaters who are more experienced and
        want more manoeuvrability in exchange for reduced stability. This setup
        is far more stable than the banana rocker, with a far higher speed
        required for speed wobbles to occur, and it is much easier to turn using
        a parallel turn compared to the flat setup.
      </p>
      <p>
        Experienced skaters who have been skating for a long time may also find
        that their wheel wears into the front rocker, as it is very common to
        place more weight on the front wheel than the back wheel, causing the
        front wheel to wear out faster, resulting in the front rocker setup.
      </p>

      <section>
        <h4 id="front-rocker-benefits">Benefits</h4>
        <ul>
          <li>Increased manoeuvrability compared to the flat setup.</li>
          <li>Most slalom tricks would be easier to do.</li>
        </ul>
        <h4 id="front-rocker-downsides">Downsides</h4>
        <ul>
          <li>
            Slightly less stable than a flat setup, but still plenty stable.
          </li>
          <li>Slides are less controllable, but still feel pretty stable.</li>
        </ul>
      </section>
    </section>

    <section>
      <h3 id="hi-lo-rocker">Hi Lo rocker</h3>
      <div class="image-wrapper">
        <img alt="Hi Lo rocker setup" src={hiLoRocker} />
      </div>

      <p>
        The Hi Lo rocker setup is one of the rarer rocker setups, unless you
        play inline hockey. This is mostly because it is one of the more
        difficult rocker setups to get wheels for, since it requires 4 different
        wheel sizes that are all a set size apart. Hi Lo wheels, which are sets
        of 4 wheels that are sized perfectly for the Hi Lo rocker setup, are
        also more expensive and more difficult to obtain compared to regular
        wheels. It is essentially a flat setup, but with your feet angled
        downwards slightly.
      </p>
      <p>
        This setup is mostly used for playing inline hockey, as you want to
        perpetually in a sprint position to be ready to quickly react to any
        situation. This perpetual sprint position also helps if you find
        yourself constantly falling backwards, since your weight is shifted to
        the front automatically with this setup. It is also slightly easier to
        manoeuvre, but not as much as the front rocker setup, as it is slightly
        easier to lift up the smaller front wheels compared to larger wheels.
        This setup is also decent for sliding, as the wheels are just in a flat
        setup, but it may take some adjustments and some getting used to when
        coming from the flat setup, as your body's weight is now slightly
        further ahead than in the flat setup.
      </p>
      <p>
        However, you lose a little bit of stability due to the front wheels
        being smaller and easier to lift up, causing them to lose contact with
        the ground more often, especially on uneven surfaces. But this stability
        loss is very minimal, and is quite a lot less than the front rocker
        setup. The main issue with this setup is the smaller overall wheel size,
        which slightly reduces your top speed as smaller wheels have lower
        moment of inertia, causing you to lose speed faster than larger wheels.
      </p>

      <p>
        Some skaters may find that the way they skate may result in their wheels
        wearing into this rocker type, but this is quite uncommon. Most skaters
        will usually wear their wheels into the front rocker or the banana
        rocker configuration.
      </p>

      <section>
        <h4 id="hi-lo-rocker-benefits">Benefits</h4>
        <ul>
          <li>Slightly better manoeuvrability than the flat setup.</li>
          <li>
            Slides are about as easy as the flat setup to perform, just
            requiring a bit of adjustment to the weight placement.
          </li>
          <li>
            Helps with leaning backwards too much due to the body weight being
            shifted forward, but most experienced skaters should not have this
            issue anyway.
          </li>
        </ul>
        <h4 id="hi-lo-rocker-downsides">Downsides</h4>
        <ul>
          <li>
            Very difficult and expensive to set up due to requiring 4 different
            wheel sizes that are a set size apart.
          </li>
          <li>
            Very slight loss in stability, but it is almost as stable as the
            flat setup in most cases.
          </li>
          <li>
            Slightly reduced top speed due to the smaller overall wheel size.
          </li>
        </ul>
      </section>
    </section>

    <section>
      <h3 id="banana-hi-lo-rocker">Banana Hi Lo rocker (Full Hi Lo rocker)</h3>

      <div class="image-wrapper">
        <img alt="Banana Hi Lo rocker setup" src={bananaHiLoRocker} />
      </div>

      <p>
        The banana Hi Lo rocker, also known as the full Hi Lo rocker, is
        possibly the rarest rocker setup, as it is even more difficult and
        expensive to obtain wheels for this setup than the Hi Lo rocker, which
        is already difficult due to needing wheels that are a set size apart.
        Most of the time, this setup is the result of <a href={wheelRotationUrl}
          >wheel rotation</a
        > and wheel wear.
      </p>

      <p>
        This setup is mostly used by people who already have a Hi Lo rocker and
        want to do slalom, as it provides a similar amount of manoeuvrability as
        the banana rocker, if not slightly more, as it is possible to be on just
        one central wheel. It makes slalom tricks much smoother, as the wheels
        of different sizes smooth over the transitions when lifting the toe or
        the heel of the skates. It also places your ankles and knees into a more
        natural position and makes intricate footwork easier.
      </p>

      <p>
        However, it decreases your stability slightly more than a banana rocker,
        as it is much easier to skate on just one wheel due to the central
        wheels not being of the same size, which increases the chance of speed
        wobbles when skating at high speeds. You also lose a similar amount of
        stopping power on stopping tricks like the T-stop or the power slide as
        the banana rocker, or maybe slightly more due to the higher chance of
        just using one wheel. Similarly, you will also need to be mindful of the
        wheel wear when stopping, and will occasionally need to T-stop using the
        front or the back wheel to ensure the rocker is maintained, otherwise
        the wheel wear can cause the setup to revert back to a flat setup.
      </p>

      <section>
        <h4 id="banana-hi-lo-rocker-benefits">Benefits</h4>
        <ul>
          <li>
            Extremely easy to manoeuvre, even more so than the banana rocker. It
            is the rocker setup that provides the most manoeuvrability.
          </li>
          <li>
            Most slalom tricks are easier and smoother with this setup, even
            when compared to the banana rocker.
          </li>
        </ul>
        <h4 id="banana-hi-lo-rocker-downsides">Downsides</h4>
        <ul>
          <li>
            Low stability, even less than that of the banana rocker. It is the
            rocker setup that provides the least stability.
          </li>
          <li>Slides are nigh impossible to control and feel very unstable.</li>
          <li>
            Speed wobbles at high speeds, which can make urban skating
            dangerous.
          </li>
          <li>Reduced stopping power on stopping tricks.</li>
          <li>
            Need to be mindful of wheel wear, and to wear out the wheels evenly
            when using stopping tricks to ensure the setup is maintained.
          </li>
        </ul>
      </section>
    </section>

    <section>
      <h3 id="natural-rocker">Natural rocker</h3>

      <p>
        The natural rocker is not a proper type of rocker, but rather a term
        used to describe the rocker that develops after prolonged use of your
        skates in a flat setup. This is also the kind of rocker that skaters
        refer to when they want to 'break in' their skates to make them more
        comfortable to skate with.
      </p>

      <p>
        The natural rocker differs for everyone, as everyone skates differently
        and has their own style, resulting in different rates of wear for each
        wheel. However, the most common rocker type that develops naturally is
        the front rocker, usually with the front wheel rockered about 1mm above
        the other wheels.
      </p>

      <p>
        The next most common rocker type that develops naturally is the banana
        rocker, usually with the front and back wheels rockered about 1mm above
        the other wheels. This is the rocker type that wizard skaters refer to
        when talking about the natural rocker. Most wizard frames have what they
        call a 'natural rocker', which is just having the front and back wheels
        rockered 1mm above the other wheels, so that you have the feeling of
        this specific kind natural rocker all the time, even with new wheels.
      </p>

      <p>
        Lastly, perhaps the rarest kind of rocker type to develop naturally is
        the Hi Lo rocker. Most skaters don't naturally develop this rocker type
        after prolonged use of their skates, and usually have to make use of <a
          href={wheelRotationUrl}>wheel rotation</a
        > to achieve this setup. Despite this, it is still definitely possible to
        develop this rocker setup naturally by using your skates, but it probably
        takes a skating style that places more weight on the front of the skate than
        on the back of the skate.
      </p>
    </section>
  </section>

  <section>
    <h2 id="rockered-frames">Rockered frames (Pre-rockered frames)</h2>
    <div class="image-wrapper">
      <img alt="Salomon FSK EA Rockered Frame" src={salomonFskEaRocker} />
    </div>

    <p>
      Rockered frames are frames that already come rockered with a specific type
      of rocker, usually the banana rocker. The frame shown in the image above
      is the Salomon FSK EA frame, which is not rockered with the banana rocker,
      but is instead rockered with what Salomon calls a Hi Lo rocker. However,
      it is in fact a flat setup with 80mm wheels on the back 2 wheels, and 76mm
      wheels on the front 2 wheels, and not a Hi Lo rocker. To make the setup an
      actual Hi Lo rocker, you will need a 80mm wheel on the back wheel, 78mm
      wheel on the third wheel, 72mm wheel on the second wheel, and a 70mm wheel
      on the front wheel. Using the same sized wheels for all wheels would
      result in a weird reverse Hi Lo (Lo Hi) rocker setup that would feel
      really weird to skate.
    </p>
  </section>

  <section>
    <h2 id="references">References</h2>
    <ul>
      <li>
        <a
          href="https://skating.thierstein.net/Knowledge/Inline_Skating_Rollerblading_Knowledge_Rockering.html"
          >Thierstein</a
        >
        (<a
          href="https://web.archive.org/web/20241202100850/https://skating.thierstein.net/Knowledge/Inline_Skating_Rollerblading_Knowledge_Rockering.html"
          >Internet Archive</a
        >,
        <a href="https://archive.ph/ptfL7">Archive Today</a>)
      </li>
    </ul>
  </section>
</main>

<!-- The styles for the page -->
<style>
  main {
    margin: var(--page-margin);
  }

  h1 {
    font-family: Oleo Script;
  }

  .image-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  section:not(:nth-child(2)):has(h2) {
    margin-top: 5em;
  }

  section.rockering-setups > section:not(:nth-child(2)):has(h3) {
    margin-top: 3em;
  }

  section:has(#references) {
    margin: 5em 0;
  }
</style>
