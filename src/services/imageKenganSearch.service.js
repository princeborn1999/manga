/** Kengan */
// character
import k_muscle_01 from '../assets/kengan_asset/character/k_muscle_01.jpg';
import k_shadow_02 from '../assets/kengan_asset/character/k_shadow_02.jpg';
import k_shadow_03 from '../assets/kengan_asset/character/k_shadow_03.jpg';
import k_shadow_04 from '../assets/kengan_asset/character/k_shadow_04.jpg';
import k_shadow_05 from '../assets/kengan_asset/character/k_shadow_05.jpg';
// fight
import k_fight_01 from '../assets/kengan_asset/fight/k_fight_01.jpg';
import k_fight_02 from '../assets/kengan_asset/fight/k_fight_02.jpg';
import k_fight_03 from '../assets/kengan_asset/fight/k_fight_03.jpg';
import k_fight_04 from '../assets/kengan_asset/fight/k_fight_04.jpg';
import k_fight_05 from '../assets/kengan_asset/fight/k_fight_05.jpg';
import k_fight_06 from '../assets/kengan_asset/fight/k_fight_06.jpg';
import k_fight_07 from '../assets/kengan_asset/fight/k_fight_07.jpg';
import k_fight_08 from '../assets/kengan_asset/fight/k_fight_08.jpg';
import k_injured_01 from '../assets/kengan_asset/fight/k_injured_01.jpg'
import k_injured_02 from '../assets/kengan_asset/fight/k_injured_02.jpg';
import k_injured_03 from '../assets/kengan_asset/fight/k_injured_03.jpg';
import k_injured_04 from '../assets/kengan_asset/fight/k_injured_04.jpg';
import k_injured_05 from '../assets/kengan_asset/fight/k_injured_05.jpg';
// vibe
import k_vibe_01 from '../assets/kengan_asset/vibe/k_vibe_01.jpg';
import k_vibe_02 from '../assets/kengan_asset/vibe/k_vibe_02.jpg';
import k_vibe_03 from '../assets/kengan_asset/vibe/k_vibe_03.jpg';
import k_vibe_04 from '../assets/kengan_asset/vibe/k_vibe_04.jpg';
import k_vibe_05 from '../assets/kengan_asset/vibe/k_vibe_05.jpg';
// action
import k_action_01 from '../assets/kengan_asset/action/k_action_01.jpg';
import k_action_02 from '../assets/kengan_asset/action/k_action_02.jpg';
import k_dodge_01 from '../assets/kengan_asset/action/k_dodge_01.jpg';
// background
import k_background_01 from '../assets/kengan_asset/background/k_background_01.jpg';
import k_background_02 from '../assets/kengan_asset/background/k_background_02.jpg';
import k_background_03 from '../assets/kengan_asset/background/k_background_03.jpg';
import k_background_04 from '../assets/kengan_asset/background/k_background_04.jpg';
import k_crowd_01 from '../assets/kengan_asset/background/k_crowd_01.jpg';
import k_crowd_02 from '../assets/kengan_asset/background/k_crowd_02.jpg';
import k_crowd_03 from '../assets/kengan_asset/background/k_crowd_03.jpg';
import k_crowd_04 from '../assets/kengan_asset/background/k_crowd_04.jpg';
// rough_draft
import k_rough_01 from '../assets/kengan_asset/rough_draft/k_rough_01.jpg';
import k_rough_02 from '../assets/kengan_asset/rough_draft/k_rough_02.jpg';
import k_rough_03 from '../assets/kengan_asset/rough_draft/k_rough_03.jpg';
import k_rough_04 from '../assets/kengan_asset/rough_draft/k_rough_04.jpg';

class ImageKengaSearchService{
    getAllKmuscle() {
        return [k_muscle_01];
    }
    getAllKshadow() {
        return [k_shadow_02,k_shadow_03,k_shadow_04,k_shadow_05];
    }
    getAllKfight() {
        return [k_fight_01,k_fight_02,k_fight_03,k_fight_04,
                k_fight_05,k_fight_06,k_fight_07,k_fight_08];
    }
    getAllKinjured() {
        return [k_injured_01,k_injured_02,k_injured_03,k_injured_04,
                k_injured_05];
    }
    getAllKvibe() {
        return [k_vibe_01,k_vibe_02,k_vibe_03,k_vibe_04,k_vibe_05];
    }
    getAllKbackgroud(){
        return [k_background_01,k_background_02,k_background_03,k_background_04];
    }
    getAllKcrowd(){
        return [k_crowd_01,k_crowd_02,k_crowd_03,k_crowd_04];
    }
    getAllKrough(){
        return [k_rough_01,k_rough_02,k_rough_03,k_rough_04]
    }
    getAllKaction(){
        return [k_action_01,k_action_02]
    }
    getAllKdodge(){
        return [k_dodge_01]
    }
    getKmuscle(imageNumber){
        switch (imageNumber) {
            case 1:
                return k_muscle_01;
            default:
                return null;
        }
    }
    getKshadow(imageNumber){
        switch (imageNumber) {
            case 1:
                return k_muscle_01;
            default:
                return null;
        }
    }
    getKfight(imageNumber){
        switch (imageNumber) {
            case 1:
                return k_muscle_01;
            default:
                return null;
        }
    }
    getKinjuired(imageNumber){
        switch (imageNumber) {
            case 1:
                return k_muscle_01;
            default:
                return null;
        }
    }
    getKvibe(imageNumber){
        switch (imageNumber) {
            case 1:
                return k_muscle_01;
            default:
                return null;
        }
    }
    getKbackground(imageNumber){
        switch (imageNumber) {
            case 1:
                return k_muscle_01;
            default:
                return null;
        }
    }
}

export default new ImageKengaSearchService();