import React from "react";

function Product2() {
  return (
    <section>
      <h1>The Altered Lands</h1>

      {/* Video Trailer */}
      <div className="video-container">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/Hp5WrbeO5L8"
          title="The Altered Lands Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Links */}
      <div className="product-links">
        <a href="https://store.steampowered.com/app/1634940/The_Altered_Lands/" target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
        <a href="https://github.com/alteredlands" target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
      
{/* Description */}
<h2>Description</h2>
<p>
  This was my very first game released in early access. While development eventually ended 
  due to low revenue and the overwhelming scope of work—writing stories, creating animations, 
  and designing enemy models—it remains a project I’m proud of. From a technical standpoint, 
  it falls short of the quality of my later title <i>Raise Your Tribe</i>, but it was a valuable 
  learning experience and an important milestone in my growth as a developer.
</p>

<p><strong>Pros:</strong></p>
<ul>
  <li>Large variety of mechanics, levels, and systems.</li>
  <li>Learned extensively about game programming and the publishing process.</li>
  <li>Most core gameplay mechanics were programmed by me.</li>
</ul>

<p><strong>Cons:</strong></p>
<ul>
  <li>Bugs and limited playtesting.</li>
  <li>Scope was too large for a solo developer.</li>
  <li>Ultimately an unfinished product.</li>
</ul>

<p><strong>Implemented Mechanics:</strong></p>
<ul>
  <li><b>Combat:</b> Advanced systems for sword, shield, gun, spear, and bow.</li>
  <li><b>Progression:</b> Level & experience system, talent tree, and abilities.</li>
  <li><b>Gameplay Systems:</b> Inventory, quests, dialog, dungeons, boss fights, <b>stealth system</b>.</li>
  <li><b>World Features:</b> Multiple enemy types, diverse maps, crafting, shops.</li>
  <li><b>Multiplayer:</b> Experimental PvP mode.</li>
  <li><b>Essentials:</b> Main menu, settings, save/load, etc.</li>
</ul>

<p>
  This project taught me the importance of <b>scoping appropriately</b>, 
  <b>prioritizing polish over feature quantity</b>, and <b>playtesting early</b>. 
  Despite its challenges, it was a huge step in my journey as a developer and laid the groundwork 
  for my more polished projects.
</p>
    </section>
  );
}

export default Product2;