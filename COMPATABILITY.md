<!DOCTYPE html>
<html>
<head>
<title>CABIN --- Addon Mods</title>
<style>
body {
    width: min(1080px, 100% - 30px);
    margin-inline: auto;
    font-family: 'Nunito Sans', 'Open Sans', Arial, sans-serif;
}
p {
    margin-top: 2px;
    margin-bottom: 2px;
}
p + p {
    margin-top: 12px;
}
a {
    text-decoration: none;
    color: #50B0fF;
}
a:hover {
    text-decoration: underline;
}
@media (prefers-color-scheme: light) {
  a {
    color: #1070e0;
  }
}
h2 {
    margin-top:50px;
}
td {
  border-top: 1px solid black;
}
.compat-scripted, .compat-scripted-AaB, .compat-nonscripted, .compat-specialcase, .compat-incompatible {
    text-align: center;
    font-weight: 900;
    min-width: 50px;
    height: 30px;
}
.compat-scripted {
    background-color: #008000;
    color: white
}
.compat-nonscripted {
    background-color: #3a66c8;
    color: white
}
.compat-specialcase {
    background-color: #f19222;
    color: white
}
.compat-incompatible {
    background-color: #ff0000;
    color: white
}
</style>
</head>

<body>
<h1> Addon Mods (AKA Optional Compats)</h1>
<p>To spice up your runs, you can add any of the following mods to your <code>minecraft/mods</code> folder for their recipes and config files to be automatically altered for compatibility with CABIN. If there is a mod that you think could fit on this list, feel free to make a PR.</p>
<table>
  <tr>
    <th><p>Key</p></th>
    <th><p>Info</p></th>
  </tr>
  <tr>
    <td class="compat-scripted"><p>SC</p></td>
    <td><p>Has explicit scripted compatability</p></td>
  </tr>
  <tr>
    <td class="compat-nonscripted">NSC</td>
    <td><p>Does not have scripted compatability, but the default recipes lets it fit in the progression line</p></td>
  </tr>
  <tr>
    <td class="compat-specialcase"><p>*</p></td>
    <td><p>Special case, read notes</p></td>
  </tr>
</table>

<h2>Compatible Mods</h2>
<table>
  <tr>
    <th><p>Mod</p></th>
    <th><p>Status</p></th>
    <th><p>Notes</p></th>
  </tr>
  <!--<tr>
    <td><p><a href="https://curseforge.com/projects/688768">Create Enchantment Industry</a></p></td>
    <td class="compat-scripted"><p>SC</p></td>
    <td>
        <p>Create: Enchantment Industry is a mod that adds ways to automate enchanting into Create. It adds blocks that can automatically enchant and disenchant items using liquid experience.</p>
    </td>
  </tr>-->
  <tr>
    <td><p><a href="https://curseforge.com/projects/815548">Integrated Strongholds</a></p></td>
    <td class="compat-specialcase"><p>*SC</p></td>
    <td>
    <p><b>Remove Yung's Better Strongholds if you're using this mod.</b></p>
    <p>The Integrated Strongholds mod overhauls strongholds into a massive dungeon that makes use of blocks from Create, Supplementaries, and Quark. We've decided against including this mod in the base pack because its heavy focus on puzzles and lore, however, if that sounds like something you're interested in, consider giving this mod a try.</p>
    </td>
  </tr>
  <tr>
    <td><p><a href="https://curseforge.com/projects/581495">Oculus</a></p></td>
    <td class="compat-scripted"><p>SC</p></td>
    <td>
    <p><b>Don't let your mod launcher install Rubidium alongside it, the pack aleady includes Embeddium which is a forked version of Rubidium with more features.</b></p>
    <p>Isn't in the base pack currently due to uncertainty around its performance with Create/Flywheel 6. May cause lag with massive factories</p>
    </td>
  </tr>
</table>

<!--<h2>Other Compatible Mods</h2>
<table>
  <tr>
    <th><p>Mod</p></th>
    <th><p>Status</p></th>
    <th><p>Notes</p></th>
  </tr>
  <tr>
    <td><p>Forbidden and Arcanus</p></td>
    <td class="compat-specialcase"><p>*SC</p></td>
    <td><p>Cut from CABIN because it didn't fit well into the pack. It's compatability script is incomplete and needs to be updated for 1.20</p></td>
  </tr>
</table>-->

</body>
</html>