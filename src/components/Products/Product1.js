import React from "react";

function Product1() {
  return (
    <section>
      {/* Product Title */}
      <h1>Raise Your Tribe</h1>

      {/* Video Trailer */}
      <div className="video-container">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/2SHHNybAP74"
          title="Raise Your Tribe Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Links */}
      <div className="product-links">
        <a
          href="https://store.steampowered.com/app/1908530/Raise_Your_Tribe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </a>
        <a
          href="https://github.com/raiseyourtribe"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </div>

      {/* Description */}
      <h2>Description</h2>
      <p>
        <strong>Raise Your Tribe</strong> is a massive and ambitious project that I dedicated approximately 3.5 years to developing. 
        Technically, it’s highly challenging due to its multiplayer features and the sheer number of mechanics implemented.
      </p>
      <p>
        <strong>Pros:</strong>
      </p>
      <ul>
        <li>Large-scale multiplayer game with a vast number of mechanics coded entirely by me.</li>
        <li>The only systems I did not personally code are Ultra Dynamic Sky, Shader Compiler (startup screen), Subsystem, and the Vaulting System.</li>
        <li>Extensive experience gained in C++, Blueprints, multiplayer programming, and project management.</li>
      </ul>
      <p>
        <strong>Cons:</strong>
      </p>
      <ul>
        <li>Despite multiple public playtests, the game still contains minor bugs.</li>
        <li>The game may feel somewhat generic and is often compared to titles like <em>Sons of the Forest</em>, <em>S.T.A.L.K.E.R. 2</em>, <em>Rust</em>, and <em>DayZ</em>, but naturally falls short due to being a solo project without budget or funding.</li>
      </ul>
      <p>
        <strong>Key Mechanics:</strong>
      </p>
      <ul>
        <li>Full inventory system</li>
        <li>Advanced building system</li>
        <li>Comprehensive weapon mechanics: melee, tools, bows, crossbows, pistols, rifles, SMGs, shotguns, snipers, spears, etc.</li>
        <li>Weapon attachment system</li>
        <li>Fishing system</li>
        <li>Multiple crafting systems: smelting, cooking, basic crafting, making interactable planks and firewood, repairing tools, blacksmithing</li>
        <li>Level and experience system with unlockable craftable items</li>
        <li>Professions system</li>
        <li>Shopkeepers</li>
        <li>Diverse enemy AI types including bosses, shooters, and melee enemies</li>
        <li>Quest system with advanced dialogue options</li>
        <li>Map and compass system</li>
        <li>Vehicle system for cars, bikes, and helicopters</li>
        <li>Learning item blueprints from existing items</li>
        <li>Extensive looting system with multiple variations</li>
        <li>Radiation system</li>
        <li>Turret system</li>
        <li>Electricity system: lamps, generators, windmills, watermills, solar panels, etc.</li>
        <li>Mining and forest harvesting with respawn mechanics</li>
        <li>Cyber implant system</li>
        <li>Procedural animations and realistic weapon recoil</li>
        <li>Main menu and other UIs with key remapping and full game settings</li>
        <li>Character creator</li>
        <li>Football mini-game</li>
        <li>Slot machine mini-game with realistic odds</li>
        <li>Swimming and diving system</li>
        <li>Clothing and stats system with multiple stat types</li>
        <li>Cyberware abilities: Directional Dash, Forward Attack Dash, Bullet Deflection with Katanas, Grappling Hook, Hand Missile Launcher, Boulder Throw</li>
      </ul>
      <p>
        The game also includes many additional mechanics and systems such as doors, elevators, and more. All systems are designed to function seamlessly in single-player, multiplayer, and online environments. Development was done entirely in C++ and Blueprints. I continue to develop <strong>Raise Your Tribe</strong> at a relaxed, hobbyist pace.
      </p>
    </section>
  );
}

export default Product1;