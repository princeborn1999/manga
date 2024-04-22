
/** One */
// character
import o_character_01 from '../assets/onepunch_asset/character/o_character_01.jpg'
// shadow
import o_shadow_01 from '../assets/onepunch_asset/character/o_shadow_01.jpg'
import o_shadow_02 from '../assets/onepunch_asset/character/o_shadow_02.jpg'
import o_shadow_03 from '../assets/onepunch_asset/character/o_shadow_03.jpg'
// fight
import o_fight_01 from '../assets/onepunch_asset/fight/o_fight_01.jpg'
import o_fight_02 from '../assets/onepunch_asset/fight/o_fight_02.jpg'
import o_fight_03 from '../assets/onepunch_asset/fight/o_fight_03.jpg'
// injured
import o_injured_01 from '../assets/onepunch_asset/fight/o_injured_01.jpg'
import o_injured_02 from '../assets/onepunch_asset/fight/o_injured_02.jpg'

// vibe
import o_danger_01 from '../assets/onepunch_asset/vibe/o_danger_01.jpg'
import o_danger_02 from '../assets/onepunch_asset/vibe/o_danger_02.jpg'
import o_danger_03 from '../assets/onepunch_asset/vibe/o_danger_03.jpg'
import o_danger_04 from '../assets/onepunch_asset/vibe/o_danger_04.jpg'
import o_danger_05 from '../assets/onepunch_asset/vibe/o_danger_05.jpg'

// background
import o_background_01 from '../assets/onepunch_asset/background/o_background_01.jpg'
import o_background_02 from '../assets/onepunch_asset/background/o_background_02.jpg'
import o_background_03 from '../assets/onepunch_asset/background/o_background_03.jpg'
import o_background_04 from '../assets/onepunch_asset/background/o_background_04.jpg'
import o_background_05 from '../assets/onepunch_asset/background/o_background_05.jpg'
import o_background_06 from '../assets/onepunch_asset/background/o_background_06.jpg'
class ImageOneSearchService{
    getAllOcharacter() {
        return [o_character_01];
    }
    getAllOshadow() {
        return [o_shadow_01,o_shadow_02,o_shadow_03];
    }
    getAllOfight() {
        return [o_fight_01,o_fight_02,o_fight_03];
    }
    getAllOinjured() {
        return [o_injured_01,o_injured_02];
    }
    getAllOdanger() {
        return [o_danger_01,o_danger_02,o_danger_03,o_danger_04,o_danger_05];
    }
    getAllObackground() {
        return [o_background_01,o_background_02,o_background_03,
                o_background_04,o_background_05,o_background_06];
    }
    getOcharacter(imageNumber){
        switch (imageNumber) {
            case 1:
                return o_character_01;
            default:
                return null;
        }
    }
    getOfight(imageNumber){
        switch (imageNumber) {
            case 1:
                return o_fight_01;
            default:
                return null;
        }
    }
    getOinjured(imageNumber){
        switch (imageNumber) {
            case 1:
                return o_injured_01;
            default:
                return null;
        }
    }
    getOdanger(imageNumber){
        switch (imageNumber) {
            case 1:
                return o_danger_01;
            default:
                return null;
        }
    }
}
export default new ImageOneSearchService();