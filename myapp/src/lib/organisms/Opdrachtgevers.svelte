<script>
    import { bouwrijkLogo, clijfLogo, codeblauwLogo, contentLogo, donaldosLogo, hippoLogo, ilsatLogo, intercheeseLogo, jumpretailLogo, lawinedesignLogo, leenbakkerLogo, mboamersfoortLogo, noaberLogo, plenekantoorinrichtingLogo, pwrLogo, steetsLogo, studiovoorhuisLogo, thermocetLogo, troubadourLogo, vanuffelenLogo, vikingliftenLogo, vmeLogo } from "$lib/index.js";
</script>

<section>
    <h2>Opdrachtgevers</h2>

    <div class="carousel">
    <ul class="group">
        <li><img src={bouwrijkLogo} alt=""></li>
        <li><img src={clijfLogo} alt=""></li>
        <li><img src={codeblauwLogo} alt=""></li>
        <li><img src={contentLogo} alt=""></li>
        <li><img src={donaldosLogo} alt=""></li>
        <li><img src={hippoLogo} alt=""></li>
        <li><img src={ilsatLogo} alt=""></li>
        <li><img src={intercheeseLogo} alt=""></li>
        <li><img src={jumpretailLogo} alt=""></li>
        <li><img src={lawinedesignLogo} alt=""></li>
        <li><img src={leenbakkerLogo} alt=""></li>
    </ul>
    <ul class="group">
        <li><img src={bouwrijkLogo} alt=""></li>
        <li><img src={clijfLogo} alt=""></li>
        <li><img src={codeblauwLogo} alt=""></li>
        <li><img src={contentLogo} alt=""></li>
        <li><img src={donaldosLogo} alt=""></li>
        <li><img src={hippoLogo} alt=""></li>
        <li><img src={ilsatLogo} alt=""></li>
        <li><img src={intercheeseLogo} alt=""></li>
        <li><img src={jumpretailLogo} alt=""></li>
        <li><img src={lawinedesignLogo} alt=""></li>
        <li><img src={leenbakkerLogo} alt=""></li>
    </ul>
    </div>

    <div class="carousel">
    <ul class="grouptwo">
        <li><img src={mboamersfoortLogo} alt=""></li>
        <li><img src={noaberLogo} alt=""></li>
        <li><img src={plenekantoorinrichtingLogo} alt=""></li>
        <li><img src={pwrLogo} alt=""></li>
        <li><img src={steetsLogo} alt=""></li>
        <li><img src={studiovoorhuisLogo} alt=""></li>
        <li><img src={thermocetLogo} alt=""></li>
        <li><img src={troubadourLogo} alt=""></li>
        <li><img src={vanuffelenLogo} alt=""></li>
        <li><img src={vikingliftenLogo} alt=""></li>
        <li><img src={vmeLogo} alt=""></li>
    </ul>
    <ul class="grouptwo">
        <li><img src={mboamersfoortLogo} alt=""></li>
        <li><img src={noaberLogo} alt=""></li>
        <li><img src={plenekantoorinrichtingLogo} alt=""></li>
        <li><img src={pwrLogo} alt=""></li>
        <li><img src={steetsLogo} alt=""></li>
        <li><img src={studiovoorhuisLogo} alt=""></li>
        <li><img src={thermocetLogo} alt=""></li>
        <li><img src={troubadourLogo} alt=""></li>
        <li><img src={vanuffelenLogo} alt=""></li>
        <li><img src={vikingliftenLogo} alt=""></li>
        <li><img src={vmeLogo} alt=""></li>
    </ul>
    </div>
</section>

<style>

section{
    overflow: hidden;
    padding: 5% 0;
}

.carousel {
    max-width: 100%;
    display: flex;
    overflow: hidden;
    gap: 4em;
}
.carousel::-webkit-scrollbar {
    display: none;
}   
.group, .grouptwo{
    display: flex;
    list-style-type: none;
    align-items: center;
    justify-content: center;
    gap: 4em;
    animation: spin 45s linear infinite;
    margin: 0;
    padding: 0;
}

.grouptwo{
    animation: spin2 50s linear infinite;
}

li{
    align-content: center;
    gap: 1em;
    justify-content: center;
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