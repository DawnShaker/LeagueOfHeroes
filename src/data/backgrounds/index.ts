import { artist } from './artist';
import { noble } from './noble';
import { sailor } from './sailor';
import { sage } from './sage';
import { hermit } from './hermit';
import { acolyte } from './acolyte';
import { criminal } from './criminal';
import { artisan } from './artisan';
import { soldier } from './soldier';
import { wayfarer } from './wayfarer';
import { merchant } from './merchant';
import { charlatan } from './charlatan';
import { urchin } from './urchin';
import { folkhero } from './folkhero';
import { outlander } from './outlander';
import { gambler } from './gambler';
import { plaintiff } from './plaintiff';
import { scion } from './scion';
import { rivalintern } from './rivalintern';
import { giantfoundling } from './giantfoundling';
import { runecarver } from './runecarver';
import { farmer } from './farmer';
import { houseagent } from './houseagent';
import { rewarded } from './rewarded';
import { ruined } from './ruined';
import { volstruckeragent } from './volstruckeragent';
import { grinner } from './grinner';
import { boroslegionnaire } from './boroslegionnaire';
import { simicscientist } from './simicscientist';
import { orzhovrepresentative } from './orzhovrepresentative';
import { gruulanarch } from './gruulanarch';
import { dimiroperative } from './dimiroperative';
import { azoriusfunctionary } from './azoriusfunctionary';
import { izzetengineer } from './izzetengineer';
import { rakdoscultist } from './rakdoscultist';
import { athlete } from './athlete';
import { planarphilosopher } from './planarphilosopher';
import { gatewarden } from './gatewarden';
import { astraldrifter } from './astraldrifter';
import { wildspacer } from './wildspacer';
import { mercenaryveteran } from './mercanaryveteran';
import { waterdhaviannoble } from './waterdhaviannoble';
import { urbanbountyhunter } from './urbanbountyhunter';
import { courtier } from './courtier';
import { golgariagent } from './golgariagent';
import { selesnyainitiate } from './selesnyainitiate';


export const allBackgrounds = [selesnyainitiate,golgariagent,courtier,orzhovrepresentative,urbanbountyhunter,waterdhaviannoble,mercenaryveteran,wildspacer,astraldrifter,gatewarden,planarphilosopher,athlete,rakdoscultist,izzetengineer,azoriusfunctionary,dimiroperative,gruulanarch,simicscientist,boroslegionnaire,grinner,volstruckeragent,ruined,rewarded,houseagent,artist,noble,sailor,sage,acolyte,criminal,artisan,soldier,merchant,charlatan,urchin,folkhero,outlander,gambler,plaintiff,scion,rivalintern,giantfoundling,runecarver,hermit, wayfarer,farmer];

export const backgroundsData = allBackgrounds.sort((a, b) => 
  a.name.localeCompare(b.name, 'ru')
);