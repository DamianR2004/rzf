<script>
    import { bouwrijkLogo, clijfLogo, codeblauwLogo, contentLogo, donaldosLogo, hippoLogo, ilsatLogo, intercheeseLogo, jumpretailLogo, lawinedesignLogo, leenbakkerLogo, mboamersfoortLogo, noaberLogo, plenekantoorinrichtingLogo, pwrLogo, steetsLogo, studiovoorhuisLogo, thermocetLogo, troubadourLogo, vanuffelenLogo, vikingliftenLogo, vmeLogo } from "$lib/index.js";
</script>

<section id="opdrachtgevers">
    <h2>Opdrachtgevers</h2>

    <div class="carousel">
    <ul class="group">
        <li><img src={bouwrijkLogo} alt="f1"></li>
        <li><img src={clijfLogo} alt="f2"></li>
        <li><img src={codeblauwLogo} alt="f3"></li>
        <li><img src={contentLogo} alt="f4"></li>
        <li><img src={donaldosLogo} alt="f5"></li>
        <li><img src={hippoLogo} alt="f6"></li>
        <li><img src={ilsatLogo} alt="f7"></li>
        <li><img src={intercheeseLogo} alt="f8"></li>
        <li><img src={jumpretailLogo} alt="f9"></li>
        <li><img src={lawinedesignLogo} alt="f10"></li>
        <li><img src={leenbakkerLogo} alt="f11"></li>
    </ul>
    <ul class="group">
        <li><img src={bouwrijkLogo} alt="f1"></li>
        <li><img src={clijfLogo} alt="f2"></li>
        <li><img src={codeblauwLogo} alt="f3"></li>
        <li><img src={contentLogo} alt="f4"></li>
        <li><img src={donaldosLogo} alt="f5"></li>
        <li><img src={hippoLogo} alt="f6"></li>
        <li><img src={ilsatLogo} alt="f7"></li>
        <li><img src={intercheeseLogo} alt="f8"></li>
        <li><img src={jumpretailLogo} alt="f9"></li>
        <li><img src={lawinedesignLogo} alt="f10"></li>
        <li><img src={leenbakkerLogo} alt="f11"></li>
    </ul>
    </div>

    <div class="carousel">
    <ul class="grouptwo">
        <li><img src={mboamersfoortLogo} alt="f12"></li>
        <li><img src={noaberLogo} alt="f13"></li>
        <li><img src={plenekantoorinrichtingLogo} alt="f14"></li>
        <li><img src={pwrLogo} alt="f15"></li>
        <li><img src={steetsLogo} alt="f16"></li>
        <li><img src={studiovoorhuisLogo} alt="f17"></li>
        <li><img src={thermocetLogo} alt="f18"></li>
        <li><img src={troubadourLogo} alt="f19"></li>
        <li><img src={vanuffelenLogo} alt="f20"></li>
        <li><img src={vikingliftenLogo} alt="f21"></li>
        <li><img src={vmeLogo} alt="f22"></li>
    </ul>
    <ul class="grouptwo">
        <li><img src={mboamersfoortLogo} alt="f12"></li>
        <li><img src={noaberLogo} alt="f13"></li>
        <li><img src={plenekantoorinrichtingLogo} alt="f14"></li>
        <li><img src={pwrLogo} alt="f15"></li>
        <li><img src={steetsLogo} alt="f16"></li>
        <li><img src={studiovoorhuisLogo} alt="f17"></li>
        <li><img src={thermocetLogo} alt="f18"></li>
        <li><img src={troubadourLogo} alt="f19"></li>
        <li><img src={vanuffelenLogo} alt="f20"></li>
        <li><img src={vikingliftenLogo} alt="f21"></li>
        <li><img src={vmeLogo} alt="f22"></li>
    </ul>
    </div>
</section>

<style>
.carousel {
    max-width: 100%;
    display: flex;
    overflow: hidden;
}
.carousel::-webkit-scrollbar {
    display: none;
}   
.group, .grouptwo{
    display: flex;
    list-style-type: none;
    align-items: center;
    justify-content: center;
    gap: 1em;
    animation: spin 45s linear infinite;
    padding-right: 1em;
    margin: 0;
    padding: 0;
}

.grouptwo{
    animation: spin2 50s linear infinite;
}

li{
    padding-right: 4em;
    align-content: center;
}

@keyframes spin{
    from { translate: 0; }
    to { translate: -100%; }
}

@keyframes spin2{
    from { translate: -100%; }
    to { translate: 0%; }
}
</style>