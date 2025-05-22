<!-- The image imports required for the article -->
<script lang="ts">
  import wheelRotation1324 from "$lib/assets/images/1-3-and-2-4-wheel-rotation.gif";
  import wheelRotation4123 from "$lib/assets/images/4-1-2-3-wheel-rotation.gif";
  import hiLoRotation from "$lib/assets/images/rotation-for-hi-lo-rocker.gif";
  import bananaHiLoRotation from "$lib/assets/images/rotation-for-banana-hi-lo-rocker.gif";
  import wheelStack from "$lib/assets/images/wheel-stack.gif";
  import wheelStackWithNewWheels from "$lib/assets/images/wheel-stack-with-new-wheels.gif";
  import wheelWearShapes from "$lib/assets/images/wheel-wear-shapes.gif";

  // The url to the rockering article
  const rockeringUrl = "./rockering";

  // The url for the flat setup
  const flatSetupUrl = `${rockeringUrl}#what-is-rockering`;

  // The url for the hi lo setup
  const hiLoSetupUrl = `${rockeringUrl}#hi-lo-rocker`;

  // The url for the banana hi lo setup
  const bananaHiLoSetupUrl = `${rockeringUrl}#banana-hi-lo-rocker`;

  // The url for the anti rocker setup
  const antiRockerSetupUrl = `${rockeringUrl}#anti-rocker`;
</script>

<!-- The headers for the wheel rotation article -->
<svelte:head>
  <title>Wheel rotation - Inline Skate Info</title>
  <meta
    name="description"
    content="How to rotate your wheels in inline skating"
  />
</svelte:head>

<main class="page-wrapper">
  <h1 id="wheel-rotation">Wheel rotation</h1>

  <section>
    <h2 id="why-rotate-your-wheels">Why rotate your wheels?</h2>
    <p>
      Wheel rotation is a method of prolonging the life of your wheels. As you
      start wearing down your wheels from prolonged use of your skates, you will
      notice that your wheels do not wear down evenly. Usually, your wheels will
      wear more on your stronger foot than on the weaker one, more on the inside
      than on the outside thanks to using stopping techniques like T-stop and
      power slide, and more towards the front if you are a beginner or
      intermediate skater. Rotating your wheels evens out this wear pattern,
      which extends the life of your wheels and saving your money. Unevenly worn
      wheels can also cause inconsistent and weird behaviour from your skates,
      which can be dangerous, especially when urban skating.
    </p>
  </section>

  <section>
    <h2 id="wheel-wear">Wheel wear</h2>
    <div class="image-wrapper">
      <img alt="Wheel wear shapes" src={wheelWearShapes} />
    </div>
    <p>The above image shows the 4 categories of wheel wear.</p>
    <ul>
      <li>
        <b>A:</b> A perfectly new and unworn wheel. There is no need for any wheel
        rotation.
      </li>
      <li>
        <b>B and C:</b> Uneven wheel wear. These urgently need to be rotated.
      </li>
      <li>
        <b>D:</b> These wheels are beyond saving, and should be replaced entirely.
        You might find that your skates behave very differently after these wheels
        get replaced.
      </li>
    </ul>
  </section>

  <section>
    <h2 id="frequency-of-wheel-rotation">Frequency of wheel rotation</h2>
    <p>
      There is no fixed rule for how frequent you should be rotating your
      wheels, as it depends on a lot of different factors. Some factors include:
    </p>

    <ul>
      <li>Hardness of wheels you are using.</li>
      <li>
        The type of skating you do, as urban skating and performing slides will
        wear your wheels out more than doing slalom tricks.
      </li>
      <li>The surface you are skating on.</li>
      <li>How often you skate.</li>
      <li>The distance you skate.</li>
      <li>Your skating style.</li>
      <li>Your weight.</li>
    </ul>

    <p>
      To keep it simple, the general rule of thumb is to rotate your wheels when
      your wheels look asymmetrical. Ideally, you should check your wheels at
      the end of your skate sessions. Rotate your wheels before you put your
      skates away if they look worn and asymmetrical, so you will have your
      skates ready to go the next time you need to use them.
    </p>
  </section>

  <section>
    <h2 id="wheel-rotation-for-a-flat-setup">
      Wheel rotation for a <a href={flatSetupUrl}>flat setup</a>
    </h2>
    <div class="two-images-wrapper">
      <img alt="1-3 and 2-4 wheel rotation" src={wheelRotation1324} />
      <img alt="4-1-2-3 wheel rotation" src={wheelRotation4123} />
    </div>

    <p>
      The image on the left shows the classic 1-3 and 2-4 wheel rotation, which
      is a great place to start to even out wheel wear. Ensure that you always
      turn the worn side (the angled side) towards the outside of your skates
      when you put the wheel into its new position.
    </p>

    <p>
      The image on the right shows the 4-1-2-3 wheel rotation, which you should
      alternate with the classic 1-3 and 2-4 wheel rotation to ensure that your
      wheels last as long as possible.
    </p>

    <p>
      If your wheels are beyond saving or are too small, purchase a new set of 8
      wheels in one go and replace the old wheels with the new ones. Most of the
      time, your new set of wheels should come with bearings. If they don't,
      then move the bearings from your old wheels to the new ones. While doing
      so, ensure that you don't lose any bearings or spacers, or any other part
      for that matter, but especially the spacers, as your wheels will wobble
      more and make funky sounds without them.
    </p>
  </section>

  <section>
    <h2 id="wheel-rotation-for-hi-lo-setups">
      Wheel rotation for Hi Lo setups
    </h2>

    <p>
      The wheel rotation strategies below will extend the life span of your
      wheels, but will change the behaviour of your skates as they result in the <a
        href={hiLoSetupUrl}>Hi Lo setup</a
      >
      and the <a href={bananaHiLoSetupUrl}>Banana Hi Lo setup</a> respectively. The
      transition will be gradual if you start from a flat setup, giving you time
      to adapt to the new behaviour of your skates.
    </p>

    <section>
      <h3 id="reordering-your-wheels">Reordering your wheels</h3>
      <div class="two-images-wrapper">
        <img alt="Original wheel stack" src={wheelStack} />
        <img alt="Wheel stack with new wheels" src={wheelStackWithNewWheels} />
      </div>

      <p>
        Before you start rotating your wheels for the Hi Lo setups, your wheels
        need to be reordered. For this, take out all the wheels from your
        skates, and then order them by size, as shown in the image on the left.
        If you can't decide which wheel is bigger by simply looking at them, no
        need to break out the ruler or the calipers, just put them side by side.
        This should take a minute at most, not hours.
      </p>

      <p>
        If you find the smallest wheels getting too small, or if they start
        'coring', which is when the polyurethane starts peeling away from the
        core of the wheel, then discard the two smallest wheels and add two new
        wheels to the end of the stack, as shown in the image on the right. Make
        sure to move the bearings and spacers to the new wheels if they don't
        come with any, otherwise, just save them for a rainy day.
      </p>

      <p>
        If the smallest wheels are broken, throw them away, or use them in <a
          href={antiRockerSetupUrl}>an anti rocker setup</a
        > as the central two wheels. Otherwise, measure them and write the current
        size on them, and place them into a bag of spare wheels for special occasions
        or specific setups.
      </p>

      <p>
        The diagrams in the following section assume that your right foot is
        stronger than your left, so the wheels on the right skate will be a
        touch bigger than the ones on the left. If you are left-footed, simply
        reverse the left-right pattern for the correct effect.
      </p>
    </section>

    <section>
      <h3 id="hi-lo-setup"><a href={hiLoSetupUrl}>Hi Lo setup</a></h3>
      <div class="image-wrapper">
        <img alt="Wheel rotation for Hi Lo setup" src={hiLoRotation} />
      </div>

      <p>
        Once you are done reordering your wheels, distribute them as shown above
        for the <a href={hiLoSetupUrl}>Hi Lo setup</a>.
      </p>
    </section>

    <section>
      <h3 id="banana-hi-lo-setup">
        <a href={bananaHiLoSetupUrl}>Banana Hi Lo setup</a>
      </h3>
      <div class="image-wrapper">
        <img
          alt="Wheel rotation for Banana Hi Lo setup"
          src={bananaHiLoRotation}
        />
      </div>

      <p>
        Alternatively, when you are done reordering your wheels, you can
        distribute them as shown above for the <a href={bananaHiLoSetupUrl}
          >Banana Hi Lo setup</a
        >.
      </p>
    </section>
  </section>

  <section>
    <h2 id="practical-advice">Practical advice</h2>
    <ul>
      <li>
        Depending on the type of your frames and axles, you may need either one
        or two Allen keys. Skates from Seba most likely require two Allen keys,
        one called the frame key for the frame, and the other for the axles.
        These should come with your skate, but if you have misplaced them, you
        can use standard Allen keys in your toolbox, buy them from hardware
        stores, or use those provided by IKEA.
      </li>
      <li>
        Be very careful to not lose any parts, and hold on to anything you are
        taking out, be it axles, bolts, or spacers, you will need them again in
        the future.
      </li>
      <li>
        If you have a brake on your skate, look out for the longer axle. That
        axle must go back in the same place.
      </li>
      <li>
        If you are changing wheels, make sure you move all the bearings and
        spacers before you throw the wheels out. If your new wheels already
        comes with bearings and spacers, make sure to salvage and store the
        bearings and spacers from the old wheels, and save them for a rainy day,
        you never know when you might need them.
      </li>
    </ul>
  </section>

  <section>
    <h2 id="references">References</h2>
    <ul>
      <li>
        <a
          href="https://skating.thierstein.net/Knowledge/Inline_Skating_Rollerblading_Information_Wheel_rotation.html"
          >Thierstein</a
        >
        (<a
          href="https://web.archive.org/web/20250206201359/https://skating.thierstein.net/Knowledge/Inline_Skating_Rollerblading_Information_Wheel_rotation.html"
          >Internet Archive</a
        >,
        <a href="https://archive.ph/6yRL0">Archive Today</a>)
      </li>
    </ul>
  </section>
</main>

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

  .two-images-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  section:not(:nth-child(2)) {
    margin-top: 5em;
  }

  section:has(#references) {
    margin: 5em 0;
  }
</style>
