import { registerTable } from './roll';
import {
	container,
	commonItems,
	luxuryItems,
	animals,
	musicalInstruments
} from '$lib/games/pirateborg/data/equipment';
import { weapons, clothes, hats } from '$lib/games/pirateborg/data/equipment-extra';
import {
	distinctiveFlaw,
	physicalPeculiarity,
	idiosyncrasy,
	ammutinamento,
	misfortunes,
	preciousThings
} from '$lib/games/pirateborg/data/background';
import { reliquie } from '$lib/games/pirateborg/data/relics';
import { names } from '$lib/games/pirateborg/data/names';
import {
	classiAggiuntive,
	mutantiAcquatici,
	animaliSenzienti
} from '$lib/games/pirateborg/data/optional-classes';

export function registerAllTables(): void {
	registerTable('container', container);
	registerTable('commonItems', commonItems);
	registerTable('luxuryItems', luxuryItems);
	registerTable('animali', animals);
	registerTable('strumenti', musicalInstruments);
	registerTable('weapons', weapons);
	registerTable('clothes', clothes);
	registerTable('hats', hats);
	registerTable('distinctiveFlaw', distinctiveFlaw);
	registerTable('physicalPeculiarity', physicalPeculiarity);
	registerTable('idiosyncrasy', idiosyncrasy);
	registerTable('ammutinamento', ammutinamento);
	registerTable('misfortunes', misfortunes);
	registerTable('preciousThings', preciousThings);
	registerTable('reliquie', reliquie);
	registerTable('names', names);
	registerTable('classi_aggiuntive', classiAggiuntive);
	registerTable('mutanti_acquatici', mutantiAcquatici);
	registerTable('animali_senzienti', animaliSenzienti);
}
