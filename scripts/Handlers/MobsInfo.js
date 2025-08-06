class MobsInfo{


    constructor()
    {
        this.moblist = {};
    }

    addItem(id, tier, type, loc)
    {
        if (!this.moblist[id])
        {
            this.moblist[id] = [];
        }
    
        this.moblist[id][0] = tier;
        this.moblist[id][1] = type;
        this.moblist[id][2] = loc;
    }

    initMobs()
    {
        //#region Hide    
        // Mountains
        this.addItem(455, 1, EnemyType.LivingSkinnable, "hide"); // rabbit
        
        // Steppe biome
        this.addItem(436, 3, EnemyType.LivingSkinnable, "hide"); // Moabird
        this.addItem(538, 4, EnemyType.LivingSkinnable, "hide"); // Cougar
        this.addItem(438, 4, EnemyType.LivingSkinnable, "hide"); // Giant stag
        this.addItem(440, 5, EnemyType.LivingSkinnable, "hide"); // Terrorbird
        this.addItem(442, 6, EnemyType.LivingSkinnable, "hide"); // Hyena
        this.addItem(444, 7, EnemyType.LivingSkinnable, "hide"); // Rhino

        // Steppe biome treasure

        // Highland
        this.addItem(456, 1, EnemyType.LivingSkinnable, "hide"); // Marmot

        // Forest biome 
        this.addItem(402, 4, EnemyType.LivingSkinnable, "hide"); // Boar
        this.addItem(404, 5, EnemyType.LivingSkinnable, "hide"); // Bear

        // Forest biome treasure

        // Swamp biome
        this.addItem(423, 3, EnemyType.LivingSkinnable, "hide"); // toad
        this.addItem(425, 4, EnemyType.LivingSkinnable, "hide"); // salamander
        this.addItem(427, 5, EnemyType.LivingSkinnable, "hide"); // snake

        // Swamp biome treasure

        // Roads 

        // Mists yellow 
        this.addItem(370, 2, EnemyType.LivingSkinnable, "hide"); // fox
        this.addItem(371, 3, EnemyType.LivingSkinnable, "hide"); // Doe

        // Mists black common
        this.addItem(369, 1, EnemyType.LivingSkinnable, "hide");
        this.addItem(372, 4, EnemyType.LivingSkinnable, "hide"); // HART
        this.addItem(373, 5, EnemyType.LivingSkinnable, "hide"); // OWL
        this.addItem(374, 6, EnemyType.LivingSkinnable, "hide"); // Wolfhound
        // Mists epic
        this.addItem(375, 7, EnemyType.LivingSkinnable, "hide"); // Mauler
        
        // Cougars
        this.addItem(537, 3, EnemyType.LivingSkinnable, "hide"); // Cougar
        this.addItem(538, 4, EnemyType.LivingSkinnable, "hide"); // Cougar
        this.addItem(539, 5, EnemyType.LivingSkinnable, "hide"); // Cougar
        this.addItem(573, 4, EnemyType.LivingSkinnable, "hide"); // Cougar
        this.addItem(574, 5, EnemyType.LivingSkinnable, "hide"); // Cougar
        this.addItem(575, 6, EnemyType.LivingSkinnable, "hide"); // Cougar
        this.addItem(576, 7, EnemyType.LivingSkinnable, "hide"); // Cougar
        this.addItem(577, 8, EnemyType.LivingSkinnable, "hide"); // Cougar

        // Treasure Mists

        //#endregion

        //#region Logs
        // Forest +25
        this.addItem(557, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(487, 7, EnemyType.LivingHarvestable, "Logs");

        // Roads
        this.addItem(588, 4, EnemyType.LivingHarvestable, "Logs");
        this.addItem(589, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(590, 6, EnemyType.LivingHarvestable, "Logs");

        // Mists
        this.addItem(648, 3, EnemyType.LivingHarvestable, "Logs");
        this.addItem(649, 4, EnemyType.LivingHarvestable, "Logs");
        this.addItem(650, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(651, 6, EnemyType.LivingHarvestable, "Logs");
        // Mists rare map
        this.addItem(672, 3, EnemyType.LivingHarvestable, "Logs");
        this.addItem(673, 4, EnemyType.LivingHarvestable, "Logs");
        this.addItem(674, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(675, 6, EnemyType.LivingHarvestable, "Logs");
        this.addItem(676, 7, EnemyType.LivingHarvestable, "Logs");
        // Mists epic map
        this.addItem(697, 4, EnemyType.LivingHarvestable, "Logs");
        this.addItem(698, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(699, 6, EnemyType.LivingHarvestable, "Logs");
        this.addItem(700, 7, EnemyType.LivingHarvestable, "Logs");
        this.addItem(701, 8, EnemyType.LivingHarvestable, "Logs");
        //#endregion

        //#region Rock
        // Highland +25
        this.addItem(563, 3, EnemyType.LivingHarvestable, "rock");
        this.addItem(564, 3, EnemyType.LivingHarvestable, "rock");
        this.addItem(566, 4, EnemyType.LivingHarvestable, "rock");
        this.addItem(567, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(569, 5, EnemyType.LivingHarvestable, "rock");

        // Roads 
        this.addItem(604, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(605, 6, EnemyType.LivingHarvestable, "rock");

        // Mists Commom
        this.addItem(654, 3, EnemyType.LivingHarvestable, "rock");
        this.addItem(655, 4, EnemyType.LivingHarvestable, "rock");
        this.addItem(656, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(657, 6, EnemyType.LivingHarvestable, "rock");
        // Mists Rare
        this.addItem(678, 3, EnemyType.LivingHarvestable, "rock");
        this.addItem(679, 4, EnemyType.LivingHarvestable, "rock");
        this.addItem(680, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(681, 6, EnemyType.LivingHarvestable, "rock");
        this.addItem(682, 7, EnemyType.LivingHarvestable, "rock");
        // Mists Epic, 
        this.addItem(695, 4, EnemyType.LivingHarvestable, "rock");
        this.addItem(696, 5, EnemyType.LivingHarvestable, "rock");
        // Mists legendary
        this.addItem(702, 3, EnemyType.LivingHarvestable, "rock");
        this.addItem(703, 4, EnemyType.LivingHarvestable, "rock");
        this.addItem(704, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(705, 6, EnemyType.LivingHarvestable, "rock");
        this.addItem(706, 7, EnemyType.LivingHarvestable, "rock");
        this.addItem(707, 8, EnemyType.LivingHarvestable, "rock");        

        //#endregion

        //#region Ore
        // Mountain +25
        this.addItem(544, 3, EnemyType.LivingHarvestable, "ore");
        this.addItem(546, 4, EnemyType.LivingHarvestable, "ore");
        this.addItem(547, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(549, 6, EnemyType.LivingHarvestable, "ore");
       
        // Roads
        this.addItem(619, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(620, 6, EnemyType.LivingHarvestable, "ore");

        // Mists
        this.addItem(660, 3, EnemyType.LivingHarvestable, "ore");
        this.addItem(661, 4, EnemyType.LivingHarvestable, "ore");
        this.addItem(662, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(663, 6, EnemyType.LivingHarvestable, "ore");
        this.addItem(664, 7, EnemyType.LivingHarvestable, "ore");
        // Mists rare
        this.addItem(684, 3, EnemyType.LivingHarvestable, "ore");
        this.addItem(685, 4, EnemyType.LivingHarvestable, "ore");
        this.addItem(686, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(687, 6, EnemyType.LivingHarvestable, "ore");
        this.addItem(688, 7, EnemyType.LivingHarvestable, "ore");
        // Mists epic
        this.addItem(709, 4, EnemyType.LivingHarvestable, "ore");
        this.addItem(710, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(711, 6, EnemyType.LivingHarvestable, "ore");
        this.addItem(712, 7, EnemyType.LivingHarvestable, "ore");
        this.addItem(713, 8, EnemyType.LivingHarvestable, "ore");
        // Mists legendary
        this.addItem(708, 6, EnemyType.LivingHarvestable, "ore");

        // Aspects
        this.addItem(767, 6, EnemyType.LivingHarvestable, "ore");
        
        //#endregion

        //#region Fiber
        // Swamp
        this.addItem(528, 3, EnemyType.LivingHarvestable, "fiber");
        this.addItem(530, 4, EnemyType.LivingHarvestable, "fiber");
        this.addItem(531, 5, EnemyType.LivingHarvestable, "fiber");
        this.addItem(533, 6, EnemyType.LivingHarvestable, "fiber");

        this.addItem(472, 3, EnemyType.LivingHarvestable, "fiber");
        this.addItem(473, 5, EnemyType.LivingHarvestable, "fiber");
        this.addItem(474, 7, EnemyType.LivingHarvestable, "fiber");

        // Roads
        this.addItem(634, 5, EnemyType.LivingHarvestable, "fiber");
        this.addItem(635, 6, EnemyType.LivingHarvestable, "fiber");

        // Mists epic
        this.addItem(690, 3, EnemyType.LivingHarvestable, "fiber");
        this.addItem(691, 4, EnemyType.LivingHarvestable, "fiber");
        this.addItem(692, 5, EnemyType.LivingHarvestable, "fiber");
        this.addItem(693, 6, EnemyType.LivingHarvestable, "fiber");
         this.addItem(694, 7, EnemyType.LivingHarvestable, "fiber");
        // Mists legendary
        this.addItem(715, 4, EnemyType.LivingHarvestable, "fiber");
        this.addItem(717, 6, EnemyType.LivingHarvestable, "fiber");
        this.addItem(718, 7, EnemyType.LivingHarvestable, "fiber");
        this.addItem(719, 8, EnemyType.LivingHarvestable, "fiber");

        // Black mists common
        this.addItem(667, 4, EnemyType.LivingHarvestable, "fiber");
        this.addItem(668, 5, EnemyType.LivingHarvestable, "fiber");
        this.addItem(669, 6, EnemyType.LivingHarvestable, "fiber");

        //#endregion
        
        //#region Mist bosses
        
        // CRYSTALSPIDER <=> Tx_MOB_ARCANE_CRYSTALSPIDER_BOSS
        this.addItem(345, 5, EnemyType.MistBoss, "CRYSTALSPIDER");
        this.addItem(346, 6, EnemyType.MistBoss, "CRYSTALSPIDER");
        this.addItem(347, 7, EnemyType.MistBoss, "CRYSTALSPIDER");
        
        // Spider: Mists common, uncommon
        this.addItem(384, 6, EnemyType.MistBoss, "VEILWEAVER");

        // FAIRYDRAGON Mists epic
        this.addItem(388, 5, EnemyType.MistBoss, "FAIRYDRAGON");
        
        // GRIFFIN mists rare
        this.addItem(392, 4, EnemyType.MistBoss, "GRIFFIN");
        this.addItem(393, 5, EnemyType.MistBoss, "GRIFFIN");
        //#endregion
        
        
        // TODO
        // ADD ENEMIES
        //#region Enemies

        //#region Avalon
        //#region Drones
        //#region Avalon Drones Treasure
        // Standard
        this.addItem(907, 4, EnemyType.Drone, "AVALONMINIONCHEST");
        this.addItem(908, 5, EnemyType.Drone, "AVALONMINIONCHEST");
        this.addItem(909, 6, EnemyType.Drone, "AVALONMINIONCHEST");
        //#endregion
        /*
        // Worker
        this.addItem(791, 4, EnemyType.Drone, "");
        this.addItem(792, 6, EnemyType.Drone, "");
        this.addItem(793, 8, EnemyType.Drone, "");
        // Lamp
        this.addItem(794, 4, EnemyType.Drone, "");
        this.addItem(795, 6, EnemyType.Drone, "");
        this.addItem(796, 8, EnemyType.Drone, "");
        // Normal
        this.addItem(797, 4, EnemyType.Drone, "");
        this.addItem(798, 6, EnemyType.Drone, "");
        this.addItem(799, 8, EnemyType.Drone, "");
        // Scout
        this.addItem(800, 4, EnemyType.Drone, "");
        this.addItem(801, 6, EnemyType.Drone, "");
        this.addItem(802, 8, EnemyType.Drone, "");
        // Builder
        this.addItem(803, 4, EnemyType.Drone, "");
        this.addItem(804, 6, EnemyType.Drone, "");
        this.addItem(805, 8, EnemyType.Drone, "");
        //#endregion

        //#region Pikeman
        // Standard
        this.addItem(806, 4, EnemyType.Enemy, "");
        this.addItem(807, 6, EnemyType.Enemy, "");
        this.addItem(808, 8, EnemyType.Enemy, "");
        // Champion
        this.addItem(806, 4, EnemyType.EnchantedEnemy, "");
        this.addItem(807, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(808, 8, EnemyType.EnchantedEnemy, "");
        //#endregion
        
        //#region Monk
        // Standard
        this.addItem(812, 4, EnemyType.Enemy, "");
        this.addItem(813, 6, EnemyType.Enemy, "");
        this.addItem(814, 8, EnemyType.Enemy, "");
        // Champion
        this.addItem(815, 4, EnemyType.EnchantedEnemy, "");
        this.addItem(816, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(817, 8, EnemyType.EnchantedEnemy, "");
        //#endregion
        
        //#region Berserk
        // Mini Boss
        this.addItem(818, 4, EnemyType.MiniBoss, "");
        this.addItem(819, 6, EnemyType.MiniBoss, "");
        this.addItem(820, 8, EnemyType.MiniBoss, "");
        //#endregion
        
        //#region Knight
        // Standard
        this.addItem(821, 4, EnemyType.Boss, "");
        this.addItem(822, 6, EnemyType.Boss, "");
        this.addItem(823, 8, EnemyType.Boss, "");
        //#endregion

        //#region Bowman
        // Standard
        this.addItem(824, 4, EnemyType.Enemy, "");
        this.addItem(825, 6, EnemyType.Enemy, "");
        this.addItem(826, 8, EnemyType.Enemy, "");
        // Champion
        this.addItem(827, 4, EnemyType.EnchantedEnemy, "");
        this.addItem(828, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(829, 8, EnemyType.EnchantedEnemy, "");
        // Mini Boss
        this.addItem(830, 4, EnemyType.MiniBoss, "");
        this.addItem(831, 6, EnemyType.MiniBoss, "");
        this.addItem(832, 8, EnemyType.MiniBoss, "");
        // Boss
        this.addItem(833, 4, EnemyType.Boss, "");
        this.addItem(834, 6, EnemyType.Boss, "");
        this.addItem(835, 8, EnemyType.Boss, "");
        //#endregion

        //#region Wizard
        // Standard
        this.addItem(836, 4, EnemyType.Enemy, "");
        this.addItem(837, 6, EnemyType.Enemy, "");
        this.addItem(838, 8, EnemyType.Enemy, "");
        //#endregion

        //#region Cleric
        // Champion
        this.addItem(839, 4, EnemyType.EnchantedEnemy, "");
        this.addItem(840, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(841, 8, EnemyType.EnchantedEnemy, "");
        //#endregion

        //#region Mage
        // Standard
        this.addItem(842, 4, EnemyType.Enemy, "");
        this.addItem(843, 6, EnemyType.Enemy, "");
        this.addItem(844, 8, EnemyType.Enemy, "");
        // Champion
        this.addItem(845, 4, EnemyType.EnchantedEnemy, "");
        this.addItem(846, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(847, 8, EnemyType.EnchantedEnemy, "");
        // Mini Boss
        this.addItem(848, 4, EnemyType.MiniBoss, "");
        this.addItem(849, 6, EnemyType.MiniBoss, "");
        this.addItem(850, 8, EnemyType.MiniBoss, "");
        // Boss
        this.addItem(848, 4, EnemyType.Boss, "");
        this.addItem(849, 6, EnemyType.Boss, "");
        this.addItem(850, 8, EnemyType.Boss, "");
        //#endregion
        //#endregion

        //#region Heretic
        // Normal and camp are exactly the same, just id change 
        //#region Scavenger
        // Normal
        this.addItem(854, 3, EnemyType.Enemy, "");
        this.addItem(855, 5, EnemyType.Enemy, "");
        this.addItem(856, 6, EnemyType.Enemy, "");
        this.addItem(857, 7, EnemyType.Enemy, "");
        this.addItem(858, 8, EnemyType.Enemy, "");
        // Camp
        this.addItem(859, 5, EnemyType.Enemy, "");
        this.addItem(860, 6, EnemyType.Enemy, "");
        this.addItem(861, 7, EnemyType.Enemy, "");
        this.addItem(862, 8, EnemyType.Enemy, "");
        //#endregion
        
        //#region Woodgatherer
        // Normal
        this.addItem(863, 3, EnemyType.Enemy, "");
        this.addItem(864, 5, EnemyType.Enemy, "");
        this.addItem(865, 6, EnemyType.Enemy, "");
        this.addItem(866, 7, EnemyType.Enemy, "");
        this.addItem(867, 8, EnemyType.Enemy, "");
        // Camp
        this.addItem(868, 5, EnemyType.Enemy, "");
        this.addItem(869, 6, EnemyType.Enemy, "");
        this.addItem(870, 7, EnemyType.Enemy, "");
        this.addItem(871, 8, EnemyType.Enemy, "");
        //#endregion
        
        //#region Thief
        // Normal
        this.addItem(872, 3, EnemyType.Enemy, "");
        this.addItem(873, 5, EnemyType.Enemy, "");
        this.addItem(874, 6, EnemyType.Enemy, "");
        this.addItem(875, 7, EnemyType.Enemy, "");
        this.addItem(876, 8, EnemyType.Enemy, "");
        // Camp
        this.addItem(877, 5, EnemyType.Enemy, "");
        this.addItem(878, 6, EnemyType.Enemy, "");
        this.addItem(879, 7, EnemyType.Enemy, "");
        this.addItem(880, 8, EnemyType.Enemy, "");

        // Normal Champion
        this.addItem(881, 3, EnemyType.EnchantedEnemy, "");
        this.addItem(882, 5, EnemyType.EnchantedEnemy, "");
        this.addItem(883, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(884, 7, EnemyType.EnchantedEnemy, "");
        this.addItem(885, 8, EnemyType.EnchantedEnemy, "");
        // Camp Champion
        this.addItem(886, 5, EnemyType.EnchantedEnemy, "");
        this.addItem(887, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(888, 7, EnemyType.EnchantedEnemy, "");
        this.addItem(889, 8, EnemyType.EnchantedEnemy, "");

        // Normal Miniboss
        this.addItem(890, 3, EnemyType.MiniBoss, "");
        this.addItem(891, 5, EnemyType.MiniBoss, "");
        this.addItem(892, 6, EnemyType.MiniBoss, "");
        this.addItem(893, 7, EnemyType.MiniBoss, "");
        this.addItem(894, 8, EnemyType.MiniBoss, "");
        // Camp Miniboss
        this.addItem(895, 5, EnemyType.MiniBoss, "");
        this.addItem(896, 6, EnemyType.MiniBoss, "");
        this.addItem(897, 7, EnemyType.MiniBoss, "");
        this.addItem(898, 8, EnemyType.MiniBoss, "");
        //#endregion

        //#region Archer
        // Normal
        this.addItem(899, 3, EnemyType.Enemy, "");
        this.addItem(900, 5, EnemyType.Enemy, "");
        this.addItem(901, 6, EnemyType.Enemy, "");
        this.addItem(902, 7, EnemyType.Enemy, "");
        this.addItem(903, 8, EnemyType.Enemy, "");
        // Camp
        this.addItem(904, 5, EnemyType.Enemy, "");
        this.addItem(905, 6, EnemyType.Enemy, "");
        this.addItem(906, 7, EnemyType.Enemy, "");
        this.addItem(907, 8, EnemyType.Enemy, "");

        // Normal Champion
        this.addItem(908, 3, EnemyType.EnchantedEnemy, "");
        this.addItem(909, 5, EnemyType.EnchantedEnemy, "");
        this.addItem(910, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(911, 7, EnemyType.EnchantedEnemy, "");
        this.addItem(912, 8, EnemyType.EnchantedEnemy, "");
        // Camp Champion
        this.addItem(913, 5, EnemyType.EnchantedEnemy, "");
        this.addItem(914, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(915, 7, EnemyType.EnchantedEnemy, "");
        this.addItem(916, 8, EnemyType.EnchantedEnemy, "");

        // Normal Miniboss
        this.addItem(917, 3, EnemyType.MiniBoss, "");
        this.addItem(918, 5, EnemyType.MiniBoss, "");
        this.addItem(919, 6, EnemyType.MiniBoss, "");
        this.addItem(920, 7, EnemyType.MiniBoss, "");
        this.addItem(921, 8, EnemyType.MiniBoss, "");
        // Camp Miniboss
        this.addItem(922, 5, EnemyType.MiniBoss, "");
        this.addItem(923, 6, EnemyType.MiniBoss, "");
        this.addItem(924, 7, EnemyType.MiniBoss, "");
        this.addItem(925, 8, EnemyType.MiniBoss, "");
        //#endregion

        //#region Mage
        // Normal
        this.addItem(926, 3, EnemyType.Enemy, "");
        this.addItem(927, 5, EnemyType.Enemy, "");
        this.addItem(928, 6, EnemyType.Enemy, "");
        this.addItem(929, 7, EnemyType.Enemy, "");
        this.addItem(930, 8, EnemyType.Enemy, "");
        // Camp
        this.addItem(931, 5, EnemyType.Enemy, "");
        this.addItem(932, 6, EnemyType.Enemy, "");
        this.addItem(933, 7, EnemyType.Enemy, "");
        this.addItem(934, 8, EnemyType.Enemy, "");

        // Normal Champion
        this.addItem(935, 3, EnemyType.EnchantedEnemy, "");
        this.addItem(936, 5, EnemyType.EnchantedEnemy, "");
        this.addItem(937, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(938, 7, EnemyType.EnchantedEnemy, "");
        this.addItem(939, 8, EnemyType.EnchantedEnemy, "");
        // Camp Champion
        this.addItem(940, 5, EnemyType.EnchantedEnemy, "");
        this.addItem(941, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(942, 7, EnemyType.EnchantedEnemy, "");
        this.addItem(943, 8, EnemyType.EnchantedEnemy, "");

        // Normal Miniboss
        this.addItem(944, 3, EnemyType.MiniBoss, "");
        this.addItem(945, 5, EnemyType.MiniBoss, "");
        this.addItem(946, 6, EnemyType.MiniBoss, "");
        this.addItem(947, 7, EnemyType.MiniBoss, "");
        this.addItem(948, 8, EnemyType.MiniBoss, "");
        // Camp Miniboss
        this.addItem(949, 5, EnemyType.MiniBoss, "");
        this.addItem(950, 6, EnemyType.MiniBoss, "");
        this.addItem(951, 7, EnemyType.MiniBoss, "");
        this.addItem(952, 8, EnemyType.MiniBoss, "");

        // Normal Boss
        this.addItem(953, 3, EnemyType.Boss, "");
        this.addItem(954, 5, EnemyType.Boss, "");
        this.addItem(955, 6, EnemyType.Boss, "");
        this.addItem(956, 7, EnemyType.Boss, "");
        this.addItem(957, 8, EnemyType.Boss, "");
        // Camp Boss
        this.addItem(958, 5, EnemyType.Boss, "");
        this.addItem(959, 6, EnemyType.Boss, "");
        this.addItem(960, 7, EnemyType.Boss, "");
        this.addItem(961, 8, EnemyType.Boss, "");

        // Boss summon
        this.addItem(962, 3, EnemyType.Enemy, "");
        //#endregion

        //#region Tank
        // Normal Champion
        this.addItem(963, 3, EnemyType.EnchantedEnemy, "");
        this.addItem(964, 5, EnemyType.EnchantedEnemy, "");
        this.addItem(965, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(966, 7, EnemyType.EnchantedEnemy, "");
        this.addItem(967, 8, EnemyType.EnchantedEnemy, "");
        // Camp Champion
        this.addItem(968, 5, EnemyType.EnchantedEnemy, "");
        this.addItem(969, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(970, 7, EnemyType.EnchantedEnemy, "");
        this.addItem(971, 8, EnemyType.EnchantedEnemy, "");

        // Normal Miniboss
        this.addItem(972, 3, EnemyType.MiniBoss, "");
        this.addItem(973, 5, EnemyType.MiniBoss, "");
        this.addItem(974, 6, EnemyType.MiniBoss, "");
        this.addItem(975, 7, EnemyType.MiniBoss, "");
        this.addItem(976, 8, EnemyType.MiniBoss, "");
        // Camp Miniboss
        this.addItem(977, 5, EnemyType.MiniBoss, "");
        this.addItem(978, 6, EnemyType.MiniBoss, "");
        this.addItem(979, 7, EnemyType.MiniBoss, "");
        this.addItem(980, 8, EnemyType.MiniBoss, "");
        //#endregion

        //#region Balista
        // Normal Boss
        this.addItem(981, 3, EnemyType.Boss, "");
        this.addItem(982, 5, EnemyType.Boss, "");
        this.addItem(983, 6, EnemyType.Boss, "");
        this.addItem(984, 7, EnemyType.Boss, "");
        this.addItem(985, 8, EnemyType.Boss, "");
        // Camp Boss
        this.addItem(986, 5, EnemyType.Boss, "");
        this.addItem(987, 6, EnemyType.Boss, "");
        this.addItem(988, 7, EnemyType.Boss, "");
        this.addItem(989, 8, EnemyType.Boss, "");
        //#endregion

        //#region Overseer
        // Normal Boss
        this.addItem(990, 3, EnemyType.Boss, "");
        this.addItem(991, 5, EnemyType.Boss, "");
        this.addItem(992, 6, EnemyType.Boss, "");
        this.addItem(993, 7, EnemyType.Boss, "");
        this.addItem(994, 8, EnemyType.Boss, "");
        // Camp Boss
        this.addItem(995, 5, EnemyType.Boss, "");
        this.addItem(996, 6, EnemyType.Boss, "");
        this.addItem(997, 7, EnemyType.Boss, "");
        this.addItem(998, 8, EnemyType.Boss, "");
        //#endregion

        //#region Shadowmask
        this.addItem(999, 3, EnemyType.Boss, "");
        //#endregion
        
        //#region Veteran
        //Rat
        this.addItem(1004, 3, EnemyType.Enemy, "");
        // Woodgatherer
        this.addItem(1005, 3, EnemyType.Enemy, "");
        // Scavenger
        this.addItem(1006, 3, EnemyType.Enemy, "");
        // Thief
        this.addItem(1007, 3, EnemyType.MediumEnemy, "");
        this.addItem(1008, 3, EnemyType.EnchantedEnemy, "");
        this.addItem(1009, 3, EnemyType.MiniBoss, "");
        // Archer
        this.addItem(1010, 3, EnemyType.MediumEnemy, "");
        this.addItem(1011, 3, EnemyType.EnchantedEnemy, "");
        this.addItem(1012, 3, EnemyType.MiniBoss, "");
        // Mage
        this.addItem(1013, 3, EnemyType.Enemy, "");
        this.addItem(1014, 3, EnemyType.MediumEnemy, "");
        this.addItem(1015, 3, EnemyType.EnchantedEnemy, "");
        this.addItem(1016, 3, EnemyType.MiniBoss, "");
        // Healer
        this.addItem(1017, 3, EnemyType.Enemy, "");
        this.addItem(1018, 3, EnemyType.MediumEnemy, "");
        this.addItem(1019, 3, EnemyType.EnchantedEnemy, "");
        // Tank
        this.addItem(1020, 3, EnemyType.Enemy, "");
        this.addItem(1021, 3, EnemyType.MediumEnemy, "");
        this.addItem(1022, 3, EnemyType.EnchantedEnemy, "");
        this.addItem(1023, 3, EnemyType.MiniBoss, "");
        // Mortar
        this.addItem(1024, 3, EnemyType.Enemy, "");
        this.addItem(1025, 3, EnemyType.MediumEnemy, "");
        this.addItem(1026, 3, EnemyType.EnchantedEnemy, "");
        //#endregion
        
        //#region World
        // Woodgatherer
        this.addItem(1030, 1, EnemyType.Enemy, "");
        this.addItem(1031, 2, EnemyType.Enemy, "");
        this.addItem(1032, 3, EnemyType.Enemy, "");
        // Thief
        this.addItem(1033, 1, EnemyType.Enemy, "");
        this.addItem(1034, 2, EnemyType.Enemy, "");
        this.addItem(1035, 2, EnemyType.MiniBoss, "");
        this.addItem(1036, 2, EnemyType.Boss, "");
        this.addItem(1037, 3, EnemyType.Enemy, "");
        this.addItem(1038, 3, EnemyType.MiniBoss, "");
        this.addItem(1039, 3, EnemyType.MediumEnemy, "");
        this.addItem(1040, 3, EnemyType.Boss, "");
        // Archer
        this.addItem(1041, 1, EnemyType.Enemy, "");
        this.addItem(1042, 2, EnemyType.Enemy, "");
        this.addItem(1043, 2, EnemyType.MiniBoss, "");
        this.addItem(1044, 2, EnemyType.Boss, "");
        this.addItem(1045, 3, EnemyType.Enemy, "");
        this.addItem(1046, 3, EnemyType.MiniBoss, "");
        this.addItem(1047, 3, EnemyType.MediumEnemy, "");
        this.addItem(1048, 3, EnemyType.Boss, "");
        // Healer
        this.addItem(1049, 1, EnemyType.Enemy, "");
        this.addItem(1050, 2, EnemyType.Enemy, "");
        this.addItem(1051, 3, EnemyType.Enemy, "");
        this.addItem(1052, 3, EnemyType.MiniBoss, "");
        this.addItem(1053, 3, EnemyType.MediumEnemy, "");
        this.addItem(1054, 3, EnemyType.Boss, "");
        // Mage
        this.addItem(1055, 1, EnemyType.Enemy, "");
        this.addItem(1056, 2, EnemyType.Enemy, "");
        this.addItem(1057, 2, EnemyType.MiniBoss, "");
        this.addItem(1058, 2, EnemyType.Boss, "");
        this.addItem(1059, 3, EnemyType.Enemy, "");
        this.addItem(1060, 3, EnemyType.MiniBoss, "");
        this.addItem(1061, 3, EnemyType.MediumEnemy, "");
        this.addItem(1062, 3, EnemyType.Boss, "");
        // Totem spells
        this.addItem(1063, 2, EnemyType.Enemy, "");
        this.addItem(1064, 2, EnemyType.Enemy, "");
        this.addItem(1065, 2, EnemyType.Enemy, "");
        this.addItem(1066, 3, EnemyType.Enemy, "");
        this.addItem(1067, 3, EnemyType.Enemy, "");
        this.addItem(1068, 3, EnemyType.Enemy, "");
        // Foulrat
        this.addItem(1069, 2, EnemyType.Enemy, "");
        this.addItem(1070, 3, EnemyType.Enemy, "");
        this.addItem(1071, 3, EnemyType.MediumEnemy, "");
        // Scavenger tutorial
        this.addItem(1072, 1, EnemyType.Enemy, "");
        this.addItem(1073, 1, EnemyType.Enemy, "");
        // Scavenger
        this.addItem(1074, 2, EnemyType.Enemy, "");
        this.addItem(1075, 3, EnemyType.Enemy, "");
        this.addItem(1076, 3, EnemyType.MediumEnemy, "");
        // Tank
        this.addItem(1077, 1, EnemyType.Enemy, "");
        this.addItem(1078, 2, EnemyType.Enemy, "");
        this.addItem(1079, 2, EnemyType.MiniBoss, "");
        this.addItem(1080, 2, EnemyType.Boss, "");
        this.addItem(1081, 3, EnemyType.Enemy, "");
        this.addItem(1082, 3, EnemyType.MiniBoss, "");
        this.addItem(1083, 3, EnemyType.Boss, "");
        this.addItem(1084, 3, EnemyType.MediumEnemy, "");
        // Mortar
        this.addItem(1085, 2, EnemyType.Enemy, "");
        this.addItem(1086, 3, EnemyType.Enemy, "");
        this.addItem(1087, 3, EnemyType.MediumEnemy, "");
        // Balista
        this.addItem(1088, 2, EnemyType.Enemy, "");
        this.addItem(1089, 2, EnemyType.Enemy, "");
        this.addItem(1090, 3, EnemyType.Enemy, "");
        this.addItem(1091, 3, EnemyType.MediumEnemy, "");
        // Other
        this.addItem(1092, 3, EnemyType.Boss, ""); // lumberjack boss
        this.addItem(1093, 3, EnemyType.Boss, ""); // gibson boss
        this.addItem(1094, 3, EnemyType.Enemy, ""); // gibson stooge
        this.addItem(1095, 3, EnemyType.Enemy, ""); // heretic overseer
        //#endregion
        //#endregion
        
        // TODO
        //#region Morgana

        //#endregion

        //#region Demon
        //this.addItem(2038, 4, EnemyType.Enemy, "");
        //#endregion

        //this.addItem(1466, 4, EnemyType.Enemy, "UNDEADARCHER4");
        //#endregion
        */
    
        //#region Event Enemies
        //#region EASTER
        // Chests
        //#endregion
 
        //#endregion
    }
}