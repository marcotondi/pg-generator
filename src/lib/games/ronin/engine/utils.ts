import { CharacterClass } from "./types";
import type { Armor } from "./types";
import { armorsByRoll } from "./i18n-armor";

export type HonourState = "honourable" | "dishonourable" | "none";

export function getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

export function rollDice(numberOfDice: number, sides: number, honourState: HonourState = "none"): number {
    let total = 0;
    for (let i = 0; i < numberOfDice; i++) {
        total += Math.floor(Math.random() * sides) + 1;
    }
    if (numberOfDice === 3) {
        if (honourState === "honourable") {
            total += 1;
        } else if (honourState === "dishonourable") {
            total -= 1;
        }
    }
    return total;
}

export function getAbilityModifier(score: number): number {
    if (score <= 4) return -3;
    if (score <= 6) return -2;
    if (score <= 8) return -1;
    if (score <= 12) return 0;
    if (score <= 14) return 1;
    if (score <= 16) return 2;
    return 3;
}

export function determineArmorBasedOnRoll(roll: number): Armor {
    const tierArmors = armorsByRoll[roll];
    return tierArmors[Math.floor(Math.random() * tierArmors.length)];
}

export function rollForEquipment(equipmentMap: Map<number, string>, selectedClass: CharacterClass): string {
    let roll: number;
    let equipment: string | undefined;
    let attempts = 0;
    const maxAttempts = 10;
    do {
        roll = rollDice(1, equipmentMap.size);
        equipment = equipmentMap.get(roll);
        attempts++;
    } while ((selectedClass === CharacterClass.Onmyoji || selectedClass === CharacterClass.Yamabushi) && equipment === 'characterGenerator.equipmentMap.unseenText' && attempts < maxAttempts);
    return equipment || "";
}