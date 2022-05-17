import React from "react";
import "./About.css"

function About() {
    return (
        <div id="about">
            <div className="our-mission">
                <h2>Our Mission</h2>
                <p>CommunityJar is the perfect tool for people who want to use money as an incentive to challenge themselves or for people who want to plan an experience by saving money with your friends and family.</p>
            </div>
            <div className="challenge-yourself">
                <img src="challenge-yourself.png" alt="challenge-yourself-img" />
                <h3>Challenge Yourself</h3>
                <p>Set a new goal and hold yourself accountable by inviting members to your CommunityJar. Set a realistic withdrawal amount, withdrawal frequency, and cash-out frequency. Failure to complete the challenge means your accountability partners receive the cash-out. Complete the challenge, and you lose nothing!</p>
            </div>
            <div className="plan-experience">
                <img src="plan-experience.png" alt="plan-experience-img" />
                <h3>Plan an Experience</h3>
                <p>Invite members to your CommunityJar and save for an awesome trip, concert, festival, etc! Set a monetary goal, withdrawal amount, and withdrawal frequency, and watch as your funds for that experience grow!</p>
            </div>
        </div>
    )
};

export default About;