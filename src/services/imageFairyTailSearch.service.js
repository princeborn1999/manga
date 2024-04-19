
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

class ImageFairyTailSearchService{
    getAllFcharacter() {
        return [f_character_01];
    }
    getAllFfight() {
        return [f_fight_01];
    }
    getAllFinjured() {
        return [f_injured_01];
    }
    getAllFdanger() {
        return [f_danger_01];
    }


}
export default new ImageFairyTailSearchService();