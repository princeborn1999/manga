
/** FairyTail */
// character
import f_character_01 from '../assets/fairytail_asset/character/f_character_01.jpg'
import f_character_02 from '../assets/fairytail_asset/character/f_character_02.jpg'
import f_character_03 from '../assets/fairytail_asset/character/f_character_03.jpg'
import f_character_04 from '../assets/fairytail_asset/character/f_character_04.jpg'
import f_character_05 from '../assets/fairytail_asset/character/f_character_05.jpg'
// fight
import f_fight_01 from '../assets/fairytail_asset/fight/f_fight_01.jpg'
import f_fight_02 from '../assets/fairytail_asset/fight/f_fight_02.jpg'
import f_fight_03 from '../assets/fairytail_asset/fight/f_fight_03.jpg'
import f_fight_04 from '../assets/fairytail_asset/fight/f_fight_04.jpg'
import f_fight_05 from '../assets/fairytail_asset/fight/f_fight_05.jpg'
import f_fight_06 from '../assets/fairytail_asset/fight/f_fight_06.jpg'
import f_fight_07 from '../assets/fairytail_asset/fight/f_fight_07.jpg'
import f_fight_08 from '../assets/fairytail_asset/fight/f_fight_08.jpg'
import f_fight_09 from '../assets/fairytail_asset/fight/f_fight_09.jpg'
// injuired
import f_injured_01 from '../assets/fairytail_asset/fight/f_injured_01.jpg'
import f_injured_02 from '../assets/fairytail_asset/fight/f_injured_02.jpg'
import f_injured_03 from '../assets/fairytail_asset/fight/f_injured_03.jpg'
// vibe
import f_danger_01 from '../assets/fairytail_asset/vibe/f_danger_01.jpg'
import f_danger_02 from '../assets/fairytail_asset/vibe/f_danger_02.jpg'
import f_danger_03 from '../assets/fairytail_asset/vibe/f_danger_03.jpg'
// background
import f_background_01  from '../assets/fairytail_asset/background/f_background_01.jpg'
import f_background_02  from '../assets/fairytail_asset/background/f_background_02.jpg'
import f_background_03  from '../assets/fairytail_asset/background/f_background_03.jpg'
import f_background_04  from '../assets/fairytail_asset/background/f_background_04.jpg'
import f_background_05  from '../assets/fairytail_asset/background/f_background_05.jpg'
import f_background_06  from '../assets/fairytail_asset/background/f_background_06.jpg'
import f_background_07  from '../assets/fairytail_asset/background/f_background_07.jpg'
import f_background_08  from '../assets/fairytail_asset/background/f_background_08.jpg'
import f_background_09  from '../assets/fairytail_asset/background/f_background_09.jpg'
import f_background_10  from '../assets/fairytail_asset/background/f_background_10.jpg'
import f_crowd_01  from '../assets/fairytail_asset/background/f_crowd_01.jpg'
import f_crowd_02  from '../assets/fairytail_asset/background/f_crowd_02.jpg'
import f_crowd_03  from '../assets/fairytail_asset/background/f_crowd_03.jpg'
import f_crowd_04  from '../assets/fairytail_asset/background/f_crowd_04.jpg'
import f_crowd_05  from '../assets/fairytail_asset/background/f_crowd_05.jpg'
import f_crowd_06  from '../assets/fairytail_asset/background/f_crowd_06.jpg'

class ImageFairyTailSearchService{
    getAllF(){
        return [
            f_character_01,f_character_02,f_character_03,f_character_04
            ,f_character_05,f_fight_01,f_fight_02,f_fight_03,f_fight_04,f_fight_05,f_fight_06,f_fight_07
            ,f_fight_08,f_fight_09
            ,f_injured_01,f_injured_02,f_injured_03,
            f_danger_01,f_danger_02,f_danger_03
            ,f_background_01,f_background_02,f_background_03,
            f_background_04,f_background_05,f_background_06,
            f_background_07,f_background_08,f_background_09,
            f_background_10
            ,f_crowd_01,f_crowd_02,f_crowd_03,
            f_crowd_04,f_crowd_05,f_crowd_06
        ]
    }
    getAllFcharacter() {
        return [f_character_01,f_character_02,f_character_03,f_character_04
                ,f_character_05];
    }
    getAllFfight() {
        return [f_fight_01,f_fight_02,f_fight_03,f_fight_04,f_fight_05,f_fight_06,f_fight_07
                ,f_fight_08,f_fight_09];
    }
    getAllFinjured() {
        return [f_injured_01,f_injured_02,f_injured_03];
    }
    getAllFdanger() {
        return [f_danger_01,f_danger_02,f_danger_03];
    }
    getAllFbackground() {
        return [f_background_01,f_background_02,f_background_03,
                f_background_04,f_background_05,f_background_06,
                f_background_07,f_background_08,f_background_09,
                f_background_10];
    }
    getAllFcrowd() {
        return [f_crowd_01,f_crowd_02,f_crowd_03,
                f_crowd_04,f_crowd_05,f_crowd_06];
    }
}
export default new ImageFairyTailSearchService();