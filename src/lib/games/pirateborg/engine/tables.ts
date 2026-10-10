import { registerTable } from './roll';
import { container, commonItems, luxuryItems, animals, musicalInstruments } from '$lib/games/pirateborg/data/equipment';
import { classTable } from '$lib/games/pirateborg/data/classes';
import { weapons, clothes, hats } from '$lib/games/pirateborg/data/equipment-extra';
import { backgroundTable, piecesOfEight, distinctiveFlaw, physicalPeculiarity, idiosyncrasy, misfortunes, preciousThings } from '$lib/games/pirateborg/data/background';

export function registerAllTables() {
	registerTable('container', container);
	registerTable('commonItems', commonItems);
	registerTable('luxuryItems', luxuryItems);
	registerTable('animali', animals);
	registerTable('strumenti', musicalInstruments);
	registerTable('classi', classTable);
	registerTable('weapons', weapons);
	registerTable('clothes', clothes);
	registerTable('hats', hats);
	registerTable('background', backgroundTable);
	registerTable('piecesOfEight', piecesOfEight);
	registerTable('distinctiveFlaw', distinctiveFlaw);
	registerTable('physicalPeculiarity', physicalPeculiarity);
	registerTable('idiosyncrasy', idiosyncrasy);
	registerTable('misfortunes', misfortunes);
	registerTable('preciousThings', preciousThings);
}
