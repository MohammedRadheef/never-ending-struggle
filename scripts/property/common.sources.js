const commonSources = [];
const SRC_ICON_SHEET = new GameSource("sheet", "images/ui/icons.sheet");
const SRC_ICON_BTN = new GameSource("sheet", "images/ui/icons.png");
const SRC_HOME_BG_IMG_1 = new GameSource("image", "images/thumbnail/home.jpg");
const SRC_HOME_BG_IMG_2 = new GameSource("image", "images/thumbnail/ca2k.png");
const SRC_HOME_BG_IMG_3 = new GameSource(
  "image",
  "images/thumbnail/castle.jpg"
);
const SRC_HOME_BG_IMG_4 = new GameSource(
  "image",
  "images/thumbnail/poster.jpeg"
);
const SRC_HOME_BG_IMG_5 = new GameSource("image", "images/thumbnail/war.jpg");
const SRC_ICON_ARMOR = new GameSource(
  "image",
  "images/ui/color_icons/armor.png"
);
const SRC_ICON_ARMOR_T2 = new GameSource(
  "image",
  "images/ui/color_icons/armorT2.png"
);
const SRC_ICON_AXE = new GameSource("image", "images/ui/color_icons/axe.png");
const SRC_ICON_AXE2 = new GameSource("image", "images/ui/color_icons/axe2.png");
const SRC_ICON_AXE_DOUBLE = new GameSource(
  "image",
  "images/ui/color_icons/axeDobule.png"
);
const SRC_ICON_AXE_DOUBLE2 = new GameSource(
  "image",
  "images/ui/color_icons/axeDobule2.png"
);
const SRC_ICON_AXE_DOUBLE_T1 = new GameSource(
  "image",
  "images/ui/color_icons/AxeDobuleT1.png"
);
const SRC_ICON_AXE_DOUBLE_T2 = new GameSource(
  "image",
  "images/ui/color_icons/AxeDobuleT2.png"
);
const SRC_ICON_AXE_T1 = new GameSource(
  "image",
  "images/ui/color_icons/AxeT1.png"
);
const SRC_ICON_AXE_T2 = new GameSource(
  "image",
  "images/ui/color_icons/AxeT2.png"
);

const SRC_ICON_BACKPACK = new GameSource(
  "image",
  "images/ui/color_icons/backpack.png"
);
const SRC_ICON_BOW = new GameSource("image", "images/ui/color_icons/bow.png");
const SRC_ICON_BOW_1 = new GameSource(
  "image",
  "images/ui/color_icons/bow_1.png"
);
const SRC_ICON_BOW_2 = new GameSource(
  "image",
  "images/ui/color_icons/bow_2.png"
);
const SRC_ICON_COIN = new GameSource("image", "images/ui/color_icons/coin.png");

const SRC_ICON_DAGGER = new GameSource(
  "image",
  "images/ui/color_icons/dagger.png"
);
const SRC_ICON_DAGGER_T1 = new GameSource(
  "image",
  "images/ui/color_icons/daggerT1.png"
);
const SRC_ICON_DAGGER_T2 = new GameSource(
  "image",
  "images/ui/color_icons/daggerT2.png"
);
const SRC_ICON_ENVELOPE = new GameSource(
  "image",
  "images/ui/color_icons/envelope.png"
);
const SRC_ICON_FRAME_ROUND = new GameSource(
  "image",
  "images/ui/color_icons/FrameRound.png"
);
const SRC_ICON_FRAME_SQUARE = new GameSource(
  "image",
  "images/ui/color_icons/FrameSquare.png"
);
const SRC_ICON_GEM_BLUE = new GameSource(
  "image",
  "images/ui/color_icons/gemBlue.png"
);
const SRC_ICON_GEM_GREEN = new GameSource(
  "image",
  "images/ui/color_icons/gemGreen.png"
);
const SRC_ICON_GEM_RED = new GameSource(
  "image",
  "images/ui/color_icons/gemRed.png"
);
const SRC_ICON_GEM_YELLOW = new GameSource(
  "image",
  "images/ui/color_icons/GemYellow.png"
);
const SRC_ICON_HAMMER = new GameSource(
  "image",
  "images/ui/color_icons/hammer.png"
);
const SRC_ICON_HAMMER_T1 = new GameSource(
  "image",
  "images/ui/color_icons/HammerT1.png"
);
const SRC_ICON_HAMMER_T2 = new GameSource(
  "image",
  "images/ui/color_icons/HammerT2.png"
);
const SRC_ICON_HEART = new GameSource(
  "image",
  "images/ui/color_icons/heart.png"
);
const SRC_ICON_HEART_EMPTY = new GameSource(
  "image",
  "images/ui/color_icons/HeartEmpty.png"
);
const SRC_ICON_HEART_FULL = new GameSource(
  "image",
  "images/ui/color_icons/HeartFull.png"
);
const SRC_ICON_HEART_HALF = new GameSource(
  "image",
  "images/ui/color_icons/HeartHalf.png"
);
const SRC_ICON_HELMET = new GameSource(
  "image",
  "images/ui/color_icons/helmet.png"
);
const SRC_ICON_HELMET_T1 = new GameSource(
  "image",
  "images/ui/color_icons/HelmetT1.png"
);
const SRC_ICON_HELMET_T2 = new GameSource(
  "image",
  "images/ui/color_icons/HelmetT2.png"
);
const SRC_ICON_LETTER = new GameSource(
  "image",
  "images/ui/color_icons/Letter.png"
);
const SRC_ICON_MAP_1 = new GameSource(
  "image",
  "images/ui/color_icons/Map_1.png"
);
const SRC_ICON_MAP = new GameSource("image", "images/ui/color_icons/map.png");
const SRC_ICON_POTION_BLUE_1 = new GameSource(
  "image",
  "images/ui/color_icons/PotionBlue_1.png"
);
const SRC_ICON_POTION_BLUE = new GameSource(
  "image",
  "images/ui/color_icons/potionBlue.png"
);
const SRC_ICON_POTION_GREEN_1 = new GameSource(
  "image",
  "images/ui/color_icons/PotionGreen_1.png"
);
const SRC_ICON_POTION_GREEN = new GameSource(
  "image",
  "images/ui/color_icons/potionGreen.png"
);
const SRC_ICON_POTION_RED_1 = new GameSource(
  "image",
  "images/ui/color_icons/PotionRed_1.png"
);
const SRC_ICON_POTION_RED = new GameSource(
  "image",
  "images/ui/color_icons/potionRed.png"
);
const SRC_ICON_POTION_YELLOW = new GameSource(
  "image",
  "images/ui/color_icons/PotionYellow.png"
);
const SRC_ICON_SCROLL = new GameSource(
  "image",
  "images/ui/color_icons/scroll.png"
);
const SRC_ICON_SHIELD = new GameSource(
  "image",
  "images/ui/color_icons/shield.png"
);
const SRC_ICON_SHIELD_LARGE_T1 = new GameSource(
  "image",
  "images/ui/color_icons/ShieldLargeT1.png"
);
const SRC_ICON_SHIELD_LARGE_T2 = new GameSource(
  "image",
  "images/ui/color_icons/ShieldLargeT2.png"
);
const SRC_ICON_SHIELD_SMALL = new GameSource(
  "image",
  "images/ui/color_icons/shieldSmall.png"
);
const SRC_ICON_SHIELD_SMALL_T1 = new GameSource(
  "image",
  "images/ui/color_icons/ShieldSmallT1.png"
);
const SRC_ICON_SHIELD_SMALL_T2 = new GameSource(
  "image",
  "images/ui/color_icons/ShieldSmallT2.png"
);
const SRC_ICON_SPEAR_T1 = new GameSource(
  "image",
  "images/ui/color_icons/SpearT1.png"
);
const SRC_ICON_SPEAR_T2 = new GameSource(
  "image",
  "images/ui/color_icons/SpearT2.png"
);
const SRC_ICON_SWORD_T1 = new GameSource(
  "image",
  "images/ui/color_icons/SwordT1.png"
);
const SRC_ICON_SWORD_T2 = new GameSource(
  "image",
  "images/ui/color_icons/SwordT2.png"
);
const SRC_ICON_SWORD_WOOD = new GameSource(
  "image",
  "images/ui/color_icons/SwordWood.png"
);
const SRC_ICON_TOME = new GameSource("image", "images/ui/color_icons/tome.png");
const SRC_ICON_TOME_BLUE = new GameSource(
  "image",
  "images/ui/color_icons/TomeBlue.png"
);
const SRC_ICON_TOME_GREEN = new GameSource(
  "image",
  "images/ui/color_icons/TomeGreen.png"
);
const SRC_ICON_TOME_RED = new GameSource(
  "image",
  "images/ui/color_icons/TomeRed.png"
);
const SRC_ICON_TOME_YELLOW = new GameSource(
  "image",
  "images/ui/color_icons/TomeYellow.png"
);
const SRC_ICON_TOOLS = new GameSource(
  "image",
  "images/ui/color_icons/tools.png"
);
const SRC_ICON_UPG_ARMOR = new GameSource(
  "image",
  "images/ui/color_icons/upg_armor.png"
);
const SRC_ICON_UPG_AXE = new GameSource(
  "image",
  "images/ui/color_icons/upg_axe.png"
);
const SRC_ICON_UPG_AXE_DOUBLE = new GameSource(
  "image",
  "images/ui/color_icons/upg_axeDouble.png"
);
const SRC_ICON_UPG_BOW = new GameSource(
  "image",
  "images/ui/color_icons/upg_bow.png"
);
const SRC_ICON_UPG_DAGGER = new GameSource(
  "image",
  "images/ui/color_icons/upg_dagger.png"
);
const SRC_ICON_UPG_HAMMER = new GameSource(
  "image",
  "images/ui/color_icons/upg_hammer.png"
);
const SRC_ICON_UPG_HELMET = new GameSource(
  "image",
  "images/ui/color_icons/upg_helmet.png"
);
const SRC_ICON_UPG_SHIELD = new GameSource(
  "image",
  "images/ui/color_icons/upg_shield.png"
);
const SRC_ICON_UPG_SHIELD_SMALL = new GameSource(
  "image",
  "images/ui/color_icons/upg_shieldSmall.png"
);
const SRC_ICON_UPG_SPEAR = new GameSource(
  "image",
  "images/ui/color_icons/upg_spear.png"
);
const SRC_ICON_UPG_SWORD = new GameSource(
  "image",
  "images/ui/color_icons/upg_sword.png"
);
const SRC_ICON_UPG_WAND = new GameSource(
  "image",
  "images/ui/color_icons/upg_wand.png"
);

const SRC_ICON_WAND = new GameSource("image", "images/ui/color_icons/wand.png");
const SRC_ICON_WAND_T1 = new GameSource(
  "image",
  "images/ui/color_icons/WandT1.png"
);
const SRC_ICON_WAND_T2 = new GameSource(
  "image",
  "images/ui/color_icons/WandT2.png"
);
const SRC_ICON_WOOD_SWORD = new GameSource(
  "image",
  "images/ui/color_icons/woodSword.png"
);
const SRC_ICON_X = new GameSource("image", "images/ui/color_icons/x.png");

commonSources.push(SRC_ICON_SHEET);
commonSources.push(SRC_ICON_BTN);
commonSources.push(SRC_HOME_BG_IMG_1);
commonSources.push(SRC_HOME_BG_IMG_2);
commonSources.push(SRC_HOME_BG_IMG_3);
commonSources.push(SRC_ICON_ARMOR);
commonSources.push(SRC_ICON_ARMOR_T2);
commonSources.push(SRC_ICON_AXE);
commonSources.push(SRC_ICON_AXE2);
commonSources.push(SRC_ICON_AXE_DOUBLE);
commonSources.push(SRC_ICON_AXE_DOUBLE_2);
commonSources.push(SRC_ICON_AXE_DOUBLE_T1);
commonSources.push(SRC_ICON_AXE_DOUBLE_T2);
commonSources.push(SRC_ICON_AXE_T1);
commonSources.push(SRC_ICON_AXE_T2);
commonSources.push(SRC_ICON_BACKPACK);
commonSources.push(SRC_ICON_BOW);
commonSources.push(SRC_ICON_BOW_1);
commonSources.push(SRC_ICON_BOW_2);
commonSources.push(SRC_ICON_COIN);
commonSources.push(SRC_ICON_DAGGER);
commonSources.push(SRC_ICON_DAGGER_T1);
commonSources.push(SRC_ICON_DAGGER_T2);
commonSources.push(SRC_ICON_ENVELOPE);
commonSources.push(SRC_ICON_FRAME_ROUND);
commonSources.push(SRC_ICON_FRAME_SQUARE);
commonSources.push(SRC_ICON_GEM_BLUE);
commonSources.push(SRC_ICON_GEM_GREEN);
commonSources.push(SRC_ICON_GEM_RED);
commonSources.push(SRC_ICON_GEM_YELLOW);
commonSources.push(SRC_ICON_HAMMER);
commonSources.push(SRC_ICON_HAMMER_T1);
commonSources.push(SRC_ICON_HAMMER_T2);
commonSources.push(SRC_ICON_HEART);
commonSources.push(SRC_ICON_HEART_EMPTY);
commonSources.push(SRC_ICON_HEART_FULL);
commonSources.push(SRC_ICON_HEART_HALF);
commonSources.push(SRC_ICON_HELMET);
commonSources.push(SRC_ICON_HELMET_T1);
commonSources.push(SRC_ICON_HELMET_T2);
commonSources.push(SRC_ICON_LETTER);
commonSources.push(SRC_ICON_MAP_1);
commonSources.push(SRC_ICON_MAP);
commonSources.push(SRC_ICON_POTION_BLUE_1);
commonSources.push(SRC_ICON_POTION_BLUE);
commonSources.push(SRC_ICON_POTION_GREEN_1);
commonSources.push(SRC_ICON_POTION_GREEN);
commonSources.push(SRC_ICON_POTION_RED_1);
commonSources.push(SRC_ICON_POTION_RED);
commonSources.push(SRC_ICON_POTION_YELLOW);
commonSources.push(SRC_ICON_SCROLL);
commonSources.push(SRC_ICON_SHIELD);
commonSources.push(SRC_ICON_SHIELD_LARGE_T1);
commonSources.push(SRC_ICON_SHIELD_LARGE_T2);
commonSources.push(SRC_ICON_SHIELD_SMALL);
commonSources.push(SRC_ICON_SHIELD_SMALL_T1);
commonSources.push(SRC_ICON_SHIELD_SMALL_T2);
commonSources.push(SRC_ICON_SPEAR_T1);
commonSources.push(SRC_ICON_SPEAR_T2);
commonSources.push(SRC_ICON_SWORD_T1);
commonSources.push(SRC_ICON_SWORD_T2);
commonSources.push(SRC_ICON_SWORD_WOOD);
commonSources.push(SRC_ICON_TOME);
commonSources.push(SRC_ICON_TOME_BLUE);
commonSources.push(SRC_ICON_TOME_GREEN);
commonSources.push(SRC_ICON_TOME_RED);
commonSources.push(SRC_ICON_TOME_YELLOW);
commonSources.push(SRC_ICON_TOOLS);
commonSources.push(SRC_ICON_UPG_ARMOR);
commonSources.push(SRC_ICON_UPG_AXE);
commonSources.push(SRC_ICON_UPG_AXE_DOUBLE);
commonSources.push(SRC_ICON_UPG_BOW);
commonSources.push(SRC_ICON_UPG_DAGGER);
commonSources.push(SRC_ICON_UPG_HAMMER);
commonSources.push(SRC_ICON_UPG_HELMET);
commonSources.push(SRC_ICON_UPG_SHIELD);
commonSources.push(SRC_ICON_UPG_SHIELD_SMALL);
commonSources.push(SRC_ICON_UPG_SPEAR);
commonSources.push(SRC_ICON_UPG_SWORD);
commonSources.push(SRC_ICON_UPG_WAND);
commonSources.push(SRC_ICON_WAND);
commonSources.push(SRC_ICON_WAND_T1);
commonSources.push(SRC_ICON_WAND_T2);
commonSources.push(SRC_ICON_WAND_SWORD);
commonSources.push(SRC_ICON_X);
