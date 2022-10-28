import React from "react";

import DignityIntro from "../components/dignityIntro.jsx";
import DignitySlider from "../components/dignitySlider.jsx";
import DignityCards from "../components/dignityCards.jsx";
import DignityMeet from "../components/dignityMeet.jsx";
import DignitySpeakers from "../components/dignitySpeakers.jsx";
import DignityInvite from "../components/dignityInvite.jsx";

export default function Dignity() {

    return(
        <section>
            <div><p>Check</p></div>
            <DignityIntro />
            <DignitySlider />
            <DignityCards />
            <DignityMeet />
            <DignitySpeakers />
            <DignityInvite />
        </section>
    )
}
