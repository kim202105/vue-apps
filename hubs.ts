
import hubsTest1 from './src/apps/Testing/HubsTest1/hubs'
import hubsTest2 from './src/apps/Testing/HubsTest2/hubs'

import PortalTitle from './src/apps/Portal/PortalTitle/hubs'
import PortalSubtitle from './src/apps/Portal/PortalSubtitle/hubs'

import Map from './src/apps/Center_Map/hubs'
import Center1 from './src/apps/Center1_Intro/hubs'
import Center2 from './src/apps/Center2_History/hubs'
import Center3 from './src/apps/Center3_3D-Tracking/hubs'
import Center4 from './src/apps/Center4_Presence/hubs'
import Center5 from './src/apps/Center5_Genres/hubs'
import Center6 from './src/apps/Center6_Future/hubs'
import Center7 from './src/apps/Center7_Privacy/hubs'
import Monolith1 from './src/apps/Monolith1_Intro/hubs'
import Monolith2 from './src/apps/Monolith2_History/hubs'
import Monolith3 from './src/apps/Monolith3_3D-Tracking/hubs'
import Monolith4 from './src/apps/Monolith4_Presence/hubs'
import Monolith5 from './src/apps/Monolith5_Genres/hubs'
import Monolith6 from './src/apps/Monolith6_Future/hubs'
import Monolith7 from './src/apps/Monolith7_Privacy/hubs'
import Alyx from './src/apps/Room5/Alyx/hubs'
import Pokemon from './src/apps/Room5/Pokemon/hubs'
import BeatSaber from './src/apps/Room5/BeatSaber/hubs'
import WalkingDead from './src/apps/Room5/WalkingDead/hubs'
import Apparizione from './src/apps/Room5/Apparizione/hubs'
import Minecraft from './src/apps/Room5/Minecraft/hubs'
import GamesBanner from './src/apps/Room5/GamesBanner/hubs'
import ArtBanner from './src/apps/Room5/ArtBanner/hubs'
import {initializeEthereal, systemTick} from './src/apps/HubsApp'

//JP
import ARandPresence from './src/apps/Room6/ARandPresence/hubs'
import Aura from './src/apps/Room6/Aura/hubs'
import cybersickness from './src/apps/Room6/cybersickness/hubs'
import Empathy from './src/apps/Room6/Empathy/hubs'
import Empathy_title from './src/apps/Room6/Empathy_title/hubs'

import Presence_map from './src/apps/Room6/map/hubs'

import Milk from './src/apps/Room6/Milk/hubs'
import Milk_pic from './src/apps/Room6/Milk_pic/hubs'
import Nonnie from './src/apps/Room6/Nonnie/hubs'
import Nonnie_pic from './src/apps/Room6/Nonnie_pic/hubs'

import PitExperiment from './src/apps/Room6/PitExperiment/hubs'
import Pit_pic from './src/apps/Room6/Pit_pic/hubs'

import Presence from './src/apps/Room6/Presence/hubs'
import Treehugger from './src/apps/Room6/Treehugger/hubs'
import Treehugger_pic from './src/apps/Room6/Treehugger_pic/hubs'
import Exit from './src/apps/Room6/Exit/hubs'

import Parthenon from './src/apps/Room6/Parthenon/hubs'
import TerracottaPic from './src/apps/Room6/TerracottaPic/hubs'
import Terracotta from './src/apps/Room6/Terracotta/hubs'
import Treehuggerpic2 from './src/apps/Room6/TreehuggerPic2/hubs'


//Pit
import Pit from './src/apps/Room_Pit/Pit/hubs'
import PitInstruction from './src/apps/Room_Pit/PitInstruction/hubs'
import pitSign1 from './src/apps/Room_Pit/pitSign1/hubs'
import pitSign2 from './src/apps/Room_Pit/pitSign2/hubs'

//Onboarding Room
import Welcome from './src/apps/Onboarding/Welcome/hubs'
import MitPress from './src/apps/Onboarding/MitPress/hubs'
import HubsPlatform from './src/apps/Onboarding/HubsPlatform/hubs'
import HubsFeatures from './src/apps/Onboarding/HubsFeatures/hubs'
import AudioText from './src/apps/Onboarding/AudioText/hubs'

export {
    // for updating ethereal once per tick
    systemTick, initializeEthereal,

    // Rotunda
    Map, Center1, Center2, Center3, Center4, Center5, Center6, Center7, Monolith1, Monolith2, Monolith3, Monolith4, Monolith5, Monolith6, Monolith7,
    Alyx, Pokemon, BeatSaber, WalkingDead, Minecraft, Apparizione, GamesBanner, ArtBanner, Milk, Nonnie, Treehugger, Presence, Empathy, Aura, Pit, PitInstruction, pitSign1,pitSign2, PitExperiment,ARandPresence, cybersickness, Presence_map, Milk_pic, Empathy_title, Nonnie_pic, Treehugger_pic, Pit_pic,Exit, Welcome, MitPress, HubsPlatform, HubsFeatures, AudioText, Parthenon, Terracotta, TerracottaPic, Treehuggerpic2,

    // Portal titles
    PortalTitle, PortalSubtitle,
    // Tests
    hubsTest1, hubsTest2}



// need to wait until we have some reasonable performance optimizations
// such as shadow dom support for Ethereal
//   import hubsRevealTest from './src/apps/HubsRevealTest/hubs.js'

// if (THREE.Object3D.applyMatrix4) {
//     THREE.Object3D.prototype.applyMatrix4 = function(matrix ) {
// 		if ( this.matrixAutoUpdate ) this.updateMatrix();
// 		this.matrix.premultiply( matrix );
// 		this.matrix.decompose( this.position, this.quaternion, this.scale )
// 	}
// }